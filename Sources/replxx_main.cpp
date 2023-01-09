#include "lzokay.hpp"
#include <cstring>
#include <fmt/core.h>
#include "zstd.h"
#include "c-api.c"


int compress_and_decompress(const uint8_t* data, std::size_t length) {
	lzokay::EResult error;

	/* This variable and 6th parameter of compress() is optional, but may
	* be reused across multiple compression runs; avoiding repeat
	* allocation/deallocation of the work memory used by the compressor.
	*/
	lzokay::Dict<> dict;

	std::size_t estimated_size = lzokay::compress_worst_size(length);
	std::unique_ptr<uint8_t[]> compressed(new uint8_t[estimated_size]);
	std::size_t compressed_size;
	error = lzokay::compress(data, length, compressed.get(), estimated_size,
							compressed_size, dict);
	if (error < lzokay::EResult::Success)
		return 1;

	std::unique_ptr<uint8_t[]> decompressed(new uint8_t[length]);
	std::size_t decompressed_size;
	error = lzokay::decompress(compressed.get(), compressed_size,
								decompressed.get(), length, decompressed_size);
	if (error < lzokay::EResult::Success)
		return 1;

	if (std::memcmp(data, decompressed.get(), decompressed_size) != 0)
		return 1;

	fmt::print("Hello, world!\n");

	return 0;

}

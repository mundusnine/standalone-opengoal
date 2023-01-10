#!/usr/bin/env bash
#Run me in the jak-project repo
git checkout origin/HEAD -- common/kfile.js
git checkout origin/HEAD -- goalc/kfile.js

git checkout origin/HEAD -- third-party/SQLiteCpp/kfile.js
git checkout origin/HEAD -- third-party/SQLiteCpp/sqlite3/kfile.js
git checkout origin/HEAD -- third-party/fmt/kfile.js
git checkout origin/HEAD -- third-party/lzokay/kfile.js
git checkout origin/HEAD -- third-party/replxx/kfile.js
git checkout origin/HEAD -- third-party/stb_image/kfile.js
git checkout origin/HEAD -- third-party/tiny_gltf/kfile.js
git checkout origin/HEAD -- third-party/zstd/kfile.js
git checkout origin/HEAD -- third-party/zydis/kfile.js
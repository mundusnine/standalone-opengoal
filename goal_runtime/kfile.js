// const fs = require('fs');
// let project = new Project('goalc');

// await project.addProject('Libraries/jak-project/game');

// project.addFile('Sources/**');
// project.setDebugDir('Deployment');

// project.flatten();

// resolve(project);


// test replxx
// let project = new Project('test_replxx');
// project.addIncludeDir('Libraries/jak-project/third-party/replxx/examples');
// // project.addIncludeDir('Libraries/jak-project/third-party/replxx/include');
// await project.addProject('Libraries/jak-project/third-party/replxx');
// project.addFile('Sources/replxx_main.cpp');
// project.setCmd();
// project.addCppFlag('-fpermissive');
// project.kore = false;


// //test lzokay
// await project.addProject('Libraries/jak-project/third-party/lzokay');

// //test fmt
// await project.addProject('Libraries/jak-project/third-party/fmt');

// //test zstd
// await project.addProject('Libraries/jak-project/third-party/zstd');

// let project = new Project('test_common');
// project.addFile('Sources/common_main.cpp');
// project.setCmd();
// project.kore = false;

// await project.addProject('Libraries/jak-project/common');
// await project.addProject('Libraries/jak-project/third-party/SQLiteCpp');
// await project.addProject('Libraries/jak-project/third-party/zydis');

let project = new Project('gc');
await project.addProject('../Libraries/jak-project/goalc');

project.setDebugDir('Deployment');

project.flatten();

resolve(project);
let project = new Project('New Project');

await project.addProject('Kinc');

project.addFile('Sources/**');
project.setDebugDir('Deployment');

project.flatten();

resolve(project);

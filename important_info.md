- https://opengoal.dev/docs/reference/language_basics
- https://all-things-andy-gavin.com/2011/03/12/making-crash-bandicoot-gool-part-9/
- https://web.archive.org/web/20220520192410/https://blog.jakspeedruns.com/opengoal-project-update-september-2020/


Info from the creator(water111):
- I think you could take our repository, delete the decompiler folder, and delete goal_src/jak1/engine and goal_src/jak1/levels, and that would "work"
Info from peepeepoopoo:
you can, but im not sure what you mean by "separate the opengoal source from the jak project"
[10:58 AM]mundusnine: Right now the source for the OpenGOAL compiler/debugger/etc. is intertwined with the jak's project(which makes sense when implementing only for jaks 1) but since jaks 2 is planned and it would be interesting to add OpenGoal to other engines having the base source in it's own git project would make more sense and add the git project as a submodule of jak 1 and eventually jak2
[11:00 AM]The Peepee Poopoo Man: this is already supported
[11:00 AM]The Peepee Poopoo Man: it's really hard to have a "base" though
[11:00 AM]The Peepee Poopoo Man: it'd also get really confusing to manage
[11:01 AM]The Peepee Poopoo Man: https://github.com/open-goal/jak-project/tree/master/goal_src
https://github.com/open-goal/jak-project/tree/master/game/kernel
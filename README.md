# Teeworlds Web Edition

This is the homepage of the unofficial web version of
[Teeworlds](https://www.teeworlds.com/), compiled with [Cheerp](https://leaningtech.com/cheerp/).

You can play the game at https://teeworlds.leaningtech.com/.

Teeworlds originally is a C++ multiplayer desktop game, what it means for it to have a web version?

+ the original C++ code has been compiled to a combination of Javascript and WebAssembly, so to be executable inside any (modern) browser while maintaining the original logic
+ players connect directly with each other through WebRTC. One player takes double duty as player and server, and anyone connecting through the unique server link joins the game
+ this is all working without a centralized server, but to allow players to discover joinable games, server links are collected on a centralized server list

Known limitations:
+ decent connection + mouse + keyboard will allow the best playing experience
+ mobile access to the game is currently restricted

Any bug / suggestion / feedback, either LINK_TO_RELEVANT_REDDIT_PAGE or open a Issues directly on github.

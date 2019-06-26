# Teeworlds Web Edition

This is the homepage of the unofficial web version of
[Teeworlds](https://www.teeworlds.com/), compiled with [Cheerp](https://leaningtech.com/cheerp/).

You can play the game at https://teeworlds.leaningtech.com/.

Teeworlds originally is a C++ multiplayer desktop game, what it means for it to have a web version?

+ The original C++ code has been compiled to a combination of Javascript and WebAssembly, so to be executable inside any (modern) browser while maintaining the original logic
+ Players connect directly with each other through WebRTC. One player takes double duty as player and server, and anyone connecting through the unique server link joins the game
+ The game itself works without centralized servers. Listing the servers and WebRTC signaling happens over a cloud database.

Known limitations:
+ Decent connection + mouse + keyboard will allow the best playing experience
+ This game is not designed to run on mobile

For any bug / suggestion / feedback just open an Issue here on github.

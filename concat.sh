#!/bin/bash

cat src/pre.js

if [ "$NODE_ENV" == "production" ]; then
  cat src/env_prod.js
else
  cat src/env_dev.js 
fi;

# libs...
cat src/lib/audio.js
cat src/lib/jsfxr.js

# game
cat src/hero.js
cat src/martian.js
cat src/bullet.js
cat src/keyEvents.js
cat src/setup.js
cat src/gameLoop.js
cat src/post.js

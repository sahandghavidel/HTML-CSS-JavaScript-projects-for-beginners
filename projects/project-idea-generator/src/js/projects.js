let projects = [
  {
    "title": "Build Your Own Text Editor",
    "link": "https://viewsourcecode.org/snaptoken/kilo/index.html"
  },
  {
    "title": "Let's Build a Simple Database",
    "link": "https://cstack.github.io/db_tutorial"
  },
  {
    "title": "Build a spell-checker in Clojure",
    "link": "https://bernhardwenzel.com/articles/clojure-spellchecker/"
  },
  {
    "title": "Build a Twitter Bot in Clojure",
    "link": "https://howistart.org/posts/clojure/1/index.html"
  },
  {
    "title": "Build an Intrpreter",
    "link": "https://www.craftinginterpreters.com/"
  },
  {
    "title": "Write a Shell in C",
    "link": "https://brennan.io/2015/01/16/write-a-shell-in-c/"
  },
  {
    "title": "Build your own Lisp",
    "link": "http://www.buildyourownlisp.com/"
  },
  {
    "title": "Write an OS from scratch",
    "link": "https://github.com/tuhdo/os01"
  },
  {
    "title": "How to create an OS from scratch",
    "link": "https://github.com/cfenollosa/os-tutorial"
  },
  {
    "title": "Building a Simple Chat App With Elixir and Phoenix",
    "link": "https://sheharyar.me/blog/simple-chat-phoenix-elixir/"
  },
  {
    "title": "Write a super fast link shortener with Elixir, Phoenix, and Mnesia",
    "link": "https://medium.com/free-code-camp/how-to-write-a-super-fast-link-shortener-with-elixir-phoenix-and-mnesia-70ffa1564b3c"
  },
  {
    "title": "Write your own Excel in 100 lines of F#",
    "link": "http://tomasp.net/blog/2018/write-your-own-excel/"
  },
  {
    "title": "ChatBus : build your first multi-user chat room app with Erlang/OTP",
    "link": "https://medium.com/@kansi/chatbus-build-your-first-multi-user-chat-room-app-with-erlang-otp-b55f72064901"
  },
  {
    "title": "How to Write a Jupyter Notebook Extension",
    "link": "https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c"
  },
  {
    "title": "Build a React Native Todo Application",
    "link": "https://egghead.io/courses/build-a-react-native-todo-application"
  },
  {
    "title": "How to build a news app with React Native",
    "link": "https://www.freecodecamp.org/news/create-a-news-app-using-react-native-ced249263627/"
  },
  {
    "title": "Reverse a String",
    "link": ""
  },
  {
    "title": "RSS Feed Creator",
    "link": ""
  },
  {
    "title": "P2P File Sharing App",
    "link": ""
  },
  {
    "title": "Hotel Reservation System",
    "link": ""
  },
  {
    "title": "WYSIWG Editor",
    "link": ""
  },
  {
    "title": "CAPTCHA Maker",
    "link": ""
  },
  {
    "title": "Build the Hangman game",
    "link": ""
  },
  {
    "title": "Build a microblog with Flask",
    "link": "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world"
  },
  {
    "title": "Mining Twitter Data with Python",
    "link": "https://marcobonzanini.com/2015/03/02/mining-twitter-data-with-python-part-1/"
  },
  {
    "title": "Build a Job Scrapping Web App",
    "link": "https://www.freecodecamp.org/news/how-i-built-a-job-scraping-web-app-using-node-js-and-indreed-7fbba124bbdc/"
  },
  {
    "title": "Create a Character voting app",
    "link": "http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/"
  },
  {
    "title": "Build Git from Scratch",
    "link": "http://gitlet.maryrosecook.com/docs/gitlet.html"
  },
  {
    "title": "Build a TCP/IP stack in C",
    "link": "https://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/"
  },
  {
    "title": "Build a Network Stack in Ruby",
    "link": "https://medium.com/geckoboard-under-the-hood/how-to-build-a-network-stack-in-ruby-f73aeb1b661b"
  },
  {
    "title": "C++: Introduction to Ray Tracing: a Simple Method for Creating 3D Images",
    "link": "https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-ray-tracing/how-does-it-work"
  },
  {
    "title": "C++: How OpenGL works: software rendering in 500 lines of code",
    "link": "https://github.com/ssloy/tinyrenderer/wiki"
  },
  {
    "title": "C++: Raycasting engine of Wolfenstein 3D",
    "link": "http://lodev.org/cgtutor/raycasting.html"
  },
  {
    "title": "C++: Physically Based Rendering:From Theory To Implementation",
    "link": "http://www.pbr-book.org/"
  },
  {
    "title": "C++: Rasterization: a Practical Implementation",
    "link": "https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm"
  },
  {
    "title": "C# / TypeScript / JavaScript: Learning how to write a 3D soft engine from scratch in C#, TypeScript or JavaScript",
    "link": "https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/"
  },
  {
    "title": "Java / JavaScript: Build your own 3D renderer",
    "link": "https://avik-das.github.io/build-your-own-raytracer/"
  },
  {
    "title": "Java: How to create your own simple 3D render engine in pure Java",
    "link": "http://blog.rogach.org/2015/08/how-to-create-your-own-simple-3d-render.html"
  },
  {
    "title": "JavaScript / Pseudocode: Computer Graphics from scratch",
    "link": "http://www.gabrielgambetta.com/computer-graphics-from-scratch/introduction.html"
  },
  {
    "title": "Python: A 3D Modeller",
    "link": "http://aosabook.org/en/500L/a-3d-modeller.html"
  },
  {
    "title": "C#: How To: Augmented Reality App Tutorial for Beginners with Vuforia and Unity 3D",
    "link": "https://www.youtube.com/watch?v=uXNjNcqW4kY"
  },
  {
    "title": "C#: How To Unity ARCore",
    "link": "https://www.youtube.com/playlist?list=PLKIKuXdn4ZMjuUAtdQfK1vwTZPQn_rgSv"
  },
  {
    "title": "C#: AR Portal Tutorial with Unity",
    "link": "https://www.youtube.com/playlist?list=PLPCqNOwwN794Gz5fzUSi1p4OqLU0HTmvn"
  },
  {
    "title": "C#: How to create a Dragon in Augmented Reality in Unity ARCore",
    "link": "https://fr-film.net/v-how-to-create-a-dragon-in-augmented-reality-in-unity-arcore-tutorial-qTSDPkPyPqs.html"
  },
  {
    "title": "C#: How to Augmented Reality AR Tutorial: ARKit Portal to the Upside Down",
    "link": "https://www.youtube.com/watch?v=Z5AmqMuNi08"
  },
  {
    "title": "Python: Augmented Reality with Python and OpenCV",
    "link": "https://bitesofcode.wordpress.com/2017/09/12/augmented-reality-with-python-and-opencv-part-1/"
  },
  {
    "title": "C#: Building a BitTorrent client from scratch in C#",
    "link": "https://www.seanjoflynn.com/research/bittorrent.html"
  },
  {
    "title": "Go: Building a BitTorrent client from the ground up in Go",
    "link": "https://blog.jse.li/posts/torrent/"
  },
  {
    "title": "Nim: Writing a Bencode Parser",
    "link": "https://xmonader.github.io/nimdays/day02_bencode.html"
  },
  {
    "title": "Node.js: Write your own bittorrent client",
    "link": "https://allenkim67.github.io/programming/2016/05/04/how-to-make-your-own-bittorrent-client.html"
  },
  {
    "title": "Python: A BitTorrent client in Python 3.5",
    "link": "http://markuseliasson.se/article/bittorrent-in-python/"
  },
  {
    "title": "ATS: Functional Blockchain",
    "link": "https://beta.observablehq.com/@galletti94/functional-blockchain"
  },
  {
    "title": "C#: Programming The Blockchain in C#",
    "link": "https://programmingblockchain.gitbooks.io/programmingblockchain/"
  },
  {
    "title": "Crystal: Write your own blockchain and PoW algorithm using Crystal",
    "link": "https://medium.com/@bradford_hamilton/write-your-own-blockchain-and-pow-algorithm-using-crystal-d53d5d9d0c52"
  },
  {
    "title": "Go: Building Blockchain in Go",
    "link": "https://jeiwan.cc/posts/building-blockchain-in-go-part-1/"
  },
  {
    "title": "Go: Code your own blockchain in less than 200 lines of Go",
    "link": "https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc"
  },
  {
    "title": "Java: Creating Your First Blockchain with Java",
    "link": "https://medium.com/programmers-blockchain/create-simple-blockchain-java-tutorial-from-scratch-6eeed3cb03fa"
  },
  {
    "title": "JavaScript: A cryptocurrency implementation in less than 1500 lines of code",
    "link": "https://github.com/conradoqg/naivecoin"
  },
  {
    "title": "JavaScript: Build your own Blockchain in JavaScript",
    "link": "https://github.com/nambrot/blockchain-in-js"
  },
  {
    "title": "JavaScript: Learn & Build a JavaScript Blockchain",
    "link": "https://medium.com/digital-alchemy-holdings/learn-build-a-javascript-blockchain-part-1-ca61c285821e"
  },
  {
    "title": "JavaScript: Creating a blockchain with JavaScript",
    "link": "https://github.com/SavjeeTutorials/SavjeeCoin"
  },
  {
    "title": "JavaScript: How To Launch Your Own Production-Ready Cryptocurrency",
    "link": "https://hackernoon.com/how-to-launch-your-own-production-ready-cryptocurrency-ab97cb773371"
  },
  {
    "title": "JavaScript: Writing a Blockchain in Node.js",
    "link": "https://www.jsmonday.dev/articles/34/writing-a-blockchain-in-node-js"
  },
  {
    "title": "Kotlin: Let’s implement a cryptocurrency in Kotlin",
    "link": "https://medium.com/@vasilyf/lets-implement-a-cryptocurrency-in-kotlin-part-1-blockchain-8704069f8580"
  },
  {
    "title": "Python: Learn Blockchains by Building One",
    "link": "https://hackernoon.com/learn-blockchains-by-building-one-117428612f46"
  },
  {
    "title": "Python: Build your own blockchain: a Python tutorial",
    "link": "http://ecomunsing.com/build-your-own-blockchain"
  },
  {
    "title": "Python: A Practical Introduction to Blockchain with Python",
    "link": "http://adilmoujahid.com/posts/2018/03/intro-blockchain-bitcoin-python/"
  },
  {
    "title": "Python: Let’s Build the Tiniest Blockchain",
    "link": "https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b"
  },
  {
    "title": "Ruby: Programming Blockchains Step-by-Step (Manuscripts Book Edition)",
    "link": "https://github.com/yukimotopress/programming-blockchains-step-by-step"
  },
  {
    "title": "Scala: How to build a simple actor-based blockchain",
    "link": "https://medium.freecodecamp.org/how-to-build-a-simple-actor-based-blockchain-aac1e996c177"
  },
  {
    "title": "TypeScript: Naivecoin: a tutorial for building a cryptocurrency",
    "link": "https://lhartikk.github.io/"
  },
  {
    "title": "TypeScript: NaivecoinStake: a tutorial for building a cryptocurrency with the Proof of Stake consensus",
    "link": "https://naivecoinstake.learn.uno/"
  },
  {
    "title": "Haskell: Roll your own IRC bot",
    "link": "https://wiki.haskell.org/Roll_your_own_IRC_bot"
  },
  {
    "title": "Java: How To Make a Scary Russian Twitter Bot With Java",
    "link": "https://medium.com/@SeloSlav/how-to-make-a-scary-russian-twitter-bot-with-java-b7b62768a3ac"
  },
  {
    "title": "Node.js: Creating a Simple Facebook Messenger AI Bot with API.ai in Node.js",
    "link": "https://tutorials.botsfloor.com/creating-a-simple-facebook-messenger-ai-bot-with-api-ai-in-node-js-50ae2fa5c80d"
  },
  {
    "title": "Node.js: How to make a responsive telegram bot",
    "link": "https://www.sohamkamani.com/blog/2016/09/21/making-a-telegram-bot/"
  },
  {
    "title": "Node.js: Create a Discord bot",
    "link": "https://discordjs.guide/"
  },
  {
    "title": "Node.js: gifbot - Building a GitHub App",
    "link": "https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html"
  },
  {
    "title": "Node.js: Building A Simple AI Chatbot With Web Speech API And Node.js",
    "link": "https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js/"
  },
  {
    "title": "Python: Chatbot Fundamentals: An interactive guide to writing bots in Python",
    "link": "https://apps.worldwritable.com/tutorials/chatbot/"
  },
  {
    "title": "Python: How to Build Your First Slack Bot with Python",
    "link": "https://www.fullstackpython.com/blog/build-first-slack-bot-python.html"
  },
  {
    "title": "Python: How to build a Slack Bot with Python using Slack Events API & Django under 20 minute",
    "link": "https://medium.com/freehunch/how-to-build-a-slack-bot-with-python-using-slack-events-api-django-under-20-minute-code-included-269c3a9bf64e"
  },
  {
    "title": "Python: Build a Reddit Bot",
    "link": "http://pythonforengineers.com/build-a-reddit-bot-part-1/"
  },
  {
    "title": "Python: How To Make A Reddit Bot",
    "link": "https://www.youtube.com/watch?v=krTUf7BpTc0"
  },
  {
    "title": "Python: How To Create a Telegram Bot Using Python",
    "link": "https://khashtamov.com/en/how-to-create-a-telegram-bot-using-python/"
  },
  {
    "title": "Python: Create a Twitter Bot in Python Using Tweepy",
    "link": "https://medium.freecodecamp.org/creating-a-twitter-bot-in-python-with-tweepy-ac524157a607"
  },
  {
    "title": "Python: Creating Reddit Bot with Python & PRAW",
    "link": "https://www.youtube.com/playlist?list=PLIFBTFgFpoJ9vmYYlfxRFV6U_XhG-4fpP"
  },
  {
    "title": "R: Build A Cryptocurrency Trading Bot with R",
    "link": "https://towardsdatascience.com/build-a-cryptocurrency-trading-bot-with-r-1445c429e1b1"
  },
  {
    "title": "Rust: A bot for Starcraft in Rust, C or any other language",
    "link": "https://habr.com/en/post/436254/"
  },
  {
    "title": "C: Rewriting the cat command from scratch",
    "link": "https://learnto.computer/screencasts/bsd-cat"
  },
  {
    "title": "Go: Visualize your local git contributions with Go",
    "link": "https://flaviocopes.com/go-git-contributions/"
  },
  {
    "title": "Go: Build a command line app with Go: lolcat",
    "link": "https://flaviocopes.com/go-tutorial-lolcat/"
  },
  {
    "title": "Go: Building a cli command with Go: cowsay",
    "link": "https://flaviocopes.com/go-tutorial-cowsay/"
  },
  {
    "title": "Go: Go CLI tutorial: fortune clone",
    "link": "https://flaviocopes.com/go-tutorial-fortune/"
  },
  {
    "title": "Nim: Writing a stow alternative to manage dotfiles",
    "link": "https://xmonader.github.io/nimdays/day06_nistow.html"
  },
  {
    "title": "C: Let's Build a Simple Database",
    "link": "https://cstack.github.io/db_tutorial/"
  },
  {
    "title": "C++: Implementing a Key-Value Store",
    "link": "http://codecapsule.com/2012/11/07/ikvs-implementing-a-key-value-store-table-of-contents/"
  },
  {
    "title": "C#: Build Your Own Database",
    "link": "https://www.codeproject.com/Articles/1029838/Build-Your-Own-Database"
  },
  {
    "title": "Clojure: An Archaeology-Inspired Database",
    "link": "http://aosabook.org/en/500L/an-archaeology-inspired-database.html"
  },
  {
    "title": "Crystal: Why you should build your own NoSQL Database",
    "link": "https://medium.com/@marceloboeira/why-you-should-build-your-own-nosql-database-9bbba42039f5"
  },
  {
    "title": "JavaScript: Dagoba: an in-memory graph database",
    "link": "http://aosabook.org/en/500L/dagoba-an-in-memory-graph-database.html"
  },
  {
    "title": "Python: DBDB: Dog Bed Database",
    "link": "http://aosabook.org/en/500L/dbdb-dog-bed-database.html"
  },
  {
    "title": "Python: Write your own miniature Redis with Python",
    "link": "http://charlesleifer.com/blog/building-a-simple-redis-server-with-python/"
  },
  {
    "title": "C: Linux containers in 500 lines of code",
    "link": "https://blog.lizzie.io/linux-containers-in-500-loc.html"
  },
  {
    "title": "Go: Build Your Own Container Using Less than 100 Lines of Go",
    "link": "https://www.infoq.com/articles/build-a-container-golang"
  },
  {
    "title": "Go: Building a container from scratch in Go",
    "link": "https://www.youtube.com/watch?v=8fi7uSYlOdc"
  },
  {
    "title": "Python: A workshop on Linux containers: Rebuild Docker from Scratch",
    "link": "https://github.com/Fewbytes/rubber-docker"
  },
  {
    "title": "Python: A proof-of-concept imitation of Docker, written in 100% Python",
    "link": "https://github.com/tonybaloney/mocker"
  },
  {
    "title": "Shell: Docker implemented in around 100 lines of bash",
    "link": "https://github.com/p8952/bocker"
  },
  {
    "title": "C: Virtual machine in C",
    "link": "https://blog.felixangell.com/virtual-machine-in-c/"
  },
  {
    "title": "C: Write your Own Virtual Machine",
    "link": "https://justinmeiners.github.io/lc3-vm/"
  },
  {
    "title": "C: Writing a Game Boy emulator, Cinoop",
    "link": "https://cturt.github.io/cinoop.html"
  },
  {
    "title": "C++: How to write an emulator (CHIP-8 interpreter)",
    "link": "http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/"
  },
  {
    "title": "C++: Emulation tutorial (CHIP-8 interpreter)",
    "link": "http://www.codeslinger.co.uk/pages/projects/chip8.html"
  },
  {
    "title": "C++: Emulation tutorial (GameBoy emulator)",
    "link": "http://www.codeslinger.co.uk/pages/projects/gameboy.html"
  },
  {
    "title": "C++: Emulation tutorial (Master System emulator)",
    "link": "http://www.codeslinger.co.uk/pages/projects/mastersystem/memory.html"
  },
  {
    "title": "Common Lisp: CHIP-8 in Common Lisp",
    "link": "http://stevelosh.com/blog/2016/12/chip8-cpu/"
  },
  {
    "title": "JavaScript: GameBoy Emulation in JavaScript",
    "link": "http://imrannazar.com/GameBoy-Emulation-in-JavaScript"
  },
  {
    "title": "Python: Emulation Basics: Write your own Chip 8 Emulator/Interpreter",
    "link": "http://omokute.blogspot.com.br/2012/06/emulation-basics-write-your-own-chip-8.html"
  },
  {
    "title": "JavaScript: WTF is JSX (Let's Build a JSX Renderer)",
    "link": "https://jasonformat.com/wtf-is-jsx/"
  },
  {
    "title": "JavaScript: A DIY guide to build your own React",
    "link": "https://github.com/hexacta/didact"
  },
  {
    "title": "JavaScript: Reverse Engineering React",
    "link": "https://vimeo.com/album/3930691"
  },
  {
    "title": "JavaScript: Building React From Scratch",
    "link": "https://www.youtube.com/watch?v=_MAD4Oly9yg"
  },
  {
    "title": "JavaScript: Building Your Own React Clone in Five Easy Steps",
    "link": "https://blog.javascripting.com/2016/10/05/building-your-own-react-clone-in-five-easy-steps/"
  },
  {
    "title": "JavaScript: Gooact: React in 160 lines of JavaScript",
    "link": "https://medium.com/@sweetpalma/gooact-react-in-160-lines-of-javascript-44e0742ad60f"
  },
  {
    "title": "JavaScript: React Internals",
    "link": "http://www.mattgreer.org/articles/react-internals-part-one-basic-rendering/"
  },
  {
    "title": "JavaScript: Learn how React Reconciler package works by building your own lightweight React DOM",
    "link": "https://hackernoon.com/learn-you-some-custom-react-renderers-aed7164a4199"
  },
  {
    "title": "JavaScript: Build Yourself a Redux",
    "link": "https://zapier.com/engineering/how-to-build-redux/"
  },
  {
    "title": "JavaScript: Let’s Write Redux!",
    "link": "https://www.jamasoftware.com/blog/lets-write-redux/"
  },
  {
    "title": "JavaScript: Redux: Implementing Store from Scratch",
    "link": "https://egghead.io/lessons/react-redux-implementing-store-from-scratch"
  },
  {
    "title": "JavaScript: Build Your own Simplified AngularJS in 200 Lines of JavaScript",
    "link": "https://blog.mgechev.com/2015/03/09/build-learn-your-own-light-lightweight-angularjs/"
  },
  {
    "title": "JavaScript: Make Your Own AngularJS",
    "link": "http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html"
  },
  {
    "title": "JavaScript: How to write your own Virtual DOM",
    "link": "https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060"
  },
  {
    "title": "JavaScript: Building a frontend framework, from scratch, with components (templating, state, VDOM)",
    "link": "https://mfrachet.github.io/create-frontend-framework/"
  },
  {
    "title": "JavaScript: Build your own React",
    "link": "https://pomb.us/build-your-own-react/"
  },
  {
    "title": "C: Handmade Hero",
    "link": "https://handmadehero.org/"
  },
  {
    "title": "C: How to Program an NES game in C",
    "link": "https://nesdoug.com/"
  },
  {
    "title": "C: Chess Engine In C",
    "link": "https://www.youtube.com/playlist?list=PLZ1QII7yudbc-Ky058TEaOstZHVbT-2hg"
  },
  {
    "title": "C: Let's Make: Dangerous Dave",
    "link": "https://www.youtube.com/playlist?list=PLSkJey49cOgTSj465v2KbLZ7LMn10bCF9"
  },
  {
    "title": "C: Learn Video Game Programming in C",
    "link": "https://www.youtube.com/playlist?list=PLT6WFYYZE6uLMcPGS3qfpYm7T_gViYMMt"
  },
  {
    "title": "C: Coding A Sudoku Solver in C",
    "link": "https://www.youtube.com/playlist?list=PLkTXsX7igf8edTYU92nU-f5Ntzuf-RKvW"
  },
  {
    "title": "C: Coding a Rogue/Nethack RPG in C",
    "link": "https://www.youtube.com/playlist?list=PLkTXsX7igf8erbWGYT4iSAhpnJLJ0Nk5G"
  },
  {
    "title": "C: On Tetris and Reimplementation",
    "link": "https://brennan.io/2015/06/12/tetris-reimplementation/"
  },
  {
    "title": "C++: Breakout",
    "link": "https://learnopengl.com/In-Practice/2D-Game/Breakout"
  },
  {
    "title": "C++: Beginning Game Programming v2.0",
    "link": "http://lazyfoo.net/tutorials/SDL/"
  },
  {
    "title": "C++: Tetris tutorial in C++ platform independent focused in game logic for beginners",
    "link": "http://javilop.com/gamedev/tetris-tutorial-in-c-platform-independent-focused-in-game-logic-for-beginners/"
  },
  {
    "title": "C++: Remaking Cavestory in C++",
    "link": "https://www.youtube.com/watch?v=ETvApbD5xRo&list=PLNOBk_id22bw6LXhrGfhVwqQIa-M2MsLa"
  },
  {
    "title": "C++: Reconstructing Cave Story",
    "link": "https://www.youtube.com/playlist?list=PL006xsVEsbKjSKBmLu1clo85yLrwjY67X"
  },
  {
    "title": "C++: Space Invaders from Scratch",
    "link": "http://nicktasios.nl/posts/space-invaders-from-scratch-part-1.html"
  },
  {
    "title": "C#: Learn C# by Building a Simple RPG",
    "link": "http://scottlilly.com/learn-c-by-building-a-simple-rpg-index/"
  },
  {
    "title": "C#: Creating a Roguelike Game in C#",
    "link": "https://roguesharp.wordpress.com/"
  },
  {
    "title": "C#: Build a C#/WPF RPG",
    "link": "https://scottlilly.com/build-a-cwpf-rpg/"
  },
  {
    "title": "Go: Games With Go",
    "link": "https://gameswithgo.org/"
  },
  {
    "title": "Java: 3D Game Development with LWJGL 3",
    "link": "https://lwjglgamedev.gitbooks.io/3d-game-development-with-lwjgl/content/"
  },
  {
    "title": "JavaScript: 2D breakout game using Phaser",
    "link": "https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser"
  },
  {
    "title": "JavaScript: How to Make Flappy Bird in HTML5 With Phaser",
    "link": "http://www.lessmilk.com/tutorial/flappy-bird-phaser-1"
  },
  {
    "title": "JavaScript: Developing Games with React, Redux, and SVG",
    "link": "https://auth0.com/blog/developing-games-with-react-redux-and-svg-part-1/"
  },
  {
    "title": "JavaScript: Build your own 8-Ball Pool game from scratch",
    "link": "https://www.youtube.com/watch?v=aXwCrtAo4Wc"
  },
  {
    "title": "JavaScript: How to Make Your First Roguelike",
    "link": "https://gamedevelopment.tutsplus.com/tutorials/how-to-make-your-first-roguelike--gamedev-13677"
  },
  {
    "title": "JavaScript: Think like a programmer: How to build Snake using only JavaScript, HTML & CSS",
    "link": "https://medium.freecodecamp.org/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e"
  },
  {
    "title": "Lua: BYTEPATH",
    "link": "https://github.com/SSYGEN/blog/issues/30"
  },
  {
    "title": "Python: Developing Games With PyGame",
    "link": "https://pythonprogramming.net/pygame-python-3-part-1-intro/"
  },
  {
    "title": "Python: Making Games with Python & Pygame",
    "link": "https://inventwithpython.com/makinggames.pdf [pdf]"
  },
  {
    "title": "Python: The Complete Roguelike Tutorial",
    "link": "https://www.youtube.com/playlist?list=PLKUel_nHsTQ1yX7tQxR_SQRdcOFyXfNAb"
  },
  {
    "title": "Python: Roguelike Tutorial Revised",
    "link": "http://rogueliketutorials.com/"
  },
  {
    "title": "Ruby: Developing Games With Ruby",
    "link": "https://leanpub.com/developing-games-with-ruby/read"
  },
  {
    "title": "Ruby: Ruby Snake",
    "link": "https://www.diatomenterprises.com/gamedev-on-ruby-why-not/"
  },
  {
    "title": "Rust: Adventures in Rust: A Basic 2D Game",
    "link": "https://a5huynh.github.io/posts/2018/adventures-in-rust/"
  },
  {
    "title": "Rust: Roguelike Tutorial in Rust + tcod",
    "link": "https://tomassedovic.github.io/roguelike-tutorial/"
  },
  {
    "title": "Haskell: Reimplementing “git clone” in Haskell from the bottom up",
    "link": "http://stefan.saasen.me/articles/git-clone-in-haskell-from-the-bottom-up/"
  },
  {
    "title": "JavaScript: Gitlet",
    "link": "http://gitlet.maryrosecook.com/docs/gitlet.html"
  },
  {
    "title": "JavaScript: Build GIT - Learn GIT",
    "link": "https://kushagragour.in/blog/2014/01/build-git-learn-git/"
  },
  {
    "title": "Python: Just enough of a Git client to create a repo, commit, and push itself to GitHub",
    "link": "https://benhoyt.com/writings/pygit/"
  },
  {
    "title": "Python: Write yourself a Git!",
    "link": "https://wyag.thb.lt/"
  },
  {
    "title": "Ruby: Rebuilding Git in Ruby",
    "link": "https://robots.thoughtbot.com/rebuilding-git-in-ruby"
  },
  {
    "title": "C: Beej's Guide to Network Programming",
    "link": "http://beej.us/guide/bgnet/"
  },
  {
    "title": "C: Let's code a TCP/IP stack",
    "link": "http://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/"
  },
  {
    "title": "Ruby: How to build a network stack in Ruby",
    "link": "https://medium.com/geckoboard-under-the-hood/how-to-build-a-network-stack-in-ruby-f73aeb1b661b"
  },
  {
    "title": "C#: Neural Network OCR",
    "link": "https://www.codeproject.com/Articles/11285/Neural-Network-OCR"
  },
  {
    "title": "F#: Building Neural Networks in F#",
    "link": "https://towardsdatascience.com/building-neural-networks-in-f-part-1-a2832ae972e6"
  },
  {
    "title": "Go: Build a multilayer perceptron with Golang",
    "link": "https://made2591.github.io/posts/neuralnetwork"
  },
  {
    "title": "Go: How to build a simple artificial neural network with Go",
    "link": "https://sausheong.github.io/posts/how-to-build-a-simple-artificial-neural-network-with-go/"
  },
  {
    "title": "Go: Building a Neural Net from Scratch in Go",
    "link": "https://datadan.io/blog/neural-net-with-go"
  },
  {
    "title": "JavaScript / Java: Neural Networks - The Nature of Code",
    "link": "https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh"
  },
  {
    "title": "JavaScript: Neural Network implementation in JavaScript, by an example",
    "link": "https://franpapers.com/en/machine-learning-ai-en/2017-neural-network-implementation-in-javascript-by-an-example/"
  },
  {
    "title": "JavaScript: Neural networks from scratch for JavaScript linguists (Part1 — The Perceptron)",
    "link": "https://hackernoon.com/neural-networks-from-scratch-for-javascript-linguists-part1-the-perceptron-632a4d1fbad2"
  },
  {
    "title": "Python: A Neural Network in 11 lines of Python",
    "link": "https://iamtrask.github.io/2015/07/12/basic-python-network/"
  },
  {
    "title": "Python: Implement a Neural Network from Scratch",
    "link": "https://victorzhou.com/blog/intro-to-neural-networks/"
  },
  {
    "title": "Python: Optical Character Recognition (OCR)",
    "link": "http://aosabook.org/en/500L/optical-character-recognition-ocr.html"
  },
  {
    "title": "Python: Traffic signs classification with a convolutional network",
    "link": "https://navoshta.com/traffic-signs-classification/"
  },
  {
    "title": "Python: Generate Music using LSTM Neural Network in Keras",
    "link": "https://towardsdatascience.com/how-to-generate-music-using-a-lstm-neural-network-in-keras-68786834d4c5"
  },
  {
    "title": "Python: An Introduction to Convolutional Neural Networks",
    "link": "https://victorzhou.com/blog/intro-to-cnns-part-1/"
  },
  {
    "title": "Assembly: Writing a Tiny x86 Bootloader",
    "link": "http://joebergeron.io/posts/post_two.html"
  },
  {
    "title": "Assembly: Baking Pi – Operating Systems Development",
    "link": "http://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/index.html"
  },
  {
    "title": "C: Building a software and hardware stack for a simple computer from scratch",
    "link": "https://www.youtube.com/watch?v=ZjwvMcP3Nf0&list=PLU94OURih-CiP4WxKSMt3UcwMSDM3aTtX"
  },
  {
    "title": "C: Operating Systems: From 0 to 1",
    "link": "https://tuhdo.github.io/os01/"
  },
  {
    "title": "C: The little book about OS development",
    "link": "https://littleosbook.github.io/"
  },
  {
    "title": "C: Roll your own toy UNIX-clone OS",
    "link": "http://jamesmolloy.co.uk/tutorial_html/"
  },
  {
    "title": "C: Kernel 101 – Let’s write a Kernel",
    "link": "https://arjunsreedharan.org/post/82710718100/kernel-101-lets-write-a-kernel"
  },
  {
    "title": "C: Kernel 201 – Let’s write a Kernel with keyboard and screen support",
    "link": "https://arjunsreedharan.org/post/99370248137/kernel-201-lets-write-a-kernel-with-keyboard"
  },
  {
    "title": "C: Build a minimal multi-tasking kernel for ARM from scratch",
    "link": "https://github.com/jserv/mini-arm-os"
  },
  {
    "title": "C: How to create an OS from scratch",
    "link": "https://github.com/cfenollosa/os-tutorial"
  },
  {
    "title": "C: Malloc tutorial",
    "link": "https://danluu.com/malloc-tutorial/"
  },
  {
    "title": "C: Hack the virtual memory",
    "link": "https://blog.holbertonschool.com/hack-the-virtual-memory-c-strings-proc/"
  },
  {
    "title": "C: Learning operating system development using Linux kernel and Raspberry Pi",
    "link": "https://github.com/s-matyukevich/raspberry-pi-os"
  },
  {
    "title": "C: Operating systems development for Dummies",
    "link": "https://medium.com/@lduck11007/operating-systems-development-for-dummies-3d4d786e8ac"
  },
  {
    "title": "C++: Write your own Operating System",
    "link": "https://www.youtube.com/playlist?list=PLHh55M_Kq4OApWScZyPl5HhgsTJS9MZ6M"
  },
  {
    "title": "C++: Writing a Bootloader",
    "link": "http://3zanders.co.uk/2017/10/13/writing-a-bootloader/"
  },
  {
    "title": "Rust: Writing an OS in Rust",
    "link": "https://os.phil-opp.com/"
  },
  {
    "title": "C: Video Game Physics Tutorial",
    "link": "https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics"
  },
  {
    "title": "C++: Game physics series by Allen Chou",
    "link": "http://allenchou.net/game-physics-series/"
  },
  {
    "title": "C++: How to Create a Custom Physics Engine",
    "link": "https://gamedevelopment.tutsplus.com/series/how-to-create-a-custom-physics-engine--gamedev-12715"
  },
  {
    "title": "C++: 3D Physics Engine Tutorial",
    "link": "https://www.youtube.com/playlist?list=PLEETnX-uPtBXm1KEr_2zQ6K_0hoGH6JJ0"
  },
  {
    "title": "JavaScript: Build your own basic physics engine in JavaScript",
    "link": "https://www.graphitedigital.com/blog/build-your-own-basic-physics-engine-in-javascript"
  },
  {
    "title": "JavaScript: How Physics Engines Work",
    "link": "http://buildnewgames.com/gamephysics/"
  },
  {
    "title": "JavaScript: Broad Phase Collision Detection Using Spatial Partitioning",
    "link": "http://buildnewgames.com/broad-phase-collision-detection/"
  },
  {
    "title": "JavaScript: Build a simple 2D physics engine for JavaScript games",
    "link": "https://www.ibm.com/developerworks/library/wa-build2dphysicsengine/index.html"
  },
  {
    "title": "(any): mal - Make a Lisp",
    "link": "https://github.com/kanaka/mal#mal---make-a-lisp"
  },
  {
    "title": "Assembly: Jonesforth",
    "link": "https://github.com/nornagon/jonesforth/blob/master/jonesforth.S"
  },
  {
    "title": "C: Baby's First Garbage Collector",
    "link": "http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/"
  },
  {
    "title": "C: Build Your Own Lisp: Learn C and build your own programming language in 1000 lines of code",
    "link": "http://www.buildyourownlisp.com/"
  },
  {
    "title": "C: Writing a Simple Garbage Collector in C",
    "link": "http://maplant.com/gc.html"
  },
  {
    "title": "C: C interpreter that interprets itself.",
    "link": "https://github.com/lotabout/write-a-C-interpreter"
  },
  {
    "title": "C: A C & x86 version of the \"Let's Build a Compiler\" by Jack Crenshaw",
    "link": "https://github.com/lotabout/Let-s-build-a-compiler"
  },
  {
    "title": "C++: Writing Your Own Toy Compiler Using Flex",
    "link": "https://gnuu.org/2009/09/18/writing-your-own-toy-compiler/"
  },
  {
    "title": "C++: How to Create a Compiler",
    "link": "https://www.youtube.com/watch?v=eF9qWbuQLuw"
  },
  {
    "title": "C++: Kaleidoscope: Implementing a Language with LLVM",
    "link": "https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html"
  },
  {
    "title": "F#: Understanding Parser Combinators",
    "link": "https://fsharpforfunandprofit.com/posts/understanding-parser-combinators/"
  },
  {
    "title": "Elixir: Demystifying compilers by writing your own",
    "link": "https://www.youtube.com/watch?v=zMJYoYwOCd4"
  },
  {
    "title": "Go: The Super Tiny Compiler",
    "link": "https://github.com/hazbo/the-super-tiny-compiler"
  },
  {
    "title": "Go: Lexical Scanning in Go",
    "link": "https://www.youtube.com/watch?v=HxaD_trXwRE"
  },
  {
    "title": "Haskell: Let's Build a Compiler",
    "link": "https://g-ford.github.io/cradle/"
  },
  {
    "title": "Haskell: Write You a Haskell",
    "link": "http://dev.stephendiehl.com/fun/"
  },
  {
    "title": "Haskell: Write Yourself a Scheme in 48 Hours",
    "link": "https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours"
  },
  {
    "title": "Haskell: Write You A Scheme",
    "link": "https://www.wespiser.com/writings/wyas/home.html"
  },
  {
    "title": "Java: Crafting interpreters: A handbook for making programming languages",
    "link": "http://www.craftinginterpreters.com/"
  },
  {
    "title": "Java: Creating JVM Language",
    "link": "http://jakubdziworski.github.io/categories.html#Enkel-ref"
  },
  {
    "title": "JavaScript: The Super Tiny Compiler",
    "link": "https://github.com/jamiebuilds/the-super-tiny-compiler"
  },
  {
    "title": "JavaScript: The Super Tiny Interpreter",
    "link": "https://github.com/keyanzhang/the-super-tiny-interpreter"
  },
  {
    "title": "JavaScript: Little Lisp interpreter",
    "link": "https://maryrosecook.com/blog/post/little-lisp-interpreter"
  },
  {
    "title": "JavaScript: How to implement a programming language in JavaScript",
    "link": "http://lisperator.net/pltut/"
  },
  {
    "title": "OCaml: Writing a C Compiler",
    "link": "https://norasandler.com/2017/11/29/Write-a-Compiler.html"
  },
  {
    "title": "OCaml: Writing a Lisp, the series",
    "link": "https://bernsteinbear.com/blog/lisp/"
  },
  {
    "title": "Pascal: Let's Build a Compiler",
    "link": "https://compilers.iecc.com/crenshaw/"
  },
  {
    "title": "Python: A Python Interpreter Written in Python",
    "link": "http://aosabook.org/en/500L/a-python-interpreter-written-in-python.html"
  },
  {
    "title": "Python: lisp.py: Make your own Lisp interpreter",
    "link": "http://khamidou.com/compilers/lisp.py/"
  },
  {
    "title": "Python: Simple Iterator-based Parsing",
    "link": "http://effbot.org/zone/simple-iterator-parser.htm"
  },
  {
    "title": "Python: Simple Top-Down Parsing in Python",
    "link": "http://effbot.org/zone/simple-top-down-parsing.htm"
  },
  {
    "title": "Python: How to Write a Lisp Interpreter in Python",
    "link": "http://norvig.com/lispy.html"
  },
  {
    "title": "Python: Let’s Build A Simple Interpreter",
    "link": "https://ruslanspivak.com/lsbasi-part1/"
  },
  {
    "title": "Python: Make Your Own Simple Interpreted Programming Language",
    "link": "https://www.youtube.com/watch?v=dj9CBS3ikGA&list=PLZQftyCk7_SdoVexSmwy_tBgs7P0b97yD&index=1"
  },
  {
    "title": "Racket: Beautiful Racket: How to make your own programming languages with Racket",
    "link": "https://beautifulracket.com/"
  },
  {
    "title": "Ruby: A Compiler From Scratch",
    "link": "https://www.destroyallsoftware.com/screencasts/catalog/a-compiler-from-scratch"
  },
  {
    "title": "Ruby: Markdown compiler from scratch in Ruby",
    "link": "https://blog.beezwax.net/2017/07/07/writing-a-markdown-compiler/"
  },
  {
    "title": "Rust: So You Want to Build a Language VM",
    "link": "https://blog.subnetzero.io/post/building-language-vm-part-00/"
  },
  {
    "title": "Rust: Learning Parser Combinators With Rust",
    "link": "https://bodil.lol/parser-combinators/"
  },
  {
    "title": "Swift: Building a LISP from scratch with Swift",
    "link": "https://www.uraimo.com/2017/02/05/building-a-lisp-from-scratch-with-swift/"
  },
  {
    "title": "TypeScript: Build your own WebAssembly Compiler",
    "link": "https://blog.scottlogic.com/2019/05/17/webassembly-compiler.html"
  },
  {
    "title": "C: A Regular Expression Matcher",
    "link": "https://www.cs.princeton.edu/courses/archive/spr09/cos333/beautiful.html"
  },
  {
    "title": "C: Regular Expression Matching Can Be Simple And Fast",
    "link": "https://swtch.com/~rsc/regexp/regexp1.html"
  },
  {
    "title": "JavaScript: Build a Regex Engine in Less than 40 Lines of Code",
    "link": "https://nickdrane.com/build-your-own-regex/"
  },
  {
    "title": "JavaScript: How to implement regular expressions in functional javascript using derivatives",
    "link": "http://dpk.io/dregs/toydregs"
  },
  {
    "title": "JavaScript: Implementing a Regular Expression Engine",
    "link": "https://deniskyashif.com/2019/02/17/implementing-a-regular-expression-engine/"
  },
  {
    "title": "Perl: How Regexes Work",
    "link": "https://perl.plover.com/Regex/article.html"
  },
  {
    "title": "Scala: No Magic: Regular Expressions",
    "link": "https://rcoh.svbtle.com/no-magic-regular-expressions"
  },
  {
    "title": "CSS: A search engine in CSS",
    "link": "https://stories.algolia.com/a-search-engine-in-css-b5ec4e902e97"
  },
  {
    "title": "Python: Building a search engine using Redis and redis-py",
    "link": "http://www.dr-josiah.com/2010/07/building-search-engine-using-redis-and.html"
  },
  {
    "title": "Python: Building a Vector Space Indexing Engine in Python",
    "link": "https://boyter.org/2010/08/build-vector-space-search-engine-python/"
  },
  {
    "title": "Python: Building A Python-Based Search Engine",
    "link": "https://www.youtube.com/watch?v=cY7pE7vX6MU"
  },
  {
    "title": "Python: Making text search learn from feedback",
    "link": "https://medium.com/filament-ai/making-text-search-learn-from-feedback-4fe210fd87b0"
  },
  {
    "title": "Python: Finding Important Words in Text Using TF-IDF",
    "link": "https://stevenloria.com/tf-idf/"
  },
  {
    "title": "C: Tutorial - Write a Shell in C",
    "link": "https://brennan.io/2015/01/16/write-a-shell-in-c/"
  },
  {
    "title": "C: Let's build a shell!",
    "link": "https://github.com/kamalmarhubi/shell-workshop"
  },
  {
    "title": "C: Writing a UNIX Shell",
    "link": "https://indradhanush.github.io/blog/writing-a-unix-shell-part-1/"
  },
  {
    "title": "C: Build Your Own Shell",
    "link": "https://github.com/tokenrove/build-your-own-shell"
  },
  {
    "title": "Go: Writing a simple shell in Go",
    "link": "https://sj14.gitlab.io/post/2018-07-01-go-unix-shell/"
  },
  {
    "title": "Ruby: A Unix Shell in Ruby",
    "link": "https://www.jstorimer.com/blogs/workingwithcode/7766107-a-unix-shell-in-ruby"
  },
  {
    "title": "Rust: Build Your Own Shell using Rust",
    "link": "https://www.joshmcguigan.com/blog/build-your-own-shell-rust/"
  },
  {
    "title": "JavaScript: JavaScript template engine in just 20 lines",
    "link": "http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line"
  },
  {
    "title": "JavaScript: Understanding JavaScript Micro-Templating",
    "link": "https://medium.com/wdstack/understanding-javascript-micro-templating-f37a37b3b40e"
  },
  {
    "title": "Python: Approach: Building a toy template engine in Python",
    "link": "http://alexmic.net/building-a-template-engine/"
  },
  {
    "title": "Python: A Template Engine",
    "link": "http://aosabook.org/en/500L/a-template-engine.html"
  },
  {
    "title": "Ruby: How to write a template engine in less than 30 lines of code",
    "link": "http://bits.citrusbyte.com/how-to-write-a-template-library/"
  },
  {
    "title": "C: Build Your Own Text Editor",
    "link": "https://viewsourcecode.org/snaptoken/kilo/"
  },
  {
    "title": "C++: Designing a Simple Text Editor",
    "link": "http://www.fltk.org/doc-1.1/editor.html"
  },
  {
    "title": "Python: Python Tutorial: Make Your Own Text Editor",
    "link": "https://www.youtube.com/watch?v=xqDonHEYPgA"
  },
  {
    "title": "Python: Create a Simple Python Text Editor!",
    "link": "http://www.instructables.com/id/Create-a-Simple-Python-Text-Editor/"
  },
  {
    "title": "Ruby: Build a Collaborative Text Editor Using Rails",
    "link": "https://blog.aha.io/text-editor/"
  },
  {
    "title": "Python: Developing a License Plate Recognition System with Machine Learning in Python",
    "link": "https://blog.devcenter.co/developing-a-license-plate-recognition-system-with-machine-learning-in-python-787833569ccd"
  },
  {
    "title": "Python: Building a Facial Recognition Pipeline with Deep Learning in Tensorflow",
    "link": "https://hackernoon.com/building-a-facial-recognition-pipeline-with-deep-learning-in-tensorflow-66e7645015b8"
  },
  {
    "title": "C++: Let's Make a Voxel Engine",
    "link": "https://sites.google.com/site/letsmakeavoxelengine/home"
  },
  {
    "title": "Java: Let's make a voxel engine",
    "link": "https://www.youtube.com/watch?v=C_Fo9PcrVXA&list=PLXa65xzz2vplye7cn1HH4GyE6_FjnDSug&index=1"
  },
  {
    "title": "Java: Java Voxel Engine Tutorial",
    "link": "https://www.youtube.com/watch?v=QZ4Vk2PkPZk&list=PL80Zqpd23vJfyWQi-8FKDbeO_ZQamLKJL"
  },
  {
    "title": "PHP: Code a Search Engine in PHP",
    "link": "https://boyter.org/2013/01/code-for-a-search-engine-in-php-part-1/"
  },
  {
    "title": "Ruby: Write an Internet search engine with 200 lines of Ruby code",
    "link": "https://blog.saush.com/2009/03/17/write-an-internet-search-engine-with-200-lines-of-ruby-code/"
  },
  {
    "title": "C#: Writing a Web Server from Scratch",
    "link": "https://www.codeproject.com/Articles/859108/Writing-a-Web-Server-from-Scratch"
  },
  {
    "title": "Node.js: Let's code a web server from scratch with NodeJS Streams",
    "link": "https://www.codementor.io/ziad-saab/let-s-code-a-web-server-from-scratch-with-nodejs-streams-h4uc9utji"
  },
  {
    "title": "Node.js: lets-build-express",
    "link": "https://github.com/antoaravinth/lets-build-express"
  },
  {
    "title": "PHP: Writing a webserver in pure PHP",
    "link": "http://station.clancats.com/writing-a-webserver-in-pure-php/"
  },
  {
    "title": "Python: A Simple Web Server",
    "link": "http://aosabook.org/en/500L/a-simple-web-server.html"
  },
  {
    "title": "Python: Let’s Build A Web Server.",
    "link": "https://ruslanspivak.com/lsbaws-part1/"
  },
  {
    "title": "Python: Web application from scratch",
    "link": "https://defn.io/2018/02/25/web-app-from-scratch-01/"
  },
  {
    "title": "Python: Building a basic HTTP Server from scratch in Python",
    "link": "http://joaoventura.net/blog/2017/python-webserver/"
  },
  {
    "title": "Python: Implementing a RESTful Web API with Python & Flask",
    "link": "http://blog.luisrei.com/articles/flaskrest.html"
  },
  {
    "title": "Ruby: Building a simple websockets server from scratch in Ruby",
    "link": "http://blog.honeybadger.io/building-a-simple-websockets-server-from-scratch-in-ruby/"
  },
  {
    "title": "(any): From NAND to Tetris: Building a Modern Computer From First Principles",
    "link": "http://nand2tetris.org/"
  },
  {
    "title": "Alloy: The Same-Origin Policy",
    "link": "http://aosabook.org/en/500L/the-same-origin-policy.html"
  },
  {
    "title": "C: How to Write a Video Player in Less Than 1000 Lines",
    "link": "http://dranger.com/ffmpeg/ffmpeg.html"
  },
  {
    "title": "C: Learn how to write a hash table in C",
    "link": "https://github.com/jamesroutley/write-a-hash-table"
  },
  {
    "title": "C: The very basics of a terminal emulator",
    "link": "https://www.uninformativ.de/blog/postings/2018-02-24/0/POSTING-en.html"
  },
  {
    "title": "C: Write a System Call",
    "link": "https://brennan.io/2016/11/14/kernel-dev-ep3/"
  },
  {
    "title": "C: Sol - An MQTT broker from scratch",
    "link": "https://codepr.github.io/posts/sol-mqtt-broker"
  },
  {
    "title": "C++: Build your own VR headset for $100",
    "link": "https://github.com/relativty/Relativ"
  },
  {
    "title": "C++: How X Window Managers work and how to write one",
    "link": "https://seasonofcode.com/posts/how-x-window-managers-work-and-how-to-write-one-part-i.html"
  },
  {
    "title": "C++: Writing a Linux Debugger",
    "link": "https://blog.tartanllama.xyz/writing-a-linux-debugger-setup/"
  },
  {
    "title": "C++: How a 64k intro is made",
    "link": "http://www.lofibucket.com/articles/64k_intro.html"
  },
  {
    "title": "C#: C# Networking: Create a TCP chater server, TCP games, UDP Pong and more",
    "link": "https://16bpp.net/tutorials/csharp-networking"
  },
  {
    "title": "C#: Loading and rendering 3D skeletal animations from scratch in C# and GLSL",
    "link": "https://www.seanjoflynn.com/research/skeletal-animation.html"
  },
  {
    "title": "Clojure: Building a spell-checker",
    "link": "https://bernhardwenzel.com/articles/clojure-spellchecker/"
  },
  {
    "title": "Go: Let's Create a Simple Load Balancer",
    "link": "https://kasvith.github.io/posts/lets-create-a-simple-lb-go/"
  },
  {
    "title": "Java: How to Build an Android Reddit App",
    "link": "https://www.youtube.com/playlist?list=PLgCYzUzKIBE9HUJU-upNvl3TRVAo9W47y"
  },
  {
    "title": "JavaScript: Build Your Own Module Bundler - Minipack",
    "link": "https://github.com/ronami/minipack"
  },
  {
    "title": "JavaScript: Learn JavaScript Promises by Building a Promise from Scratch",
    "link": "https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720"
  },
  {
    "title": "JavaScript: Implementing promises from scratch (TDD way)",
    "link": "https://www.mauriciopoppe.com/notes/computer-science/computation/promises/"
  },
  {
    "title": "JavaScript: Implement your own — call(), apply() and bind() method in JavaScript",
    "link": "https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b"
  },
  {
    "title": "JavaScript: JavaScript Algorithms and Data Structures",
    "link": "https://github.com/trekhleb/javascript-algorithms"
  },
  {
    "title": "JavaScript: How to Make an Evolutionary Tetris AI",
    "link": "https://www.youtube.com/watch?v=xLHCMMGuN0Q"
  },
  {
    "title": "JavaScript: Build a ride hailing app with React Native",
    "link": "https://pusher.com/tutorials/ride-hailing-react-native"
  },
  {
    "title": "Kotlin: Build Your Own Cache",
    "link": "https://github.com/kezhenxu94/cache-lite"
  },
  {
    "title": "Nim: Writing a Redis Protocol Parser",
    "link": "https://xmonader.github.io/nimdays/day12_resp.html"
  },
  {
    "title": "Nim: Writing a Build system",
    "link": "https://xmonader.github.io/nimdays/day11_buildsystem.html"
  },
  {
    "title": "Nim: Writing a MiniTest Framework",
    "link": "https://xmonader.github.io/nimdays/day08_minitest.html"
  },
  {
    "title": "Nim: Writing a DMIDecode Parser",
    "link": "https://xmonader.github.io/nimdays/day01_dmidecode.html"
  },
  {
    "title": "Nim: Writing a INI Parser",
    "link": "https://xmonader.github.io/nimdays/day05_iniparser.html"
  },
  {
    "title": "Nim: Writing a Link Checker",
    "link": "https://xmonader.github.io/nimdays/day04_asynclinkschecker.html"
  },
  {
    "title": "Nim: Writing a URL Shortening Service",
    "link": "https://xmonader.github.io/nimdays/day07_shorturl.html"
  },
  {
    "title": "Node.js: Build a static site generator in 40 lines with Node.js",
    "link": "https://www.webdevdrops.com/build-static-site-generator-nodejs-8969ebe34b22/"
  },
  {
    "title": "Node.js: Building A Simple Single Sign On(SSO) Server And Solution From Scratch In Node.js.",
    "link": "https://codeburst.io/building-a-simple-single-sign-on-sso-server-and-solution-from-scratch-in-node-js-ea6ee5fdf340"
  },
  {
    "title": "Node.js: How to create a real-world Node CLI app with Node",
    "link": "https://medium.freecodecamp.org/how-to-create-a-real-world-node-cli-app-with-node-391b727bbed3"
  },
  {
    "title": "PHP: Write your own MVC from scratch in PHP",
    "link": "https://chaitya62.github.io/2018/04/29/Writing-your-own-MVC-from-Scratch-in-PHP.html"
  },
  {
    "title": "PHP: Make your own blog",
    "link": "https://ilovephp.jondh.me.uk/en/tutorial/make-your-own-blog"
  },
  {
    "title": "PHP: Modern PHP Without a Framework",
    "link": "https://kevinsmith.io/modern-php-without-a-framework"
  },
  {
    "title": "Python: Build a Deep Learning Library",
    "link": "https://www.youtube.com/watch?v=o64FV-ez6Gw"
  },
  {
    "title": "Python: How to Build a Kick-Ass Mobile Document Scanner in Just 5 Minutes",
    "link": "https://www.pyimagesearch.com/2014/09/01/build-kick-ass-mobile-document-scanner-just-5-minutes/"
  },
  {
    "title": "Python: Continuous Integration System",
    "link": "http://aosabook.org/en/500L/a-continuous-integration-system.html"
  },
  {
    "title": "Python: Recommender Systems in Python: Beginner Tutorial",
    "link": "https://www.datacamp.com/community/tutorials/recommender-systems-python"
  },
  {
    "title": "Python: Write SMS-spam detector with Scikit-learn",
    "link": "https://medium.com/@kopilov.vlad/detect-sms-spam-in-kaggle-with-scikit-learn-5f6afa7a3ca2"
  },
  {
    "title": "Python: A Simple Content-Based Recommendation Engine in Python",
    "link": "http://blog.untrod.com/2016/06/simple-similar-products-recommendation-engine-in-python.html"
  },
  {
    "title": "Python: Stock Market Predictions with LSTM in Python",
    "link": "https://www.datacamp.com/community/tutorials/lstm-python-stock-market"
  },
  {
    "title": "Python: Build your own error-correction fountain code with Luby Transform Codes",
    "link": "https://franpapers.com/en/algorithmic/2018-introduction-to-fountain-codes-lt-codes-with-python/"
  },
  {
    "title": "Python: Building a simple Generative Adversial Network (GAN) using Tensorflow",
    "link": "https://blog.paperspace.com/implementing-gans-in-tensorflow/"
  },
  {
    "title": "Python: Learn ML Algorithms by coding: Decision Trees",
    "link": "https://lethalbrains.com/learn-ml-algorithms-by-coding-decision-trees-439ac503c9a4"
  },
  {
    "title": "Python: JSON Decoding Algorithm",
    "link": "https://github.com/cheery/json-algorithm"
  },
  {
    "title": "Ruby: A Pedometer in the Real World",
    "link": "http://aosabook.org/en/500L/a-pedometer-in-the-real-world.html"
  },
  {
    "title": "Ruby: Creating a Linux Desktop application with Ruby",
    "link": "https://iridakos.com/tutorials/2018/01/25/creating-a-gtk-todo-application-with-ruby"
  },
  {
    "title": "Rust: Let's build a browser engine",
    "link": "https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html"
  },
  {
    "title": "Rust: Building a DNS server in Rust",
    "link": "https://github.com/EmilHernvall/dnsguide/blob/master/README.md"
  },
  {
    "title": "Rust: Writing Scalable Chat Service from Scratch",
    "link": "https://nbaksalyar.github.io/2015/07/10/writing-chat-in-rust.html"
  },
  {
    "title": "TypeScript: Tiny Package Manager: Learns how npm or Yarn works",
    "link": "https://github.com/g-plane/tiny-package-manager"
  },
  {
    "title": "Write a CSV to HTML program",
    "link": "https://programmingpraxis.com/2020/03/17/csv-to-html/"
  },
  {
    "title": "Write a Texas Hold 'Em Poker program",
    "link": "https://programmingpraxis.com/2010/03/23/texas-hold-em/"
  },
  {
    "title": "Write a Turing Machine Simulator",
    "link": "https://programmingpraxis.com/2009/03/27/a-turing-machine-simulator/"
  },
  {
    "title": "Nim: A two-player game of mathematical logic",
    "link": "https://programmingpraxis.com/2010/01/08/nim/"
  },
  {
    "title": "Traveling Salesman: Brute Force: Examine all possible permutations to find the least-cost tour",
    "link": "https://programmingpraxis.com/2010/03/12/traveling-salesman-brute-force/"
  },
  {
    "title": "The Seven Bridges of Königsberg: A classic graph puzzle due to Leonhard Euler",
    "link": "https://programmingpraxis.com/2013/05/31/the-seven-bridges-of-knigsberg/"
  },
  {
    "title": "Adi Shamir’s Threshold Scheme: Use cryptography to share a secret, by Graham Enos",
    "link": "https://programmingpraxis.com/2011/06/17/adi-shamirs-threshold-scheme/"
  },
  {
    "title": "Knight Rider: Classic problem of the knight’s tour",
    "link": "https://programmingpraxis.com/2011/12/02/knight-rider/"
  },
  {
    "title": "Unix Paths: Convert relative Unix path to absolute, by Robert Fisher",
    "link": "https://programmingpraxis.com/2013/08/13/unix-paths/"
  },
  {
    "title": "The First Computer Program: Ada Lovelace’s program to compute Bernoulli numbers for Charles Babbage’s Analytical Engine",
    "link": "https://programmingpraxis.com/2011/02/08/the-first-computer-program/"
  },
  {
    "title": "Steve Yegge’s Phone-Screen Coding Exercises",
    "link": "https://programmingpraxis.com/2009/06/30/steve-yegges-phone-screen-coding-exercises/"
  },
  {
    "title": "Word Count: An implementation of the unix wc program",
    "link": "https://programmingpraxis.com/2009/12/08/word-count/"
  },
  {
    "title": "Grep: Simple version of the classic unix regular-expression matching utility",
    "link": "https://programmingpraxis.com/2009/09/25/grep/"
  },
  {
    "title": "Cal: Print a twelve-month calendar",
    "link": "https://programmingpraxis.com/2010/01/01/cal-2/"
  },
  {
    "title": "Diff: Find the differences between two text files",
    "link": "https://programmingpraxis.com/2010/06/08/diff/"
  },
  {
    "title": "J K Rowling: Identify an author using forensic linguistics",
    "link": "https://programmingpraxis.com/2013/07/19/j-k-rowling/"
  },
  {
    "title": "How to write your first Quine program",
    "link": "https://towardsdatascience.com/how-to-write-your-first-quine-program-947f2b7e4a6f"
  },
  {
    "title": "Code The Game Of Life With React",
    "link": "https://www.freecodecamp.org/news/create-gameoflife-with-react-in-one-hour-8e686a410174/"
  },
  {
    "title": "Build A Chat App with Sentiment Analysis",
    "link": "https://codeburst.io/build-a-chat-app-with-sentiment-analysis-using-next-js-c43ebf3ea643"
  },
]

exports.BattleMovedex = {
  pummel: {
    name: "Pummel",
    num: 1,
    type: "Fighting",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user pummels the foe repeatedly.\nThis hits 2-5 times in a row. Contact.",
    shortDesc: "The user pummels the foe repeatedly.\nThis hits 2-5 times in a row. Contact.",
    pp: 15
  },
  karatechop: {
    name: "Karate Chop",
    num: 2,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The target is attacked with a swift chop.\nThis has +1 (12%) critical hit rate. Contact.",
    shortDesc: "The target is attacked with a swift chop.\nThis has +1 (12%) critical hit rate. Contact.",
    pp: 20
  },
  doubleslap: {
    name: "Double Slap",
    num: 3,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 30,
    accuracy: 100,
    category: "Physical",
    desc: "The target is slapped twice back and forth. This hits\ntwice. Each hit has a 15% flinch chance. Contact.",
    shortDesc: "The target is slapped twice back and forth. This hits\ntwice. Each hit has a 15% flinch chance. Contact.",
    pp: 15
  },
  cometpunch: {
    name: "Comet Punch",
    num: 4,
    type: "Fairy",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The target is hit with a flurry of punches imbued\nwith celestial fairy energy.\nThey hit 2-5 times in a row. Contact.",
    shortDesc: "The target is hit with a flurry of punches imbued\nwith celestial fairy energy.\nThey hit 2-5 times in a row. Contact.",
    pp: 15
  },
  seismicfist: {
    name: "Seismic Fist",
    num: 5,
    type: "Ground",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Physical",
    desc: "A ground-breaking punch is thrown at the target.\nHas a 30% chance to drop the foe's Defense. Contact.",
    shortDesc: "A ground-breaking punch is thrown at the target.\nHas a 30% chance to drop the foe's Defense. Contact.",
    pp: 10
  },
  payday: {
    name: "Pay Day",
    num: 6,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 40,
    accuracy: 100,
    category: "Physical",
    desc: "Persian flings coins at the foe. This hits 3 times,\nwith EACH hit having a 50% crit rate.\nThe Z-Effect of this gives Persian +1 to all stats.",
    shortDesc: "Persian flings coins at the foe. This hits 3 times,\nwith EACH hit having a 50% crit rate.\nThe Z-Effect of this gives Persian +1 to all stats.",
    pp: 5
  },
  firepunch: {
    name: "Fire Punch",
    num: 7,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The target is punched with a fiery fist. This has a\n10% chance to burn the foe. Contact.",
    shortDesc: "The target is punched with a fiery fist. This has a\n10% chance to burn the foe. Contact.",
    pp: 15
  },
  icepunch: {
    name: "Ice Punch",
    num: 8,
    type: "Ice",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The target is punched with an icy fist. This has a\n10% chance to freeze the foe. Contact.",
    shortDesc: "The target is punched with an icy fist. This has a\n10% chance to freeze the foe. Contact.",
    pp: 15
  },
  thunderpunch: {
    name: "Thunder Punch",
    num: 9,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The target is punched with an electrified fist.This\nhas a 10% chance to paralyze the foe. Contact.",
    shortDesc: "The target is punched with an electrified fist.This\nhas a 10% chance to paralyze the foe. Contact.",
    pp: 15
  },
  metalclaw: {
    name: "Metal Claw",
    num: 10,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The target is raked with a steel-hard claw,\nblade, scythe, talon, or the like.\nThis has a 12%, or +1 critical hit rate. Contact.",
    shortDesc: "The target is raked with a steel-hard claw,\nblade, scythe, talon, or the like.\nThis has a 12%, or +1 critical hit rate. Contact.",
    pp: 20
  },
  vicegrip: {
    name: "Vice Grip",
    num: 11,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The target is gripped firmly from both sides, trapping\nthem on the field for 6 turns & dealing 12% of their\nmax HP at the end of each turn. Contact.",
    shortDesc: "The target is gripped firmly from both sides, trapping\nthem on the field for 6 turns & dealing 12% of their\nmax HP at the end of each turn. Contact.",
    pp: 20
  },
  guillotine: {
    name: "Guillotine",
    num: 12,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user slices the target in two, always fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The user slices the target in two, always fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    pp: 1
  },
  razorwind: {
    name: "Razor Wind",
    num: 13,
    type: "Flying",
    flags: {
      charge: 1,
      mirror: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "A 2 turn attack where the user fires vicious blades\nof wind. This attack always results in a critical\nhit, and flinches 30% of the time. Ignores protect.",
    shortDesc: "A 2 turn attack where the user fires vicious blades\nof wind. This attack always results in a critical\nhit, and flinches 30% of the time. Ignores protect.",
    pp: 5
  },
  swordsdance: {
    name: "Swords Dance",
    num: 14,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "A frenetic dance to uplift the fighting spirit.\nRaises user's Attack by 2. Z-Effect +2 crit rate.",
    shortDesc: "A frenetic dance to uplift the fighting spirit.\nRaises user's Attack by 2. Z-Effect +2 crit rate.",
    pp: 1
  },
  creepingstrike: {
    name: "Creeping Strike",
    num: 15,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly strikes the foe.\nThis has +1 Priority, and can't miss.",
    shortDesc: "The user quickly strikes the foe.\nThis has +1 Priority, and can't miss.",
    pp: 15
  },
  gust: {
    name: "Gust",
    num: 16,
    type: "Flying",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "A weak gust of wind is whipped up and launched\nquickly at the foe. +1 Priority. Can't miss.",
    shortDesc: "A weak gust of wind is whipped up and launched\nquickly at the foe. +1 Priority. Can't miss.",
    pp: 20
  },
  dualwingbeat: {
    name: "Dual Wingbeat",
    num: 17,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: 100,
    category: "Physical",
    desc: "The user strikes the foe twice with it's wings. Each\nstrike has a 15% flinch chance. Contact.",
    shortDesc: "The user strikes the foe twice with it's wings. Each\nstrike has a 15% flinch chance. Contact.",
    pp: 10
  },
  whirlwind: {
    name: "Whirlwind",
    num: 18,
    type: "Flying",
    flags: {
      bypasssub: 1,
      mirror: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The target is blown away, and a random Pokemon is\ndragged out onto the field in their place.\nThis has +4 priority. Z-Effect +3 Speed.",
    shortDesc: "The target is blown away, and a random Pokemon is\ndragged out onto the field in their place.\nThis has +4 priority. Z-Effect +3 Speed.",
    pp: 3
  },
  fly: {
    name: "Fly",
    num: 19,
    type: "Flying",
    flags: {
      charge: 1,
      contact: 1,
      gravity: 1,
      mirror: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user soars, then strikes the foe on the next turn.\nAfter attacking, the user gains +1 Accuracy. Contact.\nBypasses Protect.",
    shortDesc: "The user soars, then strikes the foe on the next turn.\nAfter attacking, the user gains +1 Accuracy. Contact.\nBypasses Protect.",
    pp: 15
  },
  bind: {
    name: "Bind",
    num: 20,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "Things such as long bodies or tentacles are used to\nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    shortDesc: "Things such as long bodies or tentacles are used to\nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    pp: 20
  },
  whiplash: {
    name: "Whiplash",
    num: 21,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The foe is slammed with a long tail or appendage.\nThis drops Defense by 1 after each hit. Contact.",
    shortDesc: "The foe is slammed with a long tail or appendage.\nThis drops Defense by 1 after each hit. Contact.",
    pp: 10
  },
  vinelashes: {
    name: "Vine Lashes",
    num: 22,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 35,
    accuracy: 100,
    category: "Physical",
    desc: "The foe is lashed twice with whiplike vines.\nThis ALWAYS drops Defense by 1 after each hit.  Contact.",
    shortDesc: "The foe is lashed twice with whiplike vines.\nThis ALWAYS drops Defense by 1 after each hit.  Contact.",
    pp: 10
  },
  stomp: {
    name: "Stomp",
    num: 23,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Physical",
    desc: "The target is stomped on. Has a 30% chance to flinch\n the foe. Contact.",
    shortDesc: "The target is stomped on. Has a 30% chance to flinch\n the foe. Contact.",
    pp: 20
  },
  doublekick: {
    name: "Double Kick",
    num: 24,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 35,
    accuracy: 100,
    category: "Physical",
    desc: "The target is kicked twice in succession using both\nfeet. Hits twice, each hit has a 15% flinch chance.\nContact.",
    shortDesc: "The target is kicked twice in succession using both\nfeet. Hits twice, each hit has a 15% flinch chance.\nContact.",
    pp: 15
  },
  megatonkick: {
    name: "Megaton Kick",
    num: 25,
    type: "Ground",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 90,
    category: "Physical",
    desc: "The user launches a kick towards the ground with\nmassive force. This drops Defense 30% of the time.\nContact.",
    shortDesc: "The user launches a kick towards the ground with\nmassive force. This drops Defense 30% of the time.\nContact.",
    pp: 5
  },
  highjumpkick: {
    name: "High Jump Kick",
    num: 26,
    type: "Fighting",
    flags: {
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 90,
    category: "Physical",
    desc: "The user jumps up high, then strikes with a kick.\nIf this misses, the user loses 50% of it's max HP.\nContact.",
    shortDesc: "The user jumps up high, then strikes with a kick.\nIf this misses, the user loses 50% of it's max HP.\nContact.",
    pp: 10
  },
  rollingkick: {
    name: "Rolling Kick",
    num: 27,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user kicks the foe while quickly spinning.\nThis ALWAYS boosts the user's Speed by 1. Contact.",
    shortDesc: "The user kicks the foe while quickly spinning.\nThis ALWAYS boosts the user's Speed by 1. Contact.",
    pp: 15
  },
  sandattack: {
    name: "Sand Attack",
    num: 28,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 10,
    accuracy: 100,
    category: "Special",
    desc: "Doesn't exist,",
    shortDesc: "Doesn't exist,",
    pp: 15
  },
  headbutt: {
    name: "Headbutt",
    num: 29,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user headbutts the target. Has a 30% chance to\nflinch. Contact.",
    shortDesc: "The user headbutts the target. Has a 30% chance to\nflinch. Contact.",
    pp: 15
  },
  peck: {
    name: "Peck",
    num: 30,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Physical",
    desc: "The target is jabbed with a beak, horn, or the like.\n20% chance to drop the foe's Defense. Contact.",
    shortDesc: "The target is jabbed with a beak, horn, or the like.\n20% chance to drop the foe's Defense. Contact.",
    pp: 25
  },
  spikecannon: {
    name: "Spike Cannon",
    num: 31,
    type: "Steel",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user rapidly shoots steel-hard spikes at the foe.\nThis attack hits 2-5 times in succession.",
    shortDesc: "The user rapidly shoots steel-hard spikes at the foe.\nThis attack hits 2-5 times in succession.",
    pp: 15
  },
  horndrill: {
    name: "Horn Drill",
    num: 32,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user stabs the foe through their vitals, fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The user stabs the foe through their vitals, fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    pp: 1
  },
  tackle: {
    name: "Tackle",
    num: 33,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: 100,
    category: "Physical",
    desc: "A physical attack in which the user charges and\nslams into the target with its whole body. Contact.",
    shortDesc: "A physical attack in which the user charges and\nslams into the target with its whole body. Contact.",
    pp: 35
  },
  bodyslam: {
    name: "Body Slam",
    num: 34,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Physical",
    desc: "The user drops onto the target with its full body\nweight. Paralyzes the target 30% of the time. Contact.",
    shortDesc: "The user drops onto the target with its full body\nweight. Paralyzes the target 30% of the time. Contact.",
    pp: 15
  },
  wrap: {
    name: "Wrap",
    num: 35,
    type: "Poison",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "A long body, vines, or the like are used to wrap and \nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    shortDesc: "A long body, vines, or the like are used to wrap and \nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    pp: 20
  },
  takedown: {
    name: "Take Down",
    num: 36,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 100,
    category: "Physical",
    desc: "A reckless, full-body charge attack for slamming into\nthe target. User takes 20% recoil damage.\nThis has a 30% chance to drop Defense. Contact.",
    shortDesc: "A reckless, full-body charge attack for slamming into\nthe target. User takes 20% recoil damage.\nThis has a 30% chance to drop Defense. Contact.",
    pp: 10
  },
  kerfuffle: {
    name: "Kerfuffle",
    num: 37,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    shortDesc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    pp: 5
  },
  doubleedge: {
    name: "Double-Edge",
    num: 38,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "A reckless, life-risking tackle. User takes 25% of\ndamage dealt. Has a 50% chance to drop the foe's\nDefense stat by 1 after use. Contact.",
    shortDesc: "A reckless, life-risking tackle. User takes 25% of\ndamage dealt. Has a 50% chance to drop the foe's\nDefense stat by 1 after use. Contact.",
    pp: 10
  },
  tailwag: {
    name: "Tail Wag",
    num: 39,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user wags its tail cutely, making opposing\nPokemon less wary, dropping their Defense stat by 1.\nThis has +4 priority. Z-Effect is +1 Attack.",
    shortDesc: "The user wags its tail cutely, making opposing\nPokemon less wary, dropping their Defense stat by 1.\nThis has +4 priority. Z-Effect is +1 Attack.",
    pp: 30
  },
  barbbarrage: {
    name: "Barb Barrage",
    num: 40,
    type: "Poison",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 20,
    accuracy: 100,
    category: "Physical",
    desc: "The user shoots 3 venomous barbs at the target.\nThis ALWAYS poisons the foe and hits 3 times.",
    shortDesc: "The user shoots 3 venomous barbs at the target.\nThis ALWAYS poisons the foe and hits 3 times.",
    pp: 10
  },
  poisondart: {
    name: "Poison Dart",
    num: 41,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user rapidly shoots out a poisonous barb.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user rapidly shoots out a poisonous barb.\nThis has +1 priority, and can't miss.",
    pp: 15
  },
  pinmissile: {
    name: "Pin Missile",
    num: 42,
    type: "Bug",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "Sharp spikes are shot at the target in rapid\nsuccession. They hit two to five times in a row.",
    shortDesc: "Sharp spikes are shot at the target in rapid\nsuccession. They hit two to five times in a row.",
    pp: 15
  },
  leer: {
    name: "Leer",
    num: 43,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user gives opposing Pokemon an intimidating\nleer, lowering BOTH Defense & Sp. Def by 1.\nZ-Effect +2 Crit Rate.",
    shortDesc: "The user gives opposing Pokemon an intimidating\nleer, lowering BOTH Defense & Sp. Def by 1.\nZ-Effect +2 Crit Rate.",
    pp: 10
  },
  jaggedfangs: {
    name: "Jagged Fangs",
    num: 44,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites the foe with jagged, hard fangs.\nThis has a 30% chance to drop the foe's Defense by 1.\nContact.",
    shortDesc: "The user bites the foe with jagged, hard fangs.\nThis has a 30% chance to drop the foe's Defense by 1.\nContact.",
    pp: 15
  },
  growl: {
    name: "Growl",
    num: 45,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user growls in an endearing way, making\nopposing Pokemon less wary. This lowers their\nAttack & Speed stats by 1. Z-Effect +2 Attack.",
    shortDesc: "The user growls in an endearing way, making\nopposing Pokemon less wary. This lowers their\nAttack & Speed stats by 1. Z-Effect +2 Attack.",
    pp: 10
  },
  roar: {
    name: "Roar",
    num: 46,
    type: "Dark",
    flags: {
      bypasssub: 1,
      mirror: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The target is scared off, and a random Pokemon is\ndragged out. This has +4 priority. Z-Effect +2 Attack.",
    shortDesc: "The target is scared off, and a random Pokemon is\ndragged out. This has +4 priority. Z-Effect +2 Attack.",
    pp: 3
  },
  sing: {
    name: "Sing",
    num: 47,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 80,
    category: "Status",
    desc: "A soothing lullaby is sung in a calming voice, putting\nthe target in a deep sleep that lasts 2 turns.\nZ-Effect +1 Speed.",
    shortDesc: "A soothing lullaby is sung in a calming voice, putting\nthe target in a deep sleep that lasts 2 turns.\nZ-Effect +1 Speed.",
    pp: 2
  },
  supersonic: {
    name: "Supersonic",
    num: 48,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user emits odd sound waves from it's body, which\nconfuse the target for 4 turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user emits odd sound waves from it's body, which\nconfuse the target for 4 turns. Z-Effect +2 Sp. Atk.",
    pp: 20
  },
  sonicboom: {
    name: "Sonic Boom",
    num: 49,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "The target is hit with a destructive shock wave that\nalways inflicts 20 HP damage.",
    shortDesc: "The target is hit with a destructive shock wave that\nalways inflicts 20 HP damage.",
    pp: 20
  },
  disable: {
    name: "Disable",
    num: 50,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "For five turns, this move prevents the target from\nusing the move it last used. Z-Effect +2 Sp. Atk.",
    shortDesc: "For five turns, this move prevents the target from\nusing the move it last used. Z-Effect +2 Sp. Atk.",
    pp: 5
  },
  acidspray: {
    name: "Acid Spray",
    num: 51,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Special",
    desc: "The user sprays highly corrosive acid at the target.\nThis ALWAYS drops the foe's Sp. Def by 4, or 2/3.",
    shortDesc: "The user sprays highly corrosive acid at the target.\nThis ALWAYS drops the foe's Sp. Def by 4, or 2/3.",
    pp: 10
  },
  ignite: {
    name: "Ignite",
    num: 52,
    type: "Fire",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user quickly ignites and shoots weak flames.\nThis move has +1 priority, and can't miss.",
    shortDesc: "The user quickly ignites and shoots weak flames.\nThis move has +1 priority, and can't miss.",
    pp: 25
  },
  flamethrower: {
    name: "Flamethrower",
    num: 53,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "The target is scorched with an intense blast of fire.\nThis burns the target 10% of the time.",
    shortDesc: "The target is scorched with an intense blast of fire.\nThis burns the target 10% of the time.",
    pp: 15
  },
  mist: {
    name: "Mist",
    num: 54,
    type: "Ice",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user cloaks itself and its allies in a white mist\nthat prevents any of their stats from being lowered\nfor five turns. Z-Mist heals the user fully.",
    shortDesc: "The user cloaks itself and its allies in a white mist\nthat prevents any of their stats from being lowered\nfor five turns. Z-Mist heals the user fully.",
    pp: 30
  },
  snipeshot: {
    name: "Snipe Shot",
    num: 55,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Special",
    desc: "The user fires a highly concentrated jet of water.\nThis has +3 priority, & ALWAYS lands a critical hit.",
    shortDesc: "The user fires a highly concentrated jet of water.\nThis has +3 priority, & ALWAYS lands a critical hit.",
    pp: 5
  },
  hydropump: {
    name: "Hydro Pump",
    num: 56,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 90,
    category: "Special",
    desc: "The target is blasted by a huge volume of water\nlaunched under great pressure.",
    shortDesc: "The target is blasted by a huge volume of water\nlaunched under great pressure.",
    pp: 5
  },
  surf: {
    name: "Surf",
    num: 57,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks everything around it by swamping\nits surroundings with a giant wave.",
    shortDesc: "The user attacks everything around it by swamping\nits surroundings with a giant wave.",
    pp: 10
  },
  icebeam: {
    name: "Ice Beam",
    num: 58,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "The target is struck with an icy-cold beam of energy.\nThis freezes the target 10% of the time.",
    shortDesc: "The target is struck with an icy-cold beam of energy.\nThis freezes the target 10% of the time.",
    pp: 10
  },
  blizzard: {
    name: "Blizzard",
    num: 59,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 85,
    category: "Special",
    desc: "A howling blizzard is summoned to strike opponents.\nThis freezes the opponents 10% of the time.",
    shortDesc: "A howling blizzard is summoned to strike opponents.\nThis freezes the opponents 10% of the time.",
    pp: 5
  },
  influx: {
    name: "Influx",
    num: 60,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "A quick psychic beam is rapidly shot at the target.\nThis has +1 priority, and can't miss.",
    shortDesc: "A quick psychic beam is rapidly shot at the target.\nThis has +1 priority, and can't miss.",
    pp: 20
  },
  bubbleshot: {
    name: "Bubble Shot",
    num: 61,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user quickly fires a jet of bubbles at the foe.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly fires a jet of bubbles at the foe.\nThis has +1 priority, and can't miss.",
    pp: 20
  },
  aurorabeam: {
    name: "Aurora Beam",
    num: 62,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "The foe is hit with an icy, rainbow-colored beam.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The foe is hit with an icy, rainbow-colored beam.\nThis ALWAYS drops the foe's attacking stats by 1.",
    pp: 10
  },
  hyperbeam: {
    name: "Hyper Beam",
    num: 63,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 160,
    accuracy: 100,
    category: "Special",
    desc: "The target is attacked with a powerful beam.\nDrops user's Sp. Atk by 2.",
    shortDesc: "The target is attacked with a powerful beam.\nDrops user's Sp. Atk by 2.",
    pp: 5
  },
  furypecks: {
    name: "Fury Pecks",
    num: 64,
    type: "Flying",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The target is jabbed rapidly with a pointed beak,\nhorn, or the like. This hits 2-5 times in succession.\nContact.",
    shortDesc: "The target is jabbed rapidly with a pointed beak,\nhorn, or the like. This hits 2-5 times in succession.\nContact.",
    pp: 15
  },
  drillpeck: {
    name: "Drill Peck",
    num: 65,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "A corkscrewing attack with a sharp appendage acting as\na drill. This attack has a 50% (+2) crit rate.",
    shortDesc: "A corkscrewing attack with a sharp appendage acting as\na drill. This attack has a 50% (+2) crit rate.",
    pp: 10
  },
  submission: {
    name: "Submission",
    num: 66,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user beats the target into hopeless submission.\nThis deals 25% recoil to the user, and drops the\nuser's Defensive stats by 1 after use. Contact.",
    shortDesc: "The user beats the target into hopeless submission.\nThis deals 25% recoil to the user, and drops the\nuser's Defensive stats by 1 after use. Contact.",
    pp: 5
  },
  lowkick: {
    name: "Low Kick",
    num: 67,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "A powerful low kick that makes the target fall over.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS drops the foe's Speed by 1. Contact.",
    shortDesc: "A powerful low kick that makes the target fall over.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS drops the foe's Speed by 1. Contact.",
    pp: 20
  },
  counter: {
    name: "Counter",
    num: 68,
    type: "Fighting",
    flags: {
      contact: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "A retaliation move that counters any physical attack,\ninflicting double the damage taken. Contact.",
    shortDesc: "A retaliation move that counters any physical attack,\ninflicting double the damage taken. Contact.",
    pp: 20
  },
  seismictoss: {
    name: "Seismic Toss",
    num: 69,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The target is thrown using the power of gravity.\nIt inflicts damage equal to the user’s level. Contact.\nThis ALWAYS gives the user +1 Accuracy after use.",
    shortDesc: "The target is thrown using the power of gravity.\nIt inflicts damage equal to the user’s level. Contact.\nThis ALWAYS gives the user +1 Accuracy after use.",
    pp: 20
  },
  strength: {
    name: "Strength",
    num: 70,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    shortDesc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    pp: 5
  },
  siphon: {
    name: "Siphon",
    num: 71,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Special",
    desc: "The user siphons the foe's vital fluids or energy.\nThis heals the user by 100% of damage dealt.",
    shortDesc: "The user siphons the foe's vital fluids or energy.\nThis heals the user by 100% of damage dealt.",
    pp: 10
  },
  megadrain: {
    name: "Mega Drain",
    num: 72,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "A nutrient-draining attack. The user’s HP is restored\nby 75% of the damage taken by the target.",
    shortDesc: "A nutrient-draining attack. The user’s HP is restored\nby 75% of the damage taken by the target.",
    pp: 15
  },
  leechseed: {
    name: "Leech Seed",
    num: 73,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "A seed is planted on the target. It steals 12% HP\nfrom the target every turn. Z-Effect heals user fully.",
    shortDesc: "A seed is planted on the target. It steals 12% HP\nfrom the target every turn. Z-Effect heals user fully.",
    pp: 10
  },
  growth: {
    name: "Growth",
    num: 74,
    type: "Grass",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user’s body grows all at once, raising the\nAttack and Sp. Atk stats by one, or two in the Sun.\nZ-Effect heals user fully.",
    shortDesc: "The user’s body grows all at once, raising the\nAttack and Sp. Atk stats by one, or two in the Sun.\nZ-Effect heals user fully.",
    pp: 2
  },
  razorleaf: {
    name: "Razor Leaf",
    num: 75,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "Sharp-edged leaves are launched to slash at the\nfoes. This has a 12% (+1) crit rate.",
    shortDesc: "Sharp-edged leaves are launched to slash at the\nfoes. This has a 12% (+1) crit rate.",
    pp: 20
  },
  solarbeam: {
    name: "Solar Beam",
    num: 76,
    type: "Grass",
    flags: {
      charge: 1,
      mirror: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "In this two-turn attack, the user gathers light, then\nblasts a bundled beam on the next turn.This doesn't\ncharge in Sun. ALWAYS CRITS, ignores Protect.",
    shortDesc: "In this two-turn attack, the user gathers light, then\nblasts a bundled beam on the next turn.This doesn't\ncharge in Sun. ALWAYS CRITS, ignores Protect.",
    pp: 10
  },
  poisonpowder: {
    name: "Poison Powder",
    num: 77,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user scatters a cloud of poisonous dust that\npoisons the target. Z-Effect +2 Sp. Def.",
    shortDesc: "The user scatters a cloud of poisonous dust that\npoisons the target. Z-Effect +2 Sp. Def.",
    pp: 35
  },
  stunspore: {
    name: "Stun Spore",
    num: 78,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user scatters a cloud of numbing powder that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    shortDesc: "The user scatters a cloud of numbing powder that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    pp: 30
  },
  sleeppowder: {
    name: "Sleep Powder",
    num: 79,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 85,
    category: "Status",
    desc: "The user scatters a big cloud of sleep-inducing dust,\nputting the target to sleep for 2 turns.\nZ-Effect heals the user fully.",
    shortDesc: "The user scatters a big cloud of sleep-inducing dust,\nputting the target to sleep for 2 turns.\nZ-Effect heals the user fully.",
    pp: 2
  },
  petaldance: {
    name: "Petal Dance",
    num: 80,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks the target by scattering petals for\ntwo to three turns. The user then becomes confused.",
    shortDesc: "The user attacks the target by scattering petals for\ntwo to three turns. The user then becomes confused.",
    pp: 5
  },
  stringshot: {
    name: "String Shot",
    num: 81,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The opposing Pokemon are bound with silk. This\nlowers their Speed by 2, & Sp. Atk by 2.\nZ-Effect +3 Speed.",
    shortDesc: "The opposing Pokemon are bound with silk. This\nlowers their Speed by 2, & Sp. Atk by 2.\nZ-Effect +3 Speed.",
    pp: 20
  },
  dragonburst: {
    name: "Dragon Burst",
    num: 82,
    type: "Dragon",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "In a rage, the user fires 3 shockwaves of dragon\nenergy at the foe. Each individual shockwave deals\n40 HP damage for a total of 120 flat HP damage.",
    shortDesc: "In a rage, the user fires 3 shockwaves of dragon\nenergy at the foe. Each individual shockwave deals\n40 HP damage for a total of 120 flat HP damage.",
    pp: 5
  },
  firespin: {
    name: "Fire Spin",
    num: 83,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The target becomes trapped within a fierce vortex of\nfire that traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The target becomes trapped within a fierce vortex of\nfire that traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    pp: 15
  },
  thundershock: {
    name: "Thunder Shock",
    num: 84,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 40,
    accuracy: 100,
    category: "Special",
    desc: "A jolt of concentrated static electricity strikes the foe.\nThis will ALWAYS leave the foe with paralysis.",
    shortDesc: "A jolt of concentrated static electricity strikes the foe.\nThis will ALWAYS leave the foe with paralysis.",
    pp: 15
  },
  thunderbolt: {
    name: "Thunderbolt",
    num: 85,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "A strong electric blast crashes down on the target.\nThis leaves the target paralyzed 10% of the time.",
    shortDesc: "A strong electric blast crashes down on the target.\nThis leaves the target paralyzed 10% of the time.",
    pp: 15
  },
  thunderwave: {
    name: "Thunder Wave",
    num: 86,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user launches a weak wave of electricity that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    shortDesc: "The user launches a weak wave of electricity that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    pp: 20
  },
  thunder: {
    name: "Thunder",
    num: 87,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 85,
    category: "Special",
    desc: "A wicked thunderbolt is dropped on the target.\nThis leaves the target paralyzed 30% of the time.\nThis can't miss in the Rain.",
    shortDesc: "A wicked thunderbolt is dropped on the target.\nThis leaves the target paralyzed 30% of the time.\nThis can't miss in the Rain.",
    pp: 5
  },
  faerieblow: {
    name: "Faerie Blow",
    num: 88,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly strikes the target whimsically.\nThis has +1 priority, and can't miss. Contact.",
    shortDesc: "The user quickly strikes the target whimsically.\nThis has +1 priority, and can't miss. Contact.",
    pp: 15
  },
  earthquake: {
    name: "Earthquake",
    num: 89,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 100,
    category: "Physical",
    desc: "The user sets off an earthquake that strikes every\nPokemon around it.",
    shortDesc: "The user sets off an earthquake that strikes every\nPokemon around it.",
    pp: 10
  },
  fissure: {
    name: "Fissure",
    num: 90,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The opens up a fissure under the foe, fainting them.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The opens up a fissure under the foe, fainting them.\nThis attack NEVER misses, but can only be used once.\nContact.",
    pp: 1
  },
  dig: {
    name: "Dig",
    num: 91,
    type: "Ground",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user burrows, then attacks on the next turn.\nThe user gains +1 Accuracy after attacking. Contact.\nBypasses protect.",
    shortDesc: "The user burrows, then attacks on the next turn.\nThe user gains +1 Accuracy after attacking. Contact.\nBypasses protect.",
    pp: 15
  },
  toxic: {
    name: "Toxic",
    num: 92,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "A move that leaves the target badly poisoned.\nIts poison damage worsens every turn.\nZ-Effect heals user fully.",
    shortDesc: "A move that leaves the target badly poisoned.\nIts poison damage worsens every turn.\nZ-Effect heals user fully.",
    pp: 10
  },
  confusion: {
    name: "Confusion",
    num: 93,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The target is hit by a weak telekinetic force.\nThis confuses the target for 4 turns 50% of the time.",
    shortDesc: "The target is hit by a weak telekinetic force.\nThis confuses the target for 4 turns 50% of the time.",
    pp: 25
  },
  psychic: {
    name: "Psychic",
    num: 94,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "The target is hit by a strong telekinetic force.\nThis drops the foe's Sp. Def 25% of the time.",
    shortDesc: "The target is hit by a strong telekinetic force.\nThis drops the foe's Sp. Def 25% of the time.",
    pp: 10
  },
  hypnosis: {
    name: "Hypnosis",
    num: 95,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 80,
    category: "Status",
    desc: "The user employs hypnotic suggestion, putting the\ntarget in a deep sleep that lasts 2 turns.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user employs hypnotic suggestion, putting the\ntarget in a deep sleep that lasts 2 turns.\nZ-Effect +2 Sp. Def.",
    pp: 2
  },
  meditate: {
    name: "Meditate",
    num: 96,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user meditates to awaken the power deep\nwithin its body and raise its Attack and Sp. Def by 1.\nZ-Effect heals the user fully.",
    shortDesc: "The user meditates to awaken the power deep\nwithin its body and raise its Attack and Sp. Def by 1.\nZ-Effect heals the user fully.",
    pp: 3
  },
  agility: {
    name: "Agility",
    num: 97,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user relaxes and lightens its body to move\nfaster. This raises Speed by 2. Z-Effect +2 Crit Rate.",
    shortDesc: "The user relaxes and lightens its body to move\nfaster. This raises Speed by 2. Z-Effect +2 Crit Rate.",
    pp: 5
  },
  quickattack: {
    name: "Quick Attack",
    num: 98,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user lunges quickly at the target.\n+1 Priority, can't miss, and makes contact.",
    shortDesc: "The user lunges quickly at the target.\n+1 Priority, can't miss, and makes contact.",
    pp: 15
  },
  rage: {
    name: "Rage",
    num: 99,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks with rage. As long as this move is in\nuse, rage raises the Attack stat by 1 each time the\nuser is hit. Contact.",
    shortDesc: "The user attacks with rage. As long as this move is in\nuse, rage raises the Attack stat by 1 each time the\nuser is hit. Contact.",
    pp: 15
  },
  teleport: {
    name: "Teleport",
    num: 100,
    type: "Psychic",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Use it to flee from any wild Pokemon.",
    shortDesc: "Use it to flee from any wild Pokemon.",
    pp: 15
  },
  soulabsorb: {
    name: "Soul Absorb",
    num: 101,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "The user absorbs the foe's vital energy, or soul.\nThis deals damage equal to the user's level, and\nrecovers damage equal to the user's level.",
    shortDesc: "The user absorbs the foe's vital energy, or soul.\nThis deals damage equal to the user's level, and\nrecovers damage equal to the user's level.",
    pp: 5
  },
  mimic: {
    name: "Mimic",
    num: 102,
    type: "Normal",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user copies the target’s last move. The move\ncan be used during battle until the Pokemon is\nswitched out. Z-Effect +1 all stats. +6 Priority.",
    shortDesc: "The user copies the target’s last move. The move\ncan be used during battle until the Pokemon is\nswitched out. Z-Effect +1 all stats. +6 Priority.",
    pp: 10
  },
  screech: {
    name: "Screech",
    num: 103,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "An earsplitting screech that lowers the foe's Defense\nstat by 2 stages. Z-Effect +3 Accuracy.",
    shortDesc: "An earsplitting screech that lowers the foe's Defense\nstat by 2 stages. Z-Effect +3 Accuracy.",
    pp: 15
  },
  hyperspeed: {
    name: "Hyper Speed",
    num: 104,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user moves so rapidly that it becomes nearly\ninvisible to the human eye, boosting the user's Speed\nstat by 3 stages. Z-Effect gives +2 crit rate.",
    shortDesc: "The user moves so rapidly that it becomes nearly\ninvisible to the human eye, boosting the user's Speed\nstat by 3 stages. Z-Effect gives +2 crit rate.",
    pp: 1
  },
  recover: {
    name: "Recover",
    num: 105,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Restoring its own cells, the user restores its own HP\nby half of its max HP. Z-Effect +2 Sp. Def.",
    shortDesc: "Restoring its own cells, the user restores its own HP\nby half of its max HP. Z-Effect +2 Sp. Def.",
    pp: 5
  },
  harden: {
    name: "Harden",
    num: 106,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user hardens its body, boosting Defense by 1.\nZ-Effect heals user fully.",
    shortDesc: "The user hardens its body, boosting Defense by 1.\nZ-Effect heals user fully.",
    pp: 10
  },
  deflate: {
    name: "Deflate",
    num: 107,
    type: "Flying",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user deflates itself to recover HP. This heals\nthe user to FULL HP, AND has +4 Priority.\nZ-Effect gives the user +1 to all stats.",
    shortDesc: "The user deflates itself to recover HP. This heals\nthe user to FULL HP, AND has +4 Priority.\nZ-Effect gives the user +1 to all stats.",
    pp: 3
  },
  noxiousgas: {
    name: "Noxious Gas",
    num: 108,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user expels an utterly putrid smelling gas.\nThis poisons the foes while dropping their Attack,\nSp. Atk and Speed stats by 2. Z-Effect +1 All Stats.",
    shortDesc: "The user expels an utterly putrid smelling gas.\nThis poisons the foes while dropping their Attack,\nSp. Atk and Speed stats by 2. Z-Effect +1 All Stats.",
    pp: 5
  },
  confuseray: {
    name: "Confuse Ray",
    num: 109,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The target is exposed to a sinister ray that\nconfuses them for four turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "The target is exposed to a sinister ray that\nconfuses them for four turns. Z-Effect +2 Sp. Atk.",
    pp: 10
  },
  withdraw: {
    name: "Withdraw",
    num: 110,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user withdraws its body into its hard shell,\nraising its Defense and Sp. Def stats by 1.\nZ-Effect heals user fully.",
    shortDesc: "The user withdraws its body into its hard shell,\nraising its Defense and Sp. Def stats by 1.\nZ-Effect heals user fully.",
    pp: 3
  },
  defensecurl: {
    name: "Defense Curl",
    num: 111,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user curls up to conceal weak spots and raise\nits Defense stat by 1. Z-Effect heals user fully.",
    shortDesc: "The user curls up to conceal weak spots and raise\nits Defense stat by 1. Z-Effect heals user fully.",
    pp: 40
  },
  barrier: {
    name: "Barrier",
    num: 112,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user throws up a psychic wall that raises its\nDefense stat by 2. Z-Effect heals user fully.",
    shortDesc: "The user throws up a psychic wall that raises its\nDefense stat by 2. Z-Effect heals user fully.",
    pp: 2
  },
  lightscreen: {
    name: "Light Screen",
    num: 113,
    type: "Psychic",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "A wondrous wall of light is put up to halve damage\nfrom special attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "A wondrous wall of light is put up to halve damage\nfrom special attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    pp: 5
  },
  haze: {
    name: "Haze",
    num: 114,
    type: "Ice",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user creates a haze that eliminates every stat\nchange on the field. Z-Effect heals user fully.\nThis has +4 Priority.",
    shortDesc: "The user creates a haze that eliminates every stat\nchange on the field. Z-Effect heals user fully.\nThis has +4 Priority.",
    pp: 30
  },
  reflect: {
    name: "Reflect",
    num: 115,
    type: "Psychic",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "A wondrous wall of light is put up to halve damage of\nphysical attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "A wondrous wall of light is put up to halve damage of\nphysical attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    pp: 5
  },
  focusenergy: {
    name: "Focus Energy",
    num: 116,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user takes a moment to focus. This boosts the\nthe user's crit rate by +2. Z-Effect +2 Speed.",
    shortDesc: "The user takes a moment to focus. This boosts the\nthe user's crit rate by +2. Z-Effect +2 Speed.",
    pp: 5
  },
  bide: {
    name: "Bide",
    num: 117,
    type: "Normal",
    flags: {
      contact: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user endures attacks for two turns, then strikes\nback to cause double the damage taken.",
    shortDesc: "The user endures attacks for two turns, then strikes\nback to cause double the damage taken.",
    pp: 10
  },
  metronome: {
    name: "Metronome",
    num: 118,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user waggles a finger and stimulates its brain\ninto randomly using nearly any move. Z-Effect boosts\nall stats by +1 before using the random Z-move.",
    shortDesc: "The user waggles a finger and stimulates its brain\ninto randomly using nearly any move. Z-Effect boosts\nall stats by +1 before using the random Z-move.",
    pp: 10
  },
  mirrormove: {
    name: "Mirror Move",
    num: 119,
    type: "Flying",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user counters the target by mimicking the\ntarget’s last move. Z-Effect +2 Attack.\nThis has +6 Priority.",
    shortDesc: "The user counters the target by mimicking the\ntarget’s last move. Z-Effect +2 Attack.\nThis has +6 Priority.",
    pp: 5
  },
  detonate: {
    name: "Detonate",
    num: 120,
    type: "Fire",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1
    },
    basePower: 250,
    accuracy: 100,
    category: "Special",
    desc: "The user detonates itself, causing a fiery explosion.\nThis causes the user to faint. In exchange, everything\nhit by the explosion is left with a burn. Ignores Protect.",
    shortDesc: "The user detonates itself, causing a fiery explosion.\nThis causes the user to faint. In exchange, everything\nhit by the explosion is left with a burn. Ignores Protect.",
    pp: 5
  },
  eggcannon: {
    name: "Egg Cannon",
    num: 121,
    type: "Normal",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user fires a barrage of three exploding eggs.\nThis hits 3 times and ALWAYS lands a critical hit.",
    shortDesc: "The user fires a barrage of three exploding eggs.\nThis hits 3 times and ALWAYS lands a critical hit.",
    pp: 5
  },
  deviouslick: {
    name: "Devious Lick",
    num: 122,
    type: "Poison",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 20,
    accuracy: true,
    category: "Special",
    desc: "The user uses its filthy tongue to lick the foe.\nThis leaves the foe afflicted with a curse, causing\nthem to lose 1/4 of their max HP after each turn.",
    shortDesc: "The user uses its filthy tongue to lick the foe.\nThis leaves the foe afflicted with a curse, causing\nthem to lose 1/4 of their max HP after each turn.",
    pp: 3
  },
  smog: {
    name: "Smog",
    num: 123,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 40,
    accuracy: 100,
    category: "Special",
    desc: "The foes are attacked with a discharge of filthy gases\nThis ALWAYS poisons those exposed to the smog.",
    shortDesc: "The foes are attacked with a discharge of filthy gases\nThis ALWAYS poisons those exposed to the smog.",
    pp: 15
  },
  sludgefling: {
    name: "Sludge Fling",
    num: 124,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user flings thick, slimy sludge at the foe.\nThis ALWAYS lowers the foe's Speed by 1.",
    shortDesc: "The user flings thick, slimy sludge at the foe.\nThis ALWAYS lowers the foe's Speed by 1.",
    pp: 20
  },
  boneclub: {
    name: "Bone Club",
    num: 125,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Physical",
    desc: "The user clubs the target with a hard bone.\nThis ALWAYS lowers the foe's Defense by 1,\nand ALWAYS flinches the foe. +4 Priority.",
    shortDesc: "The user clubs the target with a hard bone.\nThis ALWAYS lowers the foe's Defense by 1,\nand ALWAYS flinches the foe. +4 Priority.",
    pp: 1
  },
  fireblast: {
    name: "Fire Blast",
    num: 126,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 90,
    category: "Special",
    desc: "The target is attacked with an intense blast of\nflames. This burns the target 25% of the time.",
    shortDesc: "The target is attacked with an intense blast of\nflames. This burns the target 25% of the time.",
    pp: 5
  },
  wavecrash: {
    name: "Wave Crash",
    num: 127,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user surges at the target with great force.\nThis deals 25% recoil to the user, and has a 20%\nflinch rate. Contact.",
    shortDesc: "The user surges at the target with great force.\nThis deals 25% recoil to the user, and has a 20%\nflinch rate. Contact.",
    pp: 10
  },
  clamp: {
    name: "Clamp",
    num: 128,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The target is clamped and squeezed by the user’s\nsturdy shell for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    shortDesc: "The target is clamped and squeezed by the user’s\nsturdy shell for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    pp: 15
  },
  swift: {
    name: "Swift",
    num: 129,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Special",
    desc: "Star-shaped rays are rapidly shot at foe.\nThis attack has +2 Priority, and can't miss.",
    shortDesc: "Star-shaped rays are rapidly shot at foe.\nThis attack has +2 Priority, and can't miss.",
    pp: 10
  },
  skullbash: {
    name: "Skull Bash",
    num: 130,
    type: "Normal",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 90,
    accuracy: true,
    category: "Physical",
    desc: "On the 1st turn, the user tucks in its head, raising\nDefense by 1. On the 2nd, the user charges, gaining\n+1 Attack & Accuracy. ALWAYS crits, Ignores protect.",
    shortDesc: "On the 1st turn, the user tucks in its head, raising\nDefense by 1. On the 2nd, the user charges, gaining\n+1 Attack & Accuracy. ALWAYS crits, Ignores protect.",
    pp: 5
  },
  burningbarrage: {
    name: "Burning Barrage",
    num: 131,
    type: "Fire",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 20,
    accuracy: 100,
    category: "Physical",
    desc: "The user fires three burning projectiles at the foe.\nThis will ALWAYS leave the target with a burn.",
    shortDesc: "The user fires three burning projectiles at the foe.\nThis will ALWAYS leave the target with a burn.",
    pp: 10
  },
  constrict: {
    name: "Constrict",
    num: 132,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The target is constricted with thick, strong vines.\nFor 6 turns, the foe can't switch out of battle and\nloses 12% of their max HP after each turn. Contact.",
    shortDesc: "The target is constricted with thick, strong vines.\nFor 6 turns, the foe can't switch out of battle and\nloses 12% of their max HP after each turn. Contact.",
    pp: 20
  },
  amnesia: {
    name: "Amnesia",
    num: 133,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user temporarily empties its mind to forget its\nconcerns. This raises the user's Sp. Def by +2.\nZ-Effect heals user fully.",
    shortDesc: "The user temporarily empties its mind to forget its\nconcerns. This raises the user's Sp. Def by +2.\nZ-Effect heals user fully.",
    pp: 2
  },
  kinesis: {
    name: "Kinesis",
    num: 134,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 80,
    category: "Status",
    desc: "The user distracts the target by bending a spoon.\nThis lowers the target’s accuracy.",
    shortDesc: "The user distracts the target by bending a spoon.\nThis lowers the target’s accuracy.",
    pp: 15
  },
  softboiled: {
    name: "Soft-Boiled",
    num: 135,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user consumes the egg it holds, healing itself to\nfull HP. This has +4 Priority, but only 2 PP.\nZ-Effect gives the user +3 Speed.",
    shortDesc: "The user consumes the egg it holds, healing itself to\nfull HP. This has +4 Priority, but only 2 PP.\nZ-Effect gives the user +3 Speed.",
    pp: 3
  },
  divebomb: {
    name: "Divebomb",
    num: 136,
    type: "Flying",
    flags: {
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 90,
    category: "Physical",
    desc: "The user recklessly dives onto the target from above.\nIf it misses, the user loses half max HP. Contact.",
    shortDesc: "The user recklessly dives onto the target from above.\nIf it misses, the user loses half max HP. Contact.",
    pp: 5
  },
  glare: {
    name: "Glare",
    num: 137,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user intimidates the target with a glare,\ncausing paralysis AND lowering offensive stats by 1.\nZ-Effect gives +2 Attack.",
    shortDesc: "The user intimidates the target with a glare,\ncausing paralysis AND lowering offensive stats by 1.\nZ-Effect gives +2 Attack.",
    pp: 10
  },
  dreameater: {
    name: "Dream Eater",
    num: 138,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "The user eats the dreams of a sleeping target. It\nabsorbs 100% of the damage caused to heal its own HP.",
    shortDesc: "The user eats the dreams of a sleeping target. It\nabsorbs 100% of the damage caused to heal its own HP.",
    pp: 15
  },
  poisongas: {
    name: "Poison Gas",
    num: 139,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "A cloud of poison gas is sprayed at the opponents,\npoisoning those hit. Z-Effect +2 Sp. Atk.",
    shortDesc: "A cloud of poison gas is sprayed at the opponents,\npoisoning those hit. Z-Effect +2 Sp. Atk.",
    pp: 40
  },
  triplecannonade: {
    name: "Triple Cannonade",
    num: 140,
    type: "Steel",
    flags: {
      heal: 1,
      mirror: 1,
      bullet: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "Three rounds of heavy artillery are fired at the foe.\nThis ALWAYS results in a critical hit, hits 3 times,\nand bypasses Protect.",
    shortDesc: "Three rounds of heavy artillery are fired at the foe.\nThis ALWAYS results in a critical hit, hits 3 times,\nand bypasses Protect.",
    pp: 3
  },
  leechlife: {
    name: "Leech Life",
    num: 141,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user drains the target’s vital fluids.\nThis heals the user by ALL damage dealt. Contact.",
    shortDesc: "The user drains the target’s vital fluids.\nThis heals the user by ALL damage dealt. Contact.",
    pp: 10
  },
  dreamykiss: {
    name: "Dreamy Kiss",
    num: 142,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: 85,
    category: "Status",
    desc: "The user kisses the target dreamily, causing the\ntarget to sleep for 2 turns. Z-Effect +2 Sp. Def.",
    shortDesc: "The user kisses the target dreamily, causing the\ntarget to sleep for 2 turns. Z-Effect +2 Sp. Def.",
    pp: 2
  },
  skyattack: {
    name: "Sky Attack",
    num: 143,
    type: "Flying",
    flags: {
      charge: 1,
      mirror: 1
    },
    basePower: 120,
    accuracy: true,
    category: "Physical",
    desc: "A 2 turn attack where the user soars from the sky\nwith full power. This ALWAYS crits.\n30% Flinch rate. Ignores protect. Contact.",
    shortDesc: "A 2 turn attack where the user soars from the sky\nwith full power. This ALWAYS crits.\n30% Flinch rate. Ignores protect. Contact.",
    pp: 5
  },
  transform: {
    name: "Transform",
    num: 144,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user transforms into an identical copy of the foe,\nbesides the HP stat. Z-Effect heals user.\nThis has +6 priority.",
    shortDesc: "The user transforms into an identical copy of the foe,\nbesides the HP stat. Z-Effect heals user.\nThis has +6 priority.",
    pp: 10
  },
  bubblebarrage: {
    name: "Bubble Barrage",
    num: 145,
    type: "Water",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 20,
    accuracy: 100,
    category: "Special",
    desc: "The user fires a barrage of bubbles at the foe.\nHits 3 times. Each hit lowers the foe's Speed by 1.",
    shortDesc: "The user fires a barrage of bubbles at the foe.\nHits 3 times. Each hit lowers the foe's Speed by 1.",
    pp: 10
  },
  dizzypunches: {
    name: "Dizzy Punches",
    num: 146,
    type: "Psychic",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 30,
    accuracy: 100,
    category: "Physical",
    desc: "The target is hit with 3 punches imbued with psychic\nenergy. Each hit has a 30% chance to confuse for 4\nturns. Contact.",
    shortDesc: "The target is hit with 3 punches imbued with psychic\nenergy. Each hit has a 30% chance to confuse for 4\nturns. Contact.",
    pp: 10
  },
  spore: {
    name: "Spore",
    num: 147,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user scatters bursts of spores that\ninduce sleep for 2 turns. Z-Effect +2 Sp. Def.",
    shortDesc: "The user scatters bursts of spores that\ninduce sleep for 2 turns. Z-Effect +2 Sp. Def.",
    pp: 2
  },
  neuralyze: {
    name: "Neuralyze",
    num: 148,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user flashes a strange light that wipes the foe's\nmemory, causing them to forget their last used move\nfor 15 turns. +6 Priority. Z-Effect +3 Sp. Def.",
    shortDesc: "The user flashes a strange light that wipes the foe's\nmemory, causing them to forget their last used move\nfor 15 turns. +6 Priority. Z-Effect +3 Sp. Def.",
    pp: 5
  },
  pendulumwave: {
    name: "Pendulum Wave",
    num: 149,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Special",
    desc: "Hypno swings its pendulum, firing off a psywave that\nvaries in power, and sleeps the foe for 2 FULL turns\nAFTER its used. +4 Priority. Z-Effect +2 Speed.",
    shortDesc: "Hypno swings its pendulum, firing off a psywave that\nvaries in power, and sleeps the foe for 2 FULL turns\nAFTER its used. +4 Priority. Z-Effect +2 Speed.",
    pp: 1
  },
  hop: {
    name: "Hop",
    num: 150,
    type: "Normal",
    flags: {
      gravity: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user just hops around, doing absolutely nothing.\nZ-Effect +3 Attack.",
    shortDesc: "The user just hops around, doing absolutely nothing.\nZ-Effect +3 Attack.",
    pp: 1
  },
  acidarmor: {
    name: "Acid Armor",
    num: 151,
    type: "Poison",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user alters its cellular structure to liquefy itself,\nraising Defense by 3. Z-Effect heals user fully.",
    shortDesc: "The user alters its cellular structure to liquefy itself,\nraising Defense by 3. Z-Effect heals user fully.",
    pp: 2
  },
  crabhammer: {
    name: "Crabhammer",
    num: 152,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: true,
    category: "Physical",
    desc: "The target is hammered hard with the user's pincer.\nThis ALWAYS crits and can't miss.\n30% Defense drop rate. Contact.",
    shortDesc: "The target is hammered hard with the user's pincer.\nThis ALWAYS crits and can't miss.\n30% Defense drop rate. Contact.",
    pp: 5
  },
  explosion: {
    name: "Explosion",
    num: 153,
    type: "Normal",
    flags: {
      heal: 1,
      mirror: 1
    },
    basePower: 250,
    accuracy: 100,
    category: "Special",
    desc: "The user blows itself up, causing massive destruction.\nThis will ALWAYS result in a critical hit.\nThis also bypasses Protect.",
    shortDesc: "The user blows itself up, causing massive destruction.\nThis will ALWAYS result in a critical hit.\nThis also bypasses Protect.",
    pp: 5
  },
  furyswipes: {
    name: "Fury Swipes",
    num: 154,
    type: "Dark",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The target is raked with sharp claws, scythes, or the\nlike furiously 2-5 times in a row. Contact.",
    shortDesc: "The target is raked with sharp claws, scythes, or the\nlike furiously 2-5 times in a row. Contact.",
    pp: 15
  },
  bonemerang: {
    name: "Bonemerang",
    num: 155,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user throws a bone like a boomerang, hitting 2\ntimes. Each hit has a 20% flinch rate.",
    shortDesc: "The user throws a bone like a boomerang, hitting 2\ntimes. Each hit has a 20% flinch rate.",
    pp: 5
  },
  rest: {
    name: "Rest",
    num: 156,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user goes to sleep for two turns. This fully\nrestores the user’s HP and heals any\nstatus conditions. Z-Effect +2 Sp. Def.",
    shortDesc: "The user goes to sleep for two turns. This fully\nrestores the user’s HP and heals any\nstatus conditions. Z-Effect +2 Sp. Def.",
    pp: 10
  },
  rockslide: {
    name: "Rock Slide",
    num: 157,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 95,
    category: "Physical",
    desc: "Large boulders are hurled at the opposing Pokemon\nto inflict damage. This flinches 30% of the time.",
    shortDesc: "Large boulders are hurled at the opposing Pokemon\nto inflict damage. This flinches 30% of the time.",
    pp: 10
  },
  hyperfang: {
    name: "Hyper Fang",
    num: 158,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: true,
    category: "Physical",
    desc: "The user bites the foe with specialized front teeth.\nThis will ALWAYS result in a critical hit, and has a\n30% flinch rate, and can't miss. Contact.",
    shortDesc: "The user bites the foe with specialized front teeth.\nThis will ALWAYS result in a critical hit, and has a\n30% flinch rate, and can't miss. Contact.",
    pp: 5
  },
  fortify: {
    name: "Fortify",
    num: 159,
    type: "Steel",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user fortifies the metal on its body.\nThis heals the user by 50% of their max HP.\nZ-Effect gives +2 Defense.",
    shortDesc: "The user fortifies the metal on its body.\nThis heals the user by 50% of their max HP.\nZ-Effect gives +2 Defense.",
    pp: 5
  },
  acclimate: {
    name: "Acclimate",
    num: 160,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user changes its type to become the same type\nas the move at the top of the list of moves it knows.\nZ-Effect +1 all stats. +4 Priority.",
    shortDesc: "The user changes its type to become the same type\nas the move at the top of the list of moves it knows.\nZ-Effect +1 all stats. +4 Priority.",
    pp: 30
  },
  triattack: {
    name: "Tri Attack",
    num: 161,
    type: "Normal",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 35,
    accuracy: 100,
    category: "Special",
    desc: "The user fires three volatile beams of energy.\nThis hits 3 times, with each hit having a 10% chance\nto either burn, paralyze or freeze, totaling to 27%.",
    shortDesc: "The user fires three volatile beams of energy.\nThis hits 3 times, with each hit having a 10% chance\nto either burn, paralyze or freeze, totaling to 27%.",
    pp: 5
  },
  superfang: {
    name: "Super Fang",
    num: 162,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user chomps hard on the target with its sharp\nfront fangs. This cuts the target’s HP in half. Contact.",
    shortDesc: "The user chomps hard on the target with its sharp\nfront fangs. This cuts the target’s HP in half. Contact.",
    pp: 10
  },
  slash: {
    name: "Slash",
    num: 163,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The target is attacked with a slash of claws, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The target is attacked with a slash of claws, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  substitute: {
    name: "Substitute",
    num: 164,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user makes a decoy using 25% of it's HP. This\ndecoy can absorb most attacks for the user.\nZ-Effect +3 Accuracy.",
    shortDesc: "The user makes a decoy using 25% of it's HP. This\ndecoy can absorb most attacks for the user.\nZ-Effect +3 Accuracy.",
    pp: 5
  },
  struggle: {
    name: "Struggle",
    num: 165,
    type: "Normal",
    flags: {
      contact: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "This attack is used in desperation only if the user\nhas no PP. It has 50% recoil for the user.",
    shortDesc: "This attack is used in desperation only if the user\nhas no PP. It has 50% recoil for the user.",
    pp: 1
  },
  sketch: {
    name: "Sketch",
    num: 166,
    type: "Normal",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Smeargle instantly learns the last used move.\nThis has +6 priority now, because the Z-Effect gives\nSmeargle +1 to all of its stats.",
    shortDesc: "Smeargle instantly learns the last used move.\nThis has +6 priority now, because the Z-Effect gives\nSmeargle +1 to all of its stats.",
    pp: 1
  },
  triplekick: {
    name: "Triple Kick",
    num: 167,
    type: "Fighting",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 10,
    accuracy: true,
    category: "Physical",
    desc: "This kick ALWAYS lands a critical hit, and won't\nmiss anymore. It's effectively 15, 30 and then 45 BP.\nThis adds up to 90 BP overall. Contact.",
    shortDesc: "This kick ALWAYS lands a critical hit, and won't\nmiss anymore. It's effectively 15, 30 and then 45 BP.\nThis adds up to 90 BP overall. Contact.",
    pp: 10
  },
  thief: {
    name: "Thief",
    num: 168,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks and steals the target’s held item\nsimultaneously. The user can’t steal anything if it\nalready holds an item. Contact.",
    shortDesc: "The user attacks and steals the target’s held item\nsimultaneously. The user can’t steal anything if it\nalready holds an item. Contact.",
    pp: 15
  },
  spiderweb: {
    name: "Spider Web",
    num: 169,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user ensnares the target within it's web. This\nhas +4 priority, prevents the foe from switching, and\ndrops Defense & Evasion by 3. Z-Effect +1 all stats.",
    shortDesc: "The user ensnares the target within it's web. This\nhas +4 priority, prevents the foe from switching, and\ndrops Defense & Evasion by 3. Z-Effect +1 all stats.",
    pp: 10
  },
  mindreader: {
    name: "Mind Reader",
    num: 170,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user senses the target’s movements with its\nmind to ensure its next attack does not miss\nthe target. Z-Effect +3 Sp. Atk.",
    shortDesc: "The user senses the target’s movements with its\nmind to ensure its next attack does not miss\nthe target. Z-Effect +3 Sp. Atk.",
    pp: 5
  },
  nightmare: {
    name: "Nightmare",
    num: 171,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user inflicts the foe with a horrible nightmare\nif it's asleep, making it lose 25% of it's HP per turn.\nZ-Effect +1 all stats.",
    shortDesc: "The user inflicts the foe with a horrible nightmare\nif it's asleep, making it lose 25% of it's HP per turn.\nZ-Effect +1 all stats.",
    pp: 15
  },
  flamewheel: {
    name: "Flame Wheel",
    num: 172,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user cloaks itself in fire and charges at the\ntarget spinning.This boosts the user's Speed by 1.\nContact.",
    shortDesc: "The user cloaks itself in fire and charges at the\ntarget spinning.This boosts the user's Speed by 1.\nContact.",
    pp: 15
  },
  snore: {
    name: "Snore",
    num: 173,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "This attack can be used only if the user is asleep.\nThe harsh noise will ALWAYS flinch the target.",
    shortDesc: "This attack can be used only if the user is asleep.\nThe harsh noise will ALWAYS flinch the target.",
    pp: 10
  },
  conjure: {
    name: "Conjure",
    num: 174,
    type: "Ghost",
    flags: {
      dance: 1,
      mirror: 1,
      reflectable: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user gathers energy from the \"other side.\"\nThis boosts the user's Defense & Sp. Atk by 1.\nZ-Effect gives +2 Sp. Def. Only works on Ghost types.",
    shortDesc: "The user gathers energy from the \"other side.\"\nThis boosts the user's Defense & Sp. Atk by 1.\nZ-Effect gives +2 Sp. Def. Only works on Ghost types.",
    pp: 2
  },
  flail: {
    name: "Flail",
    num: 175,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user flails about aimlessly to attack. The less HP\nthe user has, the greater the move’s power. This\ncannot miss, and makes contact.",
    shortDesc: "The user flails about aimlessly to attack. The less HP\nthe user has, the greater the move’s power. This\ncannot miss, and makes contact.",
    pp: 15
  },
  accustom: {
    name: "Accustom",
    num: 176,
    type: "Normal",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user changes its type to make itself resistant to\nthe type of the attack the opponent used last.\nZ-Effect +1 all stats. +4 Priority.",
    shortDesc: "The user changes its type to make itself resistant to\nthe type of the attack the opponent used last.\nZ-Effect +1 all stats. +4 Priority.",
    pp: 30
  },
  aeroblast: {
    name: "Aeroblast",
    num: 177,
    type: "Flying",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 65,
    accuracy: 100,
    category: "Special",
    desc: "A fierce vortex of air is shot at the target.\nThis ALWAYS results in a critical hit.\nThis is now a Sound Move.",
    shortDesc: "A fierce vortex of air is shot at the target.\nThis ALWAYS results in a critical hit.\nThis is now a Sound Move.",
    pp: 5
  },
  cottonspore: {
    name: "Cotton Spore",
    num: 178,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user releases cotton-like spores that cling to\nthe foes, lowering Speed by 2, and Sp. Atk by 2.\nZ-Effect gives the user +3 Defense.",
    shortDesc: "The user releases cotton-like spores that cling to\nthe foes, lowering Speed by 2, and Sp. Atk by 2.\nZ-Effect gives the user +3 Defense.",
    pp: 10
  },
  reversal: {
    name: "Reversal",
    num: 179,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "An all-out attack that becomes more powerful the\nless HP the user has. This can't miss. Contact.",
    shortDesc: "An all-out attack that becomes more powerful the\nless HP the user has. This can't miss. Contact.",
    pp: 15
  },
  spitefulspell: {
    name: "Spiteful Spell",
    num: 180,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user casts a spiteful spell on the foe, disabling\nfairy moves for 15 turns and removing 4 PP.\nThis has +4 Priority. Z-Effect heals user.",
    shortDesc: "The user casts a spiteful spell on the foe, disabling\nfairy moves for 15 turns and removing 4 PP.\nThis has +4 Priority. Z-Effect heals user.",
    pp: 5
  },
  frostflurry: {
    name: "Frost Flurry",
    num: 181,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user attacks with a rapid flurry of frost. This\nattack has +1 priority, and can't miss.",
    shortDesc: "The user attacks with a rapid flurry of frost. This\nattack has +1 priority, and can't miss.",
    pp: 20
  },
  protect: {
    name: "Protect",
    num: 182,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect resets lowered stats.",
    shortDesc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect resets lowered stats.",
    pp: 10
  },
  machpunch: {
    name: "Mach Punch",
    num: 183,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "The user throws a punch at blinding speed. This\nattack has +1 priority, and can't miss. Contact.",
    shortDesc: "The user throws a punch at blinding speed. This\nattack has +1 priority, and can't miss. Contact.",
    pp: 20
  },
  scaryface: {
    name: "Scary Face",
    num: 184,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user scares the target with a frightening face. \nThis drops Attack AND Speed by 2, and inflicts a\nsleeping foe with a nightmare. Z-Effect +2 crit rate.",
    shortDesc: "The user scares the target with a frightening face. \nThis drops Attack AND Speed by 2, and inflicts a\nsleeping foe with a nightmare. Z-Effect +2 crit rate.",
    pp: 10
  },
  wickedblow: {
    name: "Wicked Blow",
    num: 185,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user strikes the target with a wicked blow. This\nattack always results in a critical hit. Contact.\nThis attack bypasses Protect.",
    shortDesc: "The user strikes the target with a wicked blow. This\nattack always results in a critical hit. Contact.\nThis attack bypasses Protect.",
    pp: 3
  },
  charmingkiss: {
    name: "Charming Kiss",
    num: 186,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user kisses the foe in a charming, calming manner.\nThis lowers the foe's Attack by 2 in addition to\nputting the foe to sleep for 2 turns. Z-Effect heals.",
    shortDesc: "The user kisses the foe in a charming, calming manner.\nThis lowers the foe's Attack by 2 in addition to\nputting the foe to sleep for 2 turns. Z-Effect heals.",
    pp: 1
  },
  bellydrum: {
    name: "Belly Drum",
    num: 187,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user maximizes its Attack stat in exchange for\n50% of it's max HP. Z-Effect heals user fully.",
    shortDesc: "The user maximizes its Attack stat in exchange for\n50% of it's max HP. Z-Effect heals user fully.",
    pp: 10
  },
  sludgebomb: {
    name: "Sludge Bomb",
    num: 188,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "Unsanitary sludge explodes all over the target.\nThis attack poisons 30% of the time.",
    shortDesc: "Unsanitary sludge explodes all over the target.\nThis attack poisons 30% of the time.",
    pp: 10
  },
  mudfling: {
    name: "Mud Fling",
    num: 189,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user flings mud at the target, slowing it down.\nThis drops the foe's Speed by one 100% of the time.",
    shortDesc: "The user flings mud at the target, slowing it down.\nThis drops the foe's Speed by one 100% of the time.",
    pp: 20
  },
  scumshot: {
    name: "Scum Shot",
    num: 190,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 60,
    accuracy: true,
    category: "Special",
    desc: "The user rapidly shoots a dark, foul muck at the foe,\nstartling them. This has +4 Priority, and will ALWAYS\nflinch as well as BADLY poison the foe.",
    shortDesc: "The user rapidly shoots a dark, foul muck at the foe,\nstartling them. This has +4 Priority, and will ALWAYS\nflinch as well as BADLY poison the foe.",
    pp: 1
  },
  spikes: {
    name: "Spikes",
    num: 191,
    type: "Ground",
    flags: {
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user lays a trap of spikes at the opposing side.\nThis damages foes that switch in, for 12-25% of their\nHP depending on how many layers. Z-Effect +3 Defense.",
    shortDesc: "The user lays a trap of spikes at the opposing side.\nThis damages foes that switch in, for 12-25% of their\nHP depending on how many layers. Z-Effect +3 Defense.",
    pp: 20
  },
  zapcannon: {
    name: "Zap Cannon",
    num: 192,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user fires an intensely powerful blast of\nelectricity at the foe. This lowers the user's Sp. Atk\nstat by 2 after use.",
    shortDesc: "The user fires an intensely powerful blast of\nelectricity at the foe. This lowers the user's Sp. Atk\nstat by 2 after use.",
    pp: 5
  },
  investigate: {
    name: "Investigate",
    num: 193,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Gumshoos investigates the target, allowing them to\nbe hit by Normal or Fighting moves, even if they're\na Ghost-type. Z-EFFECT GIVES +3 ATTACK.",
    shortDesc: "Gumshoos investigates the target, allowing them to\nbe hit by Normal or Fighting moves, even if they're\na Ghost-type. Z-EFFECT GIVES +3 ATTACK.",
    pp: 40
  },
  destinybond: {
    name: "Destiny Bond",
    num: 194,
    type: "Ghost",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "After using this move, if the user faints, the\nPokemon that landed the knockout hit also faints.\nZ-Effect heals the user's replacement fully.",
    shortDesc: "After using this move, if the user faints, the\nPokemon that landed the knockout hit also faints.\nZ-Effect heals the user's replacement fully.",
    pp: 5
  },
  perishsong: {
    name: "Perish Song",
    num: 195,
    type: "Dark",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Any Pokemon that hears this sound faints in 3 turns.\nSwitching out removes this timer.\nZ-Effect heals user fully.",
    shortDesc: "Any Pokemon that hears this sound faints in 3 turns.\nSwitching out removes this timer.\nZ-Effect heals user fully.",
    pp: 5
  },
  icywind: {
    name: "Icy Wind",
    num: 196,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks with a gust of freezing air. This\nalways lowers the foe's Speed stat by 1.",
    shortDesc: "The user attacks with a gust of freezing air. This\nalways lowers the foe's Speed stat by 1.",
    pp: 20
  },
  detect: {
    name: "Detect",
    num: 197,
    type: "Fighting",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect will heal the user fully while protected.",
    shortDesc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect will heal the user fully while protected.",
    pp: 10
  },
  bonerush: {
    name: "Bone Rush",
    num: 198,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly throws a hard bone at the foe.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly throws a hard bone at the foe.\nThis has +1 priority, and can't miss.",
    pp: 15
  },
  lockon: {
    name: "Lock-On",
    num: 199,
    type: "Steel",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user takes sure aim at the target. This ensures\nthe next attack does not miss the target.\nZ-Effect +3 Sp. Atk.",
    shortDesc: "The user takes sure aim at the target. This ensures\nthe next attack does not miss the target.\nZ-Effect +3 Sp. Atk.",
    pp: 1
  },
  outrage: {
    name: "Outrage",
    num: 200,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 100,
    category: "Physical",
    desc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    shortDesc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    pp: 5
  },
  sandstorm: {
    name: "Sandstorm",
    num: 201,
    type: "Rock",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user summons a sandstorm.\nZ-Effect gives +2 Defense.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons a sandstorm.\nZ-Effect gives +2 Defense.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  gigadrain: {
    name: "Giga Drain",
    num: 202,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Special",
    desc: "A powerful nutrient-draining attack. The user’s HP is\nrestored by 50% of the damage taken by the target.",
    shortDesc: "A powerful nutrient-draining attack. The user’s HP is\nrestored by 50% of the damage taken by the target.",
    pp: 10
  },
  endure: {
    name: "Endure",
    num: 203,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user endures any attack with at least 1 HP.\nIts chance of failing rises if it is used in succession.\nZ-Effect +2 Speed.",
    shortDesc: "The user endures any attack with at least 1 HP.\nIts chance of failing rises if it is used in succession.\nZ-Effect +2 Speed.",
    pp: 10
  },
  charm: {
    name: "Charm",
    num: 204,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user gazes at the target rather charmingly,\nmaking it less wary. This lowers their Attack by 2.\nZ-Charm +2 Attack.",
    shortDesc: "The user gazes at the target rather charmingly,\nmaking it less wary. This lowers their Attack by 2.\nZ-Charm +2 Attack.",
    pp: 5
  },
  rollout: {
    name: "Rollout",
    num: 205,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 30,
    accuracy: 90,
    category: "Physical",
    desc: "The user continually rolls into the target over five\nturns. It becomes more powerful each time it hits. Contact.",
    shortDesc: "The user continually rolls into the target over five\nturns. It becomes more powerful each time it hits. Contact.",
    pp: 5
  },
  falsestrike: {
    name: "False Strike",
    num: 206,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "The user feigns a strike that will never faint the\ntarget. In exchange, this boosts the user's Attack\nand Accuracy by 1 after use. Can't miss. Contact.",
    shortDesc: "The user feigns a strike that will never faint the\ntarget. In exchange, this boosts the user's Attack\nand Accuracy by 1 after use. Can't miss. Contact.",
    pp: 5
  },
  swagger: {
    name: "Swagger",
    num: 207,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user enrages and confuses the target for 3 turns.\nThis raises their Attack by 2, making them hit\nthemselves for more damage. Z-Effect +2 Attack.",
    shortDesc: "The user enrages and confuses the target for 3 turns.\nThis raises their Attack by 2, making them hit\nthemselves for more damage. Z-Effect +2 Attack.",
    pp: 15
  },
  milkdrink: {
    name: "Milk Drink",
    num: 208,
    type: "Normal",
    flags: {
      heal: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Miltank drinks its own milk, healing to FULL HP.\nZ-Effect gives +2 Defense.\nThis also has +4 PRIORITY. Yummy.",
    shortDesc: "Miltank drinks its own milk, healing to FULL HP.\nZ-Effect gives +2 Defense.\nThis also has +4 PRIORITY. Yummy.",
    pp: 10
  },
  spark: {
    name: "Spark",
    num: 209,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Physical",
    desc: "The user, charged with electricity, rapidly dashes at\nthe target. This has +2 priority, and can't miss.\nContact.",
    shortDesc: "The user, charged with electricity, rapidly dashes at\nthe target. This has +2 priority, and can't miss.\nContact.",
    pp: 10
  },
  furycutter: {
    name: "Fury Cutter",
    num: 210,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 35,
    accuracy: 90,
    category: "Physical",
    desc: "The target is slashed with scythes or claws. This\nmove doubles in power if used in sucession. Contact.",
    shortDesc: "The target is slashed with scythes or claws. This\nmove doubles in power if used in sucession. Contact.",
    pp: 20
  },
  steelwing: {
    name: "Steel Wing",
    num: 211,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user hardens its wings and strikes the foe.\nThis ALWAYS boosts the user's Defense by 1 after use.\nContact.",
    shortDesc: "The user hardens its wings and strikes the foe.\nThis ALWAYS boosts the user's Defense by 1 after use.\nContact.",
    pp: 10
  },
  mesmereyes: {
    name: "Mesmer-Eyes",
    num: 212,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user mesmerizes the target with it's eyes\nputting it to sleep for 2 turns. Z-Effect +1 Speed.\nThis move fails on Ghost-types.",
    shortDesc: "The user mesmerizes the target with it's eyes\nputting it to sleep for 2 turns. Z-Effect +1 Speed.\nThis move fails on Ghost-types.",
    pp: 2
  },
  attract: {
    name: "Attract",
    num: 213,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    pp: 15
  },
  sleeptalk: {
    name: "Sleep Talk",
    num: 214,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "While it is asleep, the user randomly uses one of the\nmoves it knows. Z-Effect +2 crit rate.\nThis has +4 Priority.",
    shortDesc: "While it is asleep, the user randomly uses one of the\nmoves it knows. Z-Effect +2 crit rate.\nThis has +4 Priority.",
    pp: 10
  },
  timeout: {
    name: "Time Out",
    num: 215,
    type: "Fighting",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user calls a time out.\nThis heals the user's side of the field by 50% of\ntheir max HP. Z-Effect gives the user +2 Speed.",
    shortDesc: "The user calls a time out.\nThis heals the user's side of the field by 50% of\ntheir max HP. Z-Effect gives the user +2 Speed.",
    pp: 5
  },
  "return": {
    name: "Return",
    num: 216,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "This full-power attack grows more powerful the\nmore the user likes its Trainer, for a max of 102\nbase power. Contact.",
    shortDesc: "This full-power attack grows more powerful the\nmore the user likes its Trainer, for a max of 102\nbase power. Contact.",
    pp: 10
  },
  present: {
    name: "Present",
    num: 217,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "Delibird gives the foe a gift that can deal damage, or\nheal them. With NORMALIUM-Z, this becomes 200 BP, and\ngives you +2 to ALL stats BEFORE using TWINKLE TACKLE.",
    shortDesc: "Delibird gives the foe a gift that can deal damage, or\nheal them. With NORMALIUM-Z, this becomes 200 BP, and\ngives you +2 to ALL stats BEFORE using TWINKLE TACKLE.",
    pp: 1
  },
  frustration: {
    name: "Frustration",
    num: 218,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    pp: 10
  },
  safeguard: {
    name: "Safeguard",
    num: 219,
    type: "Psychic",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user creates a protective field that prevents\nstatus conditions for five turns.\nZ-Effect heals user fully.",
    shortDesc: "The user creates a protective field that prevents\nstatus conditions for five turns.\nZ-Effect heals user fully.",
    pp: 25
  },
  painsplit: {
    name: "Pain Split",
    num: 220,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user adds its HP to the target’s HP, then equally\nshares the combined HP with the target.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user adds its HP to the target’s HP, then equally\nshares the combined HP with the target.\nZ-Effect +2 Sp. Def.",
    pp: 5
  },
  infernalparade: {
    name: "Infernal Parade",
    num: 221,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 70,
    category: "Special",
    desc: "The user attacks the foe with an infernal flame\nfueled by spiritual energy. This attack leaves the\ntarget with a burn 100% of the time.",
    shortDesc: "The user attacks the foe with an infernal flame\nfueled by spiritual energy. This attack leaves the\ntarget with a burn 100% of the time.",
    pp: 5
  },
  magnitude: {
    name: "Magnitude",
    num: 222,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "The user lets off an earthquake of varying magnitude.\nThe average power is 70, with a maximum of 150 and a\nminimum of 10.",
    shortDesc: "The user lets off an earthquake of varying magnitude.\nThe average power is 70, with a maximum of 150 and a\nminimum of 10.",
    pp: 30
  },
  knockoutpunch: {
    name: "Knockout Punch",
    num: 223,
    type: "Fighting",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 80,
    category: "Physical",
    desc: "The user punches the foe with great force.\nThe resulting fatigue causes the target to fall asleep\non the next turn. Contact. Affected by Rapid Fire.",
    shortDesc: "The user punches the foe with great force.\nThe resulting fatigue causes the target to fall asleep\non the next turn. Contact. Affected by Rapid Fire.",
    pp: 5
  },
  megahorn: {
    name: "Megahorn",
    num: 224,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "Using its tough and impressive horn, the user rams\ninto the target with no letup. This lowers the user's\ndefensive stats by 1 after use. Contact.",
    shortDesc: "Using its tough and impressive horn, the user rams\ninto the target with no letup. This lowers the user's\ndefensive stats by 1 after use. Contact.",
    pp: 5
  },
  dragonbreath: {
    name: "Dragon Breath",
    num: 225,
    type: "Dragon",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Special",
    desc: "The user exhales a destructive breath of dragon\nenergy. This burns the target 30% of the time.",
    shortDesc: "The user exhales a destructive breath of dragon\nenergy. This burns the target 30% of the time.",
    pp: 15
  },
  batonpass: {
    name: "Baton Pass",
    num: 226,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user switches places with a party Pokemon in\nwaiting and passes along any stat changes.\nZ-Effect heals the ally fully. This ALWAYS goes last.",
    shortDesc: "The user switches places with a party Pokemon in\nwaiting and passes along any stat changes.\nZ-Effect heals the ally fully. This ALWAYS goes last.",
    pp: 5
  },
  encore: {
    name: "Encore",
    num: 227,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user compels the target to keep using the move\nit encored for three turns. Z-Effect +2 Speed.",
    shortDesc: "The user compels the target to keep using the move\nit encored for three turns. Z-Effect +2 Speed.",
    pp: 5
  },
  pursuit: {
    name: "Pursuit",
    num: 228,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Physical",
    desc: "The user strikes the target violently. The power of\nthe move doubles if target attempts to switch out.\nThis ALWAYS results in a critical hit. Contact.",
    shortDesc: "The user strikes the target violently. The power of\nthe move doubles if target attempts to switch out.\nThis ALWAYS results in a critical hit. Contact.",
    pp: 15
  },
  rapidspin: {
    name: "Rapid Spin",
    num: 229,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Physical",
    desc: "A spin attack that can also eliminate the effects of\ntrapping moves, entry hazards and more. This ALWAYS\nsharply raises the user's Speed by 2. Contact.",
    shortDesc: "A spin attack that can also eliminate the effects of\ntrapping moves, entry hazards and more. This ALWAYS\nsharply raises the user's Speed by 2. Contact.",
    pp: 10
  },
  sweetscent: {
    name: "Sweet Scent",
    num: 230,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "A sweet scent that lowers the opponents Sp. Def and\nSp. Atk by 1. Z-Effect raises user's Accuracy by 3.",
    shortDesc: "A sweet scent that lowers the opponents Sp. Def and\nSp. Atk by 1. Z-Effect raises user's Accuracy by 3.",
    pp: 10
  },
  irontail: {
    name: "Iron Tail",
    num: 231,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Physical",
    desc: "The target is slammed with a steel-hard tail.\nThis drops the foe's Defense 50% of the time. Contact.",
    shortDesc: "The target is slammed with a steel-hard tail.\nThis drops the foe's Defense 50% of the time. Contact.",
    pp: 5
  },
  laceration: {
    name: "Laceration",
    num: 232,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The foe is slashed with steel-hard claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The foe is slashed with steel-hard claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  skirmish: {
    name: "Skirmish",
    num: 233,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Physical",
    desc: "The user picks a fight, roughhousing the foe.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    shortDesc: "The user picks a fight, roughhousing the foe.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    pp: 10
  },
  morningsun: {
    name: "Morning Sun",
    num: 234,
    type: "Fire",
    flags: {
      defrost: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    pp: 5
  },
  synthesis: {
    name: "Synthesis",
    num: 235,
    type: "Grass",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    pp: 5
  },
  moonlight: {
    name: "Moonlight",
    num: 236,
    type: "Fairy",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    pp: 5
  },
  hiddenpower: {
    name: "Hidden Power Water",
    num: 237,
    type: "Water",
    flags: {
      protect: 1,
      mirror: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "",
    shortDesc: "",
    pp: 15
  },
  crosschop: {
    name: "Cross Chop",
    num: 238,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user delivers a vicous chop with hands, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The user delivers a vicous chop with hands, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  twister: {
    name: "Twister",
    num: 239,
    type: "Dragon",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Special",
    desc: "The user quickly whips up a tornado fueled by\ndragon energy. This has +1 Priority, and can't miss.",
    shortDesc: "The user quickly whips up a tornado fueled by\ndragon energy. This has +1 Priority, and can't miss.",
    pp: 15
  },
  raindance: {
    name: "Rain Dance",
    num: 240,
    type: "Water",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user summons rain that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons rain that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  sunnyday: {
    name: "Sunny Day",
    num: 241,
    type: "Fire",
    flags: {
      defrost: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user summons sunlight that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons sunlight that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  crunch: {
    name: "Crunch",
    num: 242,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user crunches up the target with sharp fangs.\nThis lowers Defense 30% of the time. Contact.",
    shortDesc: "The user crunches up the target with sharp fangs.\nThis lowers Defense 30% of the time. Contact.",
    pp: 15
  },
  mirrorcoat: {
    name: "Mirror Coat",
    num: 243,
    type: "Psychic",
    flags: {
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "A retaliation move that counters any special attack,\ninflicting double the damage taken.",
    shortDesc: "A retaliation move that counters any special attack,\ninflicting double the damage taken.",
    pp: 20
  },
  psychup: {
    name: "Psych Up",
    num: 244,
    type: "Psychic",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user hypnotizes itself into copying any stat\nchange made by the target. This has +4 Priority.\nZ-Effect heals user fully.",
    shortDesc: "The user hypnotizes itself into copying any stat\nchange made by the target. This has +4 Priority.\nZ-Effect heals user fully.",
    pp: 10
  },
  extremespeed: {
    name: "Extreme Speed",
    num: 245,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: true,
    category: "Physical",
    desc: "The user charges the target at blinding speed.\nThis has +3 priority, and can't miss. Contact.",
    shortDesc: "The user charges the target at blinding speed.\nThis has +3 priority, and can't miss. Contact.",
    pp: 5
  },
  ancientpower: {
    name: "Ancient Power",
    num: 246,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks with rocks imbued with a strange\nprimal energy. This ALWAYS lowers BOTH offensive\nstats of the opponent by 1.",
    shortDesc: "The user attacks with rocks imbued with a strange\nprimal energy. This ALWAYS lowers BOTH offensive\nstats of the opponent by 1.",
    pp: 10
  },
  shadowball: {
    name: "Shadow Ball",
    num: 247,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user hurls a shadowy blob at the target.\nThis lowers the target's Sp. Def 20% of the time.",
    shortDesc: "The user hurls a shadowy blob at the target.\nThis lowers the target's Sp. Def 20% of the time.",
    pp: 15
  },
  futuresight: {
    name: "Future Sight",
    num: 248,
    type: "Psychic",
    flags: {
      bypasssub: 1
    },
    basePower: 160,
    accuracy: 100,
    category: "Special",
    desc: "The user foresees a very powerful attack that will\nstrike the target 2 turns after this move is used.\nThis bypasses Protect, Substitute, and cannot miss.",
    shortDesc: "The user foresees a very powerful attack that will\nstrike the target 2 turns after this move is used.\nThis bypasses Protect, Substitute, and cannot miss.",
    pp: 5
  },
  boulderbash: {
    name: "Boulder Bash",
    num: 249,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user smashes the foe with a rock-shattering punch.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    shortDesc: "The user smashes the foe with a rock-shattering punch.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    pp: 15
  },
  whirlpool: {
    name: "Whirlpool",
    num: 250,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 85,
    category: "Special",
    desc: "The user traps the target in a violent swirling whirlpool\nthat traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The user traps the target in a violent swirling whirlpool\nthat traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    pp: 5
  },
  beatup: {
    name: "Beat Up",
    num: 251,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user gets all party Pokemon to attack the target.\nEach hit uses the user's Attack stat for damage. The\nmath for each hit's power is: base Attack/10, add 5.",
    shortDesc: "The user gets all party Pokemon to attack the target.\nEach hit uses the user's Attack stat for damage. The\nmath for each hit's power is: base Attack/10, add 5.",
    pp: 10
  },
  fakeout: {
    name: "Fake Out",
    num: 252,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "A quick and unexpected strike fakes out the target.\nThis has +5 Priority & always flinches- but only works\nthe 1st turn in battle. Contact. BYPASSES PROTECT.",
    shortDesc: "A quick and unexpected strike fakes out the target.\nThis has +5 Priority & always flinches- but only works\nthe 1st turn in battle. Contact. BYPASSES PROTECT.",
    pp: 5
  },
  uproar: {
    name: "Uproar",
    num: 253,
    type: "Fighting",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks in an uproar for three turns.\nDuring that time, no Pokemon can fall asleep.",
    shortDesc: "The user attacks in an uproar for three turns.\nDuring that time, no Pokemon can fall asleep.",
    pp: 5
  },
  stockpile: {
    name: "Stockpile",
    num: 254,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user charges up power and raises both its\nDefense and Sp. Def stats by 1. The move can be\nused three times. Z-Effect heals user fully.",
    shortDesc: "The user charges up power and raises both its\nDefense and Sp. Def stats by 1. The move can be\nused three times. Z-Effect heals user fully.",
    pp: 10
  },
  spewout: {
    name: "Spew Out",
    num: 255,
    type: "Poison",
    flags: {
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "The user upchucks its caustic stomach contents.\nFor every Stockpile use, this gains 100 BP, maxing at\n300 BP. ALWAYS crits & drops Sp. Def by 4.",
    shortDesc: "The user upchucks its caustic stomach contents.\nFor every Stockpile use, this gains 100 BP, maxing at\n300 BP. ALWAYS crits & drops Sp. Def by 4.",
    pp: 15
  },
  swallow: {
    name: "Swallow",
    num: 256,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals 1/3 for 1 stockpile, 1/2 for 2, and full\nHP for 3 stockpiles. This now has +4 priority.\nZ-Move gives +1 all stats. (Doesn't work with Simple.)",
    shortDesc: "The user heals 1/3 for 1 stockpile, 1/2 for 2, and full\nHP for 3 stockpiles. This now has +4 priority.\nZ-Move gives +1 all stats. (Doesn't work with Simple.)",
    pp: 10
  },
  heatwave: {
    name: "Heat Wave",
    num: 257,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 65,
    accuracy: 100,
    category: "Special",
    desc: "The user blows a burning, abrasive wind at the foes.\nThis will ALWAYS result in a critical hit.",
    shortDesc: "The user blows a burning, abrasive wind at the foes.\nThis will ALWAYS result in a critical hit.",
    pp: 5
  },
  hail: {
    name: "Hail",
    num: 258,
    type: "Ice",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user summons a hailstorm lasting five turns.\nZ-Effect +2 Defense.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons a hailstorm lasting five turns.\nZ-Effect +2 Defense.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  torment: {
    name: "Torment",
    num: 259,
    type: "Dark",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user torments and enrages the target, making it\nincapable of using the same move twice in a row.\nZ-Effect +2 Attack.",
    shortDesc: "The user torments and enrages the target, making it\nincapable of using the same move twice in a row.\nZ-Effect +2 Attack.",
    pp: 15
  },
  flatter: {
    name: "Flatter",
    num: 260,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Flattery is used to confuse the target for 4 turns.\nThis also raises the target’s Sp. Atk by 1.\nZ-Effect gives +3 Sp. Atk.",
    shortDesc: "Flattery is used to confuse the target for 4 turns.\nThis also raises the target’s Sp. Atk by 1.\nZ-Effect gives +3 Sp. Atk.",
    pp: 15
  },
  willowisp: {
    name: "Will-O-Wisp",
    num: 261,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 90,
    category: "Status",
    desc: "The user shoots a sinister, bluish-white flame at the\ntarget to inflict a burn. Z-Effect +3 Accuracy.",
    shortDesc: "The user shoots a sinister, bluish-white flame at the\ntarget to inflict a burn. Z-Effect +3 Accuracy.",
    pp: 10
  },
  memento: {
    name: "Memento",
    num: 262,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user faints when using this move. In return, this\nlowers the target's Sp. Atk and Attack by 2.\n+4 Priority. Z-Effect heals user's replacement fully.",
    shortDesc: "The user faints when using this move. In return, this\nlowers the target's Sp. Atk and Attack by 2.\n+4 Priority. Z-Effect heals user's replacement fully.",
    pp: 10
  },
  facade: {
    name: "Facade",
    num: 263,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "This attack's power is doubled if the user is\nburnt, poisoned or paralyzed. Contact.",
    shortDesc: "This attack's power is doubled if the user is\nburnt, poisoned or paralyzed. Contact.",
    pp: 20
  },
  focuspunch: {
    name: "Focus Punch",
    num: 264,
    type: "Fighting",
    flags: {
      contact: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: true,
    category: "Physical",
    desc: "The user focuses its mind and fires a massive punch\nat the end of the turn if they weren't hit that turn.\nThis ALWAYS crits, and gives +1 Accuracy. Contact.",
    shortDesc: "The user focuses its mind and fires a massive punch\nat the end of the turn if they weren't hit that turn.\nThis ALWAYS crits, and gives +1 Accuracy. Contact.",
    pp: 10
  },
  smellingsalts: {
    name: "Smelling Salts",
    num: 265,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: true,
    category: "Physical",
    desc: "The user smacks the foe, resuscitating them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is paralyzed. Contact.",
    shortDesc: "The user smacks the foe, resuscitating them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is paralyzed. Contact.",
    pp: 1
  },
  followme: {
    name: "Follow Me",
    num: 266,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user draws attention to itself, making all targets\ntake aim only at the user. Z-Effect heals user fully.",
    shortDesc: "The user draws attention to itself, making all targets\ntake aim only at the user. Z-Effect heals user fully.",
    pp: 5
  },
  naturepower: {
    name: "Nature Power",
    num: 267,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user summons energy from the environment.\nThis changes into a move based on the terrain, like\nPsychic, Moonblast, Thunderbolt & Energy Ball.",
    shortDesc: "The user summons energy from the environment.\nThis changes into a move based on the terrain, like\nPsychic, Moonblast, Thunderbolt & Energy Ball.",
    pp: 20
  },
  recharge: {
    name: "Recharge",
    num: 268,
    type: "Electric",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals itself by 35% of it's max HP, and\nDOUBLES the power of it's next used Electric attack.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 35% of it's max HP, and\nDOUBLES the power of it's next used Electric attack.\nZ-Effect +2 Sp. Def.",
    pp: 5
  },
  taunt: {
    name: "Taunt",
    num: 269,
    type: "Dark",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The target is taunted into a rage that allows it to use\nonly attack moves for three turns. Z-Effect +2 Attack.",
    shortDesc: "The target is taunted into a rage that allows it to use\nonly attack moves for three turns. Z-Effect +2 Attack.",
    pp: 20
  },
  helpinghand: {
    name: "Helping Hand",
    num: 270,
    type: "Normal",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user assists an ally by boosting the power of\nthat ally’s attack by 1.5x.\nThis has +6 Priority. Z-Effect heals the user fully.",
    shortDesc: "The user assists an ally by boosting the power of\nthat ally’s attack by 1.5x.\nThis has +6 Priority. Z-Effect heals the user fully.",
    pp: 20
  },
  trick: {
    name: "Trick",
    num: 271,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user catches the target off guard and swaps its\nheld item with its own. Z-Effect +3 Speed.\n+4 Priority.",
    shortDesc: "The user catches the target off guard and swaps its\nheld item with its own. Z-Effect +3 Speed.\n+4 Priority.",
    pp: 1
  },
  roleplay: {
    name: "Role Play",
    num: 272,
    type: "Psychic",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user mimics the target completely, copying the\ntarget’s natural Ability. Z-Effect +3 Speed.",
    shortDesc: "The user mimics the target completely, copying the\ntarget’s natural Ability. Z-Effect +3 Speed.",
    pp: 10
  },
  wish: {
    name: "Wish",
    num: 273,
    type: "Fairy",
    flags: {
      snatch: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "One turn after this move is used, the user’s or its\nreplacement’s HP is restored by half the user’s\nmax HP. Z-Effect +2 Sp. Def.",
    shortDesc: "One turn after this move is used, the user’s or its\nreplacement’s HP is restored by half the user’s\nmax HP. Z-Effect +2 Sp. Def.",
    pp: 10
  },
  assist: {
    name: "Assist",
    num: 274,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user hurriedly and randomly uses a move among\nthose known by ally Pokemon.\nZ-Effect +1 all stats before attacking with a Z-Move.",
    shortDesc: "The user hurriedly and randomly uses a move among\nthose known by ally Pokemon.\nZ-Effect +1 all stats before attacking with a Z-Move.",
    pp: 5
  },
  ingrain: {
    name: "Ingrain",
    num: 275,
    type: "Grass",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user digs roots in the ground, locking itself on\nthe field, but heals 1/16 per turn. Gives -3 Speed\nfor +3 SP. ATK/SPDEF. Z-Effect gives +3 DEFENSE.",
    shortDesc: "The user digs roots in the ground, locking itself on\nthe field, but heals 1/16 per turn. Gives -3 Speed\nfor +3 SP. ATK/SPDEF. Z-Effect gives +3 DEFENSE.",
    pp: 1
  },
  superpower: {
    name: "Superpower",
    num: 276,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks with overwhelming physical force.\nIn exchange, the user's Attack drops by 2 after use.\nContact.",
    shortDesc: "The user attacks with overwhelming physical force.\nIn exchange, the user's Attack drops by 2 after use.\nContact.",
    pp: 5
  },
  magiccoat: {
    name: "Magic Coat",
    num: 277,
    type: "Psychic",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "A barrier reflects back to the target moves like\nLeech Seed and moves that damage status.\n+6 Priority. Z-Effect +3 Sp. Def.",
    shortDesc: "A barrier reflects back to the target moves like\nLeech Seed and moves that damage status.\n+6 Priority. Z-Effect +3 Sp. Def.",
    pp: 15
  },
  recycle: {
    name: "Recycle",
    num: 278,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user recycles a held item that has been used in\nbattle so it can be used again.\n+6 Priority. Z-Effect heals user fully.",
    shortDesc: "The user recycles a held item that has been used in\nbattle so it can be used again.\n+6 Priority. Z-Effect heals user fully.",
    pp: 10
  },
  ragingfury: {
    name: "Raging Fury",
    num: 279,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user unleashes its burning rage onto the foe.\nRaises the user's Attack by 1 after use, & can't miss.\nIf the user was attacked this turn, the power DOUBLES.",
    shortDesc: "The user unleashes its burning rage onto the foe.\nRaises the user's Attack by 1 after use, & can't miss.\nIf the user was attacked this turn, the power DOUBLES.",
    pp: 5
  },
  brickbreak: {
    name: "Brick Break",
    num: 280,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks with a hard chop. It can also break\nbarriers, such as Light Screen and Reflect. Contact.",
    shortDesc: "The user attacks with a hard chop. It can also break\nbarriers, such as Light Screen and Reflect. Contact.",
    pp: 15
  },
  yawn: {
    name: "Yawn",
    num: 281,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user lets loose a huge yawn that lulls the target\ninto falling asleep on the next turn.\nZ-Effect heals user fully.",
    shortDesc: "The user lets loose a huge yawn that lulls the target\ninto falling asleep on the next turn.\nZ-Effect heals user fully.",
    pp: 10
  },
  knockoff: {
    name: "Knock Off",
    num: 282,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user hits the target’s held item off, and that\nitem can’t be used until the end of the battle. This\nmove's damage is 1.5x if it removes an item. Contact.",
    shortDesc: "The user hits the target’s held item off, and that\nitem can’t be used until the end of the battle. This\nmove's damage is 1.5x if it removes an item. Contact.",
    pp: 10
  },
  endeavor: {
    name: "Endeavor",
    num: 283,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "This attack move cuts down the target’s HP to equal\nthe user’s current HP. Can't miss. Contact.",
    shortDesc: "This attack move cuts down the target’s HP to equal\nthe user’s current HP. Can't miss. Contact.",
    pp: 5
  },
  eruption: {
    name: "Eruption",
    num: 284,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks opposing Pokemon with explosive\nfury. The lower the user’s HP, the lower the\nmove’s power.",
    shortDesc: "The user attacks opposing Pokemon with explosive\nfury. The lower the user’s HP, the lower the\nmove’s power.",
    pp: 5
  },
  skillswap: {
    name: "Skill Swap",
    num: 285,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user employs its psychic power to exchange\nAbilities with the target. Z-Effect +3 Speed.",
    shortDesc: "The user employs its psychic power to exchange\nAbilities with the target. Z-Effect +3 Speed.",
    pp: 10
  },
  imprison: {
    name: "Imprison",
    num: 286,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user prevents the foe from using any moves\nthat the user also currently knows.\nZ-Effect gives +1 to all stats. +6 Priority.",
    shortDesc: "The user prevents the foe from using any moves\nthat the user also currently knows.\nZ-Effect gives +1 to all stats. +6 Priority.",
    pp: 10
  },
  molt: {
    name: "Molt",
    num: 287,
    type: "Bug",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user sheds its skin or exoskeleton.\nThis heals the user by 50% of their max HP.\nZ-Effect gives the user +2 Speed.",
    shortDesc: "The user sheds its skin or exoskeleton.\nThis heals the user by 50% of their max HP.\nZ-Effect gives the user +2 Speed.",
    pp: 5
  },
  grudge: {
    name: "Grudge",
    num: 288,
    type: "Ghost",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Banette vindictively braces itself. If Banette faints,\nthe move that knocked it out will lost all PP.\n+4 Priority. Z-Effect gives Banette +1 all stats.",
    shortDesc: "Banette vindictively braces itself. If Banette faints,\nthe move that knocked it out will lost all PP.\n+4 Priority. Z-Effect gives Banette +1 all stats.",
    pp: 5
  },
  snatch: {
    name: "Snatch",
    num: 289,
    type: "Dark",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user steals the effects of any attempts to use a\nhealing, stat-changing or other similar moves.\n+6 Priority. Z-Effect gives +3 Speed.",
    shortDesc: "The user steals the effects of any attempts to use a\nhealing, stat-changing or other similar moves.\n+6 Priority. Z-Effect gives +3 Speed.",
    pp: 10
  },
  secretpower: {
    name: "Secret Power",
    num: 290,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "This odd move has a 50% chance to do various things.\nThe effect changes based on your surroundings,\nincluding Psychic, Electric, Misty and Grassy Terrain.",
    shortDesc: "This odd move has a 50% chance to do various things.\nThe effect changes based on your surroundings,\nincluding Psychic, Electric, Misty and Grassy Terrain.",
    pp: 20
  },
  dive: {
    name: "Dive",
    num: 291,
    type: "Water",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user dives underwater, striking on the 2nd turn.\nThis boosts the user's Accuracy by 1 after use. Contact.\nBypasses protect.",
    shortDesc: "The user dives underwater, striking on the 2nd turn.\nThis boosts the user's Accuracy by 1 after use. Contact.\nBypasses protect.",
    pp: 15
  },
  forcepalm: {
    name: "Force Palm",
    num: 292,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 40,
    accuracy: 100,
    category: "Physical",
    desc: "The user hits the foe hard with open palms, stunning\nthem with a small shockwave. This ALWAYS leaves the foe\nwith paralysis. Contact.",
    shortDesc: "The user hits the foe hard with open palms, stunning\nthem with a small shockwave. This ALWAYS leaves the foe\nwith paralysis. Contact.",
    pp: 10
  },
  camouflage: {
    name: "Camouflage",
    num: 293,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user’s type is changed depending on its\nenvironment, including terrains like Grassy or Misty.\nZ-Effect +1 all stats. +4 Priority.",
    shortDesc: "The user’s type is changed depending on its\nenvironment, including terrains like Grassy or Misty.\nZ-Effect +1 all stats. +4 Priority.",
    pp: 20
  },
  powerglow: {
    name: "Power Glow",
    num: 294,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user flashes an organic light from its body.\nThis boosts the user's Sp. Atk stat by 3 stages.\nZ-Effect gives +2 Sp. Def.",
    shortDesc: "The user flashes an organic light from its body.\nThis boosts the user's Sp. Atk stat by 3 stages.\nZ-Effect gives +2 Sp. Def.",
    pp: 1
  },
  chloroblast: {
    name: "Chloroblast",
    num: 295,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Special",
    desc: "The user launches its amassed chlorophyll in a\npowerful blast of light. This deals 25% recoil damage.",
    shortDesc: "The user launches its amassed chlorophyll in a\npowerful blast of light. This deals 25% recoil damage.",
    pp: 10
  },
  featherball: {
    name: "Feather Ball",
    num: 296,
    type: "Flying",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "The user fires a concentrated ball of feathers & wind.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user fires a concentrated ball of feathers & wind.\nThis ALWAYS drops the foe's attacking stats by 1.",
    pp: 10
  },
  featherdance: {
    name: "Feather Dance",
    num: 297,
    type: "Flying",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user performs a dance, covering the target with\nit's feathers, dropping their Attack by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user performs a dance, covering the target with\nit's feathers, dropping their Attack by 2.\nZ-Effect +2 crit rate.",
    pp: 5
  },
  teeterdance: {
    name: "Teeter Dance",
    num: 298,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user performs a wobbly dance that confuses\nthe Pokemon around it for 4 turns.\nZ-Effect +2 Sp. Atk.",
    shortDesc: "The user performs a wobbly dance that confuses\nthe Pokemon around it for 4 turns.\nZ-Effect +2 Sp. Atk.",
    pp: 20
  },
  blazekick: {
    name: "Blaze Kick",
    num: 299,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 95,
    category: "Physical",
    desc: "The user launches a blazing kick at the target. This\nhas a 20% chance to burn the target. Contact.",
    shortDesc: "The user launches a blazing kick at the target. This\nhas a 20% chance to burn the target. Contact.",
    pp: 10
  },
  mudsport: {
    name: "Mud Sport",
    num: 300,
    type: "Ground",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user kicks up mud on the battlefield. This\nweakens Electric-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    shortDesc: "The user kicks up mud on the battlefield. This\nweakens Electric-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    pp: 15
  },
  iceball: {
    name: "Ice Ball",
    num: 301,
    type: "Ice",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 30,
    accuracy: 90,
    category: "Physical",
    desc: "The user attacks the target for five turns.\nThe move’s power increases each time it hits. Contact.",
    shortDesc: "The user attacks the target for five turns.\nThe move’s power increases each time it hits. Contact.",
    pp: 5
  },
  needlebash: {
    name: "Needle Bash",
    num: 302,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 95,
    category: "Physical",
    desc: "The user attacks by striking the foe with a spiked\nappendage. This flinches 30% of the time. Contact.",
    shortDesc: "The user attacks by striking the foe with a spiked\nappendage. This flinches 30% of the time. Contact.",
    pp: 10
  },
  slackoff: {
    name: "Slack Off",
    num: 303,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user slacks off, restoring its own HP 50% of the\nuser's max HP. Z-Effect +2 Defense.",
    shortDesc: "The user slacks off, restoring its own HP 50% of the\nuser's max HP. Z-Effect +2 Defense.",
    pp: 5
  },
  hypervoice: {
    name: "Hyper Voice",
    num: 304,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "The user lets loose a horribly echoing shout with\nthe power to inflict damage.",
    shortDesc: "The user lets loose a horribly echoing shout with\nthe power to inflict damage.",
    pp: 10
  },
  poisonfang: {
    name: "Poison Fang",
    num: 305,
    type: "Poison",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites the target with toxic fangs. This has a\n50% chance to badly poison the foe. Contact.",
    shortDesc: "The user bites the target with toxic fangs. This has a\n50% chance to badly poison the foe. Contact.",
    pp: 15
  },
  jaggededge: {
    name: "Jagged Edge",
    num: 306,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The target is slashed with jagged claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The target is slashed with jagged claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  blastburn: {
    name: "Blast Burn",
    num: 307,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The target is razed by a fiery explosion. This drops\nthe user's Sp. Atk by 2 after use.",
    shortDesc: "The target is razed by a fiery explosion. This drops\nthe user's Sp. Atk by 2 after use.",
    pp: 5
  },
  hydrocannon: {
    name: "Hydro Cannon",
    num: 308,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The target is hit with a watery blast. This drops\nthe user's Sp. Atk by 2 after use.",
    shortDesc: "The target is hit with a watery blast. This drops\nthe user's Sp. Atk by 2 after use.",
    pp: 5
  },
  meteormash: {
    name: "Meteor Mash",
    num: 309,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 95,
    accuracy: 95,
    category: "Physical",
    desc: "The target is hit with a punch imbued with fairy\nenergy. This boosts the user's attack 25% of the time.\nContact.",
    shortDesc: "The target is hit with a punch imbued with fairy\nenergy. This boosts the user's attack 25% of the time.\nContact.",
    pp: 10
  },
  spook: {
    name: "Spook",
    num: 310,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user quickly jumpscares the target. This move\nhas +1 priority, and can't miss.",
    shortDesc: "The user quickly jumpscares the target. This move\nhas +1 priority, and can't miss.",
    pp: 20
  },
  weatherball: {
    name: "Weather Ball",
    num: 311,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 45,
    accuracy: 100,
    category: "Special",
    desc: "The user fires off a ball of energy that doubles in\npower and changes type depending on the weather.\nThis drops Sp. Def by one 50% of the time.",
    shortDesc: "The user fires off a ball of energy that doubles in\npower and changes type depending on the weather.\nThis drops Sp. Def by one 50% of the time.",
    pp: 10
  },
  blossomdance: {
    name: "Blossom Dance",
    num: 312,
    type: "Grass",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user performs a beautiful, elegant dance.\nThis boosts the user's Attack & Sp. Atk stats by 1,\nand boosts the user's Speed by 2. Z-Effect +2 Sp. Def.",
    shortDesc: "The user performs a beautiful, elegant dance.\nThis boosts the user's Attack & Sp. Atk stats by 1,\nand boosts the user's Speed by 2. Z-Effect +2 Sp. Def.",
    pp: 2
  },
  faketears: {
    name: "Fake Tears",
    num: 313,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user feigns crying to fluster the target, lowering\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user feigns crying to fluster the target, lowering\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    pp: 20
  },
  aircutter: {
    name: "Air Cutter",
    num: 314,
    type: "Flying",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user slashes the air, firing a blade of wind at\nthe foes. This flinches 25% of the time.\nThis also has a +1 (12%) critical hit rate.",
    shortDesc: "The user slashes the air, firing a blade of wind at\nthe foes. This flinches 25% of the time.\nThis also has a +1 (12%) critical hit rate.",
    pp: 20
  },
  overheat: {
    name: "Overheat",
    num: 315,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Special",
    desc: "The user's excess body heat is fired off in a powerful\nattack. This hurts the user, dealing 25% recoil.\nThis has a 25% chance to burn the target.",
    shortDesc: "The user's excess body heat is fired off in a powerful\nattack. This hurts the user, dealing 25% recoil.\nThis has a 25% chance to burn the target.",
    pp: 10
  },
  odorsleuth: {
    name: "Odor Sleuth",
    num: 316,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user identifies the target, allowing Ghost types to\nbe hit with Normal/Fighting moves.\nZ-Effect gives user +2 Attack.",
    shortDesc: "The user identifies the target, allowing Ghost types to\nbe hit with Normal/Fighting moves.\nZ-Effect gives user +2 Attack.",
    pp: 40
  },
  rocktomb: {
    name: "Rock Tomb",
    num: 317,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "Rocks are hurled at the target, entrapping them. This\ndrops Speed by one 100% of the time.",
    shortDesc: "Rocks are hurled at the target, entrapping them. This\ndrops Speed by one 100% of the time.",
    pp: 15
  },
  silvergale: {
    name: "Silver Gale",
    num: 318,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Special",
    desc: "The user rapidly blows powdery scales at the target.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user rapidly blows powdery scales at the target.\nThis has +1 priority, and can't miss.",
    pp: 15
  },
  metalsound: {
    name: "Metal Sound",
    num: 319,
    type: "Steel",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "A horrible sound like scraping metal drops the foe's\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    shortDesc: "A horrible sound like scraping metal drops the foe's\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    pp: 10
  },
  grasswhistle: {
    name: "Grass Whistle",
    num: 320,
    type: "Grass",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 80,
    category: "Status",
    desc: "The user plays a pleasant melody that lulls the\ntarget into a deep sleep for 2 turns.\nZ-Effect +1 Speed.",
    shortDesc: "The user plays a pleasant melody that lulls the\ntarget into a deep sleep for 2 turns.\nZ-Effect +1 Speed.",
    pp: 2
  },
  tickle: {
    name: "Tickle",
    num: 321,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user tickles the target into laughing, reducing its\nAttack and Defense stats by 1.\nZ-Effect +3 Accuracy.",
    shortDesc: "The user tickles the target into laughing, reducing its\nAttack and Defense stats by 1.\nZ-Effect +3 Accuracy.",
    pp: 10
  },
  cosmicpower: {
    name: "Cosmic Power",
    num: 322,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user absorbs a mystical power from space to\nraise its Defense and Sp. Def stats by 1.\nZ-Effect +3 Sp. Def.",
    shortDesc: "The user absorbs a mystical power from space to\nraise its Defense and Sp. Def stats by 1.\nZ-Effect +3 Sp. Def.",
    pp: 3
  },
  waterspout: {
    name: "Water Spout",
    num: 323,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user spouts water to damage opposing\nPokemon. The lower the user’s HP, the lower the\nmove’s power.",
    shortDesc: "The user spouts water to damage opposing\nPokemon. The lower the user’s HP, the lower the\nmove’s power.",
    pp: 5
  },
  signalbeam: {
    name: "Signal Beam",
    num: 324,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks with a sinister beam of light.\nThis boosts your Sp. Atk 25% of the time.",
    shortDesc: "The user attacks with a sinister beam of light.\nThis boosts your Sp. Atk 25% of the time.",
    pp: 15
  },
  shadowpunch: {
    name: "Shadow Punch",
    num: 325,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: true,
    category: "Physical",
    desc: "The user throws a punch from the shadows.\nThis can't miss, and bypasses substitute. Contact.",
    shortDesc: "The user throws a punch from the shadows.\nThis can't miss, and bypasses substitute. Contact.",
    pp: 15
  },
  extrasensory: {
    name: "Extrasensory",
    num: 326,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks with an odd, unseeable power.\nThis flinches the target 30% of\nthe time.",
    shortDesc: "The user attacks with an odd, unseeable power.\nThis flinches the target 30% of\nthe time.",
    pp: 20
  },
  skyuppercut: {
    name: "Sky Uppercut",
    num: 327,
    type: "Fighting",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Physical",
    desc: "The user attacks the target with an uppercut thrown\nskyward with force. This flinches 25% of the time.\nContact. Affected by Rapid Fire.",
    shortDesc: "The user attacks the target with an uppercut thrown\nskyward with force. This flinches 25% of the time.\nContact. Affected by Rapid Fire.",
    pp: 10
  },
  scorchingsands: {
    name: "Scorching Sands",
    num: 328,
    type: "Ground",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Special",
    desc: "The user envelops the target with searing hot sands.\nThis burns the target 30% of the time.",
    shortDesc: "The user envelops the target with searing hot sands.\nThis burns the target 30% of the time.",
    pp: 15
  },
  sheercold: {
    name: "Sheer Cold",
    num: 329,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "The target is fainted with absolute-zero cold.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The target is fainted with absolute-zero cold.\nThis attack NEVER misses, but can only be used once.\nContact.",
    pp: 1
  },
  muddywater: {
    name: "Muddy Water",
    num: 330,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Special",
    desc: "The user swamps the field with muddy water.\nThis lowers the opponents Speed 100% of the time.",
    shortDesc: "The user swamps the field with muddy water.\nThis lowers the opponents Speed 100% of the time.",
    pp: 5
  },
  bulletseed: {
    name: "Bullet Seed",
    num: 331,
    type: "Grass",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user forcefully shoots seeds at the target two\nto five times in a row.",
    shortDesc: "The user forcefully shoots seeds at the target two\nto five times in a row.",
    pp: 15
  },
  aerialace: {
    name: "Aerial Ace",
    num: 332,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Physical",
    desc: "The user confounds the target with speed, then\nslashes. This is +2 priority, and can't miss. Contact.",
    shortDesc: "The user confounds the target with speed, then\nslashes. This is +2 priority, and can't miss. Contact.",
    pp: 10
  },
  iciclespear: {
    name: "Icicle Spear",
    num: 333,
    type: "Ice",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user launches sharp icicles at the target two to\nfive times in a row.",
    shortDesc: "The user launches sharp icicles at the target two to\nfive times in a row.",
    pp: 15
  },
  irondefense: {
    name: "Iron Defense",
    num: 334,
    type: "Steel",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user hardens its body’s surface like iron,\nsharply raising its Defense stat.\nZ-Effect heals user fully.",
    shortDesc: "The user hardens its body’s surface like iron,\nsharply raising its Defense stat.\nZ-Effect heals user fully.",
    pp: 2
  },
  block: {
    name: "Block",
    num: 335,
    type: "Normal",
    flags: {
      mirror: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Blocks the foe to prevent them from switching.\nZ-Effect +3 Defense.",
    shortDesc: "Blocks the foe to prevent them from switching.\nZ-Effect +3 Defense.",
    pp: 5
  },
  howl: {
    name: "Howl",
    num: 336,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user howls loudly to raise its spirit, which raises\nits Attack and Sp. Atk stats by 2 stages.\nZ-Effect gives +3 Accuracy.",
    shortDesc: "The user howls loudly to raise its spirit, which raises\nits Attack and Sp. Atk stats by 2 stages.\nZ-Effect gives +3 Accuracy.",
    pp: 1
  },
  dragonclaw: {
    name: "Dragon Claw",
    num: 337,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slashes the foe with claws or blades imbued\nwith dragon energy. This has a 50% (+2) crit rate.\nContact.",
    shortDesc: "The user slashes the foe with claws or blades imbued\nwith dragon energy. This has a 50% (+2) crit rate.\nContact.",
    pp: 10
  },
  frenzyplant: {
    name: "Frenzy Plant",
    num: 338,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "In a frenzy, the user slams the foe with plant matter.\nThis drops the user's attack by 2 after use.",
    shortDesc: "In a frenzy, the user slams the foe with plant matter.\nThis drops the user's attack by 2 after use.",
    pp: 5
  },
  bulkup: {
    name: "Bulk Up",
    num: 339,
    type: "Fighting",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user tenses its muscles to bulk up its body,\nraising both its Attack and Defense stats by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user tenses its muscles to bulk up its body,\nraising both its Attack and Defense stats by 1.\nZ-Effect +2 crit rate.",
    pp: 3
  },
  bounce: {
    name: "Bounce",
    num: 340,
    type: "Flying",
    flags: {
      charge: 1,
      contact: 1,
      gravity: 1,
      mirror: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user bounces up high, then drops on the target\non the second turn. This paralyzes the foe 30% of\nthe time. Contact. Bypasses Protect.",
    shortDesc: "The user bounces up high, then drops on the target\non the second turn. This paralyzes the foe 30% of\nthe time. Contact. Bypasses Protect.",
    pp: 10
  },
  mudshot: {
    name: "Mud Shot",
    num: 341,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user quickly shoots mud at the target.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly shoots mud at the target.\nThis has +1 priority, and can't miss.",
    pp: 20
  },
  poisontail: {
    name: "Poison Tail",
    num: 342,
    type: "Poison",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 95,
    category: "Physical",
    desc: "The user pummels the target with a tail steeped in\npoison. This poisons 30% of the time, and has a\n30% flinch rate. Contact.",
    shortDesc: "The user pummels the target with a tail steeped in\npoison. This poisons 30% of the time, and has a\n30% flinch rate. Contact.",
    pp: 10
  },
  covet: {
    name: "Covet",
    num: 343,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user endearingly approaches the target, then\nsteals the target's held item. The user can't steal\nan item if it already holds one. Contact.",
    shortDesc: "The user endearingly approaches the target, then\nsteals the target's held item. The user can't steal\nan item if it already holds one. Contact.",
    pp: 25
  },
  volttackle: {
    name: "Volt Tackle",
    num: 344,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user electrifies itself and charges the target\naggressively. This deals 25% recoil to the user.\nThis paralyzes the foe 25% of the time. Contact.",
    shortDesc: "The user electrifies itself and charges the target\naggressively. This deals 25% recoil to the user.\nThis paralyzes the foe 25% of the time. Contact.",
    pp: 10
  },
  magicalleaf: {
    name: "Magical Leaf",
    num: 345,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user scatters magical, curious leaves at the foe.\nThis ALWAYS raises the user's Sp. Def by 1 after use.",
    shortDesc: "The user scatters magical, curious leaves at the foe.\nThis ALWAYS raises the user's Sp. Def by 1 after use.",
    pp: 15
  },
  watersport: {
    name: "Water Sport",
    num: 346,
    type: "Water",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user soaks the battlefield with water. This\nweakens Fire-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    shortDesc: "The user soaks the battlefield with water. This\nweakens Fire-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    pp: 15
  },
  calmmind: {
    name: "Calm Mind",
    num: 347,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user quietly focuses its mind and calms its\nspirit to raise its Sp. Atk and Sp. Def stats by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user quietly focuses its mind and calms its\nspirit to raise its Sp. Atk and Sp. Def stats by 1.\nZ-Effect +2 crit rate.",
    pp: 3
  },
  leafblade: {
    name: "Leaf Blade",
    num: 348,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slashes the foe with a blade made of a leaf.\nThis has a 50% (+2) crit rate. Contact.",
    shortDesc: "The user slashes the foe with a blade made of a leaf.\nThis has a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  dragondance: {
    name: "Dragon Dance",
    num: 349,
    type: "Dragon",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user vigorously performs a mystic, powerful\ndance that raises its Attack and Speed stats by 1.\nZ-Effect crit rate +2.",
    shortDesc: "The user vigorously performs a mystic, powerful\ndance that raises its Attack and Speed stats by 1.\nZ-Effect crit rate +2.",
    pp: 2
  },
  rockblast: {
    name: "Rock Blast",
    num: 350,
    type: "Rock",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user hurls hard rocks at the target. Two to five\nrocks are launched in a row.",
    shortDesc: "The user hurls hard rocks at the target. Two to five\nrocks are launched in a row.",
    pp: 15
  },
  shockwave: {
    name: "Shock Wave",
    num: 351,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Special",
    desc: "The user strikes the target with a rapid wave of\nelectricity. This has +2 priority, and can't miss.",
    shortDesc: "The user strikes the target with a rapid wave of\nelectricity. This has +2 priority, and can't miss.",
    pp: 10
  },
  waterpulse: {
    name: "Water Pulse",
    num: 352,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks the foe with a beautiful pulse of\nwater. This ALWAYS drops BOTH of the foe's offensive\nstats by 1 after use.",
    shortDesc: "The user attacks the foe with a beautiful pulse of\nwater. This ALWAYS drops BOTH of the foe's offensive\nstats by 1 after use.",
    pp: 15
  },
  doomdesire: {
    name: "Doom Desire",
    num: 353,
    type: "Dark",
    flags: {
      bypasssub: 1
    },
    basePower: 160,
    accuracy: 100,
    category: "Special",
    desc: "The user foresees the target's demise. 2 turns after\nthis move is used, the target is hit with an immense\nblast of dark energy. Bypasses Protect and Substitute.",
    shortDesc: "The user foresees the target's demise. 2 turns after\nthis move is used, the target is hit with an immense\nblast of dark energy. Bypasses Protect and Substitute.",
    pp: 5
  },
  psychoboost: {
    name: "Psycho Boost",
    num: 354,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a massive blast of psychic energy.\nThis drops the user's Sp. Atk by 2 after use.",
    shortDesc: "The user unleashes a massive blast of psychic energy.\nThis drops the user's Sp. Atk by 2 after use.",
    pp: 5
  },
  roost: {
    name: "Roost",
    num: 355,
    type: "Flying",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user lands and rests its body. It restores the\nuser’s HP by 50% of the user's max HP.\nZ-Effect +2 Defense. Removes Flying type for the turn.",
    shortDesc: "The user lands and rests its body. It restores the\nuser’s HP by 50% of the user's max HP.\nZ-Effect +2 Defense. Removes Flying type for the turn.",
    pp: 5
  },
  gravity: {
    name: "Gravity",
    num: 356,
    type: "Psychic",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Enables Flying-type Pokemon or Pokemon with the\nLevitate Ability to be hit by Ground-type moves.\nFlying moves can’t be used. Z-Effect +2 Sp. Atk.",
    shortDesc: "Enables Flying-type Pokemon or Pokemon with the\nLevitate Ability to be hit by Ground-type moves.\nFlying moves can’t be used. Z-Effect +2 Sp. Atk.",
    pp: 5
  },
  miracleeye: {
    name: "Miracle Eye",
    num: 357,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Enables the user to hit Dark-types with Psychic moves.\nAlso makes it so no attacks will miss the foe.\nZ-Effect gives +1 to all stats.",
    shortDesc: "Enables the user to hit Dark-types with Psychic moves.\nAlso makes it so no attacks will miss the foe.\nZ-Effect gives +1 to all stats.",
    pp: 10
  },
  wakeupslap: {
    name: "Wake-Up Slap",
    num: 358,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: true,
    category: "Physical",
    desc: "The user slaps the foe, startling them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is asleep. Contact.",
    shortDesc: "The user slaps the foe, startling them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is asleep. Contact.",
    pp: 1
  },
  hammerarm: {
    name: "Hammer Arm",
    num: 359,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 90,
    category: "Physical",
    desc: "The user slams its heavy arm or fist onto the foe.\nThis always lowers the user's Speed by 1. Contact.",
    shortDesc: "The user slams its heavy arm or fist onto the foe.\nThis always lowers the user's Speed by 1. Contact.",
    pp: 5
  },
  gyroball: {
    name: "Gyro Ball",
    num: 360,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "The user tackles the target while spinning.\nThis gains power the faster the foe is than the user.\nAfter use, the user's Speed drops by 2. Contact.",
    shortDesc: "The user tackles the target while spinning.\nThis gains power the faster the foe is than the user.\nAfter use, the user's Speed drops by 2. Contact.",
    pp: 5
  },
  healingwish: {
    name: "Healing Wish",
    num: 361,
    type: "Fairy",
    flags: {
      snatch: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user faints. In return, the Pokemon taking its\nplace will have its HP restored and status\nconditions cured. This has +6 Priority.",
    shortDesc: "The user faints. In return, the Pokemon taking its\nplace will have its HP restored and status\nconditions cured. This has +6 Priority.",
    pp: 5
  },
  brine: {
    name: "Brine",
    num: 362,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Special",
    desc: "The user douses the foe in water.\nIf the target’s HP is 50% or less, this attack will hit\nwith double the power.",
    shortDesc: "The user douses the foe in water.\nIf the target’s HP is 50% or less, this attack will hit\nwith double the power.",
    pp: 10
  },
  naturalgift: {
    name: "Natural Gift",
    num: 363,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "The user draws power to attack by using its held\nBerry. Super effective weakening berries become 110\nBase Power moves of their respective type.",
    shortDesc: "The user draws power to attack by using its held\nBerry. Super effective weakening berries become 110\nBase Power moves of their respective type.",
    pp: 15
  },
  thinkfast: {
    name: "Think Fast",
    num: 364,
    type: "Psychic",
    flags: {
      contact: 1,
      mirror: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Physical",
    desc: "The user uses its intelligence to outmaneuver the foe,\nthrowing a quick punch. This has +2 Priority, and\nbypasses protect, lifting the effects. Can't miss.",
    shortDesc: "The user uses its intelligence to outmaneuver the foe,\nthrowing a quick punch. This has +2 Priority, and\nbypasses protect, lifting the effects. Can't miss.",
    pp: 10
  },
  pluck: {
    name: "Pluck",
    num: 365,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 65,
    accuracy: 100,
    category: "Physical",
    desc: "The user pecks the target. If the target is holding a\nBerry, the user eats it and gains its effect. Contact.",
    shortDesc: "The user pecks the target. If the target is holding a\nBerry, the user eats it and gains its effect. Contact.",
    pp: 20
  },
  tailwind: {
    name: "Tailwind",
    num: 366,
    type: "Flying",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user whips up a turbulent whirlwind that doubles\nthe Speed stat of the user and its allies for\nfour turns. Z-Effect +2 crit rate.",
    shortDesc: "The user whips up a turbulent whirlwind that doubles\nthe Speed stat of the user and its allies for\nfour turns. Z-Effect +2 crit rate.",
    pp: 15
  },
  acupressure: {
    name: "Acupressure",
    num: 367,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user applies pressure to stress points, sharply\nboosting one of its or its allies’ stats by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user applies pressure to stress points, sharply\nboosting one of its or its allies’ stats by 2.\nZ-Effect +2 crit rate.",
    pp: 3
  },
  metalburst: {
    name: "Metal Burst",
    num: 368,
    type: "Steel",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "The user takes any attack and delivers 50% of\ndamage taken back at the foe at the end of the turn.",
    shortDesc: "The user takes any attack and delivers 50% of\ndamage taken back at the foe at the end of the turn.",
    pp: 10
  },
  uturn: {
    name: "U-turn",
    num: 369,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: true,
    category: "Physical",
    desc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack cannot miss. Contact.",
    shortDesc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack cannot miss. Contact.",
    pp: 15
  },
  closecombat: {
    name: "Close Combat",
    num: 370,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    shortDesc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    pp: 5
  },
  payback: {
    name: "Payback",
    num: 371,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: true,
    category: "Physical",
    desc: "The user violently retaliates at the foe.\nThis doubles in power if you move after the target.\nContact. Can't miss. Neutral Priority.",
    shortDesc: "The user violently retaliates at the foe.\nThis doubles in power if you move after the target.\nContact. Can't miss. Neutral Priority.",
    pp: 5
  },
  assurance: {
    name: "Assurance",
    num: 372,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "If the foe's taken damage this turn, the power of this\nattack doubles. This includes damage from life orb,\nentry hazards, confusion, and recoil damage. Contact.",
    shortDesc: "If the foe's taken damage this turn, the power of this\nattack doubles. This includes damage from life orb,\nentry hazards, confusion, and recoil damage. Contact.",
    pp: 20
  },
  embargo: {
    name: "Embargo",
    num: 373,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "This move prevents the target from using its held\nitem for 15 turns. Z-Effect +2 Attack.\nThis has +4 priority.",
    shortDesc: "This move prevents the target from using its held\nitem for 15 turns. Z-Effect +2 Attack.\nThis has +4 priority.",
    pp: 15
  },
  fling: {
    name: "Fling",
    num: 374,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly throws its held item. +4 Priority.\nZap Plate paralyzes, Flame Plate burns, & Toxic Plate\nbadly poisons. Plates do 100 BP. King's Rock flinches.",
    shortDesc: "The user quickly throws its held item. +4 Priority.\nZap Plate paralyzes, Flame Plate burns, & Toxic Plate\nbadly poisons. Plates do 100 BP. King's Rock flinches.",
    pp: 3
  },
  psychoshift: {
    name: "Psycho Shift",
    num: 375,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Using its psychic power of suggestion, the user\ntransfers its status conditions to the target.\nZ-Effect +1 All Stats.",
    shortDesc: "Using its psychic power of suggestion, the user\ntransfers its status conditions to the target.\nZ-Effect +1 All Stats.",
    pp: 10
  },
  hocuspocus: {
    name: "Hocus-Pocus",
    num: 376,
    type: "Psychic",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "The user performs an astonishing magic trick.\nThis can only fool the foe once, but ALWAYS flinches.\nThis has +2 Priority, and is 200 Base Power.",
    shortDesc: "The user performs an astonishing magic trick.\nThis can only fool the foe once, but ALWAYS flinches.\nThis has +2 Priority, and is 200 Base Power.",
    pp: 1
  },
  healblock: {
    name: "Heal Block",
    num: 377,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "For 15 turns, the foe's team is prevented from using\nany moves, Abilities, or held items that recover HP.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    shortDesc: "For 15 turns, the foe's team is prevented from using\nany moves, Abilities, or held items that recover HP.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    pp: 15
  },
  chromosomecrush: {
    name: "Chromosome Crush",
    num: 378,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "The user mangles the opponent's DNA. This deals more\ndamage depending how much HP the target has left.\nMax of 120 BP. ALWAYS crits. MEW HAS SIGNATURE Z-MOVE.",
    shortDesc: "The user mangles the opponent's DNA. This deals more\ndamage depending how much HP the target has left.\nMax of 120 BP. ALWAYS crits. MEW HAS SIGNATURE Z-MOVE.",
    pp: 5
  },
  powertrick: {
    name: "Power Trick",
    num: 379,
    type: "Psychic",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user employs its psychic power to switch its\nAttack stat with its Defense stat.\nZ-Effect +2 Attack.",
    shortDesc: "The user employs its psychic power to switch its\nAttack stat with its Defense stat.\nZ-Effect +2 Attack.",
    pp: 10
  },
  acidreflux: {
    name: "Acid Reflux",
    num: 380,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user hurls stomach acid at the foe, dropping their\nSp. Def stat by 4 in addition to poisoning them.\nZ-Effect heals the user fully.",
    shortDesc: "The user hurls stomach acid at the foe, dropping their\nSp. Def stat by 4 in addition to poisoning them.\nZ-Effect heals the user fully.",
    pp: 5
  },
  luckychant: {
    name: "Lucky Chant",
    num: 381,
    type: "Fairy",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user chants an incantation toward the sky,\npreventing opposing Pokemon from landing\ncrits for 5 turns. +4 Priority. Z-Effect +3 Sp. Def.",
    shortDesc: "The user chants an incantation toward the sky,\npreventing opposing Pokemon from landing\ncrits for 5 turns. +4 Priority. Z-Effect +3 Sp. Def.",
    pp: 30
  },
  mefirst: {
    name: "Me First",
    num: 382,
    type: "Normal",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Status",
    desc: "The user cuts ahead of the target to copy and use\nthe target’s intended move with greater power.\nZ-Effect +2 Attack. +6 Priority.",
    shortDesc: "The user cuts ahead of the target to copy and use\nthe target’s intended move with greater power.\nZ-Effect +2 Attack. +6 Priority.",
    pp: 5
  },
  copycat: {
    name: "Copycat",
    num: 383,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user mimics the move used immediately before\nit. The move fails if no other move has been\nused yet. Z-Effect +2 Attack. +6 Priority.",
    shortDesc: "The user mimics the move used immediately before\nit. The move fails if no other move has been\nused yet. Z-Effect +2 Attack. +6 Priority.",
    pp: 5
  },
  powerswap: {
    name: "Power Swap",
    num: 384,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user employs its psychic power to switch\nchanges to its Attack and Sp. Atk stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    shortDesc: "The user employs its psychic power to switch\nchanges to its Attack and Sp. Atk stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    pp: 10
  },
  guardswap: {
    name: "Guard Swap",
    num: 385,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user employs its psychic power to switch\nchanges to its Defense and Sp. Def stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    shortDesc: "The user employs its psychic power to switch\nchanges to its Defense and Sp. Def stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    pp: 10
  },
  punishment: {
    name: "Punishment",
    num: 386,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Physical",
    desc: "The user punishes the opponent for boosting stats.\nThe base power increases by 20 for every stat boost,\nbeginning at 60 BP. Can't miss,",
    shortDesc: "The user punishes the opponent for boosting stats.\nThe base power increases by 20 for every stat boost,\nbeginning at 60 BP. Can't miss,",
    pp: 15
  },
  lastresort: {
    name: "Last Resort",
    num: 387,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 140,
    accuracy: true,
    category: "Physical",
    desc: "This powerful, desperate attack can only be used\nafter the user has exhausted all other options.\nThis can't miss.",
    shortDesc: "This powerful, desperate attack can only be used\nafter the user has exhausted all other options.\nThis can't miss.",
    pp: 5
  },
  worryseed: {
    name: "Worry Seed",
    num: 388,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "A seed that causes worry is planted on the target.\nIt prevents sleep by making the target’s\nAbility Insomnia. Z-Effect +2 Sp. Atk.",
    shortDesc: "A seed that causes worry is planted on the target.\nIt prevents sleep by making the target’s\nAbility Insomnia. Z-Effect +2 Sp. Atk.",
    pp: 10
  },
  suckerpunch: {
    name: "Sucker Punch",
    num: 389,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: true,
    category: "Physical",
    desc: "This user sucker punches the foe. This fails if the\ntarget isn't using an attacking move that turn. This\nhas +2 priority and can't miss. Contact.",
    shortDesc: "This user sucker punches the foe. This fails if the\ntarget isn't using an attacking move that turn. This\nhas +2 priority and can't miss. Contact.",
    pp: 5
  },
  toxicspikes: {
    name: "Toxic Spikes",
    num: 390,
    type: "Poison",
    flags: {
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user lays a trap of toxic spikes on the opponent's\nside. One layer poisons, two layers badly poison.\nZ-Effect +3 Defense.",
    shortDesc: "The user lays a trap of toxic spikes on the opponent's\nside. One layer poisons, two layers badly poison.\nZ-Effect +3 Defense.",
    pp: 20
  },
  heartswap: {
    name: "Heart Swap",
    num: 391,
    type: "Fairy",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user instantly switches stat changes with the foe.\nThis has +4 Priority. Z-Effect heals the user fully.",
    shortDesc: "The user instantly switches stat changes with the foe.\nThis has +4 Priority. Z-Effect heals the user fully.",
    pp: 1
  },
  rehydrate: {
    name: "Rehydrate",
    num: 392,
    type: "Water",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user envelops itself in a veil made of water.\nThis recovers 50% of the user's max HP.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user envelops itself in a veil made of water.\nThis recovers 50% of the user's max HP.\nZ-Effect +2 Sp. Def.",
    pp: 5
  },
  magnetrise: {
    name: "Magnet Rise",
    num: 393,
    type: "Electric",
    flags: {
      gravity: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user levitates using electrically generated\nmagnetism for five turns. Z-Effect +2 Speed.",
    shortDesc: "The user levitates using electrically generated\nmagnetism for five turns. Z-Effect +2 Speed.",
    pp: 10
  },
  flareblitz: {
    name: "Flare Blitz",
    num: 394,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user cloaks itself in fire and charges the target.\nThis has 25% recoil, and a 25% chance to burn the foe.\nContact.",
    shortDesc: "The user cloaks itself in fire and charges the target.\nThis has 25% recoil, and a 25% chance to burn the foe.\nContact.",
    pp: 10
  },
  forcewaves: {
    name: "Force Waves",
    num: 395,
    type: "Fighting",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 40,
    accuracy: 100,
    category: "Special",
    desc: "The user creates 2 shock waves with it's palms. This\nhits twice. Each hit has a\n30% chance to paralyze, for a total chance of 51%.",
    shortDesc: "The user creates 2 shock waves with it's palms. This\nhits twice. Each hit has a\n30% chance to paralyze, for a total chance of 51%.",
    pp: 15
  },
  aurasphere: {
    name: "Aura Sphere",
    num: 396,
    type: "Fighting",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1,
      pulse: 1
    },
    basePower: 90,
    accuracy: true,
    category: "Special",
    desc: "The user lets loose a blast of aura power from deep\nwithin itself. This has a 20% chance to drop\nSp. Def by 1, and can't miss.",
    shortDesc: "The user lets loose a blast of aura power from deep\nwithin itself. This has a 20% chance to drop\nSp. Def by 1, and can't miss.",
    pp: 10
  },
  rockpolish: {
    name: "Rock Polish",
    num: 397,
    type: "Rock",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user polishes its body to reduce drag.\nThis raises the user's Speed by 2 and Accuracy by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user polishes its body to reduce drag.\nThis raises the user's Speed by 2 and Accuracy by 1.\nZ-Effect +2 crit rate.",
    pp: 1
  },
  poisonjab: {
    name: "Poison Jab",
    num: 398,
    type: "Poison",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The target is stabbed with a tentacle or arm steeped\nin poison. This poisons the foe 30% of the time.\nContact.",
    shortDesc: "The target is stabbed with a tentacle or arm steeped\nin poison. This poisons the foe 30% of the time.\nContact.",
    pp: 15
  },
  darkpulse: {
    name: "Dark Pulse",
    num: 399,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user releases a horrible aura imbued with dark\nenergy. This flinches 20% of the time, and afflicts\na sleeping target with a horrible nightmare.",
    shortDesc: "The user releases a horrible aura imbued with dark\nenergy. This flinches 20% of the time, and afflicts\na sleeping target with a horrible nightmare.",
    pp: 15
  },
  nightslash: {
    name: "Night Slash",
    num: 400,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slashes the target the instant an\nopportunity arises. This has a 50% (+2) crit rate.\nContact.",
    shortDesc: "The user slashes the target the instant an\nopportunity arises. This has a 50% (+2) crit rate.\nContact.",
    pp: 10
  },
  aquatail: {
    name: "Aqua Tail",
    num: 401,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Physical",
    desc: "The user attacks by swinging its tail as if it were a\nvicious wave in a raging storm. This has a 30%\nchance to drop Defense. Contact.",
    shortDesc: "The user attacks by swinging its tail as if it were a\nvicious wave in a raging storm. This has a 30%\nchance to drop Defense. Contact.",
    pp: 10
  },
  seedbomb: {
    name: "Seed Bomb",
    num: 402,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slams a barrage of hard-shelled seeds\ndown on the target from above. This flinches the\ntarget 20% of the time.",
    shortDesc: "The user slams a barrage of hard-shelled seeds\ndown on the target from above. This flinches the\ntarget 20% of the time.",
    pp: 15
  },
  airslash: {
    name: "Air Slash",
    num: 403,
    type: "Flying",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks with a blade of air that slices even\nthe sky. This flinches the target 30% of the time.",
    shortDesc: "The user attacks with a blade of air that slices even\nthe sky. This flinches the target 30% of the time.",
    pp: 15
  },
  xscissor: {
    name: "X-Scissor",
    num: 404,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slashes at the target by crossing its\nscythes or claws as if they were a pair of scissors.\nThis has a 50% (+2) crit rate. Contact.",
    shortDesc: "The user slashes at the target by crossing its\nscythes or claws as if they were a pair of scissors.\nThis has a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  bugbuzz: {
    name: "Bug Buzz",
    num: 405,
    type: "Bug",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "The user generates a devastating sound wave with\nvibration. This flinches the targets 30% of the time.",
    shortDesc: "The user generates a devastating sound wave with\nvibration. This flinches the targets 30% of the time.",
    pp: 10
  },
  dragonpulse: {
    name: "Dragon Pulse",
    num: 406,
    type: "Dragon",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    basePower: 100,
    accuracy: 100,
    category: "Special",
    desc: "The target is attacked with a shock wave generated\nby the user’s gaping mouth. This leaves the target\nwith paralysis 30% of the time.",
    shortDesc: "The target is attacked with a shock wave generated\nby the user’s gaping mouth. This leaves the target\nwith paralysis 30% of the time.",
    pp: 10
  },
  dragonrush: {
    name: "Dragon Rush",
    num: 407,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "The user tackles the target while exhibiting\noverwhelming menace. This drops the user's Defensive\nstats by 1 after use. 30% flinch rate. Contact.",
    shortDesc: "The user tackles the target while exhibiting\noverwhelming menace. This drops the user's Defensive\nstats by 1 after use. 30% flinch rate. Contact.",
    pp: 5
  },
  powergem: {
    name: "Power Gem",
    num: 408,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks with a ray of light that sparkles as\nif it were made of gemstones. This raises the user's\nSp. Atk by one 25% of the time.",
    shortDesc: "The user attacks with a ray of light that sparkles as\nif it were made of gemstones. This raises the user's\nSp. Atk by one 25% of the time.",
    pp: 10
  },
  drainpunch: {
    name: "Drain Punch",
    num: 409,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "An energy-draining punch. The user’s HP is restored\nby half the damage taken by the target. Contact.",
    shortDesc: "An energy-draining punch. The user’s HP is restored\nby half the damage taken by the target. Contact.",
    pp: 10
  },
  vacuumwave: {
    name: "Vacuum Wave",
    num: 410,
    type: "Fighting",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Special",
    desc: "The user sends a wave of pure vacuum at the target.\nThis has +2 priority, and can't miss.",
    shortDesc: "The user sends a wave of pure vacuum at the target.\nThis has +2 priority, and can't miss.",
    pp: 15
  },
  focusblast: {
    name: "Focus Blast",
    num: 411,
    type: "Fighting",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 130,
    accuracy: 85,
    category: "Special",
    desc: "The user heightens its mental focus and unleashes\nmassive power. This lowers Sp. Def 30% of the time.",
    shortDesc: "The user heightens its mental focus and unleashes\nmassive power. This lowers Sp. Def 30% of the time.",
    pp: 5
  },
  energyball: {
    name: "Energy Ball",
    num: 412,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "The user draws power from nature and fires it at the\ntarget. This lowers Sp. Def 25% of the time.",
    shortDesc: "The user draws power from nature and fires it at the\ntarget. This lowers Sp. Def 25% of the time.",
    pp: 10
  },
  bravebird: {
    name: "Brave Bird",
    num: 413,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user tucks in its wings and charges from a low\naltitude. This deals 25% recoil, and has a 30%\nchance to drop the foe's Defense. Contact.",
    shortDesc: "The user tucks in its wings and charges from a low\naltitude. This deals 25% recoil, and has a 30%\nchance to drop the foe's Defense. Contact.",
    pp: 10
  },
  earthpower: {
    name: "Earth Power",
    num: 414,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "The user makes the ground under the target erupt\nwith power. This drops Sp. Def by one 20% of the time.",
    shortDesc: "The user makes the ground under the target erupt\nwith power. This drops Sp. Def by one 20% of the time.",
    pp: 10
  },
  switcheroo: {
    name: "Switcheroo",
    num: 415,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user trades held items with the target faster\nthan the eye can follow. Z-Effect +3 Speed. +4 Priority.",
    shortDesc: "The user trades held items with the target faster\nthan the eye can follow. Z-Effect +3 Speed. +4 Priority.",
    pp: 1
  },
  gigaimpact: {
    name: "Giga Impact",
    num: 416,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 160,
    accuracy: 100,
    category: "Physical",
    desc: "The user charges at the target using every bit of its\npower. This drops the user's Attack by 2. Contact.",
    shortDesc: "The user charges at the target using every bit of its\npower. This drops the user's Attack by 2. Contact.",
    pp: 5
  },
  nastyplot: {
    name: "Nasty Plot",
    num: 417,
    type: "Dark",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user stimulates its brain by thinking bad\nthoughts. This raises the user's Sp. Atk by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user stimulates its brain by thinking bad\nthoughts. This raises the user's Sp. Atk by 2.\nZ-Effect +2 crit rate.",
    pp: 1
  },
  bulletpunch: {
    name: "Bullet Punch",
    num: 418,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user strikes the target with hard punches as\nfast as bullets. This has +1 priority, and can't miss.\nContact.",
    shortDesc: "The user strikes the target with hard punches as\nfast as bullets. This has +1 priority, and can't miss.\nContact.",
    pp: 15
  },
  avalanche: {
    name: "Avalanche",
    num: 419,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: true,
    category: "Physical",
    desc: "The user summons a devastating avalanche.\nThis now has NEUTRAL priority, can't miss, & doubles\nin power if you move last. 30% Flinch rate.",
    shortDesc: "The user summons a devastating avalanche.\nThis now has NEUTRAL priority, can't miss, & doubles\nin power if you move last. 30% Flinch rate.",
    pp: 5
  },
  iceshard: {
    name: "Ice Shard",
    num: 420,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "The user flash-freezes chunks of ice and hurls them\nat the target. This has +1 priority and can't miss.",
    shortDesc: "The user flash-freezes chunks of ice and hurls them\nat the target. This has +1 priority and can't miss.",
    pp: 20
  },
  shadowclaw: {
    name: "Shadow Claw",
    num: 421,
    type: "Ghost",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slashes with shadowy claws or blades.\nThis has a 50% (+2) critical hit rate.\nContact.",
    shortDesc: "The user slashes with shadowy claws or blades.\nThis has a 50% (+2) critical hit rate.\nContact.",
    pp: 10
  },
  thunderfang: {
    name: "Thunder Fang",
    num: 422,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites with electrified fangs. This has a 20%\nchance to flinch, and a 10% chance to paralyze.\nContact.",
    shortDesc: "The user bites with electrified fangs. This has a 20%\nchance to flinch, and a 10% chance to paralyze.\nContact.",
    pp: 15
  },
  icefang: {
    name: "Ice Fang",
    num: 423,
    type: "Ice",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites with ice-infused fangs. This has a 20%\nchance to flinch, and a 10% chance to freeze.\nContact.",
    shortDesc: "The user bites with ice-infused fangs. This has a 20%\nchance to flinch, and a 10% chance to freeze.\nContact.",
    pp: 15
  },
  firefang: {
    name: "Fire Fang",
    num: 424,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites with flame-cloaked fangs. This has a\n20% chance to flinch, and a 10% chance to burn.\nContact.",
    shortDesc: "The user bites with flame-cloaked fangs. This has a\n20% chance to flinch, and a 10% chance to burn.\nContact.",
    pp: 15
  },
  shadowsneak: {
    name: "Shadow Sneak",
    num: 425,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user sneaks behind the foe and strikes from the\nshadows. This has +1 priority.\nThis also can't miss, and ignores substitutes. Contact.",
    shortDesc: "The user sneaks behind the foe and strikes from the\nshadows. This has +1 priority.\nThis also can't miss, and ignores substitutes. Contact.",
    pp: 15
  },
  mudbomb: {
    name: "Mud Bomb",
    num: 426,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Special",
    desc: "The user launches a mud ball that explodes on impact.\nThis drops the foe's Speed by one 100% of the time.",
    shortDesc: "The user launches a mud ball that explodes on impact.\nThis drops the foe's Speed by one 100% of the time.",
    pp: 5
  },
  psychocut: {
    name: "Psycho Cut",
    num: 427,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user tears at the target with blades formed by\npsychic power. This has a 50% (+2) crit rate.",
    shortDesc: "The user tears at the target with blades formed by\npsychic power. This has a 50% (+2) crit rate.",
    pp: 10
  },
  zenheadbutt: {
    name: "Zen Headbutt",
    num: 428,
    type: "Psychic",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Physical",
    desc: "The user focuses its willpower to its head and\nattacks the target. This flinches the foe 25% the\ntime. Contact.",
    shortDesc: "The user focuses its willpower to its head and\nattacks the target. This flinches the foe 25% the\ntime. Contact.",
    pp: 10
  },
  mirrorshot: {
    name: "Mirror Shot",
    num: 429,
    type: "Steel",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "The user lets loose a flash of energy at the target\nfrom its body. This boosts the user's Sp. Atk 25% of\nthe time.",
    shortDesc: "The user lets loose a flash of energy at the target\nfrom its body. This boosts the user's Sp. Atk 25% of\nthe time.",
    pp: 15
  },
  flashcannon: {
    name: "Flash Cannon",
    num: 430,
    type: "Steel",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Special",
    desc: "The user gathers all its light energy and releases it\nall at once. This drops Sp. Def 50% of the time.",
    shortDesc: "The user gathers all its light energy and releases it\nall at once. This drops Sp. Def 50% of the time.",
    pp: 5
  },
  rockclimb: {
    name: "Rock Climb",
    num: 431,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks the target by smashing into it with\nincredible force. This deals 20% recoil to the user.\nThis also has a 30% chance to drop Defense. Contact.",
    shortDesc: "The user attacks the target by smashing into it with\nincredible force. This deals 20% recoil to the user.\nThis also has a 30% chance to drop Defense. Contact.",
    pp: 10
  },
  defog: {
    name: "Defog",
    num: 432,
    type: "Flying",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "A strong wind blows away the target’s barriers such\nas Reflect or Light Screen. This also lowers the\ntarget’s evasiveness. Z-Effect +2 crit rate.",
    shortDesc: "A strong wind blows away the target’s barriers such\nas Reflect or Light Screen. This also lowers the\ntarget’s evasiveness. Z-Effect +2 crit rate.",
    pp: 15
  },
  trickroom: {
    name: "Trick Room",
    num: 433,
    type: "Psychic",
    flags: {
      mirror: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user creates a bizarre area in which slower\nPokemon get to move first for five turns.\nZ-Effect +2 Sp. Def. This now has NEUTRAL priority.",
    shortDesc: "The user creates a bizarre area in which slower\nPokemon get to move first for five turns.\nZ-Effect +2 Sp. Def. This now has NEUTRAL priority.",
    pp: 5
  },
  dracometeor: {
    name: "Draco Meteor",
    num: 434,
    type: "Dragon",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "Comets are summoned down from the sky onto the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    shortDesc: "Comets are summoned down from the sky onto the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    pp: 5
  },
  discharge: {
    name: "Discharge",
    num: 435,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user strikes everything around it by letting loose\na flare of electricity. This paralyzes the target 30%\nof the time.",
    shortDesc: "The user strikes everything around it by letting loose\na flare of electricity. This paralyzes the target 30%\nof the time.",
    pp: 15
  },
  pyroplume: {
    name: "Pyro Plume",
    num: 436,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user torches everything around it in an inferno\nof scarlet flames. This burns the foe 30% of the time.",
    shortDesc: "The user torches everything around it in an inferno\nof scarlet flames. This burns the foe 30% of the time.",
    pp: 15
  },
  leafstorm: {
    name: "Leaf Storm",
    num: 437,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user whips up a storm of leaves around the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    shortDesc: "The user whips up a storm of leaves around the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    pp: 5
  },
  powerwhip: {
    name: "Power Whip",
    num: 438,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 90,
    category: "Physical",
    desc: "The user violently whirls its vines, tentacles, or the\nlike to harshly lash the target. This lowers the foe's\nDefense 30% of the time. Contact.",
    shortDesc: "The user violently whirls its vines, tentacles, or the\nlike to harshly lash the target. This lowers the foe's\nDefense 30% of the time. Contact.",
    pp: 5
  },
  rockwrecker: {
    name: "Rock Wrecker",
    num: 439,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user hurls a massive boulder with full force.\nThis lowers the user's Attack by 2 after use.",
    shortDesc: "The user hurls a massive boulder with full force.\nThis lowers the user's Attack by 2 after use.",
    pp: 5
  },
  crosspoison: {
    name: "Cross Poison",
    num: 440,
    type: "Poison",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "A slashing attack with a poisonous blade that poisons\n20% of the time. This has a 50% (+2) crit rate.\nContact.",
    shortDesc: "A slashing attack with a poisonous blade that poisons\n20% of the time. This has a 50% (+2) crit rate.\nContact.",
    pp: 10
  },
  gunkshot: {
    name: "Gunk Shot",
    num: 441,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Physical",
    desc: "The user shoots filthy, dense gunk at the target.\nThis has a 50% chance to poison the target.",
    shortDesc: "The user shoots filthy, dense gunk at the target.\nThis has a 50% chance to poison the target.",
    pp: 5
  },
  ironhead: {
    name: "Iron Head",
    num: 442,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user slams the target with its steel-hard head.\nThis flinches the target 30% of the time. Contact.",
    shortDesc: "The user slams the target with its steel-hard head.\nThis flinches the target 30% of the time. Contact.",
    pp: 15
  },
  magneticburst: {
    name: "Magnetic Burst",
    num: 443,
    type: "Steel",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Special",
    desc: "The user rapidly releases a burst of magnetic bombs.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user rapidly releases a burst of magnetic bombs.\nThis has +1 priority, and can't miss.",
    pp: 10
  },
  stoneedge: {
    name: "Stone Edge",
    num: 444,
    type: "Rock",
    flags: {
      mirror: 1
    },
    basePower: 80,
    accuracy: 90,
    category: "Physical",
    desc: "The user stabs the target from below with jagged\nstones. This ALWAYS results in a critical hit.\nBypasses Protect.",
    shortDesc: "The user stabs the target from below with jagged\nstones. This ALWAYS results in a critical hit.\nBypasses Protect.",
    pp: 5
  },
  captivate: {
    name: "Captivate",
    num: 445,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "If any opposing Pokemon is the opposite gender of\nthe user, it is charmed, which lowers it's Attack and\nSp. Atk by 2. Z-Effect +2 Sp. Def.",
    shortDesc: "If any opposing Pokemon is the opposite gender of\nthe user, it is charmed, which lowers it's Attack and\nSp. Atk by 2. Z-Effect +2 Sp. Def.",
    pp: 20
  },
  stealthrock: {
    name: "Stealth Rock",
    num: 446,
    type: "Rock",
    flags: {
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Lays a trap of levitating stones around the opponent's\nside, damaging foes that switch in based on their\nweakness to Rock. Z-Effect +2 Defense.",
    shortDesc: "Lays a trap of levitating stones around the opponent's\nside, damaging foes that switch in based on their\nweakness to Rock. Z-Effect +2 Defense.",
    pp: 20
  },
  grassknot: {
    name: "Grass Knot",
    num: 447,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "The user snares the target with grass and trips it.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS lowers the foe's Speed by 1. Contact.",
    shortDesc: "The user snares the target with grass and trips it.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS lowers the foe's Speed by 1. Contact.",
    pp: 20
  },
  commotion: {
    name: "Commotion",
    num: 448,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks the target with sound waves of\ndeafening chatter. This confuses the target for 4\nturns 100% of the time.",
    shortDesc: "The user attacks the target with sound waves of\ndeafening chatter. This confuses the target for 4\nturns 100% of the time.",
    pp: 15
  },
  ancientforce: {
    name: "Ancient Force",
    num: 449,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 100,
    category: "Special",
    desc: "The user taps into a chaotic, ancient force.\nThis changes type in accordance with a held Plate,\nand becomes 20% stronger with a Plate equipped.",
    shortDesc: "The user taps into a chaotic, ancient force.\nThis changes type in accordance with a held Plate,\nand becomes 20% stronger with a Plate equipped.",
    pp: 5
  },
  bugbiting: {
    name: "Bug Biting",
    num: 450,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 35,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites the foe TWICE. If the foe is holding a\nBerry, the user eats it and gains its effect. Contact.\nThis has a 15% flinch rate per hit.",
    shortDesc: "The user bites the foe TWICE. If the foe is holding a\nBerry, the user eats it and gains its effect. Contact.\nThis has a 15% flinch rate per hit.",
    pp: 20
  },
  chargebeam: {
    name: "Charge Beam",
    num: 451,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Special",
    desc: "The user fires off a weak beam of electricity that\nboosts the user's Sp. Atk by 1 after each use.",
    shortDesc: "The user fires off a weak beam of electricity that\nboosts the user's Sp. Atk by 1 after each use.",
    pp: 5
  },
  woodhammer: {
    name: "Wood Hammer",
    num: 452,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user powerfully slams the target with a tree.\nThis deals 25% recoil to the user, and drops\nDefense 30% of the time. Contact.",
    shortDesc: "The user powerfully slams the target with a tree.\nThis deals 25% recoil to the user, and drops\nDefense 30% of the time. Contact.",
    pp: 10
  },
  aquajet: {
    name: "Aqua Jet",
    num: 453,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly surges at the target. This attack\nhas +1 priority, and can't miss. Contact.",
    shortDesc: "The user quickly surges at the target. This attack\nhas +1 priority, and can't miss. Contact.",
    pp: 15
  },
  attackorder: {
    name: "Attack Order",
    num: 454,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: true,
    category: "Physical",
    desc: "Vespiquen orders its underlings to assault the foe.\nThis ALWAYS results in a critical hit, and can't miss.",
    shortDesc: "Vespiquen orders its underlings to assault the foe.\nThis ALWAYS results in a critical hit, and can't miss.",
    pp: 5
  },
  defendorder: {
    name: "Defend Order",
    num: 455,
    type: "Bug",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Vespiquen orders its underlings to shield its body.\nThis raises Vespiquen's Defense and Sp. Def by 1.\nThis has +4 Priority. Z-Effect +2 crit rate.",
    shortDesc: "Vespiquen orders its underlings to shield its body.\nThis raises Vespiquen's Defense and Sp. Def by 1.\nThis has +4 Priority. Z-Effect +2 crit rate.",
    pp: 2
  },
  healorder: {
    name: "Heal Order",
    num: 456,
    type: "Bug",
    flags: {
      heal: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Vespiquen orders its underlings to heal itself.\nThis heals Vespiquen by 50% of it's max HP.\nThis has +4 priority. Z-Effect heals user fully.",
    shortDesc: "Vespiquen orders its underlings to heal itself.\nThis heals Vespiquen by 50% of it's max HP.\nThis has +4 priority. Z-Effect heals user fully.",
    pp: 5
  },
  headsmash: {
    name: "Head Smash",
    num: 457,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks the target with a hazardous,\nfull-power headbutt. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    shortDesc: "The user attacks the target with a hazardous,\nfull-power headbutt. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    pp: 5
  },
  breakingswipe: {
    name: "Breaking Swipe",
    num: 458,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Physical",
    desc: "The user widely swipes at the foes with great force.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    shortDesc: "The user widely swipes at the foes with great force.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    pp: 15
  },
  drakonicbeam: {
    name: "Drakonic Beam",
    num: 459,
    type: "Dragon",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 180,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a destructive beam of dragon\nenergy at the foe. This lowers the user's Sp. Atk\nstat by 4 (-2/3) after use in exchange for high power.",
    shortDesc: "The user unleashes a destructive beam of dragon\nenergy at the foe. This lowers the user's Sp. Atk\nstat by 4 (-2/3) after use in exchange for high power.",
    pp: 3
  },
  subspacetear: {
    name: "Subspace Tear",
    num: 460,
    type: "Psychic",
    flags: {
      mirror: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "Using psychic powers, the user tears the space\naround the foe. This ALWAYS results in a critical hit.\nBypasses Protect.",
    shortDesc: "Using psychic powers, the user tears the space\naround the foe. This ALWAYS results in a critical hit.\nBypasses Protect.",
    pp: 3
  },
  lunardance: {
    name: "Lunar Dance",
    num: 461,
    type: "Psychic",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user absorbs energy from the moon and performs\na mystic dance. This boosts the user's Sp. Atk,\nSp. Def and Speed by 1. Z-Effect heals the user fully.",
    shortDesc: "The user absorbs energy from the moon and performs\na mystic dance. This boosts the user's Sp. Atk,\nSp. Def and Speed by 1. Z-Effect heals the user fully.",
    pp: 2
  },
  crushgrip: {
    name: "Crush Grip",
    num: 462,
    type: "Ground",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "Regigias grips the foe with immense force. This ALWAYS\ncrits. Z-MOVE is 250 BP, AND gives +1 to all stats.\n120 BP without crit if target is full HP. Contact.",
    shortDesc: "Regigias grips the foe with immense force. This ALWAYS\ncrits. Z-MOVE is 250 BP, AND gives +1 to all stats.\n120 BP without crit if target is full HP. Contact.",
    pp: 5
  },
  firevortex: {
    name: "Fire Vortex",
    num: 463,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 85,
    category: "Special",
    desc: "The target becomes trapped within a maelstrom of\nfire that traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The target becomes trapped within a maelstrom of\nfire that traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    pp: 5
  },
  darkvoid: {
    name: "Dark Void",
    num: 464,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Darkai drags the foes into a world of darkness,\nputting them to sleep for three guaranteed turns.\nZ-Effect gives +3 Speed.",
    shortDesc: "Darkai drags the foes into a world of darkness,\nputting them to sleep for three guaranteed turns.\nZ-Effect gives +3 Speed.",
    pp: 1
  },
  seedflare: {
    name: "Seed Flare",
    num: 465,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 85,
    category: "Special",
    desc: "The user emits a destructive blast from within itself.\nThis has a 50% chance to drop the foe's Sp. Def by 2.",
    shortDesc: "The user emits a destructive blast from within itself.\nThis has a 50% chance to drop the foe's Sp. Def by 2.",
    pp: 5
  },
  ominouswind: {
    name: "Ominous Wind",
    num: 466,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user blasts the target with a gust of dismal wind.\nThis ALWAYS drops the foe's offensive stats by 1.",
    shortDesc: "The user blasts the target with a gust of dismal wind.\nThis ALWAYS drops the foe's offensive stats by 1.",
    pp: 15
  },
  shadowforce: {
    name: "Shadow Force",
    num: 467,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      charge: 1,
      mirror: 1
    },
    basePower: 120,
    accuracy: true,
    category: "Physical",
    desc: "The user disappears, then strikes powerfully on the\nnext turn. This lowers the user's Defense stat by 2\nafter use. Ignores Protect & Substitute. Contact.",
    shortDesc: "The user disappears, then strikes powerfully on the\nnext turn. This lowers the user's Defense stat by 2\nafter use. Ignores Protect & Substitute. Contact.",
    pp: 5
  },
  honeclaws: {
    name: "Hone Claws",
    num: 468,
    type: "Dark",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user sharpens its claws to boost its Attack stat\nby 1, and Accuracy by 2. Z-Effect +2 crit rate.",
    shortDesc: "The user sharpens its claws to boost its Attack stat\nby 1, and Accuracy by 2. Z-Effect +2 crit rate.",
    pp: 3
  },
  wideguard: {
    name: "Wide Guard",
    num: 469,
    type: "Rock",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user protects its side of the field from spread\nmoves & Z-Moves, even in single battles. This can be\nused in succession without fail. Z-Effect +3 Defense.",
    shortDesc: "The user protects its side of the field from spread\nmoves & Z-Moves, even in single battles. This can be\nused in succession without fail. Z-Effect +3 Defense.",
    pp: 20
  },
  guardsplit: {
    name: "Guard Split",
    num: 470,
    type: "Psychic",
    flags: {
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user employs its psychic power to average its\nDefense and Sp. Def stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    shortDesc: "The user employs its psychic power to average its\nDefense and Sp. Def stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    pp: 10
  },
  powersplit: {
    name: "Power Split",
    num: 471,
    type: "Psychic",
    flags: {
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user employs its psychic power to average its\nAttack and Sp. Atk stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    shortDesc: "The user employs its psychic power to average its\nAttack and Sp. Atk stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    pp: 10
  },
  wonderroom: {
    name: "Wonder Room",
    num: 472,
    type: "Psychic",
    flags: {
      mirror: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user creates a bizarre area in which Pokemon’s\nDefense and Sp. Def stats are swapped for\nfive turns. Z-Effect +2 Sp. Atk. +6 Priority.",
    shortDesc: "The user creates a bizarre area in which Pokemon’s\nDefense and Sp. Def stats are swapped for\nfive turns. Z-Effect +2 Sp. Atk. +6 Priority.",
    pp: 10
  },
  psyshock: {
    name: "Psyshock",
    num: 473,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Special",
    desc: "The user materializes an odd psychic blast to attack.\nThis move deals Physical damage to the target.",
    shortDesc: "The user materializes an odd psychic blast to attack.\nThis move deals Physical damage to the target.",
    pp: 10
  },
  venoshock: {
    name: "Venoshock",
    num: 474,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "The user drenches the target in a special poisonous\nliquid. This move's power is doubled if the target\nis poisoned.",
    shortDesc: "The user drenches the target in a special poisonous\nliquid. This move's power is doubled if the target\nis poisoned.",
    pp: 10
  },
  autotomize: {
    name: "Autotomize",
    num: 475,
    type: "Steel",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user sheds part of its body to make itself lighter\nand maximize its Speed stat to +5. In exchange, the\nuser's defense stats drop by 1. Z-Effect +2 crit rate.",
    shortDesc: "The user sheds part of its body to make itself lighter\nand maximize its Speed stat to +5. In exchange, the\nuser's defense stats drop by 1. Z-Effect +2 crit rate.",
    pp: 1
  },
  ragepowder: {
    name: "Rage Powder",
    num: 476,
    type: "Bug",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user scatters a cloud of irritating powder to\ndraw attention to itself. Opponents aim only at\nthe user.",
    shortDesc: "The user scatters a cloud of irritating powder to\ndraw attention to itself. Opponents aim only at\nthe user.",
    pp: 5
  },
  telekinesis: {
    name: "Telekinesis",
    num: 477,
    type: "Psychic",
    flags: {
      gravity: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user makes the target float with telekinesis.\nIn addition to levitating, no attacks will miss the\nfoe for 15 turns. +4 Priority. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user makes the target float with telekinesis.\nIn addition to levitating, no attacks will miss the\nfoe for 15 turns. +4 Priority. Z-Effect +2 Sp. Atk.",
    pp: 15
  },
  magicroom: {
    name: "Magic Room",
    num: 478,
    type: "Psychic",
    flags: {
      mirror: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user creates a bizarre area in which Pokemon’s\nheld items lose their effects for five turns.\nZ-Effect +2 Sp. Atk. +6 Priority.",
    shortDesc: "The user creates a bizarre area in which Pokemon’s\nheld items lose their effects for five turns.\nZ-Effect +2 Sp. Atk. +6 Priority.",
    pp: 10
  },
  smackdown: {
    name: "Smack Down",
    num: 479,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user throws a stone or similar projectile to\nattack an opponent. A flying Pokemon will fall to the\nground when it’s hit. 30% flinch rate.",
    shortDesc: "The user throws a stone or similar projectile to\nattack an opponent. A flying Pokemon will fall to the\nground when it’s hit. 30% flinch rate.",
    pp: 15
  },
  stormthrow: {
    name: "Storm Throw",
    num: 480,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user throws the target violently.\nThis ALWAYS results in a critical hit.\nBypasses Protect. Contact.",
    shortDesc: "The user throws the target violently.\nThis ALWAYS results in a critical hit.\nBypasses Protect. Contact.",
    pp: 3
  },
  flameburst: {
    name: "Flame Burst",
    num: 481,
    type: "Fire",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks the target with a bursting flame.\nThis hits 3 times, and damages Pokemon next to the\ntarget for 6% of their HP per hit for a total of 18%.",
    shortDesc: "The user attacks the target with a bursting flame.\nThis hits 3 times, and damages Pokemon next to the\ntarget for 6% of their HP per hit for a total of 18%.",
    pp: 15
  },
  sludgewave: {
    name: "Sludge Wave",
    num: 482,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Special",
    desc: "The user swamps the foes with a wave of filthy sludge.\nThis ALWAYS lowers the Speed of the foes by 1.",
    shortDesc: "The user swamps the foes with a wave of filthy sludge.\nThis ALWAYS lowers the Speed of the foes by 1.",
    pp: 5
  },
  quiverdance: {
    name: "Quiver Dance",
    num: 483,
    type: "Bug",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user lightly performs a beautiful, mystic dance.\nThis boosts the user’s Sp. Atk and Speed by 1.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user lightly performs a beautiful, mystic dance.\nThis boosts the user’s Sp. Atk and Speed by 1.\nZ-Effect +2 Sp. Def.",
    pp: 2
  },
  heavyslam: {
    name: "Heavy Slam",
    num: 484,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "The user slams into the target with its heavy body.\nThe heavier the user is, the stronger this becomes.\nThis grounds a flying or levitating opponent. Contact.",
    shortDesc: "The user slams into the target with its heavy body.\nThe heavier the user is, the stronger this becomes.\nThis grounds a flying or levitating opponent. Contact.",
    pp: 10
  },
  synchronoise: {
    name: "Synchronoise",
    num: 485,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "Using an odd sound wave, the user inflicts massive\ndamage on any Pokemon that share a type with the\nuser. This ALWAYS boosts the user's Sp. Atk by 1.",
    shortDesc: "Using an odd sound wave, the user inflicts massive\ndamage on any Pokemon that share a type with the\nuser. This ALWAYS boosts the user's Sp. Atk by 1.",
    pp: 10
  },
  electroball: {
    name: "Electro Ball",
    num: 486,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Special",
    desc: "The user hurls an electric orb at the target. The\nfaster the user is than the foe, the higher the power.\nThis ALWAYS boosts the user's Speed by 1 after use.",
    shortDesc: "The user hurls an electric orb at the target. The\nfaster the user is than the foe, the higher the power.\nThis ALWAYS boosts the user's Speed by 1 after use.",
    pp: 5
  },
  soak: {
    name: "Soak",
    num: 487,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user douses the target in water.\nThis changes their typing to pure Water.\nZ-Effect +2 Sp. Atk.",
    shortDesc: "The user douses the target in water.\nThis changes their typing to pure Water.\nZ-Effect +2 Sp. Atk.",
    pp: 20
  },
  pyrodash: {
    name: "Pyro Dash",
    num: 488,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly dashes at the target cloaked in fire.\nThis has +1 priority, and can't miss. Contact.",
    shortDesc: "The user quickly dashes at the target cloaked in fire.\nThis has +1 priority, and can't miss. Contact.",
    pp: 15
  },
  coil: {
    name: "Coil",
    num: 489,
    type: "Poison",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user coils up it's long body. This boosts\nthe user's Attack, Defense and Accuracy by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user coils up it's long body. This boosts\nthe user's Attack, Defense and Accuracy by 1.\nZ-Effect +2 crit rate.",
    pp: 3
  },
  lowsweep: {
    name: "Low Sweep",
    num: 490,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: 100,
    category: "Physical",
    desc: "The user makes a swift attack on the target’s legs.\nThis has a 30% flinch rate. Contact.",
    shortDesc: "The user makes a swift attack on the target’s legs.\nThis has a 30% flinch rate. Contact.",
    pp: 20
  },
  sludgeshot: {
    name: "Sludge Shot",
    num: 491,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user shoots sludge at astonishing speed.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user shoots sludge at astonishing speed.\nThis has +1 priority, and can't miss.",
    pp: 20
  },
  foulplay: {
    name: "Foul Play",
    num: 492,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Physical",
    desc: "This devious attack uses the target's Attack stat\ninstead of the user's when dealing damage. Contact.",
    shortDesc: "This devious attack uses the target's Attack stat\ninstead of the user's when dealing damage. Contact.",
    pp: 10
  },
  simplebeam: {
    name: "Simple Beam",
    num: 493,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user’s mysterious psychic wave changes the\ntarget’s Ability to Simple. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user’s mysterious psychic wave changes the\ntarget’s Ability to Simple. Z-Effect +2 Sp. Atk.",
    pp: 15
  },
  entrainment: {
    name: "Entrainment",
    num: 494,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user influences the target to copy it's ability.\nZ-Effect +2 Atk.",
    shortDesc: "The user influences the target to copy it's ability.\nZ-Effect +2 Atk.",
    pp: 15
  },
  afteryou: {
    name: "After You",
    num: 495,
    type: "Normal",
    flags: {
      bypasssub: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Makes an ally move right after the user.\nThis can be useful to let a slower ally move first.",
    shortDesc: "Makes an ally move right after the user.\nThis can be useful to let a slower ally move first.",
    pp: 5
  },
  harmonize: {
    name: "Harmonize",
    num: 496,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks the target with it's voice. Others can\nharmonize to increase the power of the voice.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user attacks the target with it's voice. Others can\nharmonize to increase the power of the voice.\nThis ALWAYS drops the foe's attacking stats by 1.",
    pp: 15
  },
  echoedvoice: {
    name: "Echoed Voice",
    num: 497,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 30,
    accuracy: 95,
    category: "Special",
    desc: "The user attacks the target with an echoing voice.\nIf this move is used every turn, its power\nis boosted by 40 each time, for a maximum of 200.",
    shortDesc: "The user attacks the target with an echoing voice.\nIf this move is used every turn, its power\nis boosted by 40 each time, for a maximum of 200.",
    pp: 15
  },
  skittersmack: {
    name: "Skitter Smack",
    num: 498,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: true,
    category: "Physical",
    desc: "The user creeps up on the foe, striking them quickly.\nThis ALWAYS drops the foe's attacking stats by 1.\nThis also ignores any defense boosts. Contact.",
    shortDesc: "The user creeps up on the foe, striking them quickly.\nThis ALWAYS drops the foe's attacking stats by 1.\nThis also ignores any defense boosts. Contact.",
    pp: 20
  },
  clearsmog: {
    name: "Clear Smog",
    num: 499,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: true,
    category: "Special",
    desc: "The user emits an odd gas, damaging the foes and\nresetting all stat changes to zero.",
    shortDesc: "The user emits an odd gas, damaging the foes and\nresetting all stat changes to zero.",
    pp: 15
  },
  storedpower: {
    name: "Stored Power",
    num: 500,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 20,
    accuracy: 100,
    category: "Special",
    desc: "The user releases it's stored up power all at once.\nThis move gains 20 Base Power for every stat boost,\nand ALWAYS boosts the user's Sp. Atk by 1 after use.",
    shortDesc: "The user releases it's stored up power all at once.\nThis move gains 20 Base Power for every stat boost,\nand ALWAYS boosts the user's Sp. Atk by 1 after use.",
    pp: 3
  },
  quickguard: {
    name: "Quick Guard",
    num: 501,
    type: "Fighting",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user protects its side of the field from all\ntargeted priority moves. This can be used repeatedly\nwithout risk of failing. Z-Effect +3 Defense.",
    shortDesc: "The user protects its side of the field from all\ntargeted priority moves. This can be used repeatedly\nwithout risk of failing. Z-Effect +3 Defense.",
    pp: 30
  },
  allyswitch: {
    name: "Ally Switch",
    num: 502,
    type: "Psychic",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user switches places with an ally.\nThis has +6 priority. Z-Effect +3 Speed.",
    shortDesc: "The user switches places with an ally.\nThis has +6 priority. Z-Effect +3 Speed.",
    pp: 15
  },
  scald: {
    name: "Scald",
    num: 503,
    type: "Water",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user shoots boiling hot water at its target.\nThis ALWAYS burns the target.",
    shortDesc: "The user shoots boiling hot water at its target.\nThis ALWAYS burns the target.",
    pp: 10
  },
  shellsmash: {
    name: "Shell Smash",
    num: 504,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user breaks its shell, which lowers Defense and\nSp. Def stats by 1, but raises Sp. Atk, Attack, and\nSpeed by 2. Z-Effect +1 Speed.",
    shortDesc: "The user breaks its shell, which lowers Defense and\nSp. Def stats by 1, but raises Sp. Atk, Attack, and\nSpeed by 2. Z-Effect +1 Speed.",
    pp: 2
  },
  healpulse: {
    name: "Heal Pulse",
    num: 505,
    type: "Psychic",
    flags: {
      protect: 1,
      reflectable: 1,
      pulse: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user emits a healing pulse that restores the\ntarget’s HP by 2/3 of its max HP.\nZ-Effect heals user fully.",
    shortDesc: "The user emits a healing pulse that restores the\ntarget’s HP by 2/3 of its max HP.\nZ-Effect heals user fully.",
    pp: 10
  },
  hex: {
    name: "Hex",
    num: 506,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "This sinister attack does double damage to a foe\nwith a status affliction.",
    shortDesc: "This sinister attack does double damage to a foe\nwith a status affliction.",
    pp: 10
  },
  skydrop: {
    name: "Sky Drop",
    num: 507,
    type: "Flying",
    flags: {
      charge: 1,
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: true,
    category: "Physical",
    desc: "The user takes the target into the sky, then drops it\nnext turn. The foe can't attack while in the sky.\nFails if the foe is too heavy. Can't miss. Contact.",
    shortDesc: "The user takes the target into the sky, then drops it\nnext turn. The foe can't attack while in the sky.\nFails if the foe is too heavy. Can't miss. Contact.",
    pp: 10
  },
  shiftgear: {
    name: "Shift Gear",
    num: 508,
    type: "Steel",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user rotates its gears, raising its Attack and\nSp. Atk by 1, and raising it's Speed by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user rotates its gears, raising its Attack and\nSp. Atk by 1, and raising it's Speed by 2.\nZ-Effect +2 crit rate.",
    pp: 2
  },
  circlethrow: {
    name: "Circle Throw",
    num: 509,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: true,
    category: "Physical",
    desc: "The target is thrown, and a different Pokemon is\ndragged out. This attack always goes last, and can't\nmiss. Contact.",
    shortDesc: "The target is thrown, and a different Pokemon is\ndragged out. This attack always goes last, and can't\nmiss. Contact.",
    pp: 15
  },
  burningmalice: {
    name: "Burning Malice",
    num: 510,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user's bitterness flares up, engulfing the target\nin flames fueled by pure malice. This consumes\nany berries or gems the foe holds.",
    shortDesc: "The user's bitterness flares up, engulfing the target\nin flames fueled by pure malice. This consumes\nany berries or gems the foe holds.",
    pp: 15
  },
  quash: {
    name: "Quash",
    num: 511,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    pp: 15
  },
  acrobatics: {
    name: "Acrobatics",
    num: 512,
    type: "Flying",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: 100,
    category: "Physical",
    desc: "The user nimbly strikes the target. If the user is not\nholding an item, this attack inflicts double damage.\nContact.",
    shortDesc: "The user nimbly strikes the target. If the user is not\nholding an item, this attack inflicts double damage.\nContact.",
    pp: 10
  },
  reflecttype: {
    name: "Reflect Type",
    num: 513,
    type: "Normal",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user reflects the target’s type, making it the\nsame type as the target.\nThis has +4 priority. Z-Effect +1 all stats.",
    shortDesc: "The user reflects the target’s type, making it the\nsame type as the target.\nThis has +4 priority. Z-Effect +1 all stats.",
    pp: 15
  },
  retaliate: {
    name: "Retaliate",
    num: 514,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Physical",
    desc: "The user gets revenge for a fainted ally. If an ally\nfainted in the previous turn, this move’s power\nis doubled to insane levels. Contact.",
    shortDesc: "The user gets revenge for a fainted ally. If an ally\nfainted in the previous turn, this move’s power\nis doubled to insane levels. Contact.",
    pp: 10
  },
  finalgambit: {
    name: "Final Gambit",
    num: 515,
    type: "Fighting",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "The user risks it all to attack the target. This user\nfaints, and deals damage equal to it's current HP.",
    shortDesc: "The user risks it all to attack the target. This user\nfaints, and deals damage equal to it's current HP.",
    pp: 5
  },
  bestow: {
    name: "Bestow",
    num: 516,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user passes its held item to the target when the\ntarget isn’t holding an item. Z-Effect +2 Attack.",
    shortDesc: "The user passes its held item to the target when the\ntarget isn’t holding an item. Z-Effect +2 Attack.",
    pp: 15
  },
  inferno: {
    name: "Inferno",
    num: 517,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 70,
    category: "Special",
    desc: "The user attacks by engulfing the target in an\ncatastrophic inferno of flames. This always leaves\nthe target with a burn.",
    shortDesc: "The user attacks by engulfing the target in an\ncatastrophic inferno of flames. This always leaves\nthe target with a burn.",
    pp: 5
  },
  waterpledge: {
    name: "Water Pledge",
    num: 518,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "A column of water strikes the target. When combined\nwith its fire equivalent, its power increases and a\nrainbow appears. 25% chance to boost Sp. Atk by one.",
    shortDesc: "A column of water strikes the target. When combined\nwith its fire equivalent, its power increases and a\nrainbow appears. 25% chance to boost Sp. Atk by one.",
    pp: 10
  },
  firepledge: {
    name: "Fire Pledge",
    num: 519,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "A column of fire hits the target. When used with its\ngrass equivalent, its power increases and a vast sea\nof fire appears. 25% chance to boost Sp. Atk by one.",
    shortDesc: "A column of fire hits the target. When used with its\ngrass equivalent, its power increases and a vast sea\nof fire appears. 25% chance to boost Sp. Atk by one.",
    pp: 10
  },
  grasspledge: {
    name: "Grass Pledge",
    num: 520,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "A column of grass hits the target. When used with\nits water equivalent, its power increases and a vast\nswamp appears. 25% chance to boost Sp. Atk by one.",
    shortDesc: "A column of grass hits the target. When used with\nits water equivalent, its power increases and a vast\nswamp appears. 25% chance to boost Sp. Atk by one.",
    pp: 10
  },
  voltswitch: {
    name: "Volt Switch",
    num: 521,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: true,
    category: "Special",
    desc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack can't miss.",
    shortDesc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack can't miss.",
    pp: 15
  },
  strugglebug: {
    name: "Struggle Bug",
    num: 522,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user struggles, lashing out at all opponents.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user struggles, lashing out at all opponents.\nThis ALWAYS drops the foe's attacking stats by 1.",
    pp: 15
  },
  bulldoze: {
    name: "Bulldoze",
    num: 523,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Physical",
    desc: "The user strikes everything around it with a small\nearthquake. This lowers the Speed stat of\nthose hit by 1.",
    shortDesc: "The user strikes everything around it with a small\nearthquake. This lowers the Speed stat of\nthose hit by 1.",
    pp: 20
  },
  frostbreath: {
    name: "Frost Breath",
    num: 524,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 65,
    accuracy: 100,
    category: "Special",
    desc: "The user blows its freezing breath on the target.\nThis attack always results in a critical hit.",
    shortDesc: "The user blows its freezing breath on the target.\nThis attack always results in a critical hit.",
    pp: 5
  },
  dragontail: {
    name: "Dragon Tail",
    num: 525,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: true,
    category: "Physical",
    desc: "The user slams the target with its tail, and a\ndifferent Pokemon is dragged out. This attack always\ngoes last, and can't miss. Contact.",
    shortDesc: "The user slams the target with its tail, and a\ndifferent Pokemon is dragged out. This attack always\ngoes last, and can't miss. Contact.",
    pp: 15
  },
  workup: {
    name: "Work Up",
    num: 526,
    type: "Normal",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user is roused, and its Attack and Sp. Atk\nstats increase by 1. Z-Effect +1 Speed.",
    shortDesc: "The user is roused, and its Attack and Sp. Atk\nstats increase by 1. Z-Effect +1 Speed.",
    pp: 3
  },
  electroweb: {
    name: "Electroweb",
    num: 527,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks and captures opposing Pokemon\nusing an electric net. This lowers their\nSpeed stat by 1.",
    shortDesc: "The user attacks and captures opposing Pokemon\nusing an electric net. This lowers their\nSpeed stat by 1.",
    pp: 15
  },
  wildcharge: {
    name: "Wild Charge",
    num: 528,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 100,
    category: "Physical",
    desc: "The user shrouds itself in electricity and smashes\ninto its target. This has 20% recoil, and a 20%\nchance to paralyze the target. Contact.",
    shortDesc: "The user shrouds itself in electricity and smashes\ninto its target. This has 20% recoil, and a 20%\nchance to paralyze the target. Contact.",
    pp: 10
  },
  drillrun: {
    name: "Drill Run",
    num: 529,
    type: "Ground",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user crashes into its target while rotating its\nbody or body parts like a drill.  This has a 50% (+2)\ncrit rate. Contact.",
    shortDesc: "The user crashes into its target while rotating its\nbody or body parts like a drill.  This has a 50% (+2)\ncrit rate. Contact.",
    pp: 10
  },
  dracojet: {
    name: "Draco Jet",
    num: 530,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Physical",
    desc: "The user strikes the target with immense speed.\nThis has +1 priority, and can't miss. Contact.",
    shortDesc: "The user strikes the target with immense speed.\nThis has +1 priority, and can't miss. Contact.",
    pp: 15
  },
  hoodwink: {
    name: "Hoodwink",
    num: 531,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user unleashes a vicious blow after its cute act\nmakes the target less wary. This flinches the target\n30% of the time. Contact.",
    shortDesc: "The user unleashes a vicious blow after its cute act\nmakes the target less wary. This flinches the target\n30% of the time. Contact.",
    pp: 15
  },
  branchleech: {
    name: "Branch Leech",
    num: 532,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Physical",
    desc: "The user drains the foe's energy with branch-like\nappendages. The user’s HP is restored by 50% of\ndamage dealt. Contact.",
    shortDesc: "The user drains the foe's energy with branch-like\nappendages. The user’s HP is restored by 50% of\ndamage dealt. Contact.",
    pp: 10
  },
  sacredsword: {
    name: "Sacred Sword",
    num: 533,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 65,
    accuracy: true,
    category: "Physical",
    desc: "The user attacks by slicing with a long horn or blade.\nThis ignores all stat boosts the target may have.\nThis ALWAYS lands a critical hit. Contact.",
    shortDesc: "The user attacks by slicing with a long horn or blade.\nThis ignores all stat boosts the target may have.\nThis ALWAYS lands a critical hit. Contact.",
    pp: 5
  },
  razorshell: {
    name: "Razor Shell",
    num: 534,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Physical",
    desc: "The user cuts its target with it's hard shell. This\nhas a 50% (+2) crit rate. Contact.",
    shortDesc: "The user cuts its target with it's hard shell. This\nhas a 50% (+2) crit rate. Contact.",
    pp: 10
  },
  heatcrash: {
    name: "Heat Crash",
    num: 535,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: 100,
    category: "Physical",
    desc: "The user slams its target with its flame-covered\nbody. The more the user outweighs the target, the\nstronger this is. This has a 30% burn rate. Contact.",
    shortDesc: "The user slams its target with its flame-covered\nbody. The more the user outweighs the target, the\nstronger this is. This has a 30% burn rate. Contact.",
    pp: 10
  },
  leafflurry: {
    name: "Leaf Flurry",
    num: 536,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: 100,
    category: "Special",
    desc: "The user whips up a rapid flurry of leaves at the foe.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user whips up a rapid flurry of leaves at the foe.\nThis has +1 priority, and can't miss.",
    pp: 20
  },
  steamroller: {
    name: "Steamroller",
    num: 537,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 100,
    category: "Physical",
    desc: "The user crushes its target by rolling over the target\nwith its rolled-up body. This flinches 30% of the\ntime and boosts Speed by one 100% of the time.",
    shortDesc: "The user crushes its target by rolling over the target\nwith its rolled-up body. This flinches 30% of the\ntime and boosts Speed by one 100% of the time.",
    pp: 5
  },
  cottonguard: {
    name: "Cotton Guard",
    num: 538,
    type: "Grass",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user protects itself by wrapping its body in dense\ncotton, which raises the user's Defense by 3.\nZ-Effect heals user fully.",
    shortDesc: "The user protects itself by wrapping its body in dense\ncotton, which raises the user's Defense by 3.\nZ-Effect heals user fully.",
    pp: 2
  },
  nightdaze: {
    name: "Night Daze",
    num: 539,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Special",
    desc: "The user lets loose a horrible pitch-black shock wave.\nThis flinches 25% of the time, and afflicts a sleeping\nfoe with a horrible nightmare.",
    shortDesc: "The user lets loose a horrible pitch-black shock wave.\nThis flinches 25% of the time, and afflicts a sleeping\nfoe with a horrible nightmare.",
    pp: 10
  },
  psystrike: {
    name: "Psystrike",
    num: 540,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 85,
    category: "Special",
    desc: "The user materializes a chaotic psychic blast to\nattack the target. This attack does physical damage.",
    shortDesc: "The user materializes a chaotic psychic blast to\nattack the target. This attack does physical damage.",
    pp: 5
  },
  tailslap: {
    name: "Tail Slap",
    num: 541,
    type: "Normal",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks by striking the target hard with its\ntail. It hits 2-5 times in a row. Contact.",
    shortDesc: "The user attacks by striking the target hard with its\ntail. It hits 2-5 times in a row. Contact.",
    pp: 15
  },
  hurricane: {
    name: "Hurricane",
    num: 542,
    type: "Flying",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 85,
    category: "Special",
    desc: "The user attacks by surrounding its opponent in a\nfierce hurricane. This flinches 20% of the time, and\ncan't miss in the rain.",
    shortDesc: "The user attacks by surrounding its opponent in a\nfierce hurricane. This flinches 20% of the time, and\ncan't miss in the rain.",
    pp: 5
  },
  headlongrush: {
    name: "Headlong Rush",
    num: 543,
    type: "Ground",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user charges into the target with insane force.\nThis has 25% recoil, and lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    shortDesc: "The user charges into the target with insane force.\nThis has 25% recoil, and lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    pp: 5
  },
  geargrind: {
    name: "Gear Grind",
    num: 544,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 55,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks by grinding the target in it's gears.\nThis hits twice, with a 20% chance to flinch per hit.\nContact.",
    shortDesc: "The user attacks by grinding the target in it's gears.\nThis hits twice, with a 20% chance to flinch per hit.\nContact.",
    pp: 5
  },
  searingshot: {
    name: "Searing Shot",
    num: 545,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Special",
    desc: "The user torches everything around it in an shower\nof immense flames. This burns 25% of the time.",
    shortDesc: "The user torches everything around it in an shower\nof immense flames. This burns 25% of the time.",
    pp: 5
  },
  technoblast: {
    name: "Techno Blast",
    num: 546,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "The user fires a blast of energy at it's target. The\nmove’s type changes depending on the Drive the\nuser holds. This ALWAYS lowers the foe's Sp. Def by 1.",
    shortDesc: "The user fires a blast of energy at it's target. The\nmove’s type changes depending on the Drive the\nuser holds. This ALWAYS lowers the foe's Sp. Def by 1.",
    pp: 5
  },
  serenade: {
    name: "Serenade",
    num: 547,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "The user sings a song and attacks by\nappealing to the hearts of the listening opponents.\nThis makes the foes drowsy, falling asleep in 2 turns.",
    shortDesc: "The user sings a song and attacks by\nappealing to the hearts of the listening opponents.\nThis makes the foes drowsy, falling asleep in 2 turns.",
    pp: 10
  },
  radiantedge: {
    name: "Radiant Edge",
    num: 548,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 65,
    accuracy: 100,
    category: "Special",
    desc: "The user conjures up a blade made from light, slashing\nat the foe. This deals PHYSICAL damage, NOT Special.\nThis ALWAYS results in a critical hit.",
    shortDesc: "The user conjures up a blade made from light, slashing\nat the foe. This deals PHYSICAL damage, NOT Special.\nThis ALWAYS results in a critical hit.",
    pp: 5
  },
  glaciate: {
    name: "Glaciate",
    num: 549,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Special",
    desc: "The user freezes the space around the targets. This\nhas a 100% chance to lower the opponent's Speed by 2.",
    shortDesc: "The user freezes the space around the targets. This\nhas a 100% chance to lower the opponent's Speed by 2.",
    pp: 5
  },
  electroassault: {
    name: "Electro Assault",
    num: 550,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user surrounds itself with a great amount of\nelectricity and charges the foe. This drops the user's\nDefenses by 1 after use, & deals 30% recoil. Contact.",
    shortDesc: "The user surrounds itself with a great amount of\nelectricity and charges the foe. This drops the user's\nDefenses by 1 after use, & deals 30% recoil. Contact.",
    pp: 5
  },
  dragonfury: {
    name: "Dragon Fury",
    num: 551,
    type: "Dragon",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 70,
    category: "Special",
    desc: "The user fires off a destructive blast of dragon breath.\nThis ALWAYS leaves the foe with a burn.",
    shortDesc: "The user fires off a destructive blast of dragon breath.\nThis ALWAYS leaves the foe with a burn.",
    pp: 5
  },
  fierydance: {
    name: "Fiery Dance",
    num: 552,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "Cloaked in flames, the user dances with enthusiasm.\nThis ALWAYS boosts the user's Sp. Atk stat by 1.",
    shortDesc: "Cloaked in flames, the user dances with enthusiasm.\nThis ALWAYS boosts the user's Sp. Atk stat by 1.",
    pp: 10
  },
  icebreaker: {
    name: "Ice Breaker",
    num: 553,
    type: "Ice",
    flags: {
      charge: 1,
      mirror: 1
    },
    basePower: 140,
    accuracy: true,
    category: "Physical",
    desc: "Charging up energy on the 1st turn, the user fires a\nnmassive chunk of energized ice on the 2nd. This will\nALWAYS paralyze and ALWAYS crit. Ignores protect.",
    shortDesc: "Charging up energy on the 1st turn, the user fires a\nnmassive chunk of energized ice on the 2nd. This will\nALWAYS paralyze and ALWAYS crit. Ignores protect.",
    pp: 1
  },
  freezerburn: {
    name: "Freezer Burn",
    num: 554,
    type: "Ice",
    flags: {
      charge: 1,
      defrost: 1,
      mirror: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "Charging up energy on the 1st turn, the user unleashes\na wave of harsh, frigid cold on the 2nd. The resulting\nfrostbite ALWAYS burns & ALWAYS crits. Ignores protect.",
    shortDesc: "Charging up energy on the 1st turn, the user unleashes\na wave of harsh, frigid cold on the 2nd. The resulting\nfrostbite ALWAYS burns & ALWAYS crits. Ignores protect.",
    pp: 1
  },
  dismalcry: {
    name: "Dismal Cry",
    num: 555,
    type: "Dark",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a horrible sound imbued with dark\nfeelings. This demoralizes all foes who hear it,\nALWAYS dropping the foe's attacking stats by 1.",
    shortDesc: "The user unleashes a horrible sound imbued with dark\nfeelings. This demoralizes all foes who hear it,\nALWAYS dropping the foe's attacking stats by 1.",
    pp: 15
  },
  iciclecrash: {
    name: "Icicle Crash",
    num: 556,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 90,
    category: "Physical",
    desc: "The user attacks by harshly crashing large icicles\nonto the target. This flinches 30% of the time.",
    shortDesc: "The user attacks by harshly crashing large icicles\nonto the target. This flinches 30% of the time.",
    pp: 5
  },
  blazingassault: {
    name: "Blazing Assault",
    num: 557,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "Cloaked in flames, the user delivers a physical\nonslaught on the foe. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    shortDesc: "Cloaked in flames, the user delivers a physical\nonslaught on the foe. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    pp: 5
  },
  blazingoutburst: {
    name: "Blazing Outburst",
    num: 558,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 180,
    accuracy: 100,
    category: "Special",
    desc: "The use fires off a destructive burst of flames.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Electro Outburst.",
    shortDesc: "The use fires off a destructive burst of flames.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Electro Outburst.",
    pp: 3
  },
  electrooutburst: {
    name: "Electro Outburst",
    num: 559,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 180,
    accuracy: 100,
    category: "Special",
    desc: "The use fires off a destructive bolt of lightning.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Blazing Outburst.",
    shortDesc: "The use fires off a destructive bolt of lightning.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Blazing Outburst.",
    pp: 3
  },
  flyingpress: {
    name: "Flying Press",
    num: 560,
    type: "Fighting",
    flags: {
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: true,
    category: "Physical",
    desc: "The user dives down onto the target from the sky.\nThis move is Fighting and Flying type simultaneously.\nThis has a 30% paralysis rate. Contact.",
    shortDesc: "The user dives down onto the target from the sky.\nThis move is Fighting and Flying type simultaneously.\nThis has a 30% paralysis rate. Contact.",
    pp: 5
  },
  matblock: {
    name: "Mat Block",
    num: 561,
    type: "Fighting",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Using a pulled-up mat as a shield, the user protects\nitself and allies from damaging moves, not status.\nOnly works on turn 1. Z-Effect gives +1 All Stats.",
    shortDesc: "Using a pulled-up mat as a shield, the user protects\nitself and allies from damaging moves, not status.\nOnly works on turn 1. Z-Effect gives +1 All Stats.",
    pp: 10
  },
  belch: {
    name: "Belch",
    num: 562,
    type: "Poison",
    flags: {
      bypasssub: 1,
      protect: 1,
      punch: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Special",
    desc: "Only after eating a berry, the user belches, ALWAYS\nboosting the user's Sp. Atk by 1. This also has a 30%\nflinch rate. You can swap out and still use this move.",
    shortDesc: "Only after eating a berry, the user belches, ALWAYS\nboosting the user's Sp. Atk by 1. This also has a 30%\nflinch rate. You can swap out and still use this move.",
    pp: 10
  },
  rototiller: {
    name: "Rototiller",
    num: 563,
    type: "Grass",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Plowing the soil, the user boosts the Attack & Sp. Atk\nof any Grass-type on the field, including itself, by 2.\nZ-Effect gives +1 all stats.",
    shortDesc: "Plowing the soil, the user boosts the Attack & Sp. Atk\nof any Grass-type on the field, including itself, by 2.\nZ-Effect gives +1 all stats.",
    pp: 1
  },
  stickyweb: {
    name: "Sticky Web",
    num: 564,
    type: "Bug",
    flags: {
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user weaves a sticky net around the opposing\nteam, which lowers their Speed stat by 1 when\nswitching into battle. Z-Effect +3 Accuracy.",
    shortDesc: "The user weaves a sticky net around the opposing\nteam, which lowers their Speed stat by 1 when\nswitching into battle. Z-Effect +3 Accuracy.",
    pp: 20
  },
  finishingblow: {
    name: "Finishing Blow",
    num: 565,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 35,
    accuracy: true,
    category: "Physical",
    desc: "The user jabs at the target's critical weakpoint.\nALWAYS results in a critical hit, and will boost the\nuser's Attack by 3 if it knocks out the foe. Contact.",
    shortDesc: "The user jabs at the target's critical weakpoint.\nALWAYS results in a critical hit, and will boost the\nuser's Attack by 3 if it knocks out the foe. Contact.",
    pp: 10
  },
  phantomforce: {
    name: "Phantom Force",
    num: 566,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      charge: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 105,
    accuracy: true,
    category: "Physical",
    desc: "The user vanishes, then strikes the target on the\nnext turn. This drops the user's Defense stat by 1\nafter use. Bypasses Protect & Substitute, and can't miss. Contact.",
    shortDesc: "The user vanishes, then strikes the target on the\nnext turn. This drops the user's Defense stat by 1\nafter use. Bypasses Protect & Substitute, and can't miss. Contact.",
    pp: 10
  },
  spectrify: {
    name: "Spectrify",
    num: 567,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user imbues the target with ghostly power.\nThis adds Ghost type to the target’s type.\nZ-Effect +1 all stats.",
    shortDesc: "The user imbues the target with ghostly power.\nThis adds Ghost type to the target’s type.\nZ-Effect +1 all stats.",
    pp: 20
  },
  battlecry: {
    name: "Battle Cry",
    num: 568,
    type: "Fighting",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Letting out a battle cry, the user intimidates the\ntarget and lowers its Attack and Sp. Atk stats by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "Letting out a battle cry, the user intimidates the\ntarget and lowers its Attack and Sp. Atk stats by 2.\nZ-Effect +2 crit rate.",
    pp: 5
  },
  iondeluge: {
    name: "Ion Deluge",
    num: 569,
    type: "Electric",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user disperses electrically charged particles,\nwhich changes Normal-type moves to Electric-type.\nThis has +4 Priority. Z-Effect +1 all stats.",
    shortDesc: "The user disperses electrically charged particles,\nwhich changes Normal-type moves to Electric-type.\nThis has +4 Priority. Z-Effect +1 all stats.",
    pp: 10
  },
  paraboliccharge: {
    name: "Parabolic Charge",
    num: 570,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a strange electric charge that\nheals the user by 50% of damage dealt.",
    shortDesc: "The user unleashes a strange electric charge that\nheals the user by 50% of damage dealt.",
    pp: 10
  },
  forestscurse: {
    name: "Forest’s Curse",
    num: 571,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user puts a curse on the foe that causes them\nto lose 25% HP at the end of each turn, at no\ncost to the user. Z-Effect +1 all stats.",
    shortDesc: "The user puts a curse on the foe that causes them\nto lose 25% HP at the end of each turn, at no\ncost to the user. Z-Effect +1 all stats.",
    pp: 3
  },
  petalblizzard: {
    name: "Petal Blizzard",
    num: 572,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Special",
    desc: "The user stirs up a violent blizzard of petals and wind.\nThis ALWAYS lowers opponent Speed by 1.",
    shortDesc: "The user stirs up a violent blizzard of petals and wind.\nThis ALWAYS lowers opponent Speed by 1.",
    pp: 10
  },
  freezedry: {
    name: "Freeze-Dry",
    num: 573,
    type: "Ice",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Special",
    desc: "The user rapidly cools the target. This freezes the\ntarget 10% of the time. This move is super effective\non Water types.",
    shortDesc: "The user rapidly cools the target. This freezes the\ntarget 10% of the time. This move is super effective\non Water types.",
    pp: 15
  },
  disarmingvoice: {
    name: "Disarming Voice",
    num: 574,
    type: "Fairy",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1,
      sound: 1
    },
    basePower: 60,
    accuracy: 100,
    category: "Special",
    desc: "Letting out a charming cry, the user subdues the\nfoes, ALWAYS dropping the foe's attacking stats by 1.",
    shortDesc: "Letting out a charming cry, the user subdues the\nfoes, ALWAYS dropping the foe's attacking stats by 1.",
    pp: 15
  },
  partingshot: {
    name: "Parting Shot",
    num: 575,
    type: "Dark",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "With a parting threat, the user lowers the target’s\nAttack and Sp. Atk stats. Then it switches with a\nparty Pokemon. Z-Effect heals replacement.",
    shortDesc: "With a parting threat, the user lowers the target’s\nAttack and Sp. Atk stats. Then it switches with a\nparty Pokemon. Z-Effect heals replacement.",
    pp: 20
  },
  topsyturvy: {
    name: "Topsy-Turvy",
    num: 576,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "All stat changes affecting the target turn\nare reversed. Z-Effect heals user fully.\nThis has +4 Priority.",
    shortDesc: "All stat changes affecting the target turn\nare reversed. Z-Effect heals user fully.\nThis has +4 Priority.",
    pp: 20
  },
  drainingkiss: {
    name: "Draining Kiss",
    num: 577,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Special",
    desc: "The user steals the target’s HP with a kiss. The\nuser’s HP is restored by 75% of damage dealt.\nContact.",
    shortDesc: "The user steals the target’s HP with a kiss. The\nuser’s HP is restored by 75% of damage dealt.\nContact.",
    pp: 10
  },
  craftyshield: {
    name: "Crafty Shield",
    num: 578,
    type: "Psychic",
    flags: {
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user blocks any and all targeted status moves.\nThis can be used repeatedly without fail.\nHas +6 Priority. Z-EFFECT GIVES +1 ALL STATS.",
    shortDesc: "The user blocks any and all targeted status moves.\nThis can be used repeatedly without fail.\nHas +6 Priority. Z-EFFECT GIVES +1 ALL STATS.",
    pp: 40
  },
  floralguard: {
    name: "Floral Guard",
    num: 579,
    type: "Grass",
    flags: {
      dance: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user raises the Defense and Sp. Def stat of all\nGrass-type allies, including itself with a\nmysterious power. Z-Effect heals user fully.",
    shortDesc: "The user raises the Defense and Sp. Def stat of all\nGrass-type allies, including itself with a\nmysterious power. Z-Effect heals user fully.",
    pp: 3
  },
  grassyterrain: {
    name: "Grassy Terrain",
    num: 580,
    type: "Grass",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user changes the terrain to Grassy Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Grassy Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  mistyterrain: {
    name: "Misty Terrain",
    num: 581,
    type: "Fairy",
    flags: {
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user changes the terrain to Misty Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Misty Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  electrify: {
    name: "Electrify",
    num: 582,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user makes the opponent's selected move\nfor the turn become Electric type.\nThis has +4 Priority. Z-Effect gives +2 Speed.",
    shortDesc: "The user makes the opponent's selected move\nfor the turn become Electric type.\nThis has +4 Priority. Z-Effect gives +2 Speed.",
    pp: 1
  },
  playrough: {
    name: "Play Rough",
    num: 583,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 110,
    accuracy: 100,
    category: "Physical",
    desc: "The user roughhouses the foe strongly, but playfully.\nThis deals 20% recoil damage to the user, and has a\n50% chance to drop the foe's Attack by 1 after use.",
    shortDesc: "The user roughhouses the foe strongly, but playfully.\nThis deals 20% recoil damage to the user, and has a\n50% chance to drop the foe's Attack by 1 after use.",
    pp: 5
  },
  pixiedust: {
    name: "Pixie Dust",
    num: 584,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Special",
    desc: "The user quickly blows fairy dust at the opponent.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly blows fairy dust at the opponent.\nThis has +1 priority, and can't miss.",
    pp: 20
  },
  moonblast: {
    name: "Moonblast",
    num: 585,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Special",
    desc: "Borrowing the power of the moon, the user attacks\nthe foe. This lowers their Sp. Atk 30% of the time.",
    shortDesc: "Borrowing the power of the moon, the user attacks\nthe foe. This lowers their Sp. Atk 30% of the time.",
    pp: 10
  },
  boomburst: {
    name: "Boomburst",
    num: 586,
    type: "Normal",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes an excruciatingly loud sound wave.\nThis hits all foes.",
    shortDesc: "The user unleashes an excruciatingly loud sound wave.\nThis hits all foes.",
    pp: 5
  },
  fairylock: {
    name: "Fairy Lock",
    num: 587,
    type: "Fairy",
    flags: {
      bypasssub: 1,
      mirror: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    pp: 10
  },
  kingsshield: {
    name: "King’s Shield",
    num: 588,
    type: "Steel",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user takes a defensive stance while it protects\nitself from damage. It lowers the Attack of any foes\nthat make contact by 2. Z-Effect +1 Speed.",
    shortDesc: "The user takes a defensive stance while it protects\nitself from damage. It lowers the Attack of any foes\nthat make contact by 2. Z-Effect +1 Speed.",
    pp: 5
  },
  playnice: {
    name: "Play Nice",
    num: 589,
    type: "Fairy",
    flags: {
      mirror: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user and the target become friends, and the\ntarget loses its will to fight. This has +4 priority,\nand drops their Sp. Atk by 1. Z-Effect +2 Attack.",
    shortDesc: "The user and the target become friends, and the\ntarget loses its will to fight. This has +4 priority,\nand drops their Sp. Atk by 1. Z-Effect +2 Attack.",
    pp: 20
  },
  confide: {
    name: "Confide",
    num: 590,
    type: "Dark",
    flags: {
      bypasssub: 1,
      mirror: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user tells the target a shocking secret, and\ndrops their Sp. Atk and Sp. Def by one.\nZ-Effect +2 Sp. Atk. BYPASSES PROTECT.",
    shortDesc: "The user tells the target a shocking secret, and\ndrops their Sp. Atk and Sp. Def by one.\nZ-Effect +2 Sp. Atk. BYPASSES PROTECT.",
    pp: 10
  },
  mineralshower: {
    name: "Mineral Shower",
    num: 591,
    type: "Rock",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user whips up a storm of gemstones and crystals.\nThis lowers the user's Sp. Atk stat by 2 after use.",
    shortDesc: "The user whips up a storm of gemstones and crystals.\nThis lowers the user's Sp. Atk stat by 2 after use.",
    pp: 5
  },
  steameruption: {
    name: "Steam Eruption",
    num: 592,
    type: "Water",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 100,
    category: "Special",
    desc: "The user immerses the target in superheated steam.\nThis ALWAYS leaves the foe with a burn.",
    shortDesc: "The user immerses the target in superheated steam.\nThis ALWAYS leaves the foe with a burn.",
    pp: 5
  },
  psychowarp: {
    name: "Psycho Warp",
    num: 593,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 120,
    accuracy: true,
    category: "Physical",
    desc: "Using great psychic power, the user appears right\nnext to the target and strikes. This lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    shortDesc: "Using great psychic power, the user appears right\nnext to the target and strikes. This lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    pp: 5
  },
  surgingstrikes: {
    name: "Surging Strikes",
    num: 594,
    type: "Water",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Physical",
    desc: "The user repeatedly strikes the target with the force\nof a tsunami. This hits three times, and always\nresults in a critical hit. Bypasses Protect. Contact.",
    shortDesc: "The user repeatedly strikes the target with the force\nof a tsunami. This hits three times, and always\nresults in a critical hit. Bypasses Protect. Contact.",
    pp: 3
  },
  mysticalfire: {
    name: "Mystical Fire",
    num: 595,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Special",
    desc: "The user attacks by forming a strange, magical flame.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user attacks by forming a strange, magical flame.\nThis ALWAYS drops the foe's attacking stats by 1.",
    pp: 10
  },
  spikyshield: {
    name: "Spiky Shield",
    num: 596,
    type: "Grass",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "In addition to protecting the user from attacks, this\nmove also damages any attacker who makes\ncontact for 12% of their max HP. Z-Effect +2 Defense.",
    shortDesc: "In addition to protecting the user from attacks, this\nmove also damages any attacker who makes\ncontact for 12% of their max HP. Z-Effect +2 Defense.",
    pp: 10
  },
  aromaticmist: {
    name: "Aromatic Mist",
    num: 597,
    type: "Fairy",
    flags: {
      bypasssub: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user releases an alluring, strong smelling mist.\nThis lowers the Sp. Atk & Sp. Def stats of foes who\nsmell it by 2. Z-Effect heals the user fully.",
    shortDesc: "The user releases an alluring, strong smelling mist.\nThis lowers the Sp. Atk & Sp. Def stats of foes who\nsmell it by 2. Z-Effect heals the user fully.",
    pp: 5
  },
  strangeimpulse: {
    name: "Strange Impulse",
    num: 598,
    type: "Electric",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user’s body emits a bizarre, unnerving impulse.\nThis lowers the Sp. Atk of the foes by 2.\nZ-Effect +2 Sp. Atk.",
    shortDesc: "The user’s body emits a bizarre, unnerving impulse.\nThis lowers the Sp. Atk of the foes by 2.\nZ-Effect +2 Sp. Atk.",
    pp: 5
  },
  venomdrench: {
    name: "Venom Drench",
    num: 599,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The opponent is drenched in a special, poison liquid.\nThis drops the Speed & Offenses of the foe by 3.\nFails if the foe isn't poisoned. Z-Effect +3 Sp. Atk.",
    shortDesc: "The opponent is drenched in a special, poison liquid.\nThis drops the Speed & Offenses of the foe by 3.\nFails if the foe isn't poisoned. Z-Effect +3 Sp. Atk.",
    pp: 5
  },
  powder: {
    name: "Powder",
    num: 600,
    type: "Bug",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "Covers the foe in combustible powder. +4 Priority.\nIf the target uses a Fire move, the move fails and\nthey take 25% of their max HP. Z-Effect +1 all stats.",
    shortDesc: "Covers the foe in combustible powder. +4 Priority.\nIf the target uses a Fire move, the move fails and\nthey take 25% of their max HP. Z-Effect +1 all stats.",
    pp: 5
  },
  enchantment: {
    name: "Enchantment",
    num: 601,
    type: "Fairy",
    flags: {
      charge: 1,
      dance: 1,
      snatch: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user summons a magical force for 1 turn.\nOn the second turn, the user gains +2 Sp. Def and\nSp. Atk and +1 Speed. Z-Effect heals user fully.",
    shortDesc: "The user summons a magical force for 1 turn.\nOn the second turn, the user gains +2 Sp. Def and\nSp. Atk and +1 Speed. Z-Effect heals user fully.",
    pp: 1
  },
  magneticflux: {
    name: "Magnetic Flux",
    num: 602,
    type: "Electric",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    pp: 20
  },
  happyhour: {
    name: "Happy Hour",
    num: 603,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Using Happy Hour doubles the amount of prize\nmoney received after battle.\nZ-Effect +1 all stats.",
    shortDesc: "Using Happy Hour doubles the amount of prize\nmoney received after battle.\nZ-Effect +1 all stats.",
    pp: 30
  },
  electricterrain: {
    name: "Electric Terrain",
    num: 604,
    type: "Electric",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user changes the terrain to Electric Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Electric Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  dazzlinggleam: {
    name: "Dazzling Gleam",
    num: 605,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 80,
    accuracy: 100,
    category: "Special",
    desc: "The user damages opposing Pokemon by emitting a\nbeautiful gleam of light. This has a 25% chance to\nboost the user's Sp. Atk by one.",
    shortDesc: "The user damages opposing Pokemon by emitting a\nbeautiful gleam of light. This has a 25% chance to\nboost the user's Sp. Atk by one.",
    pp: 15
  },
  celebrate: {
    name: "Celebrate",
    num: 606,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Delibird summons a giant present with holiday spirit.\nThis does nothing, but Delibird enjoys it!\nZ-Effect gives +1 to all stats, and has +4 Priority.",
    shortDesc: "Delibird summons a giant present with holiday spirit.\nThis does nothing, but Delibird enjoys it!\nZ-Effect gives +1 to all stats, and has +4 Priority.",
    pp: 40
  },
  befriend: {
    name: "Befriend",
    num: 607,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user befriends the foe, making them less hostile.\nThis lowers the foe's Sp. Atk stat by 2.\nZ-Effect heals the user fully.",
    shortDesc: "The user befriends the foe, making them less hostile.\nThis lowers the foe's Sp. Atk stat by 2.\nZ-Effect heals the user fully.",
    pp: 5
  },
  babydolleyes: {
    name: "Baby-Doll Eyes",
    num: 608,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user stares at the target with its baby-doll\neyes, which lowers its Attack by one.\nThis has +4 priority. Z-Effect +2 Attack.",
    shortDesc: "The user stares at the target with its baby-doll\neyes, which lowers its Attack by one.\nThis has +4 priority. Z-Effect +2 Attack.",
    pp: 20
  },
  nuzzle: {
    name: "Nuzzle",
    num: 609,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user cutely nuzzles the foe.\nThis leaves the foe paralyzed and lowers their Attack\nand Sp. Atk by 1. Z-Effect +2 Attack. Contact.",
    shortDesc: "The user cutely nuzzles the foe.\nThis leaves the foe paralyzed and lowers their Attack\nand Sp. Atk by 1. Z-Effect +2 Attack. Contact.",
    pp: 10
  },
  holdback: {
    name: "Hold Back",
    num: 610,
    type: "Fairy",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "The user goes easy on the foe to avoid knocking them\nout. In return, this boosts the user's Attack and\nAccuracy stats by 1 after use. Can't miss. Contact.",
    shortDesc: "The user goes easy on the foe to avoid knocking them\nout. In return, this boosts the user's Attack and\nAccuracy stats by 1 after use. Can't miss. Contact.",
    pp: 5
  },
  infestation: {
    name: "Infestation",
    num: 611,
    type: "Bug",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Special",
    desc: "The target is infested with a relentless pestilence\nthat traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The target is infested with a relentless pestilence\nthat traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    pp: 20
  },
  poweruppunch: {
    name: "Power-Up Punch",
    num: 612,
    type: "Fighting",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: 100,
    category: "Physical",
    desc: "Striking opponents over and over makes the user’s\nfists harder. Hitting a target raises the Attack stat.",
    shortDesc: "Striking opponents over and over makes the user’s\nfists harder. Hitting a target raises the Attack stat.",
    pp: 5
  },
  oblivionbeam: {
    name: "Oblivion Beam",
    num: 613,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 180,
    accuracy: 100,
    category: "Special",
    desc: "The user fires off a devastating beam of darkness from\nthe sky. This drops your Sp. Atk stat by -4. (2/3).",
    shortDesc: "The user fires off a devastating beam of darkness from\nthe sky. This drops your Sp. Atk stat by -4. (2/3).",
    pp: 3
  },
  thousandarrows: {
    name: "Thousand Arrows",
    num: 614,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 100,
    category: "Special",
    desc: "Zygarde fires off an onslaught of arrows.\nThese will ground a flying target.",
    shortDesc: "Zygarde fires off an onslaught of arrows.\nThese will ground a flying target.",
    pp: 5
  },
  thousandwaves: {
    name: "Thousand Waves",
    num: 615,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Special",
    desc: "Zygarde fires off an onslaught of waves.\nThese will trap the targets in battle.",
    shortDesc: "Zygarde fires off an onslaught of waves.\nThese will trap the targets in battle.",
    pp: 5
  },
  landswrath: {
    name: "Land's Wrath",
    num: 616,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user gathers the energy of the land and focuses\nit on the target. This lowers the user's Sp. Atk stat\nby 2 stages after use in exchange.",
    shortDesc: "The user gathers the energy of the land and focuses\nit on the target. This lowers the user's Sp. Atk stat\nby 2 stages after use in exchange.",
    pp: 5
  },
  eternalbeam: {
    name: "Eternal Beam",
    num: 617,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a perilous beam fueled by its own\nlife force. This deals 25% recoil, and has a 30%\nchance to drop the foe's Sp. Def stat after use.",
    shortDesc: "The user unleashes a perilous beam fueled by its own\nlife force. This deals 25% recoil, and has a 30%\nchance to drop the foe's Sp. Def stat after use.",
    pp: 10
  },
  torrentialpulse: {
    name: "Torrential Pulse",
    num: 618,
    type: "Water",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    basePower: 100,
    accuracy: 90,
    category: "Special",
    desc: "The user attacks opponents with a brilliant cascade of\nwater. This has a 50% chance to drop Sp. Def.",
    shortDesc: "The user attacks opponents with a brilliant cascade of\nwater. This has a 50% chance to drop Sp. Def.",
    pp: 10
  },
  precipiceblades: {
    name: "Precipice Blades",
    num: 619,
    type: "Ground",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 85,
    category: "Physical",
    desc: "The user attacks opposing Pokemon by manifesting\nthe power of the land in fearsome, searingly hot\nblades of stone. This burns the foes 30% of the time.",
    shortDesc: "The user attacks opposing Pokemon by manifesting\nthe power of the land in fearsome, searingly hot\nblades of stone. This burns the foes 30% of the time.",
    pp: 5
  },
  dragonascent: {
    name: "Dragon Ascent",
    num: 620,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Physical",
    desc: "The user descends from the sky onto the foe\nwith immense, drakonic force.\nThis drops the user's Attack by 2 after use. Contact.",
    shortDesc: "The user descends from the sky onto the foe\nwith immense, drakonic force.\nThis drops the user's Attack by 2 after use. Contact.",
    pp: 5
  },
  hyperspacefury: {
    name: "Hyperspace Fury",
    num: 621,
    type: "Dark",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 150,
    accuracy: true,
    category: "Physical",
    desc: "Using its many arms, Hoopa Unbound unleashes it's\nfury. This drops Hoopa's Defenses by 1 after use, and\ndeals 30% recoil damage. Contact. Bypasses protect.",
    shortDesc: "Using its many arms, Hoopa Unbound unleashes it's\nfury. This drops Hoopa's Defenses by 1 after use, and\ndeals 30% recoil damage. Contact. Bypasses protect.",
    pp: 5
  },
  breakneckblitz: {
    name: "Breakneck Blitz",
    num: 623,
    type: "Normal",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  alloutpummeling: {
    name: "All-Out Pummeling",
    num: 625,
    type: "Fighting",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  supersonicskystrike: {
    name: "Supersonic Skystrike",
    num: 627,
    type: "Flying",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  aciddownpour: {
    name: "Acid Downpour",
    num: 629,
    type: "Poison",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  tectonicrage: {
    name: "Tectonic Rage",
    num: 631,
    type: "Ground",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  continentalcrush: {
    name: "Continental Crush",
    num: 633,
    type: "Rock",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  savagespinout: {
    name: "Savage Spin-Out",
    num: 635,
    type: "Bug",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  neverendingnightmare: {
    name: "Never-Ending Nightmare",
    num: 637,
    type: "Ghost",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  corkscrewcrash: {
    name: "Corkscrew Crash",
    num: 639,
    type: "Steel",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  infernooverdrive: {
    name: "Inferno Overdrive",
    num: 641,
    type: "Fire",
    flags: {
      defrost: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  hydrovortex: {
    name: "Hydro Vortex",
    num: 643,
    type: "Water",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  bloomdoom: {
    name: "Bloom Doom",
    num: 645,
    type: "Grass",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  gigavolthavoc: {
    name: "Gigavolt Havoc",
    num: 647,
    type: "Electric",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  shatteredpsyche: {
    name: "Shattered Psyche",
    num: 649,
    type: "Psychic",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  subzeroslammer: {
    name: "Subzero Slammer",
    num: 651,
    type: "Ice",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  devastatingdrake: {
    name: "Devastating Drake",
    num: 653,
    type: "Dragon",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  blackholeeclipse: {
    name: "Black Hole Eclipse",
    num: 655,
    type: "Dark",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  twinkletackle: {
    name: "Twinkle Tackle",
    num: 657,
    type: "Fairy",
    flags: {
      sound: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    pp: 1
  },
  catastropika: {
    name: "Catastropika",
    num: 658,
    type: "Electric",
    flags: {},
    basePower: 250,
    accuracy: true,
    category: "Physical",
    desc: "Pikachu dives at the target with immense force.\nThis ALWAYS crits and ALWAYS paralyzes the foe.",
    shortDesc: "Pikachu dives at the target with immense force.\nThis ALWAYS crits and ALWAYS paralyzes the foe.",
    pp: 1
  },
  sedimend: {
    name: "Sedimend",
    num: 659,
    type: "Ground",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user mends it's body with sand or other minerals.\nThis heals the user by 50% of it's max HP. This heals\n66% of it's HP in a Sandstorm. Z-Effect +2 Sp. Def.",
    shortDesc: "The user mends it's body with sand or other minerals.\nThis heals the user by 50% of it's max HP. This heals\n66% of it's HP in a Sandstorm. Z-Effect +2 Sp. Def.",
    pp: 5
  },
  firstimpression: {
    name: "First Impression",
    num: 660,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1
    },
    basePower: 60,
    accuracy: true,
    category: "Physical",
    desc: "The user delivers a quick, potent blow. This has +4\npriority, can't miss, & ALWAYS crits. However, it only\nworks the on the 1st turn. Contact. BYPASSES PROTECT.",
    shortDesc: "The user delivers a quick, potent blow. This has +4\npriority, can't miss, & ALWAYS crits. However, it only\nworks the on the 1st turn. Contact. BYPASSES PROTECT.",
    pp: 10
  },
  banefulbunker: {
    name: "Baneful Bunker",
    num: 661,
    type: "Poison",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "In addition to protecting the user from attacks, this\nmove also poisons any attacker that makes\ndirect contact. Z-Effect +2 Defense.",
    shortDesc: "In addition to protecting the user from attacks, this\nmove also poisons any attacker that makes\ndirect contact. Z-Effect +2 Defense.",
    pp: 10
  },
  spiritshackle: {
    name: "Spirit Shackle",
    num: 662,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 60,
    accuracy: true,
    category: "Physical",
    desc: "The user attacks while simultaneously stitching the\ntarget’s shadow to the ground to prevent the target\nfrom escaping. This always results in a critical hit.",
    shortDesc: "The user attacks while simultaneously stitching the\ntarget’s shadow to the ground to prevent the target\nfrom escaping. This always results in a critical hit.",
    pp: 5
  },
  brutalswing: {
    name: "Brutal Swing",
    num: 663,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user crashes into the target, swinging around.\nThis has 25% recoil. The target’s stat changes don’t\naffect this attack’s damage. Contact.",
    shortDesc: "The user crashes into the target, swinging around.\nThis has 25% recoil. The target’s stat changes don’t\naffect this attack’s damage. Contact.",
    pp: 10
  },
  bubbleburst: {
    name: "Bubble Burst",
    num: 664,
    type: "Water",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Special",
    desc: "The user releases a flurry of exploding bubbles down\nonto the foe. This ALWAYS lowers their Speed by 1.",
    shortDesc: "The user releases a flurry of exploding bubbles down\nonto the foe. This ALWAYS lowers their Speed by 1.",
    pp: 10
  },
  icehammer: {
    name: "Ice Hammer",
    num: 665,
    type: "Ice",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Physical",
    desc: "The user wildly swings its heavy fist encased in ice.\nThis deals 25% recoil, and drops Defense 30% of\nthe time. Contact.",
    shortDesc: "The user wildly swings its heavy fist encased in ice.\nThis deals 25% recoil, and drops Defense 30% of\nthe time. Contact.",
    pp: 10
  },
  floralhealing: {
    name: "Floral Healing",
    num: 666,
    type: "Grass",
    flags: {
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals itself by 50% of its max HP.\nThis restores 2/3 HP under Grassy Terrain.\nZ-Effect gives +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of its max HP.\nThis restores 2/3 HP under Grassy Terrain.\nZ-Effect gives +2 Sp. Def.",
    pp: 5
  },
  highhorsepower: {
    name: "High Horsepower",
    num: 667,
    type: "Ground",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 95,
    accuracy: 100,
    category: "Physical",
    desc: "The user kicks the target with immense power using\nits hooves. This has a 30% flinch chance. Contact.",
    shortDesc: "The user kicks the target with immense power using\nits hooves. This has a 30% flinch chance. Contact.",
    pp: 10
  },
  strengthsap: {
    name: "Strength Sap",
    num: 668,
    type: "Grass",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user drains the target's life force. This\nrecovers massive HP,  equal to the foe's Attack stat.\nThis also lowers Attack by 1. Z-Effect +2 Sp. Def.",
    shortDesc: "The user drains the target's life force. This\nrecovers massive HP,  equal to the foe's Attack stat.\nThis also lowers Attack by 1. Z-Effect +2 Sp. Def.",
    pp: 5
  },
  solarblade: {
    name: "Solar Blade",
    num: 669,
    type: "Grass",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Physical",
    desc: "The user gathers light and strikes with a blade on the\nsecond turn. This doesn't need to charge in sun.\nContact. ALWAYS CRITS. Ignores protect.",
    shortDesc: "The user gathers light and strikes with a blade on the\nsecond turn. This doesn't need to charge in sun.\nContact. ALWAYS CRITS. Ignores protect.",
    pp: 10
  },
  seedshot: {
    name: "Seed Shot",
    num: 670,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "The user quickly shoots small seeds and other\nplant matter at the foe. This can't miss.\nThis attack has +1 priority.",
    shortDesc: "The user quickly shoots small seeds and other\nplant matter at the foe. This can't miss.\nThis attack has +1 priority.",
    pp: 25
  },
  spotlight: {
    name: "Spotlight",
    num: 671,
    type: "Normal",
    flags: {
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user shines a spotlight on the foe so they become\nthe center of attention for the rest of the turn.\nZ-Effect gives +1 to all stats.",
    shortDesc: "The user shines a spotlight on the foe so they become\nthe center of attention for the rest of the turn.\nZ-Effect gives +1 to all stats.",
    pp: 15
  },
  toxicthread: {
    name: "Toxic Thread",
    num: 672,
    type: "Poison",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: 100,
    category: "Status",
    desc: "The user shoots poisonous filaments to poison and slow\nthe foe. This both poisons the foe, and drops their\nSpeed & Evasion stats by 4. Z-Effect +1 all stats.",
    shortDesc: "The user shoots poisonous filaments to poison and slow\nthe foe. This both poisons the foe, and drops their\nSpeed & Evasion stats by 4. Z-Effect +1 all stats.",
    pp: 20
  },
  laserfocus: {
    name: "Laser Focus",
    num: 673,
    type: "Normal",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user concentrates intensely. The attack on the\nnext turn always results in a critical hit.\nZ-Effect +2 Speed.",
    shortDesc: "The user concentrates intensely. The attack on the\nnext turn always results in a critical hit.\nZ-Effect +2 Speed.",
    pp: 30
  },
  gearup: {
    name: "Gear Up",
    num: 674,
    type: "Steel",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user gears up for battle. This heals the user by\n50% of their max HP. With a Z-Crystal, however,\nthis will give the user +1 to ALL stats.",
    shortDesc: "The user gears up for battle. This heals the user by\n50% of their max HP. With a Z-Crystal, however,\nthis will give the user +1 to ALL stats.",
    pp: 5
  },
  hellthrust: {
    name: "Hell Thrust",
    num: 675,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 100,
    accuracy: 95,
    category: "Physical",
    desc: "The user savagely strikes the target, and the\nresultant suffering prevents the target from using\nFairy-type moves for 2 turns. Contact.",
    shortDesc: "The user savagely strikes the target, and the\nresultant suffering prevents the target from using\nFairy-type moves for 2 turns. Contact.",
    pp: 10
  },
  bugbomber: {
    name: "Bug Bomber",
    num: 676,
    type: "Bug",
    flags: {
      heal: 1,
      mirror: 1,
      bullet: 1
    },
    basePower: 25,
    accuracy: 100,
    category: "Special",
    desc: "The user fires 3 balls made from varying components.\nThis hits 3 times, ALWAYS results in a critical hit,\nand bypasses Protect. Heals an ally by 50% when used.",
    shortDesc: "The user fires 3 balls made from varying components.\nThis hits 3 times, ALWAYS results in a critical hit,\nand bypasses Protect. Heals an ally by 50% when used.",
    pp: 3
  },
  anchorshot: {
    name: "Anchor Shot",
    num: 677,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 140,
    accuracy: 100,
    category: "Physical",
    desc: "Dhelmise pummels and wraps the target with it's\nanchor. This traps the target in battle, and ALWAYS\nlowers their Speed stat by 4. Contact.",
    shortDesc: "Dhelmise pummels and wraps the target with it's\nanchor. This traps the target in battle, and ALWAYS\nlowers their Speed stat by 4. Contact.",
    pp: 5
  },
  psychicterrain: {
    name: "Psychic Terrain",
    num: 678,
    type: "Psychic",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user changes the terrain to Psychic Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Psychic Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    pp: 5
  },
  lunge: {
    name: "Lunge",
    num: 679,
    type: "Bug",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user makes a lunge at the target, attacking with\nfull force. This always lowers the target’s Defense\nstat by one. Contact.",
    shortDesc: "The user makes a lunge at the target, attacking with\nfull force. This always lowers the target’s Defense\nstat by one. Contact.",
    pp: 10
  },
  firelash: {
    name: "Fire Lash",
    num: 680,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user lashes the target with a burning whip, tail\nor the like. This always lowers the target's Defense\nstat by one. Contact.",
    shortDesc: "The user lashes the target with a burning whip, tail\nor the like. This always lowers the target's Defense\nstat by one. Contact.",
    pp: 10
  },
  powertrip: {
    name: "Power Trip",
    num: 681,
    type: "Dark",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 20,
    accuracy: true,
    category: "Physical",
    desc: "The user boasts its strength and attacks the target.\nThis gains 20 Base Power for every stat boost.\nThe user gains +1 Attack after each use. Contact.",
    shortDesc: "The user boasts its strength and attacks the target.\nThis gains 20 Base Power for every stat boost.\nThe user gains +1 Attack after each use. Contact.",
    pp: 3
  },
  burnup: {
    name: "Burn Up",
    num: 682,
    type: "Fire",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 140,
    accuracy: 100,
    category: "Special",
    desc: "The user burns its fire out in a massive blast this\nremoves the user's Fire typing after use. This fails\nafter the Fire type is lost, & ALWAYS burns the foe.",
    shortDesc: "The user burns its fire out in a massive blast this\nremoves the user's Fire typing after use. This fails\nafter the Fire type is lost, & ALWAYS burns the foe.",
    pp: 5
  },
  speedswap: {
    name: "Speed Swap",
    num: 683,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user exchanges Speed stats with the target.\nZ-Effect +3 Speed. +4 Priority.",
    shortDesc: "The user exchanges Speed stats with the target.\nZ-Effect +3 Speed. +4 Priority.",
    pp: 10
  },
  smartstrike: {
    name: "Smart Strike",
    num: 684,
    type: "Steel",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: true,
    category: "Physical",
    desc: "The user concentrates, and strikes the target with a\nsharp horn, blade or the like. This can't miss, and\nboosts the user's Accuracy by 1 after use. Contact.",
    shortDesc: "The user concentrates, and strikes the target with a\nsharp horn, blade or the like. This can't miss, and\nboosts the user's Accuracy by 1 after use. Contact.",
    pp: 15
  },
  purify: {
    name: "Purify",
    num: 685,
    type: "Grass",
    flags: {
      protect: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user heals the target’s status condition. If the\nmove succeeds, it heals the user to max HP.\nZ-Effect +1 all stats, even if Purify fails.",
    shortDesc: "The user heals the target’s status condition. If the\nmove succeeds, it heals the user to max HP.\nZ-Effect +1 all stats, even if Purify fails.",
    pp: 20
  },
  revelationdance: {
    name: "Revelation Dance",
    num: 686,
    type: "Normal",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Special",
    desc: "The user does a dance that embodies it's typing.\nThis move changes type based on the user's primary\ntyping. This has a 50% chance to boost Sp. Atk by 1.",
    shortDesc: "The user does a dance that embodies it's typing.\nThis move changes type based on the user's primary\ntyping. This has a 50% chance to boost Sp. Atk by 1.",
    pp: 10
  },
  coreenforcer: {
    name: "Core Enforcer",
    num: 687,
    type: "Dragon",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "Zygarde unleashes it's inner power on the foe.\nThis ignores the effects of abilities if it moves last.\nLowers your Defensive stats by 1 and deals 30% recoil.",
    shortDesc: "Zygarde unleashes it's inner power on the foe.\nThis ignores the effects of abilities if it moves last.\nLowers your Defensive stats by 1 and deals 30% recoil.",
    pp: 5
  },
  tropkick: {
    name: "Trop Kick",
    num: 688,
    type: "Grass",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 70,
    accuracy: 100,
    category: "Physical",
    desc: "The user lands an intense jungle kick on the target.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    shortDesc: "The user lands an intense jungle kick on the target.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    pp: 10
  },
  instruct: {
    name: "Instruct",
    num: 689,
    type: "Psychic",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "Oranguru instructs the target to use the move they\nmost recently used again. This takes up your turn, not\ntheirs. Z-Effect gives +1 All Stats.",
    shortDesc: "Oranguru instructs the target to use the move they\nmost recently used again. This takes up your turn, not\ntheirs. Z-Effect gives +1 All Stats.",
    pp: 15
  },
  beakblast: {
    name: "Beak Blast",
    num: 690,
    type: "Flying",
    flags: {
      defrost: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: true,
    category: "Physical",
    desc: "The user heats up its beak and at the end of the turn,\nunleashes a burning blast, burning those who touch it.\nThis leaves the target with a burn 100% of the time.",
    shortDesc: "The user heats up its beak and at the end of the turn,\nunleashes a burning blast, burning those who touch it.\nThis leaves the target with a burn 100% of the time.",
    pp: 10
  },
  drakonicwave: {
    name: "Drakonic Wave",
    num: 691,
    type: "Dragon",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    basePower: 125,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a destructive soundwave or blast\nimbued with dragon energy. This hits all foes.",
    shortDesc: "The user unleashes a destructive soundwave or blast\nimbued with dragon energy. This hits all foes.",
    pp: 5
  },
  dragonhammer: {
    name: "Dragon Hammer",
    num: 692,
    type: "Dragon",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 110,
    accuracy: 100,
    category: "Physical",
    desc: "The user hammers down on the opponent. This has\n20% recoil and a 50% chance to drop the foe's\nDefense by 1. Contact.",
    shortDesc: "The user hammers down on the opponent. This has\n20% recoil and a 50% chance to drop the foe's\nDefense by 1. Contact.",
    pp: 10
  },
  nightburst: {
    name: "Night Burst",
    num: 693,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 50,
    accuracy: true,
    category: "Special",
    desc: "The user quickly releases a weak shock wave of\ndark energy. This has +1 priority, and can't miss.",
    shortDesc: "The user quickly releases a weak shock wave of\ndark energy. This has +1 priority, and can't miss.",
    pp: 15
  },
  auroraveil: {
    name: "Aurora Veil",
    num: 694,
    type: "Ice",
    flags: {
      snatch: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "This move reduces damage from physical and\nspecial moves for five turns. This can be used only\nin a hailstorm. Z-Effect heals user fully.",
    shortDesc: "This move reduces damage from physical and\nspecial moves for five turns. This can be used only\nin a hailstorm. Z-Effect heals user fully.",
    pp: 20
  },
  sinisterarrowraid: {
    name: "Sinister Arrow Raid",
    num: 695,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      contact: 1
    },
    basePower: 250,
    accuracy: true,
    category: "Physical",
    desc: "The user, Decidueye, creates countless arrows\nusing its Z-Power and shoots the target with\nfull force.",
    shortDesc: "The user, Decidueye, creates countless arrows\nusing its Z-Power and shoots the target with\nfull force.",
    pp: 1
  },
  maliciousmoonsault: {
    name: "Malicious Moonsault",
    num: 696,
    type: "Dark",
    flags: {
      contact: 1
    },
    basePower: 250,
    accuracy: true,
    category: "Physical",
    desc: "The user, Incineroar, strengthens its body using\nits Z-Power and crashes into the target with\nfull force.",
    shortDesc: "The user, Incineroar, strengthens its body using\nits Z-Power and crashes into the target with\nfull force.",
    pp: 1
  },
  oceanicoperetta: {
    name: "Oceanic Operetta",
    num: 697,
    type: "Water",
    flags: {
      punch: 1
    },
    basePower: 250,
    accuracy: true,
    category: "Special",
    desc: "The user, Primarina, summons a massive amount of \nwater using its Z-Power and attacks the target with \nfull force.",
    shortDesc: "The user, Primarina, summons a massive amount of \nwater using its Z-Power and attacks the target with \nfull force.",
    pp: 1
  },
  guardianofalola: {
    name: "Guardian of Alola",
    num: 698,
    type: "Fairy",
    flags: {},
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "The user, the Land Spirit Pokemon, obtains Alola’s\nenergy using its Z-Power and attacks the target with\nfull force. This reduces the target’s HP greatly.",
    shortDesc: "The user, the Land Spirit Pokemon, obtains Alola’s\nenergy using its Z-Power and attacks the target with\nfull force. This reduces the target’s HP greatly.",
    pp: 1
  },
  soulstealing7starstrike: {
    name: "Soul-Stealing 7-Star Strike",
    num: 699,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      contact: 1
    },
    basePower: 200,
    accuracy: true,
    category: "Physical",
    desc: "After obtaining Z-Power, the user, Marshadow,\npunches and kicks the target consecutively\nwith full force. This heals 50% of damage dealt.",
    shortDesc: "After obtaining Z-Power, the user, Marshadow,\npunches and kicks the target consecutively\nwith full force. This heals 50% of damage dealt.",
    pp: 1
  },
  stokedsparksurfer: {
    name: "Stoked Sparksurfer",
    num: 700,
    type: "Electric",
    flags: {
      contact: 1
    },
    basePower: 250,
    accuracy: true,
    category: "Special",
    desc: "After obtaining Z-Power, the user, Alolan Raichu,\nattacks the target with full force. This move will\nALWAYS crit and ALWAYS paralyze the foe.",
    shortDesc: "After obtaining Z-Power, the user, Alolan Raichu,\nattacks the target with full force. This move will\nALWAYS crit and ALWAYS paralyze the foe.",
    pp: 1
  },
  pulverizingpancake: {
    name: "Pulverizing Pancake",
    num: 701,
    type: "Normal",
    flags: {
      contact: 1
    },
    basePower: 250,
    accuracy: true,
    category: "Physical",
    desc: "Snorlax moves its enormous body energetically,\nslamming onto the target with full force. Contact. \nThis ALWAYS leaves the target with Paralysis.",
    shortDesc: "Snorlax moves its enormous body energetically,\nslamming onto the target with full force. Contact. \nThis ALWAYS leaves the target with Paralysis.",
    pp: 1
  },
  extremeevoboost: {
    name: "Extreme Evoboost",
    num: 702,
    type: "Normal",
    flags: {},
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "After obtaining Z-Power, the user, Eevee, gets\nenergy from its evolved friends and boosts its\nstats sharply.",
    shortDesc: "After obtaining Z-Power, the user, Eevee, gets\nenergy from its evolved friends and boosts its\nstats sharply.",
    pp: 1
  },
  genesissupernova: {
    name: "Genesis Supernova",
    num: 703,
    type: "Psychic",
    flags: {},
    basePower: 250,
    accuracy: true,
    category: "Special",
    desc: "Mew unleashes an immense blast of ancient power.\nThis ALWAYS crits, is 250 BP AND\nwill give Mew +1 all stats BEFORE attacking.",
    shortDesc: "Mew unleashes an immense blast of ancient power.\nThis ALWAYS crits, is 250 BP AND\nwill give Mew +1 all stats BEFORE attacking.",
    pp: 1
  },
  shelltrap: {
    name: "Shell Trap",
    num: 704,
    type: "Fire",
    flags: {
      defrost: 1,
      protect: 1
    },
    basePower: 200,
    accuracy: 100,
    category: "Special",
    desc: "The user sets a shell trap. If the user is hit by a\nphysical move, the trap will explode at the end of the\nturn, burning the foes and inflicting massive damage.",
    shortDesc: "The user sets a shell trap. If the user is hit by a\nphysical move, the trap will explode at the end of the\nturn, burning the foes and inflicting massive damage.",
    pp: 5
  },
  fleurcannon: {
    name: "Fleur Cannon",
    num: 705,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a strong beam fueled by fairy\nenergy. This drops the user's Sp. Atk by 2 after use.",
    shortDesc: "The user unleashes a strong beam fueled by fairy\nenergy. This drops the user's Sp. Atk by 2 after use.",
    pp: 5
  },
  psychicfangs: {
    name: "Psychic Fangs",
    num: 706,
    type: "Psychic",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user bites the target with fangs imbued with\npsychic energy. This breaks the effects of Reflect\nand Light Screen. Contact.",
    shortDesc: "The user bites the target with fangs imbued with\npsychic energy. This breaks the effects of Reflect\nand Light Screen. Contact.",
    pp: 15
  },
  stompingtantrum: {
    name: "Stomping Tantrum",
    num: 707,
    type: "Ground",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 75,
    accuracy: true,
    category: "Physical",
    desc: "Driven by frustration, the user stomps the ground\naround itself. If the user’s previous move has\nfailed or missed, this damage doubles. Can't miss.",
    shortDesc: "Driven by frustration, the user stomps the ground\naround itself. If the user’s previous move has\nfailed or missed, this damage doubles. Can't miss.",
    pp: 15
  },
  shadowbone: {
    name: "Shadow Bone",
    num: 708,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 90,
    accuracy: 100,
    category: "Physical",
    desc: "The user attacks by beating the target with a bone\nimbued with spirits. This ALWAYS drops\ndefense, ALWAYS flinches and has +4 Priority.",
    shortDesc: "The user attacks by beating the target with a bone\nimbued with spirits. This ALWAYS drops\ndefense, ALWAYS flinches and has +4 Priority.",
    pp: 1
  },
  accelerock: {
    name: "Accelerock",
    num: 709,
    type: "Rock",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 45,
    accuracy: true,
    category: "Physical",
    desc: "The user smashes into the target at high speed with\nit's rocky body. This has +1 priority, and can't\nmiss. Contact.",
    shortDesc: "The user smashes into the target at high speed with\nit's rocky body. This has +1 priority, and can't\nmiss. Contact.",
    pp: 20
  },
  liquidation: {
    name: "Liquidation",
    num: 710,
    type: "Water",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 100,
    category: "Physical",
    desc: "The user pummels the target using a full-force blast\nof water. This lowers Defense 25% of the time.\nContact.",
    shortDesc: "The user pummels the target using a full-force blast\nof water. This lowers Defense 25% of the time.\nContact.",
    pp: 15
  },
  radiantoutburst: {
    name: "Radiant Outburst",
    num: 711,
    type: "Fairy",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    basePower: 180,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashes a destructive, yet beautiful blast\nof colorful light and energy. This drops the user's\nSp. Atk stat by 4 (or 2/3) after use, however.",
    shortDesc: "The user unleashes a destructive, yet beautiful blast\nof colorful light and energy. This drops the user's\nSp. Atk stat by 4 (or 2/3) after use, however.",
    pp: 3
  },
  spectralthief: {
    name: "Spectral Thief",
    num: 712,
    type: "Ghost",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1
    },
    basePower: 95,
    accuracy: true,
    category: "Physical",
    desc: "The user hides in the shadows, and strikes. This\nsteals any stat boosts the target has, then attacks.\nIgnores Protect and Substitute. Can't miss. Contact.",
    shortDesc: "The user hides in the shadows, and strikes. This\nsteals any stat boosts the target has, then attacks.\nIgnores Protect and Substitute. Can't miss. Contact.",
    pp: 5
  },
  solarstrike: {
    name: "Solar Strike",
    num: 713,
    type: "Fire",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "The user flies up and descends onto the target with\na column of flames. ALWAYS crits, ALWAYS burns, and\ndeals 30% recoil to the user. Contact.",
    shortDesc: "The user flies up and descends onto the target with\na column of flames. ALWAYS crits, ALWAYS burns, and\ndeals 30% recoil to the user. Contact.",
    pp: 3
  },
  spectralbeam: {
    name: "Spectral Beam",
    num: 714,
    type: "Ghost",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user blasts the target with a devastating,\nshadowy beam. This move ignores the target's Ability.\nThis lowers the user's Sp. Atk by 2 after use.",
    shortDesc: "The user blasts the target with a devastating,\nshadowy beam. This move ignores the target's Ability.\nThis lowers the user's Sp. Atk by 2 after use.",
    pp: 5
  },
  tearfullook: {
    name: "Tearful Look",
    num: 715,
    type: "Normal",
    flags: {
      mirror: 1,
      reflectable: 1
    },
    basePower: 0,
    accuracy: true,
    category: "Status",
    desc: "The user gets teary eyed to make the target lose\nits combative spirit. This lowers both offensive stats\nby 1. Z-Effect +3 Accuracy. BYPASSES PROTECT.",
    shortDesc: "The user gets teary eyed to make the target lose\nits combative spirit. This lowers both offensive stats\nby 1. Z-Effect +3 Accuracy. BYPASSES PROTECT.",
    pp: 10
  },
  zingzap: {
    name: "Zing Zap",
    num: 716,
    type: "Electric",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 85,
    accuracy: 90,
    category: "Physical",
    desc: "The user swiftly and nimbly strikes the target.\nThis has a 30% chance to flinch, and ALWAYS boosts\nthe user's Speed by 1 after use. Contact.",
    shortDesc: "The user swiftly and nimbly strikes the target.\nThis has a 30% chance to flinch, and ALWAYS boosts\nthe user's Speed by 1 after use. Contact.",
    pp: 10
  },
  cosmicchaos: {
    name: "Cosmic Chaos",
    num: 717,
    type: "Psychic",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 1,
    accuracy: true,
    category: "Special",
    desc: "The user staggers the foe with cosmic energy\nThis attack will ALWAYS flinch the foe, and go first.\nThis halves the foe's current HP stat.",
    shortDesc: "The user staggers the foe with cosmic energy\nThis attack will ALWAYS flinch the foe, and go first.\nThis halves the foe's current HP stat.",
    pp: 1
  },
  multiattack: {
    name: "Multi-Attack",
    num: 718,
    type: "Normal",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 120,
    accuracy: 100,
    category: "Physical",
    desc: "The user slashes at the foe, cloaked in energy.\nThis move's type changes with the user's held Memory.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    shortDesc: "The user slashes at the foe, cloaked in energy.\nThis move's type changes with the user's held Memory.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    pp: 5
  },
  "10000000voltthunderbolt": {
    name: "10,000,000 Volt Thunderbolt",
    num: 719,
    type: "Electric",
    flags: {},
    basePower: 250,
    accuracy: true,
    category: "Special",
    desc: "The user, Pikachu wearing a cap, powers up a jolt of\nelectricity using its Z-Power and unleashes it.\nALWAYS CRITS AND ALWAYS PARAS.",
    shortDesc: "The user, Pikachu wearing a cap, powers up a jolt of\nelectricity using its Z-Power and unleashes it.\nALWAYS CRITS AND ALWAYS PARAS.",
    pp: 1
  },
  mindblown: {
    name: "Mind Blown",
    num: 720,
    type: "Fire",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "Blacephalon attacks everything around it by blowing\nup it's own head for amusement. This will ALWAYS\nflinch the opponent, in exchange for losing 50% HP.",
    shortDesc: "Blacephalon attacks everything around it by blowing\nup it's own head for amusement. This will ALWAYS\nflinch the opponent, in exchange for losing 50% HP.",
    pp: 2
  },
  plasmashot: {
    name: "Plasma Shot",
    num: 721,
    type: "Electric",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    basePower: 130,
    accuracy: 70,
    category: "Special",
    desc: "The user fires an intense blast of superheated plasma.\nThis ALWAYS burns the target, and turns Normal type\nmoves to Electric type moves for the rest of the turn.",
    shortDesc: "The user fires an intense blast of superheated plasma.\nThis ALWAYS burns the target, and turns Normal type\nmoves to Electric type moves for the rest of the turn.",
    pp: 5
  },
  twilightcannon: {
    name: "Twilight Cannon",
    num: 722,
    type: "Dark",
    flags: {
      mirror: 1,
      protect: 1
    },
    basePower: 150,
    accuracy: 100,
    category: "Special",
    desc: "The user unleashed a wicked beam of dark energy. This\nis Physical or Special, based on the user's higher\nstat, & drops offensive stats by 2. IGNORES ABILITIES.",
    shortDesc: "The user unleashed a wicked beam of dark energy. This\nis Physical or Special, based on the user's higher\nstat, & drops offensive stats by 2. IGNORES ABILITIES.",
    pp: 5
  },
  lightthatburnsthesky: {
    name: "Light That Burns the Sky",
    num: 723,
    type: "Psychic",
    flags: {},
    basePower: 220,
    accuracy: true,
    category: "Special",
    desc: "This attack inflicts Attack or Sp. Atk damage,\nwhichever stat is higher for the user \nThis move ignores the target’s Ability.",
    shortDesc: "This attack inflicts Attack or Sp. Atk damage,\nwhichever stat is higher for the user \nThis move ignores the target’s Ability.",
    pp: 1
  },
  searingsunrazesmash: {
    name: "Searing Sunraze Smash",
    num: 724,
    type: "Steel",
    flags: {
      contact: 1
    },
    basePower: 220,
    accuracy: true,
    category: "Physical",
    desc: "After obtaining Z-Power, the user, Solgaleo,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    shortDesc: "After obtaining Z-Power, the user, Solgaleo,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    pp: 1
  },
  menacingmoonrazemaelstrom: {
    name: "Menacing Moonraze Maelstrom",
    num: 725,
    type: "Ghost",
    flags: {
      bypasssub: 1
    },
    basePower: 220,
    accuracy: true,
    category: "Special",
    desc: "After obtaining Z-Power, the user, Lunala,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    shortDesc: "After obtaining Z-Power, the user, Lunala,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    pp: 1
  },
  letssnuggleforever: {
    name: "Let’s Snuggle Forever",
    num: 726,
    type: "Fairy",
    flags: {
      contact: 1
    },
    basePower: 250,
    accuracy: true,
    category: "Physical",
    desc: "After obtaining Z-Power, the user, Mimikyu,\npunches the target with full force.",
    shortDesc: "After obtaining Z-Power, the user, Mimikyu,\npunches the target with full force.",
    pp: 1
  },
  splinteredstormshards: {
    name: "Splintered Stormshards",
    num: 727,
    type: "Rock",
    flags: {},
    basePower: 190,
    accuracy: true,
    category: "Physical",
    desc: "After obtaining Z-Power, the user, Lycanroc,\nattacks the target with full force. This move negates\nthe effect on the battlefield.",
    shortDesc: "After obtaining Z-Power, the user, Lycanroc,\nattacks the target with full force. This move negates\nthe effect on the battlefield.",
    pp: 1
  },
  clangoroussoulblaze: {
    name: "Clangorous Soulblaze",
    num: 728,
    type: "Dragon",
    flags: {
      bypasssub: 1,
      punch: 1
    },
    basePower: 190,
    accuracy: true,
    category: "Special",
    desc: "After obtaining Z-Power, the user, Kommo-o,\nattacks the opposing Pokemon with full force. This\ngives +1 all stats in exchange for 30% recoil.",
    shortDesc: "After obtaining Z-Power, the user, Kommo-o,\nattacks the opposing Pokemon with full force. This\ngives +1 all stats in exchange for 30% recoil.",
    pp: 1
  }
};
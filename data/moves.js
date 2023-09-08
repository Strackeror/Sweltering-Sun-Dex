exports.BattleMovedex = {
  pummel: {
    exists: true,
    num: 1,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Pummel",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Fighting",
    target: "normal",
    desc: "The user pummels the foe repeatedly.\nThis hits 2-5 times in a row. Contact.",
    shortDesc: "The user pummels the foe repeatedly.\nThis hits 2-5 times in a row. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: [
      2,
      5
    ],
    zMove: {
      basePower: 140
    },
    id: "pummel",
    fullname: "move: Pummel",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  karatechop: {
    exists: true,
    basePower: 60,
    pp: 20,
    desc: "The target is attacked with a swift chop.\nThis has +1 (12%) critical hit rate. Contact.",
    shortDesc: "The target is attacked with a swift chop.\nThis has +1 (12%) critical hit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    isNonstandard: null,
    num: 2,
    accuracy: 100,
    category: "Physical",
    name: "Karate Chop",
    priority: 0,
    critRatio: 2,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "karatechop",
    fullname: "move: Karate Chop",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    }
  },
  doubleslap: {
    exists: true,
    accuracy: 100,
    basePower: 30,
    pp: 15,
    desc: "The target is slapped twice back and forth. This hits\ntwice. Each hit has a 15% flinch chance. Contact.",
    shortDesc: "The target is slapped twice back and forth. This hits\ntwice. Each hit has a 15% flinch chance. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 2,
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 15,
        volatileStatus: "flinch"
      }
    ],
    isNonstandard: null,
    num: 3,
    category: "Physical",
    name: "Double Slap",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "doubleslap",
    fullname: "move: Double Slap",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  cometpunch: {
    exists: true,
    accuracy: 100,
    basePower: 25,
    type: "Fairy",
    desc: "The target is hit with a flurry of punches imbued\nwith celestial fairy energy.\nThey hit 2-5 times in a row. Contact.",
    shortDesc: "The target is hit with a flurry of punches imbued\nwith celestial fairy energy.\nThey hit 2-5 times in a row. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    zMove: {
      basePower: 140
    },
    isNonstandard: null,
    num: 4,
    category: "Physical",
    name: "Comet Punch",
    pp: 15,
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    maxMove: {
      basePower: 100
    },
    id: "cometpunch",
    fullname: "move: Comet Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  seismicfist: {
    exists: true,
    num: 5,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Seismic Fist",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Ground",
    target: "normal",
    desc: "A ground-breaking punch is thrown at the target.\nHas a 30% chance to drop the foe's Defense. Contact.",
    shortDesc: "A ground-breaking punch is thrown at the target.\nHas a 30% chance to drop the foe's Defense. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    id: "seismicfist",
    fullname: "move: Seismic Fist",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  payday: {
    exists: true,
    pp: 5,
    critRatio: 3,
    desc: "Persian flings coins at the foe. This hits 3 times,\nwith EACH hit having a 50% crit rate.\nThe Z-Effect of this gives Persian +1 to all stats.",
    shortDesc: "Persian flings coins at the foe. This hits 3 times,\nwith EACH hit having a 50% crit rate.\nThe Z-Effect of this gives Persian +1 to all stats.",
    flags: {
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 180
    },
    num: 6,
    accuracy: 100,
    basePower: 40,
    category: "Physical",
    name: "Pay Day",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "payday",
    fullname: "move: Pay Day",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  firepunch: {
    exists: true,
    basePower: 80,
    desc: "The target is punched with a fiery fist. This has a\n10% chance to burn the foe. Contact.",
    shortDesc: "The target is punched with a fiery fist. This has a\n10% chance to burn the foe. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 7,
    accuracy: 100,
    category: "Physical",
    name: "Fire Punch",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "firepunch",
    fullname: "move: Fire Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  icepunch: {
    exists: true,
    basePower: 80,
    desc: "The target is punched with an icy fist. This has a\n10% chance to freeze the foe. Contact.",
    shortDesc: "The target is punched with an icy fist. This has a\n10% chance to freeze the foe. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 8,
    accuracy: 100,
    category: "Physical",
    name: "Ice Punch",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    id: "icepunch",
    fullname: "move: Ice Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  thunderpunch: {
    exists: true,
    basePower: 80,
    desc: "The target is punched with an electrified fist.This\nhas a 10% chance to paralyze the foe. Contact.",
    shortDesc: "The target is punched with an electrified fist.This\nhas a 10% chance to paralyze the foe. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 9,
    accuracy: 100,
    category: "Physical",
    name: "Thunder Punch",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "thunderpunch",
    fullname: "move: Thunder Punch",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  metalclaw: {
    exists: true,
    num: 10,
    accuracy: 100,
    basePower: 60,
    pp: 20,
    critRatio: 2,
    desc: "The target is raked with a steel-hard claw,\nblade, scythe, talon, or the like.\nThis has a 12%, or +1 critical hit rate. Contact.",
    shortDesc: "The target is raked with a steel-hard claw,\nblade, scythe, talon, or the like.\nThis has a 12%, or +1 critical hit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    category: "Physical",
    name: "Metal Claw",
    priority: 0,
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Steel",
    id: "metalclaw",
    fullname: "move: Metal Claw",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: [
      {
        chance: 10,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  vicegrip: {
    exists: true,
    num: 11,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Vice Grip",
    pp: 20,
    priority: 0,
    critRatio: 1,
    type: "Steel",
    target: "normal",
    desc: "The target is gripped firmly from both sides, trapping\nthem on the field for 6 turns & dealing 12% of their\nmax HP at the end of each turn. Contact.",
    shortDesc: "The target is gripped firmly from both sides, trapping\nthem on the field for 6 turns & dealing 12% of their\nmax HP at the end of each turn. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    id: "vicegrip",
    fullname: "move: Vice Grip",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  guillotine: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 1,
    desc: "The user slices the target in two, always fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The user slices the target in two, always fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 255
    },
    noPPBoosts: true,
    num: 12,
    category: "Physical",
    name: "Guillotine",
    priority: 0,
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "guillotine",
    fullname: "move: Guillotine",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  razorwind: {
    exists: true,
    basePower: 120,
    pp: 5,
    critRatio: 7,
    type: "Flying",
    desc: "A 2 turn attack where the user fires vicious blades\nof wind. This attack always results in a critical\nhit, and flinches 30% of the time. Ignores protect.",
    shortDesc: "A 2 turn attack where the user fires vicious blades\nof wind. This attack always results in a critical\nhit, and flinches 30% of the time. Ignores protect.",
    flags: {
      charge: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 220
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    isNonstandard: null,
    num: 13,
    accuracy: 100,
    category: "Special",
    name: "Razor Wind",
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    id: "razorwind",
    fullname: "move: Razor Wind",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  swordsdance: {
    exists: true,
    pp: 1,
    desc: "A frenetic dance to uplift the fighting spirit.\nRaises user's Attack by 2. Z-Effect +2 crit rate.",
    shortDesc: "A frenetic dance to uplift the fighting spirit.\nRaises user's Attack by 2. Z-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 2
        }
      }
    ],
    noPPBoosts: true,
    num: 14,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Swords Dance",
    priority: 0,
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "swordsdance",
    fullname: "move: Swords Dance",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  creepingstrike: {
    exists: true,
    num: 15,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Creeping Strike",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Bug",
    target: "normal",
    desc: "The user quickly strikes the foe.\nThis has +1 Priority, and can't miss.",
    shortDesc: "The user quickly strikes the foe.\nThis has +1 Priority, and can't miss.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "creepingstrike",
    fullname: "move: Creeping Strike",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  gust: {
    exists: true,
    accuracy: true,
    basePower: 45,
    pp: 20,
    priority: 1,
    target: "normal",
    desc: "A weak gust of wind is whipped up and launched\nquickly at the foe. +1 Priority. Can't miss.",
    shortDesc: "A weak gust of wind is whipped up and launched\nquickly at the foe. +1 Priority. Can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    num: 16,
    category: "Special",
    name: "Gust",
    secondary: null,
    type: "Flying",
    id: "gust",
    fullname: "move: Gust",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  dualwingbeat: {
    exists: true,
    num: 17,
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Dual Wingbeat",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Flying",
    target: "normal",
    desc: "The user strikes the foe twice with it's wings. Each\nstrike has a 15% flinch chance. Contact.",
    shortDesc: "The user strikes the foe twice with it's wings. Each\nstrike has a 15% flinch chance. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 2,
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 15,
        volatileStatus: "flinch"
      }
    ],
    id: "dualwingbeat",
    fullname: "move: Dual Wingbeat",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  whirlwind: {
    exists: true,
    pp: 3,
    priority: 4,
    type: "Flying",
    desc: "The target is blown away, and a random Pokemon is\ndragged out onto the field in their place.\nThis has +4 priority. Z-Effect +3 Speed.",
    shortDesc: "The target is blown away, and a random Pokemon is\ndragged out onto the field in their place.\nThis has +4 priority. Z-Effect +3 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    num: 18,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Whirlwind",
    forceSwitch: true,
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "whirlwind",
    fullname: "move: Whirlwind",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  fly: {
    exists: true,
    accuracy: 100,
    basePower: 80,
    target: "normal",
    desc: "The user soars, then strikes the foe on the next turn.\nAfter attacking, the user gains +1 Accuracy. Contact.\nBypasses Protect.",
    shortDesc: "The user soars, then strikes the foe on the next turn.\nAfter attacking, the user gains +1 Accuracy. Contact.\nBypasses Protect.",
    flags: {
      charge: 1,
      contact: 1,
      gravity: 1,
      mirror: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 19,
    category: "Physical",
    name: "Fly",
    pp: 15,
    priority: 0,
    condition: {
      duration: 2
    },
    secondary: null,
    type: "Flying",
    id: "fly",
    fullname: "move: Fly",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  bind: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    desc: "Things such as long bodies or tentacles are used to\nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    shortDesc: "Things such as long bodies or tentacles are used to\nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    num: 20,
    category: "Physical",
    name: "Bind",
    pp: 20,
    priority: 0,
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "bind",
    fullname: "move: Bind",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  whiplash: {
    exists: true,
    num: 21,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Whiplash",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "normal",
    desc: "The foe is slammed with a long tail or appendage.\nThis drops Defense by 1 after each hit. Contact.",
    shortDesc: "The foe is slammed with a long tail or appendage.\nThis drops Defense by 1 after each hit. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    id: "whiplash",
    fullname: "move: Whiplash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  vinelashes: {
    exists: true,
    num: 22,
    accuracy: 100,
    basePower: 35,
    category: "Physical",
    name: "Vine Lashes",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The foe is lashed twice with whiplike vines.\nThis ALWAYS drops Defense by 1 after each hit.  Contact.",
    shortDesc: "The foe is lashed twice with whiplike vines.\nThis ALWAYS drops Defense by 1 after each hit.  Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 2,
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    id: "vinelashes",
    fullname: "move: Vine Lashes",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  stomp: {
    exists: true,
    basePower: 70,
    desc: "The target is stomped on. Has a 30% chance to flinch\n the foe. Contact.",
    shortDesc: "The target is stomped on. Has a 30% chance to flinch\n the foe. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 23,
    accuracy: 100,
    category: "Physical",
    name: "Stomp",
    pp: 20,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    id: "stomp",
    fullname: "move: Stomp",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  doublekick: {
    exists: true,
    basePower: 35,
    pp: 15,
    desc: "The target is kicked twice in succession using both\nfeet. Hits twice, each hit has a 15% flinch chance.\nContact.",
    shortDesc: "The target is kicked twice in succession using both\nfeet. Hits twice, each hit has a 15% flinch chance.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 15,
        volatileStatus: "flinch"
      }
    ],
    num: 24,
    accuracy: 100,
    category: "Physical",
    name: "Double Kick",
    priority: 0,
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Fighting",
    maxMove: {
      basePower: 80
    },
    id: "doublekick",
    fullname: "move: Double Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  megatonkick: {
    exists: true,
    num: 25,
    accuracy: 90,
    basePower: 120,
    category: "Physical",
    name: "Megaton Kick",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Ground",
    target: "normal",
    desc: "The user launches a kick towards the ground with\nmassive force. This drops Defense 30% of the time.\nContact.",
    shortDesc: "The user launches a kick towards the ground with\nmassive force. This drops Defense 30% of the time.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    id: "megatonkick",
    fullname: "move: Megaton Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  highjumpkick: {
    exists: true,
    num: 26,
    desc: "The user jumps up high, then strikes with a kick.\nIf this misses, the user loses 50% of it's max HP.\nContact.",
    shortDesc: "The user jumps up high, then strikes with a kick.\nIf this misses, the user loses 50% of it's max HP.\nContact.",
    flags: {
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    accuracy: 90,
    basePower: 130,
    category: "Physical",
    name: "High Jump Kick",
    pp: 10,
    priority: 0,
    hasCrashDamage: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "highjumpkick",
    fullname: "move: High Jump Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  rollingkick: {
    exists: true,
    accuracy: 100,
    desc: "The user kicks the foe while quickly spinning.\nThis ALWAYS boosts the user's Speed by 1. Contact.",
    shortDesc: "The user kicks the foe while quickly spinning.\nThis ALWAYS boosts the user's Speed by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 27,
    basePower: 60,
    category: "Physical",
    name: "Rolling Kick",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Fighting",
    id: "rollingkick",
    fullname: "move: Rolling Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    },
    zMove: {
      basePower: 120
    }
  },
  sandattack: {
    exists: true,
    basePower: 10,
    category: "Special",
    priority: 4,
    desc: "Doesn't exist,",
    shortDesc: "Doesn't exist,",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    num: 28,
    accuracy: 100,
    name: "Sand Attack",
    pp: 15,
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    id: "sandattack",
    fullname: "move: Sand Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  headbutt: {
    exists: true,
    basePower: 75,
    desc: "The user headbutts the target. Has a 30% chance to\nflinch. Contact.",
    shortDesc: "The user headbutts the target. Has a 30% chance to\nflinch. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 29,
    accuracy: 100,
    category: "Physical",
    name: "Headbutt",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    id: "headbutt",
    fullname: "move: Headbutt",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  peck: {
    exists: true,
    num: 30,
    basePower: 50,
    pp: 25,
    target: "normal",
    desc: "The target is jabbed with a beak, horn, or the like.\n20% chance to drop the foe's Defense. Contact.",
    shortDesc: "The target is jabbed with a beak, horn, or the like.\n20% chance to drop the foe's Defense. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    secondaries: [
      {
        chance: 20,
        boosts: {
          def: -1
        }
      }
    ],
    accuracy: 100,
    category: "Physical",
    name: "Peck",
    priority: 0,
    secondary: null,
    type: "Flying",
    id: "peck",
    fullname: "move: Peck",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  spikecannon: {
    exists: true,
    num: 31,
    basePower: 25,
    type: "Steel",
    desc: "The user rapidly shoots steel-hard spikes at the foe.\nThis attack hits 2-5 times in succession.",
    shortDesc: "The user rapidly shoots steel-hard spikes at the foe.\nThis attack hits 2-5 times in succession.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    isNonstandard: null,
    accuracy: 100,
    category: "Physical",
    name: "Spike Cannon",
    pp: 15,
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    maxMove: {
      basePower: 120
    },
    id: "spikecannon",
    fullname: "move: Spike Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  horndrill: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 1,
    desc: "The user stabs the foe through their vitals, fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The user stabs the foe through their vitals, fainting it.\nThis attack NEVER misses, but can only be used once.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 255
    },
    noPPBoosts: true,
    num: 32,
    category: "Physical",
    name: "Horn Drill",
    priority: 0,
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "horndrill",
    fullname: "move: Horn Drill",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tackle: {
    exists: true,
    basePower: 55,
    desc: "A physical attack in which the user charges and\nslams into the target with its whole body. Contact.",
    shortDesc: "A physical attack in which the user charges and\nslams into the target with its whole body. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 33,
    accuracy: 100,
    category: "Physical",
    name: "Tackle",
    pp: 35,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "tackle",
    fullname: "move: Tackle",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  bodyslam: {
    exists: true,
    basePower: 90,
    desc: "The user drops onto the target with its full body\nweight. Paralyzes the target 30% of the time. Contact.",
    shortDesc: "The user drops onto the target with its full body\nweight. Paralyzes the target 30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 34,
    accuracy: 100,
    category: "Physical",
    name: "Body Slam",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Normal",
    id: "bodyslam",
    fullname: "move: Body Slam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  wrap: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    type: "Poison",
    desc: "A long body, vines, or the like are used to wrap and \nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    shortDesc: "A long body, vines, or the like are used to wrap and \nsqueeze the foe for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    num: 35,
    category: "Physical",
    name: "Wrap",
    pp: 20,
    priority: 0,
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    id: "wrap",
    fullname: "move: Wrap",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    }
  },
  takedown: {
    exists: true,
    accuracy: 100,
    basePower: 110,
    pp: 10,
    type: "Fighting",
    desc: "A reckless, full-body charge attack for slamming into\nthe target. User takes 20% recoil damage.\nThis has a 30% chance to drop Defense. Contact.",
    shortDesc: "A reckless, full-body charge attack for slamming into\nthe target. User takes 20% recoil damage.\nThis has a 30% chance to drop Defense. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      20,
      100
    ],
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 36,
    category: "Physical",
    name: "Take Down",
    priority: 0,
    secondary: null,
    target: "normal",
    id: "takedown",
    fullname: "move: Take Down",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  kerfuffle: {
    exists: true,
    num: 37,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Kerfuffle",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "randomNormal",
    desc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    shortDesc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    id: "kerfuffle",
    fullname: "move: Kerfuffle",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  doubleedge: {
    exists: true,
    basePower: 125,
    pp: 10,
    desc: "A reckless, life-risking tackle. User takes 25% of\ndamage dealt. Has a 50% chance to drop the foe's\nDefense stat by 1 after use. Contact.",
    shortDesc: "A reckless, life-risking tackle. User takes 25% of\ndamage dealt. Has a 50% chance to drop the foe's\nDefense stat by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    num: 38,
    accuracy: 100,
    category: "Physical",
    name: "Double-Edge",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "doubleedge",
    fullname: "move: Double-Edge",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  tailwag: {
    exists: true,
    num: 39,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tail Wag",
    pp: 30,
    priority: 4,
    critRatio: 1,
    type: "Normal",
    target: "allAdjacentFoes",
    desc: "The user wags its tail cutely, making opposing\nPokemon less wary, dropping their Defense stat by 1.\nThis has +4 priority. Z-Effect is +1 Attack.",
    shortDesc: "The user wags its tail cutely, making opposing\nPokemon less wary, dropping their Defense stat by 1.\nThis has +4 priority. Z-Effect is +1 Attack.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: -1
        }
      }
    ],
    id: "tailwag",
    fullname: "move: Tail Wag",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  barbbarrage: {
    exists: true,
    num: 40,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Barb Barrage",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user shoots 3 venomous barbs at the target.\nThis ALWAYS poisons the foe and hits 3 times.",
    shortDesc: "The user shoots 3 venomous barbs at the target.\nThis ALWAYS poisons the foe and hits 3 times.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      }
    ],
    id: "barbbarrage",
    fullname: "move: Barb Barrage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  poisondart: {
    exists: true,
    num: 41,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Poison Dart",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user rapidly shoots out a poisonous barb.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user rapidly shoots out a poisonous barb.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "poisondart",
    fullname: "move: Poison Dart",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    }
  },
  pinmissile: {
    exists: true,
    accuracy: 100,
    pp: 15,
    desc: "Sharp spikes are shot at the target in rapid\nsuccession. They hit two to five times in a row.",
    shortDesc: "Sharp spikes are shot at the target in rapid\nsuccession. They hit two to five times in a row.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    num: 42,
    basePower: 25,
    category: "Physical",
    name: "Pin Missile",
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    id: "pinmissile",
    fullname: "move: Pin Missile",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  leer: {
    exists: true,
    pp: 10,
    type: "Dark",
    desc: "The user gives opposing Pokemon an intimidating\nleer, lowering BOTH Defense & Sp. Def by 1.\nZ-Effect +2 Crit Rate.",
    shortDesc: "The user gives opposing Pokemon an intimidating\nleer, lowering BOTH Defense & Sp. Def by 1.\nZ-Effect +2 Crit Rate.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 43,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Leer",
    priority: 0,
    boosts: {
      def: -1
    },
    secondary: null,
    target: "allAdjacentFoes",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "leer",
    fullname: "move: Leer",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  jaggedfangs: {
    exists: true,
    num: 44,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Jagged Fangs",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Rock",
    target: "normal",
    desc: "The user bites the foe with jagged, hard fangs.\nThis has a 30% chance to drop the foe's Defense by 1.\nContact.",
    shortDesc: "The user bites the foe with jagged, hard fangs.\nThis has a 30% chance to drop the foe's Defense by 1.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    id: "jaggedfangs",
    fullname: "move: Jagged Fangs",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  growl: {
    exists: true,
    pp: 10,
    desc: "The user growls in an endearing way, making\nopposing Pokemon less wary. This lowers their\nAttack & Speed stats by 1. Z-Effect +2 Attack.",
    shortDesc: "The user growls in an endearing way, making\nopposing Pokemon less wary. This lowers their\nAttack & Speed stats by 1. Z-Effect +2 Attack.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    num: 45,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Growl",
    priority: 0,
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "growl",
    fullname: "move: Growl",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  roar: {
    exists: true,
    pp: 3,
    priority: 4,
    type: "Dark",
    desc: "The target is scared off, and a random Pokemon is\ndragged out. This has +4 priority. Z-Effect +2 Attack.",
    shortDesc: "The target is scared off, and a random Pokemon is\ndragged out. This has +4 priority. Z-Effect +2 Attack.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    num: 46,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Roar",
    forceSwitch: true,
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "roar",
    fullname: "move: Roar",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sing: {
    exists: true,
    accuracy: 80,
    pp: 2,
    desc: "A soothing lullaby is sung in a calming voice, putting\nthe target in a deep sleep that lasts 2 turns.\nZ-Effect +1 Speed.",
    shortDesc: "A soothing lullaby is sung in a calming voice, putting\nthe target in a deep sleep that lasts 2 turns.\nZ-Effect +1 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    num: 47,
    basePower: 0,
    category: "Status",
    name: "Sing",
    priority: 0,
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "sing",
    fullname: "move: Sing",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  supersonic: {
    exists: true,
    accuracy: 100,
    desc: "The user emits odd sound waves from it's body, which\nconfuse the target for 4 turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user emits odd sound waves from it's body, which\nconfuse the target for 4 turns. Z-Effect +2 Sp. Atk.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 48,
    basePower: 0,
    category: "Status",
    name: "Supersonic",
    pp: 20,
    priority: 0,
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "supersonic",
    fullname: "move: Supersonic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sonicboom: {
    exists: true,
    accuracy: 100,
    basePower: 1,
    desc: "The target is hit with a destructive shock wave that\nalways inflicts 20 HP damage.",
    shortDesc: "The target is hit with a destructive shock wave that\nalways inflicts 20 HP damage.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 125
    },
    isNonstandard: null,
    num: 49,
    damage: 20,
    category: "Special",
    name: "Sonic Boom",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "sonicboom",
    fullname: "move: Sonic Boom",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  disable: {
    exists: true,
    pp: 5,
    type: "Psychic",
    desc: "For five turns, this move prevents the target from\nusing the move it last used. Z-Effect +2 Sp. Atk.",
    shortDesc: "For five turns, this move prevents the target from\nusing the move it last used. Z-Effect +2 Sp. Atk.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 50,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Disable",
    priority: 0,
    volatileStatus: "disable",
    condition: {
      duration: 5,
      noCopy: true,
      onResidualOrder: 17,
      onBeforeMovePriority: 7
    },
    secondary: null,
    target: "normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "disable",
    fullname: "move: Disable",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  acidspray: {
    exists: true,
    num: 51,
    basePower: 50,
    pp: 10,
    target: "allAdjacentFoes",
    desc: "The user sprays highly corrosive acid at the target.\nThis ALWAYS drops the foe's Sp. Def by 4, or 2/3.",
    shortDesc: "The user sprays highly corrosive acid at the target.\nThis ALWAYS drops the foe's Sp. Def by 4, or 2/3.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -4
        }
      }
    ],
    accuracy: 100,
    category: "Special",
    name: "Acid Spray",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spd: -2
      }
    },
    type: "Poison",
    id: "acidspray",
    fullname: "move: Acid Spray",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    },
    zMove: {
      basePower: 100
    }
  },
  ignite: {
    exists: true,
    num: 52,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Ignite",
    pp: 25,
    priority: 1,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The user quickly ignites and shoots weak flames.\nThis move has +1 priority, and can't miss.",
    shortDesc: "The user quickly ignites and shoots weak flames.\nThis move has +1 priority, and can't miss.",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    id: "ignite",
    fullname: "move: Ignite",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  flamethrower: {
    exists: true,
    desc: "The target is scorched with an intense blast of fire.\nThis burns the target 10% of the time.",
    shortDesc: "The target is scorched with an intense blast of fire.\nThis burns the target 10% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    num: 53,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Flamethrower",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "flamethrower",
    fullname: "move: Flamethrower",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  mist: {
    exists: true,
    target: "normal",
    desc: "The user cloaks itself and its allies in a white mist\nthat prevents any of their stats from being lowered\nfor five turns. Z-Mist heals the user fully.",
    shortDesc: "The user cloaks itself and its allies in a white mist\nthat prevents any of their stats from being lowered\nfor five turns. Z-Mist heals the user fully.",
    num: 54,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mist",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "mist",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 4
    },
    secondary: null,
    type: "Ice",
    zMove: {
      effect: "heal"
    },
    id: "mist",
    fullname: "move: Mist",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  snipeshot: {
    exists: true,
    num: 55,
    accuracy: true,
    basePower: 50,
    category: "Special",
    name: "Snipe Shot",
    pp: 5,
    priority: 3,
    critRatio: 7,
    type: "Water",
    target: "normal",
    desc: "The user fires a highly concentrated jet of water.\nThis has +3 priority, & ALWAYS lands a critical hit.",
    shortDesc: "The user fires a highly concentrated jet of water.\nThis has +3 priority, & ALWAYS lands a critical hit.",
    flags: {
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 150
    },
    id: "snipeshot",
    fullname: "move: Snipe Shot",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  hydropump: {
    exists: true,
    accuracy: 90,
    basePower: 120,
    desc: "The target is blasted by a huge volume of water\nlaunched under great pressure.",
    shortDesc: "The target is blasted by a huge volume of water\nlaunched under great pressure.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    num: 56,
    category: "Special",
    name: "Hydro Pump",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Water",
    id: "hydropump",
    fullname: "move: Hydro Pump",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  surf: {
    exists: true,
    basePower: 95,
    pp: 10,
    desc: "The user attacks everything around it by swamping\nits surroundings with a giant wave.",
    shortDesc: "The user attacks everything around it by swamping\nits surroundings with a giant wave.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 57,
    accuracy: 100,
    category: "Special",
    name: "Surf",
    priority: 0,
    secondary: null,
    target: "allAdjacent",
    type: "Water",
    id: "surf",
    fullname: "move: Surf",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  icebeam: {
    exists: true,
    desc: "The target is struck with an icy-cold beam of energy.\nThis freezes the target 10% of the time.",
    shortDesc: "The target is struck with an icy-cold beam of energy.\nThis freezes the target 10% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 58,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Ice Beam",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    id: "icebeam",
    fullname: "move: Ice Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  blizzard: {
    exists: true,
    accuracy: 85,
    basePower: 120,
    desc: "A howling blizzard is summoned to strike opponents.\nThis freezes the opponents 10% of the time.",
    shortDesc: "A howling blizzard is summoned to strike opponents.\nThis freezes the opponents 10% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    num: 59,
    category: "Special",
    name: "Blizzard",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "allAdjacentFoes",
    type: "Ice",
    id: "blizzard",
    fullname: "move: Blizzard",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  influx: {
    exists: true,
    num: 60,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Influx",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "A quick psychic beam is rapidly shot at the target.\nThis has +1 priority, and can't miss.",
    shortDesc: "A quick psychic beam is rapidly shot at the target.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    id: "influx",
    fullname: "move: Influx",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  bubbleshot: {
    exists: true,
    num: 61,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Bubble Shot",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Water",
    target: "normal",
    desc: "The user quickly fires a jet of bubbles at the foe.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly fires a jet of bubbles at the foe.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    id: "bubbleshot",
    fullname: "move: Bubble Shot",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  aurorabeam: {
    exists: true,
    basePower: 70,
    pp: 10,
    desc: "The foe is hit with an icy, rainbow-colored beam.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The foe is hit with an icy, rainbow-colored beam.\nThis ALWAYS drops the foe's attacking stats by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 62,
    accuracy: 100,
    category: "Special",
    name: "Aurora Beam",
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Ice",
    id: "aurorabeam",
    fullname: "move: Aurora Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  hyperbeam: {
    exists: true,
    accuracy: 100,
    basePower: 160,
    desc: "The target is attacked with a powerful beam.\nDrops user's Sp. Atk by 2.",
    shortDesc: "The target is attacked with a powerful beam.\nDrops user's Sp. Atk by 2.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 220
    },
    num: 63,
    category: "Special",
    name: "Hyper Beam",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "hyperbeam",
    fullname: "move: Hyper Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  furypecks: {
    exists: true,
    num: 64,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Fury Pecks",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Flying",
    target: "normal",
    desc: "The target is jabbed rapidly with a pointed beak,\nhorn, or the like. This hits 2-5 times in succession.\nContact.",
    shortDesc: "The target is jabbed rapidly with a pointed beak,\nhorn, or the like. This hits 2-5 times in succession.\nContact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: [
      2,
      5
    ],
    zMove: {
      basePower: 140
    },
    id: "furypecks",
    fullname: "move: Fury Pecks",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  drillpeck: {
    exists: true,
    pp: 10,
    critRatio: 3,
    target: "normal",
    desc: "A corkscrewing attack with a sharp appendage acting as\na drill. This attack has a 50% (+2) crit rate.",
    shortDesc: "A corkscrewing attack with a sharp appendage acting as\na drill. This attack has a 50% (+2) crit rate.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 65,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Drill Peck",
    priority: 0,
    secondary: null,
    type: "Flying",
    id: "drillpeck",
    fullname: "move: Drill Peck",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  submission: {
    exists: true,
    accuracy: 100,
    basePower: 150,
    pp: 5,
    desc: "The user beats the target into hopeless submission.\nThis deals 25% recoil to the user, and drops the\nuser's Defensive stats by 1 after use. Contact.",
    shortDesc: "The user beats the target into hopeless submission.\nThis deals 25% recoil to the user, and drops the\nuser's Defensive stats by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    isNonstandard: null,
    num: 66,
    category: "Physical",
    name: "Submission",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "submission",
    fullname: "move: Submission",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  lowkick: {
    exists: true,
    basePower: 1,
    desc: "A powerful low kick that makes the target fall over.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS drops the foe's Speed by 1. Contact.",
    shortDesc: "A powerful low kick that makes the target fall over.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS drops the foe's Speed by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    num: 67,
    accuracy: 100,
    category: "Physical",
    name: "Low Kick",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    zMove: {
      basePower: 160
    },
    id: "lowkick",
    fullname: "move: Low Kick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  counter: {
    exists: true,
    basePower: 1,
    priority: -6,
    target: "normal",
    desc: "A retaliation move that counters any physical attack,\ninflicting double the damage taken. Contact.",
    shortDesc: "A retaliation move that counters any physical attack,\ninflicting double the damage taken. Contact.",
    flags: {
      contact: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 68,
    accuracy: 100,
    category: "Physical",
    name: "Counter",
    pp: 20,
    condition: {
      duration: 1,
      noCopy: true,
      onRedirectTargetPriority: -1
    },
    secondary: null,
    type: "Fighting",
    maxMove: {
      basePower: 75
    },
    id: "counter",
    fullname: "move: Counter",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  seismictoss: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "The target is thrown using the power of gravity.\nIt inflicts damage equal to the user’s level. Contact.\nThis ALWAYS gives the user +1 Accuracy after use.",
    shortDesc: "The target is thrown using the power of gravity.\nIt inflicts damage equal to the user’s level. Contact.\nThis ALWAYS gives the user +1 Accuracy after use.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 69,
    damage: "level",
    category: "Physical",
    name: "Seismic Toss",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    maxMove: {
      basePower: 75
    },
    id: "seismictoss",
    fullname: "move: Seismic Toss",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  strength: {
    exists: true,
    basePower: 120,
    pp: 5,
    desc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    shortDesc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 190
    },
    num: 70,
    accuracy: 100,
    category: "Physical",
    name: "Strength",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "strength",
    fullname: "move: Strength",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  siphon: {
    exists: true,
    num: 71,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Siphon",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Bug",
    target: "normal",
    desc: "The user siphons the foe's vital fluids or energy.\nThis heals the user by 100% of damage dealt.",
    shortDesc: "The user siphons the foe's vital fluids or energy.\nThis heals the user by 100% of damage dealt.",
    flags: {
      mirror: 1,
      protect: 1
    },
    drain: [
      100,
      100
    ],
    zMove: {
      basePower: 100
    },
    id: "siphon",
    fullname: "move: Siphon",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  megadrain: {
    exists: true,
    basePower: 60,
    desc: "A nutrient-draining attack. The user’s HP is restored\nby 75% of the damage taken by the target.",
    shortDesc: "A nutrient-draining attack. The user’s HP is restored\nby 75% of the damage taken by the target.",
    flags: {
      mirror: 1,
      protect: 1
    },
    drain: [
      3,
      4
    ],
    num: 72,
    accuracy: 100,
    category: "Special",
    name: "Mega Drain",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      basePower: 120
    },
    id: "megadrain",
    fullname: "move: Mega Drain",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  leechseed: {
    exists: true,
    accuracy: 100,
    desc: "A seed is planted on the target. It steals 12% HP\nfrom the target every turn. Z-Effect heals user fully.",
    shortDesc: "A seed is planted on the target. It steals 12% HP\nfrom the target every turn. Z-Effect heals user fully.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 73,
    basePower: 0,
    category: "Status",
    name: "Leech Seed",
    pp: 10,
    priority: 0,
    volatileStatus: "leechseed",
    condition: {
      onResidualOrder: 8
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "leechseed",
    fullname: "move: Leech Seed",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  growth: {
    exists: true,
    pp: 2,
    type: "Grass",
    desc: "The user’s body grows all at once, raising the\nAttack and Sp. Atk stats by one, or two in the Sun.\nZ-Effect heals user fully.",
    shortDesc: "The user’s body grows all at once, raising the\nAttack and Sp. Atk stats by one, or two in the Sun.\nZ-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spa: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 74,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Growth",
    priority: 0,
    boosts: {
      atk: 1,
      spa: 1
    },
    secondary: null,
    target: "self",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "growth",
    fullname: "move: Growth",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  razorleaf: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    pp: 20,
    desc: "Sharp-edged leaves are launched to slash at the\nfoes. This has a 12% (+1) crit rate.",
    shortDesc: "Sharp-edged leaves are launched to slash at the\nfoes. This has a 12% (+1) crit rate.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    num: 75,
    category: "Physical",
    name: "Razor Leaf",
    priority: 0,
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Grass",
    id: "razorleaf",
    fullname: "move: Razor Leaf",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  solarbeam: {
    exists: true,
    basePower: 90,
    critRatio: 7,
    desc: "In this two-turn attack, the user gathers light, then\nblasts a bundled beam on the next turn.This doesn't\ncharge in Sun. ALWAYS CRITS, ignores Protect.",
    shortDesc: "In this two-turn attack, the user gathers light, then\nblasts a bundled beam on the next turn.This doesn't\ncharge in Sun. ALWAYS CRITS, ignores Protect.",
    flags: {
      charge: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 200
    },
    num: 76,
    accuracy: 100,
    category: "Special",
    name: "Solar Beam",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "solarbeam",
    fullname: "move: Solar Beam",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  poisonpowder: {
    exists: true,
    accuracy: 100,
    desc: "The user scatters a cloud of poisonous dust that\npoisons the target. Z-Effect +2 Sp. Def.",
    shortDesc: "The user scatters a cloud of poisonous dust that\npoisons the target. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 77,
    basePower: 0,
    category: "Status",
    name: "Poison Powder",
    pp: 35,
    priority: 0,
    status: "psn",
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "poisonpowder",
    fullname: "move: Poison Powder",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stunspore: {
    exists: true,
    accuracy: 100,
    desc: "The user scatters a cloud of numbing powder that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    shortDesc: "The user scatters a cloud of numbing powder that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 78,
    basePower: 0,
    category: "Status",
    name: "Stun Spore",
    pp: 30,
    priority: 0,
    status: "par",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "stunspore",
    fullname: "move: Stun Spore",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sleeppowder: {
    exists: true,
    accuracy: 85,
    pp: 2,
    desc: "The user scatters a big cloud of sleep-inducing dust,\nputting the target to sleep for 2 turns.\nZ-Effect heals the user fully.",
    shortDesc: "The user scatters a big cloud of sleep-inducing dust,\nputting the target to sleep for 2 turns.\nZ-Effect heals the user fully.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    num: 79,
    basePower: 0,
    category: "Status",
    name: "Sleep Powder",
    priority: 0,
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "sleeppowder",
    fullname: "move: Sleep Powder",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  petaldance: {
    exists: true,
    pp: 5,
    desc: "The user attacks the target by scattering petals for\ntwo to three turns. The user then becomes confused.",
    shortDesc: "The user attacks the target by scattering petals for\ntwo to three turns. The user then becomes confused.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 80,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Petal Dance",
    priority: 0,
    self: {
      volatileStatus: "lockedmove"
    },
    secondary: null,
    target: "randomNormal",
    type: "Grass",
    id: "petaldance",
    fullname: "move: Petal Dance",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  stringshot: {
    exists: true,
    accuracy: 100,
    pp: 20,
    desc: "The opposing Pokemon are bound with silk. This\nlowers their Speed by 2, & Sp. Atk by 1.\nZ-Effect +3 Accuracy.",
    shortDesc: "The opposing Pokemon are bound with silk. This\nlowers their Speed by 2, & Sp. Atk by 1.\nZ-Effect +3 Accuracy.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 81,
    basePower: 0,
    category: "Status",
    name: "String Shot",
    priority: 0,
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Bug",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "stringshot",
    fullname: "move: String Shot",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dragonburst: {
    exists: true,
    num: 82,
    accuracy: 100,
    basePower: 1,
    category: "Special",
    name: "Dragon Burst",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Dragon",
    target: "normal",
    desc: "In a rage, the user fires 3 shockwaves of dragon\nenergy at the foe. Each individual shockwave deals\n40 HP damage for a total of 120 flat HP damage.",
    shortDesc: "In a rage, the user fires 3 shockwaves of dragon\nenergy at the foe. Each individual shockwave deals\n40 HP damage for a total of 120 flat HP damage.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 220
    },
    id: "dragonburst",
    fullname: "move: Dragon Burst",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  firespin: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    desc: "The target becomes trapped within a fierce vortex of\nfire that traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The target becomes trapped within a fierce vortex of\nfire that traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    num: 83,
    category: "Special",
    name: "Fire Spin",
    pp: 15,
    priority: 0,
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "firespin",
    fullname: "move: Fire Spin",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  thundershock: {
    exists: true,
    pp: 15,
    desc: "A jolt of concentrated static electricity strikes the foe.\nThis will ALWAYS leave the foe with paralysis.",
    shortDesc: "A jolt of concentrated static electricity strikes the foe.\nThis will ALWAYS leave the foe with paralysis.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 80
    },
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    num: 84,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Thunder Shock",
    priority: 0,
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "thundershock",
    fullname: "move: Thunder Shock",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  thunderbolt: {
    exists: true,
    desc: "A strong electric blast crashes down on the target.\nThis leaves the target paralyzed 10% of the time.",
    shortDesc: "A strong electric blast crashes down on the target.\nThis leaves the target paralyzed 10% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 85,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Thunderbolt",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "thunderbolt",
    fullname: "move: Thunderbolt",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  thunderwave: {
    exists: true,
    accuracy: 100,
    desc: "The user launches a weak wave of electricity that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    shortDesc: "The user launches a weak wave of electricity that\nparalyzes the target. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 86,
    basePower: 0,
    category: "Status",
    name: "Thunder Wave",
    pp: 20,
    priority: 0,
    status: "par",
    ignoreImmunity: false,
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "thunderwave",
    fullname: "move: Thunder Wave",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  thunder: {
    exists: true,
    accuracy: 85,
    basePower: 120,
    pp: 5,
    desc: "A wicked thunderbolt is dropped on the target.\nThis leaves the target paralyzed 30% of the time.\nThis can't miss in the Rain.",
    shortDesc: "A wicked thunderbolt is dropped on the target.\nThis leaves the target paralyzed 30% of the time.\nThis can't miss in the Rain.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    num: 87,
    category: "Special",
    name: "Thunder",
    priority: 0,
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "thunder",
    fullname: "move: Thunder",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  faerieblow: {
    exists: true,
    num: 88,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Faerie Blow",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user quickly strikes the target whimsically.\nThis has +1 priority, and can't miss. Contact.",
    shortDesc: "The user quickly strikes the target whimsically.\nThis has +1 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    zMove: {
      basePower: 100
    },
    id: "faerieblow",
    fullname: "move: Faerie Blow",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  earthquake: {
    exists: true,
    desc: "The user sets off an earthquake that strikes every\nPokemon around it.",
    shortDesc: "The user sets off an earthquake that strikes every\nPokemon around it.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 89,
    accuracy: 100,
    basePower: 100,
    category: "Physical",
    name: "Earthquake",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "allAdjacent",
    type: "Ground",
    id: "earthquake",
    fullname: "move: Earthquake",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  fissure: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 1,
    desc: "The opens up a fissure under the foe, fainting them.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The opens up a fissure under the foe, fainting them.\nThis attack NEVER misses, but can only be used once.\nContact.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 255
    },
    noPPBoosts: true,
    num: 90,
    category: "Physical",
    name: "Fissure",
    priority: 0,
    ohko: true,
    secondary: null,
    target: "normal",
    type: "Ground",
    maxMove: {
      basePower: 130
    },
    id: "fissure",
    fullname: "move: Fissure",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dig: {
    exists: true,
    pp: 15,
    desc: "The user burrows, then attacks on the next turn.\nThe user gains +1 Accuracy after attacking. Contact.\nBypasses protect.",
    shortDesc: "The user burrows, then attacks on the next turn.\nThe user gains +1 Accuracy after attacking. Contact.\nBypasses protect.",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 91,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dig",
    priority: 0,
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Ground",
    id: "dig",
    fullname: "move: Dig",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  toxic: {
    exists: true,
    accuracy: 100,
    desc: "A move that leaves the target badly poisoned.\nIts poison damage worsens every turn.\nZ-Effect heals user fully.",
    shortDesc: "A move that leaves the target badly poisoned.\nIts poison damage worsens every turn.\nZ-Effect heals user fully.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    condition: {
      noCopy: true,
      duration: 1,
      onSourceInvulnerabilityPriority: 1
    },
    num: 92,
    basePower: 0,
    category: "Status",
    name: "Toxic",
    pp: 10,
    priority: 0,
    status: "tox",
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "toxic",
    fullname: "move: Toxic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  confusion: {
    exists: true,
    basePower: 60,
    desc: "The target is hit by a weak telekinetic force.\nThis confuses the target for 4 turns 50% of the time.",
    shortDesc: "The target is hit by a weak telekinetic force.\nThis confuses the target for 4 turns 50% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 50,
        status: "tox"
      }
    ],
    num: 93,
    accuracy: 100,
    category: "Special",
    name: "Confusion",
    pp: 25,
    priority: 0,
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Psychic",
    id: "confusion",
    fullname: "move: Confusion",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  psychic: {
    exists: true,
    desc: "The target is hit by a strong telekinetic force.\nThis drops the foe's Sp. Def 25% of the time.",
    shortDesc: "The target is hit by a strong telekinetic force.\nThis drops the foe's Sp. Def 25% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 25,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 94,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Psychic",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Psychic",
    id: "psychic",
    fullname: "move: Psychic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  hypnosis: {
    exists: true,
    accuracy: 80,
    pp: 2,
    desc: "The user employs hypnotic suggestion, putting the\ntarget in a deep sleep that lasts 2 turns.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user employs hypnotic suggestion, putting the\ntarget in a deep sleep that lasts 2 turns.\nZ-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    num: 95,
    basePower: 0,
    category: "Status",
    name: "Hypnosis",
    priority: 0,
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "hypnosis",
    fullname: "move: Hypnosis",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  meditate: {
    exists: true,
    pp: 3,
    desc: "The user meditates to awaken the power deep\nwithin its body and raise its Attack and Sp. Def by 1.\nZ-Effect heals the user fully.",
    shortDesc: "The user meditates to awaken the power deep\nwithin its body and raise its Attack and Sp. Def by 1.\nZ-Effect heals the user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spd: 1
        }
      },
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 96,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Meditate",
    priority: 0,
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "meditate",
    fullname: "move: Meditate",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  agility: {
    exists: true,
    pp: 5,
    desc: "The user relaxes and lightens its body to move\nfaster. This raises Speed by 2. Z-Effect +2 Crit Rate.",
    shortDesc: "The user relaxes and lightens its body to move\nfaster. This raises Speed by 2. Z-Effect +2 Crit Rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spe: 2
        }
      }
    ],
    num: 97,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Agility",
    priority: 0,
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "agility",
    fullname: "move: Agility",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  quickattack: {
    exists: true,
    accuracy: true,
    basePower: 50,
    pp: 15,
    desc: "The user lunges quickly at the target.\n+1 Priority, can't miss, and makes contact.",
    shortDesc: "The user lunges quickly at the target.\n+1 Priority, can't miss, and makes contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 98,
    category: "Physical",
    name: "Quick Attack",
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "quickattack",
    fullname: "move: Quick Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  rage: {
    exists: true,
    basePower: 80,
    pp: 15,
    desc: "The user attacks with rage. As long as this move is in\nuse, rage raises the Attack stat by 1 each time the\nuser is hit. Contact.",
    shortDesc: "The user attacks with rage. As long as this move is in\nuse, rage raises the Attack stat by 1 each time the\nuser is hit. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    isNonstandard: null,
    num: 99,
    accuracy: 100,
    category: "Physical",
    name: "Rage",
    priority: 0,
    self: {
      volatileStatus: "rage"
    },
    condition: {
      onBeforeMovePriority: 100
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "rage",
    fullname: "move: Rage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  teleport: {
    exists: true,
    pp: 15,
    priority: -6,
    target: "normal",
    desc: "Use it to flee from any wild Pokemon.",
    shortDesc: "Use it to flee from any wild Pokemon.",
    onTry: false,
    num: 100,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Teleport",
    flags: {},
    secondary: null,
    type: "Psychic",
    zMove: {
      effect: "heal"
    },
    id: "teleport",
    fullname: "move: Teleport",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  soulabsorb: {
    exists: true,
    num: 101,
    accuracy: 100,
    basePower: 1,
    category: "Special",
    name: "Soul Absorb",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user absorbs the foe's vital energy, or soul.\nThis deals damage equal to the user's level, and\nrecovers damage equal to the user's level.",
    shortDesc: "The user absorbs the foe's vital energy, or soul.\nThis deals damage equal to the user's level, and\nrecovers damage equal to the user's level.",
    flags: {
      mirror: 1,
      protect: 1
    },
    drain: [
      100,
      100
    ],
    zMove: {
      basePower: 160
    },
    id: "soulabsorb",
    fullname: "move: Soul Absorb",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  mimic: {
    exists: true,
    priority: 6,
    desc: "The user copies the target’s last move. The move\ncan be used during battle until the Pokemon is\nswitched out. Z-Effect +1 all stats. +6 Priority.",
    shortDesc: "The user copies the target’s last move. The move\ncan be used during battle until the Pokemon is\nswitched out. Z-Effect +1 all stats. +6 Priority.",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    num: 102,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mimic",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "mimic",
    fullname: "move: Mimic",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  screech: {
    exists: true,
    accuracy: 100,
    pp: 15,
    target: "allAdjacentFoes",
    desc: "An earsplitting screech that lowers the foe's Defense\nstat by 2 stages. Z-Effect +3 Accuracy.",
    shortDesc: "An earsplitting screech that lowers the foe's Defense\nstat by 2 stages. Z-Effect +3 Accuracy.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: -2
        }
      }
    ],
    num: 103,
    basePower: 0,
    category: "Status",
    name: "Screech",
    priority: 0,
    boosts: {
      def: -2
    },
    secondary: null,
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "screech",
    fullname: "move: Screech",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hyperspeed: {
    exists: true,
    num: 104,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hyper Speed",
    pp: 1,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "self",
    desc: "The user moves so rapidly that it becomes nearly\ninvisible to the human eye, boosting the user's Speed\nstat by 3 stages. Z-Effect gives +2 crit rate.",
    shortDesc: "The user moves so rapidly that it becomes nearly\ninvisible to the human eye, boosting the user's Speed\nstat by 3 stages. Z-Effect gives +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: 3
        }
      }
    ],
    noPPBoosts: true,
    id: "hyperspeed",
    fullname: "move: Hyper Speed",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  recover: {
    exists: true,
    pp: 5,
    desc: "Restoring its own cells, the user restores its own HP\nby half of its max HP. Z-Effect +2 Sp. Def.",
    shortDesc: "Restoring its own cells, the user restores its own HP\nby half of its max HP. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    num: 105,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Recover",
    priority: 0,
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "recover",
    fullname: "move: Recover",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  harden: {
    exists: true,
    pp: 10,
    desc: "The user hardens its body, boosting Defense by 1.\nZ-Effect heals user fully.",
    shortDesc: "The user hardens its body, boosting Defense by 1.\nZ-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 1
        }
      }
    ],
    num: 106,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Harden",
    priority: 0,
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "harden",
    fullname: "move: Harden",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  deflate: {
    exists: true,
    num: 107,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Deflate",
    pp: 3,
    priority: 4,
    critRatio: 1,
    type: "Flying",
    target: "self",
    desc: "The user deflates itself to recover HP. This heals\nthe user to FULL HP, AND has +4 Priority.\nZ-Effect gives the user +1 to all stats.",
    shortDesc: "The user deflates itself to recover HP. This heals\nthe user to FULL HP, AND has +4 Priority.\nZ-Effect gives the user +1 to all stats.",
    flags: {
      snatch: 1
    },
    noPPBoosts: true,
    id: "deflate",
    fullname: "move: Deflate",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  noxiousgas: {
    exists: true,
    num: 108,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Noxious Gas",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Poison",
    target: "allAdjacentFoes",
    desc: "The user expels an utterly putrid smelling gas.\nThis poisons the foes while dropping their Attack,\nSp. Atk and Speed stats by 2. Z-Effect +1 All Stats.",
    shortDesc: "The user expels an utterly putrid smelling gas.\nThis poisons the foes while dropping their Attack,\nSp. Atk and Speed stats by 2. Z-Effect +1 All Stats.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      },
      {
        chance: 100,
        boosts: {
          atk: -2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -2
        }
      },
      {
        chance: 100,
        boosts: {
          spe: -2
        }
      }
    ],
    id: "noxiousgas",
    fullname: "move: Noxious Gas",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  confuseray: {
    exists: true,
    desc: "The target is exposed to a sinister ray that\nconfuses them for four turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "The target is exposed to a sinister ray that\nconfuses them for four turns. Z-Effect +2 Sp. Atk.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 109,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Confuse Ray",
    pp: 10,
    priority: 0,
    volatileStatus: "confusion",
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "confuseray",
    fullname: "move: Confuse Ray",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  withdraw: {
    exists: true,
    pp: 3,
    type: "Normal",
    desc: "The user withdraws its body into its hard shell,\nraising its Defense and Sp. Def stats by 1.\nZ-Effect heals user fully.",
    shortDesc: "The user withdraws its body into its hard shell,\nraising its Defense and Sp. Def stats by 1.\nZ-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: 1
        }
      },
      {
        chance: 100,
        boosts: {
          spd: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 110,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Withdraw",
    priority: 0,
    boosts: {
      def: 1
    },
    secondary: null,
    target: "self",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "withdraw",
    fullname: "move: Withdraw",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  defensecurl: {
    exists: true,
    desc: "The user curls up to conceal weak spots and raise\nits Defense stat by 1. Z-Effect heals user fully.",
    shortDesc: "The user curls up to conceal weak spots and raise\nits Defense stat by 1. Z-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 1
        }
      }
    ],
    num: 111,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defense Curl",
    pp: 40,
    priority: 0,
    boosts: {
      def: 1
    },
    volatileStatus: "defensecurl",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "defensecurl",
    fullname: "move: Defense Curl",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  barrier: {
    exists: true,
    pp: 2,
    desc: "The user throws up a psychic wall that raises its\nDefense stat by 2. Z-Effect heals user fully.",
    shortDesc: "The user throws up a psychic wall that raises its\nDefense stat by 2. Z-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 2
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 112,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Barrier",
    priority: 0,
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "barrier",
    fullname: "move: Barrier",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lightscreen: {
    exists: true,
    pp: 5,
    target: "normal",
    desc: "A wondrous wall of light is put up to halve damage\nfrom special attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "A wondrous wall of light is put up to halve damage\nfrom special attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    num: 113,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Light Screen",
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "lightscreen",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 2
    },
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "lightscreen",
    fullname: "move: Light Screen",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  haze: {
    exists: true,
    priority: 4,
    target: "normal",
    desc: "The user creates a haze that eliminates every stat\nchange on the field. Z-Effect heals user fully.\nThis has +4 Priority.",
    shortDesc: "The user creates a haze that eliminates every stat\nchange on the field. Z-Effect heals user fully.\nThis has +4 Priority.",
    num: 114,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Haze",
    pp: 30,
    flags: {
      bypasssub: 1
    },
    secondary: null,
    type: "Ice",
    zMove: {
      effect: "heal"
    },
    id: "haze",
    fullname: "move: Haze",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  reflect: {
    exists: true,
    pp: 5,
    target: "normal",
    desc: "A wondrous wall of light is put up to halve damage of\nphysical attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    shortDesc: "A wondrous wall of light is put up to halve damage of\nphysical attacks for 5 turns. Z-Effect +2 Sp. Atk.",
    num: 115,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Reflect",
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "reflect",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 1
    },
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "reflect",
    fullname: "move: Reflect",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  focusenergy: {
    exists: true,
    pp: 5,
    desc: "The user takes a moment to focus. This boosts the\nthe user's crit rate by +2. Z-Effect +2 Speed.",
    shortDesc: "The user takes a moment to focus. This boosts the\nthe user's crit rate by +2. Z-Effect +2 Speed.",
    flags: {
      dance: 1,
      snatch: 1
    },
    num: 116,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Focus Energy",
    priority: 0,
    volatileStatus: "focusenergy",
    condition: {},
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "focusenergy",
    fullname: "move: Focus Energy",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bide: {
    exists: true,
    basePower: 1,
    desc: "The user endures attacks for two turns, then strikes\nback to cause double the damage taken.",
    shortDesc: "The user endures attacks for two turns, then strikes\nback to cause double the damage taken.",
    flags: {
      contact: 1,
      protect: 1
    },
    isNonstandard: null,
    num: 117,
    accuracy: true,
    category: "Physical",
    name: "Bide",
    pp: 10,
    priority: 1,
    volatileStatus: "bide",
    ignoreImmunity: true,
    condition: {
      duration: 3,
      onLockMove: "bide",
      onDamagePriority: -101
    },
    secondary: null,
    target: "self",
    type: "Normal",
    id: "bide",
    fullname: "move: Bide",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  metronome: {
    exists: true,
    desc: "The user waggles a finger and stimulates its brain\ninto randomly using nearly any move. Z-Effect boosts\nall stats by +1 before using the random Z-move.",
    shortDesc: "The user waggles a finger and stimulates its brain\ninto randomly using nearly any move. Z-Effect boosts\nall stats by +1 before using the random Z-move.",
    flags: {},
    noMetronome: [
      "After You",
      "Assist",
      "Baneful Bunker",
      "Beak Blast",
      "Belch",
      "Bestow",
      "Celebrate",
      "Chatter",
      "Copycat",
      "Counter",
      "Covet",
      "Crafty Shield",
      "Destiny Bond",
      "Detect",
      "Diamond Storm",
      "Dragon Ascent",
      "Endure",
      "Feint",
      "Fleur Cannon",
      "Focus Punch",
      "Follow Me",
      "Freeze Shock",
      "Helping Hand",
      "Hold Hands",
      "Hyperspace Fury",
      "Hyperspace Hole",
      "Ice Burn",
      "Instruct",
      "King's Shield",
      "Light of Ruin",
      "Mat Block",
      "Me First",
      "Metronome",
      "Mimic",
      "Mind Blown",
      "Mirror Coat",
      "Mirror Move",
      "Nature Power",
      "Origin Pulse",
      "Photon Geyser",
      "Plasma Fists",
      "Precipice Blades",
      "Protect",
      "Quash",
      "Quick Guard",
      "Rage Powder",
      "Relic Song",
      "Secret Sword",
      "Shell Trap",
      "Sketch",
      "Sleep Talk",
      "Snarl",
      "Snatch",
      "Snore",
      "Spectral Thief",
      "Spiky Shield",
      "Spotlight",
      "Steam Eruption",
      "Struggle",
      "Switcheroo",
      "Techno Blast",
      "Thief",
      "Thousand Arrows",
      "Thousand Waves",
      "Transform",
      "Trick",
      "V-create",
      "Wide Guard"
    ],
    num: 118,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Metronome",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "self",
    type: "Normal",
    id: "metronome",
    fullname: "move: Metronome",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mirrormove: {
    exists: true,
    pp: 5,
    priority: 6,
    desc: "The user counters the target by mimicking the\ntarget’s last move. Z-Effect +2 Attack.\nThis has +6 Priority.",
    shortDesc: "The user counters the target by mimicking the\ntarget’s last move. Z-Effect +2 Attack.\nThis has +6 Priority.",
    flags: {},
    isNonstandard: null,
    num: 119,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mirror Move",
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: {
      boost: {
        atk: 2
      }
    },
    id: "mirrormove",
    fullname: "move: Mirror Move",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  detonate: {
    exists: true,
    num: 120,
    accuracy: 100,
    basePower: 250,
    category: "Special",
    name: "Detonate",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "allAdjacent",
    desc: "The user detonates itself, causing a fiery explosion.\nThis causes the user to faint. In exchange, everything\nhit by the explosion is left with a burn. Ignores Protect.",
    shortDesc: "The user detonates itself, causing a fiery explosion.\nThis causes the user to faint. In exchange, everything\nhit by the explosion is left with a burn. Ignores Protect.",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1
    },
    zMove: {
      basePower: 255
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    id: "detonate",
    fullname: "move: Detonate",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  eggcannon: {
    exists: true,
    num: 121,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Egg Cannon",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Normal",
    target: "normal",
    desc: "The user fires a barrage of three exploding eggs.\nThis hits 3 times and ALWAYS lands a critical hit.",
    shortDesc: "The user fires a barrage of three exploding eggs.\nThis hits 3 times and ALWAYS lands a critical hit.",
    flags: {
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    multihit: 3,
    zMove: {
      basePower: 190
    },
    id: "eggcannon",
    fullname: "move: Egg Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  deviouslick: {
    exists: true,
    num: 122,
    accuracy: true,
    basePower: 20,
    category: "Special",
    name: "Devious Lick",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user uses its filthy tongue to lick the foe.\nThis leaves the foe afflicted with a curse, causing\nthem to lose 1/4 of their max HP after each turn.",
    shortDesc: "The user uses its filthy tongue to lick the foe.\nThis leaves the foe afflicted with a curse, causing\nthem to lose 1/4 of their max HP after each turn.",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "10"
      }
    ],
    noPPBoosts: true,
    id: "deviouslick",
    fullname: "move: Devious Lick",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    },
    zMove: {
      basePower: 100
    }
  },
  smog: {
    exists: true,
    accuracy: 100,
    basePower: 40,
    pp: 15,
    target: "allAdjacentFoes",
    desc: "The foes are attacked with a discharge of filthy gases\nThis ALWAYS poisons those exposed to the smog.",
    shortDesc: "The foes are attacked with a discharge of filthy gases\nThis ALWAYS poisons those exposed to the smog.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 80
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      }
    ],
    num: 123,
    category: "Special",
    name: "Smog",
    priority: 0,
    secondary: {
      chance: 40,
      status: "psn"
    },
    type: "Poison",
    id: "smog",
    fullname: "move: Smog",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  sludgefling: {
    exists: true,
    num: 124,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Sludge Fling",
    pp: 20,
    priority: 0,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user flings thick, slimy sludge at the foe.\nThis ALWAYS lowers the foe's Speed by 1.",
    shortDesc: "The user flings thick, slimy sludge at the foe.\nThis ALWAYS lowers the foe's Speed by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    id: "sludgefling",
    fullname: "move: Sludge Fling",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    }
  },
  boneclub: {
    exists: true,
    accuracy: 100,
    basePower: 85,
    pp: 10,
    desc: "The user clubs the target with a hard bone.\nThis ALWAYS lowers the foe's Defense by 1.",
    shortDesc: "The user clubs the target with a hard bone.\nThis ALWAYS lowers the foe's Defense by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "25"
      },
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    isNonstandard: null,
    num: 125,
    category: "Physical",
    name: "Bone Club",
    priority: 0,
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Ground",
    id: "boneclub",
    fullname: "move: Bone Club",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  fireblast: {
    exists: true,
    accuracy: 90,
    basePower: 120,
    desc: "The target is attacked with an intense blast of\nflames. This burns the target 25% of the time.",
    shortDesc: "The target is attacked with an intense blast of\nflames. This burns the target 25% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 20,
        status: "brn"
      }
    ],
    num: 126,
    category: "Special",
    name: "Fire Blast",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "fireblast",
    fullname: "move: Fire Blast",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  wavecrash: {
    exists: true,
    num: 127,
    accuracy: 100,
    basePower: 125,
    category: "Physical",
    name: "Wave Crash",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Water",
    target: "normal",
    desc: "The user surges at the target with great force.\nThis deals 25% recoil to the user, and has a 20%\nflinch rate. Contact.",
    shortDesc: "The user surges at the target with great force.\nThis deals 25% recoil to the user, and has a 20%\nflinch rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    id: "wavecrash",
    fullname: "move: Wave Crash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  clamp: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    desc: "The target is clamped and squeezed by the user’s\nsturdy shell for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    shortDesc: "The target is clamped and squeezed by the user’s\nsturdy shell for 6 turns, preventing switching and\ndealing 12% of the foe's max HP per turn. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    isNonstandard: null,
    num: 128,
    category: "Physical",
    name: "Clamp",
    pp: 15,
    priority: 0,
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Water",
    id: "clamp",
    fullname: "move: Clamp",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  swift: {
    exists: true,
    basePower: 55,
    pp: 10,
    priority: 2,
    desc: "Star-shaped rays are rapidly shot at foe.\nThis attack has +2 Priority, and can't miss.",
    shortDesc: "Star-shaped rays are rapidly shot at foe.\nThis attack has +2 Priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 129,
    accuracy: true,
    category: "Special",
    name: "Swift",
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    id: "swift",
    fullname: "move: Swift",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  skullbash: {
    exists: true,
    accuracy: true,
    basePower: 90,
    pp: 5,
    critRatio: 7,
    desc: "On the 1st turn, the user tucks in its head, raising\nDefense by 1. On the 2nd, the user charges, gaining\n+1 Attack & Accuracy. ALWAYS crits, Ignores protect.",
    shortDesc: "On the 1st turn, the user tucks in its head, raising\nDefense by 1. On the 2nd, the user charges, gaining\n+1 Attack & Accuracy. ALWAYS crits, Ignores protect.",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      },
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 130,
    category: "Physical",
    name: "Skull Bash",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "skullbash",
    fullname: "move: Skull Bash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  burningbarrage: {
    exists: true,
    num: 131,
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Burning Barrage",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The user fires three burning projectiles at the foe.\nThis will ALWAYS leave the target with a burn.",
    shortDesc: "The user fires three burning projectiles at the foe.\nThis will ALWAYS leave the target with a burn.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    id: "burningbarrage",
    fullname: "move: Burning Barrage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  constrict: {
    exists: true,
    basePower: 60,
    pp: 20,
    type: "Grass",
    desc: "The target is constricted with thick, strong vines.\nFor 6 turns, the foe can't switch out of battle and\nloses 12% of their max HP after each turn. Contact.",
    shortDesc: "The target is constricted with thick, strong vines.\nFor 6 turns, the foe can't switch out of battle and\nloses 12% of their max HP after each turn. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    isNonstandard: null,
    num: 132,
    accuracy: 100,
    category: "Physical",
    name: "Constrict",
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    id: "constrict",
    fullname: "move: Constrict",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  amnesia: {
    exists: true,
    pp: 2,
    desc: "The user temporarily empties its mind to forget its\nconcerns. This raises the user's Sp. Def by +2.\nZ-Effect heals user fully.",
    shortDesc: "The user temporarily empties its mind to forget its\nconcerns. This raises the user's Sp. Def by +2.\nZ-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spd: 2
        }
      }
    ],
    noPPBoosts: true,
    num: 133,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Amnesia",
    priority: 0,
    boosts: {
      spd: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "amnesia",
    fullname: "move: Amnesia",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  kinesis: {
    exists: true,
    desc: "The user distracts the target by bending a spoon.\nThis lowers the target’s accuracy.",
    shortDesc: "The user distracts the target by bending a spoon.\nThis lowers the target’s accuracy.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          accuracy: -1
        }
      }
    ],
    isNonstandard: null,
    num: 134,
    accuracy: 80,
    basePower: 0,
    category: "Status",
    name: "Kinesis",
    pp: 15,
    priority: 0,
    boosts: {
      accuracy: -1
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    id: "kinesis",
    fullname: "move: Kinesis",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  softboiled: {
    exists: true,
    pp: 3,
    priority: 4,
    desc: "The user consumes the egg it holds, healing itself to\nfull HP. This has +4 Priority, but only 2 PP.\nZ-Effect gives the user +3 Speed.",
    shortDesc: "The user consumes the egg it holds, healing itself to\nfull HP. This has +4 Priority, but only 2 PP.\nZ-Effect gives the user +3 Speed.",
    flags: {
      snatch: 1
    },
    noPPBoosts: true,
    num: 135,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Soft-Boiled",
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "softboiled",
    fullname: "move: Soft-Boiled",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  divebomb: {
    exists: true,
    num: 136,
    accuracy: 90,
    basePower: 130,
    category: "Physical",
    name: "Divebomb",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Flying",
    target: "normal",
    desc: "The user recklessly dives onto the target from above.\nIf it misses, the user loses half max HP. Contact.",
    shortDesc: "The user recklessly dives onto the target from above.\nIf it misses, the user loses half max HP. Contact.",
    flags: {
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    id: "divebomb",
    fullname: "move: Divebomb",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  glare: {
    exists: true,
    pp: 10,
    type: "Dark",
    desc: "The user intimidates the target with a glare,\ncausing paralysis AND lowering offensive stats by 1.\nZ-Effect gives +2 Attack.",
    shortDesc: "The user intimidates the target with a glare,\ncausing paralysis AND lowering offensive stats by 1.\nZ-Effect gives +2 Attack.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 137,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Glare",
    priority: 0,
    status: "par",
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "glare",
    fullname: "move: Glare",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dreameater: {
    exists: true,
    basePower: 120,
    desc: "The user eats the dreams of a sleeping target. It\nabsorbs 100% of the damage caused to heal its own HP.",
    shortDesc: "The user eats the dreams of a sleeping target. It\nabsorbs 100% of the damage caused to heal its own HP.",
    flags: {
      mirror: 1,
      protect: 1
    },
    drain: [
      100,
      100
    ],
    zMove: {
      basePower: 195
    },
    num: 138,
    accuracy: 100,
    category: "Special",
    name: "Dream Eater",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "dreameater",
    fullname: "move: Dream Eater",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  poisongas: {
    exists: true,
    accuracy: 100,
    desc: "A cloud of poison gas is sprayed at the opponents,\npoisoning those hit. Z-Effect +2 Sp. Atk.",
    shortDesc: "A cloud of poison gas is sprayed at the opponents,\npoisoning those hit. Z-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      }
    ],
    num: 139,
    basePower: 0,
    category: "Status",
    name: "Poison Gas",
    pp: 40,
    priority: 0,
    status: "psn",
    secondary: null,
    target: "allAdjacentFoes",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "poisongas",
    fullname: "move: Poison Gas",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  triplecannonade: {
    exists: true,
    num: 140,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Triple Cannonade",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Steel",
    target: "normal",
    desc: "Three rounds of heavy artillery are fired at the foe.\nThis ALWAYS results in a critical hit, hits 3 times,\nand bypasses Protect.",
    shortDesc: "Three rounds of heavy artillery are fired at the foe.\nThis ALWAYS results in a critical hit, hits 3 times,\nand bypasses Protect.",
    flags: {
      heal: 1,
      mirror: 1,
      bullet: 1
    },
    willCrit: true,
    multihit: 3,
    zMove: {
      basePower: 190
    },
    id: "triplecannonade",
    fullname: "move: Triple Cannonade",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  leechlife: {
    exists: true,
    basePower: 60,
    desc: "The user drains the target’s vital fluids.\nThis heals the user by ALL damage dealt. Contact.",
    shortDesc: "The user drains the target’s vital fluids.\nThis heals the user by ALL damage dealt. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    drain: [
      100,
      100
    ],
    zMove: {
      basePower: 120
    },
    num: 141,
    accuracy: 100,
    category: "Physical",
    name: "Leech Life",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "leechlife",
    fullname: "move: Leech Life",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  dreamykiss: {
    exists: true,
    num: 142,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Dreamy Kiss",
    pp: 2,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user kisses the target dreamily, causing the\ntarget to sleep for 2 turns. Z-Effect +2 Sp. Def.",
    shortDesc: "The user kisses the target dreamily, causing the\ntarget to sleep for 2 turns. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    noPPBoosts: true,
    id: "dreamykiss",
    fullname: "move: Dreamy Kiss",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  skyattack: {
    exists: true,
    accuracy: true,
    basePower: 120,
    critRatio: 7,
    target: "normal",
    desc: "A 2 turn attack where the user soars from the sky\nwith full power. This ALWAYS crits.\n30% Flinch rate. Ignores protect. Contact.",
    shortDesc: "A 2 turn attack where the user soars from the sky\nwith full power. This ALWAYS crits.\n30% Flinch rate. Ignores protect. Contact.",
    flags: {
      charge: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 220
    },
    num: 143,
    category: "Physical",
    name: "Sky Attack",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    type: "Flying",
    id: "skyattack",
    fullname: "move: Sky Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  transform: {
    exists: true,
    priority: 6,
    desc: "The user transforms into an identical copy of the foe,\nbesides the HP stat. Z-Effect heals user.\nThis has +6 priority.",
    shortDesc: "The user transforms into an identical copy of the foe,\nbesides the HP stat. Z-Effect heals user.\nThis has +6 priority.",
    flags: {},
    num: 144,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Transform",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    id: "transform",
    fullname: "move: Transform",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bubblebarrage: {
    exists: true,
    num: 145,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Bubble Barrage",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Water",
    target: "normal",
    desc: "The user fires a barrage of bubbles at the foe.\nHits 3 times. Each hit lowers the foe's Speed by 1.",
    shortDesc: "The user fires a barrage of bubbles at the foe.\nHits 3 times. Each hit lowers the foe's Speed by 1.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    id: "bubblebarrage",
    fullname: "move: Bubble Barrage",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  dizzypunches: {
    exists: true,
    num: 146,
    accuracy: 100,
    basePower: 30,
    category: "Physical",
    name: "Dizzy Punches",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "The target is hit with 3 punches imbued with psychic\nenergy. Each hit has a 30% chance to confuse for 4\nturns. Contact.",
    shortDesc: "The target is hit with 3 punches imbued with psychic\nenergy. Each hit has a 30% chance to confuse for 4\nturns. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 30,
        status: "tox"
      }
    ],
    id: "dizzypunches",
    fullname: "move: Dizzy Punches",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  spore: {
    exists: true,
    pp: 2,
    desc: "The user scatters bursts of spores that\ninduce sleep for 2 turns. Z-Effect +2 Sp. Def.",
    shortDesc: "The user scatters bursts of spores that\ninduce sleep for 2 turns. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    num: 147,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Spore",
    priority: 0,
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "spore",
    fullname: "move: Spore",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  neuralyze: {
    exists: true,
    num: 148,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Neuralyze",
    pp: 5,
    priority: 6,
    critRatio: 1,
    type: "Psychic",
    target: "allAdjacentFoes",
    desc: "The user flashes a strange light that wipes the foe's\nmemory, causing them to forget their last used move\nfor 15 turns. +6 Priority. Z-Effect +3 Sp. Def.",
    shortDesc: "The user flashes a strange light that wipes the foe's\nmemory, causing them to forget their last used move\nfor 15 turns. +6 Priority. Z-Effect +3 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    id: "neuralyze",
    fullname: "move: Neuralyze",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  pendulumwave: {
    exists: true,
    num: 149,
    accuracy: true,
    basePower: 0,
    category: "Special",
    name: "Pendulum Wave",
    pp: 1,
    priority: 4,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "Hypno swings its pendulum, firing off a psywave that\nvaries in power, and sleeps the foe for 2 FULL turns\nAFTER its used. +4 Priority. Z-Effect +2 Speed.",
    shortDesc: "Hypno swings its pendulum, firing off a psywave that\nvaries in power, and sleeps the foe for 2 FULL turns\nAFTER its used. +4 Priority. Z-Effect +2 Speed.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "slp"
      }
    ],
    noPPBoosts: true,
    id: "pendulumwave",
    fullname: "move: Pendulum Wave",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  hop: {
    exists: true,
    num: 150,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hop",
    pp: 1,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "self",
    desc: "The user just hops around, doing absolutely nothing.\nZ-Effect +3 Attack.",
    shortDesc: "The user just hops around, doing absolutely nothing.\nZ-Effect +3 Attack.",
    flags: {
      gravity: 1
    },
    noPPBoosts: true,
    id: "hop",
    fullname: "move: Hop",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  acidarmor: {
    exists: true,
    pp: 2,
    desc: "The user alters its cellular structure to liquefy itself,\nraising Defense by 3. Z-Effect heals user fully.",
    shortDesc: "The user alters its cellular structure to liquefy itself,\nraising Defense by 3. Z-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 3
        }
      }
    ],
    noPPBoosts: true,
    num: 151,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Acid Armor",
    priority: 0,
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Poison",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "acidarmor",
    fullname: "move: Acid Armor",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  crabhammer: {
    exists: true,
    accuracy: true,
    basePower: 80,
    pp: 5,
    critRatio: 7,
    desc: "The target is hammered hard with the user's pincer.\nThis ALWAYS crits and can't miss.\n30% Defense drop rate. Contact.",
    shortDesc: "The target is hammered hard with the user's pincer.\nThis ALWAYS crits and can't miss.\n30% Defense drop rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 152,
    category: "Physical",
    name: "Crabhammer",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Water",
    id: "crabhammer",
    fullname: "move: Crabhammer",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  explosion: {
    exists: true,
    category: "Special",
    critRatio: 7,
    desc: "The user blows itself up, causing massive destruction.\nThis will ALWAYS result in a critical hit.\nThis also bypasses Protect.",
    shortDesc: "The user blows itself up, causing massive destruction.\nThis will ALWAYS result in a critical hit.\nThis also bypasses Protect.",
    flags: {
      heal: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 255
    },
    num: 153,
    accuracy: 100,
    basePower: 250,
    name: "Explosion",
    pp: 5,
    priority: 0,
    selfdestruct: "always",
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    id: "explosion",
    fullname: "move: Explosion",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  furyswipes: {
    exists: true,
    accuracy: 100,
    basePower: 25,
    type: "Dark",
    desc: "The target is raked with sharp claws, scythes, or the\nlike furiously 2-5 times in a row. Contact.",
    shortDesc: "The target is raked with sharp claws, scythes, or the\nlike furiously 2-5 times in a row. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 154,
    category: "Physical",
    name: "Fury Swipes",
    pp: 15,
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    maxMove: {
      basePower: 100
    },
    id: "furyswipes",
    fullname: "move: Fury Swipes",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bonemerang: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    pp: 5,
    desc: "The user throws a bone like a boomerang, hitting 2\ntimes. Each hit has a 20% flinch rate.",
    shortDesc: "The user throws a bone like a boomerang, hitting 2\ntimes. Each hit has a 20% flinch rate.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    isNonstandard: null,
    num: 155,
    category: "Physical",
    name: "Bonemerang",
    priority: 0,
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Ground",
    maxMove: {
      basePower: 130
    },
    id: "bonemerang",
    fullname: "move: Bonemerang",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rest: {
    exists: true,
    type: "Normal",
    desc: "The user goes to sleep for two turns. This fully\nrestores the user’s HP and heals any\nstatus conditions. Z-Effect +2 Sp. Def.",
    shortDesc: "The user goes to sleep for two turns. This fully\nrestores the user’s HP and heals any\nstatus conditions. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    pp: 10,
    num: 156,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rest",
    priority: 0,
    secondary: null,
    target: "self",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "rest",
    fullname: "move: Rest",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rockslide: {
    exists: true,
    accuracy: 95,
    basePower: 95,
    desc: "Large boulders are hurled at the opposing Pokemon\nto inflict damage. This flinches 30% of the time.",
    shortDesc: "Large boulders are hurled at the opposing Pokemon\nto inflict damage. This flinches 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 157,
    category: "Physical",
    name: "Rock Slide",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Rock",
    id: "rockslide",
    fullname: "move: Rock Slide",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  hyperfang: {
    exists: true,
    accuracy: true,
    pp: 5,
    critRatio: 7,
    desc: "The user bites the foe with specialized front teeth.\nThis will ALWAYS result in a critical hit, and has a\n30% flinch rate, and can't miss. Contact.",
    shortDesc: "The user bites the foe with specialized front teeth.\nThis will ALWAYS result in a critical hit, and has a\n30% flinch rate, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    isNonstandard: null,
    num: 158,
    basePower: 80,
    category: "Physical",
    name: "Hyper Fang",
    priority: 0,
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    id: "hyperfang",
    fullname: "move: Hyper Fang",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  fortify: {
    exists: true,
    num: 159,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Fortify",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Steel",
    target: "self",
    desc: "The user fortifies the metal on its body.\nThis heals the user by 50% of their max HP.\nZ-Effect gives +2 Defense.",
    shortDesc: "The user fortifies the metal on its body.\nThis heals the user by 50% of their max HP.\nZ-Effect gives +2 Defense.",
    flags: {
      snatch: 1
    },
    id: "fortify",
    fullname: "move: Fortify",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  acclimate: {
    exists: true,
    num: 160,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Acclimate",
    pp: 30,
    priority: 4,
    critRatio: 1,
    type: "Normal",
    target: "self",
    desc: "The user changes its type to become the same type\nas the move at the top of the list of moves it knows.\nZ-Effect +1 all stats. +4 Priority.",
    shortDesc: "The user changes its type to become the same type\nas the move at the top of the list of moves it knows.\nZ-Effect +1 all stats. +4 Priority.",
    flags: {
      snatch: 1
    },
    id: "acclimate",
    fullname: "move: Acclimate",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  triattack: {
    exists: true,
    basePower: 35,
    pp: 5,
    desc: "The user fires three volatile beams of energy.\nThis hits 3 times, with each hit having a 10% chance\nto either burn, paralyze or freeze, totaling to 27%.",
    shortDesc: "The user fires three volatile beams of energy.\nThis hits 3 times, with each hit having a 10% chance\nto either burn, paralyze or freeze, totaling to 27%.",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 10,
        volatileStatus: "25"
      }
    ],
    num: 161,
    accuracy: 100,
    category: "Special",
    name: "Tri Attack",
    priority: 0,
    secondary: {
      chance: 20
    },
    target: "normal",
    type: "Normal",
    id: "triattack",
    fullname: "move: Tri Attack",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  superfang: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "The user chomps hard on the target with its sharp\nfront fangs. This cuts the target’s HP in half. Contact.",
    shortDesc: "The user chomps hard on the target with its sharp\nfront fangs. This cuts the target’s HP in half. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    num: 162,
    category: "Physical",
    name: "Super Fang",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "superfang",
    fullname: "move: Super Fang",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  slash: {
    exists: true,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "The target is attacked with a slash of claws, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The target is attacked with a slash of claws, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 163,
    accuracy: 100,
    category: "Physical",
    name: "Slash",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "slash",
    fullname: "move: Slash",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  substitute: {
    exists: true,
    pp: 5,
    desc: "The user makes a decoy using 25% of it's HP. This\ndecoy can absorb most attacks for the user.\nZ-Effect +3 Accuracy.",
    shortDesc: "The user makes a decoy using 25% of it's HP. This\ndecoy can absorb most attacks for the user.\nZ-Effect +3 Accuracy.",
    flags: {
      snatch: 1
    },
    num: 164,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Substitute",
    priority: 0,
    volatileStatus: "substitute",
    condition: {
      onTryPrimaryHitPriority: -1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "substitute",
    fullname: "move: Substitute",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  struggle: {
    exists: true,
    desc: "This attack is used in desperation only if the user\nhas no PP. It has 50% recoil for the user.",
    shortDesc: "This attack is used in desperation only if the user\nhas no PP. It has 50% recoil for the user.",
    flags: {
      contact: 1,
      protect: 1
    },
    zMove: {
      basePower: 1
    },
    num: 165,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Struggle",
    pp: 1,
    noPPBoosts: true,
    priority: 0,
    noSketch: true,
    struggleRecoil: true,
    secondary: null,
    target: "randomNormal",
    type: "Normal",
    id: "struggle",
    fullname: "move: Struggle",
    effectType: "Move",
    kind: "Move",
    gen: 1,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sketch: {
    exists: true,
    priority: 6,
    desc: "Smeargle instantly learns the last used move.\nThis has +6 priority now, because the Z-Effect gives\nSmeargle +1 to all of its stats.",
    shortDesc: "Smeargle instantly learns the last used move.\nThis has +6 priority now, because the Z-Effect gives\nSmeargle +1 to all of its stats.",
    flags: {
      bypasssub: 1
    },
    isNonstandard: null,
    num: 166,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sketch",
    pp: 1,
    noPPBoosts: true,
    noSketch: true,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    id: "sketch",
    fullname: "move: Sketch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  triplekick: {
    exists: true,
    accuracy: true,
    critRatio: 7,
    desc: "This kick ALWAYS lands a critical hit, and won't\nmiss anymore. It's effectively 15, 30 and then 45 BP.\nThis adds up to 90 BP overall. Contact.",
    shortDesc: "This kick ALWAYS lands a critical hit, and won't\nmiss anymore. It's effectively 15, 30 and then 45 BP.\nThis adds up to 90 BP overall. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 175
    },
    isNonstandard: null,
    num: 167,
    basePower: 10,
    category: "Physical",
    name: "Triple Kick",
    pp: 10,
    priority: 0,
    multihit: 3,
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    maxMove: {
      basePower: 80
    },
    id: "triplekick",
    fullname: "move: Triple Kick",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  thief: {
    exists: true,
    pp: 15,
    desc: "The user attacks and steals the target’s held item\nsimultaneously. The user can’t steal anything if it\nalready holds an item. Contact.",
    shortDesc: "The user attacks and steals the target’s held item\nsimultaneously. The user can’t steal anything if it\nalready holds an item. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 168,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Thief",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "thief",
    fullname: "move: Thief",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  spiderweb: {
    exists: true,
    priority: 4,
    desc: "The user ensnares the target within it's web. This\nhas +4 priority, prevents the foe from switching, and\ndrops Defense & Evasion by 3. Z-Effect +1 all stats.",
    shortDesc: "The user ensnares the target within it's web. This\nhas +4 priority, prevents the foe from switching, and\ndrops Defense & Evasion by 3. Z-Effect +1 all stats.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -4
        }
      },
      {
        chance: 100,
        boosts: {
          evasion: -4
        }
      }
    ],
    isNonstandard: null,
    num: 169,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spider Web",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "spiderweb",
    fullname: "move: Spider Web",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mindreader: {
    exists: true,
    type: "Psychic",
    desc: "The user senses the target’s movements with its\nmind to ensure its next attack does not miss\nthe target. Z-Effect +3 Sp. Atk.",
    shortDesc: "The user senses the target’s movements with its\nmind to ensure its next attack does not miss\nthe target. Z-Effect +3 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1
    },
    isNonstandard: null,
    num: 170,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mind Reader",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "mindreader",
    fullname: "move: Mind Reader",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  nightmare: {
    exists: true,
    type: "Dark",
    desc: "The user inflicts the foe with a horrible nightmare\nif it's asleep, making it lose 25% of it's HP per turn.\nZ-Effect +1 all stats.",
    shortDesc: "The user inflicts the foe with a horrible nightmare\nif it's asleep, making it lose 25% of it's HP per turn.\nZ-Effect +1 all stats.",
    flags: {
      mirror: 1,
      protect: 1
    },
    isNonstandard: null,
    num: 171,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Nightmare",
    pp: 15,
    priority: 0,
    volatileStatus: "nightmare",
    condition: {
      noCopy: true,
      onResidualOrder: 11
    },
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "nightmare",
    fullname: "move: Nightmare",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flamewheel: {
    exists: true,
    pp: 15,
    desc: "The user cloaks itself in fire and charges at the\ntarget spinning.This boosts the user's Speed by 1.\nContact.",
    shortDesc: "The user cloaks itself in fire and charges at the\ntarget spinning.This boosts the user's Speed by 1.\nContact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    num: 172,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Flame Wheel",
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "flamewheel",
    fullname: "move: Flame Wheel",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  snore: {
    exists: true,
    basePower: 60,
    pp: 10,
    desc: "This attack can be used only if the user is asleep.\nThe harsh noise will ALWAYS flinch the target.",
    shortDesc: "This attack can be used only if the user is asleep.\nThe harsh noise will ALWAYS flinch the target.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    num: 173,
    accuracy: 100,
    category: "Special",
    name: "Snore",
    priority: 0,
    sleepUsable: true,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    id: "snore",
    fullname: "move: Snore",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  conjure: {
    exists: true,
    num: 174,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Conjure",
    pp: 2,
    priority: 0,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user gathers energy from the \"other side.\"\nThis boosts the user's Defense & Sp. Atk by 1.\nZ-Effect gives +2 Sp. Def. Only works on Ghost types.",
    shortDesc: "The user gathers energy from the \"other side.\"\nThis boosts the user's Defense & Sp. Atk by 1.\nZ-Effect gives +2 Sp. Def. Only works on Ghost types.",
    flags: {
      dance: 1,
      mirror: 1,
      reflectable: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: 1
        }
      },
      {
        chance: 100,
        boosts: {
          def: 1
        }
      }
    ],
    noPPBoosts: true,
    id: "conjure",
    fullname: "move: Conjure",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flail: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "The user flails about aimlessly to attack. The less HP\nthe user has, the greater the move’s power. This\ncannot miss, and makes contact.",
    shortDesc: "The user flails about aimlessly to attack. The less HP\nthe user has, the greater the move’s power. This\ncannot miss, and makes contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    num: 175,
    category: "Physical",
    name: "Flail",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "flail",
    fullname: "move: Flail",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  accustom: {
    exists: true,
    num: 176,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Accustom",
    pp: 30,
    priority: 4,
    critRatio: 1,
    type: "Normal",
    target: "normal",
    desc: "The user changes its type to make itself resistant to\nthe type of the attack the opponent used last.\nZ-Effect +1 all stats. +4 Priority.",
    shortDesc: "The user changes its type to make itself resistant to\nthe type of the attack the opponent used last.\nZ-Effect +1 all stats. +4 Priority.",
    flags: {
      bypasssub: 1
    },
    id: "accustom",
    fullname: "move: Accustom",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aeroblast: {
    exists: true,
    basePower: 65,
    pp: 10,
    critRatio: 7,
    target: "normal",
    desc: "A fierce vortex of air is shot at the target.\nThis ALWAYS results in a critical hit.\nThis is now a Sound Move.",
    shortDesc: "A fierce vortex of air is shot at the target.\nThis ALWAYS results in a critical hit.\nThis is now a Sound Move.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    willCrit: true,
    zMove: {
      basePower: 175
    },
    isNonstandard: null,
    num: 177,
    accuracy: 95,
    category: "Special",
    name: "Aeroblast",
    priority: 0,
    secondary: null,
    type: "Flying",
    id: "aeroblast",
    fullname: "move: Aeroblast",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  cottonspore: {
    exists: true,
    pp: 10,
    desc: "The user releases cotton-like spores that cling to\nthe foes, lowering Speed by 2, and Sp. Atk by 1.\nZ-Effect gives the user +3 Defense.",
    shortDesc: "The user releases cotton-like spores that cling to\nthe foes, lowering Speed by 2, and Sp. Atk by 1.\nZ-Effect gives the user +3 Defense.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 178,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Cotton Spore",
    priority: 0,
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "cottonspore",
    fullname: "move: Cotton Spore",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  reversal: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "An all-out attack that becomes more powerful the\nless HP the user has. This can't miss. Contact.",
    shortDesc: "An all-out attack that becomes more powerful the\nless HP the user has. This can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    num: 179,
    category: "Physical",
    name: "Reversal",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "reversal",
    fullname: "move: Reversal",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  spitefulspell: {
    exists: true,
    num: 180,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Spiteful Spell",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user casts a spiteful spell on the foe, preventing\nthe foe from using Fairy moves for 5 turns, as well\nas removing 4 PP from their last used move.",
    shortDesc: "The user casts a spiteful spell on the foe, preventing\nthe foe from using Fairy moves for 5 turns, as well\nas removing 4 PP from their last used move.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "24"
      }
    ],
    id: "spitefulspell",
    fullname: "move: Spiteful Spell",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  frostflurry: {
    exists: true,
    num: 181,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Frost Flurry",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Ice",
    target: "allAdjacentFoes",
    desc: "The user attacks with a rapid flurry of frost. This\nattack has +1 priority, and can't miss.",
    shortDesc: "The user attacks with a rapid flurry of frost. This\nattack has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    id: "frostflurry",
    fullname: "move: Frost Flurry",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  protect: {
    exists: true,
    priority: 6,
    desc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect resets lowered stats.",
    shortDesc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect resets lowered stats.",
    flags: {},
    num: 182,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Protect",
    pp: 10,
    stallingMove: true,
    volatileStatus: "protect",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "protect",
    fullname: "move: Protect",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  machpunch: {
    exists: true,
    accuracy: true,
    basePower: 45,
    pp: 20,
    desc: "The user throws a punch at blinding speed. This\nattack has +1 priority, and can't miss. Contact.",
    shortDesc: "The user throws a punch at blinding speed. This\nattack has +1 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    num: 183,
    category: "Physical",
    name: "Mach Punch",
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "machpunch",
    fullname: "move: Mach Punch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    }
  },
  scaryface: {
    exists: true,
    type: "Dark",
    desc: "The user scares the target with a frightening face. \nThis drops Attack AND Speed by 2, and inflicts a\nsleeping foe with a nightmare. Z-Effect +2 crit rate.",
    shortDesc: "The user scares the target with a frightening face. \nThis drops Attack AND Speed by 2, and inflicts a\nsleeping foe with a nightmare. Z-Effect +2 crit rate.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "9"
      },
      {
        chance: 0,
        boosts: {
          spe: -2
        }
      },
      {
        chance: 0,
        boosts: {
          atk: -2
        }
      }
    ],
    num: 184,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Scary Face",
    pp: 10,
    priority: 0,
    boosts: {
      spe: -2
    },
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "scaryface",
    fullname: "move: Scary Face",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wickedblow: {
    exists: true,
    num: 185,
    accuracy: 90,
    basePower: 80,
    category: "Physical",
    name: "Wicked Blow",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Dark",
    target: "normal",
    desc: "The user strikes the target with a wicked blow. This\nattack always results in a critical hit. Contact.\nThis attack bypasses Protect.",
    shortDesc: "The user strikes the target with a wicked blow. This\nattack always results in a critical hit. Contact.\nThis attack bypasses Protect.",
    flags: {
      contact: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 190
    },
    id: "wickedblow",
    fullname: "move: Wicked Blow",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  charmingkiss: {
    exists: true,
    num: 186,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Charming Kiss",
    pp: 1,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user kisses the foe in a charming, calming manner.\nThis lowers the foe's Attack by 2 in addition to\nputting the foe to sleep for 2 turns. Z-Effect heals.",
    shortDesc: "The user kisses the foe in a charming, calming manner.\nThis lowers the foe's Attack by 2 in addition to\nputting the foe to sleep for 2 turns. Z-Effect heals.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -2
        }
      }
    ],
    noPPBoosts: true,
    id: "charmingkiss",
    fullname: "move: Charming Kiss",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bellydrum: {
    exists: true,
    desc: "The user maximizes its Attack stat in exchange for\n50% of it's max HP. Z-Effect heals user fully.",
    shortDesc: "The user maximizes its Attack stat in exchange for\n50% of it's max HP. Z-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    num: 187,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Belly Drum",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    id: "bellydrum",
    fullname: "move: Belly Drum",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sludgebomb: {
    exists: true,
    basePower: 95,
    desc: "Unsanitary sludge explodes all over the target.\nThis attack poisons 30% of the time.",
    shortDesc: "Unsanitary sludge explodes all over the target.\nThis attack poisons 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    secondaries: [
      {
        chance: 25,
        status: "psn"
      }
    ],
    num: 188,
    accuracy: 100,
    category: "Special",
    name: "Sludge Bomb",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    id: "sludgebomb",
    fullname: "move: Sludge Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 175
    }
  },
  mudfling: {
    exists: true,
    num: 189,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Mud Fling",
    pp: 20,
    priority: 0,
    critRatio: 1,
    type: "Ground",
    target: "normal",
    desc: "The user flings mud at the target, slowing it down.\nThis drops the foe's Speed by one 100% of the time.",
    shortDesc: "The user flings mud at the target, slowing it down.\nThis drops the foe's Speed by one 100% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    id: "mudfling",
    fullname: "move: Mud Fling",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  scumshot: {
    exists: true,
    num: 190,
    accuracy: true,
    basePower: 60,
    category: "Special",
    name: "Scum Shot",
    pp: 1,
    priority: 4,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user rapidly shoots a dark, foul muck at the foe,\nstartling them. This has +4 Priority, and will ALWAYS\nflinch as well as BADLY poison the foe.",
    shortDesc: "The user rapidly shoots a dark, foul muck at the foe,\nstartling them. This has +4 Priority, and will ALWAYS\nflinch as well as BADLY poison the foe.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      },
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    noPPBoosts: true,
    id: "scumshot",
    fullname: "move: Scum Shot",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    }
  },
  spikes: {
    exists: true,
    target: "normal",
    desc: "The user lays a trap of spikes at the opposing side.\nThis damages foes that switch in, for 12-25% of their\nHP depending on how many layers. Z-Effect +3 Defense.",
    shortDesc: "The user lays a trap of spikes at the opposing side.\nThis damages foes that switch in, for 12-25% of their\nHP depending on how many layers. Z-Effect +3 Defense.",
    flags: {
      reflectable: 1
    },
    num: 191,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spikes",
    pp: 20,
    priority: 0,
    sideCondition: "spikes",
    condition: {},
    secondary: null,
    type: "Ground",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "spikes",
    fullname: "move: Spikes",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  zapcannon: {
    exists: true,
    accuracy: 100,
    basePower: 150,
    desc: "The user fires an intensely powerful blast of\nelectricity at the foe. This lowers the user's Sp. Atk\nstat by 2 after use.",
    shortDesc: "The user fires an intensely powerful blast of\nelectricity at the foe. This lowers the user's Sp. Atk\nstat by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 210
    },
    num: 192,
    category: "Special",
    name: "Zap Cannon",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 100,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "zapcannon",
    fullname: "move: Zap Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  investigate: {
    exists: true,
    num: 193,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Investigate",
    pp: 40,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "normal",
    desc: "Gumshoos investigates the target, allowing them to\nbe hit by Normal or Fighting moves, even if they're\na Ghost-type. Z-EFFECT GIVES +3 ATTACK.",
    shortDesc: "Gumshoos investigates the target, allowing them to\nbe hit by Normal or Fighting moves, even if they're\na Ghost-type. Z-EFFECT GIVES +3 ATTACK.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    id: "investigate",
    fullname: "move: Investigate",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  destinybond: {
    exists: true,
    desc: "After using this move, if the user faints, the\nPokemon that landed the knockout hit also faints.\nZ-Effect heals the user's replacement fully.",
    shortDesc: "After using this move, if the user faints, the\nPokemon that landed the knockout hit also faints.\nZ-Effect heals the user's replacement fully.",
    flags: {
      bypasssub: 1
    },
    num: 194,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Destiny Bond",
    pp: 5,
    priority: 0,
    volatileStatus: "destinybond",
    condition: {
      onBeforeMovePriority: -1
    },
    secondary: null,
    target: "self",
    type: "Ghost",
    zMove: {
      effect: "redirect"
    },
    id: "destinybond",
    fullname: "move: Destiny Bond",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  perishsong: {
    exists: true,
    type: "Dark",
    target: "normal",
    desc: "Any Pokemon that hears this sound faints in 3 turns.\nSwitching out removes this timer.\nZ-Effect heals user fully.",
    shortDesc: "Any Pokemon that hears this sound faints in 3 turns.\nSwitching out removes this timer.\nZ-Effect heals user fully.",
    flags: {
      bypasssub: 1
    },
    num: 195,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Perish Song",
    pp: 5,
    priority: 0,
    condition: {
      duration: 4,
      onResidualOrder: 24
    },
    secondary: null,
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "perishsong",
    fullname: "move: Perish Song",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  icywind: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    pp: 20,
    desc: "The user attacks with a gust of freezing air. This\nalways lowers the foe's Speed stat by 1.",
    shortDesc: "The user attacks with a gust of freezing air. This\nalways lowers the foe's Speed stat by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    num: 196,
    category: "Special",
    name: "Icy Wind",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Ice",
    id: "icywind",
    fullname: "move: Icy Wind",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  detect: {
    exists: true,
    pp: 10,
    priority: 6,
    desc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect will heal the user fully while protected.",
    shortDesc: "Enables the user to evade all attacks. Its chance of\nfailing rises if it is used in succession.\nZ-Effect will heal the user fully while protected.",
    flags: {
      snatch: 1
    },
    num: 197,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Detect",
    stallingMove: true,
    volatileStatus: "protect",
    secondary: null,
    target: "self",
    type: "Fighting",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    id: "detect",
    fullname: "move: Detect",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bonerush: {
    exists: true,
    accuracy: true,
    basePower: 50,
    pp: 15,
    priority: 1,
    desc: "The user quickly throws a hard bone at the foe.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly throws a hard bone at the foe.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    num: 198,
    category: "Physical",
    name: "Bone Rush",
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Ground",
    maxMove: {
      basePower: 130
    },
    id: "bonerush",
    fullname: "move: Bone Rush",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lockon: {
    exists: true,
    pp: 1,
    type: "Steel",
    desc: "The user takes sure aim at the target. This ensures\nthe next attack does not miss the target.\nZ-Effect +3 Sp. Atk.",
    shortDesc: "The user takes sure aim at the target. This ensures\nthe next attack does not miss the target.\nZ-Effect +3 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1
    },
    noPPBoosts: true,
    num: 199,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Lock-On",
    priority: 0,
    condition: {
      noCopy: true,
      duration: 2,
      onSourceInvulnerabilityPriority: 1
    },
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "lockon",
    fullname: "move: Lock-On",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  outrage: {
    exists: true,
    basePower: 130,
    pp: 5,
    desc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    shortDesc: "The user rampages and attacks for two to three\nturns. The user then becomes confused. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 200,
    accuracy: 100,
    category: "Physical",
    name: "Outrage",
    priority: 0,
    self: {
      volatileStatus: "lockedmove"
    },
    secondary: null,
    target: "randomNormal",
    type: "Dragon",
    id: "outrage",
    fullname: "move: Outrage",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 195
    }
  },
  sandstorm: {
    exists: true,
    pp: 5,
    priority: 4,
    target: "normal",
    desc: "The user summons a sandstorm.\nZ-Effect gives +2 Defense.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons a sandstorm.\nZ-Effect gives +2 Defense.\nTHIS HAS +4 PRIORITY.",
    flags: {},
    num: 201,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sandstorm",
    weather: "Sandstorm",
    secondary: null,
    type: "Rock",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "sandstorm",
    fullname: "move: Sandstorm",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gigadrain: {
    exists: true,
    desc: "A powerful nutrient-draining attack. The user’s HP is\nrestored by 50% of the damage taken by the target.",
    shortDesc: "A powerful nutrient-draining attack. The user’s HP is\nrestored by 50% of the damage taken by the target.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 202,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Giga Drain",
    pp: 10,
    priority: 0,
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "gigadrain",
    fullname: "move: Giga Drain",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  endure: {
    exists: true,
    priority: 6,
    desc: "The user endures any attack with at least 1 HP.\nIts chance of failing rises if it is used in succession.\nZ-Effect +2 Speed.",
    shortDesc: "The user endures any attack with at least 1 HP.\nIts chance of failing rises if it is used in succession.\nZ-Effect +2 Speed.",
    flags: {},
    num: 203,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Endure",
    pp: 10,
    stallingMove: true,
    volatileStatus: "endure",
    condition: {
      duration: 1,
      onDamagePriority: -10
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "endure",
    fullname: "move: Endure",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  charm: {
    exists: true,
    pp: 5,
    desc: "The user gazes at the target rather charmingly,\nmaking it less wary. This lowers their Attack by 2.\nZ-Charm +2 Attack.",
    shortDesc: "The user gazes at the target rather charmingly,\nmaking it less wary. This lowers their Attack by 2.\nZ-Charm +2 Attack.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: -2
        }
      }
    ],
    num: 204,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Charm",
    priority: 0,
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "charm",
    fullname: "move: Charm",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rollout: {
    exists: true,
    pp: 5,
    desc: "The user continually rolls into the target over five\nturns. It becomes more powerful each time it hits. Contact.",
    shortDesc: "The user continually rolls into the target over five\nturns. It becomes more powerful each time it hits. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 205,
    accuracy: 90,
    basePower: 30,
    category: "Physical",
    name: "Rollout",
    priority: 0,
    condition: {
      duration: 1,
      onLockMove: "rollout"
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "rollout",
    fullname: "move: Rollout",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  falsestrike: {
    exists: true,
    num: 206,
    accuracy: true,
    basePower: 45,
    category: "Physical",
    name: "False Strike",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Dragon",
    target: "normal",
    desc: "The user feigns a strike that will never faint the\ntarget. In exchange, this boosts the user's Attack\nand Accuracy by 1 after use. Can't miss. Contact.",
    shortDesc: "The user feigns a strike that will never faint the\ntarget. In exchange, this boosts the user's Attack\nand Accuracy by 1 after use. Can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      },
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    id: "falsestrike",
    fullname: "move: False Strike",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  swagger: {
    exists: true,
    accuracy: 100,
    type: "Dark",
    desc: "The user enrages and confuses the target for 3 turns.\nThis raises their Attack by 2, making them hit\nthemselves for more damage. Z-Effect +2 Attack.",
    shortDesc: "The user enrages and confuses the target for 3 turns.\nThis raises their Attack by 2, making them hit\nthemselves for more damage. Z-Effect +2 Attack.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "tox"
      },
      {
        chance: 0,
        boosts: {
          atk: 2
        }
      }
    ],
    num: 207,
    basePower: 0,
    category: "Status",
    name: "Swagger",
    pp: 15,
    priority: 0,
    volatileStatus: "confusion",
    boosts: {
      atk: 2
    },
    secondary: null,
    target: "normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "swagger",
    fullname: "move: Swagger",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  milkdrink: {
    exists: true,
    priority: 4,
    desc: "Miltank drinks its own milk, healing to FULL HP.\nZ-Effect gives +2 Defense.\nThis also has +4 PRIORITY. Yummy.",
    shortDesc: "Miltank drinks its own milk, healing to FULL HP.\nZ-Effect gives +2 Defense.\nThis also has +4 PRIORITY. Yummy.",
    flags: {
      heal: 1,
      snatch: 1
    },
    pp: 10,
    num: 208,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Milk Drink",
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "milkdrink",
    fullname: "move: Milk Drink",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spark: {
    exists: true,
    accuracy: true,
    basePower: 55,
    pp: 10,
    priority: 2,
    desc: "The user, charged with electricity, rapidly dashes at\nthe target. This has +2 priority, and can't miss.\nContact.",
    shortDesc: "The user, charged with electricity, rapidly dashes at\nthe target. This has +2 priority, and can't miss.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 209,
    category: "Physical",
    name: "Spark",
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "spark",
    fullname: "move: Spark",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  furycutter: {
    exists: true,
    accuracy: 90,
    basePower: 35,
    desc: "The target is slashed with scythes or claws. This\nmove doubles in power if used in sucession. Contact.",
    shortDesc: "The target is slashed with scythes or claws. This\nmove doubles in power if used in sucession. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 210,
    category: "Physical",
    name: "Fury Cutter",
    pp: 20,
    priority: 0,
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "furycutter",
    fullname: "move: Fury Cutter",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  steelwing: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    pp: 10,
    desc: "The user hardens its wings and strikes the foe.\nThis ALWAYS boosts the user's Defense by 1 after use.\nContact.",
    shortDesc: "The user hardens its wings and strikes the foe.\nThis ALWAYS boosts the user's Defense by 1 after use.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            def: 1
          }
        }
      }
    ],
    num: 211,
    category: "Physical",
    name: "Steel Wing",
    priority: 0,
    secondary: {
      chance: 10,
      self: {
        boosts: {
          def: 1
        }
      }
    },
    target: "normal",
    type: "Steel",
    id: "steelwing",
    fullname: "move: Steel Wing",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  mesmereyes: {
    exists: true,
    num: 212,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Mesmer-Eyes",
    pp: 2,
    priority: 0,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "The user mesmerizes the target with it's eyes\nputting it to sleep for 2 turns. Z-Effect +1 Speed.\nThis move fails on Ghost-types.",
    shortDesc: "The user mesmerizes the target with it's eyes\nputting it to sleep for 2 turns. Z-Effect +1 Speed.\nThis move fails on Ghost-types.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    id: "mesmereyes",
    fullname: "move: Mesmer-Eyes",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  attract: {
    exists: true,
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 213,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Attract",
    pp: 15,
    priority: 0,
    volatileStatus: "attract",
    condition: {
      noCopy: true,
      onBeforeMovePriority: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "attract",
    fullname: "move: Attract",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sleeptalk: {
    exists: true,
    priority: 3,
    desc: "While it is asleep, the user randomly uses one of the\nmoves it knows. Z-Effect +2 crit rate.\nThis has +4 Priority.",
    shortDesc: "While it is asleep, the user randomly uses one of the\nmoves it knows. Z-Effect +2 crit rate.\nThis has +4 Priority.",
    flags: {},
    num: 214,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sleep Talk",
    pp: 10,
    sleepUsable: true,
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "crit2"
    },
    id: "sleeptalk",
    fullname: "move: Sleep Talk",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  timeout: {
    exists: true,
    num: 215,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Time Out",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fighting",
    target: "normal",
    desc: "The user calls a time out.\nThis heals the user's side of the field by 50% of\ntheir max HP. Z-Effect gives the user +2 Speed.",
    shortDesc: "The user calls a time out.\nThis heals the user's side of the field by 50% of\ntheir max HP. Z-Effect gives the user +2 Speed.",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    id: "timeout",
    fullname: "move: Time Out",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  "return": {
    exists: true,
    basePower: 1,
    pp: 10,
    desc: "This full-power attack grows more powerful the\nmore the user likes its Trainer, for a max of 102\nbase power. Contact.",
    shortDesc: "This full-power attack grows more powerful the\nmore the user likes its Trainer, for a max of 102\nbase power. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    isNonstandard: null,
    num: 216,
    accuracy: 100,
    category: "Physical",
    name: "Return",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "return",
    fullname: "move: Return",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  present: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 1,
    desc: "Delibird gives the foe a gift that can deal damage, or\nheal them. With NORMALIUM-Z, this becomes 200 BP, and\ngives you +2 to ALL stats BEFORE using TWINKLE TACKLE.",
    shortDesc: "Delibird gives the foe a gift that can deal damage, or\nheal them. With NORMALIUM-Z, this becomes 200 BP, and\ngives you +2 to ALL stats BEFORE using TWINKLE TACKLE.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 250
    },
    noPPBoosts: true,
    num: 217,
    category: "Physical",
    name: "Present",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "present",
    fullname: "move: Present",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  frustration: {
    exists: true,
    basePower: 1,
    pp: 10,
    type: "Dark",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 218,
    accuracy: 100,
    category: "Physical",
    name: "Frustration",
    priority: 0,
    secondary: null,
    target: "normal",
    maxMove: {
      basePower: 130
    },
    id: "frustration",
    fullname: "move: Frustration",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  safeguard: {
    exists: true,
    type: "Psychic",
    target: "normal",
    desc: "The user creates a protective field that prevents\nstatus conditions for five turns.\nZ-Effect heals user fully.",
    shortDesc: "The user creates a protective field that prevents\nstatus conditions for five turns.\nZ-Effect heals user fully.",
    num: 219,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Safeguard",
    pp: 25,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "safeguard",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 3
    },
    secondary: null,
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "safeguard",
    fullname: "move: Safeguard",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  painsplit: {
    exists: true,
    pp: 5,
    type: "Ghost",
    desc: "The user adds its HP to the target’s HP, then equally\nshares the combined HP with the target.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user adds its HP to the target’s HP, then equally\nshares the combined HP with the target.\nZ-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 220,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Pain Split",
    priority: 0,
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "painsplit",
    fullname: "move: Pain Split",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  infernalparade: {
    exists: true,
    num: 221,
    accuracy: 70,
    basePower: 130,
    category: "Special",
    name: "Infernal Parade",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user attacks the foe with an infernal flame\nfueled by spiritual energy. This attack leaves the\ntarget with a burn 100% of the time.",
    shortDesc: "The user attacks the foe with an infernal flame\nfueled by spiritual energy. This attack leaves the\ntarget with a burn 100% of the time.",
    flags: {
      bypasssub: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 205
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    id: "infernalparade",
    fullname: "move: Infernal Parade",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  magnitude: {
    exists: true,
    basePower: 1,
    desc: "The user lets off an earthquake of varying magnitude.\nThe average power is 70, with a maximum of 150 and a\nminimum of 10.",
    shortDesc: "The user lets off an earthquake of varying magnitude.\nThe average power is 70, with a maximum of 150 and a\nminimum of 10.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    isNonstandard: null,
    num: 222,
    accuracy: 100,
    category: "Physical",
    name: "Magnitude",
    pp: 30,
    priority: 0,
    secondary: null,
    target: "allAdjacent",
    type: "Ground",
    maxMove: {
      basePower: 140
    },
    id: "magnitude",
    fullname: "move: Magnitude",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  knockoutpunch: {
    exists: true,
    num: 223,
    accuracy: 80,
    basePower: 130,
    category: "Physical",
    name: "Knockout Punch",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fighting",
    target: "normal",
    desc: "The user punches the foe with great force.\nThe resulting fatigue causes the target to fall asleep\non the next turn. Contact. Affected by Rapid Fire.",
    shortDesc: "The user punches the foe with great force.\nThe resulting fatigue causes the target to fall asleep\non the next turn. Contact. Affected by Rapid Fire.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "14"
      }
    ],
    id: "knockoutpunch",
    fullname: "move: Knockout Punch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  megahorn: {
    exists: true,
    accuracy: 100,
    pp: 5,
    desc: "Using its tough and impressive horn, the user rams\ninto the target with no letup. This lowers the user's\ndefensive stats by 1 after use. Contact.",
    shortDesc: "Using its tough and impressive horn, the user rams\ninto the target with no letup. This lowers the user's\ndefensive stats by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    num: 224,
    basePower: 120,
    category: "Physical",
    name: "Megahorn",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "megahorn",
    fullname: "move: Megahorn",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  dragonbreath: {
    exists: true,
    basePower: 75,
    pp: 15,
    desc: "The user exhales a destructive breath of dragon\nenergy. This burns the target 30% of the time.",
    shortDesc: "The user exhales a destructive breath of dragon\nenergy. This burns the target 30% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    num: 225,
    accuracy: 100,
    category: "Special",
    name: "Dragon Breath",
    priority: 0,
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Dragon",
    id: "dragonbreath",
    fullname: "move: Dragon Breath",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  batonpass: {
    exists: true,
    pp: 5,
    priority: -6,
    desc: "The user switches places with a party Pokemon in\nwaiting and passes along any stat changes.\nZ-Effect heals the ally fully. This ALWAYS goes last.",
    shortDesc: "The user switches places with a party Pokemon in\nwaiting and passes along any stat changes.\nZ-Effect heals the ally fully. This ALWAYS goes last.",
    num: 226,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Baton Pass",
    flags: {},
    self: {},
    selfSwitch: "copyvolatile",
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "batonpass",
    fullname: "move: Baton Pass",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  encore: {
    exists: true,
    desc: "The user compels the target to keep using the move\nit encored for three turns. Z-Effect +2 Speed.",
    shortDesc: "The user compels the target to keep using the move\nit encored for three turns. Z-Effect +2 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 227,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Encore",
    pp: 5,
    priority: 0,
    volatileStatus: "encore",
    condition: {
      duration: 3,
      noCopy: true,
      onResidualOrder: 16
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "encore",
    fullname: "move: Encore",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  pursuit: {
    exists: true,
    basePower: 50,
    pp: 15,
    critRatio: 7,
    desc: "The user strikes the target violently. The power of\nthe move doubles if target attempts to switch out.\nThis ALWAYS results in a critical hit. Contact.",
    shortDesc: "The user strikes the target violently. The power of\nthe move doubles if target attempts to switch out.\nThis ALWAYS results in a critical hit. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 150
    },
    isNonstandard: null,
    num: 228,
    accuracy: 100,
    category: "Physical",
    name: "Pursuit",
    priority: 0,
    condition: {
      duration: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "pursuit",
    fullname: "move: Pursuit",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  rapidspin: {
    exists: true,
    basePower: 50,
    pp: 10,
    desc: "A spin attack that can also eliminate the effects of\ntrapping moves, entry hazards and more. This ALWAYS\nsharply raises the user's Speed by 2. Contact.",
    shortDesc: "A spin attack that can also eliminate the effects of\ntrapping moves, entry hazards and more. This ALWAYS\nsharply raises the user's Speed by 2. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 2
          }
        }
      }
    ],
    secondary: null,
    num: 229,
    accuracy: 100,
    category: "Physical",
    name: "Rapid Spin",
    priority: 0,
    target: "normal",
    type: "Normal",
    id: "rapidspin",
    fullname: "move: Rapid Spin",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  sweetscent: {
    exists: true,
    pp: 10,
    type: "Grass",
    desc: "A sweet scent that lowers the opponents Sp. Def and\nSp. Atk by 1. Z-Effect raises user's Accuracy by 3.",
    shortDesc: "A sweet scent that lowers the opponents Sp. Def and\nSp. Atk by 1. Z-Effect raises user's Accuracy by 3.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 0,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 230,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Sweet Scent",
    priority: 0,
    boosts: {
      evasion: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "sweetscent",
    fullname: "move: Sweet Scent",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  irontail: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    pp: 5,
    desc: "The target is slammed with a steel-hard tail.\nThis drops the foe's Defense 50% of the time. Contact.",
    shortDesc: "The target is slammed with a steel-hard tail.\nThis drops the foe's Defense 50% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    num: 231,
    category: "Physical",
    name: "Iron Tail",
    priority: 0,
    secondary: {
      chance: 30,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Steel",
    id: "irontail",
    fullname: "move: Iron Tail",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  laceration: {
    exists: true,
    num: 232,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Laceration",
    pp: 10,
    priority: 0,
    critRatio: 3,
    type: "Steel",
    target: "normal",
    desc: "The foe is slashed with steel-hard claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The foe is slashed with steel-hard claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    id: "laceration",
    fullname: "move: Laceration",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  skirmish: {
    exists: true,
    num: 233,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Skirmish",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Fighting",
    target: "normal",
    desc: "The user picks a fight, roughhousing the foe.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    shortDesc: "The user picks a fight, roughhousing the foe.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    id: "skirmish",
    fullname: "move: Skirmish",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    }
  },
  morningsun: {
    exists: true,
    type: "Fire",
    desc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    flags: {
      defrost: 1,
      snatch: 1
    },
    num: 234,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Morning Sun",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "self",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "morningsun",
    fullname: "move: Morning Sun",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  synthesis: {
    exists: true,
    desc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    num: 235,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Synthesis",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "synthesis",
    fullname: "move: Synthesis",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  moonlight: {
    exists: true,
    desc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of it's max HP. This\nrestores 2/3 of it's max HP in the Sun, and 1/3 in\nother weather. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    num: 236,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Moonlight",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "self",
    type: "Fairy",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "moonlight",
    fullname: "move: Moonlight",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hiddenpower: {
    exists: true,
    isNonstandard: null,
    num: 237,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    realMove: "Hidden Power",
    name: "Hidden Power Water",
    pp: 15,
    priority: 0,
    flags: {
      protect: 1,
      mirror: 1
    },
    secondary: null,
    target: "normal",
    type: "Water",
    id: "hiddenpower",
    fullname: "move: Hidden Power Water",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    shortDesc: "",
    desc: "",
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  crosschop: {
    exists: true,
    accuracy: 100,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "The user delivers a vicous chop with hands, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The user delivers a vicous chop with hands, blades,\nor the like. This has a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 238,
    category: "Physical",
    name: "Cross Chop",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "crosschop",
    fullname: "move: Cross Chop",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  twister: {
    exists: true,
    accuracy: true,
    basePower: 50,
    pp: 15,
    priority: 1,
    desc: "The user quickly whips up a tornado fueled by\ndragon energy. This has +1 Priority, and can't miss.",
    shortDesc: "The user quickly whips up a tornado fueled by\ndragon energy. This has +1 Priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 239,
    category: "Special",
    name: "Twister",
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "allAdjacentFoes",
    type: "Dragon",
    id: "twister",
    fullname: "move: Twister",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  raindance: {
    exists: true,
    priority: 4,
    target: "normal",
    desc: "The user summons rain that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons rain that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    num: 240,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rain Dance",
    pp: 5,
    flags: {},
    weather: "RainDance",
    secondary: null,
    type: "Water",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "raindance",
    fullname: "move: Rain Dance",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sunnyday: {
    exists: true,
    priority: 4,
    target: "normal",
    desc: "The user summons sunlight that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons sunlight that lasts for 5 turns.\nZ-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    flags: {
      defrost: 1
    },
    num: 241,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sunny Day",
    pp: 5,
    weather: "sunnyday",
    secondary: null,
    type: "Fire",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "sunnyday",
    fullname: "move: Sunny Day",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  crunch: {
    exists: true,
    basePower: 85,
    desc: "The user crunches up the target with sharp fangs.\nThis lowers Defense 30% of the time. Contact.",
    shortDesc: "The user crunches up the target with sharp fangs.\nThis lowers Defense 30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 242,
    accuracy: 100,
    category: "Physical",
    name: "Crunch",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Dark",
    id: "crunch",
    fullname: "move: Crunch",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  mirrorcoat: {
    exists: true,
    basePower: 1,
    priority: -6,
    target: "normal",
    desc: "A retaliation move that counters any special attack,\ninflicting double the damage taken.",
    shortDesc: "A retaliation move that counters any special attack,\ninflicting double the damage taken.",
    flags: {
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 243,
    accuracy: 100,
    category: "Special",
    name: "Mirror Coat",
    pp: 20,
    condition: {
      duration: 1,
      noCopy: true,
      onRedirectTargetPriority: -1
    },
    secondary: null,
    type: "Psychic",
    id: "mirrorcoat",
    fullname: "move: Mirror Coat",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  psychup: {
    exists: true,
    priority: 4,
    type: "Psychic",
    desc: "The user hypnotizes itself into copying any stat\nchange made by the target. This has +4 Priority.\nZ-Effect heals user fully.",
    shortDesc: "The user hypnotizes itself into copying any stat\nchange made by the target. This has +4 Priority.\nZ-Effect heals user fully.",
    flags: {
      bypasssub: 1
    },
    num: 244,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Psych Up",
    pp: 10,
    secondary: null,
    target: "normal",
    zMove: {
      effect: "heal"
    },
    id: "psychup",
    fullname: "move: Psych Up",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  extremespeed: {
    exists: true,
    accuracy: true,
    priority: 3,
    desc: "The user charges the target at blinding speed.\nThis has +3 priority, and can't miss. Contact.",
    shortDesc: "The user charges the target at blinding speed.\nThis has +3 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 245,
    basePower: 80,
    category: "Physical",
    name: "Extreme Speed",
    pp: 5,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "extremespeed",
    fullname: "move: Extreme Speed",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  ancientpower: {
    exists: true,
    pp: 10,
    desc: "The user attacks with rocks imbued with a strange\nprimal energy. This ALWAYS lowers BOTH offensive\nstats of the opponent by 1.",
    shortDesc: "The user attacks with rocks imbued with a strange\nprimal energy. This ALWAYS lowers BOTH offensive\nstats of the opponent by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 246,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Ancient Power",
    priority: 0,
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spa: 1,
          spd: 1,
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Rock",
    id: "ancientpower",
    fullname: "move: Ancient Power",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  shadowball: {
    exists: true,
    basePower: 85,
    desc: "The user hurls a shadowy blob at the target.\nThis lowers the target's Sp. Def 20% of the time.",
    shortDesc: "The user hurls a shadowy blob at the target.\nThis lowers the target's Sp. Def 20% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 170
    },
    num: 247,
    accuracy: 100,
    category: "Special",
    name: "Shadow Ball",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 20,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Ghost",
    id: "shadowball",
    fullname: "move: Shadow Ball",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 20,
        boosts: {
          spd: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  futuresight: {
    exists: true,
    basePower: 160,
    pp: 5,
    desc: "The user foresees a very powerful attack that will\nstrike the target 2 turns after this move is used.\nThis bypasses Protect, Substitute, and cannot miss.",
    shortDesc: "The user foresees a very powerful attack that will\nstrike the target 2 turns after this move is used.\nThis bypasses Protect, Substitute, and cannot miss.",
    flags: {
      bypasssub: 1
    },
    zMove: {
      basePower: 220
    },
    num: 248,
    accuracy: 100,
    category: "Special",
    name: "Future Sight",
    priority: 0,
    ignoreImmunity: true,
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "futuresight",
    fullname: "move: Future Sight",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  boulderbash: {
    exists: true,
    num: 249,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Boulder Bash",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Rock",
    target: "normal",
    desc: "The user smashes the foe with a rock-shattering punch.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    shortDesc: "The user smashes the foe with a rock-shattering punch.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    id: "boulderbash",
    fullname: "move: Boulder Bash",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  whirlpool: {
    exists: true,
    basePower: 130,
    pp: 5,
    desc: "The user traps the target in a violent swirling whirlpool\nthat traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The user traps the target in a violent swirling whirlpool\nthat traps foe for 6 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    num: 250,
    accuracy: 85,
    category: "Special",
    name: "Whirlpool",
    priority: 0,
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Water",
    id: "whirlpool",
    fullname: "move: Whirlpool",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  beatup: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "The user gets all party Pokemon to attack the target.\nEach hit uses the user's Attack stat for damage. The\nmath for each hit's power is: base Attack/10, add 5.",
    shortDesc: "The user gets all party Pokemon to attack the target.\nEach hit uses the user's Attack stat for damage. The\nmath for each hit's power is: base Attack/10, add 5.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 6,
    zMove: {
      basePower: 175
    },
    num: 251,
    category: "Physical",
    name: "Beat Up",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "beatup",
    fullname: "move: Beat Up",
    effectType: "Move",
    kind: "Move",
    gen: 2,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  fakeout: {
    exists: true,
    accuracy: true,
    basePower: 45,
    pp: 5,
    priority: 5,
    desc: "A quick and unexpected strike fakes out the target.\nThis has +5 Priority & always flinches- but only works\nthe 1st turn in battle. Contact. BYPASSES PROTECT.",
    shortDesc: "A quick and unexpected strike fakes out the target.\nThis has +5 Priority & always flinches- but only works\nthe 1st turn in battle. Contact. BYPASSES PROTECT.",
    flags: {
      contact: 1,
      mirror: 1
    },
    zMove: {
      basePower: 90
    },
    num: 252,
    category: "Physical",
    name: "Fake Out",
    secondary: {
      chance: 100,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Normal",
    id: "fakeout",
    fullname: "move: Fake Out",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  uproar: {
    exists: true,
    basePower: 120,
    pp: 5,
    type: "Fighting",
    target: "allAdjacentFoes",
    desc: "The user attacks in an uproar for three turns.\nDuring that time, no Pokemon can fall asleep.",
    shortDesc: "The user attacks in an uproar for three turns.\nDuring that time, no Pokemon can fall asleep.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 190
    },
    num: 253,
    accuracy: 100,
    category: "Special",
    name: "Uproar",
    priority: 0,
    self: {
      volatileStatus: "uproar"
    },
    condition: {
      duration: 3,
      onResidualOrder: 28,
      onResidualSubOrder: 1,
      onLockMove: "uproar"
    },
    secondary: null,
    id: "uproar",
    fullname: "move: Uproar",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  stockpile: {
    exists: true,
    pp: 10,
    desc: "The user charges up power and raises both its\nDefense and Sp. Def stats by 1. The move can be\nused three times. Z-Effect heals user fully.",
    shortDesc: "The user charges up power and raises both its\nDefense and Sp. Def stats by 1. The move can be\nused three times. Z-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    num: 254,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Stockpile",
    priority: 0,
    volatileStatus: "stockpile",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "heal"
    },
    id: "stockpile",
    fullname: "move: Stockpile",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spewout: {
    exists: true,
    num: 255,
    accuracy: 100,
    basePower: 1,
    category: "Special",
    name: "Spew Out",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user upchucks its caustic stomach contents.\nFor every Stockpile use, this gains 100 BP, maxing at\n300 BP. This ALWAYS lowers the foe's Sp. Def by 4.",
    shortDesc: "The user upchucks its caustic stomach contents.\nFor every Stockpile use, this gains 100 BP, maxing at\n300 BP. This ALWAYS lowers the foe's Sp. Def by 4.",
    flags: {
      protect: 1
    },
    zMove: {
      basePower: 230
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -4
        }
      }
    ],
    id: "spewout",
    fullname: "move: Spew Out",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  swallow: {
    exists: true,
    priority: 4,
    desc: "The user heals 1/3 for 1 stockpile, 1/2 for 2, and full\nHP for 3 stockpiles. This now has +4 priority.\nZ-Move gives +1 all stats. (Doesn't work with Simple.)",
    shortDesc: "The user heals 1/3 for 1 stockpile, 1/2 for 2, and full\nHP for 3 stockpiles. This now has +4 priority.\nZ-Move gives +1 all stats. (Doesn't work with Simple.)",
    flags: {
      snatch: 1
    },
    num: 256,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Swallow",
    pp: 10,
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "swallow",
    fullname: "move: Swallow",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  heatwave: {
    exists: true,
    accuracy: 95,
    basePower: 65,
    critRatio: 7,
    desc: "The user blows a burning, abrasive wind at the foes.\nThis will ALWAYS result in a critical hit.",
    shortDesc: "The user blows a burning, abrasive wind at the foes.\nThis will ALWAYS result in a critical hit.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    num: 257,
    category: "Special",
    name: "Heat Wave",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "allAdjacentFoes",
    type: "Fire",
    id: "heatwave",
    fullname: "move: Heat Wave",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: [
      {
        chance: 10,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 120
    }
  },
  hail: {
    exists: true,
    pp: 5,
    priority: 4,
    target: "normal",
    desc: "The user summons a hailstorm lasting five turns.\nZ-Effect +2 Defense.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user summons a hailstorm lasting five turns.\nZ-Effect +2 Defense.\nTHIS HAS +4 PRIORITY.",
    isNonstandard: null,
    num: 258,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hail",
    flags: {},
    weather: "hail",
    secondary: null,
    type: "Ice",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "hail",
    fullname: "move: Hail",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  torment: {
    exists: true,
    desc: "The user torments and enrages the target, making it\nincapable of using the same move twice in a row.\nZ-Effect +2 Attack.",
    shortDesc: "The user torments and enrages the target, making it\nincapable of using the same move twice in a row.\nZ-Effect +2 Attack.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 259,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Torment",
    pp: 15,
    priority: 0,
    volatileStatus: "torment",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "torment",
    fullname: "move: Torment",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flatter: {
    exists: true,
    desc: "Flattery is used to confuse the target for 4 turns.\nThis also raises the target’s Sp. Atk by 1.\nZ-Effect gives +3 Sp. Atk.",
    shortDesc: "Flattery is used to confuse the target for 4 turns.\nThis also raises the target’s Sp. Atk by 1.\nZ-Effect gives +3 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: 1
        }
      }
    ],
    num: 260,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Flatter",
    pp: 15,
    priority: 0,
    volatileStatus: "confusion",
    boosts: {
      spa: 1
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "flatter",
    fullname: "move: Flatter",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  willowisp: {
    exists: true,
    accuracy: 90,
    pp: 10,
    desc: "The user shoots a sinister, bluish-white flame at the\ntarget to inflict a burn. Z-Effect +3 Accuracy.",
    shortDesc: "The user shoots a sinister, bluish-white flame at the\ntarget to inflict a burn. Z-Effect +3 Accuracy.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 261,
    basePower: 0,
    category: "Status",
    name: "Will-O-Wisp",
    priority: 0,
    status: "brn",
    secondary: null,
    target: "normal",
    type: "Fire",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "willowisp",
    fullname: "move: Will-O-Wisp",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  memento: {
    exists: true,
    priority: 4,
    desc: "The user faints when using this move. In return, this\nlowers the target's Sp. Atk and Attack by 2.\n+4 Priority. Z-Effect heals user's replacement fully.",
    shortDesc: "The user faints when using this move. In return, this\nlowers the target's Sp. Atk and Attack by 2.\n+4 Priority. Z-Effect heals user's replacement fully.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 262,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Memento",
    pp: 10,
    boosts: {
      atk: -2,
      spa: -2
    },
    selfdestruct: "ifHit",
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      effect: "healreplacement"
    },
    id: "memento",
    fullname: "move: Memento",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  facade: {
    exists: true,
    basePower: 75,
    desc: "This attack's power is doubled if the user is\nburnt, poisoned or paralyzed. Contact.",
    shortDesc: "This attack's power is doubled if the user is\nburnt, poisoned or paralyzed. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 263,
    accuracy: 100,
    category: "Physical",
    name: "Facade",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "facade",
    fullname: "move: Facade",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  focuspunch: {
    exists: true,
    accuracy: true,
    basePower: 120,
    pp: 10,
    priority: -5,
    critRatio: 7,
    desc: "The user focuses its mind and fires a massive punch\nat the end of the turn if they weren't hit that turn.\nThis ALWAYS crits, and gives +1 Accuracy. Contact.",
    shortDesc: "The user focuses its mind and fires a massive punch\nat the end of the turn if they weren't hit that turn.\nThis ALWAYS crits, and gives +1 Accuracy. Contact.",
    flags: {
      contact: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 230
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 264,
    category: "Physical",
    name: "Focus Punch",
    condition: {
      duration: 1
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "focuspunch",
    fullname: "move: Focus Punch",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  smellingsalts: {
    exists: true,
    accuracy: true,
    basePower: 75,
    pp: 1,
    priority: 4,
    type: "Fighting",
    desc: "The user smacks the foe, resuscitating them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is paralyzed. Contact.",
    shortDesc: "The user smacks the foe, resuscitating them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is paralyzed. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 265,
    category: "Physical",
    name: "Smelling Salts",
    secondary: null,
    target: "normal",
    id: "smellingsalts",
    fullname: "move: Smelling Salts",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  followme: {
    exists: true,
    pp: 5,
    priority: 6,
    desc: "The user draws attention to itself, making all targets\ntake aim only at the user. Z-Effect heals user fully.",
    shortDesc: "The user draws attention to itself, making all targets\ntake aim only at the user. Z-Effect heals user fully.",
    flags: {},
    num: 266,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Follow Me",
    volatileStatus: "followme",
    condition: {
      duration: 1,
      onFoeRedirectTargetPriority: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "followme",
    fullname: "move: Follow Me",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  naturepower: {
    exists: true,
    desc: "The user summons energy from the environment.\nThis changes into a move based on the terrain, like\nPsychic, Moonblast, Thunderbolt & Energy Ball.",
    shortDesc: "The user summons energy from the environment.\nThis changes into a move based on the terrain, like\nPsychic, Moonblast, Thunderbolt & Energy Ball.",
    flags: {},
    isNonstandard: null,
    num: 267,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Nature Power",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "naturepower",
    fullname: "move: Nature Power",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  recharge: {
    exists: true,
    num: 268,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Recharge",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Electric",
    target: "self",
    desc: "The user heals itself by 35% of it's max HP, and\nDOUBLES the power of it's next used Electric attack.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user heals itself by 35% of it's max HP, and\nDOUBLES the power of it's next used Electric attack.\nZ-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    id: "recharge",
    fullname: "move: Recharge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  taunt: {
    exists: true,
    desc: "The target is taunted into a rage that allows it to use\nonly attack moves for three turns. Z-Effect +2 Attack.",
    shortDesc: "The target is taunted into a rage that allows it to use\nonly attack moves for three turns. Z-Effect +2 Attack.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "11"
      }
    ],
    num: 269,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Taunt",
    pp: 20,
    priority: 0,
    volatileStatus: "taunt",
    condition: {
      duration: 3,
      onResidualOrder: 15,
      onBeforeMovePriority: 5
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "taunt",
    fullname: "move: Taunt",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  helpinghand: {
    exists: true,
    priority: 6,
    desc: "The user assists an ally by boosting the power of\nthat ally’s attack by 1.5x.\nThis has +6 Priority. Z-Effect heals the user fully.",
    shortDesc: "The user assists an ally by boosting the power of\nthat ally’s attack by 1.5x.\nThis has +6 Priority. Z-Effect heals the user fully.",
    flags: {
      bypasssub: 1
    },
    num: 270,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Helping Hand",
    pp: 20,
    volatileStatus: "helpinghand",
    condition: {
      duration: 1,
      onBasePowerPriority: 10
    },
    secondary: null,
    target: "adjacentAlly",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "helpinghand",
    fullname: "move: Helping Hand",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  trick: {
    exists: true,
    pp: 1,
    priority: 4,
    desc: "The user catches the target off guard and swaps its\nheld item with its own. Z-Effect +3 Speed.\n+4 Priority.",
    shortDesc: "The user catches the target off guard and swaps its\nheld item with its own. Z-Effect +3 Speed.\n+4 Priority.",
    flags: {
      mirror: 1,
      protect: 1
    },
    noPPBoosts: true,
    num: 271,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Trick",
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "trick",
    fullname: "move: Trick",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  roleplay: {
    exists: true,
    desc: "The user mimics the target completely, copying the\ntarget’s natural Ability. Z-Effect +3 Speed.",
    shortDesc: "The user mimics the target completely, copying the\ntarget’s natural Ability. Z-Effect +3 Speed.",
    flags: {
      bypasssub: 1
    },
    num: 272,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Role Play",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "roleplay",
    fullname: "move: Role Play",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wish: {
    exists: true,
    type: "Fairy",
    desc: "One turn after this move is used, the user’s or its\nreplacement’s HP is restored by half the user’s\nmax HP. Z-Effect +2 Sp. Def.",
    shortDesc: "One turn after this move is used, the user’s or its\nreplacement’s HP is restored by half the user’s\nmax HP. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1,
      sound: 1
    },
    num: 273,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Wish",
    pp: 10,
    priority: 0,
    slotCondition: "Wish",
    condition: {
      duration: 2,
      onResidualOrder: 4
    },
    secondary: null,
    target: "self",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "wish",
    fullname: "move: Wish",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  assist: {
    exists: true,
    pp: 5,
    desc: "The user hurriedly and randomly uses a move among\nthose known by ally Pokemon.\nZ-Effect +1 all stats before attacking with a Z-Move.",
    shortDesc: "The user hurriedly and randomly uses a move among\nthose known by ally Pokemon.\nZ-Effect +1 all stats before attacking with a Z-Move.",
    flags: {},
    isNonstandard: null,
    num: 274,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Assist",
    priority: 0,
    secondary: null,
    target: "self",
    type: "Normal",
    id: "assist",
    fullname: "move: Assist",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ingrain: {
    exists: true,
    pp: 3,
    desc: "The user digs roots in the ground, locking itself on\nthe field & lowering Speed by 5. In exchange, the user\ngains +1 Sp. Atk & Sp. Def & heals 6% HP each turn.",
    shortDesc: "The user digs roots in the ground, locking itself on\nthe field & lowering Speed by 5. In exchange, the user\ngains +1 Sp. Atk & Sp. Def & heals 6% HP each turn.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "21"
      },
      {
        chance: 0,
        boosts: {
          spd: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spa: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spe: -5
        }
      }
    ],
    noPPBoosts: true,
    num: 275,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ingrain",
    priority: 0,
    volatileStatus: "ingrain",
    condition: {
      onResidualOrder: 7
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "ingrain",
    fullname: "move: Ingrain",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  superpower: {
    exists: true,
    basePower: 150,
    desc: "The user attacks with overwhelming physical force.\nIn exchange, the user's Attack drops by 2 after use.\nContact.",
    shortDesc: "The user attacks with overwhelming physical force.\nIn exchange, the user's Attack drops by 2 after use.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        atk: -2
      }
    },
    zMove: {
      basePower: 210
    },
    num: 276,
    accuracy: 100,
    category: "Physical",
    name: "Superpower",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "superpower",
    fullname: "move: Superpower",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  magiccoat: {
    exists: true,
    desc: "A barrier reflects back to the target moves like\nLeech Seed and moves that damage status.\n+6 Priority. Z-Effect +3 Sp. Def.",
    shortDesc: "A barrier reflects back to the target moves like\nLeech Seed and moves that damage status.\n+6 Priority. Z-Effect +3 Sp. Def.",
    isNonstandard: null,
    num: 277,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magic Coat",
    pp: 15,
    priority: 4,
    flags: {},
    volatileStatus: "magiccoat",
    condition: {
      duration: 1,
      onTryHitPriority: 2
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 2
      }
    },
    id: "magiccoat",
    fullname: "move: Magic Coat",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  recycle: {
    exists: true,
    priority: 6,
    desc: "The user recycles a held item that has been used in\nbattle so it can be used again.\n+6 Priority. Z-Effect heals user fully.",
    shortDesc: "The user recycles a held item that has been used in\nbattle so it can be used again.\n+6 Priority. Z-Effect heals user fully.",
    num: 278,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Recycle",
    pp: 10,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "recycle",
    fullname: "move: Recycle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ragingfury: {
    exists: true,
    num: 279,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Raging Fury",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The user unleashes its burning rage onto the foe.\nRaises the user's Attack by 1 after use, & can't miss.\nIf the user was attacked this turn, the power DOUBLES.",
    shortDesc: "The user unleashes its burning rage onto the foe.\nRaises the user's Attack by 1 after use, & can't miss.\nIf the user was attacked this turn, the power DOUBLES.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    id: "ragingfury",
    fullname: "move: Raging Fury",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  brickbreak: {
    exists: true,
    basePower: 85,
    desc: "The user attacks with a hard chop. It can also break\nbarriers, such as Light Screen and Reflect. Contact.",
    shortDesc: "The user attacks with a hard chop. It can also break\nbarriers, such as Light Screen and Reflect. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    num: 280,
    accuracy: 100,
    category: "Physical",
    name: "Brick Break",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "brickbreak",
    fullname: "move: Brick Break",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  yawn: {
    exists: true,
    desc: "The user lets loose a huge yawn that lulls the target\ninto falling asleep on the next turn.\nZ-Effect heals user fully.",
    shortDesc: "The user lets loose a huge yawn that lulls the target\ninto falling asleep on the next turn.\nZ-Effect heals user fully.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 281,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Yawn",
    pp: 10,
    priority: 0,
    volatileStatus: "yawn",
    condition: {
      noCopy: true,
      duration: 2,
      onResidualOrder: 23
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "yawn",
    fullname: "move: Yawn",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  knockoff: {
    exists: true,
    basePower: 60,
    pp: 10,
    desc: "The user hits the target’s held item off, and that\nitem can’t be used until the end of the battle. This\nmove's damage is 1.5x if it removes an item. Contact.",
    shortDesc: "The user hits the target’s held item off, and that\nitem can’t be used until the end of the battle. This\nmove's damage is 1.5x if it removes an item. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 282,
    accuracy: 100,
    category: "Physical",
    name: "Knock Off",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "knockoff",
    fullname: "move: Knock Off",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  endeavor: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "This attack move cuts down the target’s HP to equal\nthe user’s current HP. Can't miss. Contact.",
    shortDesc: "This attack move cuts down the target’s HP to equal\nthe user’s current HP. Can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    num: 283,
    category: "Physical",
    name: "Endeavor",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "endeavor",
    fullname: "move: Endeavor",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  eruption: {
    exists: true,
    desc: "The user attacks opposing Pokemon with explosive\nfury. The lower the user’s HP, the lower the\nmove’s power.",
    shortDesc: "The user attacks opposing Pokemon with explosive\nfury. The lower the user’s HP, the lower the\nmove’s power.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 210
    },
    num: 284,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Eruption",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fire",
    id: "eruption",
    fullname: "move: Eruption",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  skillswap: {
    exists: true,
    desc: "The user employs its psychic power to exchange\nAbilities with the target. Z-Effect +3 Speed.",
    shortDesc: "The user employs its psychic power to exchange\nAbilities with the target. Z-Effect +3 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    num: 285,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Skill Swap",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "skillswap",
    fullname: "move: Skill Swap",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  imprison: {
    exists: true,
    priority: 6,
    desc: "The user prevents the foe from using any moves\nthat the user also currently knows.\nZ-Effect gives +1 to all stats. +6 Priority.",
    shortDesc: "The user prevents the foe from using any moves\nthat the user also currently knows.\nZ-Effect gives +1 to all stats. +6 Priority.",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    num: 286,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Imprison",
    pp: 10,
    volatileStatus: "imprison",
    condition: {
      noCopy: true,
      onFoeBeforeMovePriority: 4
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 2
      }
    },
    id: "imprison",
    fullname: "move: Imprison",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  molt: {
    exists: true,
    num: 287,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Molt",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Bug",
    target: "self",
    desc: "The user sheds its skin or exoskeleton.\nThis heals the user by 50% of their max HP.\nZ-Effect gives the user +2 Speed.",
    shortDesc: "The user sheds its skin or exoskeleton.\nThis heals the user by 50% of their max HP.\nZ-Effect gives the user +2 Speed.",
    flags: {
      snatch: 1
    },
    id: "molt",
    fullname: "move: Molt",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grudge: {
    exists: true,
    target: "normal",
    desc: "Banette vindictively braces itself. If Banette faints,\nthe move that knocked it out will lost all PP.\n+4 Priority. Z-Effect gives Banette +1 all stats.",
    shortDesc: "Banette vindictively braces itself. If Banette faints,\nthe move that knocked it out will lost all PP.\n+4 Priority. Z-Effect gives Banette +1 all stats.",
    isNonstandard: null,
    num: 288,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Grudge",
    pp: 5,
    priority: 0,
    flags: {
      bypasssub: 1
    },
    volatileStatus: "grudge",
    condition: {
      onBeforeMovePriority: 100
    },
    secondary: null,
    type: "Ghost",
    zMove: {
      effect: "redirect"
    },
    id: "grudge",
    fullname: "move: Grudge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  snatch: {
    exists: true,
    priority: 6,
    desc: "The user steals the effects of any attempts to use a\nhealing, stat-changing or other similar moves.\n+6 Priority. Z-Effect gives +3 Speed.",
    shortDesc: "The user steals the effects of any attempts to use a\nhealing, stat-changing or other similar moves.\n+6 Priority. Z-Effect gives +3 Speed.",
    flags: {
      bypasssub: 1
    },
    isNonstandard: null,
    num: 289,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Snatch",
    pp: 10,
    volatileStatus: "snatch",
    condition: {
      duration: 1,
      onAnyPrepareHitPriority: -1
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "snatch",
    fullname: "move: Snatch",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  secretpower: {
    exists: true,
    basePower: 80,
    desc: "This odd move has a 50% chance to do various things.\nThe effect changes based on your surroundings,\nincluding Psychic, Electric, Misty and Grassy Terrain.",
    shortDesc: "This odd move has a 50% chance to do various things.\nThe effect changes based on your surroundings,\nincluding Psychic, Electric, Misty and Grassy Terrain.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    isNonstandard: null,
    num: 290,
    accuracy: 100,
    category: "Physical",
    name: "Secret Power",
    pp: 20,
    priority: 0,
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Normal",
    id: "secretpower",
    fullname: "move: Secret Power",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  dive: {
    exists: true,
    pp: 15,
    desc: "The user dives underwater, striking on the 2nd turn.\nThis boosts the user's Accuracy by 1 after use. Contact.\nBypasses protect.",
    shortDesc: "The user dives underwater, striking on the 2nd turn.\nThis boosts the user's Accuracy by 1 after use. Contact.\nBypasses protect.",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 291,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dive",
    priority: 0,
    condition: {
      duration: 2
    },
    secondary: null,
    target: "normal",
    type: "Water",
    id: "dive",
    fullname: "move: Dive",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  forcepalm: {
    exists: true,
    num: 292,
    basePower: 40,
    desc: "The user hits the foe hard with open palms, stunning\nthem with a small shockwave. This ALWAYS leaves the foe\nwith paralysis. Contact.",
    shortDesc: "The user hits the foe hard with open palms, stunning\nthem with a small shockwave. This ALWAYS leaves the foe\nwith paralysis. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 80
    },
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    accuracy: 100,
    category: "Physical",
    name: "Force Palm",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "normal",
    type: "Fighting",
    id: "forcepalm",
    fullname: "move: Force Palm",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  camouflage: {
    exists: true,
    priority: 4,
    desc: "The user’s type is changed depending on its\nenvironment, including terrains like Grassy or Misty.\nZ-Effect +1 all stats. +4 Priority.",
    shortDesc: "The user’s type is changed depending on its\nenvironment, including terrains like Grassy or Misty.\nZ-Effect +1 all stats. +4 Priority.",
    isNonstandard: null,
    num: 293,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Camouflage",
    pp: 20,
    flags: {
      snatch: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    id: "camouflage",
    fullname: "move: Camouflage",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powerglow: {
    exists: true,
    num: 294,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Glow",
    pp: 1,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "self",
    desc: "The user flashes an organic light from its body.\nThis boosts the user's Sp. Atk stat by 3 stages.\nZ-Effect gives +2 Sp. Def.",
    shortDesc: "The user flashes an organic light from its body.\nThis boosts the user's Sp. Atk stat by 3 stages.\nZ-Effect gives +2 Sp. Def.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: 3
        }
      }
    ],
    noPPBoosts: true,
    id: "powerglow",
    fullname: "move: Power Glow",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  chloroblast: {
    exists: true,
    num: 295,
    accuracy: 100,
    basePower: 125,
    category: "Special",
    name: "Chloroblast",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The user launches its amassed chlorophyll in a\npowerful blast of light. This deals 25% recoil damage.",
    shortDesc: "The user launches its amassed chlorophyll in a\npowerful blast of light. This deals 25% recoil damage.",
    flags: {
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    id: "chloroblast",
    fullname: "move: Chloroblast",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  featherball: {
    exists: true,
    num: 296,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Feather Ball",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Flying",
    target: "normal",
    desc: "The user fires a concentrated ball of feathers & wind.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user fires a concentrated ball of feathers & wind.\nThis ALWAYS drops the foe's attacking stats by 1.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    id: "featherball",
    fullname: "move: Feather Ball",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  featherdance: {
    exists: true,
    pp: 5,
    desc: "The user performs a dance, covering the target with\nit's feathers, dropping their Attack by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user performs a dance, covering the target with\nit's feathers, dropping their Attack by 2.\nZ-Effect +2 crit rate.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: -2
        }
      }
    ],
    num: 297,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Feather Dance",
    priority: 0,
    boosts: {
      atk: -2
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "featherdance",
    fullname: "move: Feather Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  teeterdance: {
    exists: true,
    desc: "The user performs a wobbly dance that confuses\nthe Pokemon around it for 4 turns.\nZ-Effect +2 Sp. Atk.",
    shortDesc: "The user performs a wobbly dance that confuses\nthe Pokemon around it for 4 turns.\nZ-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 298,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Teeter Dance",
    pp: 20,
    priority: 0,
    volatileStatus: "confusion",
    secondary: null,
    target: "allAdjacent",
    type: "Normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "teeterdance",
    fullname: "move: Teeter Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  blazekick: {
    exists: true,
    accuracy: 95,
    basePower: 95,
    critRatio: 1,
    desc: "The user launches a blazing kick at the target. This\nhas a 20% chance to burn the target. Contact.",
    shortDesc: "The user launches a blazing kick at the target. This\nhas a 20% chance to burn the target. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 20,
        status: "brn"
      },
      {
        chance: 20,
        boosts: {
          def: -1
        }
      }
    ],
    num: 299,
    category: "Physical",
    name: "Blaze Kick",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "blazekick",
    fullname: "move: Blaze Kick",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  mudsport: {
    exists: true,
    priority: 4,
    target: "normal",
    desc: "The user kicks up mud on the battlefield. This\nweakens Electric-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    shortDesc: "The user kicks up mud on the battlefield. This\nweakens Electric-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    flags: {},
    isNonstandard: null,
    num: 300,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mud Sport",
    pp: 15,
    pseudoWeather: "mudsport",
    condition: {
      duration: 5,
      onBasePowerPriority: 1,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 4
    },
    secondary: null,
    type: "Ground",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "mudsport",
    fullname: "move: Mud Sport",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  iceball: {
    exists: true,
    pp: 5,
    desc: "The user attacks the target for five turns.\nThe move’s power increases each time it hits. Contact.",
    shortDesc: "The user attacks the target for five turns.\nThe move’s power increases each time it hits. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    isNonstandard: null,
    num: 301,
    accuracy: 90,
    basePower: 30,
    category: "Physical",
    name: "Ice Ball",
    priority: 0,
    condition: {
      duration: 1,
      onLockMove: "iceball"
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    id: "iceball",
    fullname: "move: Ice Ball",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  needlebash: {
    exists: true,
    num: 302,
    accuracy: 95,
    basePower: 95,
    category: "Physical",
    name: "Needle Bash",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The user attacks by striking the foe with a spiked\nappendage. This flinches 30% of the time. Contact.",
    shortDesc: "The user attacks by striking the foe with a spiked\nappendage. This flinches 30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    id: "needlebash",
    fullname: "move: Needle Bash",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  slackoff: {
    exists: true,
    pp: 5,
    desc: "The user slacks off, restoring its own HP 50% of the\nuser's max HP. Z-Effect +2 Defense.",
    shortDesc: "The user slacks off, restoring its own HP 50% of the\nuser's max HP. Z-Effect +2 Defense.",
    flags: {
      snatch: 1
    },
    num: 303,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Slack Off",
    priority: 0,
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "slackoff",
    fullname: "move: Slack Off",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hypervoice: {
    exists: true,
    basePower: 95,
    desc: "The user lets loose a horribly echoing shout with\nthe power to inflict damage.",
    shortDesc: "The user lets loose a horribly echoing shout with\nthe power to inflict damage.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    num: 304,
    accuracy: 100,
    category: "Special",
    name: "Hyper Voice",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Normal",
    id: "hypervoice",
    fullname: "move: Hyper Voice",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  poisonfang: {
    exists: true,
    basePower: 75,
    desc: "The user bites the target with toxic fangs. This has a\n50% chance to badly poison the foe. Contact.",
    shortDesc: "The user bites the target with toxic fangs. This has a\n50% chance to badly poison the foe. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 50,
        status: "psn"
      }
    ],
    num: 305,
    accuracy: 100,
    category: "Physical",
    name: "Poison Fang",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 50,
      status: "tox"
    },
    target: "normal",
    type: "Poison",
    id: "poisonfang",
    fullname: "move: Poison Fang",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  jaggededge: {
    exists: true,
    num: 306,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Jagged Edge",
    pp: 10,
    priority: 0,
    critRatio: 3,
    type: "Rock",
    target: "normal",
    desc: "The target is slashed with jagged claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    shortDesc: "The target is slashed with jagged claws, blades, or\nthe like. This has a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    id: "jaggededge",
    fullname: "move: Jagged Edge",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  blastburn: {
    exists: true,
    accuracy: 100,
    desc: "The target is razed by a fiery explosion. This drops\nthe user's Sp. Atk by 2 after use.",
    shortDesc: "The target is razed by a fiery explosion. This drops\nthe user's Sp. Atk by 2 after use.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 210
    },
    num: 307,
    basePower: 150,
    category: "Special",
    name: "Blast Burn",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "blastburn",
    fullname: "move: Blast Burn",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  hydrocannon: {
    exists: true,
    accuracy: 100,
    desc: "The target is hit with a watery blast. This drops\nthe user's Sp. Atk by 2 after use.",
    shortDesc: "The target is hit with a watery blast. This drops\nthe user's Sp. Atk by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 210
    },
    num: 308,
    basePower: 150,
    category: "Special",
    name: "Hydro Cannon",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Water",
    id: "hydrocannon",
    fullname: "move: Hydro Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  meteormash: {
    exists: true,
    accuracy: 95,
    basePower: 95,
    type: "Fairy",
    desc: "The target is hit with a punch imbued with fairy\nenergy. This boosts the user's attack 25% of the time.\nContact.",
    shortDesc: "The target is hit with a punch imbued with fairy\nenergy. This boosts the user's attack 25% of the time.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    num: 309,
    category: "Physical",
    name: "Meteor Mash",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 20,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    id: "meteormash",
    fullname: "move: Meteor Mash",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  spook: {
    exists: true,
    num: 310,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Spook",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user quickly jumpscares the target. This move\nhas +1 priority, and can't miss.",
    shortDesc: "The user quickly jumpscares the target. This move\nhas +1 priority, and can't miss.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    id: "spook",
    fullname: "move: Spook",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  weatherball: {
    exists: true,
    basePower: 45,
    desc: "The user fires off a ball of energy that doubles in\npower and changes type depending on the weather.\nThis drops Sp. Def by one 50% of the time.",
    shortDesc: "The user fires off a ball of energy that doubles in\npower and changes type depending on the weather.\nThis drops Sp. Def by one 50% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 311,
    accuracy: 100,
    category: "Special",
    name: "Weather Ball",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "weatherball",
    fullname: "move: Weather Ball",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  blossomdance: {
    exists: true,
    num: 312,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Blossom Dance",
    pp: 2,
    priority: 0,
    critRatio: 1,
    type: "Grass",
    target: "self",
    desc: "The user performs a beautiful, elegant dance.\nThis boosts the user's Attack & Sp. Atk stats by 1,\nand boosts the user's Speed by 2. Z-Effect +2 Sp. Def.",
    shortDesc: "The user performs a beautiful, elegant dance.\nThis boosts the user's Attack & Sp. Atk stats by 1,\nand boosts the user's Speed by 2. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: 1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 100,
        boosts: {
          spe: 2
        }
      }
    ],
    noPPBoosts: true,
    id: "blossomdance",
    fullname: "move: Blossom Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  faketears: {
    exists: true,
    desc: "The user feigns crying to fluster the target, lowering\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user feigns crying to fluster the target, lowering\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spd: -2
        }
      }
    ],
    num: 313,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Fake Tears",
    pp: 20,
    priority: 0,
    boosts: {
      spd: -2
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "faketears",
    fullname: "move: Fake Tears",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aircutter: {
    exists: true,
    accuracy: 100,
    pp: 20,
    desc: "The user slashes the air, firing a blade of wind at\nthe foes. This flinches 25% of the time.\nThis also has a +1 (12%) critical hit rate.",
    shortDesc: "The user slashes the air, firing a blade of wind at\nthe foes. This flinches 25% of the time.\nThis also has a +1 (12%) critical hit rate.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    num: 314,
    basePower: 60,
    category: "Special",
    name: "Air Cutter",
    priority: 0,
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Flying",
    id: "aircutter",
    fullname: "move: Air Cutter",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  overheat: {
    exists: true,
    accuracy: 100,
    basePower: 125,
    pp: 10,
    desc: "The user's excess body heat is fired off in a powerful\nattack. This hurts the user, dealing 25% recoil.\nThis has a 25% chance to burn the target.",
    shortDesc: "The user's excess body heat is fired off in a powerful\nattack. This hurts the user, dealing 25% recoil.\nThis has a 25% chance to burn the target.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    secondaries: [
      {
        chance: 25,
        status: "brn"
      }
    ],
    num: 315,
    category: "Special",
    name: "Overheat",
    priority: 0,
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "overheat",
    fullname: "move: Overheat",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  odorsleuth: {
    exists: true,
    desc: "The user identifies the target, allowing Ghost types to\nbe hit with Normal/Fighting moves.\nZ-Effect gives user +2 Attack.",
    shortDesc: "The user identifies the target, allowing Ghost types to\nbe hit with Normal/Fighting moves.\nZ-Effect gives user +2 Attack.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 316,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Odor Sleuth",
    pp: 40,
    priority: 0,
    volatileStatus: "foresight",
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "odorsleuth",
    fullname: "move: Odor Sleuth",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rocktomb: {
    exists: true,
    accuracy: 100,
    desc: "Rocks are hurled at the target, entrapping them. This\ndrops Speed by one 100% of the time.",
    shortDesc: "Rocks are hurled at the target, entrapping them. This\ndrops Speed by one 100% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 317,
    basePower: 60,
    category: "Physical",
    name: "Rock Tomb",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Rock",
    id: "rocktomb",
    fullname: "move: Rock Tomb",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  silvergale: {
    exists: true,
    num: 318,
    accuracy: true,
    basePower: 50,
    category: "Special",
    name: "Silver Gale",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Bug",
    target: "normal",
    desc: "The user rapidly blows powdery scales at the target.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user rapidly blows powdery scales at the target.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "silvergale",
    fullname: "move: Silver Gale",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  metalsound: {
    exists: true,
    accuracy: 100,
    pp: 10,
    desc: "A horrible sound like scraping metal drops the foe's\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    shortDesc: "A horrible sound like scraping metal drops the foe's\nSp. Def by 2. Z-Effect +2 Sp. Atk.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spd: -2
        }
      }
    ],
    num: 319,
    basePower: 0,
    category: "Status",
    name: "Metal Sound",
    priority: 0,
    boosts: {
      spd: -2
    },
    secondary: null,
    target: "normal",
    type: "Steel",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "metalsound",
    fullname: "move: Metal Sound",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grasswhistle: {
    exists: true,
    accuracy: 80,
    pp: 2,
    desc: "The user plays a pleasant melody that lulls the\ntarget into a deep sleep for 2 turns.\nZ-Effect +1 Speed.",
    shortDesc: "The user plays a pleasant melody that lulls the\ntarget into a deep sleep for 2 turns.\nZ-Effect +1 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 320,
    basePower: 0,
    category: "Status",
    name: "Grass Whistle",
    priority: 0,
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "grasswhistle",
    fullname: "move: Grass Whistle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  tickle: {
    exists: true,
    pp: 10,
    desc: "The user tickles the target into laughing, reducing its\nAttack and Defense stats by 1.\nZ-Effect +3 Accuracy.",
    shortDesc: "The user tickles the target into laughing, reducing its\nAttack and Defense stats by 1.\nZ-Effect +3 Accuracy.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 0,
        boosts: {
          def: -1
        }
      }
    ],
    num: 321,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Tickle",
    priority: 0,
    boosts: {
      atk: -1,
      def: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "tickle",
    fullname: "move: Tickle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  cosmicpower: {
    exists: true,
    pp: 3,
    desc: "The user absorbs a mystical power from space to\nraise its Defense and Sp. Def stats by 1.\nZ-Effect +3 Sp. Def.",
    shortDesc: "The user absorbs a mystical power from space to\nraise its Defense and Sp. Def stats by 1.\nZ-Effect +3 Sp. Def.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spd: 1
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 322,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Cosmic Power",
    priority: 0,
    boosts: {
      def: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "cosmicpower",
    fullname: "move: Cosmic Power",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  waterspout: {
    exists: true,
    desc: "The user spouts water to damage opposing\nPokemon. The lower the user’s HP, the lower the\nmove’s power.",
    shortDesc: "The user spouts water to damage opposing\nPokemon. The lower the user’s HP, the lower the\nmove’s power.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 210
    },
    num: 323,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Water Spout",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Water",
    id: "waterspout",
    fullname: "move: Water Spout",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  signalbeam: {
    exists: true,
    basePower: 80,
    desc: "The user attacks with a sinister beam of light.\nThis boosts your Sp. Atk 25% of the time.",
    shortDesc: "The user attacks with a sinister beam of light.\nThis boosts your Sp. Atk 25% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 324,
    accuracy: 100,
    category: "Special",
    name: "Signal Beam",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Bug",
    id: "signalbeam",
    fullname: "move: Signal Beam",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  shadowpunch: {
    exists: true,
    basePower: 80,
    pp: 15,
    desc: "The user throws a punch from the shadows.\nThis can't miss, and bypasses substitute. Contact.",
    shortDesc: "The user throws a punch from the shadows.\nThis can't miss, and bypasses substitute. Contact.",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 325,
    accuracy: true,
    category: "Physical",
    name: "Shadow Punch",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "shadowpunch",
    fullname: "move: Shadow Punch",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  extrasensory: {
    exists: true,
    basePower: 75,
    desc: "The user attacks with an odd, unseeable power.\nThis flinches the target 30% of\nthe time.",
    shortDesc: "The user attacks with an odd, unseeable power.\nThis flinches the target 30% of\nthe time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 326,
    accuracy: 100,
    category: "Special",
    name: "Extrasensory",
    pp: 20,
    priority: 0,
    secondary: {
      chance: 10,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Psychic",
    id: "extrasensory",
    fullname: "move: Extrasensory",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  skyuppercut: {
    exists: true,
    accuracy: 95,
    basePower: 100,
    pp: 10,
    desc: "The user attacks the target with an uppercut thrown\nskyward with force. This flinches 25% of the time.\nContact. Affected by Rapid Fire.",
    shortDesc: "The user attacks the target with an uppercut thrown\nskyward with force. This flinches 25% of the time.\nContact. Affected by Rapid Fire.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    isNonstandard: null,
    num: 327,
    category: "Physical",
    name: "Sky Uppercut",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "skyuppercut",
    fullname: "move: Sky Uppercut",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  scorchingsands: {
    exists: true,
    num: 328,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Scorching Sands",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Ground",
    target: "normal",
    desc: "The user envelops the target with searing hot sands.\nThis burns the target 30% of the time.",
    shortDesc: "The user envelops the target with searing hot sands.\nThis burns the target 30% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    id: "scorchingsands",
    fullname: "move: Scorching Sands",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  sheercold: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 1,
    desc: "The target is fainted with absolute-zero cold.\nThis attack NEVER misses, but can only be used once.\nContact.",
    shortDesc: "The target is fainted with absolute-zero cold.\nThis attack NEVER misses, but can only be used once.\nContact.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 255
    },
    noPPBoosts: true,
    num: 329,
    category: "Special",
    name: "Sheer Cold",
    priority: 0,
    secondary: null,
    ohko: "Ice",
    target: "normal",
    type: "Ice",
    maxMove: {
      basePower: 130
    },
    id: "sheercold",
    fullname: "move: Sheer Cold",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  muddywater: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    pp: 5,
    desc: "The user swamps the field with muddy water.\nThis lowers the opponents Speed 100% of the time.",
    shortDesc: "The user swamps the field with muddy water.\nThis lowers the opponents Speed 100% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    num: 330,
    category: "Special",
    name: "Muddy Water",
    priority: 0,
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Water",
    id: "muddywater",
    fullname: "move: Muddy Water",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  bulletseed: {
    exists: true,
    pp: 15,
    desc: "The user forcefully shoots seeds at the target two\nto five times in a row.",
    shortDesc: "The user forcefully shoots seeds at the target two\nto five times in a row.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    num: 331,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Bullet Seed",
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    id: "bulletseed",
    fullname: "move: Bullet Seed",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aerialace: {
    exists: true,
    basePower: 55,
    pp: 10,
    priority: 2,
    target: "normal",
    desc: "The user confounds the target with speed, then\nslashes. This is +2 priority, and can't miss. Contact.",
    shortDesc: "The user confounds the target with speed, then\nslashes. This is +2 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 332,
    accuracy: true,
    category: "Physical",
    name: "Aerial Ace",
    secondary: null,
    type: "Flying",
    id: "aerialace",
    fullname: "move: Aerial Ace",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  iciclespear: {
    exists: true,
    pp: 15,
    desc: "The user launches sharp icicles at the target two to\nfive times in a row.",
    shortDesc: "The user launches sharp icicles at the target two to\nfive times in a row.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1
    },
    num: 333,
    accuracy: 100,
    basePower: 25,
    category: "Physical",
    name: "Icicle Spear",
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Ice",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    id: "iciclespear",
    fullname: "move: Icicle Spear",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  irondefense: {
    exists: true,
    pp: 2,
    desc: "The user hardens its body’s surface like iron,\nsharply raising its Defense stat.\nZ-Effect heals user fully.",
    shortDesc: "The user hardens its body’s surface like iron,\nsharply raising its Defense stat.\nZ-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 2
        }
      }
    ],
    noPPBoosts: true,
    num: 334,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Iron Defense",
    priority: 0,
    boosts: {
      def: 2
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "irondefense",
    fullname: "move: Iron Defense",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  block: {
    exists: true,
    desc: "Blocks the foe to prevent them from switching.\nZ-Effect +3 Defense.",
    shortDesc: "Blocks the foe to prevent them from switching.\nZ-Effect +3 Defense.",
    flags: {
      mirror: 1,
      reflectable: 1
    },
    num: 335,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Block",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "block",
    fullname: "move: Block",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  howl: {
    exists: true,
    pp: 1,
    desc: "The user howls loudly to raise its spirit, which raises\nits Attack and Sp. Atk stats by 2 stages.\nZ-Effect gives +3 Accuracy.",
    shortDesc: "The user howls loudly to raise its spirit, which raises\nits Attack and Sp. Atk stats by 2 stages.\nZ-Effect gives +3 Accuracy.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: 2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: 2
        }
      }
    ],
    noPPBoosts: true,
    boosts: {
      atk: 1
    },
    target: "self",
    num: 336,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Howl",
    priority: 0,
    secondary: null,
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "howl",
    fullname: "move: Howl",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dragonclaw: {
    exists: true,
    pp: 10,
    critRatio: 3,
    desc: "The user slashes the foe with claws or blades imbued\nwith dragon energy. This has a 50% (+2) crit rate.\nContact.",
    shortDesc: "The user slashes the foe with claws or blades imbued\nwith dragon energy. This has a 50% (+2) crit rate.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 337,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Dragon Claw",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dragon",
    id: "dragonclaw",
    fullname: "move: Dragon Claw",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  frenzyplant: {
    exists: true,
    accuracy: 100,
    category: "Physical",
    desc: "In a frenzy, the user slams the foe with plant matter.\nThis drops the user's attack by 2 after use.",
    shortDesc: "In a frenzy, the user slams the foe with plant matter.\nThis drops the user's attack by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        atk: -2
      }
    },
    zMove: {
      basePower: 210
    },
    num: 338,
    basePower: 150,
    name: "Frenzy Plant",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "frenzyplant",
    fullname: "move: Frenzy Plant",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  bulkup: {
    exists: true,
    pp: 3,
    desc: "The user tenses its muscles to bulk up its body,\nraising both its Attack and Defense stats by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user tenses its muscles to bulk up its body,\nraising both its Attack and Defense stats by 1.\nZ-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          def: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 339,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Bulk Up",
    priority: 0,
    boosts: {
      atk: 1,
      def: 1
    },
    secondary: null,
    target: "self",
    type: "Fighting",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "bulkup",
    fullname: "move: Bulk Up",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bounce: {
    exists: true,
    accuracy: 100,
    basePower: 75,
    pp: 10,
    target: "normal",
    desc: "The user bounces up high, then drops on the target\non the second turn. This paralyzes the foe 30% of\nthe time. Contact. Bypasses Protect.",
    shortDesc: "The user bounces up high, then drops on the target\non the second turn. This paralyzes the foe 30% of\nthe time. Contact. Bypasses Protect.",
    flags: {
      charge: 1,
      contact: 1,
      gravity: 1,
      mirror: 1
    },
    zMove: {
      basePower: 150
    },
    num: 340,
    category: "Physical",
    name: "Bounce",
    priority: 0,
    condition: {
      duration: 2
    },
    secondary: {
      chance: 30,
      status: "par"
    },
    type: "Flying",
    id: "bounce",
    fullname: "move: Bounce",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  mudshot: {
    exists: true,
    accuracy: true,
    basePower: 45,
    pp: 20,
    priority: 1,
    desc: "The user quickly shoots mud at the target.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly shoots mud at the target.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    num: 341,
    category: "Special",
    name: "Mud Shot",
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Ground",
    id: "mudshot",
    fullname: "move: Mud Shot",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  poisontail: {
    exists: true,
    accuracy: 95,
    basePower: 95,
    pp: 10,
    critRatio: 1,
    desc: "The user pummels the target with a tail steeped in\npoison. This poisons 30% of the time, and has a\n30% flinch rate. Contact.",
    shortDesc: "The user pummels the target with a tail steeped in\npoison. This poisons 30% of the time, and has a\n30% flinch rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 30,
        status: "psn"
      },
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 342,
    category: "Physical",
    name: "Poison Tail",
    priority: 0,
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    id: "poisontail",
    fullname: "move: Poison Tail",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  covet: {
    exists: true,
    type: "Fairy",
    desc: "The user endearingly approaches the target, then\nsteals the target's held item. The user can't steal\nan item if it already holds one. Contact.",
    shortDesc: "The user endearingly approaches the target, then\nsteals the target's held item. The user can't steal\nan item if it already holds one. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    num: 343,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Covet",
    pp: 25,
    priority: 0,
    secondary: null,
    target: "normal",
    id: "covet",
    fullname: "move: Covet",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  volttackle: {
    exists: true,
    basePower: 125,
    pp: 10,
    desc: "The user electrifies itself and charges the target\naggressively. This deals 25% recoil to the user.\nThis paralyzes the foe 25% of the time. Contact.",
    shortDesc: "The user electrifies itself and charges the target\naggressively. This deals 25% recoil to the user.\nThis paralyzes the foe 25% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 25,
        status: "par"
      }
    ],
    num: 344,
    accuracy: 100,
    category: "Physical",
    name: "Volt Tackle",
    priority: 0,
    secondary: {
      chance: 10,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "volttackle",
    fullname: "move: Volt Tackle",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  magicalleaf: {
    exists: true,
    accuracy: 100,
    pp: 15,
    desc: "The user scatters magical, curious leaves at the foe.\nThis ALWAYS raises the user's Sp. Def by 1 after use.",
    shortDesc: "The user scatters magical, curious leaves at the foe.\nThis ALWAYS raises the user's Sp. Def by 1 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spd: 1
          }
        }
      }
    ],
    num: 345,
    basePower: 60,
    category: "Special",
    name: "Magical Leaf",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "magicalleaf",
    fullname: "move: Magical Leaf",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  watersport: {
    exists: true,
    priority: 4,
    target: "normal",
    desc: "The user soaks the battlefield with water. This\nweakens Fire-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    shortDesc: "The user soaks the battlefield with water. This\nweakens Fire-type moves for five turns.\nZ-Effect +3 Sp. Def. +4 Priority.",
    flags: {},
    isNonstandard: null,
    num: 346,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Water Sport",
    pp: 15,
    pseudoWeather: "watersport",
    condition: {
      duration: 5,
      onBasePowerPriority: 1,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 3
    },
    secondary: null,
    type: "Water",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "watersport",
    fullname: "move: Water Sport",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  calmmind: {
    exists: true,
    pp: 3,
    desc: "The user quietly focuses its mind and calms its\nspirit to raise its Sp. Atk and Sp. Def stats by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user quietly focuses its mind and calms its\nspirit to raise its Sp. Atk and Sp. Def stats by 1.\nZ-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spd: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 347,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Calm Mind",
    priority: 0,
    boosts: {
      spa: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "calmmind",
    fullname: "move: Calm Mind",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  leafblade: {
    exists: true,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "The user slashes the foe with a blade made of a leaf.\nThis has a 50% (+2) crit rate. Contact.",
    shortDesc: "The user slashes the foe with a blade made of a leaf.\nThis has a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 348,
    accuracy: 100,
    category: "Physical",
    name: "Leaf Blade",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "leafblade",
    fullname: "move: Leaf Blade",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  dragondance: {
    exists: true,
    pp: 2,
    desc: "The user vigorously performs a mystic, powerful\ndance that raises its Attack and Speed stats by 1.\nZ-Effect crit rate +2.",
    shortDesc: "The user vigorously performs a mystic, powerful\ndance that raises its Attack and Speed stats by 1.\nZ-Effect crit rate +2.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spe: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 349,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Dragon Dance",
    priority: 0,
    boosts: {
      atk: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Dragon",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "dragondance",
    fullname: "move: Dragon Dance",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rockblast: {
    exists: true,
    accuracy: 100,
    pp: 15,
    desc: "The user hurls hard rocks at the target. Two to five\nrocks are launched in a row.",
    shortDesc: "The user hurls hard rocks at the target. Two to five\nrocks are launched in a row.",
    flags: {
      heal: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    num: 350,
    basePower: 25,
    category: "Physical",
    name: "Rock Blast",
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Rock",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    id: "rockblast",
    fullname: "move: Rock Blast",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  shockwave: {
    exists: true,
    basePower: 55,
    pp: 10,
    priority: 2,
    desc: "The user strikes the target with a rapid wave of\nelectricity. This has +2 priority, and can't miss.",
    shortDesc: "The user strikes the target with a rapid wave of\nelectricity. This has +2 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 351,
    accuracy: true,
    category: "Special",
    name: "Shock Wave",
    secondary: null,
    target: "normal",
    type: "Electric",
    id: "shockwave",
    fullname: "move: Shock Wave",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  waterpulse: {
    exists: true,
    pp: 15,
    target: "normal",
    desc: "The user attacks the foe with a beautiful pulse of\nwater. This ALWAYS drops BOTH of the foe's offensive\nstats by 1 after use.",
    shortDesc: "The user attacks the foe with a beautiful pulse of\nwater. This ALWAYS drops BOTH of the foe's offensive\nstats by 1 after use.",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    num: 352,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Water Pulse",
    priority: 0,
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    type: "Water",
    id: "waterpulse",
    fullname: "move: Water Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  doomdesire: {
    exists: true,
    basePower: 160,
    type: "Dark",
    desc: "The user foresees the target's demise. 2 turns after\nthis move is used, the target is hit with an immense\nblast of dark energy. Bypasses Protect and Substitute.",
    shortDesc: "The user foresees the target's demise. 2 turns after\nthis move is used, the target is hit with an immense\nblast of dark energy. Bypasses Protect and Substitute.",
    flags: {
      bypasssub: 1
    },
    zMove: {
      basePower: 220
    },
    isNonstandard: null,
    num: 353,
    accuracy: 100,
    category: "Special",
    name: "Doom Desire",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    id: "doomdesire",
    fullname: "move: Doom Desire",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  psychoboost: {
    exists: true,
    accuracy: 100,
    basePower: 150,
    desc: "The user unleashes a massive blast of psychic energy.\nThis drops the user's Sp. Atk by 2 after use.",
    shortDesc: "The user unleashes a massive blast of psychic energy.\nThis drops the user's Sp. Atk by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 210
    },
    isNonstandard: null,
    num: 354,
    category: "Special",
    name: "Psycho Boost",
    pp: 5,
    priority: 0,
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "psychoboost",
    fullname: "move: Psycho Boost",
    effectType: "Move",
    kind: "Move",
    gen: 3,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  roost: {
    exists: true,
    pp: 5,
    desc: "The user lands and rests its body. It restores the\nuser’s HP by 50% of the user's max HP.\nZ-Effect +2 Defense. Removes Flying type for the turn.",
    shortDesc: "The user lands and rests its body. It restores the\nuser’s HP by 50% of the user's max HP.\nZ-Effect +2 Defense. Removes Flying type for the turn.",
    flags: {
      snatch: 1
    },
    num: 355,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Roost",
    priority: 0,
    heal: [
      1,
      2
    ],
    self: {
      volatileStatus: "roost"
    },
    condition: {
      duration: 1,
      onResidualOrder: 25,
      onTypePriority: -1
    },
    secondary: null,
    target: "self",
    type: "Flying",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "roost",
    fullname: "move: Roost",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gravity: {
    exists: true,
    target: "normal",
    desc: "Enables Flying-type Pokemon or Pokemon with the\nLevitate Ability to be hit by Ground-type moves.\nFlying moves can’t be used. Z-Effect +2 Sp. Atk.",
    shortDesc: "Enables Flying-type Pokemon or Pokemon with the\nLevitate Ability to be hit by Ground-type moves.\nFlying moves can’t be used. Z-Effect +2 Sp. Atk.",
    flags: {},
    num: 356,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Gravity",
    pp: 5,
    priority: 0,
    pseudoWeather: "gravity",
    condition: {
      duration: 5,
      onBeforeMovePriority: 6,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 2
    },
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "gravity",
    fullname: "move: Gravity",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  miracleeye: {
    exists: true,
    pp: 10,
    desc: "Enables the user to hit Dark-types with Psychic moves.\nAlso makes it so no attacks will miss the foe.\nZ-Effect gives +1 to all stats.",
    shortDesc: "Enables the user to hit Dark-types with Psychic moves.\nAlso makes it so no attacks will miss the foe.\nZ-Effect gives +1 to all stats.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 357,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Miracle Eye",
    priority: 0,
    volatileStatus: "miracleeye",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "miracleeye",
    fullname: "move: Miracle Eye",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wakeupslap: {
    exists: true,
    accuracy: true,
    pp: 1,
    priority: 4,
    desc: "The user slaps the foe, startling them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is asleep. Contact.",
    shortDesc: "The user slaps the foe, startling them. This has\n+4 Priority, and ALWAYS flinches the foe from shock.\nDoubles in power if the foe is asleep. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 358,
    basePower: 70,
    category: "Physical",
    name: "Wake-Up Slap",
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "wakeupslap",
    fullname: "move: Wake-Up Slap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 140
    }
  },
  hammerarm: {
    exists: true,
    basePower: 120,
    pp: 5,
    desc: "The user slams its heavy arm or fist onto the foe.\nThis always lowers the user's Speed by 1. Contact.",
    shortDesc: "The user slams its heavy arm or fist onto the foe.\nThis always lowers the user's Speed by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "25"
      },
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 359,
    accuracy: 90,
    category: "Physical",
    name: "Hammer Arm",
    priority: 0,
    self: {
      boosts: {
        spe: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "hammerarm",
    fullname: "move: Hammer Arm",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  gyroball: {
    exists: true,
    basePower: 1,
    desc: "The user tackles the target while spinning.\nThis gains power the faster the foe is than the user.\nAfter use, the user's Speed drops by 2. Contact.",
    shortDesc: "The user tackles the target while spinning.\nThis gains power the faster the foe is than the user.\nAfter use, the user's Speed drops by 2. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    self: {
      boosts: {
        spe: -2
      }
    },
    zMove: {
      basePower: 170
    },
    num: 360,
    accuracy: 100,
    category: "Physical",
    name: "Gyro Ball",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Steel",
    maxMove: {
      basePower: 130
    },
    id: "gyroball",
    fullname: "move: Gyro Ball",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  healingwish: {
    exists: true,
    pp: 5,
    priority: 6,
    type: "Fairy",
    desc: "The user faints. In return, the Pokemon taking its\nplace will have its HP restored and status\nconditions cured. This has +6 Priority.",
    shortDesc: "The user faints. In return, the Pokemon taking its\nplace will have its HP restored and status\nconditions cured. This has +6 Priority.",
    flags: {
      snatch: 1,
      sound: 1
    },
    condition: {
      duration: 2,
      onSwitchInPriority: 1
    },
    num: 361,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Healing Wish",
    selfdestruct: "ifHit",
    slotCondition: "healingwish",
    secondary: null,
    target: "self",
    id: "healingwish",
    fullname: "move: Healing Wish",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  brine: {
    exists: true,
    basePower: 70,
    desc: "The user douses the foe in water.\nIf the target’s HP is 50% or less, this attack will hit\nwith double the power.",
    shortDesc: "The user douses the foe in water.\nIf the target’s HP is 50% or less, this attack will hit\nwith double the power.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 362,
    accuracy: 100,
    category: "Special",
    name: "Brine",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Water",
    id: "brine",
    fullname: "move: Brine",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  naturalgift: {
    exists: true,
    basePower: 1,
    category: "Special",
    desc: "The user draws power to attack by using its held\nBerry. Super effective weakening berries become 110\nBase Power moves of their respective type.",
    shortDesc: "The user draws power to attack by using its held\nBerry. Super effective weakening berries become 110\nBase Power moves of their respective type.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    isNonstandard: null,
    num: 363,
    accuracy: 100,
    name: "Natural Gift",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 130
    },
    id: "naturalgift",
    fullname: "move: Natural Gift",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  thinkfast: {
    exists: true,
    num: 364,
    accuracy: true,
    basePower: 55,
    category: "Physical",
    name: "Think Fast",
    pp: 10,
    priority: 2,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "The user uses its intelligence to outmaneuver the foe,\nthrowing a quick punch. This has +2 Priority, and\nbypasses protect, lifting the effects. Can't miss.",
    shortDesc: "The user uses its intelligence to outmaneuver the foe,\nthrowing a quick punch. This has +2 Priority, and\nbypasses protect, lifting the effects. Can't miss.",
    flags: {
      contact: 1,
      mirror: 1
    },
    zMove: {
      basePower: 110
    },
    id: "thinkfast",
    fullname: "move: Think Fast",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  pluck: {
    exists: true,
    basePower: 65,
    target: "normal",
    desc: "The user pecks the target. If the target is holding a\nBerry, the user eats it and gains its effect. Contact.",
    shortDesc: "The user pecks the target. If the target is holding a\nBerry, the user eats it and gains its effect. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 130
    },
    num: 365,
    accuracy: 100,
    category: "Physical",
    name: "Pluck",
    pp: 20,
    priority: 0,
    secondary: null,
    type: "Flying",
    id: "pluck",
    fullname: "move: Pluck",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  tailwind: {
    exists: true,
    target: "normal",
    desc: "The user whips up a turbulent whirlwind that doubles\nthe Speed stat of the user and its allies for\nfour turns. Z-Effect +2 crit rate.",
    shortDesc: "The user whips up a turbulent whirlwind that doubles\nthe Speed stat of the user and its allies for\nfour turns. Z-Effect +2 crit rate.",
    flags: {
      snatch: 1
    },
    num: 366,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tailwind",
    pp: 15,
    priority: 0,
    sideCondition: "tailwind",
    condition: {
      duration: 4,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 5
    },
    secondary: null,
    type: "Flying",
    zMove: {
      effect: "crit2"
    },
    id: "tailwind",
    fullname: "move: Tailwind",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  acupressure: {
    exists: true,
    pp: 3,
    target: "adjacentAlly",
    desc: "The user applies pressure to stress points, sharply\nboosting one of its or its allies’ stats by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user applies pressure to stress points, sharply\nboosting one of its or its allies’ stats by 2.\nZ-Effect +2 crit rate.",
    noPPBoosts: true,
    num: 367,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Acupressure",
    priority: 0,
    flags: {},
    secondary: null,
    type: "Normal",
    zMove: {
      effect: "crit2"
    },
    id: "acupressure",
    fullname: "move: Acupressure",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  metalburst: {
    exists: true,
    basePower: 1,
    priority: -6,
    target: "normal",
    desc: "The user takes any attack and delivers 50% of\ndamage taken back at the foe at the end of the turn.",
    shortDesc: "The user takes any attack and delivers 50% of\ndamage taken back at the foe at the end of the turn.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 368,
    accuracy: 100,
    category: "Physical",
    name: "Metal Burst",
    pp: 10,
    secondary: null,
    type: "Steel",
    id: "metalburst",
    fullname: "move: Metal Burst",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  uturn: {
    exists: true,
    accuracy: true,
    basePower: 75,
    pp: 15,
    desc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack cannot miss. Contact.",
    shortDesc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack cannot miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 369,
    category: "Physical",
    name: "U-turn",
    priority: 0,
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "uturn",
    fullname: "move: U-turn",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  closecombat: {
    exists: true,
    desc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    shortDesc: "The user fights the target up close without guarding\nitself. This also lowers the user’s Defense and\nSp. Def stats by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    num: 370,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Close Combat",
    pp: 5,
    priority: 0,
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "closecombat",
    fullname: "move: Close Combat",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  payback: {
    exists: true,
    accuracy: true,
    basePower: 60,
    pp: 5,
    desc: "The user violently retaliates at the foe.\nThis doubles in power if you move after the target.\nContact. Can't miss. Neutral Priority.",
    shortDesc: "The user violently retaliates at the foe.\nThis doubles in power if you move after the target.\nContact. Can't miss. Neutral Priority.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    num: 371,
    category: "Physical",
    name: "Payback",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "payback",
    fullname: "move: Payback",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  assurance: {
    exists: true,
    basePower: 75,
    pp: 20,
    desc: "If the foe's taken damage this turn, the power of this\nattack doubles. This includes damage from life orb,\nentry hazards, confusion, and recoil damage. Contact.",
    shortDesc: "If the foe's taken damage this turn, the power of this\nattack doubles. This includes damage from life orb,\nentry hazards, confusion, and recoil damage. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 372,
    accuracy: 100,
    category: "Physical",
    name: "Assurance",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "assurance",
    fullname: "move: Assurance",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  embargo: {
    exists: true,
    priority: 4,
    desc: "This move prevents the target from using its held\nitem for 15 turns. Z-Effect +2 Attack.\nThis has +4 priority.",
    shortDesc: "This move prevents the target from using its held\nitem for 15 turns. Z-Effect +2 Attack.\nThis has +4 priority.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 373,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Embargo",
    pp: 15,
    volatileStatus: "embargo",
    condition: {
      duration: 5,
      onResidualOrder: 21
    },
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "embargo",
    fullname: "move: Embargo",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  fling: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 3,
    priority: 4,
    type: "Normal",
    desc: "The user quickly throws its held item. +4 Priority.\nZap Plate paralyzes, Flame Plate burns, & Toxic Plate\nbadly poisons. Plates do 100 BP. King's Rock flinches.",
    shortDesc: "The user quickly throws its held item. +4 Priority.\nZap Plate paralyzes, Flame Plate burns, & Toxic Plate\nbadly poisons. Plates do 100 BP. King's Rock flinches.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    noPPBoosts: true,
    num: 374,
    category: "Physical",
    name: "Fling",
    condition: {},
    secondary: null,
    target: "normal",
    id: "fling",
    fullname: "move: Fling",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  psychoshift: {
    exists: true,
    desc: "Using its psychic power of suggestion, the user\ntransfers its status conditions to the target.\nZ-Effect +1 All Stats.",
    shortDesc: "Using its psychic power of suggestion, the user\ntransfers its status conditions to the target.\nZ-Effect +1 All Stats.",
    flags: {
      mirror: 1,
      protect: 1
    },
    isNonstandard: null,
    num: 375,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Psycho Shift",
    pp: 10,
    priority: 0,
    self: {},
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 2
      }
    },
    id: "psychoshift",
    fullname: "move: Psycho Shift",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hocuspocus: {
    exists: true,
    num: 376,
    accuracy: true,
    basePower: 1,
    category: "Special",
    name: "Hocus-Pocus",
    pp: 1,
    priority: 2,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "The user performs an astonishing magic trick.\nThis can only fool the foe once, but ALWAYS flinches.\nThis has +2 Priority, and is 200 Base Power.",
    shortDesc: "The user performs an astonishing magic trick.\nThis can only fool the foe once, but ALWAYS flinches.\nThis has +2 Priority, and is 200 Base Power.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 250
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    noPPBoosts: true,
    id: "hocuspocus",
    fullname: "move: Hocus-Pocus",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  healblock: {
    exists: true,
    priority: 4,
    desc: "For 15 turns, the foe's team is prevented from using\nany moves, Abilities, or held items that recover HP.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    shortDesc: "For 15 turns, the foe's team is prevented from using\nany moves, Abilities, or held items that recover HP.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 377,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Heal Block",
    pp: 15,
    volatileStatus: "healblock",
    condition: {
      duration: 5,
      onBeforeMovePriority: 6,
      onResidualOrder: 20
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 2
      }
    },
    id: "healblock",
    fullname: "move: Heal Block",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  chromosomecrush: {
    exists: true,
    num: 378,
    accuracy: 100,
    basePower: 1,
    category: "Special",
    name: "Chromosome Crush",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Psychic",
    target: "normal",
    desc: "Mew mangles the opponent's DNA. This deals more\ndamage depending how much HP the target has left.\nMax of 120 BP. ALWAYS crits. SIGNATURE Z-MOVE.",
    shortDesc: "Mew mangles the opponent's DNA. This deals more\ndamage depending how much HP the target has left.\nMax of 120 BP. ALWAYS crits. SIGNATURE Z-MOVE.",
    flags: {
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 250
    },
    id: "chromosomecrush",
    fullname: "move: Chromosome Crush",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  powertrick: {
    exists: true,
    desc: "The user employs its psychic power to switch its\nAttack stat with its Defense stat.\nZ-Effect +2 Attack.",
    shortDesc: "The user employs its psychic power to switch its\nAttack stat with its Defense stat.\nZ-Effect +2 Attack.",
    num: 379,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Trick",
    pp: 10,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "powertrick",
    condition: {},
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "powertrick",
    fullname: "move: Power Trick",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  acidreflux: {
    exists: true,
    num: 380,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Acid Reflux",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user hurls stomach acid at the foe, dropping their\nSp. Def stat by 4 in addition to poisoning them.\nZ-Effect heals the user fully.",
    shortDesc: "The user hurls stomach acid at the foe, dropping their\nSp. Def stat by 4 in addition to poisoning them.\nZ-Effect heals the user fully.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      },
      {
        chance: 100,
        boosts: {
          spd: -4
        }
      }
    ],
    id: "acidreflux",
    fullname: "move: Acid Reflux",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  luckychant: {
    exists: true,
    priority: 4,
    type: "Fairy",
    target: "normal",
    desc: "The user chants an incantation toward the sky,\npreventing opposing Pokemon from landing\ncrits for 5 turns. +4 Priority. Z-Effect +3 Sp. Def.",
    shortDesc: "The user chants an incantation toward the sky,\npreventing opposing Pokemon from landing\ncrits for 5 turns. +4 Priority. Z-Effect +3 Sp. Def.",
    isNonstandard: null,
    num: 381,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Lucky Chant",
    pp: 30,
    flags: {
      snatch: 1
    },
    sideCondition: "luckychant",
    condition: {
      duration: 5,
      onCriticalHit: false,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 6
    },
    secondary: null,
    zMove: {
      boost: {
        evasion: 1
      }
    },
    id: "luckychant",
    fullname: "move: Lucky Chant",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mefirst: {
    exists: true,
    basePower: 1,
    pp: 5,
    priority: 6,
    target: "normal",
    desc: "The user cuts ahead of the target to copy and use\nthe target’s intended move with greater power.\nZ-Effect +2 Attack. +6 Priority.",
    shortDesc: "The user cuts ahead of the target to copy and use\nthe target’s intended move with greater power.\nZ-Effect +2 Attack. +6 Priority.",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    isNonstandard: null,
    num: 382,
    accuracy: true,
    category: "Status",
    name: "Me First",
    condition: {
      duration: 1,
      onBasePowerPriority: 12
    },
    secondary: null,
    type: "Normal",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "mefirst",
    fullname: "move: Me First",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  copycat: {
    exists: true,
    pp: 5,
    priority: 6,
    desc: "The user mimics the move used immediately before\nit. The move fails if no other move has been\nused yet. Z-Effect +2 Attack. +6 Priority.",
    shortDesc: "The user mimics the move used immediately before\nit. The move fails if no other move has been\nused yet. Z-Effect +2 Attack. +6 Priority.",
    flags: {},
    num: 383,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Copycat",
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "copycat",
    fullname: "move: Copycat",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powerswap: {
    exists: true,
    priority: 4,
    desc: "The user employs its psychic power to switch\nchanges to its Attack and Sp. Atk stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    shortDesc: "The user employs its psychic power to switch\nchanges to its Attack and Sp. Atk stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    num: 384,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Swap",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "powerswap",
    fullname: "move: Power Swap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  guardswap: {
    exists: true,
    priority: 4,
    desc: "The user employs its psychic power to switch\nchanges to its Defense and Sp. Def stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    shortDesc: "The user employs its psychic power to switch\nchanges to its Defense and Sp. Def stats with\nthe foe. +4 Priority. Z-Effect +3 Speed.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    num: 385,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Guard Swap",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "guardswap",
    fullname: "move: Guard Swap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  punishment: {
    exists: true,
    accuracy: true,
    basePower: 1,
    pp: 15,
    desc: "The user punishes the opponent for boosting stats.\nThe base power increases by 20 for every stat boost,\nbeginning at 60 BP. Can't miss,",
    shortDesc: "The user punishes the opponent for boosting stats.\nThe base power increases by 20 for every stat boost,\nbeginning at 60 BP. Can't miss,",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    isNonstandard: null,
    num: 386,
    category: "Physical",
    name: "Punishment",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    maxMove: {
      basePower: 130
    },
    id: "punishment",
    fullname: "move: Punishment",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lastresort: {
    exists: true,
    accuracy: true,
    desc: "This powerful, desperate attack can only be used\nafter the user has exhausted all other options.\nThis can't miss.",
    shortDesc: "This powerful, desperate attack can only be used\nafter the user has exhausted all other options.\nThis can't miss.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 205
    },
    num: 387,
    basePower: 140,
    category: "Physical",
    name: "Last Resort",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "lastresort",
    fullname: "move: Last Resort",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  worryseed: {
    exists: true,
    desc: "A seed that causes worry is planted on the target.\nIt prevents sleep by making the target’s\nAbility Insomnia. Z-Effect +2 Sp. Atk.",
    shortDesc: "A seed that causes worry is planted on the target.\nIt prevents sleep by making the target’s\nAbility Insomnia. Z-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 388,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Worry Seed",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "worryseed",
    fullname: "move: Worry Seed",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  suckerpunch: {
    exists: true,
    accuracy: true,
    priority: 2,
    desc: "This user sucker punches the foe. This fails if the\ntarget isn't using an attacking move that turn. This\nhas +2 priority and can't miss. Contact.",
    shortDesc: "This user sucker punches the foe. This fails if the\ntarget isn't using an attacking move that turn. This\nhas +2 priority and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 389,
    basePower: 70,
    category: "Physical",
    name: "Sucker Punch",
    pp: 5,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "suckerpunch",
    fullname: "move: Sucker Punch",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  toxicspikes: {
    exists: true,
    target: "normal",
    desc: "The user lays a trap of toxic spikes on the opponent's\nside. One layer poisons, two layers badly poison.\nZ-Effect +2 Defense.",
    shortDesc: "The user lays a trap of toxic spikes on the opponent's\nside. One layer poisons, two layers badly poison.\nZ-Effect +2 Defense.",
    flags: {
      reflectable: 1
    },
    num: 390,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Toxic Spikes",
    pp: 20,
    priority: 0,
    sideCondition: "toxicspikes",
    condition: {},
    secondary: null,
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "toxicspikes",
    fullname: "move: Toxic Spikes",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  heartswap: {
    exists: true,
    pp: 1,
    priority: 4,
    type: "Fairy",
    desc: "The user instantly switches stat changes with the foe.\nThis has +4 Priority. Z-Effect heals the user fully.",
    shortDesc: "The user instantly switches stat changes with the foe.\nThis has +4 Priority. Z-Effect heals the user fully.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 391,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Heart Swap",
    secondary: null,
    target: "normal",
    zMove: {
      effect: "crit2"
    },
    id: "heartswap",
    fullname: "move: Heart Swap",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  rehydrate: {
    exists: true,
    num: 392,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rehydrate",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Water",
    target: "self",
    desc: "The user envelops itself in a veil made of water.\nThis recovers 50% of the user's max HP.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user envelops itself in a veil made of water.\nThis recovers 50% of the user's max HP.\nZ-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    id: "rehydrate",
    fullname: "move: Rehydrate",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magnetrise: {
    exists: true,
    desc: "The user levitates using electrically generated\nmagnetism for five turns. Z-Effect +2 Speed.",
    shortDesc: "The user levitates using electrically generated\nmagnetism for five turns. Z-Effect +2 Speed.",
    flags: {
      gravity: 1,
      snatch: 1
    },
    num: 393,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magnet Rise",
    pp: 10,
    priority: 0,
    volatileStatus: "magnetrise",
    condition: {
      duration: 5,
      onResidualOrder: 18
    },
    secondary: null,
    target: "self",
    type: "Electric",
    zMove: {
      boost: {
        evasion: 1
      }
    },
    id: "magnetrise",
    fullname: "move: Magnet Rise",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  flareblitz: {
    exists: true,
    basePower: 125,
    pp: 10,
    desc: "The user cloaks itself in fire and charges the target.\nThis has 25% recoil, and a 25% chance to burn the foe.\nContact.",
    shortDesc: "The user cloaks itself in fire and charges the target.\nThis has 25% recoil, and a 25% chance to burn the foe.\nContact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 25,
        status: "brn"
      }
    ],
    num: 394,
    accuracy: 100,
    category: "Physical",
    name: "Flare Blitz",
    priority: 0,
    secondary: {
      chance: 10,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "flareblitz",
    fullname: "move: Flare Blitz",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  forcewaves: {
    exists: true,
    num: 395,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    name: "Force Waves",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Fighting",
    target: "normal",
    desc: "The user creates 2 shock waves with it's palms. This\nhits twice. Each hit has a\n30% chance to paralyze, for a total chance of 51%.",
    shortDesc: "The user creates 2 shock waves with it's palms. This\nhits twice. Each hit has a\n30% chance to paralyze, for a total chance of 51%.",
    flags: {
      mirror: 1,
      protect: 1
    },
    multihit: 2,
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    id: "forcewaves",
    fullname: "move: Force Waves",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  aurasphere: {
    exists: true,
    basePower: 90,
    pp: 10,
    target: "normal",
    desc: "The user lets loose a blast of aura power from deep\nwithin itself. This has a 20% chance to drop\nSp. Def by 1, and can't miss.",
    shortDesc: "The user lets loose a blast of aura power from deep\nwithin itself. This has a 20% chance to drop\nSp. Def by 1, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1,
      pulse: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 20,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 396,
    accuracy: true,
    category: "Special",
    name: "Aura Sphere",
    priority: 0,
    secondary: null,
    type: "Fighting",
    id: "aurasphere",
    fullname: "move: Aura Sphere",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  rockpolish: {
    exists: true,
    pp: 1,
    desc: "The user polishes its body to reduce drag.\nThis raises the user's Speed by 2 and Accuracy by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user polishes its body to reduce drag.\nThis raises the user's Speed by 2 and Accuracy by 1.\nZ-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spe: 2
        }
      },
      {
        chance: 0,
        boosts: {
          accuracy: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 397,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rock Polish",
    priority: 0,
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Rock",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "rockpolish",
    fullname: "move: Rock Polish",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  poisonjab: {
    exists: true,
    pp: 15,
    desc: "The target is stabbed with a tentacle or arm steeped\nin poison. This poisons the foe 30% of the time.\nContact.",
    shortDesc: "The target is stabbed with a tentacle or arm steeped\nin poison. This poisons the foe 30% of the time.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 398,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Poison Jab",
    priority: 0,
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    id: "poisonjab",
    fullname: "move: Poison Jab",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "psn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 160
    }
  },
  darkpulse: {
    exists: true,
    basePower: 85,
    target: "normal",
    desc: "The user releases a horrible aura imbued with dark\nenergy. This flinches 20% of the time, and afflicts\na sleeping target with a horrible nightmare.",
    shortDesc: "The user releases a horrible aura imbued with dark\nenergy. This flinches 20% of the time, and afflicts\na sleeping target with a horrible nightmare.",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "9"
      },
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    num: 399,
    accuracy: 100,
    category: "Special",
    name: "Dark Pulse",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    type: "Dark",
    id: "darkpulse",
    fullname: "move: Dark Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  nightslash: {
    exists: true,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "The user slashes the target the instant an\nopportunity arises. This has a 50% (+2) crit rate.\nContact.",
    shortDesc: "The user slashes the target the instant an\nopportunity arises. This has a 50% (+2) crit rate.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 400,
    accuracy: 100,
    category: "Physical",
    name: "Night Slash",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "nightslash",
    fullname: "move: Night Slash",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  aquatail: {
    exists: true,
    accuracy: 95,
    basePower: 100,
    desc: "The user attacks by swinging its tail as if it were a\nvicious wave in a raging storm. This has a 30%\nchance to drop Defense. Contact.",
    shortDesc: "The user attacks by swinging its tail as if it were a\nvicious wave in a raging storm. This has a 30%\nchance to drop Defense. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 401,
    category: "Physical",
    name: "Aqua Tail",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Water",
    id: "aquatail",
    fullname: "move: Aqua Tail",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  seedbomb: {
    exists: true,
    desc: "The user slams a barrage of hard-shelled seeds\ndown on the target from above. This flinches the\ntarget 20% of the time.",
    shortDesc: "The user slams a barrage of hard-shelled seeds\ndown on the target from above. This flinches the\ntarget 20% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    num: 402,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Seed Bomb",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "seedbomb",
    fullname: "move: Seed Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  airslash: {
    exists: true,
    accuracy: 100,
    basePower: 80,
    target: "normal",
    desc: "The user attacks with a blade of air that slices even\nthe sky. This flinches the target 30% of the time.",
    shortDesc: "The user attacks with a blade of air that slices even\nthe sky. This flinches the target 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    num: 403,
    category: "Special",
    name: "Air Slash",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    type: "Flying",
    id: "airslash",
    fullname: "move: Air Slash",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  xscissor: {
    exists: true,
    pp: 10,
    critRatio: 3,
    desc: "The user slashes at the target by crossing its\nscythes or claws as if they were a pair of scissors.\nThis has a 50% (+2) crit rate. Contact.",
    shortDesc: "The user slashes at the target by crossing its\nscythes or claws as if they were a pair of scissors.\nThis has a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 404,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "X-Scissor",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "xscissor",
    fullname: "move: X-Scissor",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  bugbuzz: {
    exists: true,
    basePower: 95,
    target: "allAdjacentFoes",
    desc: "The user generates a devastating sound wave with\nvibration. This flinches the targets 30% of the time.",
    shortDesc: "The user generates a devastating sound wave with\nvibration. This flinches the targets 30% of the time.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 405,
    accuracy: 100,
    category: "Special",
    name: "Bug Buzz",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    type: "Bug",
    id: "bugbuzz",
    fullname: "move: Bug Buzz",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  dragonpulse: {
    exists: true,
    basePower: 100,
    target: "normal",
    desc: "The target is attacked with a shock wave generated\nby the user’s gaping mouth. This leaves the target\nwith paralysis 30% of the time.",
    shortDesc: "The target is attacked with a shock wave generated\nby the user’s gaping mouth. This leaves the target\nwith paralysis 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    num: 406,
    accuracy: 100,
    category: "Special",
    name: "Dragon Pulse",
    pp: 10,
    priority: 0,
    secondary: null,
    type: "Dragon",
    id: "dragonpulse",
    fullname: "move: Dragon Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  dragonrush: {
    exists: true,
    accuracy: 100,
    basePower: 120,
    pp: 5,
    desc: "The user tackles the target while exhibiting\noverwhelming menace. This drops the user's Defensive\nstats by 1 after use. 30% flinch rate. Contact.",
    shortDesc: "The user tackles the target while exhibiting\noverwhelming menace. This drops the user's Defensive\nstats by 1 after use. 30% flinch rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 407,
    category: "Physical",
    name: "Dragon Rush",
    priority: 0,
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Dragon",
    id: "dragonrush",
    fullname: "move: Dragon Rush",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  powergem: {
    exists: true,
    basePower: 95,
    pp: 10,
    desc: "The user attacks with a ray of light that sparkles as\nif it were made of gemstones. This raises the user's\nSp. Atk by one 25% of the time.",
    shortDesc: "The user attacks with a ray of light that sparkles as\nif it were made of gemstones. This raises the user's\nSp. Atk by one 25% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 408,
    accuracy: 100,
    category: "Special",
    name: "Power Gem",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "powergem",
    fullname: "move: Power Gem",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  drainpunch: {
    exists: true,
    desc: "An energy-draining punch. The user’s HP is restored\nby half the damage taken by the target. Contact.",
    shortDesc: "An energy-draining punch. The user’s HP is restored\nby half the damage taken by the target. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 409,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Drain Punch",
    pp: 10,
    priority: 0,
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "drainpunch",
    fullname: "move: Drain Punch",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  vacuumwave: {
    exists: true,
    accuracy: true,
    basePower: 55,
    pp: 15,
    priority: 2,
    desc: "The user sends a wave of pure vacuum at the target.\nThis has +2 priority, and can't miss.",
    shortDesc: "The user sends a wave of pure vacuum at the target.\nThis has +2 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 410,
    category: "Special",
    name: "Vacuum Wave",
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "vacuumwave",
    fullname: "move: Vacuum Wave",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    }
  },
  focusblast: {
    exists: true,
    accuracy: 85,
    basePower: 130,
    desc: "The user heightens its mental focus and unleashes\nmassive power. This lowers Sp. Def 30% of the time.",
    shortDesc: "The user heightens its mental focus and unleashes\nmassive power. This lowers Sp. Def 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 205
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 411,
    category: "Special",
    name: "Focus Blast",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Fighting",
    id: "focusblast",
    fullname: "move: Focus Blast",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  energyball: {
    exists: true,
    basePower: 95,
    desc: "The user draws power from nature and fires it at the\ntarget. This lowers Sp. Def 25% of the time.",
    shortDesc: "The user draws power from nature and fires it at the\ntarget. This lowers Sp. Def 25% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    secondaries: [
      {
        chance: 25,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 412,
    accuracy: 100,
    category: "Special",
    name: "Energy Ball",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Grass",
    id: "energyball",
    fullname: "move: Energy Ball",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  bravebird: {
    exists: true,
    basePower: 125,
    pp: 10,
    target: "normal",
    desc: "The user tucks in its wings and charges from a low\naltitude. This deals 25% recoil, and has a 30%\nchance to drop the foe's Defense. Contact.",
    shortDesc: "The user tucks in its wings and charges from a low\naltitude. This deals 25% recoil, and has a 30%\nchance to drop the foe's Defense. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 413,
    accuracy: 100,
    category: "Physical",
    name: "Brave Bird",
    priority: 0,
    secondary: null,
    type: "Flying",
    id: "bravebird",
    fullname: "move: Brave Bird",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  earthpower: {
    exists: true,
    desc: "The user makes the ground under the target erupt\nwith power. This drops Sp. Def by one 20% of the time.",
    shortDesc: "The user makes the ground under the target erupt\nwith power. This drops Sp. Def by one 20% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 20,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 414,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Earth Power",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Ground",
    id: "earthpower",
    fullname: "move: Earth Power",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  switcheroo: {
    exists: true,
    pp: 1,
    priority: 4,
    desc: "The user trades held items with the target faster\nthan the eye can follow. Z-Effect +3 Speed. +4 Priority.",
    shortDesc: "The user trades held items with the target faster\nthan the eye can follow. Z-Effect +3 Speed. +4 Priority.",
    flags: {
      mirror: 1,
      protect: 1
    },
    noPPBoosts: true,
    num: 415,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Switcheroo",
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "switcheroo",
    fullname: "move: Switcheroo",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gigaimpact: {
    exists: true,
    accuracy: 100,
    basePower: 160,
    desc: "The user charges at the target using every bit of its\npower. This drops the user's Attack by 2. Contact.",
    shortDesc: "The user charges at the target using every bit of its\npower. This drops the user's Attack by 2. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        atk: -2
      }
    },
    zMove: {
      basePower: 220
    },
    num: 416,
    category: "Physical",
    name: "Giga Impact",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "gigaimpact",
    fullname: "move: Giga Impact",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  nastyplot: {
    exists: true,
    pp: 1,
    desc: "The user stimulates its brain by thinking bad\nthoughts. This raises the user's Sp. Atk by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user stimulates its brain by thinking bad\nthoughts. This raises the user's Sp. Atk by 2.\nZ-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: 2
        }
      }
    ],
    noPPBoosts: true,
    num: 417,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Nasty Plot",
    priority: 0,
    boosts: {
      spa: 2
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "nastyplot",
    fullname: "move: Nasty Plot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  bulletpunch: {
    exists: true,
    accuracy: true,
    basePower: 50,
    pp: 15,
    desc: "The user strikes the target with hard punches as\nfast as bullets. This has +1 priority, and can't miss.\nContact.",
    shortDesc: "The user strikes the target with hard punches as\nfast as bullets. This has +1 priority, and can't miss.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 418,
    category: "Physical",
    name: "Bullet Punch",
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Steel",
    id: "bulletpunch",
    fullname: "move: Bullet Punch",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  avalanche: {
    exists: true,
    accuracy: true,
    basePower: 70,
    pp: 5,
    priority: 0,
    desc: "The user summons a devastating avalanche.\nThis now has NEUTRAL priority, can't miss, & doubles\nin power if you move last. 30% Flinch rate.",
    shortDesc: "The user summons a devastating avalanche.\nThis now has NEUTRAL priority, can't miss, & doubles\nin power if you move last. 30% Flinch rate.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 419,
    category: "Physical",
    name: "Avalanche",
    secondary: null,
    target: "normal",
    type: "Ice",
    id: "avalanche",
    fullname: "move: Avalanche",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  iceshard: {
    exists: true,
    accuracy: true,
    basePower: 45,
    pp: 20,
    desc: "The user flash-freezes chunks of ice and hurls them\nat the target. This has +1 priority and can't miss.",
    shortDesc: "The user flash-freezes chunks of ice and hurls them\nat the target. This has +1 priority and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    num: 420,
    category: "Physical",
    name: "Ice Shard",
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Ice",
    id: "iceshard",
    fullname: "move: Ice Shard",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  shadowclaw: {
    exists: true,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "The user slashes with shadowy claws or blades.\nThis has a 50% (+2) critical hit rate.\nContact.",
    shortDesc: "The user slashes with shadowy claws or blades.\nThis has a 50% (+2) critical hit rate.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 421,
    accuracy: 100,
    category: "Physical",
    name: "Shadow Claw",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "shadowclaw",
    fullname: "move: Shadow Claw",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  thunderfang: {
    exists: true,
    accuracy: 100,
    basePower: 75,
    desc: "The user bites with electrified fangs. This has a 20%\nchance to flinch, and a 10% chance to paralyze.\nContact.",
    shortDesc: "The user bites with electrified fangs. This has a 20%\nchance to flinch, and a 10% chance to paralyze.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 10,
        status: "par"
      },
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    num: 422,
    category: "Physical",
    name: "Thunder Fang",
    pp: 15,
    priority: 0,
    target: "normal",
    type: "Electric",
    id: "thunderfang",
    fullname: "move: Thunder Fang",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  icefang: {
    exists: true,
    accuracy: 100,
    basePower: 75,
    desc: "The user bites with ice-infused fangs. This has a 20%\nchance to flinch, and a 10% chance to freeze.\nContact.",
    shortDesc: "The user bites with ice-infused fangs. This has a 20%\nchance to flinch, and a 10% chance to freeze.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 10,
        status: "frz"
      },
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    num: 423,
    category: "Physical",
    name: "Ice Fang",
    pp: 15,
    priority: 0,
    target: "normal",
    type: "Ice",
    id: "icefang",
    fullname: "move: Ice Fang",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  firefang: {
    exists: true,
    accuracy: 100,
    basePower: 75,
    desc: "The user bites with flame-cloaked fangs. This has a\n20% chance to flinch, and a 10% chance to burn.\nContact.",
    shortDesc: "The user bites with flame-cloaked fangs. This has a\n20% chance to flinch, and a 10% chance to burn.\nContact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 10,
        status: "brn"
      },
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    num: 424,
    category: "Physical",
    name: "Fire Fang",
    pp: 15,
    priority: 0,
    target: "normal",
    type: "Fire",
    id: "firefang",
    fullname: "move: Fire Fang",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  shadowsneak: {
    exists: true,
    accuracy: true,
    basePower: 50,
    pp: 15,
    desc: "The user sneaks behind the foe and strikes from the\nshadows. This has +1 priority.\nThis also can't miss, and ignores substitutes. Contact.",
    shortDesc: "The user sneaks behind the foe and strikes from the\nshadows. This has +1 priority.\nThis also can't miss, and ignores substitutes. Contact.",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 425,
    category: "Physical",
    name: "Shadow Sneak",
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "shadowsneak",
    fullname: "move: Shadow Sneak",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  mudbomb: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    pp: 5,
    desc: "The user launches a mud ball that explodes on impact.\nThis drops the foe's Speed by one 100% of the time.",
    shortDesc: "The user launches a mud ball that explodes on impact.\nThis drops the foe's Speed by one 100% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    isNonstandard: null,
    num: 426,
    category: "Special",
    name: "Mud Bomb",
    priority: 0,
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Ground",
    id: "mudbomb",
    fullname: "move: Mud Bomb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  psychocut: {
    exists: true,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "The user tears at the target with blades formed by\npsychic power. This has a 50% (+2) crit rate.",
    shortDesc: "The user tears at the target with blades formed by\npsychic power. This has a 50% (+2) crit rate.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 427,
    accuracy: 100,
    category: "Physical",
    name: "Psycho Cut",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "psychocut",
    fullname: "move: Psycho Cut",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  zenheadbutt: {
    exists: true,
    accuracy: 95,
    basePower: 100,
    pp: 10,
    desc: "The user focuses its willpower to its head and\nattacks the target. This flinches the foe 25% the\ntime. Contact.",
    shortDesc: "The user focuses its willpower to its head and\nattacks the target. This flinches the foe 25% the\ntime. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    num: 428,
    category: "Physical",
    name: "Zen Headbutt",
    priority: 0,
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Psychic",
    id: "zenheadbutt",
    fullname: "move: Zen Headbutt",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  mirrorshot: {
    exists: true,
    accuracy: 100,
    basePower: 80,
    pp: 15,
    desc: "The user lets loose a flash of energy at the target\nfrom its body. This boosts the user's Sp. Atk 25% of\nthe time.",
    shortDesc: "The user lets loose a flash of energy at the target\nfrom its body. This boosts the user's Sp. Atk 25% of\nthe time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 429,
    category: "Special",
    name: "Mirror Shot",
    priority: 0,
    secondary: {
      chance: 30,
      boosts: {
        accuracy: -1
      }
    },
    target: "normal",
    type: "Steel",
    id: "mirrorshot",
    fullname: "move: Mirror Shot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  flashcannon: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    pp: 5,
    desc: "The user gathers all its light energy and releases it\nall at once. This drops Sp. Def 50% of the time.",
    shortDesc: "The user gathers all its light energy and releases it\nall at once. This drops Sp. Def 50% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 430,
    category: "Special",
    name: "Flash Cannon",
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        spd: -1
      }
    },
    target: "normal",
    type: "Steel",
    id: "flashcannon",
    fullname: "move: Flash Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  rockclimb: {
    exists: true,
    accuracy: 100,
    basePower: 110,
    pp: 10,
    type: "Rock",
    desc: "The user attacks the target by smashing into it with\nincredible force. This deals 20% recoil to the user.\nThis also has a 30% chance to drop Defense. Contact.",
    shortDesc: "The user attacks the target by smashing into it with\nincredible force. This deals 20% recoil to the user.\nThis also has a 30% chance to drop Defense. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      20,
      100
    ],
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    isNonstandard: null,
    num: 431,
    category: "Physical",
    name: "Rock Climb",
    priority: 0,
    secondary: {
      chance: 20,
      volatileStatus: "confusion"
    },
    target: "normal",
    id: "rockclimb",
    fullname: "move: Rock Climb",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  defog: {
    exists: true,
    desc: "A strong wind blows away the target’s barriers such\nas Reflect or Light Screen. This also lowers the\ntarget’s evasiveness. Z-Effect +2 crit rate.",
    shortDesc: "A strong wind blows away the target’s barriers such\nas Reflect or Light Screen. This also lowers the\ntarget’s evasiveness. Z-Effect +2 crit rate.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 432,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defog",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Flying",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "defog",
    fullname: "move: Defog",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  trickroom: {
    exists: true,
    priority: 0,
    target: "normal",
    desc: "The user creates a bizarre area in which slower\nPokemon get to move first for five turns.\nZ-Effect +2 Sp. Def. This now has NEUTRAL priority.",
    shortDesc: "The user creates a bizarre area in which slower\nPokemon get to move first for five turns.\nZ-Effect +2 Sp. Def. This now has NEUTRAL priority.",
    num: 433,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Trick Room",
    pp: 5,
    flags: {
      mirror: 1
    },
    pseudoWeather: "trickroom",
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 1
    },
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        accuracy: 1
      }
    },
    id: "trickroom",
    fullname: "move: Trick Room",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dracometeor: {
    exists: true,
    accuracy: 100,
    basePower: 150,
    desc: "Comets are summoned down from the sky onto the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    shortDesc: "Comets are summoned down from the sky onto the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 210
    },
    num: 434,
    category: "Special",
    name: "Draco Meteor",
    pp: 5,
    priority: 0,
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Dragon",
    id: "dracometeor",
    fullname: "move: Draco Meteor",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  discharge: {
    exists: true,
    basePower: 85,
    desc: "The user strikes everything around it by letting loose\na flare of electricity. This paralyzes the target 30%\nof the time.",
    shortDesc: "The user strikes everything around it by letting loose\na flare of electricity. This paralyzes the target 30%\nof the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    num: 435,
    accuracy: 100,
    category: "Special",
    name: "Discharge",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 30,
      status: "par"
    },
    target: "allAdjacent",
    type: "Electric",
    id: "discharge",
    fullname: "move: Discharge",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  pyroplume: {
    exists: true,
    num: 436,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    name: "Pyro Plume",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "allAdjacent",
    desc: "The user torches everything around it in an inferno\nof scarlet flames. This burns the foe 30% of the time.",
    shortDesc: "The user torches everything around it in an inferno\nof scarlet flames. This burns the foe 30% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    id: "pyroplume",
    fullname: "move: Pyro Plume",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  leafstorm: {
    exists: true,
    accuracy: 100,
    basePower: 150,
    desc: "The user whips up a storm of leaves around the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    shortDesc: "The user whips up a storm of leaves around the\ntarget. This drops the user's Sp. Atk by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 210
    },
    num: 437,
    category: "Special",
    name: "Leaf Storm",
    pp: 5,
    priority: 0,
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "leafstorm",
    fullname: "move: Leaf Storm",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  powerwhip: {
    exists: true,
    accuracy: 90,
    pp: 5,
    desc: "The user violently whirls its vines, tentacles, or the\nlike to harshly lash the target. This lowers the foe's\nDefense 30% of the time. Contact.",
    shortDesc: "The user violently whirls its vines, tentacles, or the\nlike to harshly lash the target. This lowers the foe's\nDefense 30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 438,
    basePower: 120,
    category: "Physical",
    name: "Power Whip",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "powerwhip",
    fullname: "move: Power Whip",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  rockwrecker: {
    exists: true,
    accuracy: 100,
    desc: "The user hurls a massive boulder with full force.\nThis lowers the user's Attack by 2 after use.",
    shortDesc: "The user hurls a massive boulder with full force.\nThis lowers the user's Attack by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    self: {
      boosts: {
        atk: -2
      }
    },
    zMove: {
      basePower: 210
    },
    isNonstandard: null,
    num: 439,
    basePower: 150,
    category: "Physical",
    name: "Rock Wrecker",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "rockwrecker",
    fullname: "move: Rock Wrecker",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  crosspoison: {
    exists: true,
    basePower: 80,
    pp: 10,
    critRatio: 3,
    desc: "A slashing attack with a poisonous blade that poisons\n20% of the time. This has a 50% (+2) crit rate.\nContact.",
    shortDesc: "A slashing attack with a poisonous blade that poisons\n20% of the time. This has a 50% (+2) crit rate.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 20,
        status: "psn"
      }
    ],
    num: 440,
    accuracy: 100,
    category: "Physical",
    name: "Cross Poison",
    priority: 0,
    secondary: {
      chance: 10,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    id: "crosspoison",
    fullname: "move: Cross Poison",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  gunkshot: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    desc: "The user shoots filthy, dense gunk at the target.\nThis has a 50% chance to poison the target.",
    shortDesc: "The user shoots filthy, dense gunk at the target.\nThis has a 50% chance to poison the target.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 50,
        status: "psn"
      }
    ],
    num: 441,
    category: "Physical",
    name: "Gunk Shot",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 30,
      status: "psn"
    },
    target: "normal",
    type: "Poison",
    id: "gunkshot",
    fullname: "move: Gunk Shot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  ironhead: {
    exists: true,
    desc: "The user slams the target with its steel-hard head.\nThis flinches the target 30% of the time. Contact.",
    shortDesc: "The user slams the target with its steel-hard head.\nThis flinches the target 30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 442,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Iron Head",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Steel",
    id: "ironhead",
    fullname: "move: Iron Head",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  magneticburst: {
    exists: true,
    num: 443,
    accuracy: true,
    basePower: 50,
    category: "Special",
    name: "Magnetic Burst",
    pp: 10,
    priority: 1,
    critRatio: 1,
    type: "Steel",
    target: "normal",
    desc: "The user rapidly releases a burst of magnetic bombs.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user rapidly releases a burst of magnetic bombs.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 100
    },
    id: "magneticburst",
    fullname: "move: Magnetic Burst",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  stoneedge: {
    exists: true,
    accuracy: 90,
    basePower: 80,
    critRatio: 7,
    desc: "The user stabs the target from below with jagged\nstones. This ALWAYS results in a critical hit.\nBypasses Protect.",
    shortDesc: "The user stabs the target from below with jagged\nstones. This ALWAYS results in a critical hit.\nBypasses Protect.",
    flags: {
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 190
    },
    num: 444,
    category: "Physical",
    name: "Stone Edge",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "stoneedge",
    fullname: "move: Stone Edge",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  captivate: {
    exists: true,
    type: "Fairy",
    desc: "If any opposing Pokemon is the opposite gender of\nthe user, it is charmed, which lowers it's Attack and\nSp. Atk by 2. Z-Effect +2 Sp. Def.",
    shortDesc: "If any opposing Pokemon is the opposite gender of\nthe user, it is charmed, which lowers it's Attack and\nSp. Atk by 2. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: -2
        }
      },
      {
        chance: 0,
        boosts: {
          atk: -2
        }
      }
    ],
    isNonstandard: null,
    num: 445,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Captivate",
    pp: 20,
    priority: 0,
    boosts: {
      spa: -2
    },
    secondary: null,
    target: "allAdjacentFoes",
    zMove: {
      boost: {
        spd: 2
      }
    },
    id: "captivate",
    fullname: "move: Captivate",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stealthrock: {
    exists: true,
    target: "normal",
    desc: "Lays a trap of levitating stones around the opponent's\nside, damaging foes that switch in based on their\nweakness to Rock. Z-Effect +2 Defense.",
    shortDesc: "Lays a trap of levitating stones around the opponent's\nside, damaging foes that switch in based on their\nweakness to Rock. Z-Effect +2 Defense.",
    flags: {
      reflectable: 1
    },
    num: 446,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Stealth Rock",
    pp: 20,
    priority: 0,
    sideCondition: "stealthrock",
    condition: {},
    secondary: null,
    type: "Rock",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "stealthrock",
    fullname: "move: Stealth Rock",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grassknot: {
    exists: true,
    basePower: 1,
    category: "Physical",
    desc: "The user snares the target with grass and trips it.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS lowers the foe's Speed by 1. Contact.",
    shortDesc: "The user snares the target with grass and trips it.\nThe heavier the target, the stronger this becomes.\nThis ALWAYS lowers the foe's Speed by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    num: 447,
    accuracy: 100,
    name: "Grass Knot",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    id: "grassknot",
    fullname: "move: Grass Knot",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  commotion: {
    exists: true,
    num: 448,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    name: "Commotion",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "allAdjacentFoes",
    desc: "The user attacks the target with sound waves of\ndeafening chatter. This confuses the target for 4\nturns 100% of the time.",
    shortDesc: "The user attacks the target with sound waves of\ndeafening chatter. This confuses the target for 4\nturns 100% of the time.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        status: "tox"
      }
    ],
    id: "commotion",
    fullname: "move: Commotion",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  ancientforce: {
    exists: true,
    num: 449,
    accuracy: 100,
    basePower: 100,
    category: "Special",
    name: "Ancient Force",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "normal",
    desc: "The user taps into a chaotic, ancient force.\nThis changes type in accordance with a held Plate,\nand becomes 20% stronger with a Plate equipped.",
    shortDesc: "The user taps into a chaotic, ancient force.\nThis changes type in accordance with a held Plate,\nand becomes 20% stronger with a Plate equipped.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    id: "ancientforce",
    fullname: "move: Ancient Force",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  bugbiting: {
    exists: true,
    num: 450,
    accuracy: 100,
    basePower: 35,
    category: "Physical",
    name: "Bug Biting",
    pp: 20,
    priority: 0,
    critRatio: 1,
    type: "Bug",
    target: "normal",
    desc: "The user bites the foe TWICE. If the foe is holding a\nBerry, the user eats it and gains its effect. Contact.\nThis has a 15% flinch rate per hit.",
    shortDesc: "The user bites the foe TWICE. If the foe is holding a\nBerry, the user eats it and gains its effect. Contact.\nThis has a 15% flinch rate per hit.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 2,
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 15,
        volatileStatus: "flinch"
      }
    ],
    id: "bugbiting",
    fullname: "move: Bug Biting",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  chargebeam: {
    exists: true,
    accuracy: 100,
    pp: 5,
    desc: "The user fires off a weak beam of electricity that\nboosts the user's Sp. Atk by 1 after each use.",
    shortDesc: "The user fires off a weak beam of electricity that\nboosts the user's Sp. Atk by 1 after each use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 451,
    basePower: 50,
    category: "Special",
    name: "Charge Beam",
    priority: 0,
    secondary: {
      chance: 70,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Electric",
    id: "chargebeam",
    fullname: "move: Charge Beam",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  woodhammer: {
    exists: true,
    basePower: 125,
    pp: 10,
    desc: "The user powerfully slams the target with a tree.\nThis deals 25% recoil to the user, and drops\nDefense 30% of the time. Contact.",
    shortDesc: "The user powerfully slams the target with a tree.\nThis deals 25% recoil to the user, and drops\nDefense 30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    num: 452,
    accuracy: 100,
    category: "Physical",
    name: "Wood Hammer",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "woodhammer",
    fullname: "move: Wood Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  aquajet: {
    exists: true,
    accuracy: true,
    basePower: 50,
    pp: 15,
    desc: "The user quickly surges at the target. This attack\nhas +1 priority, and can't miss. Contact.",
    shortDesc: "The user quickly surges at the target. This attack\nhas +1 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 453,
    category: "Physical",
    name: "Aqua Jet",
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Water",
    id: "aquajet",
    fullname: "move: Aqua Jet",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  attackorder: {
    exists: true,
    accuracy: true,
    pp: 5,
    critRatio: 7,
    desc: "Vespiquen orders its underlings to assault the foe.\nThis ALWAYS results in a critical hit, and can't miss.",
    shortDesc: "Vespiquen orders its underlings to assault the foe.\nThis ALWAYS results in a critical hit, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 195
    },
    num: 454,
    basePower: 90,
    category: "Physical",
    name: "Attack Order",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "attackorder",
    fullname: "move: Attack Order",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  defendorder: {
    exists: true,
    pp: 2,
    priority: 4,
    desc: "Vespiquen orders its underlings to shield its body.\nThis raises Vespiquen's Defense and Sp. Def by 1.\nThis has +4 Priority. Z-Effect +2 crit rate.",
    shortDesc: "Vespiquen orders its underlings to shield its body.\nThis raises Vespiquen's Defense and Sp. Def by 1.\nThis has +4 Priority. Z-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spd: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 455,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Defend Order",
    boosts: {
      def: 1,
      spd: 1
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "defendorder",
    fullname: "move: Defend Order",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  healorder: {
    exists: true,
    pp: 5,
    priority: 4,
    desc: "Vespiquen orders its underlings to heal itself.\nThis heals Vespiquen by 50% of it's max HP.\nThis has +4 priority. Z-Effect heals user fully.",
    shortDesc: "Vespiquen orders its underlings to heal itself.\nThis heals Vespiquen by 50% of it's max HP.\nThis has +4 priority. Z-Effect heals user fully.",
    flags: {
      heal: 1,
      snatch: 1
    },
    isNonstandard: null,
    num: 456,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Heal Order",
    heal: [
      1,
      2
    ],
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "healorder",
    fullname: "move: Heal Order",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  headsmash: {
    exists: true,
    accuracy: 100,
    desc: "The user attacks the target with a hazardous,\nfull-power headbutt. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    shortDesc: "The user attacks the target with a hazardous,\nfull-power headbutt. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    num: 457,
    basePower: 150,
    category: "Physical",
    name: "Head Smash",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "headsmash",
    fullname: "move: Head Smash",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  breakingswipe: {
    exists: true,
    num: 458,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Breaking Swipe",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Dragon",
    target: "allAdjacentFoes",
    desc: "The user widely swipes at the foes with great force.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    shortDesc: "The user widely swipes at the foes with great force.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    id: "breakingswipe",
    fullname: "move: Breaking Swipe",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  drakonicbeam: {
    exists: true,
    num: 459,
    accuracy: 100,
    basePower: 180,
    category: "Special",
    name: "Drakonic Beam",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Dragon",
    target: "normal",
    desc: "The user unleashes a destructive beam of dragon\nenergy at the foe. This lowers the user's Sp. Atk\nstat by 4 (-2/3) after use in exchange for high power.",
    shortDesc: "The user unleashes a destructive beam of dragon\nenergy at the foe. This lowers the user's Sp. Atk\nstat by 4 (-2/3) after use in exchange for high power.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -4
      }
    },
    zMove: {
      basePower: 230
    },
    noPPBoosts: true,
    id: "drakonicbeam",
    fullname: "move: Drakonic Beam",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  subspacetear: {
    exists: true,
    num: 460,
    accuracy: 90,
    basePower: 80,
    category: "Special",
    name: "Subspace Tear",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Psychic",
    target: "normal",
    desc: "Using psychic powers, the user tears the space\naround the foe. This ALWAYS results in a critical hit.\nBypasses Protect.",
    shortDesc: "Using psychic powers, the user tears the space\naround the foe. This ALWAYS results in a critical hit.\nBypasses Protect.",
    flags: {
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 190
    },
    id: "subspacetear",
    fullname: "move: Subspace Tear",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  lunardance: {
    exists: true,
    pp: 2,
    desc: "The user absorbs energy from the moon and performs\na mystic dance. This boosts the user's Sp. Atk,\nSp. Def and Speed by 1. Z-Effect heals the user fully.",
    shortDesc: "The user absorbs energy from the moon and performs\na mystic dance. This boosts the user's Sp. Atk,\nSp. Def and Speed by 1. Z-Effect heals the user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: 1
        }
      },
      {
        chance: 100,
        boosts: {
          spd: 1
        }
      },
      {
        chance: 100,
        boosts: {
          spe: 1
        }
      }
    ],
    noPPBoosts: true,
    condition: {
      duration: 2,
      onSwitchInPriority: 1
    },
    num: 461,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Lunar Dance",
    priority: 0,
    selfdestruct: "ifHit",
    slotCondition: "lunardance",
    secondary: null,
    target: "self",
    type: "Psychic",
    id: "lunardance",
    fullname: "move: Lunar Dance",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  crushgrip: {
    exists: true,
    basePower: 1,
    critRatio: 7,
    type: "Ground",
    desc: "Regigias grips the foe with immense force. This ALWAYS\ncrits. Z-MOVE is 250 BP, AND gives +1 to all stats.\n120 BP without crit if target is full HP. Contact.",
    shortDesc: "Regigias grips the foe with immense force. This ALWAYS\ncrits. Z-MOVE is 250 BP, AND gives +1 to all stats.\n120 BP without crit if target is full HP. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 250
    },
    isNonstandard: null,
    num: 462,
    accuracy: 100,
    category: "Physical",
    name: "Crush Grip",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    maxMove: {
      basePower: 140
    },
    id: "crushgrip",
    fullname: "move: Crush Grip",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  firevortex: {
    exists: true,
    num: 463,
    accuracy: 85,
    basePower: 130,
    category: "Special",
    name: "Fire Vortex",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The target becomes trapped within a maelstrom of\nfire that traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The target becomes trapped within a maelstrom of\nfire that traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    id: "firevortex",
    fullname: "move: Fire Vortex",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  darkvoid: {
    exists: true,
    accuracy: 100,
    pp: 1,
    desc: "Darkai drags the foes into a world of darkness,\nputting them to sleep for three guaranteed turns.\nZ-Effect gives +3 Speed.",
    shortDesc: "Darkai drags the foes into a world of darkness,\nputting them to sleep for three guaranteed turns.\nZ-Effect gives +3 Speed.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 464,
    basePower: 0,
    category: "Status",
    name: "Dark Void",
    priority: 0,
    status: "slp",
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dark",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "darkvoid",
    fullname: "move: Dark Void",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  seedflare: {
    exists: true,
    desc: "The user emits a destructive blast from within itself.\nThis has a 50% chance to drop the foe's Sp. Def by 2.",
    shortDesc: "The user emits a destructive blast from within itself.\nThis has a 50% chance to drop the foe's Sp. Def by 2.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          spd: -2
        }
      }
    ],
    isNonstandard: null,
    num: 465,
    accuracy: 85,
    basePower: 120,
    category: "Special",
    name: "Seed Flare",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 40,
      boosts: {
        spd: -2
      }
    },
    target: "normal",
    type: "Grass",
    id: "seedflare",
    fullname: "move: Seed Flare",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  ominouswind: {
    exists: true,
    pp: 15,
    target: "allAdjacentFoes",
    desc: "The user blasts the target with a gust of dismal wind.\nThis ALWAYS drops the foe's offensive stats by 1.",
    shortDesc: "The user blasts the target with a gust of dismal wind.\nThis ALWAYS drops the foe's offensive stats by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    isNonstandard: null,
    num: 466,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Ominous Wind",
    priority: 0,
    secondary: {
      chance: 10,
      self: {
        boosts: {
          atk: 1,
          def: 1,
          spa: 1,
          spd: 1,
          spe: 1
        }
      }
    },
    type: "Ghost",
    id: "ominouswind",
    fullname: "move: Ominous Wind",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  shadowforce: {
    exists: true,
    accuracy: true,
    desc: "The user disappears, then strikes powerfully on the\nnext turn. This lowers the user's Defense stat by 2\nafter use. Ignores Protect & Substitute. Contact.",
    shortDesc: "The user disappears, then strikes powerfully on the\nnext turn. This lowers the user's Defense stat by 2\nafter use. Ignores Protect & Substitute. Contact.",
    flags: {
      bypasssub: 1,
      charge: 1,
      mirror: 1
    },
    self: {
      boosts: {
        def: -2
      }
    },
    num: 467,
    basePower: 120,
    category: "Physical",
    name: "Shadow Force",
    pp: 5,
    priority: 0,
    breaksProtect: true,
    condition: {
      duration: 2,
      onInvulnerability: false
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "shadowforce",
    fullname: "move: Shadow Force",
    effectType: "Move",
    kind: "Move",
    gen: 4,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  honeclaws: {
    exists: true,
    pp: 3,
    desc: "The user sharpens its claws to boost its Attack stat\nby 1, and Accuracy by 2. Z-Effect +2 crit rate.",
    shortDesc: "The user sharpens its claws to boost its Attack stat\nby 1, and Accuracy by 2. Z-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          accuracy: 2
        }
      }
    ],
    noPPBoosts: true,
    num: 468,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Hone Claws",
    priority: 0,
    boosts: {
      atk: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Dark",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "honeclaws",
    fullname: "move: Hone Claws",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wideguard: {
    exists: true,
    pp: 20,
    priority: 6,
    target: "normal",
    desc: "The user protects its side of the field from spread\nmoves & Z-Moves, even in single battles. This can be\nused in succession without fail. Z-Effect +3 Defense.",
    shortDesc: "The user protects its side of the field from spread\nmoves & Z-Moves, even in single battles. This can be\nused in succession without fail. Z-Effect +3 Defense.",
    num: 469,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Wide Guard",
    flags: {
      snatch: 1
    },
    sideCondition: "wideguard",
    condition: {
      duration: 1,
      onTryHitPriority: 4
    },
    secondary: null,
    type: "Rock",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "wideguard",
    fullname: "move: Wide Guard",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  guardsplit: {
    exists: true,
    priority: 4,
    desc: "The user employs its psychic power to average its\nDefense and Sp. Def stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    shortDesc: "The user employs its psychic power to average its\nDefense and Sp. Def stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    flags: {
      protect: 1
    },
    num: 470,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Guard Split",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "guardsplit",
    fullname: "move: Guard Split",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powersplit: {
    exists: true,
    priority: 4,
    desc: "The user employs its psychic power to average its\nAttack and Sp. Atk stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    shortDesc: "The user employs its psychic power to average its\nAttack and Sp. Atk stats with those of the target.\nZ-Effect +2 Sp. Atk. +4 Priority.",
    flags: {
      protect: 1
    },
    num: 471,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Power Split",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "powersplit",
    fullname: "move: Power Split",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  wonderroom: {
    exists: true,
    priority: 6,
    target: "normal",
    desc: "The user creates a bizarre area in which Pokemon’s\nDefense and Sp. Def stats are swapped for\nfive turns. Z-Effect +2 Sp. Atk. +6 Priority.",
    shortDesc: "The user creates a bizarre area in which Pokemon’s\nDefense and Sp. Def stats are swapped for\nfive turns. Z-Effect +2 Sp. Atk. +6 Priority.",
    num: 472,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Wonder Room",
    pp: 10,
    flags: {
      mirror: 1
    },
    pseudoWeather: "wonderroom",
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 5
    },
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "wonderroom",
    fullname: "move: Wonder Room",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  psyshock: {
    exists: true,
    basePower: 95,
    desc: "The user materializes an odd psychic blast to attack.\nThis move deals Physical damage to the target.",
    shortDesc: "The user materializes an odd psychic blast to attack.\nThis move deals Physical damage to the target.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 473,
    accuracy: 100,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Psyshock",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "psyshock",
    fullname: "move: Psyshock",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  venoshock: {
    exists: true,
    basePower: 70,
    desc: "The user drenches the target in a special poisonous\nliquid. This move's power is doubled if the target\nis poisoned.",
    shortDesc: "The user drenches the target in a special poisonous\nliquid. This move's power is doubled if the target\nis poisoned.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 474,
    accuracy: 100,
    category: "Special",
    name: "Venoshock",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Poison",
    id: "venoshock",
    fullname: "move: Venoshock",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    }
  },
  autotomize: {
    exists: true,
    pp: 1,
    desc: "The user sheds part of its body to make itself lighter\nand maximize its Speed stat to +5. In exchange, the\nuser's defense stats drop by 1. Z-Effect +2 crit rate.",
    shortDesc: "The user sheds part of its body to make itself lighter\nand maximize its Speed stat to +5. In exchange, the\nuser's defense stats drop by 1. Z-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spe: 5
        }
      },
      {
        chance: 0,
        boosts: {
          def: -1
        }
      },
      {
        chance: 0,
        boosts: {
          spd: -1
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 475,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Autotomize",
    priority: 0,
    boosts: {
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "autotomize",
    fullname: "move: Autotomize",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  ragepowder: {
    exists: true,
    pp: 5,
    desc: "The user scatters a cloud of irritating powder to\ndraw attention to itself. Opponents aim only at\nthe user.",
    shortDesc: "The user scatters a cloud of irritating powder to\ndraw attention to itself. Opponents aim only at\nthe user.",
    flags: {},
    num: 476,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rage Powder",
    priority: 2,
    volatileStatus: "ragepowder",
    condition: {
      duration: 1,
      onFoeRedirectTargetPriority: 1
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "ragepowder",
    fullname: "move: Rage Powder",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  telekinesis: {
    exists: true,
    priority: 4,
    desc: "The user makes the target float with telekinesis.\nIn addition to levitating, no attacks will miss the\nfoe for 15 turns. +4 Priority. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user makes the target float with telekinesis.\nIn addition to levitating, no attacks will miss the\nfoe for 15 turns. +4 Priority. Z-Effect +2 Sp. Atk.",
    flags: {
      gravity: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 477,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Telekinesis",
    pp: 15,
    volatileStatus: "telekinesis",
    condition: {
      duration: 3,
      onAccuracyPriority: -1,
      onResidualOrder: 19
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "telekinesis",
    fullname: "move: Telekinesis",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magicroom: {
    exists: true,
    priority: 6,
    target: "normal",
    desc: "The user creates a bizarre area in which Pokemon’s\nheld items lose their effects for five turns.\nZ-Effect +2 Sp. Atk. +6 Priority.",
    shortDesc: "The user creates a bizarre area in which Pokemon’s\nheld items lose their effects for five turns.\nZ-Effect +2 Sp. Atk. +6 Priority.",
    num: 478,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magic Room",
    pp: 10,
    flags: {
      mirror: 1
    },
    pseudoWeather: "magicroom",
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 6
    },
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "magicroom",
    fullname: "move: Magic Room",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  smackdown: {
    exists: true,
    basePower: 80,
    desc: "The user throws a stone or similar projectile to\nattack an opponent. A flying Pokemon will fall to the\nground when it’s hit. 30% flinch rate.",
    shortDesc: "The user throws a stone or similar projectile to\nattack an opponent. A flying Pokemon will fall to the\nground when it’s hit. 30% flinch rate.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "25"
      },
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 479,
    accuracy: 100,
    category: "Physical",
    name: "Smack Down",
    pp: 15,
    priority: 0,
    volatileStatus: "smackdown",
    condition: {
      noCopy: true
    },
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "smackdown",
    fullname: "move: Smack Down",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  stormthrow: {
    exists: true,
    accuracy: 90,
    basePower: 80,
    pp: 5,
    critRatio: 7,
    desc: "The user throws the target violently.\nThis ALWAYS results in a critical hit.\nBypasses Protect. Contact.",
    shortDesc: "The user throws the target violently.\nThis ALWAYS results in a critical hit.\nBypasses Protect. Contact.",
    flags: {
      contact: 1,
      mirror: 1
    },
    zMove: {
      basePower: 190
    },
    isNonstandard: null,
    num: 480,
    category: "Physical",
    name: "Storm Throw",
    priority: 0,
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "stormthrow",
    fullname: "move: Storm Throw",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  flameburst: {
    exists: true,
    basePower: 25,
    desc: "The user attacks the target with a bursting flame.\nThis hits 3 times, and damages Pokemon next to the\ntarget for 6% of their HP per hit for a total of 18%.",
    shortDesc: "The user attacks the target with a bursting flame.\nThis hits 3 times, and damages Pokemon next to the\ntarget for 6% of their HP per hit for a total of 18%.",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    multihit: 3,
    isNonstandard: null,
    num: 481,
    accuracy: 100,
    category: "Special",
    name: "Flame Burst",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "flameburst",
    fullname: "move: Flame Burst",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  sludgewave: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    pp: 5,
    target: "allAdjacentFoes",
    desc: "The user swamps the foes with a wave of filthy sludge.\nThis ALWAYS lowers the Speed of the foes by 1.",
    shortDesc: "The user swamps the foes with a wave of filthy sludge.\nThis ALWAYS lowers the Speed of the foes by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    num: 482,
    category: "Special",
    name: "Sludge Wave",
    priority: 0,
    secondary: {
      chance: 10,
      status: "psn"
    },
    type: "Poison",
    id: "sludgewave",
    fullname: "move: Sludge Wave",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  quiverdance: {
    exists: true,
    pp: 2,
    desc: "The user lightly performs a beautiful, mystic dance.\nThis boosts the user’s Sp. Atk and Speed by 1.\nZ-Effect +2 Sp. Def.",
    shortDesc: "The user lightly performs a beautiful, mystic dance.\nThis boosts the user’s Sp. Atk and Speed by 1.\nZ-Effect +2 Sp. Def.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spe: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 483,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Quiver Dance",
    priority: 0,
    boosts: {
      spa: 1,
      spd: 1,
      spe: 1
    },
    secondary: null,
    target: "self",
    type: "Bug",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "quiverdance",
    fullname: "move: Quiver Dance",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  heavyslam: {
    exists: true,
    basePower: 1,
    desc: "The user slams into the target with its heavy body.\nThe heavier the user is, the stronger this becomes.\nThis grounds a flying or levitating opponent. Contact.",
    shortDesc: "The user slams into the target with its heavy body.\nThe heavier the user is, the stronger this becomes.\nThis grounds a flying or levitating opponent. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "25"
      }
    ],
    num: 484,
    accuracy: 100,
    category: "Physical",
    name: "Heavy Slam",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Steel",
    maxMove: {
      basePower: 130
    },
    id: "heavyslam",
    fullname: "move: Heavy Slam",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  synchronoise: {
    exists: true,
    type: "Normal",
    desc: "Using an odd sound wave, the user inflicts massive\ndamage on any Pokemon that share a type with the\nuser. This ALWAYS boosts the user's Sp. Atk by 1.",
    shortDesc: "Using an odd sound wave, the user inflicts massive\ndamage on any Pokemon that share a type with the\nuser. This ALWAYS boosts the user's Sp. Atk by 1.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 485,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Synchronoise",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "allAdjacent",
    id: "synchronoise",
    fullname: "move: Synchronoise",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 190
    }
  },
  electroball: {
    exists: true,
    basePower: 1,
    pp: 5,
    desc: "The user hurls an electric orb at the target. The\nfaster the user is than the foe, the higher the power.\nThis ALWAYS boosts the user's Speed by 1 after use.",
    shortDesc: "The user hurls an electric orb at the target. The\nfaster the user is than the foe, the higher the power.\nThis ALWAYS boosts the user's Speed by 1 after use.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    num: 486,
    accuracy: 100,
    category: "Special",
    name: "Electro Ball",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    id: "electroball",
    fullname: "move: Electro Ball",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  soak: {
    exists: true,
    desc: "The user douses the target in water.\nThis changes their typing to pure Water.\nZ-Effect +2 Sp. Atk.",
    shortDesc: "The user douses the target in water.\nThis changes their typing to pure Water.\nZ-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 487,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Soak",
    pp: 20,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Water",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "soak",
    fullname: "move: Soak",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  pyrodash: {
    exists: true,
    num: 488,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Pyro Dash",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The user quickly dashes at the target cloaked in fire.\nThis has +1 priority, and can't miss. Contact.",
    shortDesc: "The user quickly dashes at the target cloaked in fire.\nThis has +1 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "pyrodash",
    fullname: "move: Pyro Dash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  coil: {
    exists: true,
    pp: 3,
    desc: "The user coils up it's long body. This boosts\nthe user's Attack, Defense and Accuracy by 1.\nZ-Effect +2 crit rate.",
    shortDesc: "The user coils up it's long body. This boosts\nthe user's Attack, Defense and Accuracy by 1.\nZ-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          def: 1
        }
      },
      {
        chance: 0,
        boosts: {
          accuracy: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 489,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Coil",
    priority: 0,
    boosts: {
      atk: 1,
      def: 1,
      accuracy: 1
    },
    secondary: null,
    target: "self",
    type: "Poison",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "coil",
    fullname: "move: Coil",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lowsweep: {
    exists: true,
    basePower: 75,
    desc: "The user makes a swift attack on the target’s legs.\nThis has a 30% flinch rate. Contact.",
    shortDesc: "The user makes a swift attack on the target’s legs.\nThis has a 30% flinch rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 490,
    accuracy: 100,
    category: "Physical",
    name: "Low Sweep",
    pp: 20,
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "normal",
    type: "Fighting",
    id: "lowsweep",
    fullname: "move: Low Sweep",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  sludgeshot: {
    exists: true,
    num: 491,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Sludge Shot",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Poison",
    target: "normal",
    desc: "The user shoots sludge at astonishing speed.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user shoots sludge at astonishing speed.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    zMove: {
      basePower: 90
    },
    id: "sludgeshot",
    fullname: "move: Sludge Shot",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    }
  },
  foulplay: {
    exists: true,
    pp: 10,
    desc: "This devious attack uses the target's Attack stat\ninstead of the user's when dealing damage. Contact.",
    shortDesc: "This devious attack uses the target's Attack stat\ninstead of the user's when dealing damage. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 492,
    accuracy: 100,
    basePower: 95,
    category: "Physical",
    name: "Foul Play",
    priority: 0,
    overrideOffensivePokemon: "target",
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "foulplay",
    fullname: "move: Foul Play",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  simplebeam: {
    exists: true,
    type: "Psychic",
    desc: "The user’s mysterious psychic wave changes the\ntarget’s Ability to Simple. Z-Effect +2 Sp. Atk.",
    shortDesc: "The user’s mysterious psychic wave changes the\ntarget’s Ability to Simple. Z-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 493,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Simple Beam",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "simplebeam",
    fullname: "move: Simple Beam",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  entrainment: {
    exists: true,
    desc: "The user influences the target to copy it's ability.\nZ-Effect +2 Atk.",
    shortDesc: "The user influences the target to copy it's ability.\nZ-Effect +2 Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    num: 494,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Entrainment",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "entrainment",
    fullname: "move: Entrainment",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  afteryou: {
    exists: true,
    pp: 5,
    desc: "Makes an ally move right after the user.\nThis can be useful to let a slower ally move first.",
    shortDesc: "Makes an ally move right after the user.\nThis can be useful to let a slower ally move first.",
    flags: {
      bypasssub: 1
    },
    num: 495,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "After You",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "afteryou",
    fullname: "move: After You",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  harmonize: {
    exists: true,
    num: 496,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Harmonize",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "allAdjacentFoes",
    desc: "The user attacks the target with it's voice. Others can\nharmonize to increase the power of the voice.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user attacks the target with it's voice. Others can\nharmonize to increase the power of the voice.\nThis ALWAYS drops the foe's attacking stats by 1.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    id: "harmonize",
    fullname: "move: Harmonize",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  echoedvoice: {
    exists: true,
    accuracy: 95,
    basePower: 30,
    target: "allAdjacentFoes",
    desc: "The user attacks the target with an echoing voice.\nIf this move is used every turn, its power\nis boosted by 40 each time, for a maximum of 200.",
    shortDesc: "The user attacks the target with an echoing voice.\nIf this move is used every turn, its power\nis boosted by 40 each time, for a maximum of 200.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    num: 497,
    category: "Special",
    name: "Echoed Voice",
    pp: 15,
    priority: 0,
    condition: {
      duration: 2
    },
    secondary: null,
    type: "Normal",
    id: "echoedvoice",
    fullname: "move: Echoed Voice",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    },
    zMove: {
      basePower: 100
    }
  },
  skittersmack: {
    exists: true,
    num: 498,
    accuracy: true,
    basePower: 70,
    category: "Physical",
    name: "Skitter Smack",
    pp: 20,
    priority: 0,
    critRatio: 1,
    type: "Bug",
    target: "normal",
    desc: "The user creeps up on the foe, striking them quickly.\nThis ALWAYS drops the foe's attacking stats by 1.\nThis also ignores any defense boosts. Contact.",
    shortDesc: "The user creeps up on the foe, striking them quickly.\nThis ALWAYS drops the foe's attacking stats by 1.\nThis also ignores any defense boosts. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    id: "skittersmack",
    fullname: "move: Skitter Smack",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  clearsmog: {
    exists: true,
    basePower: 55,
    target: "allAdjacentFoes",
    desc: "The user emits an odd gas, damaging the foes and\nresetting all stat changes to zero.",
    shortDesc: "The user emits an odd gas, damaging the foes and\nresetting all stat changes to zero.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 499,
    accuracy: true,
    category: "Special",
    name: "Clear Smog",
    pp: 15,
    priority: 0,
    secondary: null,
    type: "Poison",
    id: "clearsmog",
    fullname: "move: Clear Smog",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 80
    }
  },
  storedpower: {
    exists: true,
    pp: 3,
    desc: "The user releases it's stored up power all at once.\nThis move gains 20 Base Power for every stat boost,\nand ALWAYS boosts the user's Sp. Atk by 1 after use.",
    shortDesc: "The user releases it's stored up power all at once.\nThis move gains 20 Base Power for every stat boost,\nand ALWAYS boosts the user's Sp. Atk by 1 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    noPPBoosts: true,
    num: 500,
    accuracy: 100,
    basePower: 20,
    category: "Special",
    name: "Stored Power",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    id: "storedpower",
    fullname: "move: Stored Power",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  quickguard: {
    exists: true,
    pp: 30,
    priority: 6,
    target: "normal",
    desc: "The user protects its side of the field from all\ntargeted priority moves. This can be used repeatedly\nwithout risk of failing. Z-Effect +3 Defense.",
    shortDesc: "The user protects its side of the field from all\ntargeted priority moves. This can be used repeatedly\nwithout risk of failing. Z-Effect +3 Defense.",
    num: 501,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Quick Guard",
    flags: {
      snatch: 1
    },
    sideCondition: "quickguard",
    condition: {
      duration: 1,
      onTryHitPriority: 4
    },
    secondary: null,
    type: "Fighting",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "quickguard",
    fullname: "move: Quick Guard",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  allyswitch: {
    exists: true,
    priority: 6,
    desc: "The user switches places with an ally.\nThis has +6 priority. Z-Effect +3 Speed.",
    shortDesc: "The user switches places with an ally.\nThis has +6 priority. Z-Effect +3 Speed.",
    stallingMove: false,
    num: 502,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ally Switch",
    pp: 15,
    flags: {},
    secondary: null,
    target: "self",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "allyswitch",
    fullname: "move: Ally Switch",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  scald: {
    exists: true,
    basePower: 75,
    desc: "The user shoots boiling hot water at its target.\nThis burns the target 30% of the time.\n(More like 100%, am I right?)",
    shortDesc: "The user shoots boiling hot water at its target.\nThis burns the target 30% of the time.\n(More like 100%, am I right?)",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 503,
    accuracy: 100,
    category: "Special",
    name: "Scald",
    pp: 15,
    priority: 0,
    thawsTarget: true,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Water",
    id: "scald",
    fullname: "move: Scald",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  shellsmash: {
    exists: true,
    pp: 2,
    desc: "The user breaks its shell, which lowers Defense and\nSp. Def stats by 1, but raises Sp. Atk, Attack, and\nSpeed by 2. Z-Effect +1 Speed.",
    shortDesc: "The user breaks its shell, which lowers Defense and\nSp. Def stats by 1, but raises Sp. Atk, Attack, and\nSpeed by 2. Z-Effect +1 Speed.",
    flags: {
      dance: 1,
      snatch: 1
    },
    noPPBoosts: true,
    num: 504,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shell Smash",
    priority: 0,
    boosts: {
      def: -1,
      spd: -1,
      atk: 2,
      spa: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "shellsmash",
    fullname: "move: Shell Smash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  healpulse: {
    exists: true,
    target: "normal",
    desc: "The user emits a healing pulse that restores the\ntarget’s HP by 2/3 of its max HP.\nZ-Effect heals user fully.",
    shortDesc: "The user emits a healing pulse that restores the\ntarget’s HP by 2/3 of its max HP.\nZ-Effect heals user fully.",
    flags: {
      protect: 1,
      reflectable: 1,
      pulse: 1
    },
    num: 505,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Heal Pulse",
    pp: 10,
    priority: 0,
    secondary: null,
    type: "Psychic",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "healpulse",
    fullname: "move: Heal Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hex: {
    exists: true,
    basePower: 70,
    desc: "This sinister attack does double damage to a foe\nwith a status affliction.",
    shortDesc: "This sinister attack does double damage to a foe\nwith a status affliction.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 506,
    accuracy: 100,
    category: "Special",
    name: "Hex",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "hex",
    fullname: "move: Hex",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  skydrop: {
    exists: true,
    accuracy: true,
    basePower: 95,
    target: "normal",
    desc: "The user takes the target into the sky, then drops it\nnext turn. The foe can't attack while in the sky.\nFails if the foe is too heavy. Can't miss. Contact.",
    shortDesc: "The user takes the target into the sky, then drops it\nnext turn. The foe can't attack while in the sky.\nFails if the foe is too heavy. Can't miss. Contact.",
    flags: {
      charge: 1,
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    isNonstandard: null,
    num: 507,
    category: "Physical",
    name: "Sky Drop",
    pp: 10,
    priority: 0,
    condition: {
      duration: 2,
      onFoeTrapPokemonPriority: -15,
      onFoeBeforeMovePriority: 12,
      onRedirectTargetPriority: 99
    },
    secondary: null,
    type: "Flying",
    id: "skydrop",
    fullname: "move: Sky Drop",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  shiftgear: {
    exists: true,
    pp: 2,
    desc: "The user rotates its gears, raising its Attack and\nSp. Atk by 1, and raising it's Speed by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "The user rotates its gears, raising its Attack and\nSp. Atk by 1, and raising it's Speed by 2.\nZ-Effect +2 crit rate.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spe: 2
        }
      },
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spa: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 508,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Shift Gear",
    priority: 0,
    boosts: {
      spe: 2,
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "shiftgear",
    fullname: "move: Shift Gear",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  circlethrow: {
    exists: true,
    accuracy: true,
    basePower: 95,
    pp: 15,
    priority: -4,
    desc: "The target is thrown, and a different Pokemon is\ndragged out. This attack always goes last, and can't\nmiss. Contact.",
    shortDesc: "The target is thrown, and a different Pokemon is\ndragged out. This attack always goes last, and can't\nmiss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 509,
    category: "Physical",
    name: "Circle Throw",
    forceSwitch: true,
    target: "normal",
    type: "Fighting",
    id: "circlethrow",
    fullname: "move: Circle Throw",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  burningmalice: {
    exists: true,
    num: 510,
    accuracy: 100,
    basePower: 85,
    category: "Special",
    name: "Burning Malice",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "allAdjacentFoes",
    desc: "The user's bitterness flares up, engulfing the target\nin flames fueled by pure malice. This consumes\nany berries or gems the foe holds.",
    shortDesc: "The user's bitterness flares up, engulfing the target\nin flames fueled by pure malice. This consumes\nany berries or gems the foe holds.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    id: "burningmalice",
    fullname: "move: Burning Malice",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  quash: {
    exists: true,
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 511,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Quash",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "quash",
    fullname: "move: Quash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  acrobatics: {
    exists: true,
    pp: 10,
    target: "normal",
    desc: "The user nimbly strikes the target. If the user is not\nholding an item, this attack inflicts double damage.\nContact.",
    shortDesc: "The user nimbly strikes the target. If the user is not\nholding an item, this attack inflicts double damage.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 110
    },
    num: 512,
    accuracy: 100,
    basePower: 55,
    category: "Physical",
    name: "Acrobatics",
    priority: 0,
    secondary: null,
    type: "Flying",
    id: "acrobatics",
    fullname: "move: Acrobatics",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  reflecttype: {
    exists: true,
    priority: 4,
    desc: "The user reflects the target’s type, making it the\nsame type as the target.\nThis has +4 priority. Z-Effect +1 all stats.",
    shortDesc: "The user reflects the target’s type, making it the\nsame type as the target.\nThis has +4 priority. Z-Effect +1 all stats.",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    num: 513,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Reflect Type",
    pp: 15,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "reflecttype",
    fullname: "move: Reflect Type",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  retaliate: {
    exists: true,
    basePower: 95,
    pp: 10,
    desc: "The user gets revenge for a fainted ally. If an ally\nfainted in the previous turn, this move’s power\nis doubled to insane levels. Contact.",
    shortDesc: "The user gets revenge for a fainted ally. If an ally\nfainted in the previous turn, this move’s power\nis doubled to insane levels. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 514,
    accuracy: 100,
    category: "Physical",
    name: "Retaliate",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "retaliate",
    fullname: "move: Retaliate",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  finalgambit: {
    exists: true,
    accuracy: true,
    basePower: 1,
    desc: "The user risks it all to attack the target. This user\nfaints, and deals damage equal to it's current HP.",
    shortDesc: "The user risks it all to attack the target. This user\nfaints, and deals damage equal to it's current HP.",
    flags: {},
    zMove: {
      basePower: 255
    },
    num: 515,
    category: "Special",
    name: "Final Gambit",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "finalgambit",
    fullname: "move: Final Gambit",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 70
    }
  },
  bestow: {
    exists: true,
    priority: 4,
    desc: "The user passes its held item to the target when the\ntarget isn’t holding an item. Z-Effect +2 Attack.",
    shortDesc: "The user passes its held item to the target when the\ntarget isn’t holding an item. Z-Effect +2 Attack.",
    flags: {
      bypasssub: 1,
      mirror: 1
    },
    isNonstandard: null,
    num: 516,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Bestow",
    pp: 15,
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 2
      }
    },
    id: "bestow",
    fullname: "move: Bestow",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  inferno: {
    exists: true,
    accuracy: 70,
    basePower: 130,
    desc: "The user attacks by engulfing the target in an\ncatastrophic inferno of flames. This always leaves\nthe target with a burn.",
    shortDesc: "The user attacks by engulfing the target in an\ncatastrophic inferno of flames. This always leaves\nthe target with a burn.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 205
    },
    num: 517,
    category: "Special",
    name: "Inferno",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 100,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    id: "inferno",
    fullname: "move: Inferno",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  waterpledge: {
    exists: true,
    desc: "A column of water strikes the target. When combined\nwith its fire equivalent, its power increases and a\nrainbow appears. 25% chance to boost Sp. Atk by one.",
    shortDesc: "A column of water strikes the target. When combined\nwith its fire equivalent, its power increases and a\nrainbow appears. 25% chance to boost Sp. Atk by one.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 518,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Water Pledge",
    pp: 10,
    priority: 0,
    condition: {
      duration: 4,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 7
    },
    secondary: null,
    target: "normal",
    type: "Water",
    id: "waterpledge",
    fullname: "move: Water Pledge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  firepledge: {
    exists: true,
    desc: "A column of fire hits the target. When used with its\ngrass equivalent, its power increases and a vast sea\nof fire appears. 25% chance to boost Sp. Atk by one.",
    shortDesc: "A column of fire hits the target. When used with its\ngrass equivalent, its power increases and a vast sea\nof fire appears. 25% chance to boost Sp. Atk by one.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 519,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Fire Pledge",
    pp: 10,
    priority: 0,
    condition: {
      duration: 4,
      onResidualOrder: 5,
      onResidualSubOrder: 1,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 8
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "firepledge",
    fullname: "move: Fire Pledge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  grasspledge: {
    exists: true,
    desc: "A column of grass hits the target. When used with\nits water equivalent, its power increases and a vast\nswamp appears. 25% chance to boost Sp. Atk by one.",
    shortDesc: "A column of grass hits the target. When used with\nits water equivalent, its power increases and a vast\nswamp appears. 25% chance to boost Sp. Atk by one.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 520,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Grass Pledge",
    pp: 10,
    priority: 0,
    condition: {
      duration: 4,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 9
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "grasspledge",
    fullname: "move: Grass Pledge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  voltswitch: {
    exists: true,
    accuracy: true,
    basePower: 75,
    pp: 15,
    desc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack can't miss.",
    shortDesc: "After making its attack, the user rushes back to\nswitch places with a party Pokemon in waiting.\nThis attack can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 521,
    category: "Special",
    name: "Volt Switch",
    priority: 0,
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Electric",
    id: "voltswitch",
    fullname: "move: Volt Switch",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  strugglebug: {
    exists: true,
    basePower: 60,
    pp: 15,
    desc: "The user struggles, lashing out at all opponents.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user struggles, lashing out at all opponents.\nThis ALWAYS drops the foe's attacking stats by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    num: 522,
    accuracy: 100,
    category: "Special",
    name: "Struggle Bug",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Bug",
    id: "strugglebug",
    fullname: "move: Struggle Bug",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  bulldoze: {
    exists: true,
    desc: "The user strikes everything around it with a small\nearthquake. This lowers the Speed stat of\nthose hit by 1.",
    shortDesc: "The user strikes everything around it with a small\nearthquake. This lowers the Speed stat of\nthose hit by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 523,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    name: "Bulldoze",
    pp: 20,
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacent",
    type: "Ground",
    id: "bulldoze",
    fullname: "move: Bulldoze",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  frostbreath: {
    exists: true,
    accuracy: 95,
    basePower: 65,
    critRatio: 7,
    desc: "The user blows its freezing breath on the target.\nThis attack always results in a critical hit.",
    shortDesc: "The user blows its freezing breath on the target.\nThis attack always results in a critical hit.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 524,
    category: "Special",
    name: "Frost Breath",
    pp: 10,
    priority: 0,
    willCrit: true,
    secondary: null,
    target: "normal",
    type: "Ice",
    id: "frostbreath",
    fullname: "move: Frost Breath",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  dragontail: {
    exists: true,
    accuracy: true,
    basePower: 95,
    pp: 15,
    priority: -4,
    desc: "The user slams the target with its tail, and a\ndifferent Pokemon is dragged out. This attack always\ngoes last, and can't miss. Contact.",
    shortDesc: "The user slams the target with its tail, and a\ndifferent Pokemon is dragged out. This attack always\ngoes last, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 175
    },
    num: 525,
    category: "Physical",
    name: "Dragon Tail",
    forceSwitch: true,
    target: "normal",
    type: "Dragon",
    id: "dragontail",
    fullname: "move: Dragon Tail",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  workup: {
    exists: true,
    pp: 3,
    desc: "The user is roused, and its Attack and Sp. Atk\nstats increase by 1. Z-Effect +1 Speed.",
    shortDesc: "The user is roused, and its Attack and Sp. Atk\nstats increase by 1. Z-Effect +1 Speed.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spa: 1
        }
      }
    ],
    noPPBoosts: true,
    num: 526,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Work Up",
    priority: 0,
    boosts: {
      atk: 1,
      spa: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "workup",
    fullname: "move: Work Up",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  electroweb: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    desc: "The user attacks and captures opposing Pokemon\nusing an electric net. This lowers their\nSpeed stat by 1.",
    shortDesc: "The user attacks and captures opposing Pokemon\nusing an electric net. This lowers their\nSpeed stat by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 120
    },
    num: 527,
    category: "Special",
    name: "Electroweb",
    pp: 15,
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Electric",
    id: "electroweb",
    fullname: "move: Electroweb",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  wildcharge: {
    exists: true,
    basePower: 110,
    pp: 10,
    desc: "The user shrouds itself in electricity and smashes\ninto its target. This has 20% recoil, and a 20%\nchance to paralyze the target. Contact.",
    shortDesc: "The user shrouds itself in electricity and smashes\ninto its target. This has 20% recoil, and a 20%\nchance to paralyze the target. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      20,
      100
    ],
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 20,
        status: "par"
      }
    ],
    num: 528,
    accuracy: 100,
    category: "Physical",
    name: "Wild Charge",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Electric",
    id: "wildcharge",
    fullname: "move: Wild Charge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  drillrun: {
    exists: true,
    accuracy: 100,
    critRatio: 3,
    desc: "The user crashes into its target while rotating its\nbody or body parts like a drill.  This has a 50% (+2)\ncrit rate. Contact.",
    shortDesc: "The user crashes into its target while rotating its\nbody or body parts like a drill.  This has a 50% (+2)\ncrit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    num: 529,
    basePower: 80,
    category: "Physical",
    name: "Drill Run",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Ground",
    id: "drillrun",
    fullname: "move: Drill Run",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  dracojet: {
    exists: true,
    num: 530,
    accuracy: true,
    basePower: 50,
    category: "Physical",
    name: "Draco Jet",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Dragon",
    target: "normal",
    desc: "The user strikes the target with immense speed.\nThis has +1 priority, and can't miss. Contact.",
    shortDesc: "The user strikes the target with immense speed.\nThis has +1 priority, and can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "dracojet",
    fullname: "move: Draco Jet",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  hoodwink: {
    exists: true,
    num: 531,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Hoodwink",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user unleashes a vicious blow after its cute act\nmakes the target less wary. This flinches the target\n30% of the time. Contact.",
    shortDesc: "The user unleashes a vicious blow after its cute act\nmakes the target less wary. This flinches the target\n30% of the time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    zMove: {
      basePower: 160
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    id: "hoodwink",
    fullname: "move: Hoodwink",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  branchleech: {
    exists: true,
    num: 532,
    accuracy: 100,
    basePower: 90,
    category: "Physical",
    name: "Branch Leech",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The user drains the foe's energy with branch-like\nappendages. The user’s HP is restored by 50% of\ndamage dealt. Contact.",
    shortDesc: "The user drains the foe's energy with branch-like\nappendages. The user’s HP is restored by 50% of\ndamage dealt. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    drain: [
      1,
      2
    ],
    zMove: {
      basePower: 175
    },
    id: "branchleech",
    fullname: "move: Branch Leech",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  sacredsword: {
    exists: true,
    accuracy: true,
    basePower: 65,
    pp: 5,
    critRatio: 7,
    desc: "The user attacks by slicing with a long horn or blade.\nThis ignores all stat boosts the target may have.\nThis ALWAYS lands a critical hit. Contact.",
    shortDesc: "The user attacks by slicing with a long horn or blade.\nThis ignores all stat boosts the target may have.\nThis ALWAYS lands a critical hit. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    num: 533,
    category: "Physical",
    name: "Sacred Sword",
    priority: 0,
    ignoreEvasion: true,
    ignoreDefensive: true,
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "sacredsword",
    fullname: "move: Sacred Sword",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 85
    },
    zMove: {
      basePower: 120
    }
  },
  razorshell: {
    exists: true,
    accuracy: 100,
    basePower: 80,
    critRatio: 3,
    desc: "The user cuts its target with it's hard shell. This\nhas a 50% (+2) crit rate. Contact.",
    shortDesc: "The user cuts its target with it's hard shell. This\nhas a 50% (+2) crit rate. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 160
    },
    num: 534,
    category: "Physical",
    name: "Razor Shell",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 50,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Water",
    id: "razorshell",
    fullname: "move: Razor Shell",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  heatcrash: {
    exists: true,
    basePower: 1,
    desc: "The user slams its target with its flame-covered\nbody. The more the user outweighs the target, the\nstronger this is. This has a 30% burn rate. Contact.",
    shortDesc: "The user slams its target with its flame-covered\nbody. The more the user outweighs the target, the\nstronger this is. This has a 30% burn rate. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    num: 535,
    accuracy: 100,
    category: "Physical",
    name: "Heat Crash",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Fire",
    maxMove: {
      basePower: 130
    },
    id: "heatcrash",
    fullname: "move: Heat Crash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  leafflurry: {
    exists: true,
    num: 536,
    accuracy: 100,
    basePower: 45,
    category: "Special",
    name: "Leaf Flurry",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The user whips up a rapid flurry of leaves at the foe.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user whips up a rapid flurry of leaves at the foe.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    id: "leafflurry",
    fullname: "move: Leaf Flurry",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  steamroller: {
    exists: true,
    basePower: 100,
    pp: 5,
    desc: "The user crushes its target by rolling over the target\nwith its rolled-up body. This flinches 30% of the\ntime and boosts Speed by one 100% of the time.",
    shortDesc: "The user crushes its target by rolling over the target\nwith its rolled-up body. This flinches 30% of the\ntime and boosts Speed by one 100% of the time.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      },
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 537,
    accuracy: 100,
    category: "Physical",
    name: "Steamroller",
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Bug",
    id: "steamroller",
    fullname: "move: Steamroller",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  cottonguard: {
    exists: true,
    pp: 2,
    desc: "The user protects itself by wrapping its body in dense\ncotton, which raises the user's Defense by 3.\nZ-Effect heals user fully.",
    shortDesc: "The user protects itself by wrapping its body in dense\ncotton, which raises the user's Defense by 3.\nZ-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 3
        }
      }
    ],
    noPPBoosts: true,
    num: 538,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Cotton Guard",
    priority: 0,
    boosts: {
      def: 3
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "cottonguard",
    fullname: "move: Cotton Guard",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  nightdaze: {
    exists: true,
    basePower: 100,
    target: "allAdjacentFoes",
    desc: "The user lets loose a horrible pitch-black shock wave.\nThis flinches 25% of the time, and afflicts a sleeping\nfoe with a horrible nightmare.",
    shortDesc: "The user lets loose a horrible pitch-black shock wave.\nThis flinches 25% of the time, and afflicts a sleeping\nfoe with a horrible nightmare.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "9"
      },
      {
        chance: 25,
        volatileStatus: "flinch"
      }
    ],
    num: 539,
    accuracy: 95,
    category: "Special",
    name: "Night Daze",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 40,
      boosts: {
        accuracy: -1
      }
    },
    type: "Dark",
    id: "nightdaze",
    fullname: "move: Night Daze",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  psystrike: {
    exists: true,
    accuracy: 85,
    basePower: 130,
    pp: 5,
    desc: "The user materializes a chaotic psychic blast to\nattack the target. This attack does physical damage.",
    shortDesc: "The user materializes a chaotic psychic blast to\nattack the target. This attack does physical damage.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    num: 540,
    category: "Special",
    overrideDefensiveStat: "def",
    name: "Psystrike",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "psystrike",
    fullname: "move: Psystrike",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  tailslap: {
    exists: true,
    accuracy: 100,
    pp: 15,
    desc: "The user attacks by striking the target hard with its\ntail. It hits 2-5 times in a row. Contact.",
    shortDesc: "The user attacks by striking the target hard with its\ntail. It hits 2-5 times in a row. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    num: 541,
    basePower: 25,
    category: "Physical",
    name: "Tail Slap",
    priority: 0,
    multihit: [
      2,
      5
    ],
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      basePower: 140
    },
    maxMove: {
      basePower: 130
    },
    id: "tailslap",
    fullname: "move: Tail Slap",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hurricane: {
    exists: true,
    accuracy: 85,
    basePower: 120,
    pp: 5,
    target: "normal",
    desc: "The user attacks by surrounding its opponent in a\nfierce hurricane. This flinches 20% of the time, and\ncan't miss in the rain.",
    shortDesc: "The user attacks by surrounding its opponent in a\nfierce hurricane. This flinches 20% of the time, and\ncan't miss in the rain.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    num: 542,
    category: "Special",
    name: "Hurricane",
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    type: "Flying",
    id: "hurricane",
    fullname: "move: Hurricane",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  headlongrush: {
    exists: true,
    num: 543,
    accuracy: 100,
    basePower: 150,
    category: "Physical",
    name: "Headlong Rush",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Ground",
    target: "normal",
    desc: "The user charges into the target with insane force.\nThis has 25% recoil, and lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    shortDesc: "The user charges into the target with insane force.\nThis has 25% recoil, and lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    id: "headlongrush",
    fullname: "move: Headlong Rush",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  geargrind: {
    exists: true,
    accuracy: 100,
    basePower: 55,
    pp: 5,
    desc: "The user attacks by grinding the target in it's gears.\nThis hits twice, with a 20% chance to flinch per hit.\nContact.",
    shortDesc: "The user attacks by grinding the target in it's gears.\nThis hits twice, with a 20% chance to flinch per hit.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 20,
        volatileStatus: "flinch"
      }
    ],
    isNonstandard: null,
    num: 544,
    category: "Physical",
    name: "Gear Grind",
    priority: 0,
    multihit: 2,
    secondary: null,
    target: "normal",
    type: "Steel",
    zMove: {
      basePower: 180
    },
    maxMove: {
      basePower: 130
    },
    id: "geargrind",
    fullname: "move: Gear Grind",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  searingshot: {
    exists: true,
    accuracy: 95,
    desc: "The user torches everything around it in an shower\nof immense flames. This burns 25% of the time.",
    shortDesc: "The user torches everything around it in an shower\nof immense flames. This burns 25% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1,
      bullet: 1
    },
    secondaries: [
      {
        chance: 25,
        status: "brn"
      }
    ],
    isNonstandard: null,
    num: 545,
    basePower: 100,
    category: "Special",
    name: "Searing Shot",
    pp: 5,
    priority: 0,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "allAdjacent",
    type: "Fire",
    id: "searingshot",
    fullname: "move: Searing Shot",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 180
    }
  },
  technoblast: {
    exists: true,
    desc: "The user fires a blast of energy at it's target. The\nmove’s type changes depending on the Drive the\nuser holds. This ALWAYS lowers the foe's Sp. Def by 1.",
    shortDesc: "The user fires a blast of energy at it's target. The\nmove’s type changes depending on the Drive the\nuser holds. This ALWAYS lowers the foe's Sp. Def by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -1
        }
      }
    ],
    isNonstandard: null,
    num: 546,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Techno Blast",
    pp: 5,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "technoblast",
    fullname: "move: Techno Blast",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  serenade: {
    exists: true,
    num: 547,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Serenade",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Normal",
    target: "allAdjacentFoes",
    desc: "The user sings a song and attacks by\nappealing to the hearts of the listening opponents.\nThis makes the foes drowsy, falling asleep in 2 turns.",
    shortDesc: "The user sings a song and attacks by\nappealing to the hearts of the listening opponents.\nThis makes the foes drowsy, falling asleep in 2 turns.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 140
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "14"
      }
    ],
    id: "serenade",
    fullname: "move: Serenade",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  radiantedge: {
    exists: true,
    num: 548,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Radiant Edge",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Fairy",
    target: "normal",
    desc: "The user conjures up a blade made from light, slashing\nat the foe. This deals PHYSICAL damage, NOT Special.\nThis ALWAYS results in a critical hit.",
    shortDesc: "The user conjures up a blade made from light, slashing\nat the foe. This deals PHYSICAL damage, NOT Special.\nThis ALWAYS results in a critical hit.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    willCrit: true,
    zMove: {
      basePower: 175
    },
    id: "radiantedge",
    fullname: "move: Radiant Edge",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  glaciate: {
    exists: true,
    accuracy: 90,
    basePower: 110,
    pp: 5,
    desc: "The user freezes the space around the targets. This\nhas a 100% chance to lower the opponent's Speed by 2.",
    shortDesc: "The user freezes the space around the targets. This\nhas a 100% chance to lower the opponent's Speed by 2.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -2
        }
      }
    ],
    isNonstandard: null,
    num: 549,
    category: "Special",
    name: "Glaciate",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    },
    target: "allAdjacentFoes",
    type: "Ice",
    id: "glaciate",
    fullname: "move: Glaciate",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  electroassault: {
    exists: true,
    num: 550,
    accuracy: 100,
    basePower: 150,
    category: "Physical",
    name: "Electro Assault",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Electric",
    target: "normal",
    desc: "The user surrounds itself with a great amount of\nelectricity and charges the foe. This drops the user's\nDefenses by 1 after use. Contact.",
    shortDesc: "The user surrounds itself with a great amount of\nelectricity and charges the foe. This drops the user's\nDefenses by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    id: "electroassault",
    fullname: "move: Electro Assault",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  dragonfury: {
    exists: true,
    num: 551,
    accuracy: 70,
    basePower: 130,
    category: "Special",
    name: "Dragon Fury",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Dragon",
    target: "normal",
    desc: "The user fires off a destructive blast of dragon breath.\nThis ALWAYS leaves the foe with a burn.",
    shortDesc: "The user fires off a destructive blast of dragon breath.\nThis ALWAYS leaves the foe with a burn.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 205
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    id: "dragonfury",
    fullname: "move: Dragon Fury",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  fierydance: {
    exists: true,
    desc: "Cloaked in flames, the user dances with enthusiasm.\nThis ALWAYS boosts the user's Sp. Atk stat by 1.",
    shortDesc: "Cloaked in flames, the user dances with enthusiasm.\nThis ALWAYS boosts the user's Sp. Atk stat by 1.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 552,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Fiery Dance",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 50,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "normal",
    type: "Fire",
    id: "fierydance",
    fullname: "move: Fiery Dance",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  icebreaker: {
    exists: true,
    num: 553,
    accuracy: true,
    basePower: 140,
    category: "Physical",
    name: "Ice Breaker",
    pp: 1,
    priority: 0,
    critRatio: 7,
    type: "Ice",
    target: "normal",
    desc: "Charging up energy on the 1st turn, the user fires a\nnmassive chunk of energized ice on the 2nd. This will\nALWAYS paralyze and ALWAYS crit. Ignores protect.",
    shortDesc: "Charging up energy on the 1st turn, the user fires a\nnmassive chunk of energized ice on the 2nd. This will\nALWAYS paralyze and ALWAYS crit. Ignores protect.",
    flags: {
      charge: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 250
    },
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    noPPBoosts: true,
    id: "icebreaker",
    fullname: "move: Ice Breaker",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  freezerburn: {
    exists: true,
    num: 554,
    accuracy: 100,
    basePower: 120,
    category: "Special",
    name: "Freezer Burn",
    pp: 1,
    priority: 0,
    critRatio: 7,
    type: "Ice",
    target: "normal",
    desc: "Charging up energy on the 1st turn, the user unleashes\na wave of harsh, frigid cold on the 2nd. The resulting\nfrostbite ALWAYS burns & ALWAYS crits. Ignores protect.",
    shortDesc: "Charging up energy on the 1st turn, the user unleashes\na wave of harsh, frigid cold on the 2nd. The resulting\nfrostbite ALWAYS burns & ALWAYS crits. Ignores protect.",
    flags: {
      charge: 1,
      defrost: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 250
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    noPPBoosts: true,
    id: "freezerburn",
    fullname: "move: Freezer Burn",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  dismalcry: {
    exists: true,
    num: 555,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Dismal Cry",
    pp: 15,
    priority: 0,
    critRatio: 1,
    type: "Dark",
    target: "allAdjacentFoes",
    desc: "The user unleashes a horrible sound imbued with dark\nfeelings. This demoralizes all foes who hear it,\nALWAYS dropping the foe's attacking stats by 1.",
    shortDesc: "The user unleashes a horrible sound imbued with dark\nfeelings. This demoralizes all foes who hear it,\nALWAYS dropping the foe's attacking stats by 1.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    id: "dismalcry",
    fullname: "move: Dismal Cry",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  iciclecrash: {
    exists: true,
    basePower: 110,
    pp: 5,
    desc: "The user attacks by harshly crashing large icicles\nonto the target. This flinches 30% of the time.",
    shortDesc: "The user attacks by harshly crashing large icicles\nonto the target. This flinches 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 185
    },
    num: 556,
    accuracy: 90,
    category: "Physical",
    name: "Icicle Crash",
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Ice",
    id: "iciclecrash",
    fullname: "move: Icicle Crash",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  blazingassault: {
    exists: true,
    num: 557,
    accuracy: 100,
    basePower: 150,
    category: "Physical",
    name: "Blazing Assault",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "Cloaked in flames, the user delivers a physical\nonslaught on the foe. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    shortDesc: "Cloaked in flames, the user delivers a physical\nonslaught on the foe. This has 25% recoil, and drops\nthe user's Defense and Sp. Def by 1. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    id: "blazingassault",
    fullname: "move: Blazing Assault",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  blazingoutburst: {
    exists: true,
    num: 558,
    accuracy: 100,
    basePower: 180,
    category: "Special",
    name: "Blazing Outburst",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The use fires off a destructive burst of flames.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Electro Outburst.",
    shortDesc: "The use fires off a destructive burst of flames.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Electro Outburst.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -4
      }
    },
    zMove: {
      basePower: 230
    },
    noPPBoosts: true,
    id: "blazingoutburst",
    fullname: "move: Blazing Outburst",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  electrooutburst: {
    exists: true,
    num: 559,
    accuracy: 100,
    basePower: 180,
    category: "Special",
    name: "Electro Outburst",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Electric",
    target: "normal",
    desc: "The use fires off a destructive bolt of lightning.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Blazing Outburst.",
    shortDesc: "The use fires off a destructive bolt of lightning.\nThis lowers the user's Sp. Atk by 4 (2/3) after use.\nPower DOUBLES when used right after Blazing Outburst.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -4
      }
    },
    zMove: {
      basePower: 230
    },
    noPPBoosts: true,
    id: "electrooutburst",
    fullname: "move: Electro Outburst",
    effectType: "Move",
    kind: "Move",
    gen: 5,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  flyingpress: {
    exists: true,
    accuracy: true,
    basePower: 125,
    pp: 5,
    target: "normal",
    desc: "The user dives down onto the target from the sky.\nThis move is Fighting and Flying type simultaneously.\nThis has a 30% paralysis rate. Contact.",
    shortDesc: "The user dives down onto the target from the sky.\nThis move is Fighting and Flying type simultaneously.\nThis has a 30% paralysis rate. Contact.",
    flags: {
      contact: 1,
      gravity: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 30,
        status: "par"
      }
    ],
    num: 560,
    category: "Physical",
    name: "Flying Press",
    priority: 0,
    secondary: null,
    type: "Fighting",
    id: "flyingpress",
    fullname: "move: Flying Press",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  matblock: {
    exists: true,
    target: "normal",
    desc: "Using a pulled-up mat as a shield, the user protects\nitself and allies from damaging moves, not status.\nOnly works on turn 1. Z-Effect gives +1 All Stats.",
    shortDesc: "Using a pulled-up mat as a shield, the user protects\nitself and allies from damaging moves, not status.\nOnly works on turn 1. Z-Effect gives +1 All Stats.",
    flags: {
      snatch: 1
    },
    isNonstandard: null,
    num: 561,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Mat Block",
    pp: 10,
    priority: 0,
    stallingMove: true,
    sideCondition: "matblock",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    type: "Fighting",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "matblock",
    fullname: "move: Mat Block",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  belch: {
    exists: true,
    accuracy: 100,
    desc: "Only after eating a berry, the user belches, ALWAYS\nboosting the user's Sp. Atk by 1. This also has a 30%\nflinch rate. You can swap out and still use this move.",
    shortDesc: "Only after eating a berry, the user belches, ALWAYS\nboosting the user's Sp. Atk by 1. This also has a 30%\nflinch rate. You can swap out and still use this move.",
    flags: {
      bypasssub: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      },
      {
        chance: 100,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 562,
    basePower: 120,
    category: "Special",
    name: "Belch",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Poison",
    id: "belch",
    fullname: "move: Belch",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 95
    }
  },
  rototiller: {
    exists: true,
    pp: 1,
    target: "normal",
    desc: "Plowing the soil, the user boosts the Attack & Sp. Atk\nof any Grass-type on the field, including itself, by 2.\nZ-Effect gives +1 all stats.",
    shortDesc: "Plowing the soil, the user boosts the Attack & Sp. Atk\nof any Grass-type on the field, including itself, by 2.\nZ-Effect gives +1 all stats.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: 2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: 2
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 563,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Rototiller",
    priority: 0,
    secondary: null,
    type: "Ground",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "rototiller",
    fullname: "move: Rototiller",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  stickyweb: {
    exists: true,
    target: "normal",
    desc: "The user weaves a sticky net around the opposing\nteam, which lowers their Speed stat by 1 when\nswitching into battle. Z-Effect +3 Accuracy.",
    shortDesc: "The user weaves a sticky net around the opposing\nteam, which lowers their Speed stat by 1 when\nswitching into battle. Z-Effect +3 Accuracy.",
    num: 564,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sticky Web",
    pp: 20,
    priority: 0,
    flags: {
      reflectable: 1
    },
    sideCondition: "stickyweb",
    condition: {},
    secondary: null,
    type: "Bug",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "stickyweb",
    fullname: "move: Sticky Web",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  finishingblow: {
    exists: true,
    num: 565,
    accuracy: true,
    basePower: 35,
    category: "Physical",
    name: "Finishing Blow",
    pp: 10,
    priority: 0,
    critRatio: 7,
    type: "Bug",
    target: "normal",
    desc: "The user jabs at the target's critical weakpoint.\nALWAYS results in a critical hit, and will boost the\nuser's Attack by 3 if it knocks out the foe. Contact.",
    shortDesc: "The user jabs at the target's critical weakpoint.\nALWAYS results in a critical hit, and will boost the\nuser's Attack by 3 if it knocks out the foe. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 100
    },
    id: "finishingblow",
    fullname: "move: Finishing Blow",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  phantomforce: {
    exists: true,
    accuracy: true,
    basePower: 105,
    desc: "The user vanishes, then strikes the target on the\nnext turn. This drops the user's Defense stat by 1\nafter use. Bypasses Protect & Substitute, and can't miss. Contact.",
    shortDesc: "The user vanishes, then strikes the target on the\nnext turn. This drops the user's Defense stat by 1\nafter use. Bypasses Protect & Substitute, and can't miss. Contact.",
    flags: {
      bypasssub: 1,
      charge: 1,
      contact: 1,
      mirror: 1
    },
    self: {
      boosts: {
        def: -1
      }
    },
    zMove: {
      basePower: 185
    },
    num: 566,
    category: "Physical",
    name: "Phantom Force",
    pp: 10,
    priority: 0,
    breaksProtect: true,
    condition: {
      duration: 2,
      onInvulnerability: false
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "phantomforce",
    fullname: "move: Phantom Force",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  spectrify: {
    exists: true,
    num: 567,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Spectrify",
    pp: 20,
    priority: 0,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user imbues the target with ghostly power.\nThis adds Ghost type to the target’s type.\nZ-Effect +1 all stats.",
    shortDesc: "The user imbues the target with ghostly power.\nThis adds Ghost type to the target’s type.\nZ-Effect +1 all stats.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    id: "spectrify",
    fullname: "move: Spectrify",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  battlecry: {
    exists: true,
    num: 568,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Battle Cry",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fighting",
    target: "allAdjacentFoes",
    desc: "Letting out a battle cry, the user intimidates the\ntarget and lowers its Attack and Sp. Atk stats by 2.\nZ-Effect +2 crit rate.",
    shortDesc: "Letting out a battle cry, the user intimidates the\ntarget and lowers its Attack and Sp. Atk stats by 2.\nZ-Effect +2 crit rate.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -2
        }
      }
    ],
    id: "battlecry",
    fullname: "move: Battle Cry",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  iondeluge: {
    exists: true,
    pp: 10,
    priority: 4,
    target: "normal",
    desc: "The user disperses electrically charged particles,\nwhich changes Normal-type moves to Electric-type.\nThis has +4 Priority. Z-Effect +1 all stats.",
    shortDesc: "The user disperses electrically charged particles,\nwhich changes Normal-type moves to Electric-type.\nThis has +4 Priority. Z-Effect +1 all stats.",
    isNonstandard: null,
    num: 569,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Ion Deluge",
    flags: {},
    pseudoWeather: "iondeluge",
    condition: {
      duration: 1,
      onModifyTypePriority: -2
    },
    secondary: null,
    type: "Electric",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "iondeluge",
    fullname: "move: Ion Deluge",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  paraboliccharge: {
    exists: true,
    basePower: 70,
    pp: 10,
    desc: "The user unleashes a strange electric charge that\nheals the user by 50% of damage dealt.",
    shortDesc: "The user unleashes a strange electric charge that\nheals the user by 50% of damage dealt.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 140
    },
    num: 570,
    accuracy: 100,
    category: "Special",
    name: "Parabolic Charge",
    priority: 0,
    drain: [
      1,
      2
    ],
    secondary: null,
    target: "allAdjacent",
    type: "Electric",
    id: "paraboliccharge",
    fullname: "move: Parabolic Charge",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    }
  },
  forestscurse: {
    exists: true,
    name: "Forest’s Curse",
    pp: 3,
    desc: "The user puts a curse on the foe that not only adds\nthe Grass type to the foe, but causes them to lose\n25% HP at the end of each turn. Z-Effect +1 all stats.",
    shortDesc: "The user puts a curse on the foe that not only adds\nthe Grass type to the foe, but causes them to lose\n25% HP at the end of each turn. Z-Effect +1 all stats.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "10"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 571,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    id: "forestscurse",
    fullname: "move: Forest’s Curse",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  petalblizzard: {
    exists: true,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    pp: 10,
    target: "allAdjacentFoes",
    desc: "The user stirs up a violent blizzard of petals and wind.\nThis ALWAYS lowers opponent Speed by 1.",
    shortDesc: "The user stirs up a violent blizzard of petals and wind.\nThis ALWAYS lowers opponent Speed by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    num: 572,
    name: "Petal Blizzard",
    priority: 0,
    secondary: null,
    type: "Grass",
    id: "petalblizzard",
    fullname: "move: Petal Blizzard",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  freezedry: {
    exists: true,
    basePower: 85,
    pp: 15,
    desc: "The user rapidly cools the target. This freezes the\ntarget 10% of the time. This move is super effective\non Water types.",
    shortDesc: "The user rapidly cools the target. This freezes the\ntarget 10% of the time. This move is super effective\non Water types.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    num: 573,
    accuracy: 100,
    category: "Special",
    name: "Freeze-Dry",
    priority: 0,
    secondary: {
      chance: 10,
      status: "frz"
    },
    target: "normal",
    type: "Ice",
    id: "freezedry",
    fullname: "move: Freeze-Dry",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 10,
        status: "frz"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  disarmingvoice: {
    exists: true,
    accuracy: 100,
    basePower: 60,
    desc: "Letting out a charming cry, the user subdues the\nfoes, ALWAYS dropping the foe's attacking stats by 1.",
    shortDesc: "Letting out a charming cry, the user subdues the\nfoes, ALWAYS dropping the foe's attacking stats by 1.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1,
      sound: 1
    },
    zMove: {
      basePower: 120
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 574,
    category: "Special",
    name: "Disarming Voice",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fairy",
    id: "disarmingvoice",
    fullname: "move: Disarming Voice",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  partingshot: {
    exists: true,
    desc: "With a parting threat, the user lowers the target’s\nAttack and Sp. Atk stats. Then it switches with a\nparty Pokemon. Z-Effect heals replacement.",
    shortDesc: "With a parting threat, the user lowers the target’s\nAttack and Sp. Atk stats. Then it switches with a\nparty Pokemon. Z-Effect heals replacement.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 575,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Parting Shot",
    pp: 20,
    priority: 0,
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      effect: "healreplacement"
    },
    id: "partingshot",
    fullname: "move: Parting Shot",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  topsyturvy: {
    exists: true,
    priority: 4,
    desc: "All stat changes affecting the target turn\nare reversed. Z-Effect heals user fully.\nThis has +4 Priority.",
    shortDesc: "All stat changes affecting the target turn\nare reversed. Z-Effect heals user fully.\nThis has +4 Priority.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 576,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Topsy-Turvy",
    pp: 20,
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "topsyturvy",
    fullname: "move: Topsy-Turvy",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  drainingkiss: {
    exists: true,
    desc: "The user steals the target’s HP with a kiss. The\nuser’s HP is restored by 75% of damage dealt.\nContact.",
    shortDesc: "The user steals the target’s HP with a kiss. The\nuser’s HP is restored by 75% of damage dealt.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    num: 577,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Draining Kiss",
    pp: 10,
    priority: 0,
    drain: [
      3,
      4
    ],
    secondary: null,
    target: "normal",
    type: "Fairy",
    id: "drainingkiss",
    fullname: "move: Draining Kiss",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  craftyshield: {
    exists: true,
    pp: 40,
    priority: 6,
    type: "Psychic",
    target: "normal",
    desc: "The user blocks any and all targeted status moves.\nThis can be used repeatedly without fail.\nHas +6 Priority. Z-EFFECT GIVES +1 ALL STATS.",
    shortDesc: "The user blocks any and all targeted status moves.\nThis can be used repeatedly without fail.\nHas +6 Priority. Z-EFFECT GIVES +1 ALL STATS.",
    flags: {
      sound: 1
    },
    isNonstandard: null,
    num: 578,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Crafty Shield",
    sideCondition: "craftyshield",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "craftyshield",
    fullname: "move: Crafty Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  floralguard: {
    exists: true,
    num: 579,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Floral Guard",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The user raises the Defense and Sp. Def stat of all\nGrass-type allies, including itself with a\nmysterious power. Z-Effect heals user fully.",
    shortDesc: "The user raises the Defense and Sp. Def stat of all\nGrass-type allies, including itself with a\nmysterious power. Z-Effect heals user fully.",
    flags: {
      dance: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: 1
        }
      },
      {
        chance: 100,
        boosts: {
          spd: 1
        }
      }
    ],
    noPPBoosts: true,
    id: "floralguard",
    fullname: "move: Floral Guard",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  grassyterrain: {
    exists: true,
    pp: 5,
    priority: 4,
    target: "normal",
    desc: "The user changes the terrain to Grassy Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Grassy Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    flags: {},
    condition: {
      duration: 5,
      onResidualOrder: 5,
      onResidualSubOrder: 2,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    num: 580,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Grassy Terrain",
    terrain: "grassyterrain",
    secondary: null,
    type: "Grass",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "grassyterrain",
    fullname: "move: Grassy Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mistyterrain: {
    exists: true,
    pp: 5,
    priority: 4,
    target: "normal",
    desc: "The user changes the terrain to Misty Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Misty Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    flags: {
      sound: 1
    },
    num: 581,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Misty Terrain",
    terrain: "mistyterrain",
    condition: {
      duration: 5,
      onBasePowerPriority: 6,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    secondary: null,
    type: "Fairy",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "mistyterrain",
    fullname: "move: Misty Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  electrify: {
    exists: true,
    pp: 1,
    priority: 4,
    desc: "The user makes the opponent's selected move\nfor the turn become Electric type.\nThis has +4 Priority. Z-Effect gives +2 Speed.",
    shortDesc: "The user makes the opponent's selected move\nfor the turn become Electric type.\nThis has +4 Priority. Z-Effect gives +2 Speed.",
    flags: {
      mirror: 1,
      protect: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 582,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Electrify",
    volatileStatus: "electrify",
    condition: {
      duration: 1,
      onModifyTypePriority: -2
    },
    secondary: null,
    target: "normal",
    type: "Electric",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "electrify",
    fullname: "move: Electrify",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  playrough: {
    exists: true,
    accuracy: 100,
    basePower: 110,
    pp: 5,
    desc: "The user roughhouses the foe strongly, but playfully.\nThis deals 20% recoil damage to the user, and has a\n50% chance to drop the foe's Attack by 1 after use.",
    shortDesc: "The user roughhouses the foe strongly, but playfully.\nThis deals 20% recoil damage to the user, and has a\n50% chance to drop the foe's Attack by 1 after use.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      sound: 1
    },
    recoil: [
      20,
      100
    ],
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          atk: -1
        }
      }
    ],
    num: 583,
    category: "Physical",
    name: "Play Rough",
    priority: 0,
    secondary: {
      chance: 10,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Fairy",
    id: "playrough",
    fullname: "move: Play Rough",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  pixiedust: {
    exists: true,
    num: 584,
    accuracy: true,
    basePower: 45,
    category: "Special",
    name: "Pixie Dust",
    pp: 20,
    priority: 1,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user quickly blows fairy dust at the opponent.\nThis has +1 priority, and can't miss.",
    shortDesc: "The user quickly blows fairy dust at the opponent.\nThis has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    zMove: {
      basePower: 90
    },
    id: "pixiedust",
    fullname: "move: Pixie Dust",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  moonblast: {
    exists: true,
    accuracy: 95,
    basePower: 100,
    pp: 10,
    desc: "Borrowing the power of the moon, the user attacks\nthe foe. This lowers their Sp. Atk 30% of the time.",
    shortDesc: "Borrowing the power of the moon, the user attacks\nthe foe. This lowers their Sp. Atk 30% of the time.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    zMove: {
      basePower: 180
    },
    num: 585,
    category: "Special",
    name: "Moonblast",
    priority: 0,
    secondary: {
      chance: 30,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Fairy",
    id: "moonblast",
    fullname: "move: Moonblast",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 30,
        boosts: {
          spa: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  boomburst: {
    exists: true,
    basePower: 125,
    pp: 5,
    target: "allAdjacentFoes",
    desc: "The user unleashes an excruciatingly loud sound wave.\nThis hits all foes.",
    shortDesc: "The user unleashes an excruciatingly loud sound wave.\nThis hits all foes.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 190
    },
    num: 586,
    accuracy: 100,
    category: "Special",
    name: "Boomburst",
    priority: 0,
    secondary: null,
    type: "Normal",
    id: "boomburst",
    fullname: "move: Boomburst",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  fairylock: {
    exists: true,
    target: "normal",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      sound: 1
    },
    num: 587,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Fairy Lock",
    pp: 10,
    priority: 0,
    pseudoWeather: "fairylock",
    condition: {
      duration: 2
    },
    secondary: null,
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "fairylock",
    fullname: "move: Fairy Lock",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  kingsshield: {
    exists: true,
    name: "King’s Shield",
    pp: 5,
    priority: 6,
    desc: "The user takes a defensive stance while it protects\nitself from damage. It lowers the Attack of any foes\nthat make contact by 2. Z-Effect +1 Speed.",
    shortDesc: "The user takes a defensive stance while it protects\nitself from damage. It lowers the Attack of any foes\nthat make contact by 2. Z-Effect +1 Speed.",
    flags: {},
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    isNonstandard: null,
    num: 588,
    accuracy: true,
    basePower: 0,
    category: "Status",
    stallingMove: true,
    volatileStatus: "kingsshield",
    secondary: null,
    target: "self",
    type: "Steel",
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "kingsshield",
    fullname: "move: King’s Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  playnice: {
    exists: true,
    priority: 4,
    type: "Fairy",
    desc: "The user and the target become friends, and the\ntarget loses its will to fight. This has +4 priority,\nand drops their Sp. Atk by 1. Z-Effect +2 Attack.",
    shortDesc: "The user and the target become friends, and the\ntarget loses its will to fight. This has +4 priority,\nand drops their Sp. Atk by 1. Z-Effect +2 Attack.",
    flags: {
      mirror: 1,
      reflectable: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 589,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Play Nice",
    pp: 20,
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "playnice",
    fullname: "move: Play Nice",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  confide: {
    exists: true,
    pp: 10,
    type: "Dark",
    desc: "The user tells the target a shocking secret, and\ndrops their Sp. Atk and Sp. Def by one.\nZ-Effect +2 Sp. Atk. BYPASSES PROTECT.",
    shortDesc: "The user tells the target a shocking secret, and\ndrops their Sp. Atk and Sp. Def by one.\nZ-Effect +2 Sp. Atk. BYPASSES PROTECT.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spd: -1
        }
      }
    ],
    num: 590,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Confide",
    priority: 0,
    boosts: {
      spa: -1
    },
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "confide",
    fullname: "move: Confide",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  mineralshower: {
    exists: true,
    num: 591,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Mineral Shower",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Rock",
    target: "allAdjacentFoes",
    desc: "The user whips up a storm of gemstones and crystals.\nThis lowers the user's Sp. Atk stat by 2 after use.",
    shortDesc: "The user whips up a storm of gemstones and crystals.\nThis lowers the user's Sp. Atk stat by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 200
    },
    id: "mineralshower",
    fullname: "move: Mineral Shower",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  steameruption: {
    exists: true,
    accuracy: 100,
    desc: "The user immerses the target in superheated steam.\nThis ALWAYS leaves the foe with a burn.",
    shortDesc: "The user immerses the target in superheated steam.\nThis ALWAYS leaves the foe with a burn.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    num: 592,
    basePower: 110,
    category: "Special",
    name: "Steam Eruption",
    pp: 5,
    priority: 0,
    thawsTarget: true,
    secondary: {
      chance: 30,
      status: "brn"
    },
    target: "normal",
    type: "Water",
    id: "steameruption",
    fullname: "move: Steam Eruption",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    },
    zMove: {
      basePower: 185
    }
  },
  psychowarp: {
    exists: true,
    num: 593,
    accuracy: true,
    basePower: 120,
    category: "Physical",
    name: "Psycho Warp",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "Using great psychic power, the user appears right\nnext to the target and strikes. This lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    shortDesc: "Using great psychic power, the user appears right\nnext to the target and strikes. This lowers the user's\nDefense and Sp. Def by 1 after use. Contact.",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1
    },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 195
    },
    id: "psychowarp",
    fullname: "move: Psycho Warp",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  surgingstrikes: {
    exists: true,
    num: 594,
    accuracy: 90,
    basePower: 25,
    category: "Physical",
    name: "Surging Strikes",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Water",
    target: "normal",
    desc: "The user repeatedly strikes the target with the force\nof a tsunami. This hits three times, and always\nresults in a critical hit. Bypasses Protect. Contact.",
    shortDesc: "The user repeatedly strikes the target with the force\nof a tsunami. This hits three times, and always\nresults in a critical hit. Bypasses Protect. Contact.",
    flags: {
      contact: 1,
      heal: 1,
      mirror: 1
    },
    willCrit: true,
    multihit: 3,
    zMove: {
      basePower: 190
    },
    id: "surgingstrikes",
    fullname: "move: Surging Strikes",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  mysticalfire: {
    exists: true,
    basePower: 70,
    desc: "The user attacks by forming a strange, magical flame.\nThis ALWAYS drops the foe's attacking stats by 1.",
    shortDesc: "The user attacks by forming a strange, magical flame.\nThis ALWAYS drops the foe's attacking stats by 1.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    num: 595,
    accuracy: 100,
    category: "Special",
    name: "Mystical Fire",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      }
    },
    target: "normal",
    type: "Fire",
    id: "mysticalfire",
    fullname: "move: Mystical Fire",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  spikyshield: {
    exists: true,
    priority: 6,
    desc: "In addition to protecting the user from attacks, this\nmove also damages any attacker who makes\ncontact for 12% of their max HP. Z-Effect +2 Defense.",
    shortDesc: "In addition to protecting the user from attacks, this\nmove also damages any attacker who makes\ncontact for 12% of their max HP. Z-Effect +2 Defense.",
    flags: {},
    num: 596,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spiky Shield",
    pp: 10,
    stallingMove: true,
    volatileStatus: "spikyshield",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Grass",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "spikyshield",
    fullname: "move: Spiky Shield",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  aromaticmist: {
    exists: true,
    pp: 5,
    target: "allAdjacentFoes",
    desc: "The user releases an alluring, strong smelling mist.\nThis lowers the Sp. Atk & Sp. Def stats of foes who\nsmell it by 2. Z-Effect heals the user fully.",
    shortDesc: "The user releases an alluring, strong smelling mist.\nThis lowers the Sp. Atk & Sp. Def stats of foes who\nsmell it by 2. Z-Effect heals the user fully.",
    flags: {
      bypasssub: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spd: -2
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -2
        }
      }
    ],
    num: 597,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aromatic Mist",
    priority: 0,
    boosts: {
      spd: 1
    },
    secondary: null,
    type: "Fairy",
    zMove: {
      boost: {
        spd: 2
      }
    },
    id: "aromaticmist",
    fullname: "move: Aromatic Mist",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  strangeimpulse: {
    exists: true,
    num: 598,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Strange Impulse",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Electric",
    target: "allAdjacentFoes",
    desc: "The user’s body emits a bizarre, unnerving impulse.\nThis lowers the Sp. Atk of the foes by 2.\nZ-Effect +2 Sp. Atk.",
    shortDesc: "The user’s body emits a bizarre, unnerving impulse.\nThis lowers the Sp. Atk of the foes by 2.\nZ-Effect +2 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: -2
        }
      }
    ],
    id: "strangeimpulse",
    fullname: "move: Strange Impulse",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  venomdrench: {
    exists: true,
    pp: 5,
    desc: "The opponent is drenched in a special, poison liquid.\nThis drops the Speed & Offenses of the foe by 3.\nFails if the foe isn't poisoned. Z-Effect +3 Sp. Atk.",
    shortDesc: "The opponent is drenched in a special, poison liquid.\nThis drops the Speed & Offenses of the foe by 3.\nFails if the foe isn't poisoned. Z-Effect +3 Sp. Atk.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -3
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -3
        }
      },
      {
        chance: 100,
        boosts: {
          spe: -3
        }
      }
    ],
    isNonstandard: null,
    num: 599,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Venom Drench",
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "venomdrench",
    fullname: "move: Venom Drench",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  powder: {
    exists: true,
    pp: 5,
    priority: 4,
    desc: "Covers the foe in combustible powder. +4 Priority.\nIf the target uses a Fire move, the move fails and\nthey take 25% of their max HP. Z-Effect +1 all stats.",
    shortDesc: "Covers the foe in combustible powder. +4 Priority.\nIf the target uses a Fire move, the move fails and\nthey take 25% of their max HP. Z-Effect +1 all stats.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 600,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Powder",
    volatileStatus: "powder",
    condition: {
      duration: 1,
      onTryMovePriority: -1
    },
    secondary: null,
    target: "normal",
    type: "Bug",
    zMove: {
      boost: {
        spd: 2
      }
    },
    id: "powder",
    fullname: "move: Powder",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  enchantment: {
    exists: true,
    num: 601,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Enchantment",
    pp: 1,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "self",
    desc: "The user summons a magical force for 1 turn.\nOn the second turn, the user gains +2 Sp. Def and\nSp. Atk and +1 Speed. Z-Effect heals user fully.",
    shortDesc: "The user summons a magical force for 1 turn.\nOn the second turn, the user gains +2 Sp. Def and\nSp. Atk and +1 Speed. Z-Effect heals user fully.",
    flags: {
      charge: 1,
      dance: 1,
      snatch: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          spa: 2
        }
      },
      {
        chance: 0,
        boosts: {
          spd: 2
        }
      },
      {
        chance: 0,
        boosts: {
          spe: 1
        }
      }
    ],
    noPPBoosts: true,
    id: "enchantment",
    fullname: "move: Enchantment",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  magneticflux: {
    exists: true,
    target: "normal",
    desc: "Doesn't exist.",
    shortDesc: "Doesn't exist.",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          def: 1
        }
      },
      {
        chance: 0,
        boosts: {
          spd: 1
        }
      }
    ],
    num: 602,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Magnetic Flux",
    pp: 20,
    priority: 0,
    secondary: null,
    type: "Electric",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "magneticflux",
    fullname: "move: Magnetic Flux",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  happyhour: {
    exists: true,
    target: "normal",
    desc: "Using Happy Hour doubles the amount of prize\nmoney received after battle.\nZ-Effect +1 all stats.",
    shortDesc: "Using Happy Hour doubles the amount of prize\nmoney received after battle.\nZ-Effect +1 all stats.",
    num: 603,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Happy Hour",
    pp: 30,
    priority: 0,
    flags: {},
    secondary: null,
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    id: "happyhour",
    fullname: "move: Happy Hour",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  electricterrain: {
    exists: true,
    pp: 5,
    priority: 4,
    target: "normal",
    desc: "The user changes the terrain to Electric Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Electric Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    flags: {},
    condition: {
      duration: 5,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    num: 604,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Electric Terrain",
    terrain: "electricterrain",
    secondary: null,
    type: "Electric",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "electricterrain",
    fullname: "move: Electric Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  dazzlinggleam: {
    exists: true,
    pp: 15,
    desc: "The user damages opposing Pokemon by emitting a\nbeautiful gleam of light. This has a 25% chance to\nboost the user's Sp. Atk by one.",
    shortDesc: "The user damages opposing Pokemon by emitting a\nbeautiful gleam of light. This has a 25% chance to\nboost the user's Sp. Atk by one.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 25,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    num: 605,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Dazzling Gleam",
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fairy",
    id: "dazzlinggleam",
    fullname: "move: Dazzling Gleam",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 160
    }
  },
  celebrate: {
    exists: true,
    desc: "Delibird summons a giant present with holiday spirit.\nThis does nothing, but Delibird enjoys it!\nZ-Effect gives +1 to all stats, and has +4 Priority.",
    shortDesc: "Delibird summons a giant present with holiday spirit.\nThis does nothing, but Delibird enjoys it!\nZ-Effect gives +1 to all stats, and has +4 Priority.",
    flags: {},
    num: 606,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Celebrate",
    pp: 40,
    priority: 0,
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    id: "celebrate",
    fullname: "move: Celebrate",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  befriend: {
    exists: true,
    num: 607,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Befriend",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user befriends the foe, making them less hostile.\nThis lowers the foe's Sp. Atk stat by 2.\nZ-Effect heals the user fully.",
    shortDesc: "The user befriends the foe, making them less hostile.\nThis lowers the foe's Sp. Atk stat by 2.\nZ-Effect heals the user fully.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spa: -2
        }
      }
    ],
    id: "befriend",
    fullname: "move: Befriend",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  babydolleyes: {
    exists: true,
    pp: 20,
    priority: 4,
    desc: "The user stares at the target with its baby-doll\neyes, which lowers its Attack by one.\nThis has +4 priority. Z-Effect +2 Attack.",
    shortDesc: "The user stares at the target with its baby-doll\neyes, which lowers its Attack by one.\nThis has +4 priority. Z-Effect +2 Attack.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1,
      sound: 1
    },
    secondaries: [
      {
        chance: 0,
        boosts: {
          atk: -1
        }
      }
    ],
    num: 608,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Baby-Doll Eyes",
    boosts: {
      atk: -1
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "babydolleyes",
    fullname: "move: Baby-Doll Eyes",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  nuzzle: {
    exists: true,
    accuracy: true,
    basePower: 0,
    category: "Status",
    pp: 10,
    desc: "The user cutely nuzzles the foe.\nThis leaves the foe paralyzed and lowers their Attack\nand Sp. Atk by 1. Z-Effect +2 Attack. Contact.",
    shortDesc: "The user cutely nuzzles the foe.\nThis leaves the foe paralyzed and lowers their Attack\nand Sp. Atk by 1. Z-Effect +2 Attack. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "par"
      },
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 609,
    name: "Nuzzle",
    priority: 0,
    secondary: {
      chance: 100,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "nuzzle",
    fullname: "move: Nuzzle",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  holdback: {
    exists: true,
    accuracy: true,
    basePower: 45,
    pp: 5,
    type: "Fairy",
    desc: "The user goes easy on the foe to avoid knocking them\nout. In return, this boosts the user's Attack and\nAccuracy stats by 1 after use. Can't miss. Contact.",
    shortDesc: "The user goes easy on the foe to avoid knocking them\nout. In return, this boosts the user's Attack and\nAccuracy stats by 1 after use. Can't miss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      },
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 610,
    category: "Physical",
    name: "Hold Back",
    priority: 0,
    onDamagePriority: -20,
    secondary: null,
    target: "normal",
    id: "holdback",
    fullname: "move: Hold Back",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  infestation: {
    exists: true,
    basePower: 50,
    desc: "The target is infested with a relentless pestilence\nthat traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    shortDesc: "The target is infested with a relentless pestilence\nthat traps foe for 12 turns, preventing switching\nand dealing 12% of the foe's max HP per turn.",
    flags: {
      mirror: 1,
      protect: 1
    },
    num: 611,
    accuracy: 100,
    category: "Special",
    name: "Infestation",
    pp: 20,
    priority: 0,
    volatileStatus: "partiallytrapped",
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "infestation",
    fullname: "move: Infestation",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    },
    zMove: {
      basePower: 100
    }
  },
  poweruppunch: {
    exists: true,
    basePower: 50,
    pp: 5,
    desc: "Striking opponents over and over makes the user’s\nfists harder. Hitting a target raises the Attack stat.",
    shortDesc: "Striking opponents over and over makes the user’s\nfists harder. Hitting a target raises the Attack stat.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    isNonstandard: null,
    num: 612,
    accuracy: 100,
    category: "Physical",
    name: "Power-Up Punch",
    priority: 0,
    secondary: {
      chance: 100,
      self: {
        boosts: {
          atk: 1
        }
      }
    },
    target: "normal",
    type: "Fighting",
    id: "poweruppunch",
    fullname: "move: Power-Up Punch",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 75
    },
    zMove: {
      basePower: 100
    }
  },
  oblivionbeam: {
    exists: true,
    num: 613,
    accuracy: 100,
    basePower: 180,
    category: "Special",
    name: "Oblivion Beam",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Dark",
    target: "normal",
    desc: "The user fires off a devastating beam of darkness from\nthe sky. This drops your Sp. Atk stat by -4. (2/3).",
    shortDesc: "The user fires off a devastating beam of darkness from\nthe sky. This drops your Sp. Atk stat by -4. (2/3).",
    flags: {
      mirror: 1,
      protect: 1
    },
    drain: [
      1,
      2
    ],
    self: {
      boosts: {
        spa: -4
      }
    },
    zMove: {
      basePower: 230
    },
    noPPBoosts: true,
    id: "oblivionbeam",
    fullname: "move: Oblivion Beam",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  thousandarrows: {
    exists: true,
    basePower: 100,
    category: "Special",
    pp: 5,
    desc: "Zygarde fires off an onslaught of arrows.\nThese will ground a flying target.",
    shortDesc: "Zygarde fires off an onslaught of arrows.\nThese will ground a flying target.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "25"
      }
    ],
    isNonstandard: null,
    num: 614,
    accuracy: 100,
    name: "Thousand Arrows",
    priority: 0,
    volatileStatus: "smackdown",
    ignoreImmunity: {
      Ground: true
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ground",
    zMove: {
      basePower: 180
    },
    id: "thousandarrows",
    fullname: "move: Thousand Arrows",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    hasSheerForce: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  thousandwaves: {
    exists: true,
    basePower: 125,
    category: "Special",
    pp: 5,
    desc: "Zygarde fires off an onslaught of waves.\nThese will trap the targets in battle.",
    shortDesc: "Zygarde fires off an onslaught of waves.\nThese will trap the targets in battle.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 190
    },
    isNonstandard: null,
    num: 615,
    accuracy: 100,
    name: "Thousand Waves",
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Ground",
    id: "thousandwaves",
    fullname: "move: Thousand Waves",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  landswrath: {
    exists: true,
    basePower: 150,
    category: "Special",
    pp: 5,
    target: "normal",
    desc: "The user gathers the energy of the land and focuses\nit on the target. This lowers the user's Sp. Atk stat\nby 2 stages after use in exchange.",
    shortDesc: "The user gathers the energy of the land and focuses\nit on the target. This lowers the user's Sp. Atk stat\nby 2 stages after use in exchange.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 210
    },
    isNonstandard: null,
    num: 616,
    accuracy: 100,
    name: "Land's Wrath",
    priority: 0,
    secondary: null,
    type: "Ground",
    id: "landswrath",
    fullname: "move: Land's Wrath",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  eternalbeam: {
    exists: true,
    num: 617,
    accuracy: 100,
    basePower: 125,
    category: "Special",
    name: "Eternal Beam",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user unleashes a perilous beam fueled by its own\nlife force. This deals 25% recoil, and has a 30%\nchance to drop the foe's Sp. Def stat after use.",
    shortDesc: "The user unleashes a perilous beam fueled by its own\nlife force. This deals 25% recoil, and has a 30%\nchance to drop the foe's Sp. Def stat after use.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          spd: -1
        }
      }
    ],
    id: "eternalbeam",
    fullname: "move: Eternal Beam",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  torrentialpulse: {
    exists: true,
    num: 618,
    accuracy: 90,
    basePower: 100,
    category: "Special",
    name: "Torrential Pulse",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Water",
    target: "allAdjacentFoes",
    desc: "The user attacks opponents with a brilliant cascade of\nwater. This has a 50% chance to drop Sp. Def.",
    shortDesc: "The user attacks opponents with a brilliant cascade of\nwater. This has a 50% chance to drop Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      pulse: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          spd: -1
        }
      }
    ],
    id: "torrentialpulse",
    fullname: "move: Torrential Pulse",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  precipiceblades: {
    exists: true,
    basePower: 130,
    pp: 5,
    desc: "The user attacks opposing Pokemon by manifesting\nthe power of the land in fearsome, searingly hot\nblades of stone. This burns the foes 30% of the time.",
    shortDesc: "The user attacks opposing Pokemon by manifesting\nthe power of the land in fearsome, searingly hot\nblades of stone. This burns the foes 30% of the time.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 30,
        status: "brn"
      }
    ],
    isNonstandard: null,
    num: 619,
    accuracy: 85,
    category: "Physical",
    name: "Precipice Blades",
    priority: 0,
    target: "allAdjacentFoes",
    type: "Ground",
    id: "precipiceblades",
    fullname: "move: Precipice Blades",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  dragonascent: {
    exists: true,
    basePower: 150,
    type: "Dragon",
    target: "normal",
    desc: "The user descends from the sky onto the foe\nwith immense, drakonic force.\nThis drops the user's Attack by 2 after use. Contact.",
    shortDesc: "The user descends from the sky onto the foe\nwith immense, drakonic force.\nThis drops the user's Attack by 2 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        atk: -2
      }
    },
    zMove: {
      basePower: 210
    },
    num: 620,
    accuracy: 100,
    category: "Physical",
    name: "Dragon Ascent",
    pp: 5,
    priority: 0,
    id: "dragonascent",
    fullname: "move: Dragon Ascent",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    isNonstandard: null,
    critRatio: 1,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  hyperspacefury: {
    exists: true,
    basePower: 150,
    desc: "Using its many arms, Hoopa Unbound unleashes it's\nfury. This drops Hoopa's Defenses by 1 after use, and\ndeals 30% recoil damage. Contact. Bypasses protect.",
    shortDesc: "Using its many arms, Hoopa Unbound unleashes it's\nfury. This drops Hoopa's Defenses by 1 after use, and\ndeals 30% recoil damage. Contact. Bypasses protect.",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    isNonstandard: null,
    num: 621,
    accuracy: true,
    category: "Physical",
    name: "Hyperspace Fury",
    pp: 5,
    priority: 0,
    breaksProtect: true,
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "hyperspacefury",
    fullname: "move: Hyperspace Fury",
    effectType: "Move",
    kind: "Move",
    gen: 6,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  breakneckblitz: {
    exists: true,
    num: 623,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Breakneck Blitz",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "normaliumz",
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "breakneckblitz",
    fullname: "move: Breakneck Blitz",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  alloutpummeling: {
    exists: true,
    num: 625,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "All-Out Pummeling",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "fightiniumz",
    secondary: null,
    target: "normal",
    type: "Fighting",
    id: "alloutpummeling",
    fullname: "move: All-Out Pummeling",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  supersonicskystrike: {
    exists: true,
    num: 627,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Supersonic Skystrike",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "flyiniumz",
    secondary: null,
    target: "normal",
    type: "Flying",
    id: "supersonicskystrike",
    fullname: "move: Supersonic Skystrike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  aciddownpour: {
    exists: true,
    num: 629,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Acid Downpour",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "poisoniumz",
    secondary: null,
    target: "normal",
    type: "Poison",
    id: "aciddownpour",
    fullname: "move: Acid Downpour",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  tectonicrage: {
    exists: true,
    num: 631,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Tectonic Rage",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "groundiumz",
    secondary: null,
    target: "normal",
    type: "Ground",
    id: "tectonicrage",
    fullname: "move: Tectonic Rage",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  continentalcrush: {
    exists: true,
    num: 633,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Continental Crush",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "rockiumz",
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "continentalcrush",
    fullname: "move: Continental Crush",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  savagespinout: {
    exists: true,
    num: 635,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Savage Spin-Out",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "buginiumz",
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "savagespinout",
    fullname: "move: Savage Spin-Out",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  neverendingnightmare: {
    exists: true,
    num: 637,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Never-Ending Nightmare",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "ghostiumz",
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "neverendingnightmare",
    fullname: "move: Never-Ending Nightmare",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  corkscrewcrash: {
    exists: true,
    num: 639,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Corkscrew Crash",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "steeliumz",
    secondary: null,
    target: "normal",
    type: "Steel",
    id: "corkscrewcrash",
    fullname: "move: Corkscrew Crash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  infernooverdrive: {
    exists: true,
    num: 641,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    flags: {
      defrost: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Inferno Overdrive",
    pp: 1,
    priority: 0,
    isZ: "firiumz",
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "infernooverdrive",
    fullname: "move: Inferno Overdrive",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  hydrovortex: {
    exists: true,
    num: 643,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Hydro Vortex",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "wateriumz",
    secondary: null,
    target: "normal",
    type: "Water",
    id: "hydrovortex",
    fullname: "move: Hydro Vortex",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  bloomdoom: {
    exists: true,
    num: 645,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Bloom Doom",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "grassiumz",
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "bloomdoom",
    fullname: "move: Bloom Doom",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  gigavolthavoc: {
    exists: true,
    num: 647,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Gigavolt Havoc",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "electriumz",
    secondary: null,
    target: "normal",
    type: "Electric",
    id: "gigavolthavoc",
    fullname: "move: Gigavolt Havoc",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  shatteredpsyche: {
    exists: true,
    num: 649,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Shattered Psyche",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "psychiumz",
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "shatteredpsyche",
    fullname: "move: Shattered Psyche",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  subzeroslammer: {
    exists: true,
    num: 651,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Subzero Slammer",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "iciumz",
    secondary: null,
    target: "normal",
    type: "Ice",
    id: "subzeroslammer",
    fullname: "move: Subzero Slammer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  devastatingdrake: {
    exists: true,
    num: 653,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Devastating Drake",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "dragoniumz",
    secondary: null,
    target: "normal",
    type: "Dragon",
    id: "devastatingdrake",
    fullname: "move: Devastating Drake",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  blackholeeclipse: {
    exists: true,
    num: 655,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Black Hole Eclipse",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "darkiniumz",
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "blackholeeclipse",
    fullname: "move: Black Hole Eclipse",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  twinkletackle: {
    exists: true,
    num: 657,
    category: "Special",
    desc: "Dummy Data",
    shortDesc: "Dummy Data",
    flags: {
      sound: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    accuracy: true,
    basePower: 1,
    name: "Twinkle Tackle",
    pp: 1,
    priority: 0,
    isZ: "fairiumz",
    secondary: null,
    target: "normal",
    type: "Fairy",
    id: "twinkletackle",
    fullname: "move: Twinkle Tackle",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  catastropika: {
    exists: true,
    basePower: 250,
    critRatio: 7,
    desc: "Pikachu dives at the target with immense force.\nThis ALWAYS crits and ALWAYS paralyzes the foe.",
    shortDesc: "Pikachu dives at the target with immense force.\nThis ALWAYS crits and ALWAYS paralyzes the foe.",
    flags: {},
    willCrit: true,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 658,
    accuracy: true,
    category: "Physical",
    name: "Catastropika",
    pp: 1,
    priority: 0,
    isZ: "pikaniumz",
    secondary: null,
    target: "normal",
    type: "Electric",
    id: "catastropika",
    fullname: "move: Catastropika",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  sedimend: {
    exists: true,
    num: 659,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Sedimend",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Ground",
    target: "self",
    desc: "The user mends it's body with sand or other minerals.\nThis heals the user by 50% of it's max HP. This heals\n66% of it's HP in a Sandstorm. Z-Effect +2 Sp. Def.",
    shortDesc: "The user mends it's body with sand or other minerals.\nThis heals the user by 50% of it's max HP. This heals\n66% of it's HP in a Sandstorm. Z-Effect +2 Sp. Def.",
    flags: {
      snatch: 1
    },
    id: "sedimend",
    fullname: "move: Sedimend",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  firstimpression: {
    exists: true,
    accuracy: true,
    basePower: 60,
    priority: 4,
    critRatio: 7,
    desc: "The user delivers a quick, potent blow. This has +4\npriority, can't miss, & ALWAYS crits. However, it only\nworks the on the 1st turn. Contact. BYPASSES PROTECT.",
    shortDesc: "The user delivers a quick, potent blow. This has +4\npriority, can't miss, & ALWAYS crits. However, it only\nworks the on the 1st turn. Contact. BYPASSES PROTECT.",
    flags: {
      contact: 1,
      mirror: 1
    },
    willCrit: true,
    num: 660,
    category: "Physical",
    name: "First Impression",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Bug",
    id: "firstimpression",
    fullname: "move: First Impression",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    },
    zMove: {
      basePower: 120
    }
  },
  banefulbunker: {
    exists: true,
    priority: 6,
    desc: "In addition to protecting the user from attacks, this\nmove also poisons any attacker that makes\ndirect contact. Z-Effect +2 Defense.",
    shortDesc: "In addition to protecting the user from attacks, this\nmove also poisons any attacker that makes\ndirect contact. Z-Effect +2 Defense.",
    flags: {},
    num: 661,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Baneful Bunker",
    pp: 10,
    stallingMove: true,
    volatileStatus: "banefulbunker",
    condition: {
      duration: 1,
      onTryHitPriority: 3
    },
    secondary: null,
    target: "self",
    type: "Poison",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "banefulbunker",
    fullname: "move: Baneful Bunker",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  spiritshackle: {
    exists: true,
    accuracy: true,
    basePower: 60,
    pp: 5,
    critRatio: 7,
    desc: "The user attacks while simultaneously stitching the\ntarget’s shadow to the ground to prevent the target\nfrom escaping. This always results in a critical hit.",
    shortDesc: "The user attacks while simultaneously stitching the\ntarget’s shadow to the ground to prevent the target\nfrom escaping. This always results in a critical hit.",
    flags: {
      mirror: 1,
      protect: 1
    },
    willCrit: true,
    zMove: {
      basePower: 120
    },
    num: 662,
    category: "Physical",
    name: "Spirit Shackle",
    priority: 0,
    secondary: {
      chance: 100
    },
    target: "normal",
    type: "Ghost",
    id: "spiritshackle",
    fullname: "move: Spirit Shackle",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondaries: [
      {
        chance: 100
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 110
    }
  },
  brutalswing: {
    exists: true,
    num: 663,
    basePower: 125,
    pp: 10,
    target: "normal",
    desc: "The user crashes into the target, swinging around.\nThis has 25% recoil. The target’s stat changes don’t\naffect this attack’s damage. Contact.",
    shortDesc: "The user crashes into the target, swinging around.\nThis has 25% recoil. The target’s stat changes don’t\naffect this attack’s damage. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    accuracy: 100,
    category: "Physical",
    name: "Brutal Swing",
    priority: 0,
    secondary: null,
    type: "Dark",
    id: "brutalswing",
    fullname: "move: Brutal Swing",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  bubbleburst: {
    exists: true,
    num: 664,
    accuracy: 95,
    basePower: 100,
    category: "Special",
    name: "Bubble Burst",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Water",
    target: "allAdjacentFoes",
    desc: "The user releases a flurry of exploding bubbles down\nonto the foe. This ALWAYS lowers their Speed by 1.",
    shortDesc: "The user releases a flurry of exploding bubbles down\nonto the foe. This ALWAYS lowers their Speed by 1.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -1
        }
      }
    ],
    id: "bubbleburst",
    fullname: "move: Bubble Burst",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  icehammer: {
    exists: true,
    accuracy: 100,
    basePower: 125,
    desc: "The user wildly swings its heavy fist encased in ice.\nThis deals 25% recoil, and drops Defense 30% of\nthe time. Contact.",
    shortDesc: "The user wildly swings its heavy fist encased in ice.\nThis deals 25% recoil, and drops Defense 30% of\nthe time. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      1,
      4
    ],
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 30,
        boosts: {
          def: -1
        }
      }
    ],
    isNonstandard: null,
    num: 665,
    category: "Physical",
    name: "Ice Hammer",
    pp: 10,
    priority: 0,
    self: {
      boosts: {
        spe: -1
      }
    },
    secondary: null,
    target: "normal",
    type: "Ice",
    id: "icehammer",
    fullname: "move: Ice Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  floralhealing: {
    exists: true,
    pp: 5,
    type: "Grass",
    target: "self",
    desc: "The user heals itself by 50% of its max HP.\nThis restores 2/3 HP under Grassy Terrain.\nZ-Effect gives +2 Sp. Def.",
    shortDesc: "The user heals itself by 50% of its max HP.\nThis restores 2/3 HP under Grassy Terrain.\nZ-Effect gives +2 Sp. Def.",
    flags: {
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 666,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Floral Healing",
    priority: 0,
    secondary: null,
    zMove: {
      effect: "clearnegativeboost"
    },
    id: "floralhealing",
    fullname: "move: Floral Healing",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  highhorsepower: {
    exists: true,
    accuracy: 100,
    desc: "The user kicks the target with immense power using\nits hooves. This has a 30% flinch chance. Contact.",
    shortDesc: "The user kicks the target with immense power using\nits hooves. This has a 30% flinch chance. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      }
    ],
    num: 667,
    basePower: 95,
    category: "Physical",
    name: "High Horsepower",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Ground",
    id: "highhorsepower",
    fullname: "move: High Horsepower",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  strengthsap: {
    exists: true,
    pp: 5,
    desc: "The user drains the target's life force. This\nrecovers massive HP,  equal to the foe's Attack stat.\nThis also lowers Attack by 1. Z-Effect +2 Sp. Def.",
    shortDesc: "The user drains the target's life force. This\nrecovers massive HP,  equal to the foe's Attack stat.\nThis also lowers Attack by 1. Z-Effect +2 Sp. Def.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      }
    ],
    num: 668,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Strength Sap",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "strengthsap",
    fullname: "move: Strength Sap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  solarblade: {
    exists: true,
    basePower: 90,
    critRatio: 7,
    desc: "The user gathers light and strikes with a blade on the\nsecond turn. This doesn't need to charge in sun.\nContact. ALWAYS CRITS. Ignores protect.",
    shortDesc: "The user gathers light and strikes with a blade on the\nsecond turn. This doesn't need to charge in sun.\nContact. ALWAYS CRITS. Ignores protect.",
    flags: {
      charge: 1,
      contact: 1,
      mirror: 1
    },
    willCrit: true,
    zMove: {
      basePower: 200
    },
    num: 669,
    accuracy: 100,
    category: "Physical",
    name: "Solar Blade",
    pp: 10,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Grass",
    id: "solarblade",
    fullname: "move: Solar Blade",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  seedshot: {
    exists: true,
    num: 670,
    accuracy: true,
    basePower: 45,
    category: "Physical",
    name: "Seed Shot",
    pp: 25,
    priority: 1,
    critRatio: 1,
    type: "Grass",
    target: "normal",
    desc: "The user quickly shoots small seeds and other\nplant matter at the foe. This can't miss.\nThis attack has +1 priority.",
    shortDesc: "The user quickly shoots small seeds and other\nplant matter at the foe. This can't miss.\nThis attack has +1 priority.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "seedshot",
    fullname: "move: Seed Shot",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  spotlight: {
    exists: true,
    priority: 6,
    desc: "The user shines a spotlight on the foe so they become\nthe center of attention for the rest of the turn.\nZ-Effect gives +1 to all stats.",
    shortDesc: "The user shines a spotlight on the foe so they become\nthe center of attention for the rest of the turn.\nZ-Effect gives +1 to all stats.",
    flags: {
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 671,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Spotlight",
    pp: 15,
    volatileStatus: "spotlight",
    condition: {
      duration: 1,
      onFoeRedirectTargetPriority: 2
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spd: 1
      }
    },
    id: "spotlight",
    fullname: "move: Spotlight",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  toxicthread: {
    exists: true,
    desc: "The user shoots poisonous filaments to poison and slow\nthe foe. This both poisons the foe, and drops their\nSpeed & Evasion stats by 4. Z-Effect +1 all stats.",
    shortDesc: "The user shoots poisonous filaments to poison and slow\nthe foe. This both poisons the foe, and drops their\nSpeed & Evasion stats by 4. Z-Effect +1 all stats.",
    flags: {
      mirror: 1,
      protect: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        status: "psn"
      },
      {
        chance: 100,
        boosts: {
          spe: -4
        }
      },
      {
        chance: 100,
        boosts: {
          evasion: -4
        }
      }
    ],
    isNonstandard: null,
    num: 672,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Toxic Thread",
    pp: 20,
    priority: 0,
    status: "psn",
    boosts: {
      spe: -1
    },
    secondary: null,
    target: "normal",
    type: "Poison",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "toxicthread",
    fullname: "move: Toxic Thread",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  laserfocus: {
    exists: true,
    desc: "The user concentrates intensely. The attack on the\nnext turn always results in a critical hit.\nZ-Effect +2 crit rate.",
    shortDesc: "The user concentrates intensely. The attack on the\nnext turn always results in a critical hit.\nZ-Effect +2 crit rate.",
    isNonstandard: null,
    num: 673,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Laser Focus",
    pp: 30,
    priority: 0,
    flags: {
      snatch: 1
    },
    volatileStatus: "laserfocus",
    condition: {
      duration: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: {
      boost: {
        atk: 1
      }
    },
    id: "laserfocus",
    fullname: "move: Laser Focus",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  gearup: {
    exists: true,
    pp: 5,
    target: "self",
    desc: "The user gears up for battle. This heals the user by\n50% of their max HP. With a Z-Crystal, however,\nthis will give the user +1 to ALL stats.",
    shortDesc: "The user gears up for battle. This heals the user by\n50% of their max HP. With a Z-Crystal, however,\nthis will give the user +1 to ALL stats.",
    flags: {
      bypasssub: 1,
      snatch: 1
    },
    isNonstandard: null,
    num: 674,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Gear Up",
    priority: 0,
    secondary: null,
    type: "Steel",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "gearup",
    fullname: "move: Gear Up",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  hellthrust: {
    exists: true,
    num: 675,
    accuracy: 95,
    basePower: 100,
    category: "Physical",
    name: "Hell Thrust",
    pp: 10,
    priority: 0,
    critRatio: 1,
    type: "Dark",
    target: "normal",
    desc: "The user savagely strikes the target, and the\nresultant suffering prevents the target from using\nFairy-type moves for 2 turns. Contact.",
    shortDesc: "The user savagely strikes the target, and the\nresultant suffering prevents the target from using\nFairy-type moves for 2 turns. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "24"
      }
    ],
    id: "hellthrust",
    fullname: "move: Hell Thrust",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  bugbomber: {
    exists: true,
    num: 676,
    accuracy: 90,
    basePower: 25,
    category: "Special",
    name: "Bug Bomber",
    pp: 5,
    priority: 0,
    critRatio: 7,
    type: "Bug",
    target: "normal",
    desc: "The user fires 3 balls made from varying components.\nThis hits 3 times, ALWAYS results in a critical hit,\nand bypasses Protect. Heals an ally by 50% when used.",
    shortDesc: "The user fires 3 balls made from varying components.\nThis hits 3 times, ALWAYS results in a critical hit,\nand bypasses Protect. Heals an ally by 50% when used.",
    flags: {
      heal: 1,
      mirror: 1,
      bullet: 1
    },
    willCrit: true,
    multihit: 3,
    zMove: {
      basePower: 190
    },
    id: "bugbomber",
    fullname: "move: Bug Bomber",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  anchorshot: {
    exists: true,
    basePower: 140,
    pp: 5,
    desc: "Dhelmise pummels and wraps the target with it's\nanchor. This traps the target in battle, and ALWAYS\nlowers their Speed stat by 4. Contact.",
    shortDesc: "Dhelmise pummels and wraps the target with it's\nanchor. This traps the target in battle, and ALWAYS\nlowers their Speed stat by 4. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          spe: -4
        }
      },
      {
        chance: 100,
        boosts: {
          evasion: -4
        }
      }
    ],
    isNonstandard: null,
    num: 677,
    accuracy: 100,
    category: "Physical",
    name: "Anchor Shot",
    priority: 0,
    secondary: {
      chance: 100
    },
    target: "normal",
    type: "Steel",
    id: "anchorshot",
    fullname: "move: Anchor Shot",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  psychicterrain: {
    exists: true,
    pp: 5,
    priority: 4,
    target: "normal",
    desc: "The user changes the terrain to Psychic Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    shortDesc: "The user changes the terrain to Psychic Terrain for\n5 turns. Z-Effect +2 Sp. Def.\nTHIS HAS +4 PRIORITY.",
    flags: {},
    condition: {
      duration: 5,
      onTryHitPriority: 4,
      onFieldResidualOrder: 27,
      onFieldResidualSubOrder: 7
    },
    num: 678,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Psychic Terrain",
    terrain: "psychicterrain",
    secondary: null,
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "psychicterrain",
    fullname: "move: Psychic Terrain",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  lunge: {
    exists: true,
    basePower: 85,
    pp: 10,
    desc: "The user makes a lunge at the target, attacking with\nfull force. This always lowers the target’s Defense\nstat by one. Contact.",
    shortDesc: "The user makes a lunge at the target, attacking with\nfull force. This always lowers the target’s Defense\nstat by one. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    num: 679,
    accuracy: 100,
    category: "Physical",
    name: "Lunge",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Bug",
    id: "lunge",
    fullname: "move: Lunge",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  firelash: {
    exists: true,
    basePower: 85,
    pp: 10,
    desc: "The user lashes the target with a burning whip, tail\nor the like. This always lowers the target's Defense\nstat by one. Contact.",
    shortDesc: "The user lashes the target with a burning whip, tail\nor the like. This always lowers the target's Defense\nstat by one. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    num: 680,
    accuracy: 100,
    category: "Physical",
    name: "Fire Lash",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Fire",
    id: "firelash",
    fullname: "move: Fire Lash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  powertrip: {
    exists: true,
    accuracy: true,
    pp: 3,
    desc: "The user boasts its strength and attacks the target.\nThis gains 20 Base Power for every stat boost.\nThe user gains +1 Attack after each use. Contact.",
    shortDesc: "The user boasts its strength and attacks the target.\nThis gains 20 Base Power for every stat boost.\nThe user gains +1 Attack after each use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1
          }
        }
      }
    ],
    noPPBoosts: true,
    num: 681,
    basePower: 20,
    category: "Physical",
    name: "Power Trip",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dark",
    zMove: {
      basePower: 160
    },
    maxMove: {
      basePower: 130
    },
    id: "powertrip",
    fullname: "move: Power Trip",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  burnup: {
    exists: true,
    basePower: 140,
    desc: "The user burns its fire out in a massive blast this\nremoves the user's Fire typing after use. This fails\nafter the Fire type is lost, & ALWAYS burns the foe.",
    shortDesc: "The user burns its fire out in a massive blast this\nremoves the user's Fire typing after use. This fails\nafter the Fire type is lost, & ALWAYS burns the foe.",
    flags: {
      defrost: 1,
      heal: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 205
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    num: 682,
    accuracy: 100,
    category: "Special",
    name: "Burn Up",
    pp: 5,
    priority: 0,
    self: {},
    secondary: null,
    target: "normal",
    type: "Fire",
    id: "burnup",
    fullname: "move: Burn Up",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  speedswap: {
    exists: true,
    priority: 4,
    desc: "The user exchanges Speed stats with the target.\nZ-Effect +3 Speed. +4 Priority.",
    shortDesc: "The user exchanges Speed stats with the target.\nZ-Effect +3 Speed. +4 Priority.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1
    },
    num: 683,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Speed Swap",
    pp: 10,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "speedswap",
    fullname: "move: Speed Swap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  smartstrike: {
    exists: true,
    basePower: 75,
    pp: 15,
    desc: "The user concentrates, and strikes the target with a\nsharp horn, blade or the like. This can't miss, and\nboosts the user's Accuracy by 1 after use. Contact.",
    shortDesc: "The user concentrates, and strikes the target with a\nsharp horn, blade or the like. This can't miss, and\nboosts the user's Accuracy by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            accuracy: 1
          }
        }
      }
    ],
    num: 684,
    accuracy: true,
    category: "Physical",
    name: "Smart Strike",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Steel",
    id: "smartstrike",
    fullname: "move: Smart Strike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  purify: {
    exists: true,
    priority: 4,
    type: "Grass",
    desc: "The user heals the target’s status condition. If the\nmove succeeds, it heals the user to max HP.\nZ-Effect +1 all stats, even if Purify fails.",
    shortDesc: "The user heals the target’s status condition. If the\nmove succeeds, it heals the user to max HP.\nZ-Effect +1 all stats, even if Purify fails.",
    flags: {
      protect: 1,
      reflectable: 1
    },
    isNonstandard: null,
    num: 685,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Purify",
    pp: 20,
    secondary: null,
    target: "normal",
    zMove: {
      boost: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    id: "purify",
    fullname: "move: Purify",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  revelationdance: {
    exists: true,
    pp: 10,
    desc: "The user does a dance that embodies it's typing.\nThis move changes type based on the user's primary\ntyping. This has a 50% chance to boost Sp. Atk by 1.",
    shortDesc: "The user does a dance that embodies it's typing.\nThis move changes type based on the user's primary\ntyping. This has a 50% chance to boost Sp. Atk by 1.",
    flags: {
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 50,
        self: {
          boosts: {
            spa: 1
          }
        }
      }
    ],
    isNonstandard: null,
    num: 686,
    accuracy: 100,
    basePower: 90,
    category: "Special",
    name: "Revelation Dance",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "revelationdance",
    fullname: "move: Revelation Dance",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  coreenforcer: {
    exists: true,
    basePower: 150,
    pp: 5,
    desc: "Zygarde unleashes it's inner power on the foe.\nThis ignores the effects of abilities if it moves last.\nLowers your Defensive stats by 1 and deals 30% recoil.",
    shortDesc: "Zygarde unleashes it's inner power on the foe.\nThis ignores the effects of abilities if it moves last.\nLowers your Defensive stats by 1 and deals 30% recoil.",
    flags: {
      mirror: 1,
      protect: 1
    },
    recoil: [
      30,
      100
    ],
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    zMove: {
      basePower: 210
    },
    isNonstandard: null,
    num: 687,
    accuracy: 100,
    category: "Special",
    name: "Core Enforcer",
    priority: 0,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dragon",
    id: "coreenforcer",
    fullname: "move: Core Enforcer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  tropkick: {
    exists: true,
    pp: 10,
    desc: "The user lands an intense jungle kick on the target.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    shortDesc: "The user lands an intense jungle kick on the target.\nThis ALWAYS drops the foe's attacking stats by 1.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 688,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Trop Kick",
    priority: 0,
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Grass",
    id: "tropkick",
    fullname: "move: Trop Kick",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 120
    },
    zMove: {
      basePower: 140
    }
  },
  instruct: {
    exists: true,
    desc: "Oranguru instructs the target to use the move they\nmost recently used again. This takes up your turn, not\ntheirs. Z-Effect gives +1 All Stats.",
    shortDesc: "Oranguru instructs the target to use the move they\nmost recently used again. This takes up your turn, not\ntheirs. Z-Effect gives +1 All Stats.",
    flags: {
      bypasssub: 1,
      protect: 1
    },
    num: 689,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Instruct",
    pp: 15,
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    zMove: {
      boost: {
        spa: 1
      }
    },
    id: "instruct",
    fullname: "move: Instruct",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  beakblast: {
    exists: true,
    accuracy: true,
    basePower: 150,
    pp: 10,
    priority: -4,
    desc: "The user heats up its beak and at the end of the turn,\nunleashes a burning blast, burning those who touch it.\nThis leaves the target with a burn 100% of the time.",
    shortDesc: "The user heats up its beak and at the end of the turn,\nunleashes a burning blast, burning those who touch it.\nThis leaves the target with a burn 100% of the time.",
    flags: {
      defrost: 1,
      protect: 1
    },
    zMove: {
      basePower: 250
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    isNonstandard: null,
    num: 690,
    category: "Physical",
    name: "Beak Blast",
    condition: {
      duration: 1
    },
    secondary: null,
    target: "normal",
    type: "Flying",
    id: "beakblast",
    fullname: "move: Beak Blast",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  drakonicwave: {
    exists: true,
    num: 691,
    accuracy: 100,
    basePower: 125,
    category: "Special",
    name: "Drakonic Wave",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Dragon",
    target: "allAdjacentFoes",
    desc: "The user unleashes a destructive soundwave or blast\nimbued with dragon energy. This hits all foes.",
    shortDesc: "The user unleashes a destructive soundwave or blast\nimbued with dragon energy. This hits all foes.",
    flags: {
      bypasssub: 1,
      mirror: 1,
      protect: 1,
      punch: 1
    },
    zMove: {
      basePower: 190
    },
    id: "drakonicwave",
    fullname: "move: Drakonic Wave",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  dragonhammer: {
    exists: true,
    basePower: 110,
    pp: 10,
    desc: "The user hammers down on the opponent. This has\n20% recoil and a 50% chance to drop the foe's\nDefense by 1. Contact.",
    shortDesc: "The user hammers down on the opponent. This has\n20% recoil and a 50% chance to drop the foe's\nDefense by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    recoil: [
      20,
      100
    ],
    zMove: {
      basePower: 185
    },
    secondaries: [
      {
        chance: 50,
        boosts: {
          def: -1
        }
      }
    ],
    isNonstandard: null,
    num: 692,
    accuracy: 100,
    category: "Physical",
    name: "Dragon Hammer",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Dragon",
    id: "dragonhammer",
    fullname: "move: Dragon Hammer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  nightburst: {
    exists: true,
    num: 693,
    accuracy: true,
    basePower: 50,
    category: "Special",
    name: "Night Burst",
    pp: 15,
    priority: 1,
    critRatio: 1,
    type: "Dark",
    target: "normal",
    desc: "The user quickly releases a weak shock wave of\ndark energy. This has +1 priority, and can't miss.",
    shortDesc: "The user quickly releases a weak shock wave of\ndark energy. This has +1 priority, and can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 100
    },
    id: "nightburst",
    fullname: "move: Night Burst",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  auroraveil: {
    exists: true,
    target: "normal",
    desc: "This move reduces damage from physical and\nspecial moves for five turns. This can be used only\nin a hailstorm. Z-Effect heals user fully.",
    shortDesc: "This move reduces damage from physical and\nspecial moves for five turns. This can be used only\nin a hailstorm. Z-Effect heals user fully.",
    num: 694,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Aurora Veil",
    pp: 20,
    priority: 0,
    flags: {
      snatch: 1
    },
    sideCondition: "auroraveil",
    condition: {
      duration: 5,
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 10
    },
    secondary: null,
    type: "Ice",
    zMove: {
      boost: {
        spe: 1
      }
    },
    id: "auroraveil",
    fullname: "move: Aurora Veil",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  sinisterarrowraid: {
    exists: true,
    basePower: 250,
    desc: "The user, Decidueye, creates countless arrows\nusing its Z-Power and shoots the target with\nfull force.",
    shortDesc: "The user, Decidueye, creates countless arrows\nusing its Z-Power and shoots the target with\nfull force.",
    flags: {
      bypasssub: 1,
      contact: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 695,
    accuracy: true,
    category: "Physical",
    name: "Sinister Arrow Raid",
    pp: 1,
    priority: 0,
    isZ: "decidiumz",
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "sinisterarrowraid",
    fullname: "move: Sinister Arrow Raid",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  maliciousmoonsault: {
    exists: true,
    basePower: 250,
    desc: "The user, Incineroar, strengthens its body using\nits Z-Power and crashes into the target with\nfull force.",
    shortDesc: "The user, Incineroar, strengthens its body using\nits Z-Power and crashes into the target with\nfull force.",
    noPPBoosts: true,
    isNonstandard: null,
    num: 696,
    accuracy: true,
    category: "Physical",
    name: "Malicious Moonsault",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "inciniumz",
    secondary: null,
    target: "normal",
    type: "Dark",
    id: "maliciousmoonsault",
    fullname: "move: Malicious Moonsault",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  oceanicoperetta: {
    exists: true,
    basePower: 250,
    desc: "The user, Primarina, summons a massive amount of \nwater using its Z-Power and attacks the target with \nfull force.",
    shortDesc: "The user, Primarina, summons a massive amount of \nwater using its Z-Power and attacks the target with \nfull force.",
    flags: {
      punch: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 697,
    accuracy: true,
    category: "Special",
    name: "Oceanic Operetta",
    pp: 1,
    priority: 0,
    isZ: "primariumz",
    secondary: null,
    target: "normal",
    type: "Water",
    id: "oceanicoperetta",
    fullname: "move: Oceanic Operetta",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  guardianofalola: {
    exists: true,
    basePower: 1,
    desc: "The user, the Land Spirit Pokemon, obtains Alola’s\nenergy using its Z-Power and attacks the target with\nfull force. This reduces the target’s HP greatly.",
    shortDesc: "The user, the Land Spirit Pokemon, obtains Alola’s\nenergy using its Z-Power and attacks the target with\nfull force. This reduces the target’s HP greatly.",
    noPPBoosts: true,
    isNonstandard: null,
    num: 698,
    accuracy: true,
    category: "Special",
    name: "Guardian of Alola",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "tapuniumz",
    secondary: null,
    target: "normal",
    type: "Fairy",
    id: "guardianofalola",
    fullname: "move: Guardian of Alola",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  soulstealing7starstrike: {
    exists: true,
    basePower: 200,
    desc: "After obtaining Z-Power, the user, Marshadow,\npunches and kicks the target consecutively\nwith full force. This heals 50% of damage dealt.",
    shortDesc: "After obtaining Z-Power, the user, Marshadow,\npunches and kicks the target consecutively\nwith full force. This heals 50% of damage dealt.",
    flags: {
      bypasssub: 1,
      contact: 1
    },
    drain: [
      1,
      2
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 699,
    accuracy: true,
    category: "Physical",
    name: "Soul-Stealing 7-Star Strike",
    pp: 1,
    priority: 0,
    isZ: "marshadiumz",
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "soulstealing7starstrike",
    fullname: "move: Soul-Stealing 7-Star Strike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  stokedsparksurfer: {
    exists: true,
    basePower: 250,
    critRatio: 7,
    desc: "After obtaining Z-Power, the user, Alolan Raichu,\nattacks the target with full force. This move will\nALWAYS crit and ALWAYS paralyze the foe.",
    shortDesc: "After obtaining Z-Power, the user, Alolan Raichu,\nattacks the target with full force. This move will\nALWAYS crit and ALWAYS paralyze the foe.",
    flags: {
      contact: 1
    },
    willCrit: true,
    noPPBoosts: true,
    isNonstandard: null,
    num: 700,
    accuracy: true,
    category: "Special",
    name: "Stoked Sparksurfer",
    pp: 1,
    priority: 0,
    isZ: "aloraichiumz",
    secondary: {
      chance: 100,
      status: "par"
    },
    target: "normal",
    type: "Electric",
    id: "stokedsparksurfer",
    fullname: "move: Stoked Sparksurfer",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  pulverizingpancake: {
    exists: true,
    basePower: 250,
    desc: "Snorlax moves its enormous body energetically,\nslamming onto the target with full force. Contact. \nThis ALWAYS leaves the target with Paralysis.",
    shortDesc: "Snorlax moves its enormous body energetically,\nslamming onto the target with full force. Contact. \nThis ALWAYS leaves the target with Paralysis.",
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 701,
    accuracy: true,
    category: "Physical",
    name: "Pulverizing Pancake",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "snorliumz",
    secondary: null,
    target: "normal",
    type: "Normal",
    id: "pulverizingpancake",
    fullname: "move: Pulverizing Pancake",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  extremeevoboost: {
    exists: true,
    desc: "After obtaining Z-Power, the user, Eevee, gets\nenergy from its evolved friends and boosts its\nstats sharply.",
    shortDesc: "After obtaining Z-Power, the user, Eevee, gets\nenergy from its evolved friends and boosts its\nstats sharply.",
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: 2,
          def: 2,
          spa: 2,
          spd: 2,
          spe: 2
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 702,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Extreme Evoboost",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "eeviumz",
    boosts: {
      atk: 2,
      def: 2,
      spa: 2,
      spd: 2,
      spe: 2
    },
    secondary: null,
    target: "self",
    type: "Normal",
    id: "extremeevoboost",
    fullname: "move: Extreme Evoboost",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isMax: false,
    ignoreAbility: false
  },
  genesissupernova: {
    exists: true,
    basePower: 250,
    critRatio: 7,
    desc: "Mew unleashes an immense blast of ancient power.\nThis ALWAYS crits, is 250 BP AND\nwill give Mew +1 all stats BEFORE attacking.",
    shortDesc: "Mew unleashes an immense blast of ancient power.\nThis ALWAYS crits, is 250 BP AND\nwill give Mew +1 all stats BEFORE attacking.",
    willCrit: true,
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1
          }
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 703,
    accuracy: true,
    category: "Special",
    name: "Genesis Supernova",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "mewniumz",
    secondary: {
      chance: 100,
      self: {}
    },
    target: "normal",
    type: "Psychic",
    id: "genesissupernova",
    fullname: "move: Genesis Supernova",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  shelltrap: {
    exists: true,
    basePower: 200,
    priority: -4,
    desc: "The user sets a shell trap. If the user is hit by a\nphysical move, the trap will explode at the end of the\nturn, burning the foes and inflicting massive damage.",
    shortDesc: "The user sets a shell trap. If the user is hit by a\nphysical move, the trap will explode at the end of the\nturn, burning the foes and inflicting massive damage.",
    flags: {
      defrost: 1,
      protect: 1
    },
    zMove: {
      basePower: 250
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    isNonstandard: null,
    num: 704,
    accuracy: 100,
    category: "Special",
    name: "Shell Trap",
    pp: 5,
    condition: {
      duration: 1
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Fire",
    id: "shelltrap",
    fullname: "move: Shell Trap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  fleurcannon: {
    exists: true,
    accuracy: 100,
    basePower: 150,
    desc: "The user unleashes a strong beam fueled by fairy\nenergy. This drops the user's Sp. Atk by 2 after use.",
    shortDesc: "The user unleashes a strong beam fueled by fairy\nenergy. This drops the user's Sp. Atk by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    zMove: {
      basePower: 210
    },
    num: 705,
    category: "Special",
    name: "Fleur Cannon",
    pp: 5,
    priority: 0,
    self: {
      boosts: {
        spa: -2
      }
    },
    secondary: null,
    target: "normal",
    type: "Fairy",
    id: "fleurcannon",
    fullname: "move: Fleur Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  psychicfangs: {
    exists: true,
    pp: 15,
    desc: "The user bites the target with fangs imbued with\npsychic energy. This breaks the effects of Reflect\nand Light Screen. Contact.",
    shortDesc: "The user bites the target with fangs imbued with\npsychic energy. This breaks the effects of Reflect\nand Light Screen. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1,
      bite: 1
    },
    zMove: {
      basePower: 170
    },
    num: 706,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Psychic Fangs",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "psychicfangs",
    fullname: "move: Psychic Fangs",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  stompingtantrum: {
    exists: true,
    accuracy: true,
    pp: 15,
    target: "allAdjacentFoes",
    desc: "Driven by frustration, the user stomps the ground\naround itself. If the user’s previous move has\nfailed or missed, this damage doubles. Can't miss.",
    shortDesc: "Driven by frustration, the user stomps the ground\naround itself. If the user’s previous move has\nfailed or missed, this damage doubles. Can't miss.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 150
    },
    num: 707,
    basePower: 75,
    category: "Physical",
    name: "Stomping Tantrum",
    priority: 0,
    secondary: null,
    type: "Ground",
    id: "stompingtantrum",
    fullname: "move: Stomping Tantrum",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  shadowbone: {
    exists: true,
    desc: "The user attacks by beating the target with a bone\nimbued with spirits. This lowers their Defense\n100% of the time.",
    shortDesc: "The user attacks by beating the target with a bone\nimbued with spirits. This lowers their Defense\n100% of the time.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    isNonstandard: null,
    num: 708,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Shadow Bone",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Ghost",
    id: "shadowbone",
    fullname: "move: Shadow Bone",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  accelerock: {
    exists: true,
    accuracy: true,
    basePower: 45,
    desc: "The user smashes into the target at high speed with\nit's rocky body. This has +1 priority, and can't\nmiss. Contact.",
    shortDesc: "The user smashes into the target at high speed with\nit's rocky body. This has +1 priority, and can't\nmiss. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 90
    },
    num: 709,
    category: "Physical",
    name: "Accelerock",
    pp: 20,
    priority: 1,
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "accelerock",
    fullname: "move: Accelerock",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 100
    }
  },
  liquidation: {
    exists: true,
    pp: 15,
    desc: "The user pummels the target using a full-force blast\nof water. This lowers Defense 25% of the time.\nContact.",
    shortDesc: "The user pummels the target using a full-force blast\nof water. This lowers Defense 25% of the time.\nContact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 25,
        boosts: {
          def: -1
        }
      }
    ],
    num: 710,
    accuracy: 100,
    basePower: 85,
    category: "Physical",
    name: "Liquidation",
    priority: 0,
    secondary: {
      chance: 20,
      boosts: {
        def: -1
      }
    },
    target: "normal",
    type: "Water",
    id: "liquidation",
    fullname: "move: Liquidation",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  radiantoutburst: {
    exists: true,
    num: 711,
    accuracy: 100,
    basePower: 180,
    category: "Special",
    name: "Radiant Outburst",
    pp: 3,
    priority: 0,
    critRatio: 1,
    type: "Fairy",
    target: "normal",
    desc: "The user unleashes a destructive, yet beautiful blast\nof colorful light and energy. This drops the user's\nSp. Atk stat by 4 (or 2/3) after use, however.",
    shortDesc: "The user unleashes a destructive, yet beautiful blast\nof colorful light and energy. This drops the user's\nSp. Atk stat by 4 (or 2/3) after use, however.",
    flags: {
      mirror: 1,
      protect: 1,
      sound: 1
    },
    self: {
      boosts: {
        spa: -4
      }
    },
    zMove: {
      basePower: 230
    },
    noPPBoosts: true,
    id: "radiantoutburst",
    fullname: "move: Radiant Outburst",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  spectralthief: {
    exists: true,
    accuracy: true,
    basePower: 95,
    pp: 5,
    desc: "The user hides in the shadows, and strikes. This\nsteals any stat boosts the target has, then attacks.\nIgnores Protect and Substitute. Can't miss. Contact.",
    shortDesc: "The user hides in the shadows, and strikes. This\nsteals any stat boosts the target has, then attacks.\nIgnores Protect and Substitute. Can't miss. Contact.",
    flags: {
      bypasssub: 1,
      contact: 1,
      mirror: 1
    },
    isNonstandard: null,
    num: 712,
    category: "Physical",
    name: "Spectral Thief",
    priority: 0,
    stealsBoosts: true,
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "spectralthief",
    fullname: "move: Spectral Thief",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    },
    zMove: {
      basePower: 175
    }
  },
  solarstrike: {
    exists: true,
    num: 713,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Solar Strike",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Fire",
    target: "normal",
    desc: "The user flies up and descends onto the target with\na column of flames. This lowers the user's Defensive\nstats by one after use. 30% flinch rate. Contact.",
    shortDesc: "The user flies up and descends onto the target with\na column of flames. This lowers the user's Defensive\nstats by one after use. 30% flinch rate. Contact.",
    flags: {
      contact: 1,
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 195
    },
    secondaries: [
      {
        chance: 30,
        volatileStatus: "flinch"
      },
      {
        chance: 0,
        self: {
          boosts: {
            def: -1
          }
        }
      },
      {
        chance: 0,
        self: {
          boosts: {
            spd: -1
          }
        }
      }
    ],
    id: "solarstrike",
    fullname: "move: Solar Strike",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  spectralbeam: {
    exists: true,
    num: 714,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Spectral Beam",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Ghost",
    target: "normal",
    desc: "The user blasts the target with a devastating,\nshadowy beam. This move ignores the target's Ability.\nThis lowers the user's Sp. Atk by 2 after use.",
    shortDesc: "The user blasts the target with a devastating,\nshadowy beam. This move ignores the target's Ability.\nThis lowers the user's Sp. Atk by 2 after use.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        spa: -2
      }
    },
    zMove: {
      basePower: 210
    },
    id: "spectralbeam",
    fullname: "move: Spectral Beam",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  tearfullook: {
    exists: true,
    pp: 10,
    desc: "The user gets teary eyed to make the target lose\nits combative spirit. This lowers both offensive stats\nby 1. Z-Effect +3 Accuracy. BYPASSES PROTECT.",
    shortDesc: "The user gets teary eyed to make the target lose\nits combative spirit. This lowers both offensive stats\nby 1. Z-Effect +3 Accuracy. BYPASSES PROTECT.",
    flags: {
      mirror: 1,
      reflectable: 1
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          atk: -1
        }
      },
      {
        chance: 100,
        boosts: {
          spa: -1
        }
      }
    ],
    num: 715,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tearful Look",
    priority: 0,
    boosts: {
      atk: -1,
      spa: -1
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        def: 1
      }
    },
    id: "tearfullook",
    fullname: "move: Tearful Look",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: true,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  zingzap: {
    exists: true,
    accuracy: 90,
    basePower: 85,
    desc: "The user swiftly and nimbly strikes the target.\nThis has a 30% chance to flinch, and ALWAYS boosts\nthe user's Speed by 1 after use. Contact.",
    shortDesc: "The user swiftly and nimbly strikes the target.\nThis has a 30% chance to flinch, and ALWAYS boosts\nthe user's Speed by 1 after use. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 170
    },
    secondaries: [
      {
        chance: 20,
        status: "par"
      },
      {
        chance: 30,
        volatileStatus: "flinch"
      },
      {
        chance: 100,
        self: {
          boosts: {
            spe: 1
          }
        }
      }
    ],
    num: 716,
    category: "Physical",
    name: "Zing Zap",
    pp: 10,
    priority: 0,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Electric",
    id: "zingzap",
    fullname: "move: Zing Zap",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 130
    }
  },
  cosmicchaos: {
    exists: true,
    num: 717,
    accuracy: true,
    basePower: 1,
    category: "Special",
    name: "Cosmic Chaos",
    pp: 1,
    priority: 4,
    critRatio: 1,
    type: "Psychic",
    target: "normal",
    desc: "The user staggers the foe with cosmic energy\nThis attack will ALWAYS flinch the foe, and go first.\nThis halves the foe's current HP stat.",
    shortDesc: "The user staggers the foe with cosmic energy\nThis attack will ALWAYS flinch the foe, and go first.\nThis halves the foe's current HP stat.",
    flags: {
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 180
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    noPPBoosts: true,
    id: "cosmicchaos",
    fullname: "move: Cosmic Chaos",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 90
    }
  },
  multiattack: {
    exists: true,
    basePower: 120,
    pp: 5,
    desc: "The user slashes at the foe, cloaked in energy.\nThis move's type changes with the user's held Memory.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    shortDesc: "The user slashes at the foe, cloaked in energy.\nThis move's type changes with the user's held Memory.\nThis ALWAYS drops the foe's Defense by 1. Contact.",
    flags: {
      contact: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 200
    },
    secondaries: [
      {
        chance: 100,
        boosts: {
          def: -1
        }
      }
    ],
    isNonstandard: null,
    num: 718,
    accuracy: 100,
    category: "Physical",
    name: "Multi-Attack",
    priority: 0,
    secondary: null,
    target: "normal",
    type: "Normal",
    maxMove: {
      basePower: 95
    },
    id: "multiattack",
    fullname: "move: Multi-Attack",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false
  },
  "10000000voltthunderbolt": {
    exists: true,
    basePower: 250,
    critRatio: 7,
    desc: "The user, Pikachu wearing a cap, powers up a jolt of\nelectricity using its Z-Power and unleashes it.\nALWAYS CRITS AND ALWAYS PARAS.",
    shortDesc: "The user, Pikachu wearing a cap, powers up a jolt of\nelectricity using its Z-Power and unleashes it.\nALWAYS CRITS AND ALWAYS PARAS.",
    willCrit: true,
    secondaries: [
      {
        chance: 100,
        status: "par"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 719,
    accuracy: true,
    category: "Special",
    name: "10,000,000 Volt Thunderbolt",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "pikashuniumz",
    secondary: null,
    target: "normal",
    type: "Electric",
    id: "10000000voltthunderbolt",
    fullname: "move: 10,000,000 Volt Thunderbolt",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  mindblown: {
    exists: true,
    pp: 2,
    desc: "Blacephalon attacks everything around it by blowing\nup it's own head for amusement. This will ALWAYS\nflinch the opponent, in exchange for losing 50% HP.",
    shortDesc: "Blacephalon attacks everything around it by blowing\nup it's own head for amusement. This will ALWAYS\nflinch the opponent, in exchange for losing 50% HP.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 210
    },
    secondaries: [
      {
        chance: 100,
        volatileStatus: "flinch"
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 720,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Mind Blown",
    priority: 0,
    mindBlownRecoil: true,
    secondary: null,
    target: "allAdjacent",
    type: "Fire",
    id: "mindblown",
    fullname: "move: Mind Blown",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  plasmashot: {
    exists: true,
    num: 721,
    accuracy: 70,
    basePower: 130,
    category: "Special",
    name: "Plasma Shot",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Electric",
    target: "normal",
    desc: "The user fires an intense blast of superheated plasma.\nThis ALWAYS burns the target, and turns Normal type\nmoves to Electric type moves for the rest of the turn.",
    shortDesc: "The user fires an intense blast of superheated plasma.\nThis ALWAYS burns the target, and turns Normal type\nmoves to Electric type moves for the rest of the turn.",
    flags: {
      defrost: 1,
      mirror: 1,
      protect: 1
    },
    zMove: {
      basePower: 205
    },
    secondaries: [
      {
        chance: 100,
        status: "brn"
      }
    ],
    id: "plasmashot",
    fullname: "move: Plasma Shot",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 140
    }
  },
  twilightcannon: {
    exists: true,
    num: 722,
    accuracy: 100,
    basePower: 150,
    category: "Special",
    name: "Twilight Cannon",
    pp: 5,
    priority: 0,
    critRatio: 1,
    type: "Dark",
    target: "normal",
    desc: "The user unleashed a wicked beam of dark energy. This\nis Physical or Special, based on the user's higher\nstat, & drops offensive stats by 2. IGNORES ABILITIES.",
    shortDesc: "The user unleashed a wicked beam of dark energy. This\nis Physical or Special, based on the user's higher\nstat, & drops offensive stats by 2. IGNORES ABILITIES.",
    flags: {
      mirror: 1,
      protect: 1
    },
    self: {
      boosts: {
        atk: -2,
        spa: -2
      }
    },
    zMove: {
      basePower: 210
    },
    id: "twilightcannon",
    fullname: "move: Twilight Cannon",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    isNonstandard: null,
    secondary: null,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isZ: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 150
    }
  },
  lightthatburnsthesky: {
    exists: true,
    basePower: 220,
    desc: "This attack inflicts Attack or Sp. Atk damage,\nwhichever stat is higher for the user \nThis move ignores the target’s Ability.",
    shortDesc: "This attack inflicts Attack or Sp. Atk damage,\nwhichever stat is higher for the user \nThis move ignores the target’s Ability.",
    noPPBoosts: true,
    isNonstandard: null,
    num: 723,
    accuracy: true,
    category: "Special",
    name: "Light That Burns the Sky",
    pp: 1,
    priority: 0,
    flags: {},
    ignoreAbility: true,
    isZ: "ultranecroziumz",
    secondary: null,
    target: "normal",
    type: "Psychic",
    id: "lightthatburnsthesky",
    fullname: "move: Light That Burns the Sky",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    maxMove: {
      basePower: 1
    }
  },
  searingsunrazesmash: {
    exists: true,
    basePower: 220,
    desc: "After obtaining Z-Power, the user, Solgaleo,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    shortDesc: "After obtaining Z-Power, the user, Solgaleo,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    noPPBoosts: true,
    isNonstandard: null,
    num: 724,
    accuracy: true,
    category: "Physical",
    name: "Searing Sunraze Smash",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "solganiumz",
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Steel",
    id: "searingsunrazesmash",
    fullname: "move: Searing Sunraze Smash",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    maxMove: {
      basePower: 1
    }
  },
  menacingmoonrazemaelstrom: {
    exists: true,
    basePower: 220,
    desc: "After obtaining Z-Power, the user, Lunala,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    shortDesc: "After obtaining Z-Power, the user, Lunala,\nattacks the target with full force. This move can\nignore the effect of the target’s Ability.",
    flags: {
      bypasssub: 1
    },
    noPPBoosts: true,
    isNonstandard: null,
    num: 725,
    accuracy: true,
    category: "Special",
    name: "Menacing Moonraze Maelstrom",
    pp: 1,
    priority: 0,
    isZ: "lunaliumz",
    ignoreAbility: true,
    secondary: null,
    target: "normal",
    type: "Ghost",
    id: "menacingmoonrazemaelstrom",
    fullname: "move: Menacing Moonraze Maelstrom",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    maxMove: {
      basePower: 1
    }
  },
  letssnuggleforever: {
    exists: true,
    basePower: 250,
    name: "Let’s Snuggle Forever",
    desc: "After obtaining Z-Power, the user, Mimikyu,\npunches the target with full force.",
    shortDesc: "After obtaining Z-Power, the user, Mimikyu,\npunches the target with full force.",
    noPPBoosts: true,
    isNonstandard: null,
    num: 726,
    accuracy: true,
    category: "Physical",
    pp: 1,
    priority: 0,
    flags: {
      contact: 1
    },
    isZ: "mimikiumz",
    secondary: null,
    target: "normal",
    type: "Fairy",
    id: "letssnuggleforever",
    fullname: "move: Let’s Snuggle Forever",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  splinteredstormshards: {
    exists: true,
    critRatio: 7,
    desc: "After obtaining Z-Power, the user, Lycanroc,\nattacks the target with full force. This move negates\nthe effect on the battlefield.",
    shortDesc: "After obtaining Z-Power, the user, Lycanroc,\nattacks the target with full force. This move negates\nthe effect on the battlefield.",
    willCrit: true,
    noPPBoosts: true,
    isNonstandard: null,
    num: 727,
    accuracy: true,
    basePower: 190,
    category: "Physical",
    name: "Splintered Stormshards",
    pp: 1,
    priority: 0,
    flags: {},
    isZ: "lycaniumz",
    secondary: null,
    target: "normal",
    type: "Rock",
    id: "splinteredstormshards",
    fullname: "move: Splintered Stormshards",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    secondaries: null,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  },
  clangoroussoulblaze: {
    exists: true,
    basePower: 190,
    desc: "After obtaining Z-Power, the user, Kommo-o,\nattacks the opposing Pokemon with full force. This\ngives +1 all stats in exchange for 30% recoil.",
    shortDesc: "After obtaining Z-Power, the user, Kommo-o,\nattacks the opposing Pokemon with full force. This\ngives +1 all stats in exchange for 30% recoil.",
    flags: {
      bypasssub: 1,
      punch: 1
    },
    recoil: [
      30,
      100
    ],
    secondaries: [
      {
        chance: 100,
        self: {
          boosts: {
            atk: 1,
            def: 1,
            spa: 1,
            spd: 1,
            spe: 1
          }
        }
      }
    ],
    noPPBoosts: true,
    isNonstandard: null,
    num: 728,
    accuracy: true,
    category: "Special",
    name: "Clangorous Soulblaze",
    pp: 1,
    priority: 0,
    selfBoost: {
      boosts: {
        atk: 1,
        def: 1,
        spa: 1,
        spd: 1,
        spe: 1
      }
    },
    isZ: "kommoniumz",
    secondary: {},
    target: "allAdjacentFoes",
    type: "Dragon",
    id: "clangoroussoulblaze",
    fullname: "move: Clangorous Soulblaze",
    effectType: "Move",
    kind: "Move",
    gen: 7,
    critRatio: 1,
    hasSheerForce: false,
    ignoreImmunity: false,
    isMax: false,
    ignoreAbility: false,
    maxMove: {
      basePower: 1
    }
  }
};
let e=["Work Up","Parting Shot","Endure","Protect","Rain Dance","Sunny Day","Sandstorm","Hail","Grassy Terrain","Electric Terrain","Brick Break","Grass Knot","Bulldoze","Rock Tomb","Ominous Wind","Water Pledge","Grass Pledge","Fire Pledge","Shock Wave","Draco Jet","Snore","Bug Biting","Bounce","Bind","Synthesis","Pain Split","Tailwind","Laser Focus","Gravity","Recycle","Skill Swap","Trick","Magnet Rise","Stealth Rock","Low Kick","Liquidation","Stomping Tantrum","Iron Head","Seed Bomb","Fire Punch","Ice Punch","Thunder Punch","Drain Punch","Knock Off","Covet","Signal Beam","Giga Drain","Water Pulse","Icy Wind","Electroweb","Psychic Fangs","Ice Fang","Fire Fang","Poison Fang","Thunder Fang","Roost","Rest","Sleep Talk","Hidden Power","Taunt","Volt Switch","U-Turn","Poison Jab","Shadow Punch","Reflect","Light Screen","Mystical Fire","Toxic Spikes","Dazzling Gleam","Aurora Veil","Weather Ball","Belch","Rage","Power-Up Punch","Charge Beam","Hex","Venoshock","Hone Claws","Smart Strike","Substitute","Agility","Scorching Sands","Burning Malice","Synchronoise","Dark Pulse","Steel Wing","Nature Power","Seismic Fist","Sucker Punch","Shadow Ball","Psychic","Aura Sphere","Will-O-Wisp","Rock Slide","Retaliate","Thunderbolt","Ice Beam","Flamethrower","Energy Ball","Sludge Bomb","Natural Gift","Surf","Rock Polish","Blaze Kick","Acrobatics","First Impression","Lunge","Flash Cannon","Dragon Dance","Solar Beam","Solar Blade","Spiteful Spell","Acid Reflux","Focus Punch","Sky Attack","Heat Wave","Earth Power","Hyper Voice","Dragon Pulse","Drill Run","Zen Headbutt","Aqua Tail","Hell Thrust","Iron Tail","Gunk Shot","Foul Play","Endeavor","Iron Defense","Nasty Plot","Swords Dance","Calm Mind","Bulk Up","Play Rough","Wild Charge","Rock Climb","Take Down","Sludge Wave","Earthquake","Draco Meteor","Hyper Beam","Giga Impact","Thunder","Blizzard","Hurricane","Fire Blast","Close Combat","Focus Blast","Stone Edge","Strength","Hydro Pump","Power Whip","Megahorn","Megaton Kick","Superpower","Uproar","Outrage","Last Resort","Time Out","Super Fang","Helping Hand","Defog","Snatch","Telekinesis","Magic Coat","Magic Room","Wonder Room","Role Play","Worry Seed","Block","After You","Ally Switch"].map(toID);window.PokedexPokemonPanel=PokedexResultPanel.extend({initialize:function(e){e=toID(e);var t,a=BattlePokedex[e];this.id=e,this.shortTitle=a.baseSpecies;var s='<div class="pfx-body dexentry">';s+=`<a href="${Config.baseurl}" class="pfx-backbutton" data-target="back"><i class="fa fa-chevron-left"></i> Pok&eacute;dex</a><h1>`,a.forme?s+=`<a href="${Config.baseurl}pokemon/${e}" data-target="push" class="subtle">${a.baseSpecies}<small>-${a.forme}</small></a>`:s+=`<a href="${Config.baseurl}pokemon/${e}" data-target="push" class="subtle">${a.name}</a>`,a.num>0&&(s+=` <code>#${a.num}</code>`),s+="</h1>",a.unusable&&(s+='<div class="warning"><strong>Note:</strong> This Pok&eacute;mon not available.</div>');let l=e;a.forme&&(l=toID(a.baseSpecies)+"-"+toID(a.forme)),s+=`<img src="${ResourcePrefix}sprites/gen5/${l}.png" alt="" width="96" height="96" class="sprite" /><dl class="typeentry"><dt>Types:</dt> <dd>`;for(var r=0;r<a.types.length;r++)s+=`<a class="type ${toID(a.types[r])}" href="${Config.baseurl}types/${toID(a.types[r])}" data-target="push">${a.types[r]}</a> `;s+='</dd></dl><dl class="sizeentry"><dt>Size:</dt> <dd>';var o=(t=a.weightkg)>=200?120:t>=100?100:t>=50?80:t>=25?60:t>=10?40:20;for(var r in s+=`${a.weightkg} kg<br /><small><a class="subtle" href="${Config.baseurl}moves/grassknot" data-target="push">Grass Knot</a>: ${o}</small></dd></dl><dl class="abilityentry"><dt>Abilities:</dt> <dd class="imgentry">`,a.abilities){var i=a.abilities[r];i&&("0"!==r&&(s+=" | "),"H"===r&&(i=`<em>${a.abilities[r]}</em>`),s+=`<a href="${Config.baseurl}abilities/${toID(a.abilities[r])}" data-target="push">${i}</a>`,"H"===r&&(s+="<small> (H)</small>"),"S"===r&&(s+="<small> (special)</small>"))}var n={hp:"HP",atk:"Attack",def:"Defense",spa:"Sp. Atk",spd:"Sp. Def",spe:"Speed"};s+='</dd></dl><dl><dt style="clear:left">Base stats:</dt><dd><table class="stats"><tr><td></td><td></td><td style="width:200px"></td><th class="ministat"><abbr title="0 IVs, 0 EVs, negative nature">min&minus;</a></th><th class="ministat"><abbr title="31 IVs, 0 EVs, neutral nature">min</abbr></th><th class="ministat"><abbr title="31 IVs, 252 EVs, neutral nature">max</abbr></th><th class="ministat"><abbr title="31 IVs, 252 EVs, positive nature">max+</abbr></th>';var d=0;for(var c in BattleStatNames){var h=a.baseStats[c];d+=h;var u=Math.floor(200*h/200);u>200&&(u=200);var m=Math.floor(180*h/255);m>360&&(m=360),s+=`<tr><th>${n[c]}:</th><td class="stat">${h}</td><td class="statbar"><span style="width:${Math.floor(u)}px;background:hsl(${m},85%,45%);border-color:hsl(${m},75%,35%)"></span></td>`+('<td class="ministat"><small>'+("hp"===c?"":this.getStat(h,!1,100,0,0,.9))+'</small></td><td class="ministat"><small>')+this.getStat(h,"hp"===c,100,31,0,1)+"</small></td>"+('<td class="ministat"><small>'+this.getStat(h,"hp"===c,100,31,255,1)+'</small></td><td class="ministat"><small>')+("hp"===c?"":this.getStat(h,!1,100,31,255,1.1))+"</small></td></tr>"}s+=`<tr><th class="bst">Total:</th><td class="bst">${d}</td><td></td><td class="ministat" colspan="4">at level <input type="text" class="textbox" name="level" placeholder="100" size="5" /></td></table></dd><dt>Evolution:</dt> <dd>`;for(var g=a;g.prevo;)g=getID(BattlePokedex,g.prevo);if(g.evos){s+='<table class="evos"><tr><td>';var p=[g];let e=0;for(;p.length>0;){for(var v=[],r=0;r<p.length;r++){var f=(g=p[r]).forme?g.baseSpecies+`<small>-${g.forme}</small>`:g.name;f=`<span class="picon" style="${getPokemonIcon(g)}"></span>`+f,g===a?s+=`<div><strong>${f}</strong></div>`:s+=`<div><a href="${Config.baseurl}pokemon/${g.id}" data-target="replace">${f}</a></div>`,v=v.concat(g.evos??[])}if(p=v.map(e=>getID(BattlePokedex,e)),e++>100)break;p.length>0&&(s+='</td><td class="arrow"><span>&rarr;</span></td><td>')}s+="</td></tr></table>",a.prevo&&(s+=`<div><small>Evolves from ${getID(BattlePokedex,a.prevo).name} (${this.getEvoMethod(a)})</small></div>`)}else s+="<em>Does not evolve</em>";if(a.formes){s+="</dd><dt>Formes:</dt> <dd>";for(var b=a.formes,r=0;r<b.length;r++)if(g=getID(BattlePokedex,b[r])){var f=g.forme||"Base";f=`<span class="picon" style="${getPokemonIcon(g)}"></span>`+f,r>0&&(s+=", "),g===a?s+=`<strong>${f}</strong>`:s+=`<a href="${Config.baseurl}pokemon/${g.id}" data-target="replace">${f}</a>`}if(a.requiredItems&&a.requiredItems.length>0)for(let e of(s+="<div><small>Must hold one of</small></div>",a.requiredItems))s+=`<div><small><a href="${Config.baseurl}items/${toID(e)}" data-target="push">${e}</a></small></div>`}if(a.cosmeticFormes){s+="</dd><dt>Cosmetic formes:</dt> <dd>"+(f=`<span class="picon" style="${getPokemonIcon(a)}"></span>`+a.name);for(var r=0;r<a.cosmeticFormes.length;r++)s+=","+(f=`<span class="picon" style="${getPokemonIcon(a.name+"-"+a.cosmeticFormes[r])}"></span>`+a.cosmeticFormes[r])}if(s+="</dd></dl>",a.eggGroups){if(s+='<dl class="colentry"><dt>Egg groups:</dt><dd><span class="picon" style="margin-top:-12px;'+getPokemonIcon("egg")+`"></span><a href="${Config.baseurl}egggroups/`+a.eggGroups.map(toID).join("+")+'" data-target="push">'+a.eggGroups.join(", ")+'</a></dd></dl><dl class="colentry"><dt>Gender ratio:</dt><dd>',a.gender)switch(a.gender){case"M":s+="100% male";break;case"F":s+="100% female";break;case"N":s+="100% genderless"}else a.genderRatio?s+=`${100*a.genderRatio.M}% male, ${100*a.genderRatio.F}% female`:s+="50% male, 50% female";s+='</dd></dl><div style="clear:left"></div>'}s+='<ul class="utilichart nokbd"><li class="resultheader"><h3>Level-up</h3></li></ul></div>',this.html(s),setTimeout(this.renderFullLearnset.bind(this))},events:{"click .tabbar button":"selectTab","input input[name=level]":"updateLevel","keyup input[name=level]":"updateLevel","change input[name=level]":"updateLevel"},updateLevel:function(e){var t=this.$("input[name=level]").val(),a=""===t?100:parseInt(t,10),s=31,l=255;":"===t.slice(-1)&&(s=0,l=0);var r=0,o=this.$("table.stats td.ministat small"),i=getID(BattlePokedex,this.id);for(var n in BattleStatNames){var d=i.baseStats[n];o.eq(4*r+0).text("hp"===n?"":this.getStat(d,!1,a,0,0,.9)),o.eq(4*r+1).text(this.getStat(d,"hp"===n,a,s,0,1)),o.eq(4*r+2).text(this.getStat(d,"hp"===n,a,31,l,1)),o.eq(4*r+3).text("hp"===n?"":this.getStat(d,!1,a,31,l,1.1)),r++}},getEvoMethod:function(e){let t=e.evoCondition?` ${e.evoCondition}`:"",a="";switch(e.evoType){case"levelExtra":a="level-up"+t;break;case"levelFriendship":a="level-up with high Friendship"+t;break;case"levelHold":a="level-up holding "+e.evoItem+t;break;case"useItem":a="use "+e.evoItem+t;break;case"levelMove":a="level-up with "+e.evoMove+t;break;case"trade":a="trade";break;case"other":a=e.evoCondition}return e.evoLevel&&(""!=a&&(a+=" at "),a+="level "+e.evoLevel),a},selectTab:function(e){this.$(".tabbar button").removeClass("cur"),$(e.currentTarget).addClass("cur"),"move"===e.currentTarget.value&&this.renderFullLearnset()},renderFullLearnset:function(){getID(BattlePokedex,this.id);var t,a=getLearnset(this.id),s="",l="";for(let o of(a.sort((t,a)=>("tutor"==t.how||"tm"==t.how)&&("tutor"==a.how||"tm"==a.how)?e.indexOf(t.move)-e.indexOf(a.move):0),a)){let e=BattleMovedex[o.move];if(!e){s+=`<li><pre>error: "${o.move}"</pre></li>`;continue}var r=void 0==t||t.how!=o.how;switch(o.how){case"lvl":r&&(s+='<li class="resultheader"><h3>Level-up</h3></li>');let a=o.level;l=a<=1?"&ndash;":"<small>L</small>"+a;break;case"prevo":r&&(s+='<li class="resultheader"><h3>From preevo</h3></li>'),l="";break;case"tm":r&&"tutor"!=t.how&&(s+='<li class="resultheader"><h3>TM/Tutors (Chronological Order)</h3></li>'),l=`<span class="itemicon" style="margin-top:-3px;${getItemIcon(721)}"></span>`;break;case"tutor":r&&"tm"!=t.how&&(s+='<li class="resultheader"><h3>TM/Tutors (Chronological Order)</h3></li>'),l=`<img src="${ResourcePrefix}sprites/tutor.png" style="margin-top:-4px;opacity:.7" width="27" height="26" alt="T" />`;break;case"egg":r&&(s+='<li class="resultheader"><h3>Egg</h3></li>'),l='<span class="picon" style="margin-top:-12px;'+getPokemonIcon("egg")+'"></span>'}t=o,s+=BattleSearch.renderTaggedMoveRow(e,l)}this.$(".utilichart").html(s)},getStat:function(e,t,a,s,l,r){if(t)return 1===e?1:Math.floor(Math.floor(2*e+(s||0)+Math.floor((l||0)/4)+100)*a/100+10);var o=Math.floor(Math.floor(2*e+(s||0)+Math.floor((l||0)/4))*a/100+5);return r&&!t&&(o*=r),Math.floor(o)}});//# sourceMappingURL=index.8c78a472.js.map

//# sourceMappingURL=index.8c78a472.js.map
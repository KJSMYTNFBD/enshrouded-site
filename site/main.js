/* 霧鎖王國 介紹頁：滾動場景與互動（main.js 由 build.py 從本檔產生） */
(() => {
  'use strict';
  const TREE = {"n":[[-153,-567,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[154,-566,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[564,152,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[414,414,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[-413,416,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[-567,149,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[384,-103,0,2,"Well Rested",1,3,-1,"",["The base duration for the Rested buff is increased by <b>6</b> minutes.","<b>Rested</b>","The Rested buff increases your Stamina Maximum and Regeneration significantly.","It requires <b>shelter, sitting or sleeping,</b> as well as <b>warmth</b> from a heat source.","The buff can be refreshed <b>anywhere.</b>","Surrounding comfort items further increase its duration."]],[-383,103,0,2,"Mason",1,3,-1,"",["Tools deal <b>30%</b> increased damage against stone.","This includes stone terrain and gemstone veins."]],[-102,-383,0,2,"Lumberjack",1,3,-1,"",["Tools deal <b>30%</b> increased damage against wood.","This includes trees and wooden terrain."]],[-166,-98,0,2,"Miner",2,1,-1,"",["Mining resources has a <b>10%</b> chance to grant one additional resource."]],[-280,-284,0,2,"Quality Gear",1,1,-1,"",["Tools have a <b>20%</b> chance to restore <b>1</b> durability on hit."]],[-282,276,0,3,"Merciless Attack",2,1,-1,"skills/3223249169.webp",["Perform a <b>Merciless Attack</b> by pressing <b>[Interact]</b> to deal <b>500%</b> damage to an <b>overpowered</b> enemy.","<b>Overpower</b>","Attacking blocking enemies or parrying their attacks fills their Stun Bar until they become <b>overpowered</b>.","<b>Overpowered</b> enemies are open for Merciless Attacks.","Wands, Staves and Bows cannot perform Merciless Attacks."]],[865,-1090,3,3,"Sneak Attack",3,1,3,"skills/606477139.webp",["Perform a <b>Sneak Attack</b> by sneaking up to an unaware enemy and pressing <b>[Interact]</b>.","<b>Sneak Attack</b> deals <b>+900%</b> increased damage.","Wands, Staves and Bows cannot perform Sneak Attacks."]],[559,557,2,1,"Intelligence",1,1,6,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[1367,1141,2,2,"Healing Revive",1,3,6,"",["Revive players with <b>24%</b> increased Health.","Default Health of revived players is <b>10%</b>."]],[1397,1396,2,2,"Waters Of Life",2,1,6,"",["Increases <b>Water Aura</b> healing to <b>2</b> Health per <b>2</b> points of Intelligence."]],[953,255,2,2,"Mage Apprentice",1,3,5,"",["Damage with Wands and Staves increased by <b>15%</b>."]],[1483,540,2,2,"Arsonist",2,3,5,"",["All <b>Fire</b> damage is increased by <b>30%</b>."]],[1232,628,2,2,"Dark Arts",2,3,5,"",["All <b>Shroud</b> damage is increased by <b>30%</b>."]],[1555,273,2,2,"Iceman",2,3,5,"",["All <b>Ice</b> damage is increased by <b>30%</b>."]],[1943,341,2,2,"Frost",2,3,5,"",["When receiving Melee damage, the attacker will be slowed down for <b>9s</b>."]],[763,202,2,1,"Spirit",1,1,5,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[1566,-210,2,2,"Quick Charge",1,3,4,"",["Charge Time of spells is reduced by <b>30%</b>."]],[618,1234,2,2,"Blink Attack",2,1,7,"",["Blinking into an enemy triggers an explosion which deals <b>Fire</b> damage in a small radius.","Damage and Mana cost scale with the Intelligence attribute."]],[761,1155,2,2,"Emergency Blink",2,1,6,"",["You can blink while being stunned. This will break the stunned state."]],[1184,-2,2,2,"Counterstrike",1,3,4,"",["After receiving damage, there is a <b>24%</b> chance to reflect <b>60%</b> of the damage back to the attacker as <b>Fire</b> damage.","This magical attack can trigger other skills."]],[1715,-461,2,1,"Arcane Concentration",5,1,4,"",["Gain one point of Spirit for every two levels of the Flame. "]],[837,-836,3,1,"Endurance",1,1,3,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[2183,585,2,1,"Spirit",1,1,5,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[1670,-606,2,1,"Intelligence",1,1,4,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[1910,511,2,2,"Wizard",2,3,5,"",["Critical Strike chance with Wands and Staves is increased by <b>6%</b>."]],[2244,754,2,2,"Chain Hit",3,1,5,"",["Critical Strikes with Magic weapons hit an additional random target within <b>15</b> meters for <b>5 Shock</b> damage per Intelligence.","The initial target can be hit twice instead of chaining to another one."]],[2072,903,2,2,"Mass Destruction",3,1,5,"",["Critical Strikes with Magic weapons deal <b>2 Shock</b> damage per Intelligence to all enemies within <b>15</b> meters of the target."]],[2136,-775,2,2,"Blood Magic",4,1,4,"",["When your Mana drops below <b>20%</b>, you restore up to <b>35%</b> of your maximum Mana at the cost of <b>1</b> Health per Mana restored.","This effect stops at <b>1</b> Health.","<b>Cooldown:</b> 2 minutes"]],[1167,738,2,2,"Necromancer",1,3,6,"",["When killing an enemy with a Magic weapon, you have a <b>15%</b> chance to summon a friendly <b>Skull Companion</b>."]],[2239,-396,2,2,"Terror",2,3,4,"",["Critical Strikes with spells have a <b>60%</b> chance to stun the target for <b>2</b> seconds."]],[697,-700,3,2,"Airborne",1,3,3,"",["Gliders consume <b>36%</b> less Stamina."]],[257,-954,3,2,"Marksman",1,3,2,"",["Damage with Bows is increased by <b>15%</b>."]],[-741,-2037,3,2,"Calm Spirit",3,1,1,"",["<b>Wild Animals</b> within <b>50</b> meters will no longer attack you unless provoked.","Does not affect animals corrupted by the Shroud."]],[-206,-1166,3,2,"Snake Eater",2,3,1,"",["Increases your <b>Poison Resistance</b> by <b>12%</b>, which reduces the amount of <b>Poison</b> damage received.","<b>Poison</b> damage bypasses armor and can only be mitigated by <b>Poison Resistance</b>."]],[-698,-695,3,2,"Runner",1,3,0,"",["Sprint Speed is increased by <b>15%</b> and Stamina cost while sprinting is decreased by <b>15%</b>."]],[209,-1368,3,2,"Counter Battery",1,3,2,"",["Damage against <b>ranged</b> enemies is increased by <b>24%</b>."]],[-375,-2140,3,2,"Vukah Language",3,1,1,"",["<b>Vukah</b> within <b>50</b> meters will no longer attack you unless provoked."]],[1025,-596,3,3,"Updraft",4,1,3,"skills/3088989644.webp",["Jumping with [Action] while gliding lifts you upwards. Can be used once per flight.","<b>Charge</b>","As the Updraft charges before activation, the resulting lift is increased. A full charge grants you an additional boost. The charge is accelerated while inside your base.","<b>Cost:</b> 100 Mana"]],[805,-2126,3,1,"Dexterity",1,1,2,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[205,-762,3,1,"Dexterity",1,1,2,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[-1002,-2146,3,2,"Beast Master",4,1,1,"",["When you are targeted by an attack, <b>Wild Animals</b> within <b>50</b> meters will attack the enemy."]],[-1079,-1287,3,2,"Good Metabolism",3,1,0,"",["Health, Mana, and Stamina Orbs restore <b>30%</b> instead of <b>10%</b> of their respective resource.","Health and Mana Potions restore <b>20%</b> more resources."]],[-236,-2363,3,2,"Vukah Culture",4,1,1,"",["When you are targeted by an attack, <b>Vukah</b> within <b>50</b> meters will attack the enemy."]],[563,-2098,3,2,"Ranger",2,3,2,"",["Increases your Dexterity and Endurance attributes by <b>3</b>.","Base Stamina Regeneration is increased by <b>15</b>."]],[-356,-1331,3,1,"Endurance",1,1,1,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[-254,-951,3,2,"Mithridatist",2,1,1,"",["Gain a <b>25%</b> chance to avoid being poisoned."]],[-274,-1556,3,2,"Bounty Bonanza",2,1,1,"",["After defeating a <b>Fell</b> enemy with a <b>Skillshot</b>, your group gains an additional <b>5</b> Experience Points.","<b>Skillshot</b>","Striking enemy weak points, such as their heads, with Arrows is considered a Skillshot.","Skillshots deal 100% increased base damage against enemies without helmets and 50% against helmeted enemies.","It can be further increased by the Skillshot damage attribute."]],[498,-1291,3,2,"Sniper",2,3,2,"",["Critical Strike chance with Bows is increased by <b>6%</b>."]],[1043,-2237,3,2,"Shrapnel Blast",3,1,2,"",["Every target hit with an <b>Explosive Arrow</b>, increases its damage by <b>10%</b>."]],[682,-2340,3,2,"Echoing Explosives",4,1,2,"",["Every enemy hit with an <b>Explosive Arrow</b> has a <b>40%</b> chance to trigger a secondary explosion for <b>50%</b> damage in a small radius."]],[-203,-763,3,1,"Endurance",1,1,1,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[-1675,-1674,3,1,"Endurance",1,1,0,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[677,-1856,3,2,"Blessed Arrows",1,3,2,"",["Critical Strikes with Bows restore <b>24</b> Mana."]],[-761,203,1,1,"Strength",1,1,10,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-557,557,1,1,"Constitution",1,1,9,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-4,1178,1,3,"Evasion Attack",4,1,8,"skills/1667913488.webp",["When equipped with a Melee weapon, you can perform an Evasion Attack by pressing <b>[Attack]</b> while evading.","You will dash towards the enemy and deal <b>50%</b> additional weapon damage.","<b>Cost:</b> 25 Stamina","<b>Block Breaker</b>","This special attack fills a blocking enemy's Stun Bar twice as much when hit."]],[-2040,746,1,1,"Barbarian",5,1,10,"",["Gain one point of Strength for every two levels of the Flame. "]],[-699,697,1,2,"Warrior's Path",1,3,9,"",["Damage with One-Handed Axes, Clubs and Swords is increased by <b>15%</b>."]],[-474,1296,1,2,"Shiny Plates",1,3,8,"",["Magical Armor points from equipped items are increased by <b>12%</b>."]],[-256,953,1,2,"Heavy Plates",1,3,8,"",["Physical Armor points from equipped items are increased by <b>12%</b>."]],[-1177,895,1,2,"Slasher",2,3,9,"",["Melee <b>Cutting</b> damage is increased by <b>30%</b>."]],[-1717,626,1,2,"Brute",2,3,10,"",["Melee <b>Blunt</b> damage is increased by <b>30%</b>."]],[1609,-1610,3,2,"Thrust",2,3,3,"",["Melee <b>Piercing</b> damage is increased by <b>30%</b>."]],[-1026,593,1,2,"Heavy Handed",1,3,9,"",["Filling up enemy Stun Bars is increased by <b>30%</b> when attacking blocking enemies with Melee weapons.","<b>Overpower</b>","Attacking blocking enemies or parrying their attacks fills their Stun Bar until they become <b>overpowered</b>.","<b>Overpowered</b> enemies are open for Merciless Attacks."]],[-1710,987,1,2,"Breach",3,1,10,"",["<b>Overpowered</b> enemies receive <b>100%</b> increased Melee physical damage for <b>3</b> seconds.","<b>Overpower</b>","Attacking blocking enemies or parrying their attacks fills their Stun Bar until they become <b>overpowered</b>.","<b>Overpowered</b> enemies are open for Merciless Attacks."]],[-1359,-242,1,1,"Strength",1,1,11,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-595,1027,1,2,"Veteran",2,3,9,"",["Critical Strike chance with One- or Two-Handed Axes, Clubs, Hammers, Swords, Greatswords and Daggers is increased by <b>6%</b>."]],[-1800,-483,1,2,"Crash Down: Force",3,1,11,"",["When attacking from a double jump, <b>Crash Down</b> deals <b>20%</b> more weapon damage."]],[892,-1302,3,2,"Backstab Mastery",1,3,3,"",["<b>Backstab</b> damage is increased by <b>60%</b>."]],[-673,1430,1,2,"Tower",3,1,8,"",["While there are three or more enemies within <b>20</b> meters, you receive <b>10%</b> increased <b>Physical Resistance</b>."]],[-139,1580,1,2,"Warden",3,1,8,"",["While there are three or more enemies within <b>20</b> meters, you receive <b>10%</b> increased <b>Magical Resistance</b>."]],[-158,1774,1,2,"Absorb",1,3,8,"",["When you receive <b>Magic</b> damage, you have a <b>12%</b> chance to restore <b>1</b> Mana per Health point lost."]],[-1677,-579,1,1,"Constitution",1,1,11,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-1906,510,1,2,"Blood Rage",2,3,10,"",["When an enemy within <b>15</b> meters is killed by a Melee weapon, you fall into <b>Blood Rage</b>.","<b>Blood Rage</b>","Increases Melee weapon damage by <b>15%</b> for <b>10</b> seconds."]],[2104,-565,2,2,"Bloodletting",2,3,4,"",["Critical Strikes with spells have a <b>60%</b> chance to spawn two Health, Mana, and/or Stamina Orbs.","Gathering an Orb restores <b>10%</b> of the respective resource."]],[152,1769,2,2,"Life Burst",4,1,7,"",["Defeating an enemy with a Magic weapon restores Health equal to <b>5</b> times your Intelligence to all players within <b>15</b> meters of the target."]],[-750,1608,1,2,"Soul Leech",2,3,8,"",["When killing an enemy with a Melee weapon, all players within <b>15</b> meters of the target restore <b>45</b> Mana."]],[-1264,1264,1,2,"Battle Heal",2,3,9,"",["Critical Strikes with Melee weapons heal you for <b>3%</b> of your maximum Health."]],[-1263,1517,1,1,"Strength",1,1,9,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-1508,1270,1,1,"Constitution",1,1,9,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-1577,420,1,2,"Relentless",5,1,10,"",["Critical Strikes with Two-Handed weapons increase your Critical Strike chance by <b>8%</b> for the next hit."]],[276,-276,0,3,"Double Jump",2,1,-1,"skills/4292213056.webp",["Allows jumping a second time while airborne.","<b>Cost:</b> 10 Stamina"]],[-1526,-408,1,3,"Crash Down Attack",3,1,11,"skills/2517449291.webp",["When equipped with a Melee weapon, you can perform a special attack by holding <b>[Attack]</b> during a jump.","Crash Down deals 50% more weapon damage in a small blast radius and costs Stamina depending on weapon type used.","<b>Cost:</b> 35 - 60 Stamina","<b>Block Breaker</b>","This special attack fills a blocking enemy's Stun Bar twice as much when hit.."]],[-1964,-200,1,2,"Blood Warrior",3,1,11,"",["Defeating an enemy with a <b>Sneak Attack</b> or <b>Merciless Attack</b> spawns a Health Orb.","Gathering an Orb restores <b>10%</b> of the respective resource."]],[588,1021,2,3,"Blink",4,1,7,"skills/3243069428.webp",["Replaces the Dodge Roll ability with a short-range teleport.","Blink also replaces the sideways Dodge Roll of the Strategic Maneuver skill.","<b>Cost:</b> 20 Stamina"]],[-104,383,0,2,"Power Parry",1,3,-1,"",["Your Parry Power is increased by <b>30%</b>.","<b>Parry</b>","You can block when equipped with any Melee weapon, Ward, or Shield. A well-timed block will <b>parry</b> the attack and fill up the enemy's Stun Bar.","Wait to see a <b>flash</b> on the enemy or projectile to perform a parry.","<b>Overpower</b>","Attacking blocking enemies or parrying their attacks fills their Stun Bar until they become <b>overpowered</b>.","<b>Overpowered</b> enemies are open for Merciless Attacks."]],[188,-52,0,2,"Inner Fires",1,3,-1,"",["<b>Time in the Shroud</b> is increased by <b>180s</b>, allowing you to explore for longer.","<b>Time in the Shroud</b>","Should this time run out, the Shroud will consume you."]],[-245,1359,1,2,"Purification",1,3,8,"",["Defeating a Shroud infested enemy with a One- or Two-Handed Axe, Club, Hammer, Sword or Greatsword restores <b>9</b> seconds of <b>Time in the Shroud</b>.","<b>Time in the Shroud</b>","Should this time run out, the Shroud will consume you."]],[1020,1457,2,2,"Shroud Mitigation",1,3,6,"",["Dealing damage with a Magic weapon has a <b>30%</b> chance to trigger a small flame burst that restores <b>9</b> seconds of <b>Time in the Shroud </b> to you and your allies within <b>20</b> meters.","<b>Time in the Shroud</b>","Should this time run out, the Shroud will consume you."]],[-51,193,0,2,"Snap",2,1,-1,"",["Triggering a <b>Merciless Attack</b> restores <b>20%</b> Mana."]],[698,696,2,2,"Healer",1,3,6,"",["Health gain from healing spells and Water Aura is increased by <b>45%</b>."]],[-1393,-1661,3,2,"Sweet Tooth",3,1,0,"",["Stamina Regeneration of sweets is increased by <b>50%</b>."]],[1799,1263,2,1,"Spirit",1,1,6,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[340,1743,2,2,"Sting",3,1,7,"",["Repeated Wand damage is increased by <b>20%</b>."]],[563,2099,2,1,"Exalted",5,1,7,"",["Gain one point of Intelligence for every two levels of the Flame."]],[753,1615,2,2,"Arcane Proliferation",3,1,7,"",["Wand attacks have a <b>30%</b> chance to spawn double the amount of projectiles. Extra projectiles spawned deal <b>50%</b> less damage."]],[279,278,0,2,"Saviour",1,3,-1,"",["Time to revive an ally is reduced by <b>3</b> seconds.","Default revive time is <b>6</b> seconds."]],[610,-1670,3,2,"Vitality Surge",1,3,2,"",["Critical Strikes with Bows, Daggers and Throwables restore <b>9</b> Stamina."]],[406,1109,2,2,"Arcane Deflection",1,3,7,"",["Successfully parrying an enemy's attack restores <b>30</b> Mana.","<b>Parry</b>","You can block when equipped with any Melee weapon, Ward, or Shield. A well-timed block will <b>parry</b> the attack and fill up the enemy's Stun Bar.","Wait to see a <b>flash</b> on the enemy or projectile to perform a parry."]],[-1741,-339,1,2,"Vigorous Deflection",1,3,11,"",["Successfully parrying an enemy's attack restores <b>45</b> Stamina.","<b>Parry</b>","You can block when equipped with any Melee weapon, Ward, or Shield. A well-timed block will <b>parry</b> the attack and fill up the enemy's Stun Bar.","Wait to see a <b>flash</b> on the enemy or projectile to perform a parry."]],[343,-1947,3,2,"Eagle's Bane",1,3,2,"",["Damage against <b>flying</b> enemies is increased by <b>30%</b>."]],[591,-1025,3,2,"Silent Stride",1,3,2,"",["Increases your movement speed while <b>sneaking</b> by <b>60%</b>."]],[308,-1747,3,2,"Skill Shot",1,3,2,"",["<b>Skillshot</b> damage is increased by <b>60%</b>.","<b>Skillshot</b>","Striking enemy weak points, such as their heads, with Arrows is considered a Skillshot.","Skillshots deal 100% increased base damage against enemies without helmets and 50% against helmeted enemies.","It can be further increased by the Skillshot damage attribute."]],[-1289,-1081,3,2,"Swiftshot Sustenance",1,3,0,"",["Defeating an enemy with a Bow has a <b>36%</b> chance to spawn a Stamina Orb.","Gathering an Orb restores <b>10%</b> of the respective resource."]],[-1060,-884,3,2,"Arachnoid",1,3,0,"",["Stamina cost while climbing is reduced by <b>60%</b>."]],[-886,-1059,3,2,"Wanderlust",3,1,0,"",["Stamina cost for <b>sprinting on dirt roads</b> is reduced from <b>90% to 80%</b>.","Stamina cost for <b>sprinting on stone roads</b> is reduced from <b>75% to 50%</b>."]],[2321,468,2,2,"Thunder",2,3,5,"",["All <b>Shock</b> damage is increased by <b>30%</b>."]],[-12,-1923,3,3,"Bee Sting",3,1,1,"skills/3408597457.webp",["Firing or aiming your Bow while airborne slows down your fall briefly. Every shot lifts you slightly, granting more airtime.","<b>Cost:</b> 10 Stamina per second"]],[1524,-412,2,3,"Begone!",3,1,4,"skills/3408936759.webp",["A magic-powered punch that pushes back and stuns enemies.","Replaces your unarmed attacks as long as you have the necessary Mana available.","<b>Cost:</b> 30 Mana"]],[-340,2167,1,3,"Martyr",3,1,8,"skills/4039776277.webp",["When you are killed by an enemy, all allies within <b>30</b> meters are healed for <b>50%</b> of their maximum Health.","They also receive a <b>Final Blessing</b> buff, increasing their maximum Health by <b>100</b> points for <b>15</b> minutes."]],[1017,1210,2,3,"Water Aura",1,3,6,"skills/1417816412.webp",["You emit a healing aura that heals you and all injured allies within <b>15.1</b> meters.","The healing scales with your Intelligence attribute and restores <b>1</b> Health per <b>2</b> points of Intelligence."]],[1792,834,2,3,"Radiant Aura",1,3,5,"skills/1813568515.webp",["All <b>Fell</b> enemies within <b>6.1</b> meters take <b>3 Fire</b> damage per Intelligence per second."]],[-786,2050,1,3,"Nemesis",2,3,8,"skills/2346031477.webp",["Increase the attention you draw from enemies by <b>30%</b>."]],[-1880,1087,1,3,"Shockwave",3,1,9,"skills/168513822.webp",["Trigger a Shockwave when you parry an attack or <b>overpower</b> an enemy.","The Shockwave pushes back nearby enemies. It also fills their Stun Bar, scaling with your Strength attribute.","<b>Parry</b>","You can block when equipped with any Melee weapon, Ward, or Shield. A well-timed block will <b>parry</b> the attack and fill up the enemy's Stun Bar.","Wait to see a <b>flash</b> on the enemy or projectile to perform a parry.","<b>Overpower</b>","Attacking blocking enemies or parrying their attacks fills their Stun Bar until they become <b>overpowered</b>.","<b>Overpowered</b> enemies are open for Merciless Attacks."]],[-1523,1520,1,3,"Swift Blades",4,1,9,"skills/2508204276.webp",["Increases the attack speed of all One-Handed Melee weapons by <b>15%</b>."]],[-2095,566,1,3,"Heavy Hitter",4,1,10,"skills/3377542145.webp",["Increases the attack speed of all Two-Handed Melee weapons by <b>10%</b>."]],[-1540,887,1,3,"Bash",2,3,10,"skills/3337133885.webp",["Parrying enemy attacks bashes them for <b>30 Blunt</b> damage. Bash damage is increased by your Strength attribute.","<b>Parry</b>","You can block when equipped with any Melee weapon, Ward, or Shield. A well-timed block will <b>parry</b> the attack and fill up the enemy's Stun Bar.","Wait to see a <b>flash</b> on the enemy or projectile to perform a parry."]],[355,-2243,3,3,"Multi Shot",4,1,2,"skills/3179300754.webp",["Shooting Regular Arrows has a <b>20%</b> chance to spawn a <b>Flurry of Arrows</b> that spreads slightly.","Regular Arrows fired this way will subtract from your ammunition.","<b>Flurry of Arrows</b> does not trigger on Special Arrows."]],[1621,-1132,3,3,"Shell Shock",3,1,3,"skills/1003933989.webp",["Infuse your <b>Ranged Explosives</b> with Mana. They now stun enemies for <b>2</b> seconds.","<b>Cost:</b> 8 Mana per stunned enemy"]],[357,1335,2,3,"Unity",1,3,7,"skills/3901216476.webp",["Damaging enemies with Wands has a <b>30%</b> chance to restore <b>6%</b> of your maximum Mana."]],[-565,-152,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[-416,-414,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[415,-414,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[565,-152,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[152,566,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[-151,565,0,0,"Spark",0,1,-1,"",["Allows you to revive yourself at the Flame Altar."]],[-204,764,1,1,"Constitution",1,1,8,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-760,-204,1,1,"Strength",1,1,11,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-555,-558,3,1,"Endurance",1,1,0,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[557,-559,3,1,"Dexterity",1,1,3,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[763,-204,2,1,"Spirit",1,1,4,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[205,760,2,1,"Intelligence",1,1,7,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[-611,2277,1,3,"Earth Aura",2,3,8,"skills/3435349512.webp",["You emit a protective aura that increases Physical and Magical Resistances by <b>10%</b> for you and all allies within <b>12</b> meters."]],[-413,1540,1,1,"Constitution",1,1,8,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-839,840,1,1,"Strength",1,1,9,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[204,1166,2,1,"Intelligence",1,1,7,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[-2296,-618,1,3,"Splash Dash",3,1,11,"skills/3304713733.webp",["Allows you to perform an evasive dash while swimming or diving.","<b>Cost</b>: 40 Stamina"]],[1232,330,2,1,"Intelligence",1,1,5,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[903,903,2,1,"Spirit",1,1,6,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[-562,-2096,3,1,"Endurance of the Flame",5,1,1,"",["Gain one point of Endurance for every two levels of the Flame. "]],[-542,-1485,3,1,"Dexterity",1,1,1,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[1100,-1100,3,1,"Dexterity",1,1,3,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[-1397,-1397,3,1,"Dexterity",1,1,0,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[-614,-2296,3,1,"Dexterity",1,1,1,"",["Increases your Dexterity attribute by 1. Increases Bow and Dagger damage by 5% per Attribute Point."]],[1398,-1396,3,1,"Endurance",1,1,3,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[-458,-1713,3,1,"Endurance",1,1,1,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[-975,-974,3,1,"Endurance",1,1,0,"",["Increases your Endurance attribute by 1. Increases Stamina by … per Attribute Point."]],[-1360,240,1,1,"Strength",1,1,10,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-172,1968,1,1,"Constitution",1,1,8,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-898,1162,1,1,"Constitution",1,1,9,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-1145,306,1,1,"Constitution",1,1,10,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-1298,-473,1,1,"Constitution",1,1,11,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-1789,834,1,1,"Constitution",1,1,10,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-1298,471,1,1,"Strength",1,1,10,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-1616,1133,1,1,"Strength",1,1,9,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-836,1788,1,1,"Strength",1,1,8,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[-1688,1689,1,1,"Strength",1,1,9,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[1789,-835,2,1,"Spirit",1,1,4,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[1296,-474,2,1,"Spirit",1,1,4,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[1751,-309,2,1,"Spirit",1,1,4,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[1610,752,2,1,"Spirit",1,1,5,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[1282,1529,2,1,"Spirit",1,1,6,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[919,1969,2,1,"Intelligence",1,1,7,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[1519,1263,2,1,"Intelligence",1,1,6,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[1965,-174,2,1,"Intelligence",1,1,4,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[2385,638,2,1,"Intelligence",1,1,5,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[1717,460,2,1,"Intelligence",1,1,5,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[-517,1930,1,1,"Thick Skin",5,1,8,"",["Gain one point of Constitution for every two levels of the Flame."]],[1817,-1818,3,1,"Graceful Stride",5,1,3,"",["Gain one point of Dexterity for every two levels of the Flame. "]],[0,-1186,3,3,"Eagle Eye",3,1,2,"skills/1087433670.webp",["Greatly increases the zoom while aiming with Bows.","To aim, hold down the [Action] while a Bow is selected in the Action bar.","(Alternatively, hold [Aim] to aim your equipped Bow.)"]],[-1536,-1542,3,3,"Dessert Stomach",4,1,0,"skills/142828059.webp",["You gain one additional Food slot."]],[216,-2465,3,2,"Multi Shot Spread",3,1,2,"",["Adds a <b>25%</b> chance to spawn an additional Regular Arrow with your <b>Flurry of Arrows</b> from the <b>Multi Shot</b> skill.","This additional Regular Arrow does not subtract from your ammunition."]],[582,-2367,3,2,"Multi Shot Trigger",3,1,2,"",["Shooting Special Arrows now triggers a <b>Flurry of Arrows</b> from the <b>Multi Shot</b> skill.","Special Arrows fired this way will subtract from your ammunition."]],[105,385,0,2,"Opportunity",1,3,-1,"",["Increases the damage multiplier of <b>Merciless Attacks</b> by <b>120%</b>."]],[1295,-1667,3,2,"Dagger Mastery",1,3,3,"",["Damage with Daggers is increased by <b>15%</b>."]],[1137,-1613,3,2,"Slice And Dice",3,1,3,"",["After a Critical Strike with a Dagger, the base damage of your next Bow attack within 10 seconds is increased by <b>50%</b>."]],[256,951,2,2,"Eternal Spark",1,3,7,"",["Dealing damage with Wand projectiles has a <b>45%</b> chance to restore <b>1</b> durability to that weapon."]],[-1023,-595,1,2,"Finesse",1,3,0,"",["Dealing damage with One-Handed Swords, One-Handed Axes, One-Handed Clubs or Daggers has a <b>45%</b> chance to restore <b>1</b> durability to that weapon."]],[-1187,0,1,2,"Steadfast",2,3,11,"",["Defeating an enemy with a Melee weapon restores <b>3</b> durability to that weapon."]],[1747,-1600,3,2,"Venomous Blades",2,1,3,"",["Increases the chance to poison enemies to <b>30%</b> when using Daggers with the <b>Venomous Blades</b> perk."]],[1656,-1308,3,2,"Venom Mastery",3,1,3,"",["Increases the damage dealt with the <b>Venomous Blades</b> Dagger perk by <b>100%</b>."]],[1076,-871,3,2,"Quick Reflex Block",3,1,3,"",["Briefly increases your Block value when blocking with Daggers, ensuring a near-miss parry reduces Stamina minimally."]],[1212,1015,2,3,"Life Essences",1,3,6,"skills/1980671994.webp",["Increases your maximum Health by <b>9</b> times your Intelligence attribute."]],[379,100,0,3,"Giant Slayer Hook",3,1,-1,"skills/29426941.webp",["Use your <b>Grappling Hook</b> to pull yourself towards large enemies during combat.","The cost of this skill scales with enemy level. The higher the enemy level, the more it costs.","<b>Base Cost:</b> 30 Stamina"]],[134,135,0,3,"Grounding Hook",4,1,-1,"skills/3206142296.webp",["Use your <b>Grappling Hook</b> to pull <b>flying</b> enemies towards you during combat.","The cost of this skill scales with enemy level. The higher the enemy level, the more it costs.","<b>Base Cost:</b> 30 Stamina"]],[-1798,-817,1,3,"Upwards Slash Attack",3,1,11,"skills/3170981638.webp",["When equipped with a Melee weapon, launch a powerful upward strike during the ascent of your jump.","Use this skill to rapidly close the distance on <b>flying</b> enemies.","<b>Cost:</b> 25 Stamina"]],[-1792,316,1,2,"Titan Edge",1,3,10,"",["Damage with Two-Handed Greatswords is increased by <b>15%</b>."]],[-2140,374,1,3,"Whirlwind Crescendo",3,1,10,"skills/3433516950.webp",["When equipped with a Two-Handed weapon, trigger a whirl attack at the end of an attack chain.","<b>Cost:</b> 75 Stamina"]],[-699,-1212,3,3,"Kick",3,1,1,"skills/3830325263.webp",["When equipped with a Melee weapon, you can perform a Kick by attacking while blocking.","Kicking deals little damage, but hits the target with massive force and pushes them back, filling their Stun Bar.","Stun Bar increase scales with Dexterity.","Stun time depends on the enemy's size.","<b>Overpower</b>","Attacking blocking enemies or parrying their attacks fills their Stun Bar until they become <b>overpowered</b>.","<b>Overpowered</b> enemies are open for Merciless Attacks."]],[1135,1616,2,2,"Shroud Resistance",1,3,6,"",["Increases your <b>Shroud Resistance</b> by <b>15%</b>, which reduces the amount of <b>Shroud</b> damage received."]],[1672,607,2,2,"Fire Resistance",1,3,5,"",["Increases your <b>Fire Resistance</b> by <b>15%</b>, which reduces the amount of <b>Fire</b> damage received."]],[1773,159,2,2,"Ice Resistance",1,3,5,"",["Increases your <b>Ice Resistance</b> by <b>15%</b>, which reduces the amount of <b>Ice</b> damage received."]],[2484,330,2,2,"Shock Resistance",1,3,5,"",["Increases your <b>Shock Resistance</b> by <b>15%</b>, which reduces the amount of <b>Shock</b> damage received."]],[-1520,-1811,3,2,"Last Meal",5,1,0,"",["Your Food buffs persist through death, but they last half as long."]],[1600,-1751,3,2,"Expose Weakness",4,1,3,"",["Critical Strikes with Daggers break the armor of enemies, applying a <b>debuff</b> which lets them take <b>25%</b> increased physical damage for <b>5</b> seconds."]],[1806,1530,2,2,"Righteous Fire",2,3,6,"",["Healing any target with a spell triggers a burst of fire that deals <b>60%</b> of the heal amount as <b>Fire</b> damage to nearby <b>Fell</b> enemies."]],[1525,1531,2,2,"Divine Surge",4,1,6,"",["Healing spells can perform Critical Strikes that scale with your Critical Strike damage."]],[1246,1779,2,2,"Shared Misery",2,3,6,"",["When you receive <b>Shroud</b> damage, all players within <b>15</b> meters receive <b>15%</b> increased <b>Shroud Resistance</b> for <b>30</b> seconds."]],[101,-379,0,2,"Fisherman's Resolve",1,3,-1,"",["Increases your Fishing Endurance by <b>15</b>.","Allows for extended battles with hooked fish."]],[-953,-257,1,2,"Wet Dog",3,1,11,"",["Weakens the effect of the <b>Wet</b> and <b>Soaked</b> debuffs.","Stamina and Stamina Regeneration is reduced by <b>20%</b> instead of <b>30%</b>.","<b>Wet</b>","Reduces Stamina and Stamina Regeneration by <b>30%</b> for <b>15</b> minutes. Warmth reduces the remaining duration.","<b>Soaked</b>","Reduces Stamina and Stamina Regeneration by <b>30%</b> for <b>30</b> seconds. Also reduces <b>Ice and Shock Resistances</b> by <b>30%</b> but increases <b>Fire Resistance</b> by <b>30%</b>.","<b>Soaked</b> can be applied to enemies.","<b>Soaked</b> duration can not be reduced by warmth, and transitions into the <b>Wet</b> debuff once it ends."]],[-1237,-332,1,2,"Soaked Dog",3,1,11,"",["Weakens the effect of the <b>Wet</b> and <b>Soaked</b> debuffs.","Stamina and Stamina Regeneration is reduced by <b>10%</b> instead of <b>20%</b>.","<b>Wet</b>","Reduces Stamina and Stamina Regeneration by <b>30%</b> for <b>15</b> minutes. Warmth reduces the remaining duration.","<b>Soaked</b>","Reduces Stamina and Stamina Regeneration by <b>30%</b> for <b>30</b> seconds. Also reduces <b>Ice and Shock Resistances</b> by <b>30%</b> but increases <b>Fire Resistance</b> by <b>30%</b>.","<b>Soaked</b> can be applied to enemies.","<b>Soaked</b> duration can not be reduced by warmth, and transitions into the <b>Wet</b> debuff once it ends."]],[-1942,-1352,3,3,"Strategic Maneuver",1,1,0,"skills/3147036259.webp",["Replaces the Dodge Roll ability with a sideways Dodge Roll while an enemy target is locked.","Use it to roll around your enemies, making it easier to flank them or deliver backstabs.","Blink replaces the sideways Dodge Roll of the Strategic Maneuver skill.","<b>Cost:</b> 20 Stamina"]],[706,-1214,3,2,"Cutthroat",1,3,3,"",["Sneak Attack Damage is increased by <b>300%</b>."]],[-1113,-1116,3,2,"Rebound",2,3,0,"",["Base Stamina Regeneration is increased by <b>30%</b>."]],[1028,593,2,2,"Bone to Ash",1,3,6,"",["Damage against Hollow is increased by <b>15%</b>."]],[-641,-1762,3,2,"Cull the Herd",1,3,1,"",["Damage against Wildlife is increased by <b>15%</b>."]],[-327,-1851,3,2,"Primal Force",1,3,1,"",["Damage against Vukah is increased by <b>15%</b>."]],[1334,-358,2,2,"Sleight of Hand",1,3,4,"",["Unarmed damage is increased by <b>90%</b>."]],[1882,-1084,3,2,"Vile Concoction",1,3,4,"",["Throwable damage is increased by <b>36%</b>."]],[954,-257,2,2,"Mana Currents",1,3,4,"",["Base Mana Regeneration is increased by <b>15</b>."]],[938,-1625,3,2,"Fatal Precision",1,3,3,"",["Critical Strike chance is increased by <b>3%</b>.","Critical Strike damage is increased by <b>15%</b>."]],[1906,-512,2,2,"Spellslinger",1,3,4,"",["Staff damage is increased by <b>15%</b>."]],[-460,1715,1,1,"Constitution",1,1,8,"",["Increases your Constitution attribute by 1. Increases Health by … per Attribute Point."]],[-2287,614,1,1,"Strength",1,1,10,"",["Increases your Strength attribute by 1. Increases Melee damage by 5% per Attribute Point."]],[1258,1257,2,1,"Intelligence",1,1,6,"",["Increases your Intelligence attribute by 1. Increases Magic damage by 5% per Attribute Point."]],[1361,-238,2,1,"Spirit",1,1,4,"",["Increases your Spirit attribute by 1. Increases Mana by … per Attribute Point."]],[580,1678,2,2,"Wand Mastery",1,3,7,"",["Wand damage is increased by <b>15%</b>."]],[-1430,382,1,3,"Two-Handed Specialization",3,1,10,"skills/4264247508.webp",["Unlocks Special Abilities of Two-Handed Melee weapons.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[-1044,1042,1,3,"One-Handed Specialization",3,1,9,"skills/2903868533.webp",["Unlocks Special Abilities of One-Handed Melee weapons.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[546,1504,2,3,"Wand Specialization",3,1,7,"skills/1210493692.webp",["Unlocks Special Abilities of Wands.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[487,-1817,3,3,"Bow Specialization",3,1,2,"skills/1573526808.webp",["Unlocks Special Abilities of Bows.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[1297,-905,3,3,"Dagger Specialization",3,1,3,"skills/3055155591.webp",["Unlocks Special Abilities of Daggers.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[-191,49,0,3,"Pickaxe Specialization",2,1,-1,"skills/4195583476.webp",["Unlocks Special Abilities of Pickaxes.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[-51,-189,0,3,"Felling Axe Specialization",2,1,-1,"skills/2791798199.webp",["Unlocks Special Abilities of Felling Axes.","Press <b>[Action]</b> to unleash a powerful Special Ability after generating enough Focus.","<b>Focus</b>","Generate Focus by attacking. Focus can be built up with any weapon type and is used to trigger Special Abilities of weapons."]],[-2044,-549,1,3,"Athlete",1,3,11,"skills/4071143870.webp",["Increases your maximum Health by <b>9</b> times your Strength attribute."]],[-953,255,1,2,"Barbarian's Path",1,3,10,"",["Damage with Two-Handed Axes, Clubs and Hammers is increased by <b>15%</b>."]],[1249,-1249,3,3,"Veiled Vigor",1,3,3,"skills/1082068405.webp",["Increases your maximum Health by <b>9</b> times your Dexterity attribute."]],[-384,-101,0,2,"Prospector",1,3,-1,"",["Tools deal <b>30%</b> increased damage against metal.","This includes metal ore veins."]],[282,1566,2,3,"Wand Evasion Attack",4,1,7,"skills/2632701081.webp",["When equipped with a Wand, you can perform a Wand Evasion Attack by pressing <b>[Attack]</b> while evading.","It fires a magical disc that pierces enemies and deals <b>50%</b> additional weapon damage.","<b>Cost:</b> 50 Mana"]],[513,1911,2,3,"Aerial Wand Attack",3,1,7,"skills/2134094382.webp",["When equipped with a Wand, you can perform a special attack by holding <b>[Attack]</b> during a jump.","It fires a magical projectile that deals <b>50%</b> additional weapon damage in a small blast radius.","<b>Cost:</b> 25 Mana"]],[1526,408,2,2,"Totem Mastery",2,3,5,"",["Increases the maximum amount of summoned totems by <b>3</b>."]],[1359,787,2,2,"Advanced Necromancy",2,3,6,"",["Increases the maximum amount of summoned Hollow allies from spells by <b>3</b>."]],[410,-1528,3,2,"Puncture",2,3,2,"",["Ranged <b>Piercing</b> damage is increased by <b>30%</b>."]],[357,-1336,3,2,"Barrage",1,3,2,"",["Dealing damage with Bows has a <b>45%</b> chance to restore <b>1</b> durability to that weapon."]],[1457,-609,2,2,"Blast and Cast",3,1,4,"",["After a Critical Strike with a Wand, the base damage of your next Staff attack within 10 seconds is increased by <b>50%</b>."]],[-592,-1028,3,2,"Survival Instinct",1,3,1,"",["Defeating a Shroud infested enemy with a Bow or Dagger restores <b>9</b> seconds of <b>Time in the Shroud</b>.","<b>Time in the Shroud</b>","Should this time run out, the Shroud will consume you."]],[2,-2,0,3,"Airborne Architect",3,1,-1,"skills/1148578013.webp",["Turn into a spark inside the base to move freely through the air in first person while building. To toggle this mode, hold [Action]."]]],"l":[[1,45],[0,56],[5,59],[4,60],[64,65],[13,96],[2,21],[3,13],[90,23],[36,43],[45,37],[38,46],[11,91],[129,6],[131,132],[126,133],[127,134],[134,40],[128,135],[135,36],[129,136],[130,137],[139,76],[139,75],[60,63],[63,140],[140,66],[141,125],[21,16],[90,24],[96,90],[36,27],[38,149],[42,149],[40,152],[116,167],[172,30],[37,175],[148,176],[176,57],[123,177],[151,38],[76,77],[2,189],[189,190],[116,94],[94,195],[19,197],[176,199],[205,206],[3,102],[195,203],[167,202],[169,202],[17,172],[30,28],[117,196],[84,120],[66,85],[85,120],[67,86],[122,160],[160,119],[119,158],[122,70],[77,81],[163,124],[91,179],[179,190],[12,208],[4,11],[1,204],[128,87],[12,107],[148,209],[148,207],[142,207],[50,194],[149,145],[42,48],[51,175],[51,50],[151,42],[40,111],[152,47],[152,109],[109,148],[47,148],[56,51],[207,57],[176,97],[40,110],[54,55],[37,41],[37,53],[177,178],[106,113],[108,113],[36,107],[37,107],[12,74],[181,150],[27,147],[147,74],[200,180],[150,124],[150,200],[150,185],[185,186],[185,174],[200,174],[27,12],[27,187],[75,82],[82,161],[161,118],[118,138],[138,115],[115,154],[154,77],[138,173],[202,201],[19,20],[17,166],[166,117],[165,170],[197,20],[166,196],[112,198],[20,30],[28,171],[112,28],[31,171],[193,79],[192,86],[122,158],[119,70],[117,30],[86,79],[34,210],[151,211],[151,212],[201,98],[98,117],[124,214],[132,65],[65,61],[64,139],[116,220],[220,15],[193,219],[62,121],[89,105],[40,183],[88,73],[101,222],[100,168],[168,203],[8,229],[7,228],[65,93],[93,139],[159,223],[156,159],[125,225],[225,101],[187,227],[147,227],[108,226],[103,226],[85,160],[159,67],[158,67],[192,193],[205,183],[205,184],[191,142],[133,205],[105,230],[89,142],[96,144],[144,116],[16,143],[143,19],[143,17],[59,231],[231,156],[231,184],[63,69],[231,69],[147,232],[232,150],[9,233],[5,7],[0,8],[10,9],[8,10],[10,233],[233,7],[131,91],[106,49],[58,49],[49,123],[49,44],[44,54],[40,194],[51,39],[39,50],[84,161],[58,216],[103,216],[216,181],[50,146],[50,52],[50,151],[125,234],[234,81],[235,222],[235,99],[81,99],[34,237],[19,236],[17,236],[120,162],[140,155],[155,84],[150,68],[226,238],[41,108],[53,103],[226,49],[184,71],[205,71],[71,88],[71,105],[183,157],[157,88],[205,157],[156,153],[153,223],[153,192],[157,78],[78,191],[78,230],[33,217],[163,217],[35,217],[170,217],[217,26],[81,235],[101,235],[225,222],[234,99],[235,100],[144,188],[188,14],[14,169],[37,239],[158,62],[67,62],[62,79],[62,219],[121,193],[6,92],[40,241],[51,241],[63,72],[65,72],[85,83],[83,224],[84,83],[16,210],[96,210],[210,18],[11,95],[82,218],[218,77],[161,173],[173,154],[139,218],[95,179],[137,182],[182,61],[182,141],[182,104],[182,90],[104,125],[136,215],[43,215],[215,164],[215,221],[213,114],[221,22],[22,165],[215,25],[25,16],[165,114],[164,240],[240,29],[29,163],[217,80],[29,114],[163,33],[170,35],[33,80],[35,80],[87,242],[229,242],[228,242],[9,242],[92,242],[32,31]]};
  const SETS = [["3","Ragged Set","Any","Crafted by hand",21,21,"media/armor/ragged-shirt.webp","Common"],["4","Fur Set","Any","Crafted at the Blacksmith",40,20,"media/armor/fur-chest.webp","Common"],["5","Rising Fighter Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",70,34,"media/armor/rising-fighter-chest-crafted.webp","Common to Legendary"],["5","Scout Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",51,51,"media/armor/scout-chest-crafted.webp","Common to Legendary"],["5","Alchemist Apprentice Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",41,62,"media/armor/alchemist-apprentice-chest-crafted.webp","Common to Legendary"],["10","Adventurer Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",100,50,"media/armor/adventurer-chest-crafted.webp","Common to Legendary"],["10","Tank Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",113,63,"media/armor/tank-chestplate-crafted.webp","Common to Legendary"],["10","Warrior Set","Warrior","Drops from chests and bosses",100,50,"media/armor/warrior-chest.webp","Common to Legendary"],["10","Cutthroat Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",89,89,"media/armor/cutthroat-chest-crafted.webp","Common to Legendary"],["10","Marksman Set","Ranger","Drops from chests and bosses",74,74,"media/armor/marksman-vest.webp","Common to Legendary"],["10","Ranger Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",74,74,"media/armor/ranger-vest-crafted.webp","Common to Legendary"],["10","Healer Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",74,100,"media/armor/healer-tunic-crafted.webp","Common to Legendary"],["10","Mage Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",59,89,"media/armor/mage-chest-crafted.webp","Common to Legendary"],["10","Wizard Set","Mage","Drops from chests and bosses",78,95,"media/armor/wizard-chest.webp","Common to Legendary"],["10","Guard of the North Set","Multi-class","Found near The Pike",66,66,"media/armor/guard-of-the-north-chestplate.webp","Rare"],["15","Blackguard Set","Warrior","Crafted at the Blacksmith",117,59,"media/armor/blackguard-chest.webp","Rare"],["15","Guardian Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",148,84,"media/armor/guardian-chestplate-crafted.webp","Common to Legendary"],["15","Knight Set","Warrior","Drops from chests and bosses",130,64,"media/armor/knight-chestplate.webp","Common to Legendary"],["15","Mercenary Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",130,64,"media/armor/mercenary-chest-crafted.webp","Common to Legendary"],["15","Fowler Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",117,117,"media/armor/fowler-chest-crafted.webp","Common to Legendary"],["15","Hunter Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",97,97,"media/armor/hunter-garb.webp","Common to Legendary"],["15","Plaguebringer Set","Ranger","Crafted at the Hunter",89,89,"media/armor/plaguebringer-chest.webp","Rare"],["15","Sharpshooter Set","Ranger","Drops from chests and bosses",97,97,"media/armor/sharpshooter-vest.webp","Common to Legendary"],["15","Herbalist Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",97,130,"media/armor/herbalist-tunic-crafted.webp","Common to Legendary"],["15","Magician Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",76,117,"media/armor/magician-chest-crafted.webp","Common to Legendary"],["15","Mystic Set","Mage","Drops from chests and bosses",104,122,"media/armor/mystic-chest.webp","Common to Legendary"],["15","Omen Set","Mage","Crafted at the Alchemist",71,107,"media/armor/omen-chest.webp","Rare"],["20","Gloom Monarch Set","Warrior","Drops from chests and bosses",160,80,"media/armor/gloom-monarch-chestplate.webp","Common to Legendary"],["20","Rogue Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",160,80,"media/armor/rogue-chestplate-crafted.webp","Common to Legendary"],["20","Soldier Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",160,80,"media/armor/soldier-chestplate-crafted.webp","Common to Legendary"],["20","Warden Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",184,104,"media/armor/warden-chestplate-crafted.webp","Common to Legendary"],["20","Assassin Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",144,144,"media/armor/assassin-chest-crafted.webp","Common to Legendary"],["20","Deadeye Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",120,120,"media/armor/deadeye-vest-crafted.webp","Common to Legendary"],["20","Deerstalker Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",120,120,"media/armor/deerstalker-chest-crafted.webp","Common to Legendary"],["20","Hawk Set","Ranger","Drops from chests and bosses",144,144,"media/armor/hawk-chest.webp","Common to Legendary"],["20","Archmage Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",96,144,"media/armor/archmage-chest-crafted.webp","Common to Legendary"],["20","Sage Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",120,160,"media/armor/sage-tunic-crafted.webp","Common to Legendary"],["20","Spellbreaker Set","Mage","Drops from chests and bosses",128,152,"media/armor/spellbreaker-chest.webp","Common to Legendary"],["20","Warlock Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",128,152,"media/armor/warlock-shirt-crafted.webp","Common to Legendary"],["20","Elite Hollow Set","Multi-class","Drops in the Hollow Halls",120,120,"media/armor/elite-hollow-chestplate.webp","Rare to Legendary"],["30","Brazen Bull Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",251,141,"media/armor/brazen-bull-chest-crafted.webp","Common to Legendary"],["30","Mountain's Shadow Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",220,110,"","Common to Legendary"],["30","Wolf's Fang Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",220,110,"","Common to Legendary"],["30","Alpine Antler Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",164,164,"media/armor/alpine-antler-chest-crafted.webp","Common to Legendary"],["30","Frostbite Slasher Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",197,197,"media/armor/frostbite-slasher-chest-crafted.webp","Common to Legendary"],["30","Trailblazer Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",164,164,"media/armor/trailblazer-chest-crafted.webp","Common to Legendary"],["30","Hailcaster Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",175,208,"media/armor/hailcaster-chest-crafted.webp","Common to Legendary"],["30","Pearlfrost Mentor Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",164,220,"media/armor/pearlfrost-mentor-chest-crafted.webp","Common to Legendary"],["30","Thaumaturge Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",131,197,"media/armor/thaumaturge-chest-crafted.webp","Common to Legendary"],["30 to 55","Radiant Paladin Set","Warrior","Drops from chests and bosses",370,184,"media/armor/radiant-paladin-chestplate.webp","Common to Legendary"],["30 to 55","Eagle Eye Set","Ranger","Drops from chests and bosses",277,277,"media/armor/eagle-eye-chest.webp","Common to Legendary"],["30 to 55","Elder Set","Mage","Drops from chests and bosses",220,333,"media/armor/elder-chest.webp","Common to Legendary"],["40","Golden Bulwark Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",322,182,"media/armor/golden-bulwark-chestplate-crafted.webp","Common to Legendary"],["40","Sunpiercer Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",280,140,"media/armor/sunpiercer-chestplate-crafted.webp","Common to Legendary"],["40","Bloodfeather Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",252,252,"media/armor/bloodfeather-chest-crafted.webp","Common to Legendary"],["40","Quetzal Hunter Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",210,210,"media/armor/quetzal-hunter-chest-crafted.webp","Common to Legendary"],["40","Skull Stalker Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",210,210,"media/armor/skull-stalker-chest-crafted.webp","Common to Legendary"],["40","Tidecaller Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",168,252,"media/armor/tidecaller-tunic-crafted.webp","Common to Legendary"],["40","Waveborne Ritualist Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",210,280,"media/armor/waveborne-ritualist-tunic-crafted.webp","Common to Legendary"],["40","Venerable Hollow Set","Multi-class","Drops in the Hollow Halls",210,210,"media/armor/venerable-hollow-chestplate.webp","Rare to Legendary"],["45","Crestflame Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",696,387,"media/armor/crestflame-chest-crafted.webp","Common to Legendary"],["45","Emberguard Set","Warrior","Crafted at the Blacksmith; Drops from chests and bosses",619,310,"media/armor/emberguard-chestplate-crafted.webp","Common to Legendary"],["45","Ashwind Strider Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",464,464,"media/armor/ashwind-strider-chest-crafted.webp","Common to Legendary"],["45","Sky Specter Set","Ranger","Crafted at the Hunter; Drops from chests and bosses",278,278,"media/armor/sky-specter-chest-crafted.webp","Common to Legendary"],["45","Flame Arcanist Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",310,619,"media/armor/flame-arcanist-chest-crafted.webp","Common to Legendary"],["45","Lifelock Set","Mage","Crafted at the Alchemist; Drops from chests and bosses",263,388,"media/armor/lifelock-chest-crafted.webp","Common to Legendary"],["45","Vorgoth's Soulbound Set","Any","Crafted at the Ancient Researcher",324,325,"","Legendary"]];
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = t => t * t * (3 - 2 * t);
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const easeBack = t => { const c = 1.4; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const isMobile = () => innerWidth <= 760;
  const fmt = n => n.toLocaleString('en-US');
  function progressOf(el) {
    const r = el.getBoundingClientRect();
    const total = r.height - innerHeight;
    return total <= 0 ? 0 : clamp(-r.top / total, 0, 1);
  }
  const vis = el => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };

  /* ---------- reveal ---------- */
  const groups = new Map();
  $$('[data-rv]').forEach(el => {
    const p = el.parentElement; const i = groups.get(p) || 0; groups.set(p, i + 1);
    el.style.setProperty('--d', Math.min(i, 4) * 70 + 'ms');
  });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-rv]').forEach(el => io.observe(el));
  let pendingRv = $$('[data-rv]');
  function sweepReveals() {
    if (!pendingRv.length) return;
    const lim = innerHeight * 0.94;
    pendingRv = pendingRv.filter(el => {
      if (el.classList.contains('in')) return false;
      if (el.getBoundingClientRect().top < lim) { el.classList.add('in'); io.unobserve(el); return false; }
      return true;
    });
  }

  /* ---------- canvases ---------- */
  function makeFx(canvas) {
    const ctx = canvas.getContext('2d'); const st = { w: 0, h: 0 };
    const resize = () => { const d = Math.min(devicePixelRatio || 1, 1.5); st.w = canvas.clientWidth; st.h = canvas.clientHeight; canvas.width = st.w * d; canvas.height = st.h * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    resize(); return { ctx, st, resize };
  }

  /* ---------- COVER ---------- */
  const cover = $('.cover'), coverArt = $('#coverArt');
  const coverFx = makeFx($('#coverFx'));
  const embers = [];
  function spawnEmber(fill) {
    const { w, h } = coverFx.st;
    embers.push({ x: Math.random() * w, y: fill ? Math.random() * h : h + 10, vx: (Math.random() - 0.3) * 0.35, vy: -(0.25 + Math.random() * 0.9), r: 0.6 + Math.random() * 2.1, life: 0, max: 380 + Math.random() * 420, hue: 18 + Math.random() * 26, ph: Math.random() * 6.28 });
  }
  for (let i = 0; i < 60; i++) spawnEmber(true);
  function renderCover() {
    const r = cover.getBoundingClientRect();
    const t = clamp(-r.top / r.height, 0, 1);
    if (!RM) coverArt.style.transform = `translate3d(0,${t * 18}%,0) scale(${1 + t * 0.08})`;
    const { ctx, st } = coverFx;
    ctx.clearRect(0, 0, st.w, st.h);
    if (RM) return;
    if (embers.length < (isMobile() ? 40 : 80)) spawnEmber(false);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = embers.length - 1; i >= 0; i--) {
      const e = embers[i]; e.life++; e.ph += 0.05; e.x += e.vx + Math.sin(e.ph) * 0.25; e.y += e.vy;
      const a = Math.sin(Math.PI * clamp(e.life / e.max, 0, 1)) * (0.55 + 0.45 * Math.sin(e.ph * 3));
      if (e.life > e.max || e.y < -20) { embers.splice(i, 1); continue; }
      ctx.fillStyle = `hsla(${e.hue},100%,62%,${a * 0.85})`; ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, 6.283); ctx.fill();
      ctx.fillStyle = `hsla(${e.hue},100%,55%,${a * 0.12})`; ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 4, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
  }

  /* ---------- BOSS PARADE ---------- */
  const REG = {
    'springlands': ['長春平原', 'Springlands'], 'revelwood': ['喧囂森林', 'Revelwood'], 'nomad-highlands': ['遊牧高地', 'Nomad Highlands'],
    'kindlewastes': ['星火荒原', 'Kindlewastes'], 'albaneve-summits': ['阿爾班伊維高峰', 'Albaneve Summits'], 'veilwater-basin': ['面紗水盆地', 'Veilwater Basin'],
    'cinders-cradle': ['餘燼搖籃', "Cinder's Cradle"], 'hollow-halls': ['Hollow Halls', '霧幕下的空洞地城'],
  };
  const parade = $('#bosses');
  const bosses = $$('#bossList .boss');
  const bgs = $$('.pv-bg');
  const intro = $('#pvIntro'), regionEl = $('#pvRegion'), pvBar = $('#pvBar');
  const INTRO = 1.4, STEP = 0.66;
  const NB = bosses.length;
  function sizeParade() { if (!RM) parade.style.height = `calc(100svh * ${(INTRO + NB * STEP + 1.3).toFixed(2)})`; }
  const fog = makeFx($('#fogFx'));
  const blobs = Array.from({ length: 14 }, () => ({ x: Math.random(), y: Math.random(), r: 0.25 + Math.random() * 0.35, vx: (Math.random() - 0.5) * 0.0006, vy: -0.0002 - Math.random() * 0.0005, a: 0.25 + Math.random() * 0.35 }));
  let curBoss = -2, curReg = '';
  function setRegion(reg) {
    if (reg === curReg) return;
    curReg = reg;
    bgs.forEach(b => b.classList.toggle('on', b.dataset.reg === reg));
    if (REG[reg]) { regionEl.querySelector('b').textContent = REG[reg][0]; regionEl.querySelector('span').textContent = REG[reg][1]; regionEl.classList.add('on'); }
    else regionEl.classList.remove('on');
  }
  function renderParade() {
    const total = parade.offsetHeight - innerHeight;
    const y = clamp(-parade.getBoundingClientRect().top, 0, total);
    const u = y / innerHeight; // screens scrolled inside parade
    // intro
    const ia = u < INTRO ? (u < 0.15 ? 1 : 1 - smooth(clamp((u - 0.75) / (INTRO - 0.75), 0, 1))) : 0;
    intro.style.opacity = ia.toFixed(3);
    intro.style.transform = `translateY(${(1 - ia) * -30}px) scale(${1 + (1 - ia) * 0.04})`;
    const bu = (u - INTRO) / STEP; // boss units
    const idx = bu < 0 ? -1 : Math.min(NB - 1, Math.floor(bu));
    setRegion(idx < 0 ? 'shroud' : bosses[idx].dataset.reg);
    bosses.forEach((b, i) => {
      const t = bu - i; // 0..1 while active
      if (t < -0.05 || t > 1.05) { if (b.classList.contains('on')) { b.classList.remove('on'); b.style.opacity = 0; } return; }
      b.classList.add('on');
      const last = i === NB - 1;
      const enter = smooth(clamp(t / 0.28, 0, 1));
      const leave = last ? 0 : smooth(clamp((t - 0.78) / 0.22, 0, 1));
      const dir = b.classList.contains('b-l') ? -1 : 1;
      const img = b.firstElementChild, txt = b.lastElementChild;
      const mob = isMobile();
      img.style.transform = `translate3d(${(1 - enter) * dir * (mob ? 60 : 160) + leave * dir * -60}px,${(1 - enter) * 30}px,0) scale(${0.92 + 0.08 * enter})`;
      txt.style.transform = `translate3d(${(1 - enter) * -dir * (mob ? 40 : 90) + leave * -dir * 40}px,0,0)`;
      b.style.opacity = (enter * (1 - leave)).toFixed(3);
    });
    curBoss = idx;
    pvBar.style.width = (clamp(bu / NB, 0, 1) * 100) + '%';
    // background drift
    const on = bgs.find(b => b.classList.contains('on'));
    if (on && !RM) on.style.transform = `scale(${1.02 + 0.03 * Math.sin(u * 0.6)}) translateX(${Math.sin(u * 0.9) * 1.2}%)`;
    // fog
    const { ctx, st } = fog;
    ctx.clearRect(0, 0, st.w, st.h);
    if (RM) return;
    const strength = idx < 0 ? 1 : 0.35;
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach(o => {
      o.x += o.vx; o.y += o.vy; if (o.y < -0.4) { o.y = 1.3; o.x = Math.random(); }
      const R = o.r * Math.max(st.w, st.h);
      ctx.fillStyle = `rgba(150,22,40,${o.a * 0.22 * strength})`;
      ctx.beginPath(); ctx.arc(o.x * st.w, o.y * st.h, R, 0, 6.283); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';
  }
  // starting background for the transition
  (() => {
    const img = document.createElement('img');
    img.className = 'pv-bg'; img.dataset.reg = 'shroud'; img.src = 'media/bg/shroud.jpg'; img.alt = ''; img.setAttribute('aria-hidden', 'true');
    $('.pv-bgs').prepend(img); bgs.unshift(img);
  })();
  $('#fogFx').style.filter = 'blur(40px)';

  /* ---------- SKILL TREE (1.0 game data) ---------- */
  const ARCH = [
    ['生存者', 'Survivor', 'R', 225], ['馴獸師', 'Beastmaster', 'R', 255], ['遊俠', 'Ranger', 'R', 285], ['刺客', 'Assassin', 'R', 315],
    ['詭術師', 'Trickster', 'M', 345], ['巫師', 'Wizard', 'M', 15], ['治療者', 'Healer', 'M', 45], ['戰鬥法師', 'Battlemage', 'M', 75],
    ['守護者', 'Guardian', 'W', 105], ['戰士', 'Warrior', 'W', 135], ['野蠻人', 'Barbarian', 'W', 165], ['運動員', 'Athlete', 'W', 195],
  ];
  const CLS = ['N', 'W', 'M', 'R'];
  const COL = { N: '#ffb100', W: '#d4473f', M: '#4f95e0', R: '#74c23a' };
  const TYPE = ['起點火花', '屬性節點', '被動技能', '主動技能'];
  const MAXPTS = 212;
  const nodes = TREE.n.map(([x, y, c, t, name, cost, lv, arch, icon, desc], i) => ({ i, x, y, c: CLS[c], t, name, cost, lv, arch, icon, desc, level: 0, adj: [] }));
  TREE.l.forEach(([a, b]) => { nodes[a].adj.push(b); nodes[b].adj.push(a); });
  const svg = $('#tree');
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); parent && parent.appendChild(n); return n; };
  const gL = mk('g', {}, svg), gN = mk('g', {}, svg), gA = mk('g', {}, svg);
  const linkEls = TREE.l.map(([a, b]) => {
    const A = nodes[a], B = nodes[b];
    const c = A.c !== 'N' ? A.c : B.c;
    const l = mk('line', { x1: A.x, y1: A.y, x2: B.x, y2: B.y, class: 'lk' }, gL);
    l.style.setProperty('--c', COL[c]); return { l, a, b };
  });
  const R = [70, 40, 58, 92];
  nodes.forEach(n => {
    const g = mk('g', { class: 'nd', tabindex: '0', role: 'button', 'aria-label': `${n.name}，${TYPE[n.t]}` }, gN);
    g.style.setProperty('--c', COL[n.c]);
    mk('circle', { cx: n.x, cy: n.y, r: R[n.t], class: 'b' }, g);
    if (n.icon) mk('image', { href: 'media/' + n.icon, x: n.x - 70, y: n.y - 70, width: 140, height: 140 }, g);
    n.el = g;
    g.addEventListener('click', () => clickNode(n));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); clickNode(n); } });
    g.addEventListener('mouseenter', () => showNode(n));
    g.addEventListener('focus', () => showNode(n));
  });
  const archBtns = $('#archBtns');
  ARCH.forEach(([zh, en, c, ang], k) => {
    const a = ang * Math.PI / 180, r = 2650;
    const t = mk('text', { x: Math.cos(a) * r, y: Math.sin(a) * r + 50, 'text-anchor': 'middle', class: 'al' }, gA);
    t.style.setProperty('--c', COL[c]); t.textContent = zh;
    t.addEventListener('click', () => focusArch(k));
    const b = document.createElement('button');
    b.type = 'button'; b.textContent = zh; b.title = en; b.style.setProperty('--c', COL[c]); b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => focusArch(b.getAttribute('aria-pressed') === 'true' ? -1 : k));
    archBtns.appendChild(b);
  });
  let vb = [-2900, -2900, 5800, 5800], vbAnim = null;
  function animateVB(to) {
    if (RM) { vb = to; svg.setAttribute('viewBox', to.join(' ')); return; }
    const from = vb.slice(), t0 = performance.now();
    cancelAnimationFrame(vbAnim);
    const step = now => {
      const t = easeOut(clamp((now - t0) / 650, 0, 1));
      vb = from.map((v, i) => lerp(v, to[i], t));
      svg.setAttribute('viewBox', vb.map(v => v.toFixed(1)).join(' '));
      if (t < 1) vbAnim = requestAnimationFrame(step);
    };
    vbAnim = requestAnimationFrame(step);
  }
  function focusArch(k) {
    [...archBtns.children].forEach((b, j) => b.setAttribute('aria-pressed', j === k));
    nodes.forEach(n => n.el.classList.toggle('dim', k >= 0 && n.arch !== k && n.t !== 0));
    if (k < 0) { animateVB([-2900, -2900, 5800, 5800]); return; }
    const a = ARCH[k][3] * Math.PI / 180, cx = Math.cos(a) * 1650, cy = Math.sin(a) * 1650, s = 2900;
    animateVB([cx - s / 2, cy - s / 2, s, s]);
    const sig = nodes.filter(n => n.arch === k && n.t === 3).sort((p, q) => Math.hypot(q.x, q.y) - Math.hypot(p.x, p.y))[0];
    if (sig) showNode(sig, true);
  }
  $('#treeAll').addEventListener('click', () => focusArch(-1));
  const learned = () => nodes.filter(n => n.level > 0);
  const points = () => nodes.reduce((s, n) => s + n.level * n.cost, 0);
  const available = n => n.t === 0 || n.adj.some(j => nodes[j].level > 0);
  function prune() {
    // drop learned nodes that are no longer connected to a learned start spark
    const seen = new Set(); const q = nodes.filter(n => n.t === 0 && n.level > 0).map(n => n.i);
    q.forEach(i => seen.add(i));
    while (q.length) { const i = q.shift(); nodes[i].adj.forEach(j => { if (nodes[j].level > 0 && !seen.has(j)) { seen.add(j); q.push(j); } }); }
    nodes.forEach(n => { if (n.level > 0 && !seen.has(n.i)) n.level = 0; });
  }
  let selNode = null;
  function clickNode(n) {
    showNode(n, true);
    if (!available(n) && n.level === 0) { n.el.animate && !RM && n.el.animate([{ opacity: 1 }, { opacity: 0.3 }, { opacity: 1 }], { duration: 300 }); flashMsg('要先點亮相鄰的節點'); return; }
    if (n.level < n.lv) {
      if (points() + n.cost > MAXPTS) { flashMsg('已經用滿 212 點'); return; }
      n.level++;
    } else { n.level = 0; prune(); }
    syncTree(); showNode(n, true);
  }
  let msgT = 0;
  function flashMsg(m) { const c = $('#ncCost'); c.textContent = m; c.style.color = 'var(--flame-hi)'; clearTimeout(msgT); msgT = setTimeout(() => { c.style.color = ''; showNode(selNode, true); }, 1400); }
  function syncTree() {
    nodes.forEach(n => {
      n.el.classList.toggle('on', n.level > 0);
      n.el.classList.toggle('av', n.level === 0 && available(n));
      n.el.setAttribute('aria-pressed', n.level > 0);
      let t = n.el.querySelector('.lvl');
      if (n.lv > 1 && n.level > 0) {
        if (!t) { t = mk('text', { x: n.x + R[n.t] * 0.8, y: n.y - R[n.t] * 0.8, class: 'lvl' }, n.el); }
        t.textContent = n.level;
      } else if (t) t.remove();
    });
    linkEls.forEach(({ l, a, b }) => l.classList.toggle('on', nodes[a].level > 0 && nodes[b].level > 0));
    const by = { W: 0, M: 0, R: 0 }, per = {};
    nodes.forEach(n => { if (n.level > 0) { if (by[n.c] !== undefined) by[n.c] += n.level * n.cost; if (n.arch >= 0) per[n.arch] = (per[n.arch] || 0) + n.level * n.cost; } });
    const P = points();
    $('#buildPts').textContent = `${P} / ${MAXPTS} 點`;
    ['W', 'M', 'R'].forEach(c => { $('#m' + c).style.width = Math.min(100, by[c] / 80 * 100) + '%'; });
    const top = Object.entries(per).sort((a, b) => b[1] - a[1]).map(([k]) => ARCH[k][0]);
    $('#buildName').textContent = !top.length ? '從中央的火花開始點。' : top.length === 1 ? `你的流派：純${top[0]}` : `你的流派：${top[0]} × ${top[1]}${top.length > 2 ? `，再帶點${top[2]}` : ''}`;
  }
  function showNode(n, sel) {
    if (!n) return;
    if (sel) { if (selNode) selNode.el.classList.remove('sel'); selNode = n; n.el.classList.add('sel'); }
    const arch = n.arch >= 0 ? `・${ARCH[n.arch][0]} ${ARCH[n.arch][1]}` : (n.c === 'N' ? '・中央' : '');
    $('#ncType').textContent = TYPE[n.t] + arch;
    $('#ncName').textContent = n.name;
    $('#ncDesc').innerHTML = n.desc.map(d => `<p>${d}</p>`).join('');
    $('#ncCost').textContent = `每級 ${n.cost} 點${n.lv > 1 ? `，最多 ${n.lv} 級` : ''}${n.level ? `・目前 ${n.level} 級` : ''}`;
  }
  $('#buildReset').addEventListener('click', () => { nodes.forEach(n => n.level = 0); syncTree(); });
  syncTree();
  showNode(nodes.find(n => n.name === 'Airborne Architect') || nodes[0], true);

  /* ---------- LOOT ---------- */
  const loot = $('#loot'), frame = $('#chestFrame'), openImg = $('#chestOpen');
  const keyGlow = $('#keyGlow'), seam = $('#seam'), flash = $('#flash');
  const lootA = $('#lootA'), lootB = $('#lootB'), lootNote = $('#lootNote');
  const cards = $$('#lootCards .lc');
  const lootFx = makeFx($('#lootFx'));
  const sparks = [];
  function chestGeom() {
    const W = innerWidth, H = innerHeight, mob = isMobile();
    const fw = mob ? W * 2.3 : Math.max(W, H * 1.7872), fh = fw / 1.7872;
    const top = mob ? H * 0.46 : H / 2;
    return { W, H, fw, fh, cx: (W - fw) / 2 + fw * 0.486, cy: top - fh / 2 + fh * 0.6 };
  }
  function renderLoot() {
    const p = progressOf(loot), g = chestGeom();
    const push = p < 0.49 ? 1 + 0.14 * smooth(clamp(p / 0.46, 0, 1)) : 1.14 - 0.1 * smooth(clamp((p - 0.49) / 0.2, 0, 1));
    let sx = 0, sy = 0;
    if (p > 0.3 && p < 0.49) { const amp = 6 * smooth((p - 0.3) / 0.19); const tt = performance.now() / 38; sx = Math.sin(tt * 1.7) * amp; sy = Math.cos(tt * 2.3) * amp * 0.6; }
    frame.style.transform = `translate(calc(-50% + ${sx}px), calc(-50% + ${sy}px)) scale(${push})`;
    keyGlow.style.setProperty('--k', p < 0.49 ? (0.3 + 1.4 * smooth(clamp(p / 0.45, 0, 1))).toFixed(3) : '0');
    seam.style.setProperty('--s', p < 0.49 ? smooth(clamp((p - 0.3) / 0.17, 0, 1)).toFixed(3) : '0');
    flash.style.opacity = clamp(1 - Math.abs(p - 0.49) / 0.035, 0, 1).toFixed(3);
    openImg.style.opacity = p >= 0.49 ? 1 : 0;
    lootA.style.opacity = (1 - smooth(clamp((p - 0.22) / 0.1, 0, 1))).toFixed(3);
    const bIn = smooth(clamp((p - 0.6) / 0.1, 0, 1));
    lootB.style.opacity = bIn.toFixed(3); lootB.style.transform = `translateY(${(1 - bIn) * 20}px)`;
    lootNote.style.opacity = p > 0.72 ? 1 : 0;
    const mob = isMobile();
    const cw = mob ? 108 : 200, gap = mob ? 10 : 28;
    const rowW = cards.length * cw + (cards.length - 1) * gap;
    cards.forEach((c, i) => {
      const q = clamp((p - 0.52 - i * 0.03) / 0.12, 0, 1);
      const tx = g.W / 2 - rowW / 2 + i * (cw + gap);
      const ty = g.H - (mob ? 250 : 330);
      const x = lerp(g.cx - cw / 2, tx, easeOut(q));
      const y = lerp(g.cy - 90, ty, easeBack(q)) - Math.sin(Math.PI * q) * (mob ? 120 : 200);
      c.style.opacity = q > 0 ? Math.min(1, q * 3) : 0;
      c.style.transform = `translate3d(${x}px,${y}px,0) rotate(${(1 - q) * (i % 2 ? 22 : -22)}deg) scale(${0.4 + 0.6 * easeOut(q)})`;
      const n = c.querySelector('.lc-n'); const v = Math.round(+n.dataset.n * easeOut(clamp((q - 0.4) / 0.6, 0, 1)));
      n.textContent = fmt(v);
    });
    return { p, g };
  }
  function drawLootFx(state, visible) {
    const { ctx, st } = lootFx; ctx.clearRect(0, 0, st.w, st.h);
    if (!visible || RM) return;
    const { p, g } = state; const open = p >= 0.49;
    const rate = open ? (p < 0.7 ? 6 : 2) : (p > 0.3 ? 1 : 0.3);
    for (let r = 0; r < rate; r++) if (Math.random() < Math.min(1, rate)) sparks.push({ x: g.cx + (Math.random() - 0.5) * g.fw * (open ? 0.12 : 0.2), y: g.cy - (open ? g.fh * 0.06 : -g.fh * 0.02), vx: (Math.random() - 0.5) * (open ? 2.2 : 0.4), vy: -(open ? 1.5 + Math.random() * 4 : 0.2 + Math.random() * 0.5), life: 0, max: 60 + Math.random() * 90, r: 0.8 + Math.random() * 2.2, gold: open });
    ctx.globalCompositeOperation = 'lighter';
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i]; s.life++; s.x += s.vx; s.y += s.vy; s.vy *= 0.992; s.vx *= 0.99;
      if (s.life > s.max) { sparks.splice(i, 1); continue; }
      const a = 1 - s.life / s.max;
      ctx.fillStyle = s.gold ? `rgba(255,${190 + Math.random() * 50 | 0},110,${a})` : `rgba(255,200,140,${a * 0.45})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    if (sparks.length > 600) sparks.splice(0, sparks.length - 600);
  }
  if (RM) cards.forEach(c => { const n = c.querySelector('.lc-n'); n.textContent = fmt(+n.dataset.n); });

  /* ---------- GEAR ladder (real armor sets) ---------- */
  const HOW = [
    [/Crafted at the Blacksmith/, '鐵匠製作'], [/Crafted at the Hunter/, '獵人製作'], [/Crafted at the Alchemist/, '煉金術士製作'],
    [/Crafted at the Ancient Researcher/, '遠古研究員製作'], [/Crafted by hand/, '徒手製作'], [/Drops from chests and bosses/, '寶箱與 BOSS 掉落'],
    [/Drops in the Hollow Halls/, 'Hollow Halls 掉落'], [/Found near The Pike/, 'The Pike 附近取得'],
  ];
  const howZh = s => s.split(';').map(x => { x = x.trim(); const m = HOW.find(([re]) => re.test(x)); return m ? m[1] : x; }).join('、');
  const NOTE = { Warrior: '主屬性力量與體質，物理護甲最高。', Ranger: '主屬性敏捷，物理與魔法護甲平均。弓手、遊俠、刺客都走這條。', Mage: '主屬性智力，魔法護甲最高。', Other: '不分職業或多職業通用的套裝，包含 Hollow Halls 掉落與 Vorgoth 的套裝。' };
  const ladder = $('#ladder'), gearNote = $('#gearNote');
  function setGear(cls, focusBtn) {
    $$('#gearTabs button').forEach(b => { const on = b.dataset.cls === cls; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; if (on && focusBtn) b.focus(); });
    const list = SETS.filter(s => cls === 'Other' ? (s[2] === 'Any' || s[2] === 'Multi-class') : s[2] === cls);
    gearNote.textContent = `${list.length} 套・${NOTE[cls]}`;
    const groups = []; list.forEach(s => { let g = groups.find(x => x.lv === s[0]); if (!g) groups.push(g = { lv: s[0], items: [] }); g.items.push(s); });
    let d = 0;
    ladder.innerHTML = groups.map(g => `<li class="lv"><p class="lv-h">Lv ${g.lv}<small>${g.items.length} 套</small></p>${g.items.map(s => `<div class="set" style="--d:${(d++) * 35}ms">${s[6] ? `<img src="${s[6]}" alt="" loading="lazy" width="96" height="96">` : ''}<b>${s[1]}</b><span>物理 ${s[4]}／魔法 ${s[5]}</span><span>${howZh(s[3])}</span></div>`).join('')}</li>`).join('');
    ladder.parentElement.scrollLeft = 0;
  }
  const tabs = $$('#gearTabs button');
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => setGear(b.dataset.cls));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') setGear(tabs[(i + 1) % tabs.length].dataset.cls, true);
      if (e.key === 'ArrowLeft') setGear(tabs[(i + tabs.length - 1) % tabs.length].dataset.cls, true);
    });
  });
  setGear('Warrior');

  /* ---------- WORLD (region data from the game files) ---------- */
  const REGIONS = [
    ['springlands', '長春平原', 'Springlands・含 Low Meadows', '林地與草原。Fell 佔據霧幕低地，Scavenger 盤踞 Rookmore、Westcott 等廢棄城鎮；鐵匠、煉金術士、木匠、農夫與獵人都從這裡的 Ancient Vault 救出。', '烈焰 2', '3–9', '8.4 km²', '567–1,402 m'],
    ['revelwood', '喧囂森林', 'Revelwood・含黑沼澤 Blackmire', '茂密森林，餘火之谷的古都 Pikemead\'s Reach 就在裡面。子區域黑沼澤是一片沼地，喧囂森林的 Vukah 只住在那裡。', '烈焰 3', '11–15', '7.7 km²', '518–1,435 m'],
    ['nomad-highlands', '遊牧高地', 'Nomad Highlands', '霧幕之上的石灰岩斷崖，位在地圖正中央、與其他所有區域相鄰。Pillars of Creation 是兩座與遠古族有關的巨大火山。', '烈焰 4', '16–20', '5 km²', '556–1,165 m'],
    ['kindlewastes', '星火荒原', 'Kindlewastes', '曬透的砂岩方山、仙人掌與沙丘，峽谷底下滿是霧幕與 Fell。這裡從來不下雨。', '烈焰 5', '21–27', '9 km²', '528–1,288 m'],
    ['albaneve-summits', '阿爾班伊維高峰', 'Albaneve Summits', '冰封山脈，Howling Peak 高 1,999 m。海拔 1,328 m 以上會受凍，是唯一需要保暖衣物的區域。', '烈焰 6–7', '28–35', '9.6 km²', '552–1,999 m'],
    ['veilwater-basin', '面紗水盆地', 'Veilwater Basin', '熱帶湖泊、沙灘與叢林，石灰岩天然拱門下藏著遺跡。湖水是全圖最大片沒被霧幕污染的水域，Drak 族只住在這裡。', '烈焰 8–9', '37–45', '8 km²', '520–1,285 m'],
    ['cinders-cradle', '餘燼搖籃', "Cinder's Cradle・1.0 新區域", '地圖最北端。地面是熔岩與遺跡，天上是遠古族的浮空群島；Ancient Constructs 是這裡專屬的勢力。最終 BOSS 所在的 Mother Flame\'s Domicile 高 2,529 m，是全圖最高點。', '烈焰 10–11', '46–48', '7.5 km²', '565–2,529 m'],
  ];
  const track = $('#biomeTrack');
  track.innerHTML = REGIONS.map(r => `<article class="biome${r[0] === 'cinders-cradle' ? ' biome-new' : ''}"><img src="media/bg/${r[0]}.jpg" alt="${r[1]}的遊戲畫面" loading="lazy"><div class="biome-copy"><h3>${r[1]}</h3><p class="b-en">${r[2]}</p><p>${r[3]}</p><dl class="facts"><div><dt>開啟</dt><dd>${r[4]}</dd></div><div><dt>敵人等級</dt><dd>${r[5]}</dd></div><div><dt>面積</dt><dd>${r[6]}</dd></div><div><dt>海拔</dt><dd>${r[7]}</dd></div></dl></div></article>`).join('');
  const worldIntro = $('.world-intro'), video = $('.world-video'), biomes = $('#biomes'), bar = $('#biomeBar');
  const trackMax = () => { const last = track.lastElementChild; return Math.max(0, last.offsetLeft + last.offsetWidth + parseFloat(getComputedStyle(track).paddingLeft) - innerWidth); };
  function sizeBiomes() { biomes.style.height = isMobile() ? '' : (trackMax() + innerHeight * 1.25) + 'px'; }
  function renderWorld() {
    const r = worldIntro.getBoundingClientRect();
    const t = clamp(1 - r.bottom / (innerHeight + r.height), 0, 1);
    video.style.setProperty('--vz', (1.14 - 0.12 * t).toFixed(4));
    if (isMobile()) return;
    const e = clamp((progressOf(biomes) - 0.08) / 0.84, 0, 1);
    track.style.transform = `translate3d(${-e * trackMax()}px,0,0)`;
    bar.style.width = (e * 100) + '%';
  }
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !RM) video.play().catch(() => {}); else video.pause(); })).observe(worldIntro);
  if (RM) { video.removeAttribute('autoplay'); video.pause(); }

  /* ---------- STORY ---------- */
  const tl = $('#timeline'), tlFill = $('#tlFill'), tlYear = $('#tlYear');
  const tlItems = $$('.tl-list li');
  let lastYear = '';
  function renderStory() {
    const r = tl.getBoundingClientRect();
    tlFill.style.height = (clamp((innerHeight * 0.5 - r.top) / r.height, 0, 1) * 100) + '%';
    let cur = tlItems[0];
    tlItems.forEach(li => { if (li.getBoundingClientRect().top < innerHeight * 0.55) cur = li; });
    const y = cur.dataset.year;
    if (y !== lastYear) {
      lastYear = y; tlYear.textContent = y;
      tlYear.parentElement.querySelector('small').style.visibility = /^\d+$/.test(y) ? 'visible' : 'hidden';
      if (!RM) tlYear.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.2,.7,.2,1)' });
    }
  }
  $$('.egg').forEach(b => b.addEventListener('click', () => b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true')));

  /* ---------- NAV / FINALE ---------- */
  const finale = $('.finale'), finBg = $('.finale-bg'), nav = $('#nav');
  const navLinks = $$('.nav-links a');
  const sections = navLinks.map(a => $(a.getAttribute('href')));
  function renderNav() {
    nav.classList.toggle('solid', scrollY > innerHeight * 0.6);
    let cur = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = i; });
    navLinks.forEach((a, i) => a.classList.toggle('on', i === cur));
    const fr = finale.getBoundingClientRect();
    finBg.style.setProperty('--fz', (1.16 - 0.14 * clamp(1 - fr.bottom / (innerHeight + fr.height), 0, 1)).toFixed(4));
  }

  /* ---------- loop ---------- */
  function frameLoop() {
    if (vis(cover)) renderCover();
    if (!RM && vis(parade)) renderParade();
    if (!RM && vis(loot)) drawLootFx(renderLoot(), true); else drawLootFx(null, false);
    renderWorld(); renderStory(); renderNav(); sweepReveals();
    requestAnimationFrame(frameLoop);
  }
  function onResize() { coverFx.resize(); fog.resize(); lootFx.resize(); sizeBiomes(); sizeParade(); }
  addEventListener('resize', onResize);
  addEventListener('load', sizeBiomes);
  onResize();
  requestAnimationFrame(frameLoop);
})();

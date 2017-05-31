/*
The following commands were coded specifically for Exiled
Made by Insist
feelscool
Basically just edits to main's info.js, and adds more, removes stuff, etc.
*/
'use strict';

exports.commands = {

	/*********************************************************
	 * Informational commands
	 *********************************************************/

	'!groups': true,
	groups: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			"+ <b>Voice</b> - They can use ! commands like !groups, and talk during moderated chat.<br />" +
			"% <b>Driver</b> - The above, and they can mute. Global % can also lock users and check for alts.<br />" +
			"@ <b>Moderator</b> - The above, and they can ban users.<br />" +
			"* <b>Bot</b> - Like Moderator, but makes it clear that this user is a bot.<br />" +
			"&amp; <b>Leader</b> - The above, and they can promote to moderator and force ties.<br />" +
			"# <b>Room Owner</b> - They are leaders of the room and can almost totally control it.<br />" +
			"☥ <b>Gods</b> - The rank of the dankest users ever! They have infinite power, like Administrators.<br />" +
			"~ <b>Administrator</b> - They can do anything, like change what this message says."
		);
	},
	groupshelp: [
		"/groups - Explains what the + % @ # & next to people's names mean.",
		"!groups - Shows everyone that information. Requires: + % @ * # & ~",
	],

	git: "opensource",
	opensource: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			"Exiled's Github's:<br />" +
			"- Language: JavaScript (Node.js)<br />" +
			"- <a href=\"https://github.com/DeathlyPlays/Exiled\">Exiled Server Code</a><br />" +
			"- <a href=\"https://github.com/ExiledPS\">Team Exiled Organization</a><br />"
		);
	},
	opensourcehelp: [
		"/opensource - Links to Exiled's source code repository.",
		"!opensource - Show everyone that information. Requires: + % @ * # & ~",
	],

	'!forums': true,
	forums: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"http://exiledps.boards.net\">Exiled Forums</a>");
	},

	'!suggestions': true,
	suggestions: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"http://exiledps.boards.net/board/3/suggestions\">Make a suggestion for Exiled</a>");
	},

	'!fakemon': true,
	fakemons: 'fakemon',
	fakemon: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://goo.gl/forms/ho9YhvxrnXMY2QLI3\">Submit a Fakemon :D</a>");
	},

	'!skype': true,
	skype: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://join.skype.com/Eo5DCq8nCh1j\">The Official Skype Group</a>");
	},

	'!discord': true,
	discord: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://discord.gg/3UWpXwa\">The Official Exiled Discord</a>");
	},

	'!reddit': true,
	reddit: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.reddit.com/me/m/exiled_ps/\">The Official Exiled Reddit</a>");
	},

	'!facebook': true,
	facebook: function (target, room, user) {
		if (!this.runBroadcast()) return;
		this.sendReplyBox("<a href=\"https://www.facebook.com/exiledserver/\">The Official Exiled Facebook Page</a>");
	},

	'!mewth': true,
	mewth: function (target, room, user) {
		if (!this.runBroadcast('!htmlbox')) return;
		this.sendReplyBox(
			//Mega Reunicles
			"<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">New</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -120px -1440px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"https://pokemonshowdown.com/dex/pokemon/reuniclus\" target=\"_blank\">Reuniclus-Mega</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Psychic.png\" alt=\"Psychic\" height=\"14\" width=\"32\"></span> <span style=\"float:left;min-height:26px\"><span class=\"col twoabilitycol\">Regenerator</span></span><span style=\"float:left;min-height:26px\"><span class=\"col statcol\"><em>HP</em><br>125</span> <span class=\"col statcol\"><em>Atk</em><br>65</span> <span class=\"col statcol\"><em>Def</em><br>105</span> <span class=\"col statcol\"><em>SpA</em><br>170</span> <span class=\"col statcol\"><em>SpD</em><br>105</span> <span class=\"col statcol\"><em>Spe</em><br>30</span> <span class=\"col bstcol\"><em>BST<br>600</em></span> </span></li><li style=\"clear:both\"></li></ul></div><br />" +
			//Mega Butterfree
			"<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">New</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -0px -30px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"https://pokemonshowdown.com/dex/pokemon/butterfree\" target=\"_blank\">Butterfree-Mega</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Bug.png\" alt=\"Bug\" height=\"14\" width=\"32\"><img src=\"//play.pokemonshowdown.com/sprites/types/Psychic.png\" alt=\"Psychic\" height=\"14\" width=\"32\"></span> <span style=\"float:left;min-height:26px\"><span class=\"col abilitycol\">Adaptability</span></span></span><span style=\"float:left;min-height:26px\"><span class=\"col statcol\"><em>HP</em><br>85</span> <span class=\"col statcol\"><em>Atk</em><br>15</span> <span class=\"col statcol\"><em>Def</em><br>80</span> <span class=\"col statcol\"><em>SpA</em><br>150</span> <span class=\"col statcol\"><em>SpD</em><br>80</span> <span class=\"col statcol\"><em>Spe</em><br>105</span> <span class=\"col bstcol\"><em>BST<br>515</em></span> </span></li><li style=\"clear:both\"></li></ul></div><br />" +
			//Mega Flygon
			"<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">New</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -240px -810px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"https://pokemonshowdown.com/dex/pokemon/flygon\" target=\"_blank\">Flygon-Mega</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Bug.png\" alt=\"Bug\" height=\"14\" width=\"32\"><img src=\"//play.pokemonshowdown.com/sprites/types/Dragon.png\" alt=\"Dragon\" height=\"14\" width=\"32\"></span> <span style=\"float:left;min-height:26px\"><span class=\"col abilitycol\">Insectize</span><span class=\"col abilitycol\"></span></span><span style=\"float:left;min-height:26px\"><span class=\"col statcol\"><em>HP</em><br>100</span> <span class=\"col statcol\"><em>Atk</em><br>140</span> <span class=\"col statcol\"><em>Def</em><br>130</span> <span class=\"col statcol\"><em>SpA</em><br>140</span> <span class=\"col statcol\"><em>SpD</em><br>110</span> <span class=\"col statcol\"><em>Spe</em><br>140</span> <span class=\"col bstcol\"><em>BST<br>760</em></span> </span></li><li style=\"clear:both\"></li></ul></div><br />" +
			//Mega Luxray
			"<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">New</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -360px -990px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"https://pokemonshowdown.com/dex/pokemon/luxray\" target=\"_blank\">Luxray-Mega</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Electric.png\" alt=\"Electric\" height=\"14\" width=\"32\"><img src=\"//play.pokemonshowdown.com/sprites/types/Dark.png\" alt=\"Dark\" height=\"14\" width=\"32\"></span> <span style=\"float:left;min-height:26px\"><span class=\"col twoabilitycol\">Strong Jaw<br></span></span><span style=\"float:left;min-height:26px\"><span class=\"col statcol\"><em>HP</em><br>110</span> <span class=\"col statcol\"><em>Atk</em><br>170</span> <span class=\"col statcol\"><em>Def</em><br>100</span> <span class=\"col statcol\"><em>SpA</em><br>90</span> <span class=\"col statcol\"><em>SpD</em><br>109</span> <span class=\"col statcol\"><em>Spe</em><br>115</span> <span class=\"col bstcol\"><em>BST<br>694</em></span> </span></li><li style=\"clear:both\"></li></ul></div><br />" +
			//Mega Lilligant
			"<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">New</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -360px -1350px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"https://pokemonshowdown.com/dex/pokemon/lilligant\" target=\"_blank\">Lilligant-Mega</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Grass.png\" alt=\"Grass\" height=\"14\" width=\"32\"></span> <span style=\"float:left;min-height:26px\"><span class=\"col twoabilitycol\">Simple</span></span><span style=\"float:left;min-height:26px\"><span class=\"col statcol\"><em>HP</em><br>80</span> <span class=\"col statcol\"><em>Atk</em><br>60</span> <span class=\"col statcol\"><em>Def</em><br>105</span> <span class=\"col statcol\"><em>SpA</em><br>130</span> <span class=\"col statcol\"><em>SpD</em><br>105</span> <span class=\"col statcol\"><em>Spe</em><br>100</span> <span class=\"col bstcol\"><em>BST<br>580</em></span> </span></li><li style=\"clear:both\"></li></ul></div><br />" +
			//Mega Lunatone
			'<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">New</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -40px -840px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"https://pokemonshowdown.com/dex/pokemon/lunatone\" target=\"_blank\">Lunatone-Mega</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Rock.png\" alt=\"Rock\" height=\"14\" width=\"32\"><img src=\"//play.pokemonshowdown.com/sprites/types/Psychic.png\" alt=\"Psychic\" height=\"14\" width=\"32\"></span> <span style=\"float:left;min-height:26px\"><span class=\"col abilitycol\">Microcosm</span><span class=\"col abilitycol\"></span></span><span style=\"float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>120</span> <span class="col statcol"><em>Atk</em><br>55</span> <span class="col statcol"><em>Def</em><br>95</span> <span class="col statcol"><em>SpA</em><br>125</span> <span class="col statcol"><em>SpD</em><br>95</span> <span class="col statcol"><em>Spe</em><br>70</span> <span class="col bstcol"><em>BST<br>560</em></span> </span></li><li style="clear:both"></li></ul></div><br />' +
			//Mega Solrock
			'<div class="infobox"><ul class="utilichart"><li class="result"><span class="col numcol">New</span> <span class="col iconcol"><span style="background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -80px -840px"></span></span> <span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/pokemon/solrock" target="_blank">Solrock-Mega</a></span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/Rock.png" alt="Rock" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/types/Psychic.png" alt="Psychic" height="14" width="32"></span> <span style="float:left;min-height:26px"><span class="col abilitycol">Macrocosm</span><span class="col abilitycol"></span></span><span style="float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>120</span> <span class="col statcol"><em>Atk</em><br>125</span> <span class="col statcol"><em>Def</em><br>95</span> <span class="col statcol"><em>SpA</em><br>55</span> <span class="col statcol"><em>SpD</em><br>95</span> <span class="col statcol"><em>Spe</em><br>70</span> <span class="col bstcol"><em>BST<br>560</em></span> </span></li><li style="clear:both"></li></ul></div><br />' +
			//Mega Weavile
			'<div class="infobox"><ul class="utilichart"><li class="result"><span class="col numcol">BL</span> <span class="col iconcol"><span style="background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -200px -1140px"></span></span> <span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/pokemon/weavile" target="_blank">Weavile-Mega</a></span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/Dark.png" alt="Dark" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/types/Ice.png" alt="Ice" height="14" width="32"></span> <span style="float:left;min-height:26px"><span class="col abilitycol">Tough Claws</span><span><span style="float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>80</span> <span class="col statcol"><em>Atk</em><br>160</span> <span class="col statcol"><em>Def</em><br>85</span> <span class="col statcol"><em>SpA</em><br>15</span> <span class="col statcol"><em>SpD</em><br>85</span> <span class="col statcol"><em>Spe</em><br>185</span> <span class="col bstcol"><em>BST<br>610</em></span> </span></li><li style="clear:both"></li></ul></div><br />' +
			//Mega Furret
			'<div class="infobox"><ul class="utilichart"><li class="result"><span class="col numcol">New</span> <span class="col iconcol"><span style="background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -240px -390px"></span></span> <span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/pokemon/furret" target="_blank">Furret-Mega</a></span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/Normal.png" alt="Normal" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/types/Ghost.png" alt="Ghost" height="14" width="32"></span> <span style="float:left;min-height:26px"><span class="col abilityco">Shadow Shield</span></span><span style="float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>120</span> <span class="col statcol"><em>Atk</em><br>150</span> <span class="col statcol"><em>Def</em><br>114</span> <span class="col statcol"><em>SpA</em><br>150</span> <span class="col statcol"><em>SpD</em><br>125</span> <span class="col statcol"><em>Spe</em><br>145</span> <span class="col bstcol"><em>BST<br>804</em></span> </span></li><li style="clear:both"></li></ul></div><br />' +
			//Mega Ludicolo
			'<div class="infobox"><ul class="utilichart"><li class="result"><span class="col numcol">UU</span> <span class="col iconcol"><span style="background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -320px -660px"></span></span> <span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/pokemon/ludicolo" target="_blank">Ludicolo-Mega</a></span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/Water.png" alt="Water" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/types/Grass.png" alt="Grass" height="14" width="32"></span> <span style="float:left;min-height:26px"><span class="col abilityco">Drizzle</span></span><span style="float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>90</span> <span class="col statcol"><em>Atk</em><br>60</span> <span class="col statcol"><em>Def</em><br>100</span> <span class="col statcol"><em>SpA</em><br>120</span> <span class="col statcol"><em>SpD</em><br>110</span> <span class="col statcol"><em>Spe</em><br>100</span> <span class="col bstcol"><em>BST<br>580</em></span> </span></li><li style="clear:both"></li></ul></div><br />' +
			//Mega Carbink
			'<div class="infobox"><ul class="utilichart"><li class="result"><span class="col numcol">New</span> <span class="col iconcol"><span style="background:transparent url(//play.pokemonshowdown.com/sprites/smicons-sheet.png?a1) no-repeat scroll -280px -1740px"></span></span> <span class="col pokemonnamecol" style="white-space:nowrap"><a href="https://pokemonshowdown.com/dex/pokemon/carbink" target="_blank">Carbink-Mega</a></span> <span class="col typecol"><img src="//play.pokemonshowdown.com/sprites/types/Rock.png" alt="Rock" height="14" width="32"><img src="//play.pokemonshowdown.com/sprites/types/Fairy.png" alt="Fairy" height="14" width="32"></span> <span style="float:left;min-height:26px"><span class="col abilitycol">Luster</span><span style="float:left;min-height:26px"><span class="col statcol"><em>HP</em><br>150</span> <span class="col statcol"><em>Atk</em><br>100</span> <span class="col statcol"><em>Def</em><br>150</span> <span class="col statcol"><em>SpA</em><br>100</span> <span class="col statcol"><em>SpD</em><br>150</span> <span class="col statcol"><em>Spe</em><br>5</span> <span class="col bstcol"><em>BST<br>660</em></span> </span></li><li style="clear:both"></li></ul></div><br />'
		);
	},

	'!fakemondata': true,
	dtfakemons: 'fakemondata',
	dtfakemon: 'fakemondata',
	datafakemons: 'fakemondata',
	fakemonsdata: 'fakemondata',
	fakemondata: function (target, room, user) {
		if (!this.runBroadcast('!htmlbox')) return;
		this.sendReplyBox(
			//SMK
			"<div class=\"infobox\"><ul class=\"utilichart\"><li class=\"result\"><span class=\"col numcol\">Fakemons</span> <span class=\"col iconcol\"><span style=\"background:transparent url(//megaicons.net/iconspack-1708/61325/) no-repeat scroll -120px -1440px\"></span></span> <span class=\"col pokemonnamecol\" style=\"white-space:nowrap\"><a href=\"Err sorry our README is not created....\" target=\"_blank\">SMK</a></span> <span class=\"col typecol\"><img src=\"//play.pokemonshowdown.com/sprites/types/Dark.png\" alt=\"Dark\" height=\"14\" width=\"32\"><img src=\"//play.pokemonshowdown.com/sprites/types/Ghost.png\" alt=\"Ghost\" height=\"14\" width=\"32\"></span></span> <span style=\"float:left;min-height:26px\"><span class=\"col twoabilitycol\">Midlife Crisis</span></span><span class=\"col abilitycol\"><em>Prankster</em></span><span style=\"float:left;min-height:26px\"><span class=\"col statcol\"><em>HP</em><br>65</span> <span class=\"col statcol\"><em>Atk</em><br>120</span> <span class=\"col statcol\"><em>Def</em><br>40</span> <span class=\"col statcol\"><em>SpA</em><br>20</span> <span class=\"col statcol\"><em>SpD</em><br>40</span> <span class=\"col statcol\"><em>Spe</em><br>140</span> <span class=\"col bstcol\"><em>BST<br>425</em></span> </span></li><li style=\"clear:both\"></li></ul></div><br />"
		);
	},

	//Credits to Snaquaza on these feature and other DragonHeaven developers/contributers
	'fakemonlist': 'fakemonslist',
	fakemonslist: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let buf = `<div class=infobox-limited><center><h2>List Of Fakemons</h2></center>`;
		let fakemonsDex = require('../mods/fakemons/pokedex.js').BattlePokedex;
		if (!fakemonsDex) return this.errorReply("Error Fetching Fakemons Data.");
		Object.values(fakemonsDex).forEach(mon => {
			buf += `<button name="send" value="/fakemondata ${mon.species}" style="background:none;border:none;">${mon.species}</button><br>`;
		});
		this.sendReplyBox(`${buf}</div>`);
	},
	fakemonslisthelp: ["/fakemonslist - Shows the list of Fakemons."],

	learnfakemons: function (target, room, user) {
		if (!this.runBroadcast()) return;
		let learnfakemons = Dex.mod('fakemons').data.Learnsets, movefakemons = Dex.mod('fakemons').data.Movedex, dexfakemons = Dex.mod('fakemons').data.Pokedex;
		if (!target || toId(target) === '') return this.sendReply("/learnfakemons: Shows the whether a Pokemon can learn a move, including Pokemon and Moves from fakemons.");
		let targets = target.split(','), mon = targets[0], move = targets[1];
		if (!mon || !dexfakemons[toId(mon)]) return this.errorReply("Error: Pokemon not found");
		if (!learnfakemons[toId(mon)]) return this.errorReply("Error: Learnset not found");
		if (!move || !movefakemons[toId(move)]) return this.errorReply("Error: Move not found");
		mon = dexfakemons[toId(mon)];
		move = movefakemons[toId(move)];
		if (learnfakemons[toId(mon.species)].learnset[toId(move.name)]) {
			return this.sendReplyBox("In Fakemons, " + mon.species + ' <font color="green"><u><b>can<b><u></font> learn ' + move.name);
		}
		return this.sendReplyBox("In Fakemons, " + mon.species + ' <font color="red"><u><b>can\'t<b><u></font> learn ' + move.name);
	},

	'!bugs': true,
	bugs: function (target, room, user) {
		if (!this.runBroadcast()) return;
		if (room && room.battle) {
			this.sendReplyBox("<center><button name=\"saveReplay\"><i class=\"fa fa-upload\"></i> Save Replay</button> &mdash; <a href=\"https://www.smogon.com/forums/threads/3520646/\">Questions</a> &mdash; <a href=\"https://www.smogon.com/forums/threads/3469932/\">Bug Reports</a></center>");
		} else {
			this.sendReplyBox(
				"Have a replay showcasing a bug on Exiled?<br />" +
				"- <a href=\"http://exiledps.boards.net/thread/5/bug-reports/\">Bug Reports</a>"
			);
		}
	},

	'!roomhelp': true,
	roomhelp: function (target, room, user) {
		if (!this.canBroadcast('!htmlbox')) return;
		if (this.broadcastMessage && !this.can('declare', null, room)) return false;

		if (!this.runBroadcast('!htmlbox')) return;
		this.sendReplyBox(
			"<strong>Room drivers (%)</strong> can use:<br />" +
			"- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules<br />" +
			"- /mute OR /m <em>username</em>: 7 minute mute<br />" +
			"- /hourmute OR /hm <em>username</em>: 60 minute mute<br />" +
			"- /unmute <em>username</em>: unmute<br />" +
			"- /announce OR /wall <em>message</em>: make an announcement<br />" +
			"- /modlog <em>username</em>: search the moderator log of the room<br />" +
			"- /modnote <em>note</em>: adds a moderator note that can be read through modlog<br />" +
			"- /kick <em>username</em>: kicks the user out of the chatroom<br />" +
			"<br />" +
			"<strong>Room moderators (@)</strong> can also use:<br />" +
			"- /roomban OR /rb <em>username</em>: bans user from the room<br />" +
			"- /roomunban <em>username</em>: unbans user from the room<br />" +
			"- /roomvoice <em>username</em>: appoint a room voice<br />" +
			"- /roomdevoice <em>username</em>: remove a room voice<br />" +
			"- /staffintro <em>intro</em>: sets the staff introduction that will be displayed for all staff joining the room<br />" +
			"- /roomsettings: change a variety of room settings, namely modchat<br />" +
			"<br />" +
			"<strong>Room leaders (&)</strong> can also use: <br />" +
			"- /roommdriver <em>username</em>: appoints someone to room driver<br />" +
			"- /roommod <em>username</em>: appoints user to room mod<br />" +
			"- /roomdedriver /roomdemod <em>username</em>: removes user room driver/moderator<br />" +
			"<br />" +
			"<strong>Room owners (#)</strong> can also use:<br />" +
			"- /roomintro <em>intro</em>: sets the room introduction that will be displayed for all users joining the room<br />" +
			"- /rules <em>rules link</em>: set the room rules link seen when using /rules<br />" +
			"- /roomdeauth <em>username</em>: remove all room auth from a user<br />" +
			"- /declare <em>message</em>: make a large blue declaration to the room<br />" +
			"- !htmlbox <em>HTML code</em>: broadcasts a box of HTML code to the room<br />" +
			"- !showimage <em>[url], [width], [height]</em>: shows an image to the room<br />" +
			"- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc<br />" +
			"<br />" +
			"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/threads/3570628/#post-6774654\">roomauth guide</a><br />" +
			"<br />" +
			"Tournament Help:<br />" +
			"- /tour create <em>format</em>, elimination: Creates a new single elimination tournament in the current room.<br />" +
			"- /tour create <em>format</em>, roundrobin: Creates a new round robin tournament in the current room.<br />" +
			"- /tour end: Forcibly ends the tournament in the current room<br />" +
			"- /tour start: Starts the tournament in the current room<br />" +
			"<br />" +
			"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/threads/3570628/#post-6777489\">tournaments guide</a><br />" +
			"</div>"
		);
	},

	'!rules': true,
	rule: 'rules',
	rules: function (target, room, user) {
		if (!target) {
			if (!this.runBroadcast()) return;
			this.sendReplyBox("Please follow the rules:<br />" +
				(room && room.rulesLink ? "- <a href=\"" + Chat.escapeHTML(room.rulesLink) + "\">" + Chat.escapeHTML(room.title) + " room rules</a><br />" : "") +
				"- <a href=\"http://exiledps.boards.net/thread/4/exiled-rules-regulations\">" + (room && room.rulesLink ? "Global rules" : "Rules") + "</a>");
			return;
		}
		if (!room) {
			this.errorReply("This is not a room you can set the rules of.");
		}
		if (!this.can('editroom', null, room)) return;
		if (target.length > 100) {
			return this.errorReply("Error: Room rules link is too long (must be under 100 characters). You can use a URL shortener to shorten the link.");
		}

		room.rulesLink = target.trim();
		this.privateModCommand(`(${user.name} changed the room rules link to: ${target})`);

		if (room.chatRoomData) {
			room.chatRoomData.rulesLink = room.rulesLink;
			Rooms.global.writeChatRoomData();
		}
	},
	ruleshelp: ["/rules - Show links to room rules and global rules.",
		"!rules - Show everyone links to room rules and global rules. Requires: + % @ * # & ~",
		"/rules [url] - Change the room rules URL. Requires: # & ~"],

	servercredits: 'credits',
	credits: function (target, room, user) {
		let popup = "|html|" + "<font size=5 color=#F7189F><u><b>Exiled Credits:</b></u></font><br />" +
			"<br />" +
			"<u><b>Server Maintainers:</u></b><br />" +
			"- " + Exiled.nameColor('Insist', true) + " (Owner, Sysadmin, Development)<br />" +
			"- " + Exiled.nameColor('Volco', true) + " (Owner, Sysadmin, Development)<br />" +
			"<br />" +
			"<u><b>Major Contributors:</b></u><br />" +
			"- " + Exiled.nameColor('VXN', true) + " (Developments)<br />" +
			"- " + Exiled.nameColor('AlfaStorm', true) + " (Developments)<br />" +
			"- " + Exiled.nameColor('Mewth', true) + " (Developments)<br />" +
			"- " + Exiled.nameColor('Back At My Day', true) + " (Developments)<br />" +
			"<br />" +
			"<u><b>Retired Staff:</b></u><br />" +
			"- " + Exiled.nameColor('Princess Teddiursa', true) + " (Former Owner, Development, CSS Developments)<br />" +
			"- " + Exiled.nameColor('Alpha Hawk', true) + " (Developments)<br />" +
			"<br />" +
			"<u><b>Special Thanks:</b></u><br />" +
			"- Our Staff Members<br />" +
			"- Our Regular Users<br />";
		user.popup(popup);
	},
};

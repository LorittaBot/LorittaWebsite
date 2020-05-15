fun onLoad(variables: Map<String, Any?>): HtmlBlockTag.() -> Unit = {
	div {
		unsafe {
			raw("""
			<script src='${LorittaWebsite.WEBSITE_URL}assets/js/this["loritta-parent-spicy-morenitta"].js?${System.currentTimeMillis()}'></script>
			<script>this["loritta-parent-spicy-morenitta"].net.perfectdreams.spicymorenitta.views.dashboard.TimersView.start();</script>""")
		}
	}
	
	div(classes = "category-name") {
		+ "Timers"
	}
		
	val list = listOf()
	
	val serverConfig = variables["serverConfig"] as ServerConfig
	
	div(classes = "pure-g") {
		div(classes = "pure-u-1 pure-u-md-3-4") {
			div(classes = "toggleSubText") {
				+ "Timers são úteis para quando você quer fazer paradas legais e divertidas!"
			}
		}
		div(classes = "pure-u-1 pure-u-md-1-4") {
			div(classes = "button-discord button-discord-info pure-button add-timer-button") {
				+ "Adicionar Timer"
			}
		}
	}
	
	hr {}
	
	// val timers = org.jetbrains.exposed.sql.transactions.transaction(com.mrpowergamerbr.loritta.network.Databases.loritta) {
	//	com.mrpowergamerbr.loritta.dao.Timer.find { com.mrpowergamerbr.loritta.tables.Timers.guildId eq (variables["guild"] as Guild).idLong }.toMutableList()
	//}
	
	/*
<div id="{{ community.communityId }}" class="amino-community" data-repost-id="{{ community.repostToChannelId }}" data-community-id="{{ community.communityId }}" data-community-url="{{ community.inviteUrl }}">
<div class="discord-generic-entry">
<img class="amino-small-image" style="width: 6%; height: auto; border-radius: 999999px; float: left;">
<div class="pure-g">
<div class="pure-u-1 pure-u-md-18-24">
<div style="margin-left: 10px; margin-right: 10px;">
<div class="amino-title entry-title" style="font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;">...</div>
<div class="amino-channel toggleSubText">...</div>
</div>
</div>
<div class="pure-u-1 pure-u-md-6-24 vertically-centered-content">
<button class="button-discord button-discord-edit pure-button" style="margin-right: 8px; min-width: 0px;" onclick="deleteCommunity('{{ community.communityId }}')"><i class="fas fa-trash" aria-hidden="true"></i></button>
<button class="button-discord button-discord-edit pure-button" onclick="editCommunity('{{ community.communityId }}')">{{ DASHBOARD_EditButton }}</button>
</div>
</div>
</div>
*/

	div {
		id = "timer-entries"
	}
	/* div {
		for (timer in timers) {
			div(classes = "discord-generic-entry timer-entry") {
				attributes["timer-id"] = timer.id.value.toString()
				img(classes = "amino-small-image") {
					style = "width: 6%; height: auto; border-radius: 999999px; float: left;"
					src = "https://cdn.discordapp.com/avatars/418340363946819604/a_5229c09f5e33c95066618840960bf525.gif?size=2048"
				}
				div(classes = "pure-g") {
					div(classes = "pure-u-1 pure-u-md-18-24") {
						div {
							style = "margin-left: 10px; margin-right: 10;"
							div(classes = "amino-title entry-title") {
								style = "font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;"
								+ "Timer ${timer.id}"
							}
							div(classes = "amino-title toggleSubText") {
								+ "Alguma coisa interessante aqui"
							}
						}
					}
					div(classes = "pure-u-1 pure-u-md-6-24 vertically-centered-content") {
						button(classes="button-discord button-discord-edit pure-button") {
							style = "margin-right: 8px; min-width: 0px;"
							i(classes = "fas fa-trash") {
							
							}
						}
						button(classes="button-discord button-discord-edit pure-button edit-timer-button") {
							+ "Editar"
						}
					}
				}
			}
			+ "Timer: ${timer.id}"
		}	
	} */
	
	div(classes = "button-discord button-discord-success pure-button timers-save-button") {
		style = "float: right;"
		+ "Salvar"
	}
	div(classes = "totallyHidden") {
		id = "timers-as-json"
		+ variables["timers_json"].toString()
	}
	div(classes = "totallyHidden") {
		id = "configuring-guild-id"
		+ serverConfig.guildId
	}
}
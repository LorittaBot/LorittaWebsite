					var icons = listOf(
						"https://canary.loritta.website/v2/assets/img/trust/cellbit.png", // Cellbit
						"https://canary.loritta.website/v2/assets/img/trust/felps.png", // Felps
						"https://canary.loritta.website/v2/assets/img/trust/gartic.png", // Gartic
						"https://canary.loritta.website/v2/assets/img/trust/godenot.png", // Godenot
						"https://canary.loritta.website/v2/assets/img/trust/dudscord.png", // Dudscord
						"https://canary.loritta.website/v2/assets/img/trust/chavecu.png", // Flakes
						"https://canary.loritta.website/v2/assets/img/trust/flakes_power.png", // Flakes
						"https://canary.loritta.website/v2/assets/img/trust/drawn_mask.png", // Drawn Mask
						"https://canary.loritta.website/v2/assets/img/trust/driscord.png", // Driscord
						"https://canary.loritta.website/v2/assets/img/trust/mikaru.png", // Mikaru
						"https://canary.loritta.website/v2/assets/img/trust/furry_amino.png", // Furry Amino
						"https://canary.loritta.website/v2/assets/img/trust/brksedu.png", // brksedu
						"https://canary.loritta.website/v2/assets/img/trust/lubatv.png", // LubaTV
						"https://canary.loritta.website/v2/assets/img/trust/mbj.png" // MBJ
					)

fun DIV.trust(locale: BaseLocale) {
    div(classes = "even-wrapper wobbly-bg") {
			style = "text-align: center;"

			h1 {
				+ locale["website.home.trust.title"]
			}

			div(classes = "guild-icons-horizontal") {
				div(classes = "guilds-wrapper") {
					var idx = 0

					for (icon in icons) {
						var mod = idx % 4

						var classNames = when (mod) {
							1, 3 -> "icon-middle"
							2 -> "icon-top"
							else -> "icon-bottom"
						}
						img(classes = classNames, src = icon) {
							width = "96"
							style = "border-radius: 9999px; margin-left: 4px; margin-right: 4px;"
						}
						idx++
					}
				}
			}

	br {}
	br {}

			/* p {
				+ "Texto texto texto texto texto!"
			}
			p {
				+ "Texto e mais texto"
			} */

			iframe() {
				// src = "https://clips.twitch.tv/embed?clip=PeacefulAlertEggplantBudStar&autoplay=false"
				attributes["frameborder"] = "0"
				attributes["allowfullscreen"] = "true"
				attributes["height"] = "279"
				attributes["width"] = "496"
				attributes["lazy-load-url"] = "https://clips.twitch.tv/embed?clip=PeacefulAlertEggplantBudStar&autoplay=false"
			}

			iframe() {
				// src = "https://clips.twitch.tv/embed?clip=PeacefulAlertEggplantBudStar&autoplay=false"
				attributes["frameborder"] = "0"
				attributes["allowfullscreen"] = "true"
				attributes["height"] = "279"
				attributes["width"] = "496"
				attributes["lazy-load-url"] = "https://clips.twitch.tv/embed?clip=FrigidFaithfulLemurCoolCat&autoplay=false"
			}
			
			/* p {
				+ "E eu nunca vou me contentar até conseguir transformar o mundo!"
			} */

			br {}
		}
}

fun DIV.trustBrasil(locale: BaseLocale) {
    div(classes = "even-wrapper wobbly-bg") {
			style = "text-align: center;"

			h1 {
				+ "Todos os seus YouTubers e Streamers favoritos já me adicionaram!"
			}

			div(classes = "guild-icons-horizontal") {
				div(classes = "guilds-wrapper") {
					var idx = 0

					for (icon in icons) {
						var mod = idx % 4

						var classNames = when (mod) {
							1, 3 -> "icon-middle"
							2 -> "icon-top"
							else -> "icon-bottom"
						}
						img(classes = classNames, src = icon) {
							width = "96"
							style = "border-radius: 9999px; margin-left: 4px; margin-right: 4px;"
						}
						idx++
					}
				}
			}

	br {}
	br {}

			/* p {
				+ "Texto texto texto texto texto!"
			}
			p {
				+ "Texto e mais texto"
			} */

			iframe() {
				// src = "https://clips.twitch.tv/embed?clip=PeacefulAlertEggplantBudStar&autoplay=false"
				attributes["frameborder"] = "0"
				attributes["allowfullscreen"] = "true"
				attributes["height"] = "279"
				attributes["width"] = "496"
				attributes["lazy-load-url"] = "https://clips.twitch.tv/embed?clip=PeacefulAlertEggplantBudStar&autoplay=false"
			}

			iframe() {
				// src = "https://clips.twitch.tv/embed?clip=PeacefulAlertEggplantBudStar&autoplay=false"
				attributes["frameborder"] = "0"
				attributes["allowfullscreen"] = "true"
				attributes["height"] = "279"
				attributes["width"] = "496"
				attributes["lazy-load-url"] = "https://clips.twitch.tv/embed?clip=FrigidFaithfulLemurCoolCat&autoplay=false"
			}
			
			/* p {
				+ "E eu nunca vou me contentar até conseguir transformar o mundo!"
			} */

			br {}
		}
}
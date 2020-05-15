@extends 'has_footer.kts'

override fun getTitle(@args) = locale["website.support.title"]

override fun DIV.generateContent(@args) {	
    div(classes = "even-wrapper") {
		div(classes = "media") {
            div(classes = "media-figure") {
                img(src = "${websiteUrl}/v2/assets/img/lori_support.png") {}
            }
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h2 {
                            + locale["website.support.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.support.description")) {
						p {
							+ str
						}
					}
                }
            }
        }
    }
    div(classes = "odd-wrapper wobbly-bg") {
        div(classes = "media") {
            div(classes = "media-body") {
                div {
                    style = "text-align: center;"

                    h1 {
                        + locale["website.support.supportServers"]
                    }

                    div {
                        style = "display: flex; justify-content: space-evenly; flex-wrap: wrap;"

                        div {
                            h2 {
                                + "English / International"
                            }
                            
                            a(href = "https://discord.gg/ZWt5mKB") {
                                img(src = "https://discordapp.com/api/guilds/420626099257475072/widget.png?style=banner3") {
                                    style = "border-radius: 7px;"
                                }
                            }
                        }

                        div {
                            h2 {
                                + "Português"
                            }

                            a(href = "https://discord.gg/loritta") {
                                img(src = "https://discordapp.com/api/guilds/297732013006389252/widget.png?style=banner3") {
                                    style = "border-radius: 7px;"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
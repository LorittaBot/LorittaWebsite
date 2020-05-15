fun DIV.createMessage(iconStyle: String, senderName: String, senderAvatar: String, senderMessage: DIV.() -> (Unit), loriResponse: DIV.() -> (Unit)) {
    div(classes = "discord-chat-box $iconStyle") {
        style = "padding: 12px; border-radius: 7px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); margin: 8px;"

        div(classes = "content") {
            div {
                img(classes = "user-avatar", src = senderAvatar) {}
            }

            div(classes = "right-side") {
                div(classes = "user-name") {
                    + senderName
                }

                div {
                    style = "white-space: normal; max-width: 20em;"
                    senderMessage()
                }
            }
        }

        hr {}

        div(classes = "content") {
            div {
                img(classes = "user-avatar", src = "https://cdn.discordapp.com/avatars/297153970613387264/eb14362006ecdd6d5030a463e01935d3.png?size=2048") {}
            }

            div(classes = "right-side") {
                div(classes = "user-name") {
                    + "Loritta Morenitta 😘 "
                    span(classes = "bot-tag") {
                        + "Bot"
                    }
                }

                div {
                    loriResponse()
                }
            }
        }
    }
}

fun DIV.headerCommands() {
    createMessage(
                "icon-bottom",
                "Dokyo ✨",
                "https://cdn.discordapp.com/avatars/416056545051279370/69707c0ef268f9b80bbcaaf3f09f2405.png?size=2048",
                { + "+tristerealidade "; span(classes = "mention") { + "@Ayano" }; + " "; span(classes = "mention") { + "@Rickinho3" }; + " "; span(classes = "mention") { + "@Its_Gabi" }; + " "; span(classes = "mention") { + "@Nightdavisao" }; + " "; span(classes = "mention") { + "@Allouette" }; + " "; span(classes = "mention") { + "@Brenoplays2" }; },
                { 
                    img(src = "https://cdn.discordapp.com/attachments/392476688614948897/564198805696937994/sad_reality.png") {
                        width = "300"
                    }
                }
            )

            createMessage(
                "icon-middle",
                "_XxToDdYNho0Xx_",
                "https://cdn.discordapp.com/avatars/271435896220418058/2ef8d76a0588e88f5d541a94a9e5de3c.png?size=2048",
                { + "+ship "; span(classes = "mention") { + "@!!Annih!!" }; + " "; span(classes = "mention") { + "@Miela ᛃ👻็็็" } },
                { 
                    div {
                        div {
                            strong { + "Hmmm, será que nós temos um novo casal aqui?" }
                        }
                            div {
                                code { + "!!Annih!!็็็" }
                            }
                            div {
                                code { + "Miela ᛃ👻" }
                            }
                            div {
                                code { + "!!Ann?็็็" }
                            }
                            div {
                                img(src = "https://cdn.discordapp.com/emojis/556524143281963008.png?v=1") { width = "21" }
                                + " As possibilidades de ter este casal são quase impossíveis! "
                                img(src = "https://cdn.discordapp.com/emojis/556524143281963008.png?v=1") { width = "21" }
                            }

                            div(classes = "embed") {
                                div(classes = "embed-pill") {}
                                div(classes = "embed-inner") {
                                    div(classes = "embed-content") {
                                        strong {
                                            + "55% "
                                        }
                                        code {
                                            + "[██████.....]"
                                        }
                                    }

                                    img(src = "https://cdn.discordapp.com/attachments/392476688614948897/564223872732233740/ships.png") {
                                        width = "384"
                                        height = "128"
                                    }
                                }
                            }
                        }
                    }
            )
            
            createMessage(
                "icon-top",
                "MrPowerGamerBR",
                "https://cdn.discordapp.com/avatars/123170274651668480/a_34b555cf8deac72c99c0b87cb1b4edfd.gif?size=2048",
                { + "+lorisign" },
                { 
                    img(src = "https://cdn.discordapp.com/attachments/297732013006389252/564108848215097344/lori_sign.png") {
                        height = "200"
                    }
                }
            )

            createMessage(
                "icon-middle",
                "myah 🍀",
                "https://cdn.discordapp.com/avatars/288417511286898689/a_e8542e6b885525249dc60e02c492a6c9.gif?size=2048",
                { + "+contentawarescale "; span(classes = "mention") { + "@Yuri" } },
                { 
                    img(src = "https://cdn.discordapp.com/attachments/358774895850815488/564160679125319682/content_aware_scale.png")
                }
            )

            createMessage(
                "icon-bottom",
                "Arth",
                "https://cdn.discordapp.com/avatars/351760430991147010/a_2abdb638612d5a5a8675e610cb0f71b9.gif?size=2048",
                { + "+hug "; span(classes = "mention") { + "@Heathecliff" }},
                {
                    div(classes = "embed") {
                                div(classes = "embed-pill") {}
                                div(classes = "embed-inner") {
                                    div(classes = "embed-content") {
                                        span(classes = "mention") { + "@Arth" }; + " abraçou "; span(classes = "mention") { + "@Heathecliff" }; + "!"
                                    }

                                    img(src = "https://loritta.website/assets/img/actions/hug/male_x_female/gif_127.gif") {
                                        width = "250"
                                    }
                                }
                            }
                }
            )
}

fun DIV.funnyCommands(locale: BaseLocale, websiteUrl: String) {
    div(classes = "odd-wrapper wobbly-bg") {
        id = "fun-section"

		generateAdOrSponsor(2, "4548744867", "Loritta v2 Funny Commands", true)
		generateAdOrSponsor(3, "4548744867", "Loritta v2 Funny Commands", false)

        /* div(classes = "funny-commands") {
        div {
            div(classes = "marquee") {
                div(classes = "scroller") {
                    headerCommands()
                }
            }

            div(classes = "marquee marquee2") {
                div(classes = "scroller") {
                    headerCommands()
                }
            }
        }
        } */
        
        div(classes = "media") {
            div(classes = "media-figure") {
                imgSrcSet(
					"https://canary.loritta.website${versionPrefix}/assets/img/home/",
					"lori_commands.png",
					"(max-width: 800px) 50vw, 15vw",
					791,
					191,
					100
				)    
            }
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h1 {
                            + locale["website.home.funnyCommands.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.home.funnyCommands.description")) {
						p {
							+ str
						}
					}
                }
            }
        }
    }
}


fun DIV.funnyCommandsBrasil(locale: BaseLocale, websiteUrl: String) {
    div(classes = "odd-wrapper wobbly-bg") {
        id = "fun-section"

		generateAdOrSponsor(2, "4548744867", "Loritta v2 Funny Commands", true)
		generateAdOrSponsor(3, "4548744867", "Loritta v2 Funny Commands", false)

        /* div(classes = "funny-commands") {
        div {
            div(classes = "marquee") {
                div(classes = "scroller") {
                    headerCommands()
                }
            }

            div(classes = "marquee marquee2") {
                div(classes = "scroller") {
                    headerCommands()
                }
            }
        }
        } */
        
        div(classes = "media") {
            div(classes = "media-figure") {
                imgSrcSet(
					"https://canary.loritta.website${versionPrefix}/assets/img/home/",
					"lori_commands.png",
					"(max-width: 800px) 50vw, 15vw",
					791,
					191,
					100
				)    
            }
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    
                    div {
                        style = "text-align: center;"
                        h1 {
                            + "Memes Brasileiros em um Bot Brasileiro"
                        }
                    }

                    p {
                        + "Não tem graça usar bots de entreterimento gringos se você não entende nada dos memes que eles fazem, seus membros não entendem nada e você só solta aquela risadinha de \"eu não entendi mas ok\"."
                    }
                    p {
                        + "Por isto eu possui vários comandos diferentes e engraçados para você se divertir e ter gargalhadas com eles! Faça seus próprios memes comigo, sem você precisar do conforto do seu servidor no Discord!"
                    }
                    ul {
                        li {
                            + "Faça montagens com o Bolsonaro com "
                            code {
                                + "+bolsonaro"
                            }
                        }
                        li {
                            + "Destrua seus piores inimigos no cepo de madeira com o "
                            code {
                                + "+cepo"
                            }
                        }
                        li {
                            + "Imagine como você aparecia no Treta News com o "
                            code {
                                + "+tretanews"
                            }
                        }
                        li {
                            + "Tá pegando fogo bicho! Invoque o Faustão no seu servidor com "
                            code {
                                + "+faustão"
                            }
                        }
                        li {
                            + "É pá vê ou pá cume? Piadas de Tiozão no "
                            code {
                                + "+tiodopave"
                            }
                        }
                        li {
                            + "O SAM é brabo? Coloque a marca da água da South America Memes em seus memes de qualidade duvidosa com "
                            code {
                                + "+sam"
                            }
                            + " e pegue memes também de qualidade duvidosa com "
                            code {
                                + "+randomsam"
                            }
                        }
                        li {
                            + "ata com "
                            code {
                                + "+ata"
                            }
                        }
                        li {
                            + "E muito mais! Veja todos na minha "
                            a(href = "$websiteUrl/commands") {
                                + "lista de comandos"
                            }
                            + "."
                        }
                    }


div {
    style = "text-align: center;"
    img(src = "$websiteUrl${versionPrefix}/assets/img/bolsonaro_tv_add_lori.png") {}
}

                }
            }
        }
    }
}
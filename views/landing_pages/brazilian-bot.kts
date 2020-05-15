@extends 'has_footer.kts'

@import 'lori_test.kts'
@import 'home/trust.kts'
@import 'home/funny-commands.kts'
@import 'home/chit-chat.kts'
@import 'home/music.kts'
@import 'home/moderation.kts'
@import 'home/notify.kts'
@import 'home/customization.kts'
@import 'home/community.kts'
@import 'home/much-more.kts'
@import 'home/make-it-awesome.kts'
@import 'home/thank-you.kts'

override fun getTitle(@args) = "Apenas um simples bot brasileiro para o Discord"

override fun DIV.generateContent(@args) {
		div {
			id = "jumbotron"

			div {
				id = "loritta-selfie" 
				// Ordem: Do primeiro (a base) para o último
				img(src = "${websiteUrl}/v2/assets/img/loritta_bandeira.png") {}
				img(src = "${websiteUrl}/v2/assets/img/loritta_bandeira_dark.png", classes = "dark-sweater-pose") {}
				img(src = "${websiteUrl}/v2/assets/img/loritta_bandeira_blink.png", classes = "blinking-pose") {}
				img(src = "${websiteUrl}/v2/assets/img/loritta_bandeira_blush.png", classes = "blushing-pose") {}
			}

			div(classes = "right-side-text") {
				div(classes = "introduction") {
					div(classes = "my-name-is invisible") {
						+ locale["website.jumbotron.hello"]
					}
					div(classes = "loritta invisible") {
						+"Loritta"
					}
					div(classes = "tagline invisible") {
						+ "Apenas um simples bot brasileiro para o Discord"
					}
				}
				div(classes = "buttons") {
					a(classes = "add-me button pink shadow big", href = com.mrpowergamerbr.loritta.LorittaLauncher.loritta.discordInstanceConfig.discord.addBotUrl) {
						img(classes = "lori-happy", src = "${websiteUrl}$versionPrefix/assets/img/lori_happy.gif")
						i(classes = "fas fa-plus") {}

						+ " ${locale["website.jumbotron.addMe"]}"
					}

					a(classes = "button light-green shadow big", href = "#about-me") {
						i(classes = "fas fa-star") {}

						+ " ${locale["website.jumbotron.moreInfo"]}"
					}
				}
			}

			div(classes = "bouncy-arrow") {
				i(classes = "fas fa-chevron-down")
			}
		}
	
		div { id = "about-me" }
		div(classes = "odd-wrapper") {
			generateAdOrSponsor(0, "8349707350", "Loritta v2 Below Header", true)
			generateAdOrSponsor(1, "8349707350", "Loritta v2 Below Header", false)
			generateHowToSponsorButton(locale)

			div(classes = "media") {
				div(classes = "media-body") {
					div {
						style = "text-align: center;"

						h1 {
							// style = "font-size: 3.125rem;"
							+ "Um bot para o Discord, totalmente em português!"
						}

						p {
							style = "font-size: 1.25em; text-align: left;"
							span {
								style = "text-decoration: underline dotted #fe8129;"
								+ locale["website.home.intro.everyServer"]
							}
							+ " Você passa horas procurando um bot perfeito para o seu servidor, mas todos que você encontra são gringos e não possuem tradução... e você apenas queria um bot em português para o seu servidor."
						}
					}

					div {
						style = "text-align: left;"

						p {
							+ "Divirta-se em vez de perder seu tempo com tranqueiras de bobagens! Com vários comandos e memes que apenas os verdadeiros brasileiros irão entender, você e os seus membros irão passar horas gargalhando e se entrentendo com funções que você jamais viu antes!"
						}

						p {
							+ "Configure o seu servidor com sistemas de Bem-Vindo, Level Up por Experiência, Autorole, Moderação, Contador de Membros... a lista de funcionalidades é extensa, tudo para você deixar o seu servidor exatamente como ele é nos seus sonhos!"
						}

						p {
							+ "E tudo graças a uma garotinha brasileira de 16 anos querendo transformar o mundo em um lugar melhor!"
						}
					}

					p {
						style = "font-size: 1.25em; text-align: center; text-decoration: underline dotted #fe8129;"
						+ "Um bot feito por brasileiros, para brasileiros. Deixar o seu servidor único e extraordinário nunca foi tão fácil!"
					}
				}
				div(classes = "media-figure") {
					imgSrcSet(
						"${websiteUrl}${versionPrefix}/assets/img/home/",
						"lori_gabi.png",
						"(max-width: 800px) 50vw, 15vw",
						1278,
						178,
						100
					)
				}
			}
		}

		trustBrasil(locale)
		funnyCommandsBrasil(locale, websiteUrl)

		div(classes = "even-wrapper wobbly-bg") {
			style = "text-align: center;"

			div(classes = "media") {
				div(classes = "media-figure") {
					div {
						style = "position: relative;"
						imgSrcSet(
							"https://canary.loritta.website${versionPrefix}/assets/img/home/",
							"lori_notification.png",
							"(max-width: 800px) 50vw, 15vw",
							1182,
							1180,
							100
						)
						imgSrcSet(
							"https://canary.loritta.website${versionPrefix}/assets/img/home/",
							"lori_notification_video.png",
							"(max-width: 800px) 50vw, 15vw",
							1182,
							1180,
							100
						) {
							classes = setOf("icon-middle")
							style = "position: absolute; top: 0; left: 0;"
						}
					}      
				}

				div(classes = "media-body") {
					div {
						style = "text-align: left;"

						div {
							style = "text-align: center;"
							h1 {
								+ locale["website.home.notify.title"]
							}
						}

						for (str in locale.getWithType<List<String>>("website.home.notify.description")) {
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
						style = "text-align: left;"

						div {
							style = "text-align: center;"
							h1 {
								+ "O bot que \"trollou\" o Drawn Mask"
							}
						}

						p {
							+ "Lembra do vídeo do Drawn Mask? Então, era eu. Sim, eu mesma. E eu estou aqui, vivinha, em carne, parafusos e ossos! E mesmo depois daquela trollagem, o Drawn Mask ainda gosta de mim."
						}
						p {
							+ "Para os fãs do Drawn Mask eu tenho comandos exclusivos para vocês: "
						}
						code {
							+ "+drawnmasksign"
						}
						+ ", "
						code {
							+ "+drawnword"
						}
						+ " e "
						code {
							+ "+atendente"
						}

						p {
							+ "Afinal, nada mais justo depois daquela trollagem, né? hihihi~"
						}

						div {
							style = "text-align: center;"
							img(src = "$websiteUrl${versionPrefix}/assets/img/drawn_mask_placa_sad_cat.png") {
								width = "200"
							}
						}
					}
				}

				div(classes = "media-figure") {
					img(src = "https://loritta.website/assets/img/fanarts/Loritta_Thumbnail_-_Drawn_Mask.png") {
						style = "border-radius: 7px;"
					}
				}
			}
		}

		// chitChat(locale, websiteUrl)
		// music(locale, websiteUrl)
		// moderation(locale, websiteUrl)
		// notify(locale)
		// customization(locale)
		// community(locale)
		muchMore(locale)
		makeItAwesome(locale, true)
		// thankYou(locale)
}
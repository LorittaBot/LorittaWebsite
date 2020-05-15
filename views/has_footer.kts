@extends 'has_navbar.kts'
@type 'abstract'

override fun BODY.generateAfterContent(@args) {
    val base = "/${locale.path}"
    
        footer {
            div {
                div(classes = "social-networks") {
                    a(href = "https://github.com/LorittaBot") {
                        i(classes = "fab fa-github") {}
                    }

                    a(href = "https://twitter.com/LorittaBot") {
                        i(classes = "fab fa-twitter") {}
                    }

                    a(href = "https://instagram.com/lorittabot") {
                        i(classes = "fab fa-instagram") {}
                    }
                }

                nav(classes = "navigation-footer") {
                    div(classes = "section-entry") {
                        h3 {
                            + "Loritta Bot"
                        }

                        a(href = "$base/") {
                            attributes["data-enable-link-preload"] = "true"
                            + locale["website.navbar.home"]
                        }
                        a(href = "$base/discord-bot-brasileiro") {
                            attributes["data-enable-link-preload"] = "true"
                            + "Loritta: Apenas um simples bot brasileiro para o Discord"
                        }
                        a(href = "$base/dashboard") {
                            + locale["website.navbar.dashboard"]
                        }
                        a(href = "$base/support") {
                            attributes["data-enable-link-preload"] = "true"
                            + locale["website.navbar.support"]
                        }
                        a(href = "$base/commands") {
                            attributes["data-enable-link-preload"] = "true"
                            + locale["modules.sectionNames.commands"]
                        }
                        a(href = "$base/donate") {
                            attributes["data-enable-link-preload"] = "true"
                            + "Premium"
                        }
                        a(href = "$base/sponsors") {
                            attributes["data-enable-link-preload"] = "true"
                            + locale["website.navbar.sponsors"]
                        }
                        a(href = "$base/daily") {
                            + "Daily"
                        }
                        a(href = "$base/extras/about-loritta-bot") {
                            + "Sobre a Loritta (Bot)"
                        }
                    }

                    div(classes = "section-entry") {
                        h3 {
                            + "Loritta Morenitta"
                        }

                        a(href = "$base/extras/about-loritta-character") {
                            + "Sobre a Loritta (Personagem)"
                        }
                        a(href = "$base/fanarts") {
                            attributes["data-enable-link-preload"] = "true"
                            + "Fan Arts"
                        }
                        a(href = "$base/blog") {
                            attributes["data-enable-link-preload"] = "true"
                            + "Blog"
                        }
                        a(href = "https://produto.mercadolivre.com.br/MLB-1366127151-caneca-pster-da-loritta-morenitta-novembro-2019-_JM?quantity=1") {
                            + "Merch"
                        }
                    }

                    div(classes = "section-entry") {
                        h3 {
                            + locale["website.footer.sectionTitles.resources"]
                        }

                        a(href = "$base/guidelines") {
                            attributes["data-enable-link-preload"] = "true"
                            + locale["website.guidelines.communityGuidelines"]
                        }

                        a(href = "$base/privacy") {
                            + "${locale["website.footer.sectionNames.termsOfService"]} & ${locale["website.footer.sectionNames.privacyPolicy"]}"
                        }
                    }

                    div(classes = "section-entry") {
                        h3 {
                            + locale["website.footer.sectionTitles.beyondLoritta"]
                        }

                        a(href = "https://sparklypower.net/") {
                            + "SparklyPower: Servidor de Minecraft"
                        }

                        a(href = "https://perfectdreams.net/") {
                            + "PerfectDreams"
                        }

                        a(href = "https://mrpowergamerbr.com/") {
                            + "MrPowerGamerBR Website"
                        }
                    }
                }

                p {
                    style = "text-align: center;"

                    + "© "
                    + "MrPowerGamerBR"
                    + " & "
                    + "PerfectDreams"
                    + " "
                    + "2017-"
                    script {
                        unsafe {
                            raw("""document.write(new Date().getFullYear());""") 
                        }
                    }
                    + " — "
                    + locale["website.footer.allRightsReserved"]
                }

                hr {}

                div(classes = "call-to-action-footer") {
                    div(classes = "lets-transform") {
                        h2 {
                            + locale["website.home.makeItAwesome.title"]
                        }
                        h3 {
                            + locale["website.footer.joinUsAndAddLoritta"]
                        }
                    }
                    div(classes = "add-cta") {
                        a(classes = "add-me button pink shadow big", href = com.mrpowergamerbr.loritta.LorittaLauncher.loritta.discordInstanceConfig.discord.addBotUrl) {
                            style = "font-size: 1.5em;"

                            i(classes = "fas fa-plus") {}

                            + " ${locale["website.jumbotron.addMe"]}"
                        }
                    }
                }
            }
    }
}
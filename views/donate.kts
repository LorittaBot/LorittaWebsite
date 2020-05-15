@extends 'has_footer.kts'

override fun getTitle(@args) = locale["website.donate.title"]

override fun DIV.generateContent(@args) {	
    div(classes = "odd-wrapper") {

        div {
            style = "text-align: center;"
             h1(classes = "sectionHeader") {
                style = "font-size: 50px;"
                + locale["website.donate.needYourHelp"]
            }

            h2(classes = "sectionHeader") {
                style = "font-size: 30px;"
                + locale["website.donate.stayAwesome"]
            }
        }

        div(classes = "media") {
            div(classes = "media-figure") {
                img(src = "${websiteUrl}/assets/img/loritta_pobre.png", alt = "Loritta Pobre") {}
            }

            div(classes = "media-body") {
                h2(classes = "sectionHeader") {
                    + locale["website.donate.title"]
                }

                for (text in locale.getWithType<List<String>>("website.donate.introDonate")) {
                    p {
                        unsafe {
                            + text
                        }
                    }
                }

                div {
                    style = "text-align: center;"

                    if (userIdentification == null) {
                        var redirectUrl = loritta.instanceConfig.loritta.website.url + "donate"
                          
                        val state = com.github.salomonbrys.kotson.jsonObject(
                            "redirectUrl" to redirectUrl
                        )

                        a(href = (loritta.discordInstanceConfig.discord.authorizationUrl + "&state=${java.util.Base64.getEncoder().encodeToString(state.toString().toByteArray()).encodeToUrl()}")) {
                            id = "login-for-donate-url"

                            div(classes = "button-discord button-discord-info pure-button") {
                                style = "font-size: 1.5em;"

                                                
                                i(classes = "fas fa-gift") {}
                                + " ${locale["website.donate.donateNow"]}"
                            }
                        }
                    } else {
                        div(classes = "button-discord button-discord-info pure-button") {
                            id = "donate-button"
                            style = "font-size: 1.5em;"

                            i(classes = "fas fa-gift") {}
                                + " ${locale["website.donate.donateNow"]}"
                            }
                        }
                    }

                    div {
                        style = "text-align: center; margin: 8px;"

                        video {
                            controls = true
                            width = "400"
                            source {
                                src = "https://cdn.discordapp.com/attachments/510601125221761054/534473346642083851/Lorisemdinheiro.mp4"
                                type = "video/mp4"
                            }
                            + "Your browser does not support HTML5 video."
                            }
                        }
                }
            }
        }

    div(classes = "even-wrapper wobbly-bg") {
        div(classes = "media") {
            div(classes = "vertically-centered-content") {
                style = "max-width: 100%;"
                div(classes = "sectionText") {
                    div {
                        style = "text-align: center;"
                        h2(classes = "sectionHeader") {
                            + locale["website.donate.donationBenefits"]
                        }

                        p { 
                            + locale["website.donate.benefitsExplain"]
                        }

                        p {
                            a(href = "/sponsors", target = "_blank") {
                                + locale["website.donate.benefitsSponsor"]
                            }
                        }
                    }

                    div(classes = "sectionText") {
                        div {
                            style = "text-align: center;"
                            h2(classes = "sectionHeader") {
                                + "Nossos Planos"
                            }
                        }
                    }
                    
                    div(classes = "fancy-table") {
                        id = "plans-features"
                        style = "margin: 0 auto"
                    }

                    div(classes = "sectionText") {
                        div {
                            style = "text-align: center;"
                            h2(classes = "sectionHeader") {
                                + "Todos os Benefícios"
                            }
                        }
                    }

                    hr {}

                    div(classes = "fancy-table") {
                        id = "donate-features"
                    }
                }
            }
        }
    }

    div(classes = "odd-wrapper wobbly-bg") {
        div(classes = "content-wrapper") {
            style = "max-width: 100%;"
            div(classes = "sectionText") {
                style = "text-align: center;"
                h2(classes = "sectionHeader") {
                    + locale["website.donate.thanksToEveryone"]
                }

                img(src = "https://loritta.website/assets/img/loritta_pudim.png", alt = "Loritta com um pudim na mão", classes = "animate-on-scroll-up is-invisible") {
                    height = "300"
                }
            }
        }
    }

    div {
        id = "donation-keys-json"
        style = "display: none;"

        unsafe {
            + keys.toString()
        }
    }
}
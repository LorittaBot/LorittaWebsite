fun onLoad(locale: BaseLocale, userIdentification: LorittaJsonWebSession.UserIdentification?, activeDonators: List<User>): HtmlBlockTag.() -> Unit = {
    div(classes = "odd-wrapper") {
        div(classes = "content-wrapper") {
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

                div(classes = "vertically-centered-content") {
                    div(classes = "pure-g vertically-centered-content") {
                        style = "text-align: left;"

                        div(classes = "pure-u-1 pure-u-md-1-4") {
                            img(src = "https://loritta.website/assets/img/loritta_pobre.png", alt = "Loritta Pobre", classes = "animate-on-scroll-left is-invisible") {
                                style = "width: 100%;"
                            }
                        }
                        div(classes = "pure-u-1 pure-u-md-3-4") {
                            div(classes = "sectionText") {
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
                }
            }
        }
    }

    div(classes = "even-wrapper") {
        div(classes = "content-wrapper") {
            div(classes = "vertically-centered-content") {
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

                    script {
                        unsafe {
                            raw("""this["loritta-parent-spicy-morenitta"].net.perfectdreams.spicymorenitta.views.DonateView.start()""")
                        }
                    }
                }
            }
        }
    }

    div(classes = "odd-wrapper") {
        div(classes = "content-wrapper") {
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

    val keys = jsonArray()

    if (userIdentification != null) {
        val donationKeys = transaction(Databases.loritta) { // Pegar keys ativas
            DonationKey.find {
                (DonationKeys.expiresAt greaterEq System.currentTimeMillis()) and (DonationKeys.userId eq userIdentification.id.toLong())
            }.toMutableList()
        }

        for (donationKey in donationKeys) {
            keys.add(
                jsonObject(
                    "id" to donationKey.id.value,
                    "value" to donationKey.value,
                    "expiresAt" to donationKey.expiresAt
                )
            )
        }
    }

    div(classes = "totallyHidden") {
        id = "donation-keys-json"

        unsafe {
            + keys.toString()
        }
    }
}

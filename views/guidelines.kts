@extends 'has_footer.kts'

override fun getTitle(@args) = locale["website.guidelines.communityGuidelines"]

override fun DIV.generateContent(@args) {
    val otherGuidelines = mapOf(
        "Discord" to "https://discordapp.com/guidelines",
        "Twitter" to "https://help.twitter.com/en/rules-and-policies/twitter-rules",
        "Amino" to "https://support.aminoapps.com/hc/en-us/articles/360022679554-Community-Guidelines"
    )
    div(classes = "even-wrapper") {
		div(classes = "media") {
            div(classes = "media-figure") {
                img(src = "https://loritta.website/assets/img/fanarts/l1.png") {}
            }
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h2 {
                            + locale["website.guidelines.intro.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.guidelines.intro.description")) {
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
                        h2 {
                            + locale["website.guidelines.whatYouCanDo.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.guidelines.whatYouCanDo.description")) {
                        ul {
                            li {
                                + str.replace(" {platforms}", "")
                            }

                            if (str.endsWith("{platforms}")) {
                                ul {
                                    for ((platform, link) in otherGuidelines) {
                                        li {
                                            strong {
                                                + "${platform}: "
                                            }

                                            a(href = link) {
                                                + link
                                            }
                                        }
                                    }
                                }
                            }
                        }
					}
                }
            }
            div(classes = "media-figure") {
                img(src = "https://loritta.website/assets/img/fanarts/Loritta_Girando_-_Heathecliff.png") {}
            }
        }
    }
    div(classes = "even-wrapper wobbly-bg") {
		div(classes = "media") {
            div(classes = "media-figure") {
                img(src = "https://loritta.website/assets/img/fanarts/l6.png") {}
            }
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h2 {
                            + locale["website.guidelines.prohibited.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.description")) {
                        ul {
                            li {
                                + str.replace(" {platforms}", "")
                                    .replace(" {disrespect}", "")
                                    .replace(" {breaking}", "")
                                    .replace(" {beyourself}", "")
                            }

                            if (str.endsWith("{platforms}")) {
                                ul {
                                    for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.onPlatformBreak")) {
                                        li {
                                            + str
                                        }
                                    }
                                }
                            }

                            if (str.endsWith("{disrespect}")) {
                                ul {
                                    for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.disrespect")) {
                                        li {
                                            + str
                                        }
                                    }
                                }
                            }

                            if (str.endsWith("{breaking}")) {
                                ul {
                                    for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.breaking")) {
                                        li {
                                            + str
                                        }
                                    }
                                }
                            }

                            if (str.endsWith("{beyourself}")) {
                                ul {
                                    for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.beYourself")) {
                                        li {
                                            + str.replace(" {fanarts}", "").replace(" {notjoke}", "")
                                        }

                                        if (str.endsWith("{fanarts}")) {
                                            ul {
                                                for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.useFanArts")) {
                                                    li {
                                                        + str
                                                    }
                                                }
                                            }
                                        }

                                        if (str.endsWith("{notjoke}")) {
                                            ul {
                                                for (str in locale.getWithType<List<String>>("website.guidelines.prohibited.notJoke")) {
                                                    li {
                                                        + str
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
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
                        h2 {
                            + locale["website.guidelines.whatWillHappenIf.title"]
                        }
                    }

                    p {
                        + locale["website.guidelines.whatWillHappenIf.ifYouBreak"]
                    }

                    ul {
                        for (str in locale.getWithType<List<String>>("website.guidelines.whatWillHappenIf.punishments")) {
						    li {
						    	+ str
						    }
					    }
                    }

                    for (str in locale.getWithType<List<String>>("website.guidelines.whatWillHappenIf.description")) {
						p {
						    + str
						}
					}
                }
            }
            div(classes = "media-figure") {
                img(src = "https://loritta.website/assets/img/fanarts/l4.png") {}
            }
        }
    }
}
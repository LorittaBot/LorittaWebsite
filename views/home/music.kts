fun DIV.music(locale: BaseLocale, websiteUrl: String) {
    div(classes = "odd-wrapper wobbly-bg") {  
        div(classes = "media") {
            div(classes = "media-figure") {
                img(src = "https://cdn.discordapp.com/attachments/510601125221761054/567480019639730176/lorota_muisics.png") {}
            }

            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h1 {
                            + locale["website.home.music.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.home.music.description")) {
						p {
							+ str
						}
					}
                }
            }
        }
    }
}
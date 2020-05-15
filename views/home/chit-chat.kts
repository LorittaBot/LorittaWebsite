fun DIV.chitChat(locale: BaseLocale, websiteUrl: String) {
    div(classes = "even-wrapper wobbly-bg") {        
        div(classes = "media") {
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h1 {
                            + locale["website.home.chitChat.title"]
                        }
                    }

                    for (str in locale.getWithType<List<String>>("website.home.chitChat.description")) {
						p {
							+ str
						}
					}
                }
            }

            div(classes = "media-figure") {
                imgSrcSet(
					"https://canary.loritta.website${versionPrefix}/assets/img/home/",
					"lori_prize.png",
					"(max-width: 800px) 50vw, 15vw",
					613,
					113,
					100
				)    
            }
        }
    }
}
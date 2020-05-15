fun DIV.community(locale: BaseLocale) {
    div(classes = "odd-wrapper wobbly-bg") {
		style = "text-align: center;"

		generateAd("8109140955", "Loritta v2 Community", true)
		// generateAd("8109140955", "Loritta v2 Community", false)

 		div(classes = "media") {
            div(classes = "media-figure") {
                imgSrcSet(
					"https://canary.loritta.website${versionPrefix}/assets/img/home/",
					"lori_community.png",
					"(max-width: 800px) 50vw, 15vw",
					768,
					168,
					100
				)    
            }

            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h1 {
                            + locale["website.home.community.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.home.community.description")) {
						p {
							+ str
						}
					}
                }
            }
        }
	}
}
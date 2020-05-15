fun DIV.notify(locale: BaseLocale) {
    div(classes = "odd-wrapper wobbly-bg") {
		style = "text-align: center;"

		generateAd("6600193137", "Loritta v2 Digital Influencers", true)

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
}
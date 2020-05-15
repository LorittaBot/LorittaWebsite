fun DIV.moderation(locale: BaseLocale, websiteUrl: String) {
    div(classes = "even-wrapper wobbly-bg") {
		style = "text-align: center;"

 		div(classes = "media") {
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h1 {
                            + locale["website.home.moderation.title"]
                        }
                    }

					for (str in locale.getWithType<List<String>>("website.home.moderation.description")) {
						p {
							+ str
						}
					}
                }
            }

            div(classes = "media-figure") {   
				img(src = "${websiteUrl}$versionPrefix/assets/img/lori_police.png") {}         
            }
        }
	}
}
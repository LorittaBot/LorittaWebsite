@extends 'has_footer.kts'

override fun getTitle(@args) = "404"

override fun DIV.generateContent(@args) {
    div(classes = "odd-wrapper") {
		style = "text-align: center;"

        div(classes = "media single-column") {
            div(classes = "media-body") {
                div {
                    style = "text-align: center;"

                    img(src = "https://loritta.website/assets/img/fanarts/l4.png") {
                        width = "175"
                    }

                    h1 {
                        + locale["website.error404.title"]
                    }

                    for (str in locale.getWithType<List<String>>("website.error404.description")) {
                        p {
                            + str
                        }
                    }
                }
            }
        }
    }
}
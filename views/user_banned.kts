@extends 'has_footer.kts'

override fun getTitle(@args) = "¯\\_(ツ)_/¯"

override fun DIV.generateContent(@args) {
    div(classes = "odd-wrapper") {
		style = "text-align: center;"

        div(classes = "media single-column") {
            div(classes = "media-body") {
                div {
                    style = "text-align: center;"

                    img(src = "https://loritta.website/assets/img/fanarts/l6.png") {
                        width = "175"
                    }

                    h1 {
                        + locale["website.userBanned.title"]
                    }

                    for (str in locale.getWithType<List<String>>("website.userBanned.description")) {
                        p {
                            + str
                        }
                    }
                    p {
                        code {
                            + (profile.bannedReason ?: "¯\\_(ツ)_/¯")
                        }
                    }
                }
            }
        }
    }
}
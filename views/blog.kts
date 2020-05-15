@extends 'has_footer.kts'

override fun getTitle(@args) = "Blog"

override fun DIV.generateContent(@args) {
    div(classes = "odd-wrapper") {
		style = "text-align: center;"

        div(classes = "media single-column") {
            div(classes = "media-body") {
                for (post in posts) {
                    p {
                        a(href = "/${locale["website.localePath"]}/blog/${post.slug}") {
                            + post.title
                        }
                    }
                }
            }
        }
    }
}
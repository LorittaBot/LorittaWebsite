fun DIV.thankYou(locale: BaseLocale) {
    div(classes = "even-wrapper wobbly-bg") {
		style = "text-align: center;"

        h1 {
            + locale["website.home.thankYou.title"]
        }
        
        div(classes = "media") {
            div(classes = "media-figure") {   
				img(src = "https://www.yourkit.com/images/yklogo.png") {}         
            }

            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h2 {
                            + "YourKit"
                        }
                    }
                    p {
                        + "YourKit supports open source projects with its full-featured Java Profiler. YourKit, LLC is the creator of "; a(href = "https://www.yourkit.com/java/profiler/") { + "YourKit Java Profiler" }; + " and "; a(href = "https://www.yourkit.com/.net/profiler/") { + "YourKit .NET Profiler" }; + " innovative and intelligent tools for profiling Java and .NET applications."
                    }
                }
            }
        }

        /* div(classes = "cards") {
            div {
                img(src = "https://cdn.worldvectorlogo.com/logos/kotlin-2.svg") {}
            }
            div {
                img(src = "https://camo.githubusercontent.com/f2e0860a3b1a34658f23a8bcea96f9725b1f8a73/68747470733a2f2f692e696d6775722e636f6d2f4f4737546e65382e706e67") {}
            }
            div {
                img(src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/1024px-IntelliJ_IDEA_Logo.svg.png") {}
            }
            div {
                img(src = "https://ktor.io/assets/images/ktor_logo_white.svg") {}
            }
        } */
	}
}
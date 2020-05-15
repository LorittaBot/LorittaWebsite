fun DIV.muchMore(locale: BaseLocale) {
    div(classes = "even-wrapper wobbly-bg") {
		style = "text-align: center;"

        h1 {
            + locale["website.home.muchMore.title"]
        }

        /* div(classes = "cards") {
            repeat(20) {
            div {
                + "owo"
            }
            div {
                + "uwu"
            }
            }
        } */
        
        br {}
        br {}
        br {}
	}
}
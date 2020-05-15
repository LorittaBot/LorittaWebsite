fun onLoad(test: String): HtmlBlockTag.() -> Unit = {
	div {
		p {
			+ "Hello World! ${test}"
		}
		p {
			+ "Isto é outro parágrafo!"
		}
		img(src = "https://i.imgur.com/Mv5r7oX.png")
	}
}
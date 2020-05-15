@extends 'base.kts'

override fun getTitle(@args) = "Audio Recording"

override fun HTML.generateBody(@args) {
    body {
        div {
            id = "loading-screen"
            img(src = "https://loritta.website/assets/img/loritta_loading.png", alt = "Loading Spinner")
            div(classes = "loading-text") {
                + "Carregando..."
            }
        }
        style {
            unsafe {
                raw("""body { background-color: #26262b; }""")
            }
        }
        div {
            id = "audio-recorder-wrapper"
        }
    }
}
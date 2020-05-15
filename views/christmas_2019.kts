@extends 'base.kts'

override fun HTML.generateBody(@args) {
    body {
        div {
            id = "loading-screen"
            img(src = "https://loritta.website/assets/img/loritta_loading.png", alt = "Loading Spinner")
            div(classes = "loading-text") {
                + "Carregando..."
            }
        }
    }
}
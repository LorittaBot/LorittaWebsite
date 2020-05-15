@extends 'base.kts'

override fun getTitle(@args) = "Translate Tool"

override fun HTML.generateBody(@args) {
    body {
    style {
        unsafe {
            raw("""
#entries-sidebar {
    width: 25vw;
    overflow: auto;
}

#entries-sidebar .locale-entry {
    padding: 7px;
    border-bottom: 1px #0000003d solid;
    cursor: pointer;
}

#entries-sidebar .not-edited {
    background-color: #ff00008f; padding: 7px; color: white;
}

#entries-sidebar .edited-on-this-session {
    background-color: #00ff648f; padding: 7px; color: white;
}

#edit-sidebar {
    width: 75vw;
    overflow: auto;
}

#edited-locale {
    width: 100%;
    box-sizing: border-box;
}

#original-locale-key {
    opacity: 0.3;
}""")
        }
    }

        div(classes = "navigation-bar") {
            id = "navigation-bar"

            val base = "/${locale.path}"

            div(classes = "left-side-entries") {
                a {
                    style = "display: block;"
                    id = "filter-missing"
                    i(classes = "fas fa-exclamation-triangle") {}
                }

                a {
                    style = "display: block;"
                    id = "upload-json"
                    i(classes = "fas fa-file-upload") {}
                }

                a {
                    style = "display: block;"
                    id = "download-json"
                    i(classes = "fas fa-file-download") {}
                }
            }

            div(classes = "right-side-entries") {
                a(href = "https://twitter.com/LorittaBot", classes = "social-media-link") {
                    attributes["target"] = "_blank"

                    i(classes = "fab fa-twitter") {}
                }
                a(href = "https://instagram.com/lorittabot/", classes = "social-media-link") {
                    attributes["target"] = "_blank"

                    i(classes = "fab fa-instagram") {}
                }
                a(classes = "locale-changer") {
                    id = "locale-changer-button"

                    i(classes = "fas fa-language") {}
                }
                a(classes = "theme-changer") {
                    id = "theme-changer-button"

                    i(classes = "fas fa-moon") {}
                }
                a {
                    id = "login-button"
                    i(classes = "fas fa-sign-in-alt") {}

                    + " Login"
                }
                a(classes = "hamburger-menu") {
                    id = "hamburger-menu-button"

                    i(classes = "fas fa-bars") {}
                }
            }
        }
        input(type = InputType.file) {
            id = "upload-json-input"
            style = "display: none;"
        }
        div {
            id = "dummy-navbar"
            style = "height: 46px;"
        }
        div {
            id = "loading-screen"
            img(src = "https://loritta.website/assets/img/loritta_loading.png", alt = "Loading Spinner")
            div(classes = "loading-text") {
                + "Carregando..."
            }
        }
        div(classes = "fade-in-up half-second animated invisible") {
            id = "not-saved-alert"

            + "Cuidado - Você tem mudanças não salvas!"
        }
        div {
            id = "content"
        }
    }
}
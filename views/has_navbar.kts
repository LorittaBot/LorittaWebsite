@extends 'base.kts'
@type 'abstract'

override fun HTML.generateBody(@args) {
    val base = "/${locale.path}"

    body {
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
        div(classes = "navigation-bar") {
            id = "navigation-bar"

            div(classes = "left-side-entries") {
                div(classes = "entry loritta-navbar-logo") {
                    a(classes = "home-page", href = "$base/") {
                        style = "font-family: 'Pacifico', cursive; text-transform: none;"

                        attributes["data-enable-link-preload"] = "true"

                        +"Loritta"
                    }
                }

                div(classes = "entry") {
                    a(classes = "support", href = "$base/support") {
                        i(classes = "fab fa-discord") {}

                        attributes["data-enable-link-preload"] = "true"

                        +" ${locale["website.navbar.support"]}"
                    }
                }

                div(classes = "entry") {
                    a(classes = "fan-arts", href = "$base/fanarts") {
                        i(classes = "fas fa-paint-brush") {}

                        attributes["data-enable-link-preload"] = "true"

                        +" Fan Arts"
                    }
                }

                div(classes = "entry") {
                    a(classes = "donate", href = "$base/donate") {
                        i(classes = "fas fa-gift") {}

                        if (!isOldWebsite)
                            attributes["data-enable-link-preload"] = "true"

                        +" Premium"
                    }
                }

                div(classes = "entry") {
                    a(classes = "extras", href = "$base/extras") {
                        i(classes = "fas fa-star") {}

                        if (!isOldWebsite)
                            attributes["data-enable-link-preload"] = "true"

                        +" Extras"
                    }
                }

                div(classes = "entry") {
                    a(classes = "blog", href = "$base/blog") {
                        i(classes = "fas fa-newspaper") {}
                        attributes["target"] = "_blank"

                        attributes["data-enable-link-preload"] = "true"

                        +" Blog"
                    }
                }
                
                div(classes = "entry") {
                    a(classes = "sponsors", href = "$base/sponsors") {
                        i(classes = "far fa-kiss-wink-heart") {}

                        attributes["data-enable-link-preload"] = "true"

                        +" ${locale["website.navbar.sponsors"]}"
                    }
                }

                /*  a(classes = "lori-stickers", href = "https://produto.mercadolivre.com.br/MLB-1366127151-caneca-pster-da-loritta-morenitta-novembro-2019-_JM?quantity=1") {
                    i(classes = "fas fa-heart") {}
                    attributes["target"] = "_blank"

                    +" Merch"
                } 
                a(classes = "lori-stickers", href = "$base/extras") {
                    i(classes = "far fa-grin-squint-tears") {}
                    attributes["target"] = "_blank"

                    +" Stickers"
                } */
            }

            div(classes = "right-side-entries") {
                /* a(href = "https://twitter.com/LorittaBot", classes = "social-media-link") {
                    attributes["target"] = "_blank"

                    i(classes = "fab fa-twitter") {}
                }
                a(href = "https://instagram.com/lorittabot/", classes = "social-media-link") {
                    attributes["target"] = "_blank"

                    i(classes = "fab fa-instagram") {}
                } */

                div(classes = "entry") {
                    a(classes = "theme-changer") {
                        id = "theme-changer-button"

                        i(classes = "fas fa-moon") {}
                    }
                }
                div(classes = "entry") {
                    id = "locale-changer-button"
                    style = "cursor: default;"

                    i(classes = "fas fa-globe-americas") {}

                    + " "

                    + locale["loritta.languageShort"]

                    + " "

                    i(classes = "fas fa-chevron-down") {
                        style = "opacity: 0.7;"
                    }

                    div {
                        id = "languages"
                    }
                }

                div(classes = "entry") {
                    a {
                        id = "login-button"
                        i(classes = "fas fa-sign-in-alt") {}

                        + " Login"
                    }
                }
                div(classes = "entry") {
                    id = "hamburger-menu-button"

                    i(classes = "fas fa-bars") {}
                }
            }
        }
        div {
            id = "dummy-navbar"
            style = "height: 46px;"
        }

        div {
            id = "content"

            generateContent(@call-args)
        }

        generateAfterContent(@call-args)
    }
}

abstract fun DIV.generateContent(@args)
open fun BODY.generateAfterContent(@args) {

}
fun generateHtml(@args): Element {
    return document.create.html {
        head {
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/kotlin.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/kotlinx-coroutines-core.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/kotlinx-serialization-runtime-js.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/kotlinx-html-js.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/kotlinx-io.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/kotlinx-coroutines-io.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/ktor-utils.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/ktor-http.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/ktor-client-core.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/ktor-client-js.js") {}
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}/assets/js/output.js") {}
        }
        body {
            div {
                id = "hidden-auth-payload"
                style = "display: none;"
                + userIdentification
            }
        }
    }
}
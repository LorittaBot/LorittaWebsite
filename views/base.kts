@type 'abstract'
@import 'utils.kts'

val versionPrefix = net.perfectdreams.loritta.website.LorittaWebsite.versionPrefix
val isOldWebsite = versionPrefix == "/v2"
fun generateHtml(@args): Element {
    val supportUrl = "https://loritta.website/support"
    val firefoxUrl = "https://www.mozilla.org/firefox"
    val chromeUrl = "https://www.google.com/chrome"
    val edgeUrl = "https://www.microsoft.com/edge"

    return document.create.html {
        head {
            // Usado para login: A SpicyMorenitta usa esse código ao autenticar via "auth_popup.kts"
            // Já que é meio difícil chamar códigos de Kotlin/JS na parent window, existe esse método auxiliar para facilitar.
            // authenticate(p) sendo p = "user identification do Discord"
            // Também tem umas coisinhas do Google reCAPTCHA
            script(type = ScriptType.textJavaScript) {
                unsafe { 
                    raw("""
function authenticate(p) { output.net.perfectdreams.spicymorenitta.utils.AuthUtils.handlePostAuth(p); };

document.domain = "loritta.website";

function onGoogleRecaptchaLoadCallback() { this['loritta-parent-spicy-morenitta'].net.perfectdreams.spicymorenitta.utils.GoogleRecaptchaUtils.onRecaptchaLoadCallback(); };

window.addEventListener('load', function () {
    // Verificar se o usuário está usando o antigo Edge ou MSIE, já que nós não suportamos nenhum desses dois
    // ; MSIE == MS Internet Explorer
    // Trident/7.0 == MSIE11
    if (/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/.test(navigator.userAgent)) {
        alert("${locale.getWithType<List<String>>("website.unsupportedBrowser").joinToString("\\n\\n", transform = { java.text.MessageFormat.format(it, supportUrl, firefoxUrl, chromeUrl, edgeUrl); })}")
    }
    // Verificar se o SpicyMorenitta foi carregado corretamente
    if (window.spicyMorenittaLoaded === undefined) {
        alert("${locale.getWithType<List<String>>("website.failedToLoadScripts").joinToString("\\n\\n", transform = { java.text.MessageFormat.format(it, supportUrl, firefoxUrl, chromeUrl, edgeUrl); })}")
    }
});
""")
                }
            }

            title(getFullTitle(@call-args))

            unsafe {
                raw("""
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#5bbad5" />
""")
            }
			meta(name = "viewport", content = "width=device-width, initial-scale=1")
        
    
            if (false && com.mrpowergamerbr.loritta.LorittaLauncher.loritta.config.loritta.environment == com.mrpowergamerbr.loritta.utils.config.EnvironmentType.CANARY)
                styleLink("${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/css/style.css?v12345")
            else
                styleLink("${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/css/style.css?hash=${assetHash("assets/css/style.css")}")

            styleLink("https://use.fontawesome.com/releases/v5.8.1/css/all.css")
            
            // Google Analytics
            script(src = "https://www.googletagmanager.com/gtag/js?id=UA-53518408-9") {}

            script(type = ScriptType.textJavaScript) {
                unsafe {
                    raw("""window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-53518408-9');""")
                }
            }

            // Detect AdBlock
            script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/adsbygoogle.js") {}

            if (false && com.mrpowergamerbr.loritta.LorittaLauncher.loritta.config.loritta.environment == com.mrpowergamerbr.loritta.utils.config.EnvironmentType.CANARY) {
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/jquery-3.2.1.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/countUp.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/showdown.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/tingle.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/autosize.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/toastr.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/select2.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/moment-with-locales.min.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlin.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlinx-coroutines-core.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlinx-serialization-runtime-js.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlinx-html-js.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlinx-io.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/ktor-ktor-io.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlinx-coroutines-io.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/ktor-ktor-utils.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/ktor-ktor-http.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/ktor-ktor-http-cio.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/ktor-ktor-client-core.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/ktor-ktor-client-js.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/kotlin-logging.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/loritta-parent-loritta-api.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/loritta-parent-spicy-morenitta.js?hash=${assetHash("assets/js/loritta-parent-spicy-morenitta.js")}") {}
            } else {
                // App itself
                script(src = "${LorittaWebsite.INSTANCE.config.websiteUrl}$versionPrefix/assets/js/app.js?hash=${assetHash("assets/js/app.js")}") {}
            }
 
            script(src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js") {}
            script(src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=onGoogleRecaptchaLoadCallback") {}

            for ((websiteLocaleId, localeName) in listOf("br" to "pt-BR", "us" to "en", "es" to "es", "pt" to "pt")) {
                link {
                    attributes["rel"] = "alternate"
                    attributes["hreflang"] = localeName
                    attributes["href"] = "$websiteUrl/$websiteLocaleId/$path"
                }
            }
            
            generateMeta(@call-args)
        }
        generateBody(@call-args)
    }
}

open fun getTitle(@args): String = "¯\\_(ツ)_/¯"
open fun getFullTitle(@args): String = "${getTitle(@call-args)} • Loritta"

open fun HEAD.generateMeta(@args) {
    meta("theme-color", "#00c1df")
	meta(content = locale["website.lorittaWebsite"]) { attributes["property"] = "og:site_name" }
	meta(content = locale["website.genericDescription"]) { attributes["property"] = "og:description" }
	meta(content = getTitle(@call-args)) { attributes["property"] = "og:title" }
	meta(content = "600") { attributes["property"] = "og:ttl" }
	meta(content = "https://loritta.website/assets/img/loritta_gabizinha_v1.png") { attributes["property"] = "og:image"}
}
abstract fun HTML.generateBody(@args)
fun DIV.imgSrcSet(path: String, fileName: String, sizes: String, max: Int, min: Int, stepInt: Int, block : IMG.() -> Unit = {}) {
    var srcsets = mutableListOf<String>()
    val split = fileName.split(".")
    val ext = split.last()

    for (i in (max - stepInt) downTo min step stepInt) {
        // "${websiteUrl}$versionPrefix/assets/img/home/lori_gabi.png 1178w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_1078w.png 1078w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_978w.png 978w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_878w.png 878w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_778w.png 778w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_678w.png 678w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_578w.png 578w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_478w.png 478w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_378w.png 378w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_278w.png 278w, ${websiteUrl}$versionPrefix/assets/img/home/lori_gabi_178w.png 178w"
        srcsets.add("$path${split.first()}_${i}w.$ext ${i}w")
    }

    srcsets.add("$path$fileName ${max}w")

    imgSrcSet(
        "$path$fileName",
        sizes,
        srcsets.joinToString(", "),
        block
    )
}

fun DIV.imgSrcSet(filePath: String, sizes: String, srcset: String, block : IMG.() -> Unit = {})  {
    img(src = filePath) {
		style = "width: 100%;"
		attributes["sizes"] = sizes
		attributes["srcset"] = srcset

        this.apply(block)
	}
}

fun DIV.generateAdOrSponsor(sponsorId: Int, adSlot: String, adName: String? = null, showIfSponsorIsMissing: Boolean = true, showOnMobile: Boolean = true) {
    val sponsor = com.mrpowergamerbr.loritta.LorittaLauncher.loritta.sponsors.getOrNull(sponsorId)

    if (sponsor != null) {
        generateSponsor(sponsor)
    } else if (showIfSponsorIsMissing) {
        generateAd(adSlot, adName, showIfSponsorIsMissing)
    }
}

fun DIV.generateSponsor(sponsor: Sponsor) {
    div(classes = "media") {
        generateSponsorNoWrap(sponsor)
    }
}

fun DIV.generateSponsorNoWrap(sponsor: Sponsor) {
    a(href = "/sponsor/${sponsor.slug}", classes = "sponsor-wrapper", target = "_blank") {
        div(classes = "sponsor-pc-image") {
            img(src = sponsor.getRectangularBannerUrl(), classes = "sponsor-banner")
        }
        div(classes = "sponsor-mobile-image") {
            img(src = sponsor.getSquareBannerUrl(), classes = "sponsor-banner")
        }
    }
}

fun DIV.generateHowToSponsorButton(locale: BaseLocale) {
    div(classes = "media") {
        style = "justify-content: end;"
        div {
            style = "font-size: 0.8em; margin: 8px;"
            + (locale["website.sponsors.wantYourServerHere"] + " ")
            a(href = "/sponsors") {
                span(classes = "sponsor-button") {
                    + "Premium Slots"
                }
            }
        }
    }
}

fun DIV.generateAd(adSlot: String, adName: String? = null, showOnMobile: Boolean = true) {
    // O "adName" não é utilizado para nada, só está aí para que fique mais fácil de analisar aonde está cada ad (caso seja necessário)
    var adGen = "ad-" + adSlot + "-" + System.currentTimeMillis()

    div(classes = "centralized-ad") {
        ins(classes = "adsbygoogle") {
            style = "display: block;"

            if (!showOnMobile)
                attributes["id"] = adGen
            
            attributes["data-ad-client"] = "ca-pub-9989170954243288"
            attributes["data-ad-slot"] = adSlot
            attributes["data-ad-format"] = "auto"
            attributes["data-full-width-responsive"] = "true"
        }
    }

    if (!showOnMobile) {
        script(type = ScriptType.textJavaScript) {
            unsafe { 
                raw("if (document.body.clientWidth >= 1366) { (adsbygoogle = window.adsbygoogle || []).push({}); } else { console.log(\"Not displaying ad: Browser width is too smol!\"); document.querySelector(\"#$adGen\").remove(); }")
            }
        }
    } else {
        script(type = ScriptType.textJavaScript) {
            unsafe { 
                raw("(adsbygoogle = window.adsbygoogle || []).push({});")
            }
        }
    }
}

fun assetHash(asset: String) =  WebsiteAssetsHashes.getAssetHash(asset)
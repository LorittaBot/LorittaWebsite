@extends 'has_footer.kts'

override fun getTitle(@args) = post.title

override fun DIV.generateContent(@args) {
    val emotes = mapOf(
        "notlikelori" to "https://cdn.discordapp.com/emojis/542686098841796609.png?v=1",
        "lori_owo" to "https://cdn.discordapp.com/emojis/417813932380520448.png?v=1",
        "lori_very_owo" to "https://cdn.discordapp.com/emojis/562303822978875403.png?v=1",
        "emojo_sextafeira" to "https://cdn.discordapp.com/emojis/393751206087884820.gif?v=1",
        "lori_ehissoai" to "https://cdn.discordapp.com/emojis/572939778627207168.gif?v=1",
        "lori_wow" to "https://cdn.discordapp.com/emojis/626942886432473098.png?v=1",
        "lori_what" to "https://cdn.discordapp.com/emojis/626942886361038868.png?v=1",
        "gesso" to "https://cdn.discordapp.com/emojis/523233744656662548.png?v=1",
        "sad_cat" to "https://cdn.discordapp.com/emojis/419474182758334465.png?v=1",
        "lori_shrug" to "https://cdn.discordapp.com/emojis/626942886876938243.png?v=1",
        "default_dance" to "https://cdn.discordapp.com/emojis/607213397313847298.gif?v=1",
        "lori_happy" to "https://cdn.discordapp.com/emojis/521721811298156558.gif?v=1",
        "lori_ok_hand" to "https://cdn.discordapp.com/emojis/426183783008698391.png?v=1",
        "lori_rica" to "https://cdn.discordapp.com/emojis/593979718919913474.png?v=1",
        "lori_yay_wobbly" to "https://cdn.discordapp.com/emojis/638040459721310238.gif?v=1",
        "lori_feliz" to "https://cdn.discordapp.com/emojis/519546310978830355.png?v=1"
    )

    div(classes = "post-header") {
        style = "background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2)), url(/assets/img/blog/${post.metadata["image"]});"
    }

                    var postContent = post.content.replace(
                                "{{ friday }}",
                                """
                                <div style="text-align: center;">
                                <p style="font-size: 1.3em;">:lori_ehissoai: Mais uma <span class="rainbow-animated-text">sexta-feira</span>, mais um... :lori_ehissoai:</p>
                                
                                <h2>:emojo_sextafeira: Rolêzinho no shopping com a Loritta! :emojo_sextafeira:</h2>

                                <p><em>:lori_very_owo: O rolêzinho para saber e comentar sobre tudo e mais um pouco que aconteceu nessa semana! :lori_very_owo:</em></p>
                                </div>
                                """
                            ).replace(
                                "{{ ad }}",
                                """
                                <ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-9989170954243288"
     data-ad-slot="9853935995"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
     """
                            )

                    for (entry in emotes.entries) {
                        postContent = postContent.replace(":${entry.key}:", """<img class="inline-emoji" src="${entry.value}" />""")
                    }

                    var sections = postContent.split("<p>{{ --- new section --- }}</p>")

                    /*  for (section in sections) {
                        unsafe {
                            raw(
                                postContent
                            )
                            raw("""
                                    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9989170954243288"
        data-ad-slot="9853935995"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
        """)
                        } 
                    }
                } */
    
    for ((idx, section) in sections.withIndex()) {
        div(classes = "${if (idx % 2 == 0) "odd" else "even"}-wrapper ${if (idx != 0) "wobbly-bg" else ""}") {
            style = "text-align: center;"

            div(classes = "media") {
                div(classes = "media-body") {
                    div {
                        style = "text-align: left;"

                        if (idx == 0) {
                            div {
                                style = "text-align: center;"
                                h1 {
                                    + post.title
                                }
                            }
                        }

    unsafe {
                                raw(
                                    section
                                )
                                /* raw("""
                                        <ins class="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-9989170954243288"
            data-ad-slot="9853935995"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
            """)
                            } */
                        }
                    }
                }
            }
        }
    }

    div(classes = "${if (sections.size % 2 == 0) "odd" else "even"}-wrapper wobbly-bg") {
		style = "text-align: center;"

 		div(classes = "media single-column") {
            div(classes = "media-body") {
                div {
                    style = "text-align: center;"
                    p {
                        + "Quer me ajudar a ficar online? Então me ajude doando! "
                        a(href = "https://loritta.website/donate") {
                            + "https://loritta.website/donate"
                        }
                    }

                    p {
                        + "Vote em mim para ganhar recompensas incríveis! "
                        a(href = "https://discordbots.org/bot/loritta") {
                            + "https://discordbots.org/bot/loritta"
                        }
                    }

                    p {
                        + "Utilize o código "
                        code {
                            + "MrPowerGamerBR"
                        }
                        + " nas suas compras na loja do Fortnite/Epic Games para me ajudar a ficar online!"
                    }
                }
            }
        }
	}
}

override fun HEAD.generateMeta(@args) {
    meta("theme-color", "#00c1df")
	meta(content = locale["website.lorittaWebsite"]) { attributes["property"] = "og:site_name" }
	meta(content = locale["website.genericDescription"]) { attributes["property"] = "og:description" }
	meta(content = getTitle(@call-args)) { attributes["property"] = "og:title" }
	meta(content = "30") { attributes["property"] = "og:ttl" }
    meta(content = "summary_large_image") { attributes["name"] = "twitter:card" }
	meta(content = "https://loritta.website/assets/img/blog/${post.metadata["image"]}") { attributes["property"] = "og:image"}
}
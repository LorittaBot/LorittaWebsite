@extends 'has_footer.kts'

override fun getTitle(@args) = "Patrocinadores"

override fun DIV.generateContent(@args) {	
    div(classes = "even-wrapper") {
		div(classes = "media") {
            div(classes = "media-body") {
                div {
                    style = "text-align: center;"

                    h1 {
                        + "Patrocinadores"
                    }

                    com.mrpowergamerbr.loritta.LorittaLauncher.loritta.sponsors.forEach {
                        generateSponsorNoWrap(it)
                    }
                }
            }
        }
    }

    div(classes = "odd-wrapper wobbly-bg") {
		div(classes = "media") {
            div(classes = "media-figure") {
                img(src = "https://loritta.website/assets/img/fanarts/Loritta_-_Heathecliff.png") {}
            }
            div(classes = "media-body") {
                div {
                    style = "text-align: left;"

                    div {
                        style = "text-align: center;"
                        h2 {
                            + "Para que servem os patrocinadores?"
                        }
                    }


                    p {
                        + "Patrocinadores são pessoas incríveis que querem divulgar seus servidores e projetos na Loritta, divulgando para mais de cinco mil pessoas diferentes todos os dias!"
                    }

                    h3 {
                        + "A cada mês, donos de servidores podem colocar os seus servidores..."
                    }

                    ul {
                        li {
                            + "Na \"Quarta Patrocinada\" no Servidor de Suporte da Loritta!"
                        }
                        li {
                            + "Na home page e na página de daily da Loritta"
                        }
                        li {
                            + "No status de \"Jogando\" da Loritta"
                        }
                        li {
                            + "E aqui, na página de patrocinadores da Loritta!"
                        }
                    }

                    h3 {
                        + "Se interessou?"
                    }
                    p {
                        + "Então veja o canal de slots premiums no servidor de suporte da Loritta para saber mais sobre os requisitos, formas de pagamento, como funciona e muito mais!"
                    }
                }
            }
        }
    }
}
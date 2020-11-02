@extends 'has_footer.kts'

override fun getTitle(@args) = "Daily"


override fun DIV.generateContent(@args) {
    style {
        unsafe {
            raw("""
    .scene {
    width: 100px;
    height: 100px;
    margin: 75px;
    perspective: 1000px;
    perspective-origin: 50% -400%;
    transition: 1s;
    filter: drop-shadow(12px 12px 25px rgba(0,0,0,0.5));
    margin-left: auto;
    margin-right: auto;
    }

    .scene:hover {
        transform: scale(1.1);
    transition: 1s;
    }

    .cube {
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;
    animation-name: rotate-cube;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    }

    .cube img {
        max-width: 100px;
        max-height: 100px;
    }

    .cube__face {
    position: absolute;
    width: 100px;
    height: 100px;
    // border: 2px solid black;
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
    }

    .cube__face--front  { background: hsla(  0, 100%, 50%, 0.7); }
    .cube__face--right  { background: hsla( 60, 100%, 50%, 0.7); }
    .cube__face--back   { background: hsla(120, 100%, 50%, 0.7); }
    .cube__face--left   { background: hsla(180, 100%, 50%, 0.7); }
    .cube__face--top    { background: hsla(240, 100%, 50%, 0.7); }
    .cube__face--bottom { background: hsla(300, 100%, 50%, 0.7); }

    .cube__face--front  { transform: rotateY(  0deg) translateZ(50px); }
    .cube__face--right  { transform: rotateY( 90deg) translateZ(50px); }
    .cube__face--back   { transform: rotateY(180deg) translateZ(50px); }
    .cube__face--left   { transform: rotateY(-90deg) translateZ(50px); }
    .cube__face--top    { transform: rotateX( 90deg) translateZ(50px); }
    .cube__face--lace1 { transform: rotateX( 0deg) rotateY(45deg) translateY(-50px) translateZ(0px); }
    .cube__face--lace2 { transform: rotateX( 0deg) rotateY(-45deg) translateY(-50px) translateZ(0px); }
    .cube__face--bottom { transform: rotateX(-90deg) translateZ(50px); }

    label { margin-right: 10px; }

    /* The animation code */
    @keyframes rotate-cube {
    0% {transform: rotateY(0deg); }
    50% {transform: rotateY(180deg); }
    100% {transform: rotateY(360deg); }
    }
    """)
        }
    }
    div(classes = "odd-wrapper") {
        generateAdOrSponsor(0, "4638598063", "Loritta Daily Reward", true)
        generateAdOrSponsor(1, "4638598063", "Loritta Daily Reward", false)
		style = "text-align: center;"

        div(classes = "media") {
            div(classes = "media-body") {
                style = "width: 50%;"
                h1 {
                    + "Prêmio Diário"
                }

                div {
                    id = "daily-prewrapper"

                    div {
                        id = "daily-wrapper"

                        div(classes = "scene") {
                                div(classes = "cube") {
                                    div(classes = "cube__face cube__face--front") {
                                        style = "width: 100%; height: 100%;"

                                        img(src = "/assets/img/daily/present_side.png") {}
                                    }
                                    div(classes = "cube__face cube__face--back") {
                                        style = "width: 100%; height: 100%;"

                                        img(src = "/assets/img/daily/present_side.png") {}
                                    }
                                    div(classes = "cube__face cube__face--right") {
                                        style = "width: 100%; height: 100%;"

                                        img(src = "/assets/img/daily/present_side.png") {}
                                    }
                                    div(classes = "cube__face cube__face--left") {
                                        style = "width: 100%; height: 100%;"

                                        img(src = "/assets/img/daily/present_side.png") {}
                                    }
                                    div(classes = "cube__face cube__face--top") {
                                        style = "width: 100%; height: 100%;"

                                        img(src = "/assets/img/daily/present_top.png") {}
                                    }
                                    div(classes = "cube__face cube__face--lace1") {
                                        style = "width: 100%; height: 25%"

                                        img(src = "/assets/img/daily/present_lace.png") {}
                                    }
                                    div(classes = "cube__face cube__face--lace2") {
                                        style = "width: 100%; height: 25%"

                                        img(src = "/assets/img/daily/present_lace.png") {}
                                    }
                                }
                            }

                        p {
                            + "Pegue o seu prêmio diário para conseguir sonhos!"
                        }

                        div {
                            id = "daily-captcha"
                            style = "display: inline-block;"
                        }

                        div {
                            div(classes = "button-discord pure-button daily-reward-button button-discord-disabled") {
                                style = "font-size: 1.25em; transition: 0.3s;"

                                i(classes = "fas fa-gift") {}

                                + " Pegar Prêmio"
                            }
                        }
                    }

                    div(classes = "daily-notification flavourText") {
                        style = "color: #f04747;"
                    }
                }
            }
            div(classes = "media-figure") {
                id = "leaderboard"
                style = "width: 50%;"
            }
        }

        generateAdOrSponsor(2, "4638598063", "Loritta Daily Reward", true)
        generateAdOrSponsor(3, "4638598063", "Loritta Daily Reward", false)
    }
    div(classes = "even-wrapper wobbly-bg") {
			div(classes = "media") {
				div(classes = "media-body") {
					h1 {
						+ "Mas... o que são sonhos?"
					}

                    p {
                        + "Sonhos são a moeda que você pode utilizar na Loritta. Você pode usar sonhos para apostar na Lorifa, comprar novos designs para o perfil, casar, comprar raspadinhas e muito mais!"
                    }
                    p {
                        + "Para apostar na rifa, use `+rifa`!"
                    }
                    p {
                        + "Você pode casar com a pessoa que você tanto ama com `+casar`!"
                    }
                    p {
                        + "Envie sonhos para seus amigos e amigas com `+pay`!"
                    }
                    p {
                        + "Você pode comprar novos designs para o seu perfil no `+profile shop`!"
                    }
				}
				div(classes = "media-figure") {
					img(src = "https://loritta.website/assets/img/loritta_money_discord.png") {}
				}
			}
    }

    script {
        unsafe {
            raw("""
    function recaptchaCallback(response) {
        this['loritta-parent-spicy-morenitta'].net.perfectdreams.spicymorenitta.routes.DailyRoute.Companion.recaptchaCallback(response)
    }""")
        }
    }
}

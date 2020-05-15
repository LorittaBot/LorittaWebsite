@extends 'base.kts'

override fun getTitle(@args) = "Patrocinadores"

override fun HTML.generateBody(@args) {
    body {
        div {
            style {
                unsafe {
                    raw("""
body { background-color: #29a6fe; }
                    
.redirect-center {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2em;
}""")
                }
            }

            id = "content"
            style = "text-align: center;"

            div(classes = "redirect-center") {
                img(src = "https://loritta.website/assets/img/fanarts/Loritta_9_-_Allouette.png") {
                    width = "384"
                    height = "384"
                }
                div {
                    + "Redirecionando para o nosso patrocinador, ${sponsor.name}!"
                }
            }

            meta {
                attributes["http-equiv"] = "refresh"
                attributes["content"] = "3; ${sponsor.link}"
            }
        }
    }
}
@extends 'base.kts'

override fun HTML.generateBody(@args) {
    body {
        style {
            unsafe {
                raw("""
                        iframe {
                            width: 100vw;
                            height: 100vh;
                            padding: 0;
                        border: 0;
                        }

                        body {
                            overflow: hidden;
                }""")
            }
        }
        iframe {
            attributes["src"] = "https://canary-shard$loriShardId.loritta.website/dashboard/configure/$guildId"
        }
    }
}
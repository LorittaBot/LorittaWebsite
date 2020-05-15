@extends 'has_navbar.kts'

override fun DIV.generateContent(@args) {
    h1 {
        + "Extended Base Test"
    }
    p {
        + "Input is ${text}"
    }
}

override fun getTitle() = "Hello, world!"
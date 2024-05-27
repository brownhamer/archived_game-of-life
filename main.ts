radio.onReceivedString(function (receivedString) {
    receivedLanguage = greetings.indexOf(receivedString)
})
let receivedLanguage = 0
let greetings: string[] = []
greetings = ["Hello", "Hallo", "Hola"]
let language = randint(0, 2)
receivedLanguage = -1
radio.setGroup(1)
loops.everyInterval(500, function () {
    if (receivedLanguage == language) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
        language = randint(0, 2)
    }
    basic.showNumber(language)
    radio.sendString("" + (greetings[language]))
    receivedLanguage = -1
})

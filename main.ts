radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == language) {
        repeatLanguage = 1
    }
})
let repeatLanguage = 0
let language = 0
language = randint(0, 5)
repeatLanguage = 0
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
loops.everyInterval(1000, function () {
    control.waitMicros(randint(1, 123))
    if (repeatLanguage > 0) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 1023)
        repeatLanguage += -1
    } else {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
        language = randint(0, 5)
        repeatLanguage = 0
    }
    basic.showNumber(language)
    radio.sendNumber(language)
})

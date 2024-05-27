greetings = ["Hello", "Hallo", "Hola"]
language = randint(0, 2)
repeatLanguage = False

def on_received_string(receivedString):
    global greetings
    global language
    receivedLanguage = greetings.index(receivedString)
    if (receivedLanguage = language)
        global repeatLanguage
        repeatLanguage = True
    pass

def on_500_interval():
    global greetings
    global language
    global repeatLanguage
    if (repeatLanguage)
        pins.analog_write_pin(AnalogPin.P13, 0)
        pins.analog_write_pin(AnalogPin.P14, 666)
        repeatLanguague = False
    else
        pins.analog_write_pin(AnalogPin.P13, 666)
        pins.analog_write_pin(AnalogPin.P14, 0)
        language = randint(0, 2)
    basic.show_number(language)
    radio.send_string(greetings[language])
    pass

def on_forever():
    pass

radio.set_group(1)
radio.on_received_string(on_received_string)
loops.every_interval(500, on_500_interval)
basic.forever(on_forever)

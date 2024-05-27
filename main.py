language = randint(0, 2)
languageRepeat = False
greetings = ['Hello', 'Hallo', 'Hola']

def on_received_string(receivedString):
    neighborLanguage = greetings.index(receivedString)
    if (neighborLanguage == language)
        languageRepeat = True
        basic.show_icon(IconNames.HEART)
    else
        basic.show_icon(IconNames.NO)
    pass
radio.on_received_string(on_received_string)

def onEvery_interval():
    if (not languageRepeat)
        language = randint(0, 2)

    radio.send_string(greetings[language])
    pass
loops.every_interval(500, onEvery_interval)

radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)

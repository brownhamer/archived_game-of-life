def on_received_string(receivedString):
    global language
    if receivedString == "Hello":
        language = 0
    else:
        if receivedString == "Hallo":
            language = 1
        else:
            language = 2
radio.on_received_string(on_received_string)

language = 0
repeatLanguage = False
greetings = ["Hello", "Hallo", "Hola"]
language = randint(0, 2)
radio.set_group(1)

def on_every_interval():
    pass
loops.every_interval(500, on_every_interval)

let receivedLanguage = 0
let repeatLanguage = false
let greetings = ["Hello", "Hallo", "Hola"]
let language = randint(0, 2)
radio.setGroup(1)
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    receivedLanguage = _py.py_array_index(greetings, receivedString)
})
loops.everyInterval(500, function on_500_interval() {
    
})
basic.forever(function on_forever() {
    
})

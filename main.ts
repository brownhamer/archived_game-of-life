let language = randint(0, 2)
let greetings = ["Hello", "Hallo", "Hola"]
radio.onReceivedString(function on_received_string(receivedString: string) {
    let neighborLanguage = _py.py_array_index(greetings, receivedString)
    
})
radio.setGroup(1)
basic.forever(function on_forever() {
    
})

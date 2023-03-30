radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("puta")
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(111)

radio.onReceivedNumber(function (receivedNumber) {
    comando += receivedNumber
    if (comando == 1) {
    	
    }
    if (comando == 2) {
    	
    }
    if (comando == 3) {
    	
    }
    if (comando == 4) {
    	
    }
    if (comando == 5) {
    	
    }
})
function derecha () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 0)
}
function adelante () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
}
function parar () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 0)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P2, 0)
}
function atras () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
}
function izquierda () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P2, 0)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
}
let establecer = 0
let comando = 0
radio.setGroup(8)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        establecer += 1
        radio.sendNumber(1)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        establecer += 1
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.A)) {
        establecer += 1
        radio.sendNumber(2)
    }
    if (input.isGesture(Gesture.Shake)) {
        establecer += 1
        radio.sendNumber(4)
    }
    if (input.buttonIsPressed(Button.B)) {
        establecer += 1
        radio.sendNumber(5)
    }
})

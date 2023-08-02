def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_right():
    pass
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)

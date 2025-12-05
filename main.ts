function changeServoPos_left () {
    pins.servoWritePin(AnalogPin.P0, servo_pos)
    basic.pause(7.5)
    servo_pos += -1
}
function changeServoPos_right () {
    pins.servoWritePin(AnalogPin.P0, servo_pos)
    basic.pause(7.5)
    servo_pos += 1
}
function stopServo () {
	
}
let servo_pos = 0
servo_pos = 180
let Servo_Range = randint(0, 180)
basic.forever(function () {
	
})

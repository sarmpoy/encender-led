input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
    }
})
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P1, 1)

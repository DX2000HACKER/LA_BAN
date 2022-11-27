let DIRECTION = 0
basic.forever(function () {
    DIRECTION = input.compassHeading()
    if (DIRECTION <= 45) {
        basic.showString("B")
    } else if (DIRECTION <= 135) {
        basic.showString("Đ")
    } else if (DIRECTION <= 225) {
        basic.showString("N")
    } else if (DIRECTION <= 315) {
        basic.showString("T")
    } else {
        basic.showIcon(IconNames.No)
    }
})

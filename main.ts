let Temp = 0
basic.forever(function () {
    Temp = 0
    basic.showNumber(Temp)
    basic.pause(5000)
    Temp += input.temperature()
    basic.showNumber(Temp)
})

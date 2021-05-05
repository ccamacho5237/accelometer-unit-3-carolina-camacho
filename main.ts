basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -1023 && input.acceleration(Dimension.X) <= -666) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) > -666 && input.acceleration(Dimension.X) <= -333) {
        basic.showLeds(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `)
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) > -333 && input.acceleration(Dimension.X) <= -5) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) > -5 && input.acceleration(Dimension.X) <= 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) > 5 && input.acceleration(Dimension.X) <= 333) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . . . #
            . . . . .
            `)
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) > 333 && input.acceleration(Dimension.X) <= 666) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            `)
        basic.clearScreen()
    }
    if (input.acceleration(Dimension.X) > 666) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
    }
})

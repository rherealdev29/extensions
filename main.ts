let myMenu2: miniMenu.MenuSprite = null
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("exit"),
miniMenu.createMenuItem("abc")
)
myMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
    if (selection == "exit") {
        myMenu2 = miniMenu.createMenu(
        miniMenu.createMenuItem("yes"),
        miniMenu.createMenuItem("no")
        )
        myMenu2.onButtonPressed(controller.B, function (selection, selectedIndex) {
            if (selection == "yes") {
                myMenu2.close()
                myMenu.close()
            } else {
                myMenu2.close()
            }
        })
    }
})

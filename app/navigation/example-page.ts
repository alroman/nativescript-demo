
var viewModule = require("ui/core/view");
import frameModule = require("ui/frame")
import drawerModule = require("nativescript-telerik-ui/sidedrawer")

export function pageLoaded(args) {
    console.log("page was loaded");
}

export function onTapDrawer(args) {
    console.log("show drawer tap");
    // showDrawer()
    // let foo = viewModule.getViewById("SideDrawer")
    // foo.showDrawer()

    // console.log(foo);
    
    let drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("SideDrawer");
    console.log(drawer);
    drawer.toggleDrawerState()

}
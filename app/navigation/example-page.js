"use strict";
var viewModule = require("ui/core/view");
var frameModule = require("ui/frame");
function pageLoaded(args) {
    console.log("page was loaded");
}
exports.pageLoaded = pageLoaded;
function onTapDrawer(args) {
    console.log("show drawer tap");
    // showDrawer()
    // let foo = viewModule.getViewById("SideDrawer")
    // foo.showDrawer()
    // console.log(foo);
    var drawer = frameModule.topmost().getViewById("SideDrawer");
    console.log(drawer);
    drawer.toggleDrawerState();
}
exports.onTapDrawer = onTapDrawer;
//# sourceMappingURL=example-page.js.map
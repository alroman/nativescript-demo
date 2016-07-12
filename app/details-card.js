exports.loaded = function (args) {
    var page = args.object
    // console.log(page.navigationContext)
    page.bindingContext = args.object.navigationContext
}

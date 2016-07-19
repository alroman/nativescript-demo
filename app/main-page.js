// var createViewModel = require("./main-view-model").createViewModel;

// function onNavigatingTo(args) {
//     var page = args.object;
//     page.bindingContext = createViewModel();
// }
// exports.onNavigatingTo = onNavigatingTo;

var FrameModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray
var page;
var viewModule = require("ui/core/view");
var segmentedBar = require("ui/segmented-bar")

var listData = new Observable({
    sessions: new ObservableArray([
        {name: "Session A", style: "odd"},
        {name: "Mobile stuff", style: "even"},
        {name: "more mobile stuff", style: "odd"},
        {name: "more", style: "odd"},
        {name: "less", style: "even"}
    ])
})

var trackOne = new ObservableArray([
    {
        time: "8:00 - 8:45 am",
        room: "??",
        name: "Registration & Continental Breakfast",
        location: "",
        boxStyle: "general",
        textStyle: "general"
    },
    {
        time: "9:00 - 9:50 am",
        room: "Main Auditorium",
        name: "The Next 5 Years: Working Together To Build The Next Generation Digital Learning Environment Through Technology, Data and Partnerships",
        location: "Jason Palmer",
        boxStyle: "track",
        textStyle: "track"
    },
    {
        time: "10:00 - 10:35 am",
        room: "Upstairs Room",
        name: "Assessing the Impact of the Learning Analytics Paradigm on Management Education",
        location: "Owen Hall Jr".toUpperCase(),
        boxStyle: "track",
        textStyle: "track"
    },
    {
        time: "10:45 - 11:20 am",
        room: "Upstairs Room",
        name: "To Be Announced",
        location: "tba",
        boxStyle: "track",
        textStyle: "track"
    },
    {
        time: "11:30 - 12:05  am",
        room: "Upstairs Room",
        name: "Drupal, Automation, and Cloud Services",
        location: "Andrew Browning",
        boxStyle: "track",
        textStyle: "track"
    }
])
var sessionData = new Observable({
    sessions: trackOne
})

var trackTwo = new ObservableArray([
    {
        time: "8:00 - 8:45 am",
        room: "??",
        name: "Registration & Continental Breakfast",
        location: "",
        boxStyle: "general",
        textStyle: "general"
    },
    {
        time: "9:00 - 9:50 am",
        room: "Main Auditorium",
        name: "The Next 5 Years: Working Together To Build The Next Generation Digital Learning Environment Through Technology, Data and Partnerships",
        location: "Jason Palmer",
        boxStyle: "track",
        textStyle: "track"
    },
    {
        time: "10:00 - 10:35 am",
        room: "Main Auditorium",
        name: "The Happiness Challenge - A Campus-Based Mental Health Promotion Program",
        location: "Leslie Rith-Najarian",
        boxStyle: "track",
        textStyle: "track"
    },
    {
        time: "10:45 - 11:20 am",
        room: "Main Auditorium",
        name: "Educating and empowering patients and families as they prepare for neurosurgery procedures",
        location: "Steven Cohen",
        boxStyle: "track",
        textStyle: "track"
    },
    {
        time: "11:30 - 12:05  am",
        room: "Main Auditorium",
        name: "To Be Announced",
        location: "tba",
        boxStyle: "track",
        textStyle: "track"
    }
])

var tracks = [trackOne, trackTwo]

exports.loaded = function (args) {
    page = args.object
    page.bindingContext = sessionData

    // Change ios bar style
    if (args.object.ios) {
        var controller = FrameModule.topmost().ios.controller;
        var navigationBar = controller.navigationBar;
        
        navigationBar.translucent = false
        navigationBar.barStyle = 1;

        console.log("============")
        
        var search = FrameModule.topmost().getViewById("search")
        console.log(search)
        if (search) {
            search.ios.searchBarStyle = 2
            search.ios.layer.borderWidth = 0
        }

    }
}

exports.navigateToDetail = function(args) {

    var box = args.object.bindingContext.sessions.getItem(args.index)
    // console.log("testing works")
    // console.log(foo.boxStyle)

    if (box.boxStyle === "track") {
        FrameModule
            .topmost()
            .navigate({
                moduleName: "details",
                context: {
                    title : "Presentation"
                }
            });
    }
}

exports.onBarTap = function(args) {
    // var foo = viewModule.getViewById("tapping-bar")
    // console.log(foo.selectedIndex)
    // args.selectedIndex = 2
    console.log("change " + args.newIndex)
    sessionData.sessions = tracks[args.newIndex]
    // page.bindingContext.sessions = tracks[args.newIndex]
    // console.log(args.object)
}

exports.doNotShowAndroidKeyboard = function(args) {
    var searchBar = args.object;
    if (searchBar.android){
        searchBar.android.clearFocus();
    }
}

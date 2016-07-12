var Calendar = require("nativescript-calendar");


exports.loaded = function (args) {
    var page = args.object
    // console.log(page.navigationContext)
    page.bindingContext = args.object.navigationContext
}

exports.addToCalendar = function(args) {
    if (args.object.ios) {
        console.log("tapped")
        var store = EKEventStore.alloc().init()
        // var status = EKEventStore.authorizationStatusForEntityType(EKEntityTypeReminder)
        console.log(store.requestAccessToEntityType)
        // store.requestAccessToEntityType(EKEntityTypeEvent, function(granted, error) {
        //     console.log("go here")
        // })
    }

    // Only the `title`, `startDate` and `endDate` are mandatory, so this would suffice:
    var options = {
        title: 'Attend this talk',
        // Make sure these are valid JavaScript Date objects.
        // In this case we schedule an Event for now + 1 hour, lasting 1 hour.
        startDate: new Date(new Date().getTime()),
        endDate: new Date(new Date().getTime() + (2*60*60*1000))
    };

    options.reminders = {
        first: 30,
        second: 10
    };

    Calendar.createEvent(options).then(
        function(createdId) {
            console.log("Created Event with ID: " + createdId);
        },
        function(error) {
            console.log("Error creating an Event: " + error);
        }
    );
}
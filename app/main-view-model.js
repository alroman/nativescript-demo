var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray
var page;

// function getMessage(counter) {
//     if (counter <= 0) {
//         return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
//     } else {
//         return counter + " taps left";
//     }
// }

var listData = new Observable({
    sessions: new ObservableArray([
        {name: "Session A"},
        {name: "Mobile stuff"},
        {name: "more mobile stuff"}
    ])
})

exports.loaded = function (args) {
    page = args.object
    page.bindingContext = listData
}

// function createViewModel() {
//     var viewModel = new Observable();
//     viewModel.counter = 42;
//     viewModel.message = getMessage(viewModel.counter);

//     viewModel.onTap = function() {
//         this.counter--;
//         this.set("message", getMessage(this.counter));
//     }

//     return viewModel;
// }

// exports.createViewModel = createViewModel;
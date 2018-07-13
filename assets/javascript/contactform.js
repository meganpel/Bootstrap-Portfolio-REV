// Initialize Firebase
var config = {
    apiKey: "AIzaSyBDsPFAFY25C01D8MVoby4I1bNrj_2TyWI",
    authDomain: "portfolio-contact-10259.firebaseapp.com",
    databaseURL: "https://portfolio-contact-10259.firebaseio.com",
    projectId: "portfolio-contact-10259",
    storageBucket: "portfolio-contact-10259.appspot.com",
    messagingSenderId: "443095157173"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#contactSubmit").on("click", function(event) {
    var name = $("#nameInput").val().trim();
    var email = $("#emailInput").val().trim();
    var message = $("#messageInput").val().trim();

    if (name === "") {
        var message = $("<div>");
        message.addClass("alert");
        message.addClass("alert-danger");
        message.html("Please add a name!");

        $("#messageHolder").append(message);

        return;
    }

    if (email === "") {
        var message = $("<div>");
        message.addClass("alert");
        message.addClass("alert-danger");
        message.html("Please add an email!");

        $("#messageHolder").append(message);

        return;
    }

    if (message === "") {
        var message = $("<div>");
        message.addClass("alert");
        message.addClass("alert-danger");
        message.html("Please add a message!");

        $("#messageHolder").append(message);

        return;
    }


    var newContact = {
        name: name,
        email: email,
        message: message,
    };

    database.ref().push(newContact);

    $("#messageHolder").html("");

    $("#nameInput").val("");
    $("#emailInput").val("");
    $("#messageInput").val("");

    var message = $("<div>");
    message.addClass("alert");
    message.addClass("alert-primary");
    message.html("Thank you for your message!");

    $("#messageHolder").append(message);
});
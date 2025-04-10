$(document).ready(function () {
    // When the documents loaded hides all text that doesn't need to be shown yet
    $(".ErrorText").hide()
    $(".SuccessText").hide()

    // Makes the button into a Jquery button
    $("#backbutton").button({
        icon: "ui-icon-caret-1-w"
    })
})

// Function for the buttons in the contact us form
// All buttons call the same function and just uses a Contact parameter to tell which person its from
function SubmitContact(Contact) {

    // Hides the error text when the button is pressed, reappers later if it needs to

    $(".ErrorText").hide()
    $(".SuccessText").hide()


    // Statement that checks which persons contact form was submitted

    if (Contact == "Chase") {

        // Assigns appropriate text fields and values to each variable
        // Uses .val to get the text entered for validation

        Name = $("#ChaseNameField")

        NameText = $("#ChaseNameField").val()

        Email = $("#ChaseEmailField")

        EmailText = $("#ChaseEmailField").val()

        NameError = $("#ChaseNameError")

        EmailError = $("#ChaseEmailError")

        Message = $("#ChaseMessageField")

        Success = $("#ChaseSuccess")

    } else if (Contact == "Gerry") {

        Name = $("#GerryNameField")

        NameText = $("#GerryNameField").val()

        Email = $("#GerryEmailField")

        EmailText = $("#GerryEmailField").val()
        
        NameError = $("#GerryNameError")

        EmailError = $("#GerryEmailError")

        Message = $("#GerryMessageField")

        Success = $("#GerrySuccess")

    } else {

        Name = $("#GageNameField")

        NameText = $("#GageNameField").val()

        Email = $("#GageEmailField")

        EmailText = $("#GageEmailField").val()

        NameError = $("#GageNameError")

        EmailError = $("#GageEmailError")

        Message = $("#GageMessageField")

        Success = $("#GageSuccess")
    }


    // Sets error to false, used as flag variable to see if any check fails
    error = false;

    // Tests if the name is empty, shows error text and flags as error if true
    if (NameText == "") {
        NameError.show()
        error = true;

    } 


    // Tests if the email is empty and if it has a @ symbol, returns error text and flag if not
    if (EmailText == "" || EmailText.indexOf('@') == -1) {
        EmailError.show()
        error = true;
    }

    // if the error flag hasnt been triggered, shows success message and clears forms
    if (error == false) {
        Success.show()
        Name.val("")
        Email.val("")
        Message.val("");
    }

}
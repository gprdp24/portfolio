$(document).ready(function () {
    $(".ErrorText").hide()
    $(".SuccessText").hide()

    $("#backbutton").button({
        icon: "ui-icon-caret-1-w"
    })
})

function SubmitContact(Contact) {

    $(".ErrorText").hide()
    $(".SuccessText").hide()

    if (Contact == "Chase") {

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

    } else if (Contact == "Gage") {

        Name = $("#GageNameField")

        NameText = $("#GageNameField").val()

        Email = $("#GageEmailField")

        EmailText = $("#GageEmailField").val()

        NameError = $("#GageNameError")

        EmailError = $("#GageEmailError")

        Message = $("#GageMessageField")

        Success = $("#GageSuccess")
    }



    error = false;


    if (NameText == "") {
        NameError.show()
        error = true;

    } 
    
    if (EmailText == "" || EmailText.indexOf('@') == -1) {
        EmailError.show()
        error = true;
    }

    if (error == false) {
        Success.show()
        Name.val("")
        Email.val("")

    }

}
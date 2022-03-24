
$(document).ready(function () {
    $("#contact-form").validate({
        errorClass: "validate",
        rules: {
            // simple rule, converted to {required:true}
            name: "required",
            // compound rule
            email: {
                required: true,
                email: true
            },
            subject: "required",
            message: {
                required : true,
                minlength: 50,
            }
        },
        messages:{
            name:{
                required : "Please enter name"
            },
            email:{
                required: "Please enter email address",
                email:"Please enter valid email"
            },
            subject:{
                required:"Please enter subject"
            },
            message:{
                required:"Please type your message here",
                minlength:"Message must be in miniumum 50 characters"
            }
        }
    });
});





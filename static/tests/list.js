$("input").on("keypress", function() {
        if (document.getElementById("errormsg") && $("input[name='text']").value != '') {
            $("#errormsg").hide();
        }
});


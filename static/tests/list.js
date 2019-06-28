$("input").on("keypress", function() {
        if (document.getElementById("errormsg") && $("input").value != '') {
            $("#errormsg").hide();
        }
});


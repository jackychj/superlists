$("input").on("keypress", function() {
    if (document.getElementById("errormsg")&& $("input").val!='') {
        $("#errormsg").hide();
    }
});
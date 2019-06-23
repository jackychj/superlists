QUnit.test("errors should be hidden on keypress", function(assert){

    $("input").trigger("keypress");
    assert.equal($("#errormsg").is(":visible"), false);
});
QUnit.test("errors not be hidden unless there is keypress", function(assert) {
    assert.equal($("#errormsg").is(":visible"), true);
});

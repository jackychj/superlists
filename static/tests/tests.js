/*global $, test, equal */
QUnit.test("errors should be hidden on keypress", function (assert) {
    $("input[name='text']").trigger("keypress");
    assert.equal($('.has-error').is(':visible'), false, "Error msg is invisible!");
});
QUnit.test("errors not be hidden unless there is keypress", function (assert) {
    assert.equal($('.has-error').is(':visible'), true)
});

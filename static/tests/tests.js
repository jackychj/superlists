/*global $, test, equal */
QUnit.test("smoke test", function (assert) {
    assert.equal($('.has-error').is(':visible'), true);
    $('.has-error').hide();
    assert.equal($('.has-error').is(':visible'), false);
});
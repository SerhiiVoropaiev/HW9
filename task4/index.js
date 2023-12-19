$(document).ready(function () {
    const checkboxes = $('.checkbox');

    checkboxes.on('change', function () {
        const checkedCount = checkboxes.filter(':checked').length;
        if (checkedCount >= 3) {
            checkboxes.not(':checked').prop('disabled', true);
        } else {
            checkboxes.prop('disabled', false);
        }
    });
});
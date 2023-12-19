/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
    $('h3').each(function () {
        const nextDiv = $(this).next('div');
        if (nextDiv.length > 0) {
            nextDiv.insertBefore($(this));
        }
    });
});
/**
 знайдіть всі <h2> з класом head,
 зробіть для них зелений колір фону,
 потім серед знайдених елементів знайдіть елементи з класом inner
 і поставте їм розмір шрифту 35px (не вносьте змін до html-файлу)
 */

$(document).ready(function () {
    const $headings = $('h2.head');
    $headings.css('background-color', 'green');
    const $innerElements = $headings.find('.inner');
    $innerElements.css('font-size', '35px');
});

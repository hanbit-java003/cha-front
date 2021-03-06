var menus = require('./menu/header-menu');

function initMenu() {
    var template = require('../template/header-menu.hbs');
    $('.header-menu').empty();

    for (var i=0; i<menus.length; i++) {
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}

initMenu();

$('.header-menu > li').on('mouseover', function () {
    $(this).find('.header-sub-menu').show();
});

$('.header-menu > li').on('mouseout', function () {
    $(this).find('.header-sub-menu').hide();
});

$('.header-logo').on('click', function () {
    location.href = './';
});

$('.header-sub-menu > li').on('click', function () {
    var marketId = $(this).attr('market-id');

    location.href = './markets.html?id=' + marketId;
});

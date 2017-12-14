$(document).ready(() => {
    $('.menu-wrapper').click(function () {
        let drawerId = $(this).attr('data-target');
        $(drawerId).toggleClass('is-drawer-show');
    })
})
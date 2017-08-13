$(document).ready(function () {
    applyHeader();
    applyResize();
});

function applyHeader () {
    $('.jumbotron').css({ height: ($(window).height()) + 'px' });
}

function applyResize () {
    $(window).on('resize', function () {
        $('.jumbotron').css({ height: ($(window).height()) + 'px' });
    });
}

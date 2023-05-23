$(document).ready(function () {
    var headerTop = $(".top-info");

    var backgrounds = new Array(
        'url(image/catalog/frame_2_delay-1s.jpg)', 'url(image/catalog/frame_3_delay-1s.jpg)'
    );

    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        headerTop.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 1000);

    headerTop.css('background-image', backgrounds[0]);



});
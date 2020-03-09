(function ($) {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage'],
        sectionsColor: ['#C63D0F', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['안녕하세요', '반갑습니다.'],
        showActiveTooltip: true,
        responsiveWidth: 768
    });
    /* end dot nav */
})(jQuery); // End of use strict
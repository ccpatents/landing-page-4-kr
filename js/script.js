(function ($) {
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage'],
        sectionsColor: ['transparent', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['특허 검색 너무 어렵죠?', '우리에겐 CCPatents가 있습니다.'],
        showActiveTooltip: true,
        responsiveWidth: 768,
        verticalCentered: false
    });
    /* end dot nav */
})(jQuery); // End of use strict
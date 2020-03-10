(function ($) {
    $('#fullpage').fullpage({
        anchors: ['Page1', 'Page2', 'Page3', 'Page4'],
        sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['검색량이 너무 많죠?', '검색 범위를 쉽게 조절할 수 있습니다.', '단어에만 신경쓰면 됩니다.', '이 외에도 다양한 기능들이 있어요.', '마이크로소프트 스토어에서 안전하게'],
        showActiveTooltip: true,
        verticalCentered: false,
    });
    /* end dot nav */
})(jQuery); // End of use strict
var win_10 = false;
var is_mobile = false;
var resize_timer;

var current_section = 1;

(function ($) {
    "use strict"; // Start of use strict

    fullPageInit();

    display_mobile_app();

    let ua = navigator
        .userAgent
        .toLowerCase();
    win_10 = (ua.indexOf("windows nt 10.0") != -1 || ua.indexOf("windows nt 6.4") != -1)
        ? true
        : false;

    if (win_10) {
        document
            .getElementById("store-area")
            .style
            .display = "block";

        document
            .getElementById('store-button')
            .onclick = function () {
            /*if (!store_event) {
                    gtag('event', 'store', {
                    'event_category': 'button'
                    });
                }
                store_event = true;*/
            if (current_section == 5) {
                window.location.href = "ms-windows-store://pdp/?productid=9N798V33QDF8";
            } else {
                setTimeout(function () {
                    window.location.href = "ms-windows-store://pdp/?productid=9N798V33QDF8";
                }, 1500)
            }

        }
    }

    let filter = "win16|win32|win64|mac";
    if (navigator.platform) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
            is_mobile = true;
        }
    }

    $(window)
        .resize(function () {
            display_mobile_app();
        })
})(jQuery); // End of use strict

function fullPageInit() {
    $('#fullpage').fullpage({
        anchors: [
            '검색량이너무많죠?', '검색범위를쉽게조절할수있습니다.', '단어에만신경쓰면됩니다.', '다양한기능들이있어요', '마이크로소프트스토어에서안전하게'
        ],
        sectionsColor: [
            'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
        ],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
            '검색량이 너무 많죠?', '검색 범위를 쉽게 조절할 수 있습니다.', '단어에만 신경쓰면 됩니다.', '이 외에도 다양한 기능들이 있어요.', '마이크로소프트 스토어에서 안전하게'
        ],
        showActiveTooltip: true,
        verticalCentered: false,
        afterLoad: function (origin, destination) {
            current_section = destination;
        }
    });
}

function display_mobile_app() {
    if (true) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        if ((width < 576) && (height > (width * 1.4))) {
            $('#mobile_app').show();
            $('#mobile_app_content').show();
        } else {
            $('#mobile_app').hide();
            $('#mobile_app_content').hide();
        }
    }
}
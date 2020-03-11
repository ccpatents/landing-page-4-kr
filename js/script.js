var win_10 = false;

var home_player;
var ranges_player;
var synonyms_player;
var others_player;
var install_player;

(function ($) {
    "use strict"; // Start of use strict

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
            console.log('store');
        }
    }

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag
        .parentNode
        .insertBefore(tag, firstScriptTag);

})(jQuery); // End of use strict

function onYouTubeIframeAPIReady() {
    home_player = new YT.Player('home-video', {
        width: '100%',
        videoId: 'hJuHVgCmoSw',
        events: {
            'onReady': onHomeReady,
            'onStateChange': onPlayerStateChange
        }
    });

    ranges_player = new YT.Player('ranges-video', {
        width: '100%',
        videoId: 'hJuHVgCmoSw',
        events: {
            'onReady': onRangesReady,
            //'onStateChange': onPlayerStateChange
        }
    });

    synonyms_player = new YT.Player('synonyms-video', {
        width: '100%',
        videoId: 'hJuHVgCmoSw',
        events: {
            'onReady': onSynonymsReady,
            //'onStateChange': onPlayerStateChange
        }
    });

    others_player = new YT.Player('others-video', {
        width: '100%',
        videoId: 'hJuHVgCmoSw',
        events: {
            'onReady': onOthersReady,
            //'onStateChange': onPlayerStateChange
        }
    });

    install_player = new YT.Player('install-video', {
        width: '100%',
        videoId: '6GLS2SxLgqI',
        events: {
            'onReady': onInstallReady,
            //'onStateChange': onPlayerStateChange
        }
    });

}

// 4. The API will call this function when the video player is ready.
function onHomeReady(event) {
    //home_player = event.target;
    home_player.playVideo();
    //home_player.seekTo(27);
    home_player.mute();
}

function onRangesReady(event) {
    //ranges_player = event.target;
    ranges_player.mute();
}

function onSynonymsReady(event) {
    //synonyms_player = event.target;
    synonyms_player.mute();
}

function onOthersReady(event) {
    //others_player = event.target;
    others_player.mute();
}

function onInstallReady(event) {
    //install_player = event.target;
    install_player.mute();

    fullPageInit();
}

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
            switch (destination) {
                case 1: // home-player
                    if (home_player) {
                        home_player.playVideo();
                        home_player.playVideo();
                    }
                    break;
                case 2: // ranges-player
                    if (ranges_player) {
                        ranges_player.playVideo();
                        ranges_player.playVideo();
                    }
                    break;
                case 3: // synonyms-player
                    if (synonyms_player) {
                        synonyms_player.playVideo();
                        synonyms_player.playVideo();
                    }
                    break;
                case 4: // others-player
                    if (others_player) {
                        others_player.playVideo();
                        others_player.playVideo();
                    }
                    break;
                case 5: // install-player
                    if (install_player) {
                        install_player.playVideo();
                        install_player.playVideo();
                    }
                    break;
                default:
            }
        }
    });
}

function onPlayerStateChange(event) {
    console.log('hello');
    if (event.data == YT.PlayerState.ENDED) {
        event.target.stopVideo();
    }
}
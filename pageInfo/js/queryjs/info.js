/**
 * Created by lidasi on 2018/12/11.
 */

var info = info || {};
info.init = function() {

    $("#head_content").load(appConst.viewPrefix + "head.html");
    // add news page
    $("#news-content").load("view/content/head.html");

    player = jwplayer("dplayer").setup({
        width: 400,
        height: 304,
        file: "videos/EastTactix SlideShow.mp4",
        image: "images/home/vcover.png",
        autostart: false,
        repeat: false,
        volume: 100
    });

    info.sliderInit();
}

info.scrollbarInit = function() {
    $("#scroll-panel").mCustomScrollbar({
        theme:"dark",
        scrollButtons:{
            enable:false
        },
        autoHideScrollbar: false,
        scrollInertia :0,
        horizontalScroll : false,
        setHeight: "224px"
    });
}
/**
 * Created by badUncle on 2018/12/12.
 */
var menu = menu || {};

menu.init = function() {
    $("#menu").load(appConst.viewPrefix + "menu.html");
}

menu.porClick = function(number) {
    $('#nav-box li').removeClass('active');
    $(number).parent().addClass('active');
}
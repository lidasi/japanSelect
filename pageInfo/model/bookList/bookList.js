/**
 * Created by badUncle on 2018/12/13.
 */
var bookList = bookList || {};

bookList.init = function() {
    $("#bookList").load(appConst.viewPrefix + "bookList.html");
}

//1200px以下にしたとき
$(window).resize(function(){
    //xにwindowの幅
    var x = $(window).width();
    var y = 1200;
    if(x <= y) {
        $(".nav-body").addClass("close");
        $(".menu-item-has-children").addClass("close")
    }else{
        $(".nav-body").removeClass("close");
    }
});
//ハンバーガーメニューをクリックしたとき
jQuery(function($){
    $(".nav-btn").on("click",function(){
        $(this).toggleClass("is-open");
        $(".nav-body").toggleClass("is-open");
        $(".nav-body").removeClass("close");
        });
    });
//ホバー時クラス名を変える
$(function () {
    $(".menu-item-01").mouseover(function(e){
        $(".menu-item-01").addClass("is-open");
    })
    $(".menu-item-02").mouseover(function(e){
        $(".menu-item-02").addClass("is-open");
    })
    $(".menu-item-04").mouseover(function(e){
        $(".menu-item-04").addClass("is-open");
    })
    $(".menu-item-01").mouseout(function (e) {
        $(".menu-item-01").removeClass("is-open");
    })
    $(".menu-item-02").mouseout(function (e) {
        $(".menu-item-02").removeClass("is-open");
    })
    $(".menu-item-04").mouseout(function (e) {
        $(".menu-item-04").removeClass("is-open");    
    })
});

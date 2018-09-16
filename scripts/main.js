$(document).ready(function(){
    var $headerclone = $('header');
    var $sticky = $headerclone.before($headerclone.clone().addClass("sticky"));

    $(window).on("scroll", function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll", (scrollFromTop > 350));
    });

    //masonry
    $('.grid').masonry({
        //options
        itemSelector: '.grid-item',
        columnWidth: 100,
        fitWidth: true,
        gutter: 0
    });
});

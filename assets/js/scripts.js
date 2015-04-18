$(document).ready(function(){
    // Calculating footer height for sticky footer
    var footerHeight = $('.footer').height() + 75;
    $("body").css("margin-bottom", footerHeight);
    $(".footer").css("height", footerHeight);

    // Search Toggle
    $(".search-toggle, .search-close").click(function(){
        $(".search-form").toggle('blind');
    });

    // Center Reblog Icon on Pages
    var iconCount = 0;
    $(".like-reblog li").each(function(){
        iconCount += $(this).children().length;
    });
    if (iconCount === 1) {
        $(".like-reblog li:first-child").remove();
        $(".like-reblog li").css("width", "100%");
        $(".like-reblog li a").css("margin", "0 auto");
    }

    // Adding icons to Note section
    $(".notes .original_post").prepend("<span class=\"icon\">&#9998;</span>");
    $(".notes .reblog").not(".original_post").prepend("<span class=\"icon\">&#59159;</span>");
    $(".notes .like").prepend("<span class=\"icon\">&hearts;</span>");
});

function tumblrNotesInserted(){
    $(".notes .note").each(function(){
        var hasIcon = $(this).children().is(".icon");
        if (hasIcon) {
        } else {
            if ($(this).hasClass("original_post")) {
                $(this).prepend("<span class=\"icon\">&#9998;</span>");
            } else if ($(this).hasClass("reblog")) {
                $(this).prepend("<span class=\"icon\">&#59159;</span>");
            } else if ($(this).hasClass("like")) {
                $(this).prepend("<span class=\"icon\">&hearts;</span>");
            };
        };
    });
};
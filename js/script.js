// Tab functionallity
$(".tab-step .btn-step").click(function (e) {
    var test = $(e.currentTarget).data("tab");
    $(".tab-step .btn-step").removeClass("active");
    $(e.currentTarget).addClass("active");
    $(".tabs-items-step > div").addClass("d-none");
    $(".tabs-items-step  #" + test).removeClass("d-none");

})
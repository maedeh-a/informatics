// Tab functionallity
$(".tab-step .btn-step").click(function (e) {
    const image_name = $(e.currentTarget).data('image-name');
    if(!image_name) return;
    var test = $(e.currentTarget).data("tab");
    $(".tab-step .btn-step").removeClass("active");
    $(e.currentTarget).addClass("active");
    $(".tabs-items-step > div").fadeOut(200)
    setTimeout(() => {
        $(".tabs-items-step > div").addClass("d-none")
        $(".tabs-items-step  #" + test).removeClass("d-none");
        $(".tabs-items-step  #" + test).fadeIn(200);
    }, 200)

    const $img = $('.img-bg img')
    const src = $img.attr('src')
    const new_src = String(src).split('/').slice(0, -1).join('/') + "/" + image_name;
    $img.attr('src', new_src)

})

function openTab2(){
    $("[data-tab=STEP2]").click()
}

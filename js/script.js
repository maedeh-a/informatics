// Tab functionallity
$(".tab-step .btn-step").click(function (e) {
    var test = $(e.currentTarget).data("tab");
    $(".tab-step .btn-step").removeClass("active");
    $(e.currentTarget).addClass("active");
    $(".tabs-items-step > div").addClass("d-none");
    $(".tabs-items-step  #" + test).removeClass("d-none");
})

$(".btn-step").on('click', function (e) {
    console.log(e.currentTarget)
    const image_name = $(e.currentTarget).data('image-name');
    const $img = $('.img-bg img')
    const src = $img.attr('src')
    const new_src = String(src).split('/').slice(0, -1).join('/') + "/" + image_name;
    $img.attr('src', new_src)
})
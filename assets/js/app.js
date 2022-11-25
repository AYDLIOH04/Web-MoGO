$(function() {

    const header = $("#header"),
          headerLogo = $("#header__logo")
    let scrollOffSet = $(window).scrollTop()


    // Fixed Header
    checkScroll(scrollOffSet)

    $(window).on("scroll", function() {
        scrollOffSet = $(this).scrollTop() + 70
        checkScroll(scrollOffSet)
    })

    function checkScroll(scrollOffSet) {
        if (scrollOffSet >= $("#intro").innerHeight()){
            header.addClass("fixed")
            headerLogo.addClass("pointer")
        } else {
            header.removeClass("fixed")
            headerLogo.removeClass("pointer")

        }
    }


    // Smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault()
        
        const $this = $(this),
              blockId = $this.data("scroll")
              blockOffSet = $(blockId).offset().top

        $("#nav a").removeClass("active")
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500)

        $("#nav_toggle").removeClass("active")
        $("#nav").removeClass("active")
    })

    
    // Menu nav toogle
    $("#nav_toggle").on("click", function(event){
        event.preventDefault()

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    })


    // Collapse
    $("[data-collapse]").on("click", function(event){
        event.preventDefault()

        const $this = $(this),
              blockId = $this.data("collapse")

        $this.toggleClass("active")
        $(blockId).slideToggle() // Встроенные анимации
        
    })


    // Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    })

})
    function menu() {
        $("#menuToggle").on("click", function () {
            console.log('hello')
            $(".header-left").toggleClass("open");
            $(".main").toggleClass("open");
        });
        $(".cross").on("click", function () {
            $(".header-left").removeClass("open");
        });
        $(".nav-link").on("click", function () {
            $(".header-left").removeClass("open");
        });
    }
    
    // Document on Ready
    $(document).ready(function () {

        console.log('ready')
        menu();
    });

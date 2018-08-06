$("#button1").on("click", function () {
    $("#box").animate({ height: "+=35px", width: "+=35px" }, "fast");
})
$("#button2").on("click", function () {
    box.style.backgroundColor = "blue";
})
$("#button3").on("click", function () {
    $("#box").animate({ opacity: "-=.1" }, "fast");
    //box.style.opacity ="0"//
})
$("#button4").on("click", function () {
    box.style.backgroundColor = "orange";
    box.style.opacity = "1";
    $("#box").animate({ height: "150px", width: "150px" }, "fast");
})
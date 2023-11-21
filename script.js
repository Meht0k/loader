// var tl = gsap.timeline();


gsap.to('.loader h1', {
    scale: 1.1,
    // delay:.5,
    duration: 1,
    onStart: loader("")
})

gsap.to('.loader', {
    top: "-100vh",
    // delay: 2.2,
    duration: 2,
})

function loader() {
    var num = 0;
    setInterval(function () {
        num = num + Math.floor(Math.random() * 20);
        if (num < 100) {
            document.querySelector(".loader h1").innerHTML = num + "%";
        } else {
            num = 100;
            document.querySelector(".loader h1").innerHTML = num + "%";
        }
    }, 150)
}

loader();





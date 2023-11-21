var tl = gsap.timeline();
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
    }, 100)
};


tl.to('.loader h1', {
    duration: 1,
    onStart: loader()
})

tl.to('.loader', {
    top: "-100vh",
    delay: 2,
    duration: 2,
})








new wow().init();

var textWrapper = document.querySelector(".hero-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);
$(document).ready(function() {
    anime.timeline({ loop: false}).add({
        targets: ".hero-title .letter",
        translateY: [120, 0 ],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 2000 + 40 * i
    });
});

var t1 = new TimelineMax({
    paused: true
});

TweenMax.from(".hero-logo", 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1
});

TweenMax.from(".menu-toggle", 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.2
});

TweenMax.from(".view-photos", 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1.4
});


//const { default: Shery } = require("sheryjs");


Shery.mouseFollower()
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr", {videos: ["./0.mp4", "./2.mp4", "./3.mp4"]})



/*
gsap.to(".fleft-elem", {
    scrollTrigger: {
      trigger: "#featuredImages",    // Kisko element trigger krna hai
      pin: true,              // pin mtlb element ko vahi rok do
      start: "top top",       // start tb krna jb element ka top page ke top pr ponch jaye
      end: "bottom bottom",   // end tb krna jb element ka bottom page ke bottom pr ponch jaye
      endTrigger: "#last",             // Bottom kisko mana jaye?
      scrub: 1
    },
    y: "-300%",
  ease: Power1

})

let sections = document.querySelectorAll(".fleft-elem")

Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function(section, index){
      ScrollTrigger.create({
        trigger:section,
        start: "top top",
        scrub: 1,
        onUpdate: function(prog){
          setScroll(prog.progress+index)
        },
      });
    });
  },
});
*/


gsap.to(".fleft-elem", {
  scrollTrigger: {
    trigger: "#featuredImages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: "#last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleft-elem");
Shery.imageEffect(".images", {
  style: 4,
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress+index)
        },
      });
    });
  },
});

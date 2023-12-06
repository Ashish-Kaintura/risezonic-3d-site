gsap.from("#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4", {
  y: 100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.5,
  // scrollTrigger:{
  //   trigger:"#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4",
  //   scroller:"body"
  // }
});
gsap.to("#Page1 h1", {
  transform: "translateX(-50%)",
  //   fontWeight: "400",
  color: "#f0661b",
  scrollTrigger: {
    trigger: "#Page1",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#Page3 .riselogo, #Page3 h1", {
  x: -40,
  opacity: 0,
  // scale: 1.5,
  stagger: 0.2,
  duration: 0.5,
  // delay: 0.5,
  scrollTrigger: {
    trigger: "#Page3",
    scroller: "body",
    // markers: true,
    start: "top 50",
    end: "top -80",
    scrub: 2,
    // pin: true,
  },
});
gsap.from("#Page4 .whyus, #Page4 p", {
  x: -40,
  opacity: 0,
  // scale: 1.5,
  stagger: 0.5,
  duration: 0.5,
  // delay: 0.5,
  scrollTrigger: {
    trigger: "#Page4",
    scroller: "body",
    // markers: true,
    start: "top 50",
    end: "top -80",
    scrub: 2,
    // pin: true,
  },
});
gsap.from(
  "#Page4 .Aboutcard1, #Page4 .Aboutcard2, #Page4 .Aboutcard3, #Page4 .Aboutcard4",
  {
    // scale: 0.5,
    scale: 0.5,
    rotate: 360,
    opacity: 0,
    // scale: 1.5,
    stagger: 2,
    duration: 2,
    delay: 2,
    scrollTrigger: {
      trigger: "#Page4",
      scroller: "body",
      // markers: true,
      start: "top 0",
      end: "top -80",
      scrub: 2,
      // pin: true,
    },
  }
);
// gsap.to("#Page5 .whatwedoscroll", {
//   transform: "translateX(-500%)",
//   scrollTrigger: {
//     trigger: "#Page5",
//     scroller: "body",
//     markers: true,
//     start: "top 0",
//     end: "top -50%",
//     scrub: 2,
//     pin: true,
//   },
// });
gsap.from("#Page5 h3", {
  x: -40,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  stagger: 1.5,
  scrollTrigger: {
    trigger: "#Page5",
    scroller: "body",
    // markers: true,
    start: "top 180",
    end: "top 100%",
    scrub: 2,
    // pin: true,
  },
});
gsap.registerPlugin(ScrollTrigger);

gsap.to("#Page5 .whatwedoscroll", {
  transform: "translateX(-900%)",
  scrollTrigger: {
    trigger: "#Page5",
    scroller: "body",
    delay: 2,
    duration: 1,
    // markers: true,
    start: "top 0",
    end: "top -50%",
    scrub: 2,
    pin: true,
  },
});

// To prevent scrolling until the animation is complete
gsap.utils.toArray("#Page5").forEach((page) => {
  ScrollTrigger.create({
    trigger: page,
    start: "top top",
    end: "bottom top",
    scrub: false,
    onUpdate: (self) => {
      if (self.progress > 0.99) {
        self.disable();
      }
    },
  });
});

var tl = gsap.timeline();
tl.from("#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4", {
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
tl.from("#page1 h1,#page1 h2 ,#page1 h3", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scale: 1.5,
  stagger: 0.5,
});

tl.from(
  "#page2 .contectus, #page2 .contactbox1, #page2 .contactbox2,#page2 .contactbox3",
  {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scale: 1.5,
    stagger: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers: true,
      start: "top 0",
      end: "top -50%",
      scrub: 2,
      pin: true,
    },
  }
);
tl.from("#page3 .messageimg, #page3 .form-containers", {
  duration: 1,
  x: 100,
  delay: 0.5,
  opacity: 0,
  // scale: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top 50%",
    scrub: 2,
    // pin: true,
  },
});

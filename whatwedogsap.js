var tl = gsap.timeline();

tl.from("#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4", {
  y: 100,
  duration: 1,
  delay: 0,
  opacity: 0,
  stagger: 0.2,
  // scrollTrigger:{
  //   trigger:"#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4",
  //   scroller:"body"
  // }
});

tl.to("#fristsec .whatwedo1", {
  y: 10,
  duration: 0.5,
  delay: 0.5,
  opacity: 1,
  // skewY: 7,
  stagger: 0.2,
});
tl.to("#fristsec .whatwedo1 ", {
  scaleX: 0,
  scaleY: 0,
  duration: 0.5,
  delay: 0.5,
  filter: "blur(20px)", // Apply radial blur effect
  opacity: 1, // Reduce opacity
  stagger: 0.2,
});

tl.to("#fristsec .Circle ", {
  x: 900,
  duration: 0.5,
  scaleX: 2.5,
  scaleY: 2.5,
});
tl.to("#fristsec .Circle ", {
  x: 900,
  duration: 0.5,
  scaleX: 0,
  scaleY: 0,
  opacity: 0,
});
tl.to("#fristsec .media ", {
  x: -600,
  duration: 0.5,
  delay: 0.5,
  delay: 0.5,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});

tl.to("#fristsec .Audince ", {
  x: 650,
  duration: 0.5,
  delay: 0.5,
  delay: 0.5,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});
tl.to("#fristsec .Ongoing ", {
  y: 300,
  x: -400,
  duration: 0.5,
  delay: 0.5,
  delay: 0.5,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});
tl.to("#fristsec .Content-creation ", {
  y: 250,
  x: 400,
  duration: 0.5,
  delay: 0.5,
  delay: 0.5,
  opacity: 1,
  scaleX: 1,
  scaleY: 1,
});
tl.to("#fristsec .development ", {
  duration: 0.5,
  delay: 0.5,
  delay: 0.5,
  opacity: 1,
  scaleX: 1.5,
  scaleY: 1.5,
});
tl.to(
  "#fristsec .media, #fristsec .Audince,#fristsec .Ongoing, #fristsec .Content-creation , #fristsec .development  ",
  {
    x: 0,
    duration: 1,
    delay: 1,
    // rotate: 360,
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
  }
);

tl.from("#fristsec .Square, #fristsec .s-whatwedo", {
  x: -200,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.to("#fristsec .Square, #fristsec .s-whatwedo", {
  x: 80,
  duration: 1,
  delay: 1,
  opacity: 1,
  stagger: 0.2,
});

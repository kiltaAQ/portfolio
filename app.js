gsap.registerPlugin(ScrollTrigger); // REGISTERING SCROLLTRIGGER PLUGIN

// CREATING A NEW TIMELINE FOR HOME CONTENT *LINE 18
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "SlowMo.easeOut", y: "0%" },
});


// ANIMATING NAVBAR CONTENT
gsap.from(".nav-link", { duration: 1, ease: "SlowMo.easeOut", opacity: 0, y: "100%", stagger: 0.15 })
gsap.from(".city", {
  opacity: 0,
  y: "100%",
   duration: 1,
  delay: 0.5,
});

// ANIMATING HOME CONTENT
tl.to(".home-title", { duration: 1 })
   .to(".home-subtitle", { duration: 1 })

// ANIMATING ABOUT CONTENT
gsap.from(".img-wrapper", {
  scrollTrigger: ".img-wrapper",
  width: "0",
  opacity: 0,
  duration: 1.5,
  delay: 2.5,
  ease: "SlowMo.easeOut",
});

// ANIMATING PROJECT CONTENT
gsap.from(".box", {
   duration: 1,
   y: "100px",
   opacity: 0,
   scrollTrigger: ".box",
   transformOrigin: "left",
   stagger: 0.8,
});

// ANIMATING ALL CONTENTS' TITLE
gsap.to(".about", {
  duration: 1,
  y: "0%",
  scrollTrigger: ".about",
  delay: 2.5,
});
gsap.to(".skill", {
  duration: 1,
  y: "0%",
  scrollTrigger: ".skill",
  delay: 2.5,
});

gsap.to(".project", {
  duration: 1,
  y: "0%",
  scrollTrigger: ".project",
  delay: 5,
});

gsap.to(".contact", {
   duration: 1,
   y: "0%",
   scrollTrigger: ".contact",
   delay: 5,
});
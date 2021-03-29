gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: {duration: 1, ease: Expo.easeInOut}})

gsap.from(".nav-link", { duration: 1, opacity: 0, y: "100%", stagger: 0.1 });

gsap.from(".city", { duration: 1, opacity: 0, y: "100%", stagger: 0.1, delay: 0.3 });

gsap.from(".home-title", { duration: 1, opacity: 0, y: "100%" });

gsap.from(".home-subtitle", { duration: 1, opacity: 0, y: "100%", delay: 0.3 });

gsap.from(".img-wrapper", {
   scrollTrigger: ".img-wrapper",
   width: "0",
   opacity: 0,
   duration: 1,
   delay: 1.5,
   ease: Power2.easeIn
});
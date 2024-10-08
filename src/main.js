const preloader = document.querySelector(".preloader");
const loader = document.querySelector('.loading__rect-inner')

const tl = gsap.timeline();

loader.addEventListener("animationend", () => {
  tl.to(preloader, 2, {
    height: "0vh",
    ease: "slow(0.7, 0.7, false)",
  })
});
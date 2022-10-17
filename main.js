const firstSection = document.querySelector("#section-1");
const secondSection = document.querySelector("#section-2");
const thirdSection = document.querySelector("#section-3");
const fourthSection = document.querySelector("#section-4");
const arrow1 = document.querySelector("#section-1 > .arrow1");
const arrow2 = document.querySelector("#section-2 > .arrow2");
const arrow3 = document.querySelector("#section-3 > .arrow3");
const arrow4 = document.querySelector("#section-4 > .arrow4");

//animations

const secOneTimeline = gsap.timeline();

secOneTimeline
  .from("#section-1 > .Letter", {
    y: (-window.innerHeight - 200) / 2,
    duration: 0.75,
    ease: "bounce",
    opacity: 0,
    stagger: 0.05,
  })
  .to(arrow1, {
    x: -window.innerWidth / 1.01,
    y: -window.innerHeight / 2.75,
    rotation: 360,
    duration: 1.5,
    ease: "expo",
  });

// Animation Event Listeners

onresize = () => {
  console.log(window.innerHeight, window.innerWidth);
  gsap.to(arrow1, {
    x: -window.innerWidth / 1.01,
    y: -window.innerHeight / 2.75,
    duration: 0,
  });
};

const secTwoTimeline = gsap.timeline();

arrow1.onclick = () => {
  secTwoTimeline
    .to(firstSection, {
      x: "100%",
      duration: 1,
      ease: "bounce",
    })
    .from("#section-2 > .Letter", {
      y: (-window.innerHeight - 200) / 2,
      duration: 1,
      ease: "bounce",
      opacity: 0,
      stagger: 0.05,
    })
    .to(arrow2, {
      x: window.innerWidth / 2.5,
      y: window.innerHeight / 1.05,
      rotation: 270,
      duration: 1.5,
      ease: "expo",
    });
};

const secThreeTimeline = gsap.timeline();

arrow2.onclick = () => {
  secThreeTimeline
    .to(secondSection, {
      y: "-100%",
      duration: 1,
      ease: "bounce",
    })
    .from("#section-3 > .Letter", {
      y: (-window.innerHeight - 200) / 2,
      duration: 1,
      ease: "bounce",
      opacity: 0,
      stagger: 0.05,
    })
    .to(arrow3, {
      x: window.innerWidth / 1.01,
      y: window.innerHeight / 2.75,
      rotation: 180,
      duration: 1.5,
      ease: "expo",
    });
};

const secFourTimeline = gsap.timeline();

arrow3.onclick = () => {
  secFourTimeline
    .to(thirdSection, {
      x: "-100%",
      duration: 1,
      ease: "bounce",
    })
    .from("#section-4 > .Letter", {
      y: (-window.innerHeight - 200) / 2,
      duration: 1,
      ease: "bounce",
      opacity: 0,
      stagger: 0.05,
    })
    .to(arrow4, {
      x: window.innerWidth / 2.75,
      y: -window.innerHeight / 1.01,
      rotation: 450,
      duration: 1.5,
      ease: "expo",
    });
};

const secFiveTimeline = gsap.timeline();

arrow4.onclick = () => {
  secFiveTimeline
    .to(firstSection, {
      x: "0%",
      duration: 0,
    })
    .to(secondSection, {
      y: "0%",
      duration: 0,
    })
    .to(thirdSection, {
      x: "0%",
      duration: 0,
    })
    .to(fourthSection, {
      y: "100%",
      duration: 1,
      ease: "bounce",
      zIndex: 999,
    })
    .from("#section-4 > .Letter", {
      y: (-window.innerHeight - 200) / 2,
      duration: 1,
      ease: "bounce",
      opacity: 0,
      stagger: 0.05,
    })
    .to(fourthSection, {
      y: "0%",
      duration: 0,
      zIndex: 0,
    })
    .from("#section-1 > .Letter", {
      y: (-window.innerHeight - 200) / 2,
      duration: 0.75,
      ease: "bounce",
      opacity: 0,
      stagger: 0.075,
    })
    .to(arrow1, {
      x: -window.innerWidth / 1.01,
      y: -window.innerHeight / 2.75,
      rotation: 360,
      duration: 1.5,
      ease: "expo",
    });
};

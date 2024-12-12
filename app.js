gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const section1TL = gsap.timeline();

const section2TL = gsap.timeline({
  scrollTrigger: {
    trigger: '.section2',
    start: 'top top',
    scrub: true,
    pin: true
  }
});

const horizontalTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.horizontal-sections',
    start: 'top',
    end: 'bottom',
    scrub: true,
    pin: true
  }
});

const section5TL = gsap.timeline({
  scrollTrigger: {
    trigger: '.section5',
    start: 'top',
    end: 'bottom',
    scrub: true,
    pin: true
  }
});

section1TL
  .from('.section1 h1 span:nth-child(1)', {
    x: '-100vw',
    duration: 0.5
  })
  .from('.section1 h1 span:nth-child(2)', {
    x: '100vw',
    duration: 0.5
  }, '<')
  .from('.section1 p', {
    transformOrigin: 'top left',
    rotation: 90,
    duration: 0.5,
    opacity: 0
  })
  .from('.section1 img', {
    y: '100vh',
    duration: 0.5
  });

section2TL
  .from('.section2 h2 span:nth-child(1)', {
    y: '-100vh',
  })
  .from('.section2 h2 span:nth-child(2)', {
    y: '-100vh',
    duration: 1
  })
  .from('.section2 p', {
    rotationY: 90,
    opacity: 0,
    duration: 1
  });

const horizontalSections = document.querySelector('.horizontal-sections');
const section4 = document.querySelector('.section4');

horizontalTL
  .from('.section3 h2', {
    x: '-100vw',
    scale: 10,
  })
  .to('p span', {
    backgroundColor: 'white',
    color: 'grey',
  })
  .from('p span', {
    y: '100vh',
    stagger: 0.5,
  }, '<')
  .to('.horizontal-sections', {
    xPercent: -35,
  })
  .from('.portfolio-item', {
    x: '100vw',
    stagger: 0.1,
  });

  const contactMe = document.querySelector('.section5 h2');
  const words = contactMe.innerText.split(' ');
  const contactSpans = words[0].split('').map(letter => `<span>${letter}</span>`).join('');
  const meSpans = words[1].split('').map(letter => `<span>${letter}</span>`).join('');
  contactMe.innerHTML = `${contactSpans}<span>　　</span>${meSpans}`;

  section5TL
    .from('.section5 h2 span', {
      y: '-100vh',
      stagger: 0.1,
    })
    .from('.section5 p', {
      y: '100vh',
      opacity: 0,
    })
    .from('.contact-btn', {
      scale: 0,
    })
    .to('.section5', {
      backgroundColor: 'black',
    })
    .from('.section5', {
      backgroundPositionX: 300,
    }, '<');

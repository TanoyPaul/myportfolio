const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const scrollDownIconDiv = document.querySelector(".scroll-down");
const navUlOptions = document.querySelectorAll(".nav-ul li");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

main.addEventListener("mousemove", function (event) {
  gsap.to("#cursor", {
    x: event.x,
    y: event.y,
    duration: 0.6,
    ease: "back.out",
  });
});


function navAnim() {
  navUlOptions.forEach((listOption) => {
    listOption.addEventListener("mouseover", () => {
      cursor.innerText = "view more";
      gsap.to("#cursor", {
        scale: 5,
        duration: 0.8,
        ease: "power3.out",
        color: "black",
        fontSize: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      });
    });
    listOption.addEventListener("mouseleave", () => {
      cursor.innerText = "";
      gsap.to("#cursor", {
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    listOption.addEventListener("click", () => {
      gsap.to(
        mobileMenu, {
          y: -1200,
          duration: 2,
          ease: "power4.out"
        }
      )
    })
  });
}

navAnim();

const tl = gsap.timeline();

function aboutAnim() {
  tl.from(".nav-ul, .mobile-screen-resume", {
    delay: 0.8,
    y: 4,
    opacity: 0,
    duration: 2,
  });

  tl.from(
    ".navbar header, .btn-div, .about-me-heading, .menu-div",
    {
      y: 20,
      duration: 1,
      opacity: 0,
    },
    "about-anim"
  );
  tl.from(
    ".about-me-paragraph, .scroll-svg",
    {
      y: -20,
      duration: 1,
      opacity: 0,
    },
    "about-anim"
  );

  tl.from(".nav-ul li", {
    scale: 0,
    duration: 1.2,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out",
  });
}

aboutAnim();

function overviewAnim() {
  gsap.from(".overview-p-1 h5, .overview-p-1 h1, .overview-p-1 p", {
    y: 24,
    opacity: 0,
    duration: 2.4,
    stagger: 0.2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".overview-p-1",
      scroller: "body",
      start: "top 60%",
    },
  });

  gsap.from(".overview-p-2 .card", {
    x: -24,
    opacity: 0,
    duration: 2.4,
    stagger: 0.2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".overview-p-2",
      scroller: "body",
      start: "top 60%",
    },
  });
}

overviewAnim();

function skillsAnim() {
  gsap.from(".skills-heading h5, .skills-heading h1, .skills-heading p", {
    y: 24,
    opacity: 0,
    duration: 2.4,
    stagger: 0.2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".skills-heading",
      scroller: "body",
      start: "top 70%",
    },
  });

  gsap.from(
    ".skills-imgs",
    {
      x: -60,
      opacity: 0,
      duration: 2.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-desc",
        scroller: "body",
        start: "top 70%",
      },
    },
    "skills-anim"
  );

  gsap.from(
    ".skills-about",
    {
      x: 60,
      opacity: 0,
      duration: 2.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-about",
        scroller: "body",
        start: "top 75%",
      },
    },
    "skills-anim"
  );
}

skillsAnim();

function projectsAnim() {
  gsap.from(".projects-heading h5, .projects-heading h1", {
    y: 24,
    opacity: 0,
    duration: 2.4,
    stagger: 0.2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".projects-heading",
      scroller: "body",
      start: "top 85%",
    },
  });

  gsap.from(".project", {
    y: 24,
    opacity: 0,
    duration: 2.4,
    stagger: 0.2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".all-projects",
      scroller: "body",
      start: "top 85%",
    },
  });

  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach(function (project) {
    let rotate = 0;
    let differenceRotation = 0;

    project.addEventListener("mouseenter", function () {
      gsap.to(project.querySelector("img"), {
        opacity: 1,
        scale: 1.1,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    const mdQuery = window.matchMedia("(min-width: 900px)"); // assuming MD breakpoint is 768px

    project.addEventListener("mousemove", function (dets) {
      let difference = dets.clientY - project.getBoundingClientRect().top;
      differenceRotation = dets.clientX - rotate;
      rotate = dets.clientX;

      const xValue = mdQuery.matches ? dets.clientX - 280 : dets.clientX - 120;

      gsap.to(project.querySelector("img"), {
        opacity: 1,
        scale: 1.1,
        top: difference,
        x: xValue,
        y: -difference,
        duration: 0.8,
        ease: "power3.out",
        rotate: gsap.utils.clamp(-20, 20, differenceRotation),
      });
      cursor.style.display = "none";
    });

    project.addEventListener("mouseleave", function () {
      gsap.to(project.querySelector("img"), {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      cursor.style.display = "";
    });
  });
}

projectsAnim();

function testimonialsAnim() {
  gsap.from("#testimonials", {
    y: 60,
    opacity: 0,
    ease: "elastic.out",
    duration: 2.4,
  });

  gsap.from(".testimonials-heading h5, .testimonials-heading h1", {
    y: 60,
    opacity: 0,
    duration: 2.4,
    stagger: 0.2,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: "#testimonials",
      scroller: "body",
      start: "top 80%",
    },
  });

  var swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  gsap.from(".reviews", {
    y: 60,
    opacity: 0,
    duration: 2.4,
    ease: "elastic.out",
    scrollTrigger: {
      trigger: ".reviews",
      scroller: "body",
      start: "top 80%",
    },
  });
}

testimonialsAnim();

function contactAnim() {
  gsap.from(".contact-form", {
    y: 60,
    opacity: 0,
    ease: "elastic.out",
    duration: 2.4,
  });

  gsap.from(".contact-heading h5, .contact-heading h1", {
    y: 60,
    opacity: 0,
    ease: "elastic.out",
    duration: 2.4,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#contact",
      scroller: "body",
      start: "top 80%",
    },
  });

  gsap.from(
    ".your-name label, .your-name input, .your-email label, .your-email input, .your-msg label, .your-msg textarea, .send-btn-div",
    {
      y: 20,
      opacity: 0,
      ease: "elastic.out",
      duration: 2.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#contact",
        scroller: "body",
        start: "top 80%",
      },
    }
  );
}

contactAnim();

function contactFormControl () {
  const form = document.querySelector('form');
form.addEventListener('submit', sendEmail);

function sendEmail(e) {
  e.preventDefault();
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_ywb20kb";
  const templateId = "template_eifwt2m";
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.log(err);
    });
    showNotification("Your message has been sent successfully !");

}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  notification.querySelector(".notification-message").innerHTML = message;
  setTimeout(closeNotification, 5000);
}

function closeNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "none";
}
}

contactFormControl();


function handleMobileMenu () {
  openMenuBtn.addEventListener(
    'click', function () {
      gsap.to(
        mobileMenu, {
          y: 0,
          duration: 2,
          ease: "power4.out"
        }
      )
    }
  )
  closeMenuBtn.addEventListener(
    'click', function () {
      gsap.to(
        mobileMenu, {
          y: -1200,
          duration: 2,
          ease: "power4.out"
        }
      )
    }
  )

}

handleMobileMenu();
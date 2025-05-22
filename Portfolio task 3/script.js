      // Sticky Navigation
      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Mobile Menu Toggle
      const menuToggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");

      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });

      // Animate skill bars when in viewport
      function animateSkillBars() {
        const skillBars = document.querySelectorAll(".skill-progress");

        skillBars.forEach((bar) => {
          const barPosition = bar.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (barPosition < screenPosition) {
            const width = bar.getAttribute("data-width");
            bar.style.width = width + "%";
          }
        });
      }

      // Animate timeline items when in viewport
      function animateTimeline() {
        const timelineItems = document.querySelectorAll(".timeline-item");

        timelineItems.forEach((item) => {
          const itemPosition = item.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (itemPosition < screenPosition) {
            item.classList.add("visible");
          }
        });
      }

      // Contact Form Submission
      const contactForm = document.getElementById("contactForm");
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Here you would typically send the form data to a server
        // For this demo, we'll just show an alert
        alert(
          `Thank you, ${name}! Your message has been received. I'll get back to you soon.`
        );

        // Reset form
        contactForm.reset();
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70, // Adjust for navbar height
              behavior: "smooth",
            });
          }
        });
      });

      // Listen for scroll events
      window.addEventListener("scroll", function () {
        animateSkillBars();
        animateTimeline();
      });

      // Initial animation on page load
      window.addEventListener("load", function () {
        animateSkillBars();
        animateTimeline();
      });
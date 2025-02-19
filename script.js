document.addEventListener("DOMContentLoaded", function () {
  VANTA.NET({
    el: "#hero-animation",
    color: 0x00bfff,
    backgroundColor: 0x000000,
    points: 10.0,
    maxDistance: 20.0,
    spacing: 15.0,
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    form.reset();
  });

  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.08)";
      card.style.boxShadow = "0px 6px 20px rgba(0, 191, 255, 0.8)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });

    // Make the logo clickable and navigate to homepage
    document.querySelector(".logo").addEventListener("click", function () {
      window.location.href = "index.html";
    });

    // Add hover effect to navigation menu
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.color = "#00bfff";
        link.style.textShadow = "0 0 8px #00bfff";
      });
      link.addEventListener("mouseleave", () => {
        link.style.color = "#ffffff";
        link.style.textShadow = "none";
      });
    });

    const portfolioData = [
      {
        logo: "6omb.jpeg",
        name: "6omb AI",
        description: "Driving conversions and lower CPCs through broad match",
        metrics: [
          "128% Increase in website traffic",
          "98% Increase in conversions",
          "13% Lower CPCs",
        ],
      },
      {
        logo: "company2.png",
        name: "Britbox",
        description: "Enhancing engagement with targeted marketing strategies",
        metrics: [
          "110% Increase in subscribers",
          "85% Higher retention rate",
          "20% Increase in watch time",
        ],
      },
      {
        logo: "aw.png",
        name: "Avanti West Coast",
        description:
          "Boosting ticket sales through innovative digital campaigns",
        metrics: [
          "90% More bookings",
          "75% Increase in app usage",
          "50% Growth in online ticket sales",
        ],
      },
      {
        logo: "yinson.png",
        name: "Yinson",
        description:
          "Expanding global workspace solutions with AI-driven insights",
        metrics: [
          "60% More office leases",
          "45% Increase in client retention",
          "30% Growth in new locations",
        ],
      },
    ];

    let currentIndex = 0;
    const portfolioSection = document.querySelector(".portfolio-content");

    function updatePortfolio(index) {
      portfolioSection.style.transition =
        "transform 0.6s ease-in-out, opacity 0.6s ease-in-out";
      portfolioSection.style.opacity = "0";
      portfolioSection.style.transform = "translateX(-50px)";

      setTimeout(() => {
        document.getElementById("company-logo").src = portfolioData[index].logo;
        document.getElementById("company-name").textContent =
          portfolioData[index].name;
        document.getElementById("company-description").textContent =
          portfolioData[index].description;

        const metricsContainer = document.querySelector(".metrics");
        metricsContainer.innerHTML = portfolioData[index].metrics
          .map(
            (metric) =>
              `<div class='metric-box'><p><strong>${metric}</strong></p></div>`
          )
          .join("");

        portfolioSection.style.opacity = "1";
        portfolioSection.style.transform = "translateX(0)";
      }, 600);
    }

    function changePortfolio(index) {
      currentIndex = index;
      updatePortfolio(index);
    }

    function autoChangePortfolio() {
      currentIndex = (currentIndex + 1) % portfolioData.length;
      updatePortfolio(currentIndex);
    }

    setInterval(autoChangePortfolio, 3000);

    const pricingSection = document.getElementById("pricing");
    const pricingContainer = document.querySelector(".pricing-container");

    if (pricingSection && pricingContainer) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              pricingSection.classList.add("visible");
              pricingContainer.classList.add("visible"); // Reveal pricing boxes
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(pricingSection);
    }

    // 3D rotation animation for buttons
    const buttons = document.querySelectorAll("button, .ctabutton");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.style.transform = "rotateX(25deg) rotateY(15deg)";
        button.style.transition = "transform 0.3s ease-in-out";
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "rotateX(0) rotateY(0)";
      });
    });
  });
});

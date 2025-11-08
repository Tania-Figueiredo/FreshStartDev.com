  // --------------------------------------------------------
  //                   About page
  // --------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {


  const typingEl = document.getElementById("typing-text");
  if (typingEl) {
    const text = "Front-End Developer & Product Builder based in Portugal 🇵🇹";
    let i = 0;

    function type() {
      if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 70); // velocidade de escrita
      }
    }
    type();
  }

  
  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeEls.forEach(el => observer.observe(el));
  }

  
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTop";
  scrollBtn.title = "Back to top";
  scrollBtn.innerHTML = "↑";
  document.body.appendChild(scrollBtn);

  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollBtn.classList.add("show");
    else scrollBtn.classList.remove("show");
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// --------------------------------------------------------
//                   Contact page
// --------------------------------------------------------
const contactForm = document.querySelector('form[name="contact"]');

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Mostra mensagem personalizada
        const successMsg = document.createElement("div");
        successMsg.className = "form-success fade-in";
        successMsg.innerHTML = `
          <i class="bi bi-check-circle-fill"></i>
          <p>Thank you for your message!<br/>I’ll get back to you soon 💌</p>
        `;
        contactForm.replaceWith(successMsg);

        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending form. Please try again later.");
    }
  });
}

// Toggle button label for More Projects
const toggleBtn = document.getElementById("toggle-more");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    setTimeout(() => {
      toggleBtn.textContent =
        toggleBtn.textContent.includes("Show")
          ? "Hide Projects ↑"
          : "Show More Projects ↓";
    }, 200);
  });
}
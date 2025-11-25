// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // === LOGIN FORM FUNCTIONALITY ===
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent form from refreshing the page

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        alert("Please fill in both fields before logging in.");
        return;
      }

      // Example validation — you can customize this later
      if (username === "admin" && password === "1234") {
        alert("✅ Login successful! Redirecting to home page...");
        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert("❌ Invalid username or password. Please try again.");
      }
    });
  }

  // === NAVBAR SCROLL EFFECT (Optional Enhancement) ===
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
        navbar.classList.add("shadow");
      } else {
        navbar.classList.remove("shadow");
      }
    });
  }

  // === SMOOTH SCROLL FOR LINKS (Optional Enhancement) ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // search function
  function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if(query) {
      window.location.href = `Trays.html?search=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search term.");
    }
  }

});

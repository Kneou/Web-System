// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  // === LOGIN FORM FUNCTIONALITY ===
  // Inline validation for login form
  const loginTab = document.querySelector('#login form');
  if (loginTab) {
    loginTab.addEventListener('submit', function(e) {
      e.preventDefault();
      const errorDiv = loginTab.querySelector('.form__error');
      const email = loginTab.querySelector('input[type="email"]');
      const password = loginTab.querySelector('input[type="password"]');
      let errorMsg = '';
      if (!email.value.trim()) {
        errorMsg = 'Email is required.';
        email.setAttribute('aria-invalid', 'true');
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errorMsg = 'Please enter a valid email address.';
        email.setAttribute('aria-invalid', 'true');
      } else {
        email.removeAttribute('aria-invalid');
      }
      if (!password.value.trim()) {
        errorMsg = 'Password is required.';
        password.setAttribute('aria-invalid', 'true');
      } else {
        password.removeAttribute('aria-invalid');
      }
      if (errorMsg) {
        errorDiv.textContent = errorMsg;
        return;
      }
      errorDiv.textContent = '';
      // Proceed with Firebase login (handled elsewhere)
    });
  }

  // Inline validation for signup form
  const signupTab = document.querySelector('#signup form');
  if (signupTab) {
    signupTab.addEventListener('submit', function(e) {
      e.preventDefault();
      const errorDiv = signupTab.querySelector('.form__error');
      const name = signupTab.querySelector('input[type="text"]');
      const email = signupTab.querySelector('input[type="email"]');
      const password = signupTab.querySelector('input[type="password"]');
      let errorMsg = '';
      if (!name.value.trim()) {
        errorMsg = 'Full name is required.';
        name.setAttribute('aria-invalid', 'true');
      } else {
        name.removeAttribute('aria-invalid');
      }
      if (!email.value.trim()) {
        errorMsg = 'Email is required.';
        email.setAttribute('aria-invalid', 'true');
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errorMsg = 'Please enter a valid email address.';
        email.setAttribute('aria-invalid', 'true');
      } else {
        email.removeAttribute('aria-invalid');
      }
      if (!password.value.trim()) {
        errorMsg = 'Password is required.';
        password.setAttribute('aria-invalid', 'true');
      } else if (password.value.length < 6) {
        errorMsg = 'Password must be at least 6 characters.';
        password.setAttribute('aria-invalid', 'true');
      } else {
        password.removeAttribute('aria-invalid');
      }
      if (errorMsg) {
        errorDiv.textContent = errorMsg;
        return;
      }
      errorDiv.textContent = '';
      // Proceed with Firebase signup (handled elsewhere)
    });
  }

  // === ACCESSIBILITY: Focus trap for active tab panel ===
  function trapFocus(element) {
    const focusableEls = element.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];
    element.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  // Trap focus in active tab panel
  const tabPanels = document.querySelectorAll('.tab-pane');
  tabPanels.forEach(panel => {
    panel.addEventListener('shown.bs.tab', function() {
      trapFocus(panel);
      // Focus first input
      const input = panel.querySelector('input, button');
      if (input) input.focus();
    });
  });

  // === ACCESSIBILITY: ESC closes modals/menus ===
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Example: close any open modal (Bootstrap modal or custom)
      const openModal = document.querySelector('.modal.show');
      if (openModal) {
        const closeBtn = openModal.querySelector('[data-bs-dismiss="modal"]');
        if (closeBtn) closeBtn.click();
      }
      // Example: collapse nav menu if open
      const navMenu = document.querySelector('.navbar-collapse.show');
      if (navMenu) {
        navMenu.classList.remove('show');
      }
    }
  });

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

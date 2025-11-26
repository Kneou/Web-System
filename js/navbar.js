// Navbar Active State Script
document.addEventListener('DOMContentLoaded', function() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Map page names to navigation links
  const pageMap = {
    'index.html': 'HOME',
    'Trays.html': 'TRAYS',
    'Best-Seller.html': 'BEST SELLER',
    'Chef.html': 'CHEFS',
    'About.html': 'ABOUT',
    'Cart-View.html': 'HOME', // Cart doesn't have its own nav item
    'login.html': 'HOME',
    'forgotpassword.html': 'HOME'
  };
  
  // Also check for category pages
  const categoryPages = ['Beef-Category.html', 'Chicken-Category.html', 'Pork-Category.html', 
                         'Vegetables-Category.html', 'Dessert-Category.html', 'Seafood-Category.html'];
  
  if (categoryPages.includes(currentPage)) {
    pageMap[currentPage] = 'TRAYS';
  }
  
  // Find all navigation links
  const navLinks = document.querySelectorAll('#navbar nav ul li a');
  
  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current page link
  const currentPageName = pageMap[currentPage];
  if (currentPageName) {
    navLinks.forEach(link => {
      if (link.textContent.trim() === currentPageName) {
        link.classList.add('active');
      }
    });
  }
  
  // Add smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('#navbar nav ul');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navList.classList.toggle('open');
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navList.classList.remove('open');
      });
    });
  }

  // Add loading animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
  }, 10);
});


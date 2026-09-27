/**
 * Kopken Holic - Mobile Navigation & Hamburger Menu Toggle
 */
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('menuCloseBtn');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');

  if (!hamburgerBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('is-active');
    hamburgerBtn.classList.add('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-active');
    hamburgerBtn.classList.remove('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('is-active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close when clicking any menu link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  // Auto close if window resized beyond mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });
});

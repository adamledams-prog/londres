// ===== SAUVEGARDE CHECKBOXES =====
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

  // Restaurer depuis localStorage
  checkboxes.forEach((cb, i) => {
    const saved = localStorage.getItem(`cb_${i}`);
    if (saved === 'true') cb.checked = true;

    cb.addEventListener('change', () => {
      localStorage.setItem(`cb_${i}`, cb.checked);
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

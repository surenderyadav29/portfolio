// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project details popup
const projectModal = document.getElementById('projectDetailsModal');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalText = document.getElementById('projectModalText');

document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    projectModalTitle.textContent = button.dataset.title || 'Project Details';
    projectModalText.textContent = button.dataset.details || '';
    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
  });
});

function closeProjectModal() {
  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');
}

document.querySelector('.project-modal-close').addEventListener('click', closeProjectModal);
projectModal.addEventListener('click', event => {
  if (event.target === projectModal) closeProjectModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeProjectModal();
});

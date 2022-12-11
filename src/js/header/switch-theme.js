const formToggleRefs = {
  labels: document.querySelectorAll('.label-toggle'),
  toggle: document.querySelector('.toggle'),
};

formToggleRefs.toggle.addEventListener('change', () => {
  document.body.classList.toggle('js-dark-theme');
  formToggleRefs.labels[0].classList.toggle('label-light-toggle-light-theme');
  formToggleRefs.labels[0].classList.toggle('label-light-toggle-dark-theme');
  formToggleRefs.labels[1].classList.toggle('label-dark-toggle-light-theme');
  formToggleRefs.labels[1].classList.toggle('label-dark-toggle-dark-theme');
});

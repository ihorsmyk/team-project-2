const formToggleRefs = {
  labels: document.querySelectorAll('.label-toggle'),
  toggle: document.querySelector('.toggle'),
};

formToggleRefs.toggle.addEventListener('change', () => {
  formToggleRefs2.mobileMenuBacground.classList.toggle(
    'mobile-menu-background-switcher'
  );
  formToggleRefs2.mobileMenuBtn.classList.toggle(
    'mobile-menu-background-switcher'
  );
  document.body.classList.toggle('js-dark-theme');
  formToggleRefs2.labels[0].classList.toggle('label-light-toggle-light-theme');
  formToggleRefs2.labels[0].classList.toggle('label-light-toggle-dark-theme');
  formToggleRefs2.labels[1].classList.toggle('label-dark-toggle-light-theme');
  formToggleRefs2.labels[1].classList.toggle('label-dark-toggle-dark-theme');
});
//
const formToggleRefs2 = {
  labels: document.querySelectorAll('.label-toggle2'),
  toggle: document.querySelector('.toggle2'),
  mobileMenuBacground: document.querySelector('.mobile-menu'),
  mobileMenuBtn: document.querySelector('.mobile-menu__btn'),
};

formToggleRefs2.toggle.addEventListener('change', () => {
  formToggleRefs2.mobileMenuBacground.classList.toggle(
    'mobile-menu-background-switcher'
  );
  formToggleRefs2.mobileMenuBtn.classList.toggle(
    'mobile-menu-background-switcher'
  );
  document.body.classList.toggle('js-dark-theme');
  formToggleRefs2.labels[0].classList.toggle('label-light-toggle-light-theme');
  formToggleRefs2.labels[0].classList.toggle('label-light-toggle-dark-theme');
  formToggleRefs2.labels[1].classList.toggle('label-dark-toggle-light-theme');
  formToggleRefs2.labels[1].classList.toggle('label-dark-toggle-dark-theme');
});

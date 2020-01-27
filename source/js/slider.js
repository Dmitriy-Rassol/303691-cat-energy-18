var progress = document.querySelector('.example_progress');
var progressWrap = document.querySelector('.example_progress-wrapper');
var progressToggle = document.querySelector('.example_progress-toggle');
var btnBefore = progress.querySelector('.example_progress-button--before');
var btnAfter = progress.querySelector('.example_progress-button--after');

if (progress) {
  btnBefore.addEventListener('click', function () {
    progressWrap.classList.remove('example_progress-wrapper--after');
    progressToggle.classList.remove('example_progress-toggle--after');
  });

  btnAfter.addEventListener('click', function () {
    progressWrap.classList.add('example_progress-wrapper--after');
    progressToggle.classList.add('example_progress-toggle--after');
  })
}

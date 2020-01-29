var progress = document.querySelector('.example__progress');
var progressWrap = document.querySelector('.example__progress-wrapper');
var progressToggle = document.querySelector('.example__state-toggle');
var btnBefore = progress.querySelector('.example__state-button--before');
var btnAfter = progress.querySelector('.example__state-button--after');

if (progress) {
  btnBefore.addEventListener('click', function () {
    progressWrap.classList.remove('example__progress-wrapper--after');
    progressToggle.classList.remove('example__state-toggle--after');
  });

  btnAfter.addEventListener('click', function () {
    progressWrap.classList.add('example__progress-wrapper--after');
    progressToggle.classList.add('example__state-toggle--after');
  })
}

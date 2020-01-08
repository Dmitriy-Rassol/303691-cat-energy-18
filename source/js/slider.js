var progress = document.querySelector('.example__progress');
var progressWrap = document.querySelector('.example__progress-wrapper');
var progressToggle = document.querySelector('.example__progress-toggle');
var btnBefore = progress.querySelector('.example__progress-button--before');
var btnAfter = progress.querySelector('.example__progress-button--after');
var range = progress.querySelector('.example__range');
var imgBefore = progress.querySelector('.example__image--before');
var imgAfter = progress.querySelector('.example__image--after');
var tabletWidth = 768;

if (progress) {
  btnBefore.addEventListener('click', function () {
    progressWrap.classList.remove('example__progress-wrapper--after');
    progressToggle.classList.remove('example__progress-toggle--after');
  });

  btnAfter.addEventListener('click', function () {
    progressWrap.classList.add('example__progress-wrapper--after');
    progressToggle.classList.add('example__progress-toggle--after');
  })
}


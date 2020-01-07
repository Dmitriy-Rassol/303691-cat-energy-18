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
  })

  btnAfter.addEventListener('click', function () {
    progressWrap.classList.add('example__progress-wrapper--after');
    progressToggle.classList.add('example__progress-toggle--after');
  })


}

if (document.body.clientWidth>= tabletWidth) {
    range.addEventListener('input', function() {
    imgBefore.style.width = (100 - range.value) + '%';
    imgAfter.style.width = range.value + '%';
  })

  btnBefore.addEventListener('click', function () {
    imgBefore.style.width = '100%';
    imgAfter.style.width = '0%';
    range.value = 0;
  })

  btnAfter.addEventListener('click', function () {
    imgAfter.style.width = '100%';
    imgBefore.style.width = '0%';
    range.value = 100;
  })

}

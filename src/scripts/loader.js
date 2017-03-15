(function () {
  'use strict';

  // set opacity to 0
  function hideDeleteLoader() {
    var loadContainer = document.querySelector('.loading-container');
    loadContainer.style.opacity = 0;

    setTimeout(function () {
      // delete load container after transition
      document.body.removeChild(loadContainer);
    }, 2000);
  }
  window.addEventListener('load', hideDeleteLoader);
}());

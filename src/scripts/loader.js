(function () {
  "use strict";

  window.addEventListener('load', hide_delete_Loader);

  // set opacity to 0
  function hide_delete_Loader() {
    var loadContainer = document.querySelector('.loading-container');
    loadContainer.style.opacity = 0;

    setTimeout(function () {
      // delete load container after transition
      document.body.removeChild(loadContainer);
    }, 2000);
  }
})();
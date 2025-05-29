function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param) || '';
   }

   document.getElementById('first-name').textContent = getQueryParam('first-name');
   document.getElementById('last-name').textContent = getQueryParam('last-name');
   document.getElementById('email').textContent = getQueryParam('email');
   document.getElementById('mobile').textContent = getQueryParam('mobile');
   document.getElementById('organization').textContent = getQueryParam('organization');
   document.getElementById('timestamp').textContent = getQueryParam('timestamp').slice(0, 10);
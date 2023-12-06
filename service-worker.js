const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  const publicUrl = new URL('https://patopitaluga.github.io/clp-conv/', window.location);
  if (publicUrl.origin !== window.location.origin) return;

  window.addEventListener('load', () => {
    const swUrl = 'https://patopitaluga.github.io/clp-conv/service-worker.js';

    if (isLocalhost) {
      checkValidServiceWorker(swUrl);
      return navigator.serviceWorker.ready.then(() => {
        console.log(
          'This web app is being served cache-first by a service ' +
            'worker. To learn more, visit https://example'
        );
      });
    }
    registerValidSW(swUrl);
  });
};

function checkValidServiceWorker(swUrl) {
  fetch(swUrl).then(response => {
    if (
      response.status === 404 ||
      response.headers.get('content-type').indexOf('javascript') === -1
    ) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => window.location.reload());
      });
    } else {
      registerValidSW(swUrl);
    }
  })
  .catch(() => {
    console.log(
      'No internet connection found. App is running in offline mode.'
    );
  });
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller)
              console.log('New content is available; please refresh.');
            else
              console.log('Content is cached for offline use.');
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
};

export function unregister() {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.ready.then(registration => registration.unregister());
};

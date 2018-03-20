import 'core-js/es6/promise';

export default function IntroMessages(patatap) {

  const rootEl = document.getElementById('intro-messages'),
        firstDialog = rootEl.querySelector('.js_intro-messages__first-message'),
        secondDialog = rootEl.querySelector('.js_intro-messages__second-message'),
        thirdDialog = rootEl.querySelector('.js_intro-messages__third-message');

  function showDialog(el) {
    if (el.classList.contains('intro-messages__message--hidden')) {
      el.classList.remove('intro-messages__message--hidden');
    }
    popInDialog(el)
      .then(() => {
        slowRotateDialog(el);
      })
  }

  function hideDialog(el) {
    return new Promise((resolve) => {
      el.classList.remove('intro-messages__message--slow-rotate');
      popOutDialog(el)
        .then(() => {
          el.classList.add('intro-messages__message--hidden');
          setTimeout(() => {
            resolve();
          }, 400);
        })
    });
  }

  function popInDialog(el) {
    return new Promise((resolve) => {
      el.classList.add('intro-messages__message--pop-in')
      patatap.play('k');
      setTimeout(() => {
        resolve();
      }, 1000)
    });
  }

  function popOutDialog(el) {
    return new Promise((resolve) => {
      el.classList.add('intro-messages__message--pop-out')
      setTimeout(() => {
        resolve();
      }, 1000)
    });
  }

  function slowRotateDialog(el) {
    el.classList.add('intro-messages__message--slow-rotate');
  }

  function whenUserResponds(responseCount) {
    return new Promise((resolve) => {
      switch (responseCount) {
        case 0:
          window.addEventListener('keyup', function userResponse() {
            hideDialog(firstDialog)
              .then(() => {
                showDialog(secondDialog);
              });
            resolve(1);
            window.removeEventListener('keyup', userResponse);
          });
          break;
        case 1:
          window.addEventListener('keyup', function userResponse() {
            hideDialog(secondDialog)
              .then(() => {
                showDialog(thirdDialog);
              });
            resolve(2);
            window.removeEventListener('keyup', userResponse);
          });
          break;
        case 2:
          window.addEventListener('keyup', function userResponse() {
            hideDialog(thirdDialog);
            resolve(3);
            window.removeEventListener('keyup', userResponse);
          });
          break;
      }
    });
  }

  function userResponseLoop(responseCount = 0) {
    whenUserResponds(responseCount)
      .then((newCount) => {
        if (newCount == 3) {
          return;
        } else {
          userResponseLoop(newCount);
        }
      });
  }

  return {
    init() {
      showDialog(firstDialog);
      userResponseLoop();
    }
  }

}

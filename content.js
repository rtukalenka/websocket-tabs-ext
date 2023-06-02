console.log('ws init');

let iframe = document.createElement('iframe');
iframe.src = 'http://localhost:3000';
iframe.id = 'ws-iframe';

document.body.appendChild(iframe);

window.onmessage = function(e) {
    if (e.origin === 'http://localhost:3000') {
        console.log('[IFRAME-INJECTED-PAGE] message from IFRAME-PROXY-PAGE', e);
    }
};

setTimeout(function() {
    document.querySelector('#ws-iframe').contentWindow.postMessage({
        type: 'message',
        sender: 'iframe_injected_page',
        payload: {
            date: +new Date()
        }
    }, '*');
}, 2500);

// Define as a global param in order to make it disconnectable.
var observer = new MutationObserver(function (mutation){
    // When pace-progress's "data-progress-text" is mutated, the following code runs.
    var progressRatio = mutation[0].target.getAttribute("data-progress-text");
    document.getElementsByClassName("starlight-ratio")[0].textContent = progressRatio;
});

Pace.on('start', function() {
    var wrapper = document.createElement('div');
    var back    = document.createElement('div');
    var banner  = document.createElement('div');
    var panel   = document.createElement('div');
    var ratio   = document.createElement('div');

    wrapper.className = 'starlight-loading';
    back.className    = 'starlight-back';
    banner.className  = 'starlight-banner';
    panel.className   = 'starlight-panel';
    ratio.className   = 'starlight-ratio';

    // --------------------------------------------------
    // Setup starlight-panel

    var message_up = document.createElement('p');
    var message_dn = document.createElement('p');
    message_up.className = 'message-up';
    message_dn.className = 'message-down';
    message_up.appendChild(document.createTextNode('データダウンロード中'));
    message_dn.appendChild(document.createTextNode('※通信環境の良い所で実行してください'));
    panel.appendChild(message_up);
    panel.appendChild(message_dn);

    var progress_border = document.createElement('div');
    progress_border.className = 'progress-border';
    panel.appendChild(progress_border);

    // --------------------------------------------------
    // Setup starlight-banner

    var nowLoading = document.createElement('p');
    nowLoading.appendChild(document.createTextNode('Now Loading...'));
    banner.appendChild(nowLoading);

    var heart = document.createElement('img');
    heart.className = 'heart';
    heart.setAttribute('src', 'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aa%3D%22http%3A%2F%2Fns.adobe.com%2FAdobeSVGViewerExtensions%2F3.0%2F%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2275.1px%22%20height%3D%2264.4px%22%20viewBox%3D%220%200%2075.1%2064.4%22%20style%3D%22enable-background%3Anew%200%200%2075.1%2064.4%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cdefs%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M69.6%2C5.6c-7.4-7.4-19.4-7.4-26.9%2C0l-5.1%2C5.1l-5.1-5.1C25-1.9%2C13-1.9%2C5.6%2C5.6s-7.4%2C19.5%2C0%2C26.9l32%2C32l32-32C77%2C25%2C77%2C13%2C69.6%2C5.6z%20M56%2C34.3c-1.4-11.1-2.4-12.5-11.5-14.1c9.1-1.7%2C10.2-3%2C11.5-14.1c1.4%2C11.1%2C2.4%2C12.5%2C11.5%2C14.1C58.4%2C21.8%2C57.3%2C23.1%2C56%2C34.3z%22%2F%3E%3C%2Fsvg%3E%0D%0A');
    banner.appendChild(heart);

    // --------------------------------------------------
    // Setup starlight-ratio

    // check if pace-progress's "data-progress-text" is mutated by pace.js
    var progressElem = document.getElementsByClassName("pace-progress")[0];
    observer.observe(progressElem, {attributes: true, attributeFilter: ["data-progress-text"]});

    // --------------------------------------------------
    // Integrate

    wrapper.appendChild(back);
    wrapper.appendChild(banner);
    wrapper.appendChild(panel);
    wrapper.appendChild(ratio);
    document.body.appendChild(wrapper);
});

Pace.on('done', function() {
    var wrapper = document.getElementsByClassName("starlight-loading")[0];
    wrapper.classList.add("hide");
    observer.disconnect();
});

Pace.start();

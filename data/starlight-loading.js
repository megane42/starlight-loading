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

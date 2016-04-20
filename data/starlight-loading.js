// Define as a global param in order to make it disconnectable.
var observer = new MutationObserver(function (mutation){
    // When pace-progress's "data-progress-text" is mutated, the following code runs.
    var progressRatio = mutation[0].target.getAttribute("data-progress-text");
    document.getElementsByClassName("starlight-ratio")[0].textContent = progressRatio;
});

Pace.on('start', function() {
    var wrapper = document.createElement('div');
    var back    = document.createElement('div');
    var logo    = document.createElement('div');
    var panel   = document.createElement('div');
    var ratio   = document.createElement('div');

    wrapper.className = 'starlight-loading';
    back.className    = 'starlight-back';
    logo.className    = 'starlight-logo';
    panel.className   = 'starlight-panel';
    ratio.className   = 'starlight-ratio';

    var panelImg = document.createElement('img');
    panelImg.src = starlightOption.panelUrl;
    panel.appendChild(panelImg);

    // check if pace-progress's "data-progress-text" is mutated by pace.js
    var progressElem = document.getElementsByClassName("pace-progress")[0];
    observer.observe(progressElem, {attributes: true, attributeFilter: ["data-progress-text"]});

    wrapper.appendChild(back);
    wrapper.appendChild(logo);
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

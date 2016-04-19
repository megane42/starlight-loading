var starlight_show = function() {
    var wrapper = document.createElement('div');
    var back = document.createElement('div');
    var logo = document.createElement('div');
    wrapper.className = 'starlight-loading';
    back.className = 'starlight-back';
    logo.className = 'starlight-logo';
    wrapper.appendChild(back);
    wrapper.appendChild(logo);
    document.body.appendChild(wrapper);
}

var starlight_hide = function() {
    var wrapper = document.getElementsByClassName("starlight-loading")[0];
    wrapper.classList.add("hide");
}

Pace.on('start', starlight_show);
Pace.on('done',  starlight_hide);
Pace.start();

var show = function() {
    var back = document.createElement('div');
    var logo = document.createElement('div');
    back.className = 'starlight-back';
    logo.className = 'starlight-logo';
    document.body.appendChild(back);
    document.body.appendChild(logo);
}

var hide = function() {
    var back = document.getElementsByClassName("starlight-back")[0];
    var logo = document.getElementsByClassName("starlight-logo")[0];
    back.classList.add("hide");
    logo.classList.add("hide");
}

Pace.on('start', show);
Pace.on('done',  hide);
Pace.start();

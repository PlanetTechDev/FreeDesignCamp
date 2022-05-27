function openDonate() {
    // it opens the donate panel.
    var openDonate = document.getElementById('mainbar');

    var displaySetting = opendonate.style.display;
}

// to toggle on the panel or not.

if (displaySetting == 'block') {
    //mainbar is still visible, gonna hide it with this.
    opendonate.style.display = 'none';
    // change button text
    
    
}

var number = document.getElementById('number');

number.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}


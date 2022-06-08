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

// Database Test

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

<script type="text/javascript">
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
</script>

document.getElementById(open-menu)

// Open Menu Mobile 

function openmenu() {
  var x = document.getElementById("mobile-menu_r");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display="block";
  }
}

var d = new Date().getDay();
var titles = ['title 1', 'title 2', 'title 3', 'title 4', 'title 5', 'title 6', 'title 7'];

document.getElementsByClassName("mobile-menu_msg").innerHTML = titles[d-1];

function openmenu() {
  var x = document.getElementById("mobile-menu_r");
  if (x.style.display === "block") {
  x.style.display = "none";
  } else {
  x.style.display="block";
  }
}
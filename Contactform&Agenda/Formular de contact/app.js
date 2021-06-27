var result = document.getElementById("LstName") 
var showBnr = document.querySelector(".hidebanner")
var FirstName = document.getElementById('FirstName')
var LastName = document.getElementById('LastName')
var gender = document.getElementsByName("gender")
var error = document.getElementById("error")
var button = document.getElementById("btn1")
button.addEventListener('click', myFct2)

function myFct1(elementId) {
    var elem = document.getElementById(elementId)
    if (elem.value) {
        elem.classList.remove('red')
        elem.classList.add('black')
    }
}
function radiobtn() {
    if (gender[0].value || gender[1].value) {
        error.innerHTML = ''
    }
}

function addEvent(node, type, callback) {
    if (node.addEventListener) {
      node.addEventListener(
        type,
        function(e) {
          callback(e, e.target);
        },
        false
      );
    } else if (node.attachEvent) {
      node.attachEvent("on" + type, function(e) {
        callback(e, e.srcElement);
      });
    }
  }
  
function myFct2() {
        
    var valid = true;

    if (FirstName.value == "") {
        FirstName.classList.add('red')
        showBnr.style.visibility = "hidden"
        valid = false;
    }
    if (LastName.value == "") {
        LastName.classList.add('red')
        showBnr.style.visibility = "hidden"
        valid = false;
    }

    if (!(gender[0].checked || gender[1].checked)) {
        error.innerHTML = "Please select gender!"
        error.style.color = "red"
        valid = false;
    }

    if (valid) {
        var results = document.querySelectorAll("input")
        for (var i = 0; i < results.length; i++) {
            if (results[i].type == "radio") {  
                if (results[i].checked) {  
                    // console.log(results[i].value)
                }
            }
        }
        var textare = document.getElementById("textare")
        showBnr.style.visibility = "visible"
        result.innerHTML = "Thank you for contacting us, " + " " + LastName.value
    } else {
        
        return;
    }
}
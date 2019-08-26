var button = document.querySelector(".calculate");
var screen = document.querySelector(".screenview")

var arr = [];
var total = 0;
function Caluculate(num) {
    //alert(num.target.value)

    var string = "";
    arr.push(num.target.value)
    for (var i = 0; i < arr.length; i++) {
        string += arr[i]
        
        console.log(string)


        if (num.target.value === "=") {
            string == total;
        }
    }



    screen.innerHTML = string;

}
button.addEventListener('click', Caluculate);
//FizzBuzz coding interview question in Kotlin
//by Freya-The-Goddess

function main() {
    var fizz = 3;
    var buzz = 5;
    var endNumber = 100;
    
    var output = ""
    for (let i = 1; i <= endNumber; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            output += "FizzBuzz";
        } else if (i % fizz == 0) {
            output += "Fizz";
        } else if (i % buzz == 0) {
            output += "Buzz";
        } else {
            output += i.toString();
        }
        output += "\r\n"
    }
    document.getElementById("result").textContent = output;
}


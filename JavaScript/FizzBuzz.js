//FizzBuzz coding interview question in JavaScript
//by Freya-The-Goddess

function fizzbuzz() {
    var fizz = 3;
    var buzz = 5;
    var endNumber = 100;
    
    var result = ""
    for (let i = 1; i <= endNumber; i++) {
        output = ""
        output += (i % fizz == 0 ? "Fizz" : "")
        output += (i % buzz == 0 ? "Buzz" : "")
        result += (output || i.toString()) + "\r\n"
    }
    return result
}

function main() {
    document.getElementById("result").textContent = fizzbuzz();
}

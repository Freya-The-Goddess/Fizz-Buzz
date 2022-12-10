//FizzBuzz coding interview question in Kotlin Script
//by Freya-The-Goddess

val fizz: Int = 3
val buzz: Int = 5
val endNumber: Int = 100

for (i in 1..endNumber) {
    var output = ""
    if (i % fizz == 0) output += "Fizz"
    if (i % buzz == 0) output += "Buzz"
    if (output.isEmpty()) output = i.toString()
    println(output)
}
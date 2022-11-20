//FizzBuzz coding interview question in Kotlin
//by Freya-The-Goddess

fun main() {
    val fizz: Int = 3
    val buzz: Int = 5
    val endNumber: Int = 100

    for (i in 1..endNumber) {
        val output = if (i % fizz == 0 && i % buzz == 0) {
            "FizzBuzz"
        } else if (i % fizz == 0) {
            "Fizz"
        } else if (i % buzz == 0) {
            "Buzz"
        } else {
            i.toString()
        }
        println(output)
    }
}
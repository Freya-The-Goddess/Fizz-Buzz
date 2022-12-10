#FizzBuzz coding interview question in Python3
#by Freya-The-Goddess

fizz = 3
buzz = 5
endNumber = 100

for i in range(1, endNumber+1):
    output = ""
    output += "Fizz" if i % fizz == 0 else ""
    output += "Buzz" if i % buzz == 0 else ""
    print(output or i)

#FizzBuzz coding interview question in Python3
#by Freya-The-Goddess

fizz = 3
buzz = 5
endNumber = 100

for i in range(1, endNumber+1):
    if i % fizz == 0 and i % buzz == 0:
        output = "FizzBuzz"
    elif i % fizz == 0:
        output = "Fizz"
    elif i % buzz == 0:
        output = "Buzz"
    else:
        output = i

    print(output)

#FizzBuzz coding interview question in Ruby
#by Freya-The-Goddess

fizz = 3
buzz = 5
endNumber = 100

for i in 1..endNumber do
    output = ""
    output += "Fizz" if i % fizz == 0
    output += "Buzz" if i % buzz == 0
    output = i.to_s if output.empty?
    puts output
end

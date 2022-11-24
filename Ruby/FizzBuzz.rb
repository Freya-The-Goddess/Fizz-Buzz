#FizzBuzz coding interview question in Ruby
#by Freya-The-Goddess

fizz = 3
buzz = 5
endNumber = 100

for i in 1..endNumber do
    if i % fizz == 0 and i % buzz == 0
        output = "FizzBuzz"
    elsif i % fizz == 0
        output = "Fizz"
    elsif i % buzz == 0
        output = "Buzz"
    else
        output = i
    end

    puts output
end

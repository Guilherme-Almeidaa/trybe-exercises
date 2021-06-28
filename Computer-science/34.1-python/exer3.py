def square(number):
    line = ""
    for n in range(number):
        line += "*"

    for li in range(number):
        print(line)


print(square(5))

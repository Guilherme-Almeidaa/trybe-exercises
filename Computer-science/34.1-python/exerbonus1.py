def smaller_number(numbers):
    number = numbers[0]
    for n in numbers:
        if n < number:
            number = n
    return number


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(smaller_number(numbers))

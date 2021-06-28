def calculateaverage(numbers):
    result = 0
    sum = 0
    for number in numbers:
        sum += number

    result = sum / len(numbers)
    return result


numbers = [2, 3, 3, 5, 7, 10]

print(calculateaverage(numbers))

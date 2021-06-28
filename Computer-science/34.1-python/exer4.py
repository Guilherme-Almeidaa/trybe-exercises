def biggestname(names):
    number = 0
    for name in names:
        if len(name) > number:
            number = len(name)
            result = name
    return result


listnames = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(biggestname(listnames))

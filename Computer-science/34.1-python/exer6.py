def triangle_type(l1, l2, l3):
    if l1 == l2 == l3:
        return "Triângulo Equilátero"
    elif l1 == l2 or l1 == l3 or l2 == l3:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(triangle_type(3, 1, 2))

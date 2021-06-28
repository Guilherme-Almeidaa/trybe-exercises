AMOUNT_OF_LITERS = 18

PRICE = 80

AREA_PER_LITER = 3


def quantityandprice(m):
    quantity_liters = m / 3
    quantity_cans = round(quantity_liters / AMOUNT_OF_LITERS + 0.5)
    price_total = quantity_cans * PRICE
    return (quantity_cans, price_total)


print(quantityandprice(2000))

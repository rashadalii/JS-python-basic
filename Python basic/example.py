# num1 = 12
# num2 = 18
# a = num1
# b = num2

# while a != b:
#     if a < b:
#         a += num1
#     else:
#         b += num2

# lcm = a
# print("LCM:", lcm)


# num = int(input("Eded daxil edin: "))

# def perfectNumber(number):
#     sum = 0
#     for i in range(2, number//2 + 1):
#         if number % i == 0:
#             sum += i
#     sum += 1 + number

#     if sum == number * 2:
#         print("Mohtesem ededdir....")
#     else:
#         print("Mohtesem eded deyil...")

# perfectNumber(num)



# def convertDecimalToBinary(number):
#     binary = ""
#     while True:
#         binary += str(number % 2)
#         number = number // 2
#         if number == 1:
#             binary += '1'
#             break

#     result = reverse(binary)
#     print("Netice:", result)

# def reverse(binary):
#     reversedBinary = ""
#     for i in range(len(binary) - 1, -1, -1):
#         reversedBinary += binary[i]
#     return reversedBinary

# convertDecimalToBinary(10)



# binary = "1011001101"

# def convertBinaryToDecimal(binary):
#     sum = 0
#     power = 0

#     for i in range(len(binary) - 1, -1, -1):
#         if int(binary[i]) != 0:
#             sum += int(binary[i]) * (2 ** power)
#         power += 1

#     print("Result:", sum)

# convertBinaryToDecimal(binary)

# text = "Hal hazirda javascript dili oyrenirem "
# letter = input("Herfi daxil edin: ")

# def find(letter):
#     count = 0
#     for char in text:
#         if char.lower() == letter.lower():
#             count += 1
#     return count

# result = find(letter)
# print("Herf sayisi:", result)


# def reversed_string(s):
#     return s[::-1]

# name = "radar"
# result = reversed_string(name)
# print(result)

# if result == name:
#     print("Name is palindrome")

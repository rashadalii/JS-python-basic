# 1.Program to print numbers from 1 to 10 using a while loop:
num = 1
while num <= 10:
    print(num)
    num += 1
# 2.Program to print even numbers from 0 to 20 using a for loop:
for num in range(0, 21, 2):
    print(num)
# 3.Program to find the sum of numbers from 1 to 100 using a while loop:
num = 1
sum = 0
while num <= 100:
    sum += num
    num += 1
print("Sum:", sum)
# 4.Program to print the multiplication table of 5 using a for loop:
num = 5
for i in range(1, 11):
    print(num, "x", i, "=", num * i)
# 5.Program to calculate the factorial of a number using a while loop:
num = 5
factorial = 1
while num > 0:
    factorial *= num
    num -= 1
print("Factorial:", factorial)
# 6.Program to print the reverse of a given number using a while loop:
num = 12345
reverse = 0
while num > 0:
    remainder = num % 10
    reverse = reverse * 10 + remainder
    num = num // 10
print("Reverse:", reverse)
# 7.Program to check if a number is prime or not using a while loop:
num = 17
is_prime = True
if num < 2:
    is_prime = False
else:
    i = 2
    while i * i <= num:
        if num % i == 0:
            is_prime = False
            break
        i += 1
if is_prime:
    print(num, "is a prime number.")
else:
    print(num, "is not a prime number.")
# 8.Program to find the sum of digits of a number using a while loop:
num = 12345
sum_digits = 0
while num > 0:
    sum_digits += num % 10
    num = num // 10
print("Sum of digits:", sum_digits)
# 9.Program to print the Fibonacci series up to 10 terms using a for loop:
a, b = 0, 1
for _ in range(10):
    print(a, end=" ")
    a, b = b, a + b
# 10.Program to print the square of numbers from 1 to 10 using a while loop:
num = 1
while num <= 10:
    print(num ** 2)
    num += 1
# 11.Program to find the largest element in an array using a for loop:
arr = [5, 10, 3, 8, 15]
max_num = arr[0]
for num in arr:
    if num > max_num:
        max_num = num
print("Largest element:", max_num)
# 12.Program to count the number of vowels in a string using a while loop:
string = "Hello, World!"
vowels = "aeiouAEIOU"
count = 0
index = 0
while index < len(string):
    if string[index] in vowels:
        count += 1
    index += 1
print("Number of vowels:", count)
# 13.Program to check if a string is a palindrome using a while loop:
string = "radar"
is_palindrome = True
left, right = 0, len(string) - 1
while left < right:
    if string[left] != string[right]:
        is_palindrome = False
        break
    left += 1
    right -= 1
if is_palindrome:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")
    
# 14.Program to find the GCD of two numbers using a while loop:
num1 = 60
num2 = 48

while num2 != 0:
    temp = num2
    num2 = num1 % num2
    num1 = temp

print("GCD:", num1)

# 15.Program to print the ASCII values of lowercase alphabets using a for loop:
for char in range(ord('a'), ord('z')+1):
    print(chr(char), ":", char)

# 16.Program to find the sum of all odd numbers from 1 to 50 using a while loop:
num = 1
sum_odd = 0
while num <= 50:
    if num % 2 != 0:
        sum_odd += num
    num += 1
print("Sum of odd numbers:", sum_odd)

# 17.Program to reverse a given string using a for loop:
string = "hello"
reversed_string = ""
for char in string:
    reversed_string = char + reversed_string
print("Reversed string:", reversed_string)

# 18.Program to print numbers from 10 to 1 in reverse order using a while loop:
num = 10
while num >= 1:
    print(num)
    num -= 1

# 19.Program to print the first 10 natural numbers using a for loop:
for num in range(1, 11):
    print(num)
# 20.Program to check if a number is Armstrong or not using a while loop:
num = 153
order = len(str(num))
temp = num
sum = 0

while temp > 0:
    digit = temp % 10
    sum += digit ** order
    temp //= 10

if num == sum:
    print(num, "is an Armstrong number.")
else:
    print(num, "is not an Armstrong number.")

# 21.Program to find the LCM of two numbers using a while loop:
num1 = 12
num2 = 18
a = num1
b = num2

while a != b:
    if a < b:
        a += num1
    else:
        b += num2

lcm = a
print("LCM:", lcm)

# 22.Program to print the ASCII values of uppercase alphabets using a for loop:

for char in range(ord('A'), ord('Z')+1):
    print(chr(char), ":", char)

# 23.Program to print numbers divisible by 3 from 1 to 30 using a while loop:
num = 1
while num <= 30:
    if num % 3 == 0:
        print(num)
    num += 1

# 24.Program to check if a given year is a leap year or not using a while loop:
year = 2024
is_leap_year = False

while year % 4 == 0:
    if year % 100 != 0 or year % 400 == 0:
        is_leap_year = True
    break

if is_leap_year:
    print(year, "is a leap year.")
else:
    print(year, "is not a leap year.")

# 25.Program to find the factorial of a number using a for loop:
num = 5
factorial = 1
for i in range(1, num + 1):
    factorial *= i
print("Factorial of", num, "is", factorial)

# 26.Program to check if a given number is a perfect number or not using a while loop:
num = 28
sum_factors = 0
i = 1

while i < num:
    if num % i == 0:
        sum_factors += i
    i += 1

if sum_factors == num:
    print(num, "is a perfect number.")
else:
    print(num, "is not a perfect number.")
    
# 27.Program to find the sum of all prime numbers from 1 to 50 using a for loop:
sum_primes = 0

for num in range(2, 51):
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        sum_primes += num

print("Sum of prime numbers from 1 to 50:", sum_primes)

# 28.Program to print the first 10 even numbers using a while loop:
num = 2
count = 0

while count < 10:
    print(num)
    num += 2
    count += 1

# 29.Program to count the number of words in a sentence using a while loop:
sentence = "This is a sample sentence."
word_count = 0
index = 0

while index < len(sentence):
    if sentence[index] == " ":
        word_count += 1
    index += 1

word_count += 1  # Adding 1 for the last word
print("Number of words:", word_count)

# 30.Program to print numbers from 1 to 100 in steps of 5 using a for loop:
for num in range(1, 101, 5):
    print(num)

# 31. Program to find the reverse of a given string using a while loop:
string = "hello"
reversed_string = ""
index = len(string) - 1

while index >= 0:
    reversed_string += string[index]
    index -= 1

print("Reversed string:", reversed_string)

# 32.Program to print the first 10 odd numbers using a for loop:
for num in range(1, 20, 2):
    print(num)

# 33.Program to check if a given number is a palindrome or not using a while loop:
num = 12321
temp = num
reverse_num = 0

while temp > 0:
    digit = temp % 10
    reverse_num = reverse_num * 10 + digit
    temp //= 10

if num == reverse_num:
    print(num, "is a palindrome.")
else:
    print(num, "is not a palindrome.")

# 34.Program to print the first 10 multiples of 3 using a for loop:
for i in range(1, 11):
    print(3 * i)

# 35.Program to calculate the power of a number using a while loop:

base = 2
exponent = 5
result = 1

while exponent > 0:
    result *= base
    exponent -= 1

print("Result:", result)

#  36.Program to find the sum of all even numbers from 1 to 50 using a for loop:
sum_even = 0
for num in range(2, 51, 2):
    sum_even += num
print("Sum of even numbers from 1 to 50:", sum_even)

# 37.Program to count the number of digits in a number using a while loop:
num = 12345
count = 0
while num != 0:
    count += 1
    num //= 10
print("Number of digits:", count)

# 38.Program to print the first 10 Fibonacci numbers using a for loop
n = 10
a, b = 0, 1
for _ in range(n):
    print(a)
    a, b = b, a + b

# 39.Program to print numbers from 50 to 1 in steps of 2 using a while loop:
num = 50
while num >= 1:
    print(num)
    num -= 2

# 40.Program to check if a given string is a palindrome or not using a for loop:
string = "radar"
is_palindrome = True
for i in range(len(string) // 2):
    if string[i] != string[-i - 1]:
        is_palindrome = False
        break

if is_palindrome:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")

# 41.Program to print the ASCII values of digits from 0 to 9 using a while loop:
digit = 0
while digit <= 9:
    print(f"ASCII value of {digit}:", ord(str(digit)))
    digit += 1

# 42.Program to find the sum of digits of a number using a for loop:
num = 12345
sum_digits = 0
for digit in str(num):
    sum_digits += int(digit)
print("Sum of digits:", sum_digits)

# 43.Program to check if a given number is a strong number or not using a while loop:
num = 145
temp = num
sum_factorial = 0

while temp > 0:
    digit = temp % 10
    factorial = 1
    for i in range(1, digit + 1):
        factorial *= i
    sum_factorial += factorial
    temp //= 10

if num == sum_factorial:
    print(num, "is a strong number.")
else:
    print(num, "is not a strong number.")

# 44.Program to find the sum of all natural numbers divisible by 5 from 1 to 100 using a for loop:
sum_divisible_by_5 = 0
for num in range(1, 101):
    if num % 5 == 0:
        sum_divisible_by_5 += num
print("Sum of natural numbers divisible by 5 from 1 to 100:", sum_divisible_by_5)

# 45.Program to print the first 10 prime numbers using a while loop:
count = 0
num = 2

while count < 10:
    is_prime = True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            is_prime = False
            break
    if is_prime:
        print(num)
        count += 1
    num += 1


# 46.Program to check if a given string is a palindrome or not ignoring spaces using a while loop:
string = "a man a plan a canal panama"
string = string.replace(" ", "")  # Remove spaces
is_palindrome = True
left, right = 0, len(string) - 1

while left < right:
    if string[left] != string[right]:
        is_palindrome = False
        break
    left += 1
    right -= 1

if is_palindrome:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")

# 47.Program to print numbers from 1 to 100 in reverse order using a for loop:
for num in range(100, 0, -1):
    print(num)

# 48.Program to find the sum of digits of a number until it becomes a single digit using a while loop:
num = 9876

while num > 9:
    sum_digits = 0
    while num > 0:
        sum_digits += num % 10
        num //= 10
    num = sum_digits

print("Sum of digits until single digit:", num)

# 49.Program to print the multiplication table of a given number using a while loop:
num = 5
i = 1

while i <= 10:
    print(num, "x", i, "=", num * i)
    i += 1

# 50.Program to find the factorial of a number using both for and while loops:
# Using for loop
num = 5
factorial_for = 1
for i in range(1, num + 1):
    factorial_for *= i
print("Factorial using for loop:", factorial_for)

# Using while loop
num = 5
factorial_while = 1
i = 1
while i <= num:
    factorial_while *= i
    i += 1
print("Factorial using while loop:", factorial_while)



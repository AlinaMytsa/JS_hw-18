# JS_hw-18
Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:

строку

число, которое является длинной строки, которую мы хотим получить в результате выполнения функции

символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо

параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)

Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.

Результат вызова функции нужно вывести в консоль — после завершения функции.

Например:

Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки, нужно строку обрезать при помощи метода substr

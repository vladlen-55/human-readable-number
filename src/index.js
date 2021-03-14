module.exports = function toReadable (number) {
    let low = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let low1 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let high = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number == 0) {
        return "zero";
    }
    let result = "";
    if (number > 99) {
        result += low[Math.floor(number / 100)] + " hundred ";
    }
    number = number % 100;
    if (number > 19) {
        result += high[Math.floor(number / 10)] + " ";
        number = number % 10;
    } else if (number >= 10) {
        result += low1[number - 10] + " ";
        number = 0;
    }
    result += low[number];
    return result.trim();
}

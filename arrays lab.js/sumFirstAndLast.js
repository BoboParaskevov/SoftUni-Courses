function sumFirstAndLast(num) {
        const first = num[0]
        const last = num[num.length - 1]

        const sum = first + last;
        console.log(sum);
}
sumFirstAndLast([20,30,40])
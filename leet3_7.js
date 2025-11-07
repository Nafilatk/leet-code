function reverse(x) {
    let rev = 0;
    const MAX = 2147483647;
    const MIN = -2147483648;

    while (x !== 0) {
        let pop = x % 10;              
        x = (x / 10) | 0;              

        if (rev > Math.floor(MAX / 10) || (rev === Math.floor(MAX / 10) && pop > 7)) return 0;
        if (rev < Math.ceil(MIN / 10) || (rev === Math.ceil(MIN / 10) && pop < -8)) return 0;
    }

    return rev;
}

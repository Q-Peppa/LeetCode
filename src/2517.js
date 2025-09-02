var maximumTastiness = function(price, k) {
    price.sort((a, b) => a - b);
    let left = 0, right = price[price.length - 1] - price[0];
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (check(price, k, mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

const check = (price, k, tastiness) => {
    let prev = -Number.MAX_VALUE / 2;
    let cnt = 0;
    for (const p of price) {
        if (p - prev >= tastiness) {
            cnt++;
            prev = p;
        }
    }
    return cnt >= k;
};

// Runtime Complexity: O(2n - 1), drop non-dominants to become O(2n), drop constants to become O(n)

let memo = [];

function fib(n) {
    let fibArr = [];
    fibArr[0] = 0;
    fibArr[1] = 1;

    for (let index = 2; index <= n; index++) {
        fibArr[index] = fibArr[index - 1] + fibArr[index - 2];
    }

    return fibArr[n];

    
    // ... with memoization, slower.
    // if (memo[n] !== undefined) {
    //     return memo[n];
    // }
    // if (n === 0 || fib === 1) {
    //     return n;
    // }
    // memo[n] = fib(n - 1) + fib(n - 2);
    // return memo[n];
}
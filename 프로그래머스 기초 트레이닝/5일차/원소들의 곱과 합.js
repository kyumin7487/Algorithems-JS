function solution(num_list) {
    let mul = num_list.reduce((accumulator, currentNumber) => accumulator * currentNumber);
    let sum = num_list.reduce((accumulator, currentNumber) => accumulator + currentNumber);
    return mul <= (sum*sum) ? 1 : 0;
}
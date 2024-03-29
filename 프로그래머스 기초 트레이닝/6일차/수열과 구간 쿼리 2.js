function solution(arr, queries) {
    let answer = [];

    queries.forEach((query) => {
        const [s, e, k] = query;
        const subArr = arr.slice(s, e + 1);
        const filterArr = subArr.filter(num => num > k);

        filterArr.length === 0 ? answer.push(-1) : answer.push(Math.min(...filterArr));
    });

    return answer;
}
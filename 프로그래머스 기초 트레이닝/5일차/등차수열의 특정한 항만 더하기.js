function solution(a, d, included) {
    var answer = 0;
    included.forEach(function(i) {
        (i === true) && (answer += a);
        a += d;
    })
    return answer;
}
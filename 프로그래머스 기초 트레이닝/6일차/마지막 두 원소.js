function solution(num_list) {
    let answer = 0;
    num_list[num_list.length-1] > num_list[num_list.length-2]
    ? answer = (num_list[num_list.length-1] - num_list[num_list.length-2])
    : answer = (num_list[num_list.length-1] * 2);
    num_list.push(answer);
    return num_list;
}
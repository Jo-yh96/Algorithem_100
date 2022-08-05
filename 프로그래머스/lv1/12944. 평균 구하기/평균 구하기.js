function solution(arr) {
    let sum = arr.reduce((acc,cur)=> acc+cur)
    var answer = sum / arr.length;
    return answer;
}
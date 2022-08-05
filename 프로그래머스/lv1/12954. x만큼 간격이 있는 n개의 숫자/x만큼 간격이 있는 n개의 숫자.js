function solution(x, n) {
    var answer = [];
    let firstNum = x
    for(let i = 0; i<n;i++){
        answer.push(x)
        x += firstNum
    }   
    return answer;
}
function solution(phone_number) {
    var answer = phone_number.split('').fill("*",0,phone_number.split('').length-4).join("");
    return answer;
}
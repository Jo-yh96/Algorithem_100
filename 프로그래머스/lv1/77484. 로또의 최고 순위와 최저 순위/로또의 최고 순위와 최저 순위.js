function solution(lottos, win_nums) {
    const zeroNums = lottos.filter((num) => num === 0).length;
    const matchNums = win_nums.filter((el) => lottos.includes(el)).length;
    const rank = [6,6,5,4,3,2,1];
    const minRank = rank[matchNums]
    const maxRank = zeroNums === 6 ? 1 : rank[matchNums + zeroNums]
    
    return [maxRank, minRank]
}
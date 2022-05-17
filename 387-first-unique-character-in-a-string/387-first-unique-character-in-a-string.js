
// 1차 Map 자료구조 사용
var firstUniqChar = function(s) {
    const charsMap = new Map();
    let res = -1;
    
    //순회하면서 charsMap 채우기
    // 1차 방문 -> index, 2차 방문 이상 false
    for (let i = 0; i < s.length; i++) {
        
        if (charsMap.get(s[i]) === undefined) {
            charsMap.set(s[i], i);
        } else {
            charsMap.set(s[i], false);
        };
    };
    
    //hash map 반복문을 통해 값이 false가 아니면 index
    const valuesOfCharsMap = Array.from(charsMap.values());
    for (let i = 0; i < valuesOfCharsMap.length; i++) {
        if (valuesOfCharsMap[i] !== false) {
            return valuesOfCharsMap[i];
        }
    }
    return -1;
};
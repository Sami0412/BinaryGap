// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let binary = N.toString(2)
    let binaryArray = binary.split("").map(Number)
    let binaryGap = 0
    let binaryGapArray = []
 
    for (i = 0; i < (binaryArray.length); i++) {
        if(binaryArray[i] === 0) {
            if(binaryGap === 0) {
                binaryGap += 1
            }
            if(binaryArray[i+1] === 0) {
                binaryGap++
                continue
            } else {
                binaryGapArray.push(binaryGap)
                binaryGap = 0
                continue
            }
        } else {
            binaryGap = 0
            continue
        }
    }

    if(binaryArray[binaryArray.length - 1] === 0) {
        binaryGapArray.pop()
    }

    if(binaryGapArray.length === 0) {
        return 0
    } else {
        return Math.max(...binaryGapArray)
    }
}

console.log(solution(513))
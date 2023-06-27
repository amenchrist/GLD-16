function solution(A) {
    // Implement your solution here


    //sort array in ascending order 
    const sortedArray = A.filter(e => e>0).sort(function(a, b){return a - b})
    let answer;

    
    console.log(sortedArray)
    //return 1 if array is empty or the largest number is less than 1 
    if(sortedArray.length === 0 || sortedArray[0] !== 1){
        answer = 1
        console.log(answer)
        return answer
    } else {       

        let firstHalf = sortedArray.slice(Math.floor(((sortedArray.length)/2)*-1))
        console.log(firstHalf)
        let secondHalf = sortedArray.slice(0, Math.ceil(((sortedArray.length)/2)))
        console.log(secondHalf)

        if (firstHalf.indexOf(firstHalf.find(e => !firstHalf.includes(e+1))) !== firstHalf.length-1){
            answer = firstHalf.find(e => !firstHalf.includes(e+1) ) +1
        } else {
            answer = secondHalf.find(e => !secondHalf.includes(e+1) ) +1
        }

        // answer = sortedArray.find((e, i) => (sortedArray[i+1] - e) > 1) + 1
        // console.log(answer)

        answer = sortedArray.find(e => !sortedArray.includes(e+1) ) +1

        console.log(answer)
        return answer
   
    } 
        
}

solution([1, 3, 6, 4, 1, 2])
solution([1, 2, 3])
solution([-1, -3])

// function solution(A) {
//     // Implement your solution here

//     let answer;
//     answer = A.sort(function(a, b){return a - b}).find(e => !A.includes(e+1) && e>0)

//     answer === undefined? answer = 1 : answer++

//     console.log(answer)
//     return answer

        
// }

// solution([1, 3, 6, 4, 1, 2])
// solution([1, 2, 3])
// solution([-1, -3])
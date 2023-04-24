const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below
//i define three variables that extract the second element from the first, second, third arrays within the data.list
// i have also used an arrow function
const  first =  data.lists[0][1]
const  second =  data.lists[1 ][1]
const  third = data.lists[2][1]
const result = []

//We will need to ensure that the extractBiggest function looks at the last item in each of the three lists and selects the biggest one.

// pop()remove the last item of the list and return it when its called out
// used length-1 to get the last item
const extractBiggest = () => {
    if ( first[first.length - 1] >= second[second.length - 1] && first[first.length - 1] >= third[third.length - 1]) {
        return first.pop()
    }
    if
    (second[second.length - 1] >= third[third.length - 1]) {
        return second.pop()
    }
    return third.pop()
}


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

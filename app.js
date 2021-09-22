

//Function #1: Array Slice

const foods = ['pizza',' burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood= foods.slice(1,4)
console.log(modifiedFood)

//Function #2: Array Splice
foods.splice(2,0,'noodles','icecream')
console.log(foods)

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];

let isEven  = numberArray.filter(Element => Element%2 ===0 )
console.log(isEven  )

//Function #4: Reject
function isNotPrime(arr,fn)
{
    const newArray=[]
    let count=0
    for (let index = 0; index < arr.length; index++) {
        let value = arr[index]
        for (let j = 1; j <= value; j++) {
            if (value%j ===0)
            count++
            
        }
        if (count != 2)
        {
        newArray.push(value)
        count=0
    }
    else
    count=0

    }
    return newArray
}

let isnotPrime = isNotPrime(numberArray,function(item){return item})
//Function #5: Lambda
console.log(isnotPrime)

 isEven  = numberArray.filter(Element => Element%2 ===0 )
console.log(isEven  )


//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers = myArray.map(Element => Element*Element)
console.log(findSquareOfNumbers)

//Function #7: Reduce

let arr = [2, 3, 5, 10]
const multiply = arr.reduce( (output,currentvalue) => output*currentvalue )
console.log(multiply)   
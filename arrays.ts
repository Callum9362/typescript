// Arrays

const team: string[] = [
    'User Man 1',
    'User Man 2',
    'User Man 3'
]

const listOfNums: number[] = [1,2,3,4]

const stringOrNums: (string|number)[] = [1, 'Hi', 2, 'Hello']

// Tuples
// The difference between the array and the tuple is that we define the order of the types.
// In the below example tuple. We clearly define that number has to come before string.
const tuple: [number, string] = [2022, 'Why?']
const wrong = ['why', 2022]
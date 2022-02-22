// A string
const hello: string = "Hello";

// An int
const year: number = 2022;

// A method declaration
const addTwoNumbers = (a: number, b:number): number => a + b;

// A more accurate use of Types via interfaces and method calls.

interface User {
    id: string;
    name: string;
}

interface Book {
    id: string;
    name: string;
    releaseDate: Date;
}

const getUserById = (id: string): User => ({
    id,
    name: 'Callum Gill'
})

const getBookByID = (id: string): Book => ({
    id,
    name: 'Harry Potter',
    releaseDate: new Date()
})

const user = getUserById('uuid-1')
const book: Book = getBookByID('uuid-1')

const saveUser = (user: User) => console.log('save user', {user})

const saveBook = (book: Book) => console.log('save book', {book})

saveUser(user)
saveBook(book)
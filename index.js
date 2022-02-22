// A string
var hello = "Hello";
// An int
var year = 2022;
// A method declaration
var addTwoNumbers = function (a, b) { return a + b; };
var getUserById = function (id) { return ({
    id: id,
    name: 'Callum Gill'
}); };
var getBookByID = function (id) { return ({
    id: id,
    name: 'Harry Potter',
    releaseDate: new Date()
}); };
var user = getUserById('uuid-1');
var book = getBookByID('uuid-1');
var saveUser = function (user) { return console.log('save user', { user: user }); };
var saveBook = function (book) { return console.log('save book', { book: book }); };
saveUser(user);
saveBook(book);

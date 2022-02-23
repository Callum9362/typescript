// Literal Types

// In this example we clearly define the literal return of the method.
// We identify we exclusivle require Heads or Tails with the following.... (): 'Heads' | 'Tails'
// This is more useful than defining a return type of string as we can be much more specific.
// This allows code dependent on specific return types to be much more reliable

const flipCoin = (): 'Heads' | 'Tails' => Math.random() < 0.5 ? 'Heads' : 'Tails'

console.log(flipCoin())


// Enums

// An enum is basically a way to restrain a certain set of values.


enum Suit {
    HEARTS = 'HEARTS',
    SPADES = 'SPADES',
    DIAMONDS = 'DIAMONS',
    CLUBS = 'CLUBS',
}

console.log(Suit.SPADES)

const suiteMeaning = (suit: Suit) => {
    if(Suit.HEARTS === suit) return 'HEARTS is a HEART'
    if(Suit.SPADES === suit) return 'SPADES is a SPADE'
    if(Suit.DIAMONDS === suit) return 'DIAMONDS is a DIAMOND'
    if(Suit.CLUBS === suit) return 'CLUBS is a CLUB'
}

console.log(suiteMeaning(Suit.CLUBS))
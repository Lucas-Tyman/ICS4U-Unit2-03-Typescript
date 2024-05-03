/**
* This program uses the MrCoxallStack
*
* By:      Kenny Le
* Version: 1.0
* Since:   2024-03-22
*/

import { MrCoxallStack } from './MrCoxallStack'

const dogStack = new MrCoxallStack()

// Checksize of stack
console.log("The size of the stack is: ", catStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", catStack.isEmpty)

// Print fruit items
dogStack.push("calico")
dogStack.push("siamese")
dogStack.push("ginger")
console.log("Cat items: ", catStack.showStack())

// Shows the popped item and new list
const topCat = catStack.pop()
console.log("Pop cat item: ", topCat)
console.log("Cat items: ", catStack.showStack())

// Checksize of stack
console.log("The size of the stack is: ", catStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", catStack.isEmpty)

// Show the program as done
console.log('\nDone.')
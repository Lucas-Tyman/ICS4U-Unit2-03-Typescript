/**
* This program uses the MrCoxallStack
*
* By: Lucas Tyman
* Version: 1.0
* Since:   2024-05-03
*/

import { MrCoxallStack } from './MrCoxallStack'

const fruitStack = new MrCoxallStack()

// Checksize of stack
console.log("The size of the stack is: ", fruitStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", fruitStack.isEmpty)

// Print fruit items
fruitStack.push("apple")
fruitStack.push("banana")
fruitStack.push("cherry")
console.log("Fruit items: ", fruitStack.showStack())

// Shows the popped item and new list
const topFruit = fruitStack.pop()
console.log("Pop fruit item: ", topFruit)
console.log("Fruit items: ", fruitStack.showStack())

// Checksize of stack
console.log("The size of the stack is: ", fruitStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", fruitStack.isEmpty)

// Show the program as done
console.log('\nDone.')
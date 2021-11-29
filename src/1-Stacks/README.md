# **Stack**

## **The Stack Data Structure:**

It is an ordered data collection that keeps the principle **LIFO** (Last In, First Out), the last element in the collecion is called **TOP** and the first element is called **BASE**, the new elements always are stored in the **TOP** and the oldest data is in the **BASE**.

**Real world examples:**

- Stack of books.
- Stack of dishes.
- The browser history (Back button).
- Method calls (Event Loop in Node).

## **Commonly methods in the Stack Data Structure:**

- **push(element):** This method adds a new element to the **TOP** of the Stack.    
- **pop():** This method removes the **TOP** element of the Stack.
- **peek():** This method return the **TOP** element from the Stack. Not modify the Stack just return the **TOP** value.
- **isEmpty():** This method returns **TRUE** if the Stack is empty and **FALSE** if the size of the Stack is greater than zero.
- **clear():** This method removes all the elements of the Stack.
- **size():** This method return the currently size of the Stack.

If we want save more memory and have a more efficient Stack data Structure that allow us access it elements, it is recommended that we use objects instead arrays.
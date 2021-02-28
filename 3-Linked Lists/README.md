# Linked Lists

**Linked Lists** is a Dynamic Data Structure we can add or remove elements from it at wiil and it will grow as required.
Arrays are list too, but more simple it stores a sequence data. **Array** is the most convenient way to manipulate data,
because it is in any language, but have a problem and it is that the size is fixed (not just in JS also in other languages) 
and add or remove items in the beginnig or middle of the array is expensive, because we need shifted over all the elements.

**Linked Lists** also stores sequencial data, but unlike **Arrays** it don't placed contiguously in memory, each element 
consists of a node that stores the element itself and have a pointer to reference the next node (it is also know as pointer 
or link) that points to the next element.

One benefits of the **Linked Lists** is that we don't need shifted items over, but we need pay attention to the implementation.
In **Arrays** we can access since any position from the collection, **Linked Lists** need iterate all the elements since the 
**head** to access to specific position.

## Real world examples:

1. Conga line.  
2. Scavenger hunt.
3. Wagons of a train even the engine.

## Commonly methods in Linked Lists Data Structure

1. **push(element):** This method adds a new element to the end of the list. 
2. **insert(element, position):** This method inserts a new element at a specified position in the list.
3. **getElementAt(index):** This method returns the element of a specific position in the list. If the element does not exist
   in the list, it returns *undefined*.
4. **remove(element):** This method removes an element from the list.
5. **indexOf(element):** This method returns the index of the element in the list. If the element doesn't exists returns *-1*.
6. **removeAt(position):** This method removes an item from a specified position in the list.
7. **isEmpty():** This method returns *true* if the linked list doesn't contain any element, and false if the size is greater
   than zero.
8. **size():** This method returns the number of elements the linked lists constains. It is similar to the *length* property 
   of the array.
9. **toString():** This method returns a string representation of the Linked Lists.

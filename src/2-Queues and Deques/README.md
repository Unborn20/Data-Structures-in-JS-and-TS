# **Queues and Deques**

## **Queues:**

**Queues** is very similiar to **Stacks** but instead follows **LIFO** principle, it follows **FIFO** (First In, First Out) principle. The new elements in a queue is at tail and all the elements are removed from front, the newest elements must wait at the end of the queue.

**Real life examples:**

- The most popular example is a line where we form.

## Commonly methods in Queue Data Structure:

- **enqueue(element):** This method add new elements at the back of the queue.
- **dequeue():** This method removes the first element in the queue.
- **peek():** Just return the fist element in the queue, nothing else.
- **isEmpty():** This method return **TRUE** if theren't elements in the queue and **FALSE** if the size of the queue is greater than zero.
- **size():** Returns the number of elements that the queue contains.

## **Deque:**

Is also known as **double-ended queue**, is a special queue that allow us insert and remove from the **TOP** and from the **TAIL** in the collection of data, this **Data Structure** mixed the principles **LIFO** and **FIFO**.

**Real  life examples:**

- List of undo operations.

## **Commonly methods in Deque Data Structure:**

Since **Deque** is a extend of a **Queue**, it shares some methods like: isEmpty(), clear(), size() and toString(). 

- **addFront(element):** This method adds a new element in the front of the **Deque**.
- **addBack(element):** This method adds a new element in the back of the **Deque.**
- **removeFront():** This method removes the element in front of the **Deque**.
- **removeBack():** This method removes the element in back of the **Deque**.
- **peekFront():** Returns the element in front without modifications in the **Deque**.
- **peekBack():** Return the element in back without modifications in the **Deque**.
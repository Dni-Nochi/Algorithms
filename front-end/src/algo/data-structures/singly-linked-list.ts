class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  append(value: T) {
    const newNode = new ListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  searchNode(value: T): ListNode<T> | null {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }
    return null;
  }
}
const list = new LinkedList<number>();
const listTwo = new LinkedList<number[]>();

list.append(32);
list.append(10);
list.append(20);
list.append(30);
list.append(45);
list.append(40);

listTwo.append([1, 2, 3]);
listTwo.append([4, 5, 6]);
export function singlyLinkedList(listNode: LinkedList<number | number[]>) {
  console.log(listNode);
}

// singlyLinkedList(list);
// singlyLinkedList(listTwo);

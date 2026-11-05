class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const node = new ListNode(1);
let current = node;
current.next = new ListNode(2);
current = current.next;
current.next = new ListNode(3);
current = current.next;
current.next = new ListNode(4);
current = current.next;
current.next = new ListNode(5);
current = current.next;
current.next = new ListNode(6);

export function middleNode(head: ListNode | null): ListNode | null {
  let h = 0;
  let current = head;
  while (current !== null) {
    h = h + 1;
    current = current.next;
  }

  const middleIndex = Math.floor(h / 2);
  let steps = 0;

  while (steps < middleIndex && head !== null) {
    head = head.next;
    steps++;
  }

  return head;
}

// console.log(middleNode(node));

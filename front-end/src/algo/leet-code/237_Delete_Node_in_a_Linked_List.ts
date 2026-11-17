class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const node = new ListNode(1);
let copyNode = node;
copyNode.next = new ListNode(2);
copyNode = copyNode.next;
copyNode.next = new ListNode(3);
copyNode = copyNode.next;
// const toDelete = copyNode;
copyNode.next = new ListNode(4);
copyNode = copyNode.next;
copyNode.next = new ListNode(5);

export function deleteNode(inFNNode: ListNode | null): void {
  console.log(inFNNode);
  if (inFNNode !== null && inFNNode.next !== null) {
    inFNNode.val = inFNNode.next.val;
    inFNNode.next = inFNNode.next.next;
  }
  console.log(inFNNode);
}

// deleteNode(toDelete);
// console.log(node);

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }
  append(value) {
    let newNode = new node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      let tail = this.tail();
      tail.nextNode = newNode;
      this.tailNode = newNode;
    }
  }
  prepend(value) {
    let newNode = new node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let head = this.head();
      newNode.nextNode = head;
      this.headNode = newNode;
    }
  }
  size() {
    let length = 0;
    let tmp = this.head();
    while (tmp != null) {
      length++;
      tmp = tmp.nextNode;
    }
    return length;
  }
  head() {
    return this.headNode;
  }
  tail() {
    return this.tailNode;
  }
  at(index) {
    let tmp = this.head();
    let i = 0;
    while (i != index) {
      if (tmp.nextNode === null) return null;
      tmp = tmp.nextNode;
      i++;
    }
    return tmp;

  }
  pop() {
    let tmp = this.head();
    if (tmp.nextNode === null) {
      this.headNode = null;
      this.tailNode = null;
      return;
    }
    if (this.headNode === null && this.tailNode === null) return;
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = null;
    this.tailNode = tmp;
  }
  contains(value) {
    let tmp = this.head();
      while (tmp !== null) {
        if (tmp.value === value) {
          return true;
        }
        tmp = tmp.nextNode;
      }
    return false;
  }
  find(value) {
    let tmp = this.head();
   while(tmp!=null){
      if(tmp.value===value)
        return tmp.value
      tmp=tmp.nextNode
    }
    return "Not Found";
  }
  toString() {
    let tmp = this.head();
    let list = "";
    if (this.headNode === null && this.tailNode === null) return "Empty List";
    while (tmp!= null) {
      list += `${tmp.value}->`;
      tmp = tmp.nextNode;
    }
    return list + `null`;
  }
  insertAt(value, index) {
    if(index>this.size())return "Index Out of Bounds"
    let tmp = this.head();
    let atIndex = this.at(index);
    if(index===0){
      let newNode=new node(value,this.headNode)
      this.headNode=newNode
      return
    }
    while (tmp.nextNode != atIndex) {
      tmp = tmp.nextNode;
    }
    let newNode = new node(value, atIndex);
    tmp.nextNode = newNode;
  }
  removeAt(index) {
    let tmp = this.head();
    let atIndex = this.at(index);
    if(tmp===atIndex){
      this.headNode=this.headNode.nextNode
      if(!this.headNode){
        this.tailNode=null
      }
    }
    while (tmp.nextNode != atIndex) tmp = tmp.nextNode;
    tmp.nextNode = atIndex.nextNode;
  }
}

class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };

function node(value = null, nextNode = null) {
  return { value, nextNode };
}

function createLinkedList() {
  let headNode = null;
  let tailNode = null;

  return {
    append(value) {
      const newNode = node(value);
      if (!headNode) {
        headNode = newNode;
        tailNode = newNode;
      } else {
        tailNode.nextNode = newNode;
        tailNode = newNode;
      }
    },

    prepend(value) {
      const newNode = node(value);
      if (!headNode) {
        headNode = newNode;
        tailNode = newNode;
      } else {
        newNode.nextNode = headNode;
        headNode = newNode;
      }
    },

    size() {
      let count = 0;
      let tmp = headNode;
      while (tmp) {
        count++;
        tmp = tmp.nextNode;
      }
      return count;
    },

    head() {
      return headNode;
    },

    tail() {
      return tailNode;
    },

    at(index) {
      let tmp = headNode;
      let i = 0;
      while (tmp && i < index) {
        tmp = tmp.nextNode;
        i++;
      }
      return tmp || null;
    },

    pop() {
      if (!headNode) return;
      if (!headNode.nextNode) {
        headNode = null;
        tailNode = null;
        return;
      }
      let tmp = headNode;
      while (tmp.nextNode.nextNode) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = null;
      tailNode = tmp;
    },

    contains(value) {
      let tmp = headNode;
      while (tmp) {
        if (tmp.value === value) return true;
        tmp = tmp.nextNode;
      }
      return false;
    },

    find(value) {
      let tmp = headNode;
      let index = 0;
      while (tmp) {
        if (tmp.value === value) return index;
        tmp = tmp.nextNode;
        index++;
      }
      return "Not Found";
    },

    toString() {
      let tmp = headNode;
      let str = "";
      while (tmp) {
        str += `${tmp.value}->`;
        tmp = tmp.nextNode;
      }
      return str + "null";
    },
  };
}

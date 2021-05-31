class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    insert(data, index){
        if(Array.isArray(data)){
            data.forEach(element => {
                this.insert(element, index++);
            });
        }else{
            let newNode = new Node(data);
            if(this.head == null || index == 0){
                this.head = newNode;
            }
            else{
                // let lastNode = this.getLast();
                if(index){
                    let currNode = this.head;
                    let prev = currNode;
                    let count = 0;
                    while (currNode != null && count != index) {
                        prev = currNode;
                        currNode = currNode.next;
                        count ++;
                    }if (currNode == null) {
                        console.log('index '+index + " is not available");
                    }else{
                        prev.next = newNode;
                        newNode.next = currNode;
                    }
                    return this;
                }else{
                    let lastNode = this.head;
                    while (lastNode.next) {
                        lastNode = lastNode.next;
                    }
                    lastNode.next = newNode;
                }
            }
        }
        return this;
    }
    
    deleteByKey(key){
        let currNode = this.head;
        let prev = currNode;
        if (currNode != null && currNode.data == key) {
            list.head = currNode.next; 
            return list;
        }
        while (currNode != null && currNode.data != key) {
            prev = currNode;
            currNode = currNode.next;
        }
        if (currNode == null) {
            console.log(key + " not found");
        }else{
            prev.next = currNode.next;
        }
        return this;
    }
    deleteByIndex(index){
        let currNode = this.head;
        let prev = currNode;
        let count = 0;
        if (currNode != null && index == 0) {
            list.head = currNode.next; 
            return list;
        }
        while (currNode != null && count != index) {
            prev = currNode;
            currNode = currNode.next;
            count ++;
        }
        if (currNode == null) {
            console.log('index '+index + " is not available");
        }else{
            prev.next = currNode.next;
        }
        return this;
    }
    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear() {
        this.head = null;
    }
}
let list = new LinkedList();
list.insert(14);
list.insert(11);
list.insert([12,23,34,45,65,67]);
list.insert(99,4);
list.insert([99,7,9],4);
console.log(JSON.stringify(list));
list.deleteByKey(34);
list.deleteByKey(12);
console.log(JSON.stringify(list));
list.deleteByIndex(5);
console.log(JSON.stringify(list));
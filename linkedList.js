const seperatorCollection = {
    rightArrow : `--->`,
    comma : `,`,
    space : ` `,
    collen : `:`,
    semicollen  :`;`
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(firstValue , seperator){
        this.Head = new Node(firstValue);
        this.pointer = this.Head;
        switch (seperator) {
            case seperatorCollection.comma:
                this.seperator = seperator;
                break;
            case seperatorCollection.space:
                this.seperator = seperator;
                break;
            case seperatorCollection.collen:
                this.seperator = seperator;
                break;
            case seperatorCollection.semicollen:
                this.seperator = seperator;
                break;
            default:
                this.seperator = seperatorCollection.rightArrow
                break;
        }
    }
    push( value ){
        this.pointer.next = new Node( value );
        this.pointer = this.pointer.next;
        return this;
    }
    pop(){
        for(let node = this.Head; node.next !== null; node=node.next){
            if(node.next === this.pointer){
                node.next = null;
                this.pointer = node;
                break;
            }
        }
        return this;
    }
    print(){
        let displayString = '';
        for(let node = this.Head; node.next !== null; node = node.next){
            displayString += `${node.data}${this.seperator}`;
        }
        console.log(displayString+=this.pointer.data);
        return this;
    }
}

const main = () => {
    const linkedList  = new LinkedList( 10 ,/**seperator:type: string, supported values:[' ', '--->', ':', ':', ';', ',']*/);
    linkedList
    .push(10)
    .push(20)
    .push(30)
    .pop()
    .push(40)
    .print()
    .push(50)
    .pop()
    .push(60)
    .print()
}
main();
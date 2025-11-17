function Node(val){
    this.val=val;
    this.next=null;
}


function addAtHead(val){
    let newNode =new Node(val);
    newNode.next=this.head;
    this.head=newNode;
    this.size++

}


/**
 * Add at  tail ==> ato  add   element   at tail
 * you  have  to  itrate   this this.next==null this   position tail
 * now  you  need add  new node   tail 
 * edge  cases --->if  thier no element then ths.next always   point  nulll
 * 
 * you  have 
 * @param {} val 
 */

function addAtTail(val){
    let newNode=new Node(val);
    if(this.head==null){
        this.head=newNode
    }else{
        let  curr=this.head
        while(curr.next!==null){
            curr=curr.next

        }
        curr.next=newNode
    }
    this.size++


}

/**
 * 
 * @param {*} index 
 * @param {*} val 
 * it has  value a and index as input  
 * 
 * 
 */


function addAtIndex(index,val){
    if(index<0|| index>this.size) return
    if (index==0){
        return this.addAtHead(val)
    }
    if(index==this.size){
        return this.addAtTail(val)
    }
    let newNode=new Node(val);
    let curr=this.head;
    let  i=0;
    while(i<index-1){
        curr=curr.next;
        i++;
    }
    newNode.next=curr.next;
    curr.next=newNode;
    this.size++

}

function   deleteAtIndex(index){
    if(index<0|| index>=this.size) return
    if (index===0){
        this.head= this.head.next
        this.size--;
        return;
    }
    let  curr=this.head ;
    let  i=0;
    while(i<index-1){
        curr=curr.next;
        i++;
    }
    curr.next=curr.next.next
    this.size--;
}

function getElement(index) {
    if (index < 0 || index >= this.size) {
        return -1; 
    }
    let curr = this.head;
    let i = 0;
    while (i < index) {
        curr = curr.next;
        i++;
    }
    return curr.val;   
}

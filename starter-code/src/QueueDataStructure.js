function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 7;
  this.isEmpty  = function(){
    if(this.queueControl.length === 0){
      return true;
    } else{
      return false;
    }
  }
  this.canEnqueue = function(){
    if(this.queueControl.length < this.MAX_SIZE){
      return true;
    } else{
      return false;
    }
  }
  this.enqueue = function(element){
    this.queueControl.reverse();
    let canEnqueue = this.canEnqueue();
    if(canEnqueue === false){
      return 'Queue Overflow';
    }
    this.queueControl.push(element);
    this.queueControl.reverse();
    return this.queueControl;
  }
  this.dequeue = function(){
    if(this.queueControl.length===0){
      return 'Queue Underflow';
    }
    return this.queueControl[this.queueControl.length-1];
  }
}

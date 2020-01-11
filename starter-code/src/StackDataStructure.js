function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 7;
  this.isEmpty = function () {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  this.canPush = function () {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }
  this.push = function (element) {
    this.stackControl.push(element);
    let canPushQuestion = this.canPush();
    if (canPushQuestion === false) {
      return 'Stack Overflow';
    }
    return this.stackControl;
  }
  this.pop = function () {
    let isEmptyQuestion = this.isEmpty();
    if (isEmptyQuestion === true) {
      return 'Stack Underflow';
    }
    return this.stackControl[this.stackControl.length-1]
  }
}

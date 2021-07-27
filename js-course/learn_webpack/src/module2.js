function myModule() {
  
  this.hello = function() {
    return 'Hello!';
  }

  this.goodBye = function() {
    return 'Goodbye!';
  }

}

module.exports = myModule;
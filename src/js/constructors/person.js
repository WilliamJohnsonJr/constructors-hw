function Human (options) {
	options = options || {};
  this.pet = function(dog){
  	dog.status = "happy";
  };
  this.feed = function(dog){
  	dog.hungry = false;
  };
  this.cool = (options.cool !== undefined) ? options.cool : false;
};
export {Human};
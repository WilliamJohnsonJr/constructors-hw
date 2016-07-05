function Dog (options) {
	options = options || {};
  this.status = (options.status !== undefined) ? options.status : "normal";
  if(options.hungry !== undefined) {
  	this.hungry = options.hungry;
  } else {
  	this.hungry = true;
  };
  this.color= (options.color !== undefined) ? options.color : "black";
};

export {Dog};
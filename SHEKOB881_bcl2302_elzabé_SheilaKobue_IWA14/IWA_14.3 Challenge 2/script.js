// script.js
// created a const variables closed (a,b) into the brackets

// used the return statement for execution to leave the current function and resume at the point in the code immediately after where the function is called.
const add = (a, b) => {return a + b};

const multiply = (a, b) => {return a * b};

// ive added the internal to call out the functions
function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	const multiply = this.multiply(added, this.internal.c)
  console.log(multiply)
	
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
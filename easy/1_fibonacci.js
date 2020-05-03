/**
	1: Nth Fibonacci
 */

memory = {}

function getNthFib(n) {
	if(memory[n]!==undefined){
		return memory[n];
	}
	if(n<=1){
		return n
	}
	let val = getNthFib(n-1) + getNthFib(n-2)
	memory[n]=val;
	return val;
}

console.log(getNthFib(8))
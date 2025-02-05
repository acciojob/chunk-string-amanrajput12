function stringChop(str, size) {
  // your code here
	let value=Number(size);
	let rst=[];
		for(let i=0;i<str.length;i+=value){
         rst.push(str.substring(i,i+value));
		}
	return rst
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

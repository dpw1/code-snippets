/*
## Intro:
Sum all.
Sum all passed variables (string, array, int, float);

## Usage:
*/
function sumAll(){
	let items = [];
	
	Array.from(arguments)
	.map(item => {
		if (Array.isArray(item)){
			item.map(item2 => items.push(Number(item2)))
		} else{
			items.push(Number(item))
		}
	});
	
	return items.reduce((prev, next) => prev + next, 0);
}
sumAll(1,2,3) //6
sumAll('1', '2', '3'); //6
sumAll(1,[1,2]); //4
sumAll(1,'1',1); //3
sumAll(1,'1',1, [1,2,3]); //9
sumAll('1.1', '2.09', '3', [1.04,2.3], [1.8,2.2], 1); //14.530000000000001
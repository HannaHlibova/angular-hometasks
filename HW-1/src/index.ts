function isPalindrome(str:string):boolean {
	const strReverse = str.split('').reverse().join('');

	if(strReverse === str) {
		return true;
	} else {
		return false;
	}
}

const testString = isPalindrome('abba');
const testString2 = isPalindrome('azbba');

function getFibArr(num:number):number[] {
	const fibArr:number[] = [];
	let sum = 1;

	if (num<0) {
		return fibArr;
	}
	
	for (let i=0; i<num; i++) {
		const fibArrLength = fibArr.length;
		
		if (fibArrLength > 1) {
			sum += fibArr[fibArrLength - 2];
		};
		
		if (fibArrLength === 1) {
			sum = 1;
		};

		fibArr.push(sum);
	}

	return fibArr;
}
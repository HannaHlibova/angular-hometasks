function isPalindrome(str:string) {
	const strReverse = str.split('').reverse().join('');

	if(strReverse === str) {
		return true;
	} else {
		return false;
	}
}

const testString = isPalindrome('abba');
const testString2 = isPalindrome('azbba');

function getFibArr(num:number) {
	const fibArr = [];
	let sum = 1;

	if(num>0) {
		for( let i=0; i<num; i++) {
			if( fibArr.length > 1) {
				sum += fibArr[ fibArr.length-2]
			};
			if( fibArr.length === 1) {
				sum = 1
			};

			fibArr.push( sum);
		}
	}

	return fibArr;
}
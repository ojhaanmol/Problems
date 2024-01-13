const SAMPLE_SORTED_ARRAY = [
    5,  9, 14, 22, 26, 31, 35,
   35, 37, 42, 43, 44, 47, 48,
   55, 61, 71, 79, 84, 99
];

const INPUT_NUMBER = 842;

const binarySearch = (inputArray,searchNumber) => {
    const searchFromAndTo = (startIndex,endIndex) => {
        midIndex = parseInt(( startIndex + endIndex ) / 2);
        if( inputArray[0] === searchNumber ) return 1;
        if((midIndex >= inputArray.length) || (midIndex == 0 ) ) throw `number not found`;
        if( searchNumber === inputArray[ midIndex ]) return midIndex+1;
        if( searchNumber < inputArray[midIndex] ) return searchFromAndTo(startIndex, midIndex-1);
        if( searchNumber > inputArray[midIndex] ) return searchFromAndTo(midIndex+1, endIndex);
    };
    try {
        return searchFromAndTo(0,inputArray.length);
    } catch (error) {
        console.log(new Error( error ));
    }
}

const main = () => {
    const index = binarySearch(SAMPLE_SORTED_ARRAY,INPUT_NUMBER);
    console.log(index);
}

main();
 
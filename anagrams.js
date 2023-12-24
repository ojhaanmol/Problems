anagrams = [
    "listen", "silent", "enlist",
    "triangle", "integral", "alerting",
    "debit card", "bad credit", "act of bread",
    "astronomer", "moon starer", "no more stars"
];
const spaceRemover = (strings=['']) => 
    strings.map(string_=>string_.split(' ').join(''))

const typeAnagram = (anagrams) => {
    const anagramTypesObject = {};
    const anagramsWithoutSpace = spaceRemover(anagrams);
    const anagramTypes = anagramsWithoutSpace.map(anagram=>anagram.split('').sort().join(''));
    anagramTypes.map((anagramType,index)=>{
        if (!anagramTypesObject[anagramType])
            anagramTypesObject[anagramType]=[anagrams[index]]
        else
        anagramTypesObject[anagramType].push(anagrams[index])
    });console.log(anagramTypesObject);
}
const main = () => {
    typeAnagram(anagrams)
}
main();
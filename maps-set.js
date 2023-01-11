// new Set([1,1,2,2,3,4]) returns:
// [object Set] (4) {1,2,3,4}

//[...new Set("referee")].join("") returns:
// "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// returns ([1,2,3], false);

function hasDuplicate(arr) {
    let set = new Set();
    for (let element of arr) {
        if (set.has(element)) {
            return true;
        }
        set.add(element);
    }
    return false;
}

function vowelCount(str) {
    let vowels = new Map();
    let vowelsList = 'aeiouAEIOU';
    for (let char of str) {
        if (vowelsList.includes(char)) {
            if(vowels.has(char)) {
                vowels.set(char, vowels.get(char) + 1);
            } else {
                vowels.set(char, 1);
            }
        }
    }
    return vowels;
}

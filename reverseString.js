function upCaseFirst(str) {
    str[0] = str[0].toUpperCase();
    return str;
}

const stringFuncs = {
    reverseString: str => 
    str
    .toLowerCase()
    .split('')
    .reverse()
    .join(''),

    reverseStringUpFirst: str => 
    upCaseFirst(str
    .toLowerCase()
    .split('')
    .reverse()
    )
    .join('')
}





module.exports = stringFuncs;

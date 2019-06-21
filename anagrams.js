function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        //removes anything not a letter
        .toLowerCase()
        //lowercases the wholething
        .split('')
        //split into an array
        .sort()
        //sorts alpha by default
        .join('');
        //rejoins the arr into a str
}

module.exports = isAnagram;



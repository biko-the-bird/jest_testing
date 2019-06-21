const chunkArray = (arr, len) => {

const chunkedArr = [];

arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === len) {
      //if there isn't a last or the the chunk is the 
      //given length we push the val in a new chunk
        chunkedArr.push([val]);
    } else {
        //we push the val in the current chunk
        last.push(val);
    }
    
})
return chunkedArr;

}
module.exports = chunkArray;
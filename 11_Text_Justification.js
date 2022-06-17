/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

 words = ["This", "is", "an", "example", "of", "text", "justification."] 

 maxWidth = 16


 var fullJustify = function(words, maxWidth) {
    const res = [];//resulting list
    let buf = [];
    let width = maxWidth;
    
    // Greedy pack each line
    // when that fails add the line to the result with the added padding
    // and start a new line
    words.forEach(word => {
        // Check if the word fits in the current line
        // A word fits if theres enough room for the word and
        // a space between it and the word to the left
        if (word.length <= (width - buf.length)) {
            buf.push(word);
            // buf
            // ["This"]
            // buf
            // (2) ["This", "is"]
            // buf
            // (3) ["This", "is", "an"]
            width -= word.length;
        } else {
            // The word did not fit on the line, send this line for padding
            addWordToResult(res, buf.slice(), maxWidth);//The slice() method returns a shallow copy of a portion of an array 
                                                        //into a new array object selected from start to end
            
            // Start a new line with the current word
            buf = [word];
            // reset the current line width
            width = maxWidth - word.length;
        }
    });
    
    // This is the "final" lines processing
    // According the rules this should only be left justified
    // so add all padding to the right not between the words
    if (buf.length) {
        let str = buf.join(' ');
        str += ' '.repeat(maxWidth - str.length);
        res.push(str);
    }
    
    return res;
};

// Max words are on each line now pad them with spaces
function addWordToResult(res, buf, maxWidth) {
    // How many spaces are needed
    let spaces = maxWidth - buf.reduce((acc, cur) => cur.length + acc, 0);
    // buf
    // 8
    // space
    // 8
    // buf
    // 13
    // space
    // 3
    
    // If there is only one word on the line
    // then just add the padding to the end and return
    if (buf.length === 1) {
        buf[0] += ' '.repeat(spaces);
        res.push(buf[0]);
        return;
    }
    
    // If the line has more than one word,
    // decrement the spaces which are created during the buf.join(' ')
    // which is n - 1 spaces (the join is from below, 3 words have 2 spaces)
    spaces -= buf.length - 1;
    //6 (8 - 2)
    //1 (3 - 2)


    // All words except the last should have spaces added to their string
    const end = buf.length - 1; //before last word
    let index = 0;
    
    // If there are spaces to distribute, distribute them
    // evenly looping back to the beginning of the buffer
    while (spaces-- > 0) {
        buf[index] += ' ';
        
        index = (index + 1) % end;
    }
    
    res.push(buf.join(' '))
}

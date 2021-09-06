/*################################################################################
NAME: Count characters in your string
LEVEL: 6 Kyu

The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}
###################################################################################*/
// STARTER CODE

// function count(string) {
//     // The function code should be here
//     return {};
// }


// SOLUTION
function count(string) {
    // The function code should be here
    const modifyString = string.split('')
    const stringUnique = new Set(modifyString).size();
    return {};
}
// Q.1) Create a Node.js file that will convert the output "Full Stack!" into reverse string. 
//     For example: "Full Stack!" => "!kcatS lluF"
// Solution:

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const output = "Full Stack!";
console.log("Reversed String:", reverseString(output));
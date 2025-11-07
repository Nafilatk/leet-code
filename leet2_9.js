// function isPalindrome(x) {
//   if (x < 0) return false;

//   const str = x.toString();

//   const reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

function check (palindrome) {
    palindrome = palindrome.toString();
    let reverse = "";
    for (let i = palindrome.length -1; i >= 0; i--)
        reverse += palindrome [i];
    return palindrome == reverse;
}

console.log(check("malayalam"));
console.log(check(101));
console.log(check(64));

// Iteration 1: Names and Input
const hacker1 = 'soufiane';
console.log(`the drivers name is ${hacker1}`);
const hacker2 = 'Alex';
console.log(`the navigators name is ${hacker2}`);


// Iteration 2: Conditionals
let driverlength = hacker1.length
let navigatorlength = hacker2.length
 if ( driverlength > navigatorlength ) {
     console.log(`the driver has the longest name , it has ${driverlength} `)
 }
 if ( navigatorlength > driverlength ) {
    console.log(`the navigator has the longest name , it has ${navigatorlength} `)
 }
 if ( driverlength === navigatorlength ) {
    console.log(`Wow, you both have equally long names, ${driverlength} characters!`)
 }



/* Iteration 3: Loops
let i ;
for ( i = 0 ; i < driverlength; i++ ) {
    let character = driverlength[i]
    let characterUpper = character.toUpperCase()
    console.log(characterUpper + ' ')
}
*/
 let upper = hacker1.toUpperCase()
 let spaced = upper.split('').join(' ');
 console.log(spaced)
 
 
 let reversed = hacker2.split('').reverse().join(' ');
 console.log(reversed)


 let alphabetical = hacker1.localeCompare(hacker2)
 if (alphabetical === -1){
     console.log("The drivers name goes first")
 }
 if (alphabetical === 1){
    console.log("The navigator goes first")
}
if (alphabetical === 0){
    console.log("They both have the same name")
}
 // BONUS

let ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere lacus vitae dolor semper egestas et non erat. Donec egestas ut sem a sollicitudin. Phasellus ullamcorper velit sit amet nulla ornare, sed tempus eros cursus. Sed eleifend ultrices nisl. Nullam bibendum tortor ac feugiat lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum arcu vitae congue porttitor. Ut molestie tincidunt iaculis. Morbi quis enim vitae leo venenatis maximus. Etiam ac pellentesque dolor. In vel eros eu nisi sodales semper ac vitae mauris. Ut ac justo mi. Proin hendrerit feugiat arcu, non dapibus mauris maximus at.

Proin a nibh tristique est finibus tempus vel vel lectus. Nunc erat libero, condimentum ut lectus sed, venenatis pellentesque ante. Pellentesque cursus porta pretium. Donec blandit rutrum ipsum id mollis. Donec a vulputate sapien. Integer nec semper neque. Curabitur aliquet, orci fringilla ultricies suscipit, lorem lectus ornare magna, in malesuada quam risus in nibh. Proin vulputate elementum justo, eu condimentum purus hendrerit vel. Praesent sit amet tellus eget orci pretium convallis. Ut ut tincidunt magna, eget placerat ipsum. Morbi risus arcu, pellentesque facilisis arcu et, faucibus viverra justo. Nullam pretium, tellus nec eleifend mattis, enim sem congue risus, vel hendrerit erat nisl ac sem. Donec odio augue, lacinia eu magna a, condimentum accumsan mauris. Aliquam commodo lorem nec euismod sollicitudin.

Nunc varius massa massa. Praesent rutrum sapien odio, ut imperdiet justo ultricies vel. Donec aliquam metus eget ultrices pharetra. Donec vitae nisl venenatis, eleifend est id, gravida erat. Suspendisse potenti. Sed tempus bibendum dolor sagittis dignissim. Etiam pretium viverra fringilla. Donec lorem dolor, cursus id odio id, ultricies dignissim elit.`

let splitted = ipsum.split(' ');
console.log('the amount of words is ' + splitted.length)

let counter = 0
for (i = 0; i <= splitted.length; i++) {
    
    if (splitted[i] === 'et'){
        counter ++
    }
}
console.log('the amount of times et occurs is ' + counter)

/*let palindrome = 'race car';
let palindromeLower = palindrome.toLowerCase()
let palindromeabc = palindromeLower.replace(/[^a-zA-Z ]/g, '')
let spaceless = palindromeabc.replace(/\s+/g,'')
const len = spaceless.length;

    for (let i = 0; i < len / 2; i++) {

        
        if (spaceless[i] !== spaceless[len - 1 - i]) {
           console.log('this is not a palindrome')
        }
    }
   console.log('this is palindrome')
*/

    


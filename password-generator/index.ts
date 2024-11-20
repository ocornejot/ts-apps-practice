import PasswordGenerator from "./PasswordGenerator";


const passwordGenerator = new PasswordGenerator();
let config = {
    length: 30,
    useLowercase: true,  
    useUppercase: true,
    useNumbers: true,
    useSymbols: true
};
console.log(passwordGenerator.generatePassword(config));

console.log(passwordGenerator.getPasswordStrength());

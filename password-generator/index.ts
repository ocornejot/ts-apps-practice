import PasswordGenerator from "./PasswordGenerator";


const passwordGenerator = new PasswordGenerator();
let config = {
    length: 15,
    useLowercase: true,  
    useUppercase: true,
    useNumbers: true,
    useSymbols: true
};
console.log(passwordGenerator.generatePassword(config));
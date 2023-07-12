const readline = require('readline-sync');

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let contacts = [];

while (true) {
    let firstName = readline.question('Enter first name (or "q" to quit): ');
    if (firstName === 'q') break;

    let lastName = readline.question('Enter last name: ');
    let address = readline.question('Enter address: ');
    let city = readline.question('Enter city: ');
    let state = readline.question('Enter state: ');
    let zip = readline.question('Enter zip: ');
    let phoneNumber = readline.question('Enter phone number: ');
    let email = readline.question('Enter email: ');

    let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    contacts.push(contact);
}

console.log(contacts);

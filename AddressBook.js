const readline = require('readline-sync');

class Contacts {
  constructor(firstName, lastName, email, phoneNumber, address, city, state, zipCode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    let firstNameRE = RegExp('^[A-Z][a-z]{2,}$');
    if (firstNameRE.test(firstName)) {
      this._firstName = firstName;
    } else {
      console.log('Invalid first name');
    }
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    let lastNameRE = RegExp('^[A-Z][a-z]{2,}$');
    if (lastNameRE.test(lastName)) {
      this._lastName = lastName;
    } else {
      console.log('Invalid last name');
    }
  }

  get email() {
    return this._email;
  }

  set email(email) {
    let emailRE = RegExp('^[A-Z][a-z]{2,}$');
    if (emailRE.test(email)) {
      this._email = email;
    } else {
      console.log('Invalid email');
    }
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(phoneNumber) {
    let phoneNumberRE = RegExp('^((\\+91)|91|0)?[789][0-9]{9}$');
    if (phoneNumberRE.test(phoneNumber)) {
      this._phoneNumber = phoneNumber;
    } else {
      console.log('Invalid Phone Number');
    }
  }

  get address() {
    return this._address;
  }

  set address(address) {
    let addressRE = RegExp('^[a-zA-Z1-9]{2,}$');
    if (addressRE.test(address)) {
      this._address = address;
    } else {
      console.log('Invalid address');
    }
  }

  get city() {
    return this._city;
  }

  set city(city) {
    let cityRE = RegExp('^[a-zA-Z]{2,}$');
    if (cityRE.test(city)) {
      this._city = city;
    } else {
      console.log('Invalid city');
    }
  }

  get state() {
    return this._state;
  }

  set state(state) {
    let stateRE = RegExp('^[a-zA-Z]{2,}$');
    if (stateRE.test(state)) {
      this._state = state;
    } else {
      console.log('Invalid State');
    }
  }

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(zipCode) {
    let zipCodeRE = RegExp('^[1-9][0-9]{2}[ ]?[0-9]{3}$');
    if (zipCodeRE.test(zipCode)) {
      this._zipCode = zipCode;
    } else {
      console.log('Invalid Zip Code');
    }
  }

}

let contactsArray = [];

function addContact() {
  let firstName = readline.question('Enter first name: ');
  let lastName = readline.question('Enter last name: ');
  let email = readline.question('Enter email: ');
  let phoneNumber = readline.question('Enter phone number: ');
  let address = readline.question('Enter address: ');
  let city = readline.question('Enter city: ');
  let state = readline.question('Enter state: ');
  let zipCode = readline.question('Enter zip code: ');

  let contact = new Contacts(firstName, lastName, email, phoneNumber, address, city, state, zipCode);
  contactsArray.push(contact);
}

function displayContacts() {
  for (let contact of contactsArray) {

    console.log(`First Name: ${contact.firstName}`);
    console.log(`Last Name: ${contact.lastName}`);
    console.log(`Email: ${contact.email}`);
    console.log(`Phone Number: ${contact.phoneNumber}`);
    console.log(`Address: ${contact.address}`);
    console.log(`City: ${contact.city}`);
    console.log(`State: ${contact.state}`);
    console.log(`Zip Code: ${contact.zipCode}`);
    console.log();
    
  }
}

while (true) {
    console.log('Select an Option: ');
    console.log('1. Add Contact');
    console.log('2. Display Contacts');
    console.log('0. Exit');
    let choice = readline.questionInt('\nEnter your choice: ');
    
    switch (choice) {
        case 1:
            addContact();
            break;
        
        case 2:
            displayContacts();
            break;
        
        case 3:
            process.exit(0);
        
        default:
            console.log('Invalid choice');
    }
}

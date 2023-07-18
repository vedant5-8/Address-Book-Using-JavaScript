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
    let emailRE = RegExp('^[0-9a-zA-Z]+[+._-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$');
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

let contact1 = new Contacts('Omkar', 'Pawar', 'omkarpawar@gmail.com', '+918523579514', 'Karave', 'NaviMumbai', 'Maharashtra', '410207');
let contact2 = new Contacts('Manish', 'Patil', 'manish25@gmail.com', '09876543214', 'Vashi', 'NaviMumbai', 'Maharashtra', '410206');
let contact3 = new Contacts('Shubham', 'Patil', 'shubhampatil@gmail.com', '9837563523', 'Bhandup', 'Thane', 'Maharashtra', '400599');
let contact4 = new Contacts('Sahil', 'Mhatre', 'sahil.mhatre@gmail.com', '919534090923', 'Chinchwali', 'Alibag', 'Maharashtra', '402209');

contactsArray.push(contact1);
contactsArray.push(contact2);
contactsArray.push(contact3);
contactsArray.push(contact4);

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
  if (contactsArray.length === 0) {
    console.log('No records found');
  } else {
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
}

function editContact() {

  let firstName = readline.question('Enter first name: ');
  let lastName = readline.question('Enter last name: ');

  let contact = contactsArray.find(contact => contact.firstName === firstName && contact.lastName === lastName);
  if (contact) {
    console.log('Which detail would you like to update?');
    console.log('1. First Name');
    console.log('2. Last Name');
    console.log('3. Email');
    console.log('4. Phone Number');
    console.log('5. Address');
    console.log('6. City');
    console.log('7. State');
    console.log('8. Zip Code');
    let choice = readline.questionInt('Enter your choice: ');

    switch (choice) {
      case 1:
        let newFirstName = readline.question('Enter new first name: ');
        contact.firstName = newFirstName;
        break;
      case 2:
        let newLastName = readline.question('Enter new last name: ');
        contact.lastName = newLastName;
        break;
      case 3:
        let newEmail = readline.question('Enter new email: ');
        contact.email = newEmail;
        break;
      case 4:
        let newPhoneNumber = readline.question('Enter new phone number: ');
        contact.phoneNumber = newPhoneNumber;
        break;
      case 5:
        let newAddress = readline.question('Enter new address: ');
        contact.address = newAddress;
        break;
      case 6:
        let newCity = readline.question('Enter new city: ');
        contact.city = newCity;
        break;
      case 7:
        let newState = readline.question('Enter new state: ');
        contact.state = newState;
        break;
      case 8:
        let newZipCode = readline.question('Enter new zip code: ');
        contact.zipCode = newZipCode;
        break;
      default:
        console.log('Invalid choice');
    }
  } else {
    console.log(`Contact with name ${firstName} ${lastName} not found`);
  }
}

while (true) {
    console.log('\nSelect an Option: ');
    console.log('1. Add Contact');
    console.log('2. Display Contacts');
    console.log('3. Edit Contact');
    console.log('4. Exit');
    let choice = readline.questionInt('\nEnter your choice: ');
    console.log();
    
    switch (choice) {
        case 1:
          addContact();
          break;
        
        case 2:
          displayContacts();
          break;

        case 3:
          editContact();
          break;

        case 4:
          process.exit(0);
        
        default:
          console.log('Invalid choice');
    }
}

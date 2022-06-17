class Contact {
    constructor(name, age, phoneNumber) {
        this.name = name,
        this.age = age,
        this.phoneNumber = phoneNumber;
    }
}

const contacts = new Map(); //this is the new data structure
contacts.set('Shane', new Contact('shane crouch', 12, '222-333-4576'));
contacts.set('Nick', new Contact('Nick crouch', 11, '222-333-1111'));
contacts.set('Gabrielle', new Contact('Gabrielle crouch', 22, '111-333-4576'));

document.write("<br><br> Each contact in the map: ")
contacts.forEach(contact => {//iterate through
    document.write('<br> ' + contact.name);
})

document.write("<br><br> Getting a specific contact's phone number in o(1) constant")
document.write("<br>" + contacts.get('Nick').phoneNumber);


//Had features like most maps to see if a key with value already exists.
document.write("<br><br> See if a contact exist and add if not, this might be good")
if(!contacts.has('Ting')) {
    document.write("<br> Adding Contact Ting ")
    contacts.set('Ting', new Contact("Ting Crouch", 15, "222-333-4444"));
}

if(contacts.has('Ting')) {
    document.write("<br> Found Ting. Her ae is " + contacts.get('Ting').age);
}


//Can easily remove an item from the map
document.write("<br><br> Deleting Shane from the map. Here is what is left:")
contacts.delete('Shane');
contacts.forEach(contact => {
    document.write('<br> ' + contact.name);
})


//can remove all of the items from the map
document.write("<br><br> Clearing the map. Here is what is left:")
contacts.clear();
contacts.forEach(contact => {
    document.write('<br> ' + contact.name)
})


//The constructor takes in an array of arrays. Each child array is a key value pair
const widelyUsedLanguages = new Map([[1, "Javascript"], [2, 'Java'], [3, 'Python']]);
document.write("<br><br> You can easily tell how many entries in a map with size():")
document.write('<br> ' + widelyUsedLanguages.size);


//You can easily get an iterator of entries in the map that is in insertion order
document.write('<br><br> You can easily loop through each entry name value pair: ')
const entries = widelyUsedLanguages.entries();
for (let entry of entries) {
    document.write(`key: ${entry[0]} value: ${entry[1]}`)
}


//You can easily get an iterator of keys in the map that is in insertion order
document.write('<br><br> You can easily loop through just the keys: ')
const keys = widelyUsedLanguages.keys();
for (let key of keys) {
    document.write("key:" + key)
}


//You can easily get an iterator of keys in the map that is in insertion order
document.write('<br><br> You can easily loop through just the values: ')
const values = widelyUsedLanguages.values();
for (let value of values) {
    document.write("value:" + value)
}
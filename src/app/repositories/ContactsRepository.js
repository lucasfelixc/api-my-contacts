const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Lucas',
    email: 'lucasfelixdev@gmail.com',
    phone: '234234234',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactsRepository();

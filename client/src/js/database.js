import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // log the attempt to GET data from the db
  console.log('GET from the DB!');

  // create connection to the DB and its version
  const jateDb = await openDB('jate', 1);

  // create new transaction (tx, not Texas) and specify db and data privileges
  const tx = jateDb.transaction('contact', 'readonly');

  // open up object store
  const store = tx.objectStore('jate');

  // get all data in the db
  const request = store.getAll();

  // confirmation of request
  const result = await request;
  console.log('result.value: ', result);
  return result;
}

initdb();

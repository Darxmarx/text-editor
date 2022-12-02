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
export const putDb = async (id, content) => {
  // log the attempt to PUT/update data in the db
  console.log('PUT to the DB!');

  // create connection to the DB and its version
  const jateDb = await openDB('jate', 1);

  // create new transaction (tx, not Texas) and specify db and data privileges to write over data
  const tx = jateDb.transaction('jate', 'readwrite');

  // open up object store
  const store = tx.objectStore('jate');

  // update data in the db with new content
  const request = store.put({ content: content });

  // confirmation of request
  const result = await request;
  console.log('Data Updated: ', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // log the attempt to GET data from the db
  console.log('GET from the DB!');

  // create connection to the DB and its version
  const jateDb = await openDB('jate', 1);

  // create new transaction (tx, not Texas) and specify db and data privileges to only view data
  const tx = jateDb.transaction('jate', 'readonly');

  // open up object store
  const store = tx.objectStore('jate');

  // get all data in the db
  const request = store.getAll();

  // confirmation of request
  const result = await request;
  console.log('result.content', result);
  return result.content;
}

initdb();

import Firebase from 'firebase';

// Set the configuration for your app
const config = {
  apiKey: 'AIzaSyAwPY05vhA17Zty-7dAo_YCDit__weENyU',
  authDomain: 'cs52hw3-2472f.firebaseapp.com',
  databaseURL: 'https://cs52hw3-2472f.firebaseio.com',
  storageBucket: 'cs52hw3-2472f.appspot.com',
};
Firebase.initializeApp(config);

// Get a reference to the database service
const database = Firebase.database();

export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    callback(snapshot);
  });
}

export function addNote(note) {
  database.ref('notes').push(note);
}

export function deleteNote(id) {
  database.ref('notes').child(id).remove();
}

export function updateNote(id, fields) {
  database.ref('notes').child(id).update(fields);
}

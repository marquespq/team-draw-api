const firebaseAdmin = require('firebase-admin');

export default firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.applicationDefault(),
});

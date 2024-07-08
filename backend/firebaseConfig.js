
const admin = require('firebase-admin');
const serviceAccount = require('./archival-and-retrieval--image-firebase-adminsdk-hn3ug-8b317b8839.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.storageBucket
});

const bucket = admin.storage().bucket();
const firestore = admin.firestore();

module.exports = { bucket, firestore };

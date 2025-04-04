importScripts(
  "https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyAt47YgNFHdS4Qyy8Gz574gzVZLhU5IRRc",
  authDomain: "pushnotification-6b48d.firebaseapp.com",
  projectId: "pushnotification-6b48d",
  storageBucket: "pushnotification-6b48d.firebasestorage.app",
  messagingSenderId: "231389404738",
  appId: "1:231389404738:web:273dc46faefc4f6d7197db",
  measurementId: "G-C0MFVHHZH1",
});
const messaging = firebase.messaging();

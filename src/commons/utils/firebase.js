import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEU4OP3Cdh9wrNSknAt_EETYfTH7iqTNo",
  authDomain: "quickstart-1560819438357.firebaseapp.com",
  databaseURL: "https://quickstart-1560819438357.firebaseio.com",
  projectId: "quickstart-1560819438357",
  storageBucket: "quickstart-1560819438357.appspot.com",
  messagingSenderId: "1017604007625",
  appId: "1:1017604007625:web:1d23074021771a17e8cf18",
  measurementId: "G-VCWV2DT1G5"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export const getDataCollects = async collectionName => {
  const data = await database.collection(collectionName).get();
  const array = [];
  data.forEach(element => {
    return array.push({ ...element.data(), id: element.id });
  });
  return array;
};

export const addBlogs = async (collectionName, data) => {
  const result = await database.collection(collectionName).add(data);
  return result;
};

export const getBlog = async (collectionName, docId) => {
  const result = await database
    .collection(collectionName)
    .doc(docId)
    .get();
  return result.data();
};

export default null;

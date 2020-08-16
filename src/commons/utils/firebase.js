import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

const googleProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const limit = 4;

export const getDataCollects = async collectionName => {
  const query = database
    .collection(collectionName)
    .orderBy("date", "desc")
    .limit(limit);
  const data = (await query.get()).docs.map(s => ({ ...s.data(), id: s.id }));
  return {
    query,
    data
  };
};

export const getNextDataCollects = async (collectionName, query) => {
  return query.get().then(async documentSnapshots => {
    // Get the last visible document
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

    // Construct a new query starting at this document,
    // get the next 25 cities.
    const next = database
      .collection(collectionName)
      .orderBy("date", "desc")
      .limit(limit)
      .startAfter(lastVisible);
    const data = (await next.get()).docs.map(s => ({ ...s.data(), id: s.id }));
    return {
      query: next,
      data
    };
  });
};

export const getDataCollectsByCategory = async (collectionName, categoryArray) => {
  const data = await database
    .collection(collectionName)
    .where("category", "array-contains-any", categoryArray)
    .get();
  if (data) {
    const array = [];
    data.forEach(element => {
      return array.push({ ...element.data(), id: element.id });
    });
    return array;
  }
  return null;
};

export const getAllCategory = async collectionName => {
  const data = await database.collection(collectionName).get();
  if (data) {
    const array = [];
    data.forEach(element => {
      array.push(element.data());
    });
    return array;
  }
  return null;
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

export const editBlog = async (collectionName, docId, newDoc) => {
  const result = await database
    .collection(collectionName)
    .doc(docId)
    .update(newDoc)
    .then(() => getBlog(collectionName, docId));
  return result;
};

// export const createUserWithEmailAndPassword = async (email, password) => {
//   try {
//     const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
//   } catch (error) {
//     // error
//     // { ("auth/email-already-in-use");
//     // ("The email address is already in use by another account.");
//     // }
//     console.log(error);
//   }
// };

export const onAuthStateChanged = callback => {
  if (callback) {
    try {
      firebase.auth().onAuthStateChanged(user => {
        callback(user);
      });
    } catch (error) {
      callback(null);
    }
  }
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logoutFirebase = () => {
  return firebase.auth().signOut();
};

export const loginWithGoogleFirebase = () => {
  return firebase.auth().signInWithPopup(googleProvider);
};

export const loginWithFacebookFirebase = () => {
  return firebase.auth().signInWithPopup(facebookProvider);
};

export const loginWithGithubFirebase = () => {
  firebase
    .auth()
    .signInWithRedirect(facebookProvider)
    .then(result => {
      if (result) return result;
      return null;
    })
    .catch(error => {
      return error;
    });
};

export default null;

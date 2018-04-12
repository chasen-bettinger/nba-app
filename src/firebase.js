import * as firebase from "firebase";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseVideos = firebaseDB.ref("videos");
const firebaseTeams = firebaseDB.ref("teams");

const firebaseLooper = snap => {
  const data = [];
  snap.forEach(childSnap => {
    data.push({
      ...childSnap.val(),
      id: childSnap.key
    });
  });

  return data;
};

export { firebaseArticles, firebaseVideos, firebaseTeams, firebaseLooper };

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_JV5BJvwtJTsPecvL6vFaoaI5KZtlFL8",
  authDomain: "imageupload-65547.firebaseapp.com",
  projectId: "imageupload-65547",
  storageBucket: "imageupload-65547.appspot.com",
  messagingSenderId: "120714735354",
  appId: "1:120714735354:web:c2782c554f4db7f9eae343",
  measurementId: "G-E282LFJ4WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

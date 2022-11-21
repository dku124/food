import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFWMcAWvxXCbpPIpNsOo0TpIpElWW6SSk',
  authDomain: 'quickfood-7f936.firebaseapp.com',
  projectId: 'quickfood-7f936',
  storageBucket: 'quickfood-7f936.appspot.com',
  messagingSenderId: '64707542847',
  appId: '1:64707542847:web:bdbe25aace477121079d8a',
  measurementId: 'G-N48BRMTH9J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

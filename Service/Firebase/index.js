import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyADikcl24UH-1cV5KsY-x6zNZE7ivf3SJk',
    authDomain: 'instagramfake-375eb.firebaseapp.com',
    databaseURL: 'https://instagramfake-375eb-default-rtdb.firebaseio.com',
    projectId: 'instagramfake-375eb',
    storageBucket: 'instagramfake-375eb.appspot.com',
    messagingSenderId: '808312127800',
    appId: '1:808312127800:web:e57ae95de695e3848dc1cd',
    measurementId: 'G-7JLX5C5DHX',
};

const app = initializeApp(firebaseConfig);

export default getFirestore();
export const FIREBASE_AUTH = getAuth(app);
export const db = getFirestore(app);

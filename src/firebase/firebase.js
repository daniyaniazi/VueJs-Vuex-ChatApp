import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
	
};

const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;

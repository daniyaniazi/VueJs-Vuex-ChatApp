import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyAs9WYcIxuGISQbYNjlV-NO5lo5D-iWeKY',
	authDomain: 'vue-chat-app-a0d64.firebaseapp.com',
	projectId: 'vue-chat-app-a0d64',
	storageBucket: 'vue-chat-app-a0d64.appspot.com',
	messagingSenderId: '768798708741',
	appId: '1:768798708741:web:49dd6372e593a14f0a786c',
	measurementId: 'G-H63CC27SFG',
};

const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;

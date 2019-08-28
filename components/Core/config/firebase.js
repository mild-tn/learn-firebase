import * as firebase from 'firebase';
import ENV from '../envConfig';
import 'firebase/firestore';

export const loadDB = () => {
  try {
    const config = {
      apiKey: ENV.APP_API_KEY,
      authDomain: ENV.APP_AUTH_DOMAIN,
      databaseURL: ENV.APP_DATABASE_URL,
      projectId: ENV.APP_PROJECT_ID,
      storageBucket: ENV.APP_STOREGE_BUCKET,
      messagingSenderId: ENV.APP_MESSAGING_SENDER,
    };
    return !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  } catch (error) {
    if (!/already exist/.test(error.message)) {
      console.log(`firebase did not init :${error.message}`);
    }
  }
};

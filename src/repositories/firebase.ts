import { initializeApp } from 'firebase/app'
import { getFirestore, useFirestoreEmulator } from 'firebase/firestore'

const app = initializeApp({
  apiKey: 'AIzaSyCHBS4tcPFceOPYDi3K59vK_P6kRjyJ2Vc',
  authDomain: 'vue-ssr-demo-bc6c1.firebaseapp.com',
  projectId: 'vue-ssr-demo-bc6c1',
  storageBucket: 'vue-ssr-demo-bc6c1.appspot.com',
  messagingSenderId: '704602439620',
  appId: '1:704602439620:web:6a8c72a2c31d1ea3082e91'
})

if (process.env.NODE_ENV === 'development') {
  const firestore = getFirestore(app)
  useFirestoreEmulator(firestore, 'localhost', 8080)
}

export default app

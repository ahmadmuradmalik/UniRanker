import {initializeApp} from 'firebase/app'
import { getFirestore, collection, query, orderBy, limit, getDocs} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const messagesRef = collection(db, 'messsages') // create collection reference
const q = query(messagesRef, orderBy('createdAt'), limit(25)) // query documents
// First option
const retrieveData = async() => {
      const docsSnap = await getDocs(q)
      docsSnap.forEach(doc => {
        console.log(doc.data())
      })
    }

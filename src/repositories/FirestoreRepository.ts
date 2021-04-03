import firebase from './firebase'
import { getFirestore, collection, getDoc, setDoc, doc, onSnapshot } from 'firebase/firestore'

const counterDoc = doc(collection(getFirestore(firebase), 'counters'), '0')

type Unsubscribe = () => void

export default class FirestoreRepository {
  async getCount (): Promise<number> {
    return await getDoc(counterDoc).then(async (doc) => {
      const docData = doc.data()
      if (docData != null) {
        return docData.count
      } else {
        await this.setCount(0)
        return 0
      }
    })
  }

  onCountUpdate (update: (count: number) => void): Unsubscribe {
    return onSnapshot(counterDoc, (doc) => {
      update(doc.data()?.count)
    })
  }

  async setCount (count: number): Promise<void> {
    return await setDoc(counterDoc, {
      count
    })
  }
}

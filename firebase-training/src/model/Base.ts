import firebase from 'firebase/app';
import 'firebase/storage';

export class Base {
  uid: string
  createdAt?: firebase.firestore.Timestamp
  updatedAt?: firebase.firestore.Timestamp

  isSaved: boolean = false

  path: string
  collectionName: string
  version: string = '4'
  db: firebase.firestore.Firestore
  collectionRef: firebase.firestore.CollectionReference
  documentRef: firebase.firestore.DocumentReference
  storage: firebase.firestore.Storage

  constructor(collectionName: string, id: string | null = null) {
    this.db = firebase.firestore
    this.collectionName = collectionName
    this.path = `version/${this.version}/${this.collectionName}`
    this.collectionRef = this.db.collection(this.path)
    this.storage = firebase.storage()
    if (id !== null) {
      this.uid = id
    } else {
      this.uid = this.collectionRef.doc().id
    }
    this.documentRef = this.collectionRef.doc(this.uid)
  }

  async get() {
    try {
      const snapshot: firebase.firestore.DocumentSnapshot = await this.documentRef.get()
      this.setProperty(snapshot)
    } catch (error) {
      throw error
    }
  }

  async delete() {
    try
     {
      const batch: firebase.firestore.WriteBatch = this.db.batch()
      batch.delete(this.documentRef)
      await batch.commit()
      this.clear()
    } catch(error) {
      throw error
    }
  }

  protected setProperty(snapshot: firebase.firestore.DocumentSnapshot) {
    this.uid = snapshot.id
    if (snapshot.exists) {
      const data = snapshot.data()
      if (data !== undefined) {
        this.createdAt = 'createdAt' in data ? data.createdAt : undefined
        this.updatedAt = 'updatedAt' in data ? data.updatedAt : undefined
        this.isSaved = true
      }
    }
  }

  protected pack(isUpdate: boolean = false): any{
    const item: any = {}

    const date = firebase.firestore.Timestamp.fromdate(new Date())
    if (isUpdate) {
      this.updatedAt = date
      if (this.updatedAt !== undefined) {
        item.updatedAt = date
      }
    } else {
      this.createdAt = date
      this.updatedAt = date
      if (this.isSaved !== true) {
        if (this.createdAt !== undefined) {
          item.createdAt = date
        }
      }
      if (this.updatedAt !== undefined) {
        item.updatedAt = date
      }
    }
    return item
  }

  protected clear() {
    this.isSaved = false
    this.createdAt = undefined
    this.updatedAt = undefined
  }
}
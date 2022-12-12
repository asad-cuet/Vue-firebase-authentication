import {ref, watchEffect} from 'vue'
import {projectFirestore} from '@/firebase/config'

const getCollection=(collection)=>{
     const error=ref(null)
     const documents=ref(null)

              let collectionRef= projectFirestore.collection(collection).orderBy('createdAt')
             const unsub = collectionRef.onSnapshot((snap)=>{
                  let results=[]
                  snap.docs.forEach(doc=>{
                       doc.data().createdAt && results.push({...doc.data(),id:doc.id})
                  })
                  documents.value=results
                  error.value=null
              },
              (err)=>{
                  error.value="Could not fetch the data"
                  documents.value=null
                  console.log(err.message)
              })

              //problem: after logout and login again,previous snapshot alive,
              //but we want to re initialize snapshot when relog in.
              //for tis we took unsub
              watchEffect((onInvalidate)=>{
                  onInvalidate(()=>unsub())
              })
      

     return { error,documents }         
}


export default getCollection
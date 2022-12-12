import {ref} from 'vue'
import {projectFirestore} from '@/firebase/config'



const useCollection=(collection)=>{   //colection table name, passed during function call
     
     const isPending=ref(false) 
     const error=ref(null)

     const addDoc=async(doc)=>{
          error.value=null
          isPending.value=true
          try
          {
              await projectFirestore.collection(collection).add(doc)
              isPending.value=false
          }
          catch(err)
          {
               error.value=err.message
               console.log(err.message,error.value)
               isPending.value=false
          }
     }
     return { error,addDoc,isPending }
}

export default useCollection
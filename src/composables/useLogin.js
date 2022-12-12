import { projectAuth } from '@/firebase/config'
import {ref} from 'vue'

const error=ref(null)
const isPending=ref(false)  //for loader

const login=async (email,password) => {
      error.value=null
      isPending.value=true
       try
       {
            const res=await projectAuth.signInWithEmailAndPassword(email,password)
            if(!res)
            {
                 throw new Error('Could not complete the Login')
            }
            isPending.value=false
            return res
       }
       catch(err)
       {
         error.value=err.message
         console.log(error.value)
         isPending.value=false
       }
       
}
const useLogin=()=> {
      
      return {
            error,login,isPending
      }
}
export default useLogin
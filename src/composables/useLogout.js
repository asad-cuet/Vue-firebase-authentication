import { projectAuth } from '@/firebase/config.js'
import {ref} from 'vue'

const error=ref(null)
const isPending=ref(false) 

const logout=async () => {
      error.value=null
      isPending.value=true
       try
       {
            await projectAuth.signOut()
            isPending.value=false
       }
       catch(err)
       {
         error.value=err.message
         console.log(error.value)
         isPending.value=false
       }
       
}
const useLogout=()=> {
      
      return {
            error,logout,isPending
      }
}
export default useLogout
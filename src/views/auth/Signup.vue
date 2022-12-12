<template>
    <form @submit.prevent="handleSubmit">
    <h3>Sign Up</h3>

    <input type="text" placeholder="Display Name" v-model="name">

    <input type="email" placeholder="Email" v-model="email">
    
    <input type="password" placeholder="password" v-model="password">
    
    <div v-if="error" class="error">{{error}}</div>
    
    <button v-if="!isPending" type="submit">Sign Up</button>
    <button v-if="isPending" disabled>Loading</button>
    
    </form>
</template>
    
<script>
import useSignup from '@/composables/useSignup'

import {useRouter} from 'vue-router'
import {ref} from 'vue'


export default {
    name:'Signup',
    setup()
    {
        const{error,signup,isPending}=useSignup()
        const router=useRouter()
        const name=ref('')
        const email=ref('')
        const password=ref('')

        const handleSubmit=async()=>
        {
            const res=await signup(email.value,password.value,name.value)
            if(!error.value)
            {
                console.log('Signed Up')
                console.log(res)
                router.push({name:'home'})
            }
        }
        return {
            name,
            email,
            password,
            handleSubmit,
            error,
            isPending
        }
    }
}
</script>
    
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// global css
import './assets/main.css'

//auth
import {projectAuth} from '@/firebase/config'
let app

projectAuth.onAuthStateChanged(()=>{    //on auth update app will re render
      if(!app)
      {
         app=createApp(App).use(router).mount('#app')   //app rendering
      }
})


import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store  = new Vuex.Store({
    //ประกาศตัวแปร
    state:{
        email : ""
    },
    //กำหนดฟังก์ชั่น
    mutations:{
        setEmail(state, email) {
            state.email = email
        },
        test(){

        }
    },
    //การดึงค่าไปใช้
    getters:{
        getEmail : state => state.email
    },
})


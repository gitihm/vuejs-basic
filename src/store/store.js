import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store  = new Vuex.Store({
    //ประกาศตัวแปร
    state:{
        name : ""
    },
    //กำหนดฟังก์ชั่น
    mutations:{
        setName(state, name) {
           
            state.name = name
        },
        test(){
            
        }
    },
    //การดึงค่าไปใช้
    getters:{
        getName : state => state.name
    },
})


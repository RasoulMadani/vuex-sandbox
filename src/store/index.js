import {createStore} from "vuex";
import {INCREMENT} from "./mutation-type.js";
const store = createStore({
    state:{
        count:1,
    },
    mutations:{
        [INCREMENT](state,number){
            state.count+=number.name;
        }
    }
})
export default store;
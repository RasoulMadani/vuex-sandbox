import {createStore} from "vuex";

const store = createStore({
    state:{
        count:1,
    },
    mutations:{
        increment(state,number){
            state.count+=number;
        }
    }
})
export default store;
import {createStore} from "vuex";

const store = createStore({
    state:{
        todos:[
            {id:1,text:'...1',done:false},
            {id:2,text:'...2',done:true},
        ]
    }
})
export default store;
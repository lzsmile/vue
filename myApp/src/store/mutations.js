import * as types from './types'
export default {
    [types.SHOW_NAV]:(state)=>{
       state.bNav=true
    },
    [types.HIDE_NAV]:(state)=>{
        state.bNav=false
    },
    [types.SHOW_FOOT]:(state)=>{
        state.bFoot=true
    },
    [types.HIDE_FOOT](state){
        state.bFoot=false
    },
    [types.SHOW_LADING](state){
        state.bLoading=true
    },
    [types.HIDE_LADING](state){
        state.bLoading=false
    }
}


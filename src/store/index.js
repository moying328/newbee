import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    todos:[
      {id:1,text:'123',done:true},
      {id:2,text:'23232',done:false}
    ]
  },
  mutations: {
    increment(state){
      state.count+=10
    },
    incrementAsync(state,payload){
      state.count+=payload.amount
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  modules: {
  },
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done)
    },
    doneTodosCount:(state,getters)=>{
      return getters.doneTodos.length
    },
    getTodoById:(state)=>(id)=>{
      return state.todos.find(todo=>todo.id===id)
    }
    // getTodoById:function(state){
    //   return function(id){
    //     return state.todos.find(todo=>todo.id===id)
    //   }
    // }
  }
})

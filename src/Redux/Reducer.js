const Reducer = (oldstate,action) => {
 switch(action.type){
   case "ADD":{
      return ({...oldstate,count:oldstate.count + action.payload})
   }
   case "REDUCE":{
      return ({...oldstate,count:oldstate.count - action.payload})
   }
    default: return oldstate;
 }
}

export default Reducer

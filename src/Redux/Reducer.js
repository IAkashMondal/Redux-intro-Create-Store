const Reducer = (oldstate,action) => {
 switch(action.type){
   case "ADD":{
      let tempcount = oldstate.count + action.payload >= 25 ?25: oldstate.count + action.payload
      return ({...oldstate,count:oldstate.count + tempcount})
   }
   case "REDUCE":{
      return ({...oldstate,count:oldstate.count - action.payload})
   }
    default: return oldstate;
 }
}

export default Reducer

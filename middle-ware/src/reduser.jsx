function Counter(state=0,{type,payload}){
    switch(type){
        case "increment" :return state+payload;
        case "decrment": return state-payload;
        default :return state
    }
}
export default Counter;
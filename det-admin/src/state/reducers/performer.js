const reducer = (state = false, action) => {
    switch(action.type){
        case "setsidebar":
            return action.payload;
        default:
            return 0;
    }
    
}

export default reducer
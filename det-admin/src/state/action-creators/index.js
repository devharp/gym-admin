export const setSideBar = (value) => {
    return (dispatch) =>{
        dispatch({
            type: 'setsidebar',
            payload: value
        })
    }
}
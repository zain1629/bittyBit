
const initialState = {
    url:"test",
    loading:true
}

export const reducer = (state=initialState,action) =>{

    switch (action.type) {
        case "GET_URL":
          return {
            ...state,
            data: action.payload[0]
            
          };

        case "LOADING":
           return{
            ...state,
            loading:action.payload[0]    
           }

          default:
              return state;

    }

}
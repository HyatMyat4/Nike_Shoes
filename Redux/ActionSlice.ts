import { createSlice } from '@reduxjs/toolkit'


const initialState = { 
    darkmode : true ,

}
export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{      
        darkmodeEngin : (state , action) => {
            state.darkmode = action.payload
        },      
    } 
})

export const  {    
    darkmodeEngin,    
} = Actionslice.actions

export const  darkmodeC = ( state : any ) => state.actionslice.darkmode


export default Actionslice.reducer;
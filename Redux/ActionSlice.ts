import { createSlice } from '@reduxjs/toolkit'
import toast from "react-hot-toast";

const initialState = { 
    darkmode : true ,
    Cartopenclose : false ,
    UserCart :  [], 
    cartTotalAmount: 0,
    cartTotalQantity: 0,
}
export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{      
        darkmodeEngin : (state , action) => {
            state.darkmode = action.payload
        },   
        CartopencloseEngin : (state , action) => {
            state.Cartopenclose = action.payload
        },   
        UserCartEngin : (state : any , action : any) => {
               
            const itemsindex =   state.UserCart.findIndex(
                (item : any) => item.id === action.payload.id
              );

              if (itemsindex >= 0) {
                state.UserCart[itemsindex].cartQuantity += 1;        
                toast.success(`Item QTY Increased`);
              } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.UserCart.push(temp);        
                toast.success(`Success Order ${action.payload.title}`)
              } 
        
             
        }, 
        RemoveItemsEngin: (state : any , action : any) => {
             state.UserCart = state.UserCart.filter((item : any) => item.id !== action.payload.id )
        },
        RemoveAllItems : (state : any , action : any) => {
            state.UserCart = state.UserCart.filter((item : any) => item.id === action.payload )
        },
        RemoveItemDcreased : (state : any , action : any) => {
            const itemsindex =   state.UserCart.findIndex(
                (item : any) => item.id === action.payload.id
              );
              if (state.UserCart[itemsindex].cartQuantity > 1 ) {
                state.UserCart[itemsindex].cartQuantity -= 1;        
                toast.success(`Item QTY Dcreased`);
              } 
        },
    } 
})

export const  {    
    darkmodeEngin,    
    CartopencloseEngin,
    UserCartEngin,
    RemoveItemsEngin,
    RemoveAllItems,
    RemoveItemDcreased
} = Actionslice.actions

export const  darkmodeC = ( state : any ) => state.actionslice.darkmode
export const  CartopencloseC = ( state : any ) => state.actionslice.Cartopenclose
export const  UserCartC = ( state : any ) => state.actionslice.UserCart


export default Actionslice.reducer;
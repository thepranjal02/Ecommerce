import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const productThunk=createAsyncThunk("get-product",async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
})

const productslice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status:null,
        addedproducts:[]
    },
    reducers:{
        addToCart:(state,action) => {
            // state.addedproducts.push(action.payload)
            const newItem=action.payload;

            const Items=state.addedproducts.find((i)=>i.id===newItem.id);

            if(Items){
                console.log(Items)
            }
            else{
                state.addedproducts.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price,
                    image:newItem.image
                })
            }
        }
    },
    extraReducers:(builder) =>{
            builder.addCase(productThunk.pending,(state)=>{
                state.status='loading';
            })
            builder.addCase(productThunk.fulfilled,(state,action)=>{
                state.status='null';
                state.products=action.payload;
            })
            builder.addCase(productThunk.rejected,(state)=>{
                state.status='loading';
            })
    }
})

export const {addToCart}=productslice.actions;
export default productslice.reducer;
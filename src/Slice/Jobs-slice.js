import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { apiCall } from '../utils/api-client'

export const getAllJobs = createAsyncThunk("/all-jobs", async ()=>{
    //api call
   const response = await apiCall()
   console.log('data0',response);
   return response;
})
export const jobSlice = createSlice({
    initialState:{jobs:[],loading:false,error:null},
    name : 'jobSlice',
    reducers:{},
    extraReducers:(builder)=>{
       builder.addCase(getAllJobs.pending,(state,action)=>{
        console.log('pending state',state,"action is ",action);
        state.loading=true;
       }).addCase(getAllJobs.fulfilled,(state,action)=>{
        console.log('fulfilled state',state,"action is ",action.payload);
        state.loading=false;
        state.jobs=action.payload
       }).addCase(getAllJobs.rejected,(state,action)=>{
        console.log('rejected state',state,"action is ",action);
       })
    }
})
export default jobSlice.reducer;
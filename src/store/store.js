import {configureStore} from '@reduxjs/toolkit'
import jobReducers from '../Slice/Jobs-slice'
export const store = configureStore({
    reducer:{jobReducers: jobReducers}
})
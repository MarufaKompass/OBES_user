import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




export const getBmiContent = createAsyncThunk('/bmi/content', async () => {
	const response = await axios.get('/api/users?page=2', {})
	return response.data;
})

export const bmiSlice = createSlice({
    name: 'bmi',
    initialState: {
        isLoading: false,
        bmis : []
    },
    reducers: {


        addNewLead: (state, action) => {
            let {newLeadObj} = action.payload
            state.bmi = [...state.bmi, newLeadObj]
        },

        deleteLead: (state, action) => {
            let {index} = action.payload
            state.bmi.splice(index, 1)
        }
    },

    extraReducers: {
		[getBmiContent.pending]: state => {
			state.isLoading = true
		},
		[getBmiContent.fulfilled]: (state, action) => {
			state.bmi = action.payload.data
			state.isLoading = false
		},
		[getBmiContent.rejected]: state => {
			state.isLoading = false
		},
    }
})

export const { addNewLead, deleteLead } = bmiSlice.actions

export default bmiSlice.reducer
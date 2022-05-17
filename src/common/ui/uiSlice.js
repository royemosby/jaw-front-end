import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

/* 
- toggleModel is not preferred because each state slice cannot "see" what the other has done
- message on each model are set independently so that form fields can remain highlighted after modal is dismissed.
*/

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.isModalOpen = false
    },
    openModal: (state) => {
      state.isModalOpen = true
    },
  },
})

export const { closeModal, openModal } = uiSlice.actions
export default uiSlice.reducer

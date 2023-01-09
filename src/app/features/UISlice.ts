/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'; 
import type {RootState} from '../../app/store';
import { Sections } from '../../Utils/types';

interface UIState {
  isOpen: boolean
  currentSection: Sections
}

const initialState: UIState = {
  isOpen: false, 
  currentSection: Sections.HOME, 
}

export const UISlice = createSlice({
  name: `UI`,
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.isOpen = !state.isOpen
    },
    
    closeSideNav: (state) => {
      state.isOpen = false
    }, 
    
    openSideNav: (state) => {
      state.isOpen = true
    }, 
    
    setCurrentSection: (state, action: PayloadAction<Sections>) => {
      state.currentSection = action.payload
    }
  }
})

export default UISlice.reducer; 

export const {toggleSideNav, closeSideNav, openSideNav, setCurrentSection} = UISlice.actions; 

export const selectIsOpen = (state: RootState) => state.UI.isOpen; 

export const selectCurrentSection = (state: RootState) => state.UI.currentSection

/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'; 
import type {RootState} from '../../app/store';
import { Sections } from '../../Utils/types';

interface UIState {
  isOpen: boolean
  currentSection: Sections
  currentProject: string
}

const initialState: UIState = {
  isOpen: false,
  currentSection: Sections.HOME,
  currentProject: `ecogym`,
};

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
    }, 
    
    setCurrentProject: (state, action: PayloadAction<string>) => {
      state.currentProject = action.payload
    }, 
  }
})

export default UISlice.reducer; 

export const {
  toggleSideNav,
  closeSideNav,
  openSideNav,
  setCurrentSection, 
  setCurrentProject, 
} = UISlice.actions; 

export const selectIsOpen = (state: RootState) => state.UI.isOpen; 

export const selectCurrentSection = (state: RootState) => state.UI.currentSection

export const selectCurrentProject = (state: RootState) => state.UI.currentProject

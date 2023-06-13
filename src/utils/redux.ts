/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  dispatch: AppDispatch
  state: RootState
}>();

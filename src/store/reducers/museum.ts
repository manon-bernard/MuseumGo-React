// REDUX IMPORTS
import { createReducer } from '@reduxjs/toolkit';

// TYPES
import axios from 'axios';
import { Data, MuseumState } from '../../@types/data';

// IMPORTS
import { createAppAsyncThunk } from '../../utils/redux';

// INIT STATE
export const initialState: MuseumState = {
  records: [],
  regions: [],
  domains: [],
};

// ACTIONS

// Fetch data
export const fetchMuseumData = createAppAsyncThunk(
  'museum/FETCH_DATA',
  async () => {
    const { data } = await axios({
      url: '/',
      method: 'GET',
      baseURL: 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=musees-de-france-base-museofile&q=&rows=10&facet=dompal&facet=region&facet=ville_m',
    });

    return data as Data;
  },

);

// REDUCER

const museumReducer = createReducer(initialState, (builder) => {
  builder
    // READ
    .addCase(fetchMuseumData.pending, (state) => {
      // TODO
    })
    .addCase(fetchMuseumData.rejected, (state) => {
      // TODO
    })
    .addCase(fetchMuseumData.fulfilled, (state, action) => {
      state.records = action.payload.records;
      state.domains = action.payload.facet_groups[0].facets;
      state.regions = action.payload.facet_groups[1].facets;
    });
});

export default museumReducer;

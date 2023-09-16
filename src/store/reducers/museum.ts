// REDUX IMPORTS
import { createAction, createReducer } from '@reduxjs/toolkit';

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
  filtered_regions: [],
  searched_records: [],
  searchValue: '',
  loading: true,
  error: false,
  loadedResults: 9,
};

// ACTIONS

// Fetch data
export const fetchMuseumData = createAppAsyncThunk(
  'museum/FETCH_ALL_DATA',
  async () => {
    const { data } = await axios({
      url: '/',
      method: 'GET',
      baseURL: 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=musees-de-france-base-museofile&q=&rows=2000&facet=dompal&facet=region&facet=ville_m',
    });

    return data as Data;
  },
);

// Check regions filter
export const setChecked = createAction<string>('museum/SET_FILTER');

// Search
export const setSearchString = createAction<string>('museum/SET_SEARCH_STRING');

export const submitSearch = createAction('museum/SUBMIT_SEARCH');

export const loadMore = createAction('museum/LOAD_MORE');

// REDUCER

const museumReducer = createReducer(initialState, (builder) => {
  builder
    // READ
    .addCase(fetchMuseumData.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
    .addCase(fetchMuseumData.rejected, (state) => {
      state.error = true;
      state.loading = false;
    })
    .addCase(fetchMuseumData.fulfilled, (state, action) => {
      state.records = action.payload.records;
      state.domains = action.payload.facet_groups[0].facets;
      state.regions = action.payload.facet_groups[1].facets;
      state.loading = false;
    })
    .addCase(loadMore, (state) => {
      state.loadedResults += 9;
    })
    .addCase(setChecked, (state, action) => {
      const checked = state.filtered_regions.includes(action.payload);

      if (!checked) {
        state.filtered_regions.push(action.payload);
      } else {
        state.filtered_regions = state.filtered_regions.filter((item) => item !== action.payload);
      }

      state.loadedResults = 9;
    })
    .addCase(setSearchString, (state, action) => {
      state.searchValue = action.payload;
    })
    .addCase(submitSearch, (state) => {
      const searchedWords = state.searchValue.split(' ').filter((word) => (word.trim() !== ''));
      //
      const matchingRecords = state.records.filter((record) => {
        const { fields } = record;
        const fieldValues = Object.values(fields);

        // Regex to search whole words
        const wordRegex = new RegExp(searchedWords.join('|'), 'i'); // 'i' pour ignorer la casse
        return fieldValues.some((value) => {
          if (typeof value === 'string') {
            const wordsInField = value.split(/\s+/); // Divise fields value into words list
            return wordsInField.some((word) => word.match(wordRegex) !== null);
          }
          return false;
        });
      });

      state.searched_records = matchingRecords;
      state.loadedResults = 9;
    });
});

export default museumReducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as action from './Actions';

axios.defaults.baseURL = 'https://63ea04e03363c870035fb06a.mockapi.io/contacts';

export const fetchContactsApi = createAsyncThunk(
  action.fetchContacts,
  async (_, thunkAPI) => {
    try {
      const contact = await axios.get('/contacts');
      return contact;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactsApi = createAsyncThunk(
  action.addContact,
  async (contact, thunkAPI) => {
    try {
      axios.post('/contacts', contact);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactsApi = createAsyncThunk(
  action.deleteContact,
  async (id, thunkAPI) => {
    try {
      axios.delete(`/contacts/${id}`);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

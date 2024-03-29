import { createAction } from '@reduxjs/toolkit';

export const fetchContacts = createAction('contacts/fetchAll');

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');

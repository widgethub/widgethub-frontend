import axios from 'axios';
import { API_URL } from '../config';
import { getToken } from './auth.service';

export const getProfiles = () => {
  return axios.get(
    API_URL+'profile/providers',
    { headers: {'Content-Type': 'application/json', 'x-access-token': getToken() }}
  )
    .then(res => res)
    .catch(err => err)
}

export const createProfile = (newProvider) => {
  return axios.post(
    API_URL+'profile/providers',
    { newProvider: newProvider },
    { headers: {'Content-Type': 'application/json', 'x-access-token': getToken() }}
  )
    .then(res => res)
    .catch(err => err)
}

export const updateProfile = (updatedProvider) => {
  return axios.patch(
    API_URL+'profile/providers',
    { updatedProvider: updatedProvider },
    { headers: {'Content-Type': 'application/json', 'x-access-token': getToken() }}
  )
    .then(res => res)
    .catch(err => err)
}

export const deleteProfile = (provider_id) => {
  return axios.delete(
    API_URL+'profile/providers',
    { headers: {'Content-Type': 'application/json', 'x-access-token': getToken() },
      data: { provider_id: provider_id }}
  )
    .then(res => res)
    .catch(err => err)
}
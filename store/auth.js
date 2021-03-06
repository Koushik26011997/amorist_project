import { UserDetails } from '../models/user_details';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../service/common';
import { showFlashMessage } from '../utility';
import { showMessage } from 'react-native-flash-message';

const guestUserLogin = createAsyncThunk(
  'guestUserLogin',
  async (data, thunkAPI) => {
    console.log('guestUserLogin', data);
    const response = await request('post', "api/login", data);
    return response.data;
  },
);

const guestUserRegister = createAsyncThunk(
  'guestUserRegister',
  async (data, thunkAPI) => {
    console.log('guestUserRegister', data);
    const response = await request('post', "api/register", data);
    return response.data;
  },
);

const guestUserLogout = createAsyncThunk(
  'guestUserLogout',
  async (data, thunkAPI) => {
    console.log('guestUserLogout', data);
    const response = await request('post', "api/logout", data);
    return response.data;
  },
);

const guestUserOTP = createAsyncThunk(
  'guestUserOTP',
  async (data, thunkAPI) => {
    console.log('guestUserLogin', data);
    const response = await request('post', "api/mobile_app_otp", data);
    return response.data;
  },
);

const guestUserLanguages = createAsyncThunk(
  'guestUserLanguages',
  async (data, thunkAPI) => {
    console.log('guestUserLogin', data);
    const response = await request('post', "api/follow_languages", data);
    return response.data;
  },
);

const guestUserTopicList = createAsyncThunk(
  'guestUserTopicList',
  async (data, thunkAPI) => {
    console.log('guestUserTopicList', data);
    const response = await request('post', "api/interest_topics", data);
    return response.data;
  },
);

const guestUserInfluencersList = createAsyncThunk(
  'guestUserInfluencersList',
  async (data, thunkAPI) => {
    console.log('guestUserInfluencersList', data);
    const response = await request('post', "api/follow_influencers", data);
    return response.data;
  },
);


const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    languagesList: [],
    topicList: [],
    influencerList: [],
  },

  reducers: {
    // familyMemberLoginSuccess: (state, action) => {
    //   state.familyMember = new UserDetails(action.payload.data.user_details);
    //   state.token = action.payload.data.token;
    //   AsyncStorage.setItem('access_token', action.payload.data.token);
    // }
  },

  extraReducers: {
    [guestUserLogin.fulfilled]: (state, action) => {
      if (action.payload?.success === true) {
        state.user = new UserDetails(action.payload.data);
        AsyncStorage.setItem('token', action.payload.data.token || '');
      }
      state.loading = false;
    },

    [guestUserLogin.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserLogin.rejected]: (state, action) => {
      console.log("action", action.e);
      showFlashMessage(action.error.message, "", "danger");
      state.user = null;
      state.loading = false;
    },
    //
    [guestUserRegister.fulfilled]: (state, action) => {
      state.user = new UserDetails(action.payload.data);
      AsyncStorage.setItem('app_api_key', action.payload.data.app_api_key);
      AsyncStorage.setItem('device_token', action.payload.data.device_token);
      state.loading = false;
    },

    [guestUserRegister.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserRegister.rejected]: (state, action) => {
      state.user = null;
      state.loading = false;
      console.log("Error", action.payload.message);
    },
    //
    [guestUserLogout.fulfilled]: (state, action) => {
      state.user = null;
      AsyncStorage.clear();
      state.loading = false;
      showFlashMessage("Logout successful", "", "success");
    },

    [guestUserLogout.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserLogout.rejected]: (state, action) => {
      state.loading = false;
      console.log("Error", action.payload.message);
      showFlashMessage(action.payload.message, "", "danger");
    },
    //
    [guestUserOTP.fulfilled]: (state, action) => {
      state.loading = false;
    },

    [guestUserOTP.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserOTP.rejected]: (state, action) => {
      state.loading = false;
    },
    //
    [guestUserLanguages.fulfilled]: (state, action) => {
      console.log("guestUserLanguages.fulfilled", action);
      state.languagesList = action.payload.data;
      state.loading = false;
    },

    [guestUserLanguages.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserLanguages.rejected]: (state, action) => {
      console.log("guestUserLanguages.rejected", action);
      state.languagesList = [];
      state.loading = false;
    },
    //
    [guestUserTopicList.fulfilled]: (state, action) => {
      state.topicList = action.payload.data;
      state.loading = false;
    },

    [guestUserTopicList.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserTopicList.rejected]: (state, action) => {
      state.topicList = [];
      state.loading = false;
    },
    //
    [guestUserInfluencersList.fulfilled]: (state, action) => {
      state.influencerList = action.payload.data;
      state.loading = false;
    },

    [guestUserInfluencersList.pending]: (state, action) => {
      state.loading = true;
    },

    [guestUserInfluencersList.rejected]: (state, action) => {
      state.influencerList = [];
      state.loading = false;
    },
  },
});

export const { } = loginSlice.actions;
export { guestUserLogin, guestUserRegister, guestUserLogout, guestUserOTP, guestUserLanguages, guestUserTopicList, guestUserInfluencersList };
export default loginSlice.reducer;

import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({},{

    //register
    registerRequest: (state)=>{
        state.loading = true;
    },
    registerSuccess: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    registerFail: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload
    },

    //login
    loginRequest: (state)=>{
        state.loading = true;
    },
    loginSuccess: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFail: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload
    },

    //profile
    loadUserRequest: (state)=>{
        state.loading = true;
    },
    loadUserSuccess: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loadUserFail: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload
    },

    //logout
    logoutRequest: (state)=>{
        state.loading = true;
    },
    logoutSuccess: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutFail: (state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    clearError: (state)=>{
        state.error = null;
    },
    clearMessage: (state)=>{
        state.message = null;
    },
});



export const subscriptionReducer = createReducer({},{

   
    buySubscriptionRequest: (state)=>{
        state.loading = true;
    },
    buySubscriptionSuccess: (state,action)=>{
        state.loading = false;
        state.subscriptionId = action.payload;
    },
    buySubscriptionFail: (state,action)=>{
        state.loading = false;
        state.error = action.payload
    },

    cancelSubscriptionRequest: (state)=>{
        state.loading = true;
    },
    cancelSubscriptionSuccess: (state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    cancelSubscriptionFail: (state,action)=>{
        state.loading = false;
        state.error = action.payload
    },

    clearError: (state)=>{
        state.error = null;
    },
    clearMessage: (state)=>{
        state.message = null;
    },


});

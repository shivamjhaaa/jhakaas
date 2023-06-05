import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({users:[]},{

    getDashboardStatsRequest: (state) => {
        state.loading = true;
    },
    getDashboardStatsSuccess: (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.usersCount = action.payload.usersCount;
        state.subscribersCount = action.payload.subscribersCount;
        state.viewsCount = action.payload.viewsCount;
        state.usersChangePercentage = action.payload.usersChangePercentage;
        state.subscribersChangePercentage = action.payload.subscribersChangePercentage;
        state.viewsChangePercentage = action.payload.viewsChangePercentage;
        state.usersGain = action.payload.usersGain;
        state.subscribersGain = action.payload.subscribersGain;
        state.viewsGain = action.payload.viewsGain;
    },
    getDashboardStatsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getAllUsersRequest: (state) => {
        state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    updateUserRoleRequest: (state) => {
        state.loading = true;
    },
    updateUserRoleSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateUserRoleFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteUserRequest: (state) => {
        state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteUserFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    createCourseRequest: (state) => {
        state.loading = true;
    },
    createCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteCourseRequest: (state) => {
        state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    addLectureRequest: (state) => {
        state.loading = true;
    },
    addLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteLectureRequest: (state) => {
        state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    },
})
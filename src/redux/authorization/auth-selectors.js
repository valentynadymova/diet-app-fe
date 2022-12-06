export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user?.name;

export const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const getIsReducerSpinner = state => state.auth.isReducerSpinner;

export const getUserDataCalories = state => state.auth.userData.calories;

export const getNotAllowedProducts = state => state.auth.notAllowedProducts;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
  getIsReducerSpinner,
  getUserDataCalories,
  getNotAllowedProducts,
};

export default authSelectors;

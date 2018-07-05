export const state = () => {
  return {
    lastPage: ""
  };
};

export const mutations = {
  setLastPage(state, page) {
    state.lastPage = page;
  }
};

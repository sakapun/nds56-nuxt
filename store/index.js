export const state = () => {
  return {
    headerText: "This is header text"
  };
};

export const mutations = {
  setHeader(state, text) {
    state.headerText = text;
  }
};

const state = {
    url: "",
  };
  
  const mutations = {
    setUrl (state, data) {
      state.url = data;
      console.log(data);
    },
  };
  
  
  export default {
    state,
    mutations,
  };
  
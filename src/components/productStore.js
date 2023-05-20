import axios from "axios";

const state = {
  products: [],
  token: {},
  user: {},
  filterProducts: [],
};
const getters = {
  productsList: (state) => state.products,
  filterProducts: (state) => state.filterProducts,
};
const actions = {
  async login({ commit }, payload) {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      payload
    );

    commit("addUserToken", response.data);
  },

  async getFilterProductByPrice({ commit }, payload) {
    console.log(payload);

    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?price_min=${payload.price_min}&price_max=${payload.price_max}`
    );
    commit("setFiltetProduct", response.data);
  },

  async getFilterProduct({ commit }, title) {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?title=${title}`
    );
    commit("setFiltetProduct", response.data);
  },

  async getProductByCategory({ commit }, id) {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    );
    commit("setFiltetProduct", response.data);
  },

  async fetchproducts({ commit }) {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    commit("setproducts", response.data);
  },
  async getUser({ commit }) {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${state.token.access_token}`;
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile"
    );
    if (response.data) {
      commit("setUserProfile", response.data);
    }
  },
};

const mutations = {
  setUserProfile: (state, user) => (state.user = user),
  setproducts: (state, products) => (state.products = products),

  setFiltetProduct: (state, products) => (state.filterProducts = products),
  addUserToken: (state, token) => {
    state.token = token;
    return state;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};

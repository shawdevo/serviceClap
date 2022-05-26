import { db } from "@/db";
import { getDocs, query, collectionGroup } from "firebase/firestore";

export default {
  namespaced: true,
  // this will make sure you specify the name of the modeule when use getters and dispatch action.
  state() {
    return {
      items: [],
    };
  },
  actions: {
    async getExchanges({ commit }) {
      const exchangeQuery = query(collectionGroup(db, "exchanges"));
      const snapshot = await getDocs(exchangeQuery);
      const exchanges = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      commit("setExchanges", exchanges);
    },
  },
  mutations: {
    setExchanges(state, exchanges) {
      state.items = exchanges;
    },
  },
};

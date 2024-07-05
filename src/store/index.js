// src/store/index.js
import { createStore } from 'vuex';
import contentfulClient from '../contentfulClient';

const store = createStore({
    state() {
        return {
            bigards: [],
            products: []
        };
    },
    mutations: {
        setBigards(state, bigards) {
            state.bigards = bigards;
        },
        setProducts(state, products) {
            state.products = products;
        }
    },
    actions: {
        async fetchBigards({ commit, state }) {
            if (state.bigards.length === 0) {
                try {
                    const response = await contentfulClient.getEntries({
                        content_type: 'locations',
                        order: 'sys.updatedAt'
                    });
                    const bigards = response.items.map(item => {
                        const fields = item.fields;
                        if (fields.image && fields.image.fields.file) {
                            fields.image = fields.image.fields.file.url;
                        }
                        return fields;
                    });
                    commit('setBigards', bigards);
                } catch (error) {
                    console.error("Fetch error:", error);
                }
            }
        },
        async fetchProducts({ commit, state }) {
            if (state.products.length === 0) {
                try {
                    const response = await contentfulClient.getEntries({
                        content_type: 'product',
                        order: 'sys.updatedAt'
                    });
                    const products = response.items.map(item => {
                        const fields = item.fields;
                        if (fields.image && fields.image.fields.file) {
                            fields.image = fields.image.fields.file.url;
                        }
                        return fields;
                    });
                    commit('setProducts', products);
                } catch (error) {
                    console.error("Fetch error:", error);
                }
            }
        }
    }
});

export default store;

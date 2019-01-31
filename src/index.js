import router from './router';
import { Store } from 'svelte/store';
import App from './App.html';
import { Home, Products, Product, Jobs, Contact } from './pages';
import products from './products';

import './styles/styles.scss';

const store = new Store({
  Page: Home,
  id: null,
  products
});

const logRoute = () => {
  console.log(JSON.stringify(router.lastRouteResolved(), null, 2));
};

router.on({
  '/products/:id': (params) => {
    logRoute();
    store.set({ Page: Product, path: '/products', id: params.id });
  },
  '/products': () => {
    logRoute();
    store.set({ Page: Products, path: '/products', id: null });
  },
  '/jobs': () => {
    logRoute();
    store.set({ Page: Jobs, path: '/jobs', id: null });
  },
  '/contact': () => {
    logRoute();
    store.set({ Page: Contact, path: '/contact', id: null });
  },
  '/': () => {
    logRoute();
    store.set({ Page: Home, path: '/', id: null });
  }
})
	.resolve();

window.store = store; // useful for debugging!

new App({
  target: document.querySelector('root'),
  store
});
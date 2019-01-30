import router from './router';
import { Store } from 'svelte/store';
import App from './App.html';
import { Home, Products, Product, Jobs, About } from './pages';
import './styles/styles.scss';

const store = new Store({
  // Page value has to be equal to one of comopents
  Page: Home,
  id: null,
});

const logRoute = () => {
  console.log(JSON.stringify(router.lastRouteResolved(), null, 2));
};

router.on({
  '/products/:id': (params) => {
    logRoute();
    store.set({ Page: Product, path: '/products/:id', id: params.id });
  },
  '/products': () => {
    logRoute();
    store.set({ Page: Products, path: '/products', id: null });
  },
  '/jobs': () => {
    logRoute();
    store.set({ Page: Jobs, path: '/jobs', id: null });
  },
  '/about': () => {
    logRoute();
    store.set({ Page: About, path: '/about', id: null });
  },
  '/': () => {
    logRoute();
    store.set({ Page: Home, path: '/', id: null });
  }
})
	.resolve();

window.store = store; // useful for debugging!

new App({
  target: document.querySelector('main'),
  store
});
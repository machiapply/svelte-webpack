import router from './router';
import { Store } from 'svelte/store';
// import Amplify, { Auth } from 'aws-amplify';
// import AWSAppSyncClient from 'aws-appsync';
// import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
// import ApolloClient from 'apollo-boost';
// import { createProvider } from 'svelte-apollo';
import App from './App.html';
import { Home, Products, Product, Jobs, About } from './pages';
import './styles/styles.scss';
// import registerServiceWorker from './registerServiceWorker';

// Amplify.configure({
//   Auth: {
//     region: 'us-west-2', // REQUIRED - Amazon Cognito Region
//     userPoolId: 'us-west-2_OyygF6cyL', //OPTIONAL - Amazon Cognito User Pool ID
//     userPoolWebClientId: '6bbdola382b7ug82m397g8reh', //OPTIONAL - Amazon Cognito Web Client ID
//     mandatorySignIn: true
//   }
// });
// const client = new AWSAppSyncClient({
//   disableOffline: false,
//   url: 'https://k4knnpolv5afpjwnaewbngodvy.appsync-api.us-west-2.amazonaws.com/graphql',
//   region: 'us-west-2',
//   auth: {
//     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//     jwtToken: async () =>
//       (await Auth.currentSession()).getAccessToken().getJwtToken()
//   },
//   complexObjectsCredentials: () => Auth.currentCredentials()
// });
// const graphql = createProvider(client);
const store = new Store({
  // Page value has to be equal to one of comopents
  Page: Home,
  id: null,
  API: process.env.SITE_API,
  // graphql
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

// Register serice worker for offline use
// registerServiceWorker();
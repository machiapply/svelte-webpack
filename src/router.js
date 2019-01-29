import Navigo from 'navigo';

const base =  process.env.SITE_PUBLIC_PATH;
const useHash = true; //Defaults to false
const hash = '#!'; //Defaults to '#'
// const router = new Navigo(base, useHash, hash);
const router = new Navigo(base);

export default router;
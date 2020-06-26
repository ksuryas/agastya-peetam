import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncHomePage = asyncComponent(() => import('../components/HomePage/HomePage'));
const asyncAboutAGPPage = asyncComponent(() => import('../components/About/About'));
const asyncAboutSwamijiPage = asyncComponent(() => import('../components/About/AboutSwamiji/AboutSwamiji')); 
const asyncBooksPage = asyncComponent(() => import('../components/BooksBySwamiji/BooksBySwamiji'));
const asyncAboutGMPPage = asyncComponent(() => import('../components/About/AboutGMP/AboutGMP'));
const asyncAboutDSYPage = asyncComponent(() => import('../components/About/AboutDSY/AboutDSY'));
const asyncDonatePage = asyncComponent(() => import('../components/Donate/Donate'));
const asyncContactUsPage = asyncComponent(() => import('../components/ContactUs/ContactUs'));
const async404Page = asyncComponent(() => import('../components/UI/PageNotFound/PageNotFound'));

const cmp = {
    home: asyncHomePage,
    about: asyncAboutAGPPage,
    aboutSwamiji: asyncAboutSwamijiPage,
    books: asyncBooksPage,
    gmp: asyncAboutGMPPage,
    dsy: asyncAboutDSYPage,
    donate: asyncDonatePage,
    contact: asyncContactUsPage,
    notFound: async404Page
};

export default cmp;
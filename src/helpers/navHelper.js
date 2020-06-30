import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncAboutAGPPage = asyncComponent(() => import('../components/About/About'));
const asyncAboutSwamijiPage = asyncComponent(() => import('../components/About/AboutSwamiji/AboutSwamiji')); 
const asyncAboutGMPPage = asyncComponent(() => import('../components/About/AboutGMP/AboutGMP'));
const asyncAboutDSYPage = asyncComponent(() => import('../components/About/AboutDSY/AboutDSY'));
const asyncDonatePage = asyncComponent(() => import('../components/Donate/Donate'));
const asyncDonatedPage = asyncComponent(() => import('../components/Donate/DonationSuccessful/DonationSuccessful'));
const asyncDonateFailurePage = asyncComponent(() => import('../components/Donate/DonationFailure/DonationFailure'));
const asyncContactUsPage = asyncComponent(() => import('../components/ContactUs/ContactUs'));
const async404Page = asyncComponent(() => import('../components/UI/PageNotFound/PageNotFound'));

const cmp = {
    home: asyncAboutAGPPage,
    aboutSwamiji: asyncAboutSwamijiPage,
    gmp: asyncAboutGMPPage,
    dsy: asyncAboutDSYPage,
    donate: asyncDonatePage,
    donated: asyncDonatedPage,
    donateFailure: asyncDonateFailurePage,
    contact: asyncContactUsPage,
    notFound: async404Page
};

export default cmp;
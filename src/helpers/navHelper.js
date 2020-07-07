import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncAboutAGPPage = asyncComponent(() => import('../components/About/About'));
const asyncAboutSwamijiPage = asyncComponent(() => import('../components/About/AboutSwamiji/AboutSwamiji')); 
const asyncAboutGMPPage = asyncComponent(() => import('../components/About/AboutGMP/AboutGMP'));
const asyncAboutDSYPage = asyncComponent(() => import('../components/About/AboutDSY/AboutDSY'));
const asyncPrivPolicyPage = asyncComponent(() => import('../components/RazorpayClientPages/PrivacyPolicy/PrivacyPolicy'));
const asyncTsAndCsPage = asyncComponent(() => import('../components/RazorpayClientPages/TermsAndConditions/TermsAndConditions'));
const asyncDonatePage = asyncComponent(() => import('../components/Donate/Donate'));
const asyncDonatedPage = asyncComponent(() => import('../components/Donate/DonationSuccessful/DonationSuccessful'));
const asyncDonateFailurePage = asyncComponent(() => import('../components/Donate/DonationFailure/DonationFailure'));
const async404Page = asyncComponent(() => import('../components/UI/PageNotFound/PageNotFound'));

const cmp = {
    home: asyncAboutAGPPage,
    aboutSwamiji: asyncAboutSwamijiPage,
    gmp: asyncAboutGMPPage,
    dsy: asyncAboutDSYPage,
    privacyPolicy: asyncPrivPolicyPage,
    tsAndCs: asyncTsAndCsPage,
    donate: asyncDonatePage,
    donated: asyncDonatedPage,
    donateFailure: asyncDonateFailurePage,
    notFound: async404Page
};

export default cmp;
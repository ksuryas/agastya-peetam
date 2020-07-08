import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncAboutAGPPage = asyncComponent(() => import ('../components/Content/About/About'));
const asyncAboutSwamijiPage = asyncComponent(() => import ('../components/Content/About/AboutSwamiji/AboutSwamiji'));
const asyncAboutGMPPage = asyncComponent(() => import ('../components/Content/About/AboutGMP/AboutGMP'));
const asyncAboutDSYPage = asyncComponent(() => import ('../components/Content/About/AboutDSY/AboutDSY'));
const asyncPrivPolicyPage = asyncComponent(() => import ('../components/Content/RazorpayClientPages/PrivacyPolicy/PrivacyPolicy'));
const asyncTsAndCsPage = asyncComponent(() => import ('../components/Content/RazorpayClientPages/TermsAndConditions/TermsAndConditions'));
const asyncDonatePage = asyncComponent(() => import ('../components/Content/Donate/Donate'));
const asyncDonatedPage = asyncComponent(() => import ('../components/Content/Donate/DonationSuccessful/DonationSuccessful'));
const asyncDonateFailurePage = asyncComponent(() => import ('../components/Content/Donate/DonationFailure/DonationFailure'));
const async404Page = asyncComponent(() => import ('../components/UI/PageNotFound/PageNotFound'));

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
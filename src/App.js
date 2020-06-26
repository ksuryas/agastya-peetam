import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import cmp from './helpers/navHelper';

class App extends Component {
   render() {
    let routes = (
         <Switch>
            <Route path="/" exact component={cmp.home} />  
            <Route path="/about-agastya-peetam/" component={cmp.about} />
            <Route path="/about-swamiji/" component={cmp.aboutSwamiji} />
            <Route path="/books-written-by-swamiji/" component={cmp.books} />
            <Route path="/about-gayathri-maha-purashcharana/" component={cmp.gmp} />
            <Route path="/about-deergha-sathra-yagam/" component={cmp.dsy} />
            <Route path="/donate/" component={cmp.donate} />
            <Route path="/contact-us/" component={cmp.contact} />
            <Route component={cmp.notFound} />
         </Switch>
    );

    return (
        <Layout>
         {routes}
        </Layout>
    );
  };
}

export default App;
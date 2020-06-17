import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

class App extends Component {
   render() {
     const asyncHomePage = asyncComponent(() => {
       return import('./components/HomePage/HomePage');
     });

     const routes = (
       <Switch>
         <Route path="/" exact component={asyncHomePage} />  
         {/* <Route path="/about-swamiji" component={asyncAuth} />
         <Route path="/feedback-form" component={asyncFeedbackForm} />
         <Route path="/contact-us" component={asyncContactUs} />
     <Route path="/burger-builder" render={(routeProps) => <BurgerBuilder {...routeProps} />} /> */}

       </Switch>
     );

    return (
      <div>
        <Layout>
         {routes}
        </Layout>
    </div>
    );
  }
}

export default App;
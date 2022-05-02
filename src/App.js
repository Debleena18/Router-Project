import React, {Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

//To use Lazy Loading lazy() is used.
const NewQuote = React.lazy(() => import ('./pages/NewQuote')); 
const QuoteDetail = React.lazy(() => import ('./pages/QuoteDetail')); 
const NotFound = React.lazy(() => import ('./pages/NotFound'));
const AllQuotes = React.lazy(() => import ('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}
//This (*) characters signals to react-router that any url that doesn't matches above will match here and render "NotFound"
export default App;
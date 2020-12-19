import React from 'react';
import { Route } from 'react-router-dom';
//import ErrorBoundary from './error-boundary';
import Home from './home/home';
import Login from './login/login';
import Main from './main/main';
import Search from './search/search';
import Results from './results/results';
import UserHistory from './history/history';
import Nav from './nav/nav';
//import PublicOnlyRoute from './utils/public-only-route';
//import PrivateRoute from './utils/private-route';
//import TokenService from './services/token-service';
//import AuthApiService from './services/auth-api-service';
//import Context from './context';
//import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <>
            <Nav />
            <header className='App__header'>
              <h1>
                Uncorked
              </h1>
            </header>
            <main className='App__main'>
              <Route exact path='/' component={Home} />

              <Route path='/login' component={Login} />

              <Route path='/main' component={Main} />

              <Route path='/search' component={Search} />

              <Route path='/results' component={Results} />

              <Route path='/history' component={UserHistory} />
            </main>
          </>
      </div>
    );
  }
}

export default App;
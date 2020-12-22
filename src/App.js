import React from 'react';
import { withRouter } from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';
import Main from './main/main';
import Search from './search/search';
import Results from './results/results';
import UserHistory from './history/history';
import Nav from './nav/nav';
import PublicOnlyRoute from './utils/public-only-route';
import PrivateRoute from './utils/private-route';
import TokenService from './services/token-service';
import Context from './context';
import ErrorBoundary from './error-boundary';
import './App.css';

class App extends React.Component {
  state = {
    userInfo: {
      user_id: '',
      username: '',
      password: '',
      hasError: false,
    },
    wines: [],
    wine: {
      winemaker: '',
      wine_type: '',
      wine_name: '',
      varietal: '',
      vintage: '',
      region: '',
      tasting_notes: '',
      rating: '',
      img_url: '',
    }
  }

  setUserInfo = info => {
    this.setState({
      userInfo: info,
      error: null,
    })
  }

  setWines = wines => {
    this.setState({
      wines: wines,
      error: null,
    })
  }

  handleAddWine = newWine => {
    this.setState({
      wines: [...this.state.wines, newWine],
    })
  }

  handleHomePage = () => {
    this.props.history.push('/login')
  }

  handleLoginPage = () => {
    this.props.history.push('/main')
  }

  handleMainPage = () => {
    this.props.history.push('/history')
  }

  handleSearchPage = () => {
    this.props.history.push('/results')
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    localStorage.clear()
  }

  renderRoutes() {
    return (
      <>
        <PublicOnlyRoute exact path='/' component={Home} />

        <PublicOnlyRoute path='/login' component={Login} />

        <PrivateRoute path='/main' component={Main} />

        <PrivateRoute path='/search' component={Search} />

        <PrivateRoute path='/results' component={Results} />

        <PrivateRoute path='/history' component={UserHistory} />
      </>
    )
  }
  render() {
    const value = {
      userInfo: this.state.userInfo,
      wines: this.state.wines,
      wine: this.state.wine,
      setUserInfo: this.setUserInfo,
      setWines: this.setWines,
      handleAddWine: this.handleAddWine,
      handleHomePage: this.handleHomePage,
      handleLoginPage: this.handleLoginPage,
      handleMainPage: this.handleMainPage,
      handleSearchPage: this.handleSearchPage,
      handleLogoutClick: this.handleLogoutClick,
    }
    return (
      <Context.Provider value={value}>
        <div className='App'>
          <ErrorBoundary>
            <>
              <Nav />
              <header className='App__header'>
                <h1>
                  uncorked
                </h1>
              </header>
              <main className='App__main'>{this.renderRoutes()}</main>
            </>
          </ErrorBoundary>
        </div>
      </Context.Provider>
    );
  }
}

export default withRouter(App);
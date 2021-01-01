import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserHistory from './user-history';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <UserHistory />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

import 'react-app-polyfill/ie9'
// import "preact/debug"
import React from 'react';
import ReactDOM from 'react-dom';
import './lib/scss/import_bootstrap.scss'
import './styles/global.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//pages
import IndexPage from './pages/IndexPage'
import MessageBoard from './pages/MessageBoard'
import ForPrint from './pages/ForPrint'
//這三個圖片是給 readme.md 與 cakeresume 用的
import './images/preview_landing_page.jpg'
import './images/preview_message_board.png'
import './images/preview_this_personal_website.png'
import './images/favicon-32x32.png'

console.log("da20f74")

function App() {
  return <Router>
    <Switch>
      <Route path="/message_board" component={MessageBoard} />
      <Route path="/for_print" component={ForPrint} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router >
}
ReactDOM.render(
  <App />
  , document.getElementById('app'));
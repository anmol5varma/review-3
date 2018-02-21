import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initstore from '../../redux/stores';
import Header from '../Header';
import Footer from '../Footer';
import './render.css';
import Container from '../Container';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header value="Book list" />
        <Container />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Provider store={initstore()}><Main /></Provider>, document.getElementById('root'));

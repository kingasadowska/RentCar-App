import React from "react";
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EconomicsView from '../EconomicsView/EconomicsView';
import VanView from '../VanView/VanView';
import PremiumView from '../PremiumView/PremiumView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
  state = {
    items: {
      economic: [],
      van: [],
      premium: [],
    },
    isModalOpen: false,
  };

  addItem = e => {
    e.preventDefault();

    console.log('It works!!');

    // const newItem = {
    //   name: e.target[0].value,
    //   economicLink: e.target[1].value,
    //   image: e.target[2].value,
    //   description: e.target[3].value
    // };

    // this.setState(prevState => ({
    //   items: [...prevState.items, newItem]
    // }));

    // e.target.reset();
  };
  
  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }
  
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }
    
    return (
      <BrowserRouter>
         <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <h1>hello world</h1>
          <Switch>
            <Route exact path="/" component={EconomicsView} />
            <Route path="/van" component={VanView} />
            <Route path="/premium" component={PremiumView} />
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
          </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

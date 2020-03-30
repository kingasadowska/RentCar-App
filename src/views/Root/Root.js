import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EconomicsView from '../EconomicsView/EconomicsView';
import VanView from '../VanView/VanView';
import PremiumView from '../PremiumView/PremiumView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialStateItems = [
  {
    image: "https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp.jpg",
    name: "Dan Abramov",
    description: "React core member",
    economicLink: "https://economic.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: false,
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      economicLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
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
    
    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={EconomicsView} />
            <Route path="/van" component={VanView} />
            <Route path="/premium" component={PremiumView} />
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
        </>
      </BrowserRouter>
    );
  }
}

export default Root;

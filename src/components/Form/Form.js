import React from "react";
import AppContext from '../../context';
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";

const types = {
  economic: "economic",
  van: "van",
  premium: "premium",
};

const descriptions = {
  economic: "economic vehicle",
  van: "van vehicle",
  premium: "premium vehicle",
};

class Form extends React.Component {
  state = {
    type: types.economic,
    brand: "",
    link: "",
    image: "",
    description: "",
    cost: Number,
    transmission: "",
    passengers: Number,
    engine: Number,
    power: Number
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
      <div className={styles.wrapper}>
        <Title>Add {descriptions[type]}</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={(e) => context.addItem(e, this.state)}
        >
          <div className={styles.formOptions}>
            <Radio
              id={types.economic}
              checked={type === types.economic}
              changeFn={() => this.handleRadioButtonChange(types.economic)}
            >
              Economic
            </Radio>

            <Radio
              id={types.van}
              checked={type === types.van}
              changeFn={() => this.handleRadioButtonChange(types.van)}
            >
              Van
            </Radio>

            <Radio
              id={types.premium}
              checked={type === types.premium}
              changeFn={() => this.handleRadioButtonChange(types.premium)}
            >
              Premium
            </Radio>

          </div>

          <Input
            onChange={this.handleInputChange}
            value={this.state.brand}
            name="brand"
            label="Brand"/>

          {type === types.premium ? (
            <Input
              onChange={this.handleInputChange}
              value={this.state.power}
              type="number"
              name="power"
              label="Horse powers"
            />
          ) : null}

          {type === types.premium ? (
            <Input
              onChange={this.handleInputChange}
              value={this.state.engine}
              name="engine"
              label="Engine"
            />
          ) : null}

            <Input 
            onChange={this.handleInputChange}
            value={this.state.image}
            name="image" 
            label="Image" />

          <Input 
            onChange={this.handleInputChange}
            value={this.state.cost}
            type="number"
            name="cost" 
            label="Cost" />

          <Input 
            onChange={this.handleInputChange}
            value={this.state.transmission}
            name="transmission" 
            label="Transmission" />

          <Input 
            onChange={this.handleInputChange}
            value={this.state.passengers}
            type="number"
            name="passengers" 
            label="Number of passengers" />

          <Input 
            onChange={this.handleInputChange}
            value={this.state.description}
            tag="textarea" 
            name="description" 
            label="Description" />

          <Input 
            onChange={this.handleInputChange}
            value={this.state.link}
            name="link" 
            label="Link" />

          <Button>Add</Button>
        </form>
      </div>
     )}
    </AppContext.Consumer>
    );
  }
}

export default Form;

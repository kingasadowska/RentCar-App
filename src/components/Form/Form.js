import React from "react";
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
    activeOption: types.economic,
  };

  handleRadioButtonChange = type => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    const { activeOption } = this.state;

    return (
      <div className={styles.wrapper}>
        <Title>Add {descriptions[activeOption]}</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.formOptions}>
            <Radio
              id={types.economic}
              checked={activeOption === types.economic}
              changeFn={() => this.handleRadioButtonChange(types.economic)}
            >
              Economic
            </Radio>
            <Radio
              id={types.van}
              checked={activeOption === types.van}
              changeFn={() => this.handleRadioButtonChange(types.van)}
            >
              Van
            </Radio>
            <Radio
              id={types.premium}
              checked={activeOption === types.premium}
              changeFn={() => this.handleRadioButtonChange(types.premium)}
            >
              Premium
            </Radio>
          </div>
          <Input
            name="name"
            label={activeOption === types.economic ? "Economic Name" : "Name"}
            maxLength={30}
          />
          {activeOption !== types.premium ? (
            <Input
              name="link"
              label={activeOption === types.economic ? "Economic Link" : "Link"}
            />
          ) : null}

          {activeOption === types.economic ? (
            <Input name="image" label="Image" />
          ) : null}
          <Input tag="textarea" name="description" label="Description" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;

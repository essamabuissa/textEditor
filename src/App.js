import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false

  }
  setColor = color => this.setState({ color })

  setBold = () => {
    const newBold = !this.state.bold;
    this.setState({ bold: newBold })

  }
  setItalic = () => {
    const newItalic = !this.state.itlaic;
    this.setState({ italic: newItalic })

  }
  setUnderline = () => {
    const newUnderline = !this.state.underline;
    this.setState({ underline: newUnderline })




  }
  setStyle = style => {
    const newStyle = !this.state[style];
    this.setState({ [style]: newStyle })

  }
  render() {
    const stylingBoxes = stylings.map(style => (
      <button className={`btn mr-1 ${this.state[style] ? "btn-success" : "btn-outline-warning"}`} style={styles[style]} key={style}
        onClick={() => this.setStyle(style)}
      >
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => {
      const currentColor = color === this.state.color;
      const buttonSize = currentColor ? 40 : 30;

      return (
        <button
          style={{ backgroundColor: color, height: buttonSize, width: buttonSize }}
          key={color}
          onClick={() => this.setColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={{
          color: this.state.color,
          fontWeight: this.state.bold && "bold",
          fontStyle: this.state.italic && "italic",
          textDecorationLine: this.state.underline && "underline"

        }} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;

// Code DelayedButton Component Here
class DelayedButton extends React.Component {

  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    );
  }
}

export default DelayedButton;

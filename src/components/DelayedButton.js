// Code DelayedButton Component Here
class DelayedButton extends React.Component {

  handleClick = event => {
    handleClick = event => {
      event.persist();
      setTimeout(() => {
        this.props.onDelayedClick(event);
      }, this.props.delay);
    };

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    );
  }
}

export default DelayedButton;

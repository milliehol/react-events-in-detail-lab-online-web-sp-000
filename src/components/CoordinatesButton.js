// Code CoordinatesButton Component Here
class CoordinatesButton extends React.Component {

  tickle = () => {
    console.log('Tee hee!');
  }

  render() {
    return (
      <button onClick={this.tickle}>Tickle me!</button>
    );
  }
}

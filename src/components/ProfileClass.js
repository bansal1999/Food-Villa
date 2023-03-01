class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      count: 1,
      count2: 2,
    };
  }

  render() {
    //destuctured format (JAVASCRIPT THING)
    // const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name} </h2>
        <h3>XYZ: {this.props.xyz}</h3>
        <h2>Count: {this.state.count}</h2>
        {/* <h2>Count: {count}</h2> */}//destuctured format
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

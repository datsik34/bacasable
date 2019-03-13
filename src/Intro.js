import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5000 } }
});


class Intro extends Component {
  state = { visualStatus: 'hidden' };

  componentDidMount(){
    setTimeout(() => {
      this.setState({visualStatus: 'visible'})
    }, 500)
  }
  render() {
    return (
      <div style={styles.main}>
        <Box
          style={styles.box}
          pose={this.state.visualStatus}>
          hello
        </Box>
      </div>
    )
  }
}

const styles = {
  main: {
    backgroundSize: 'cover',
    backgroundColor:  '#222',
    height: '100vh',
    color: 'white',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  box: {
    width: '40px',
    height: '40px'
  }
}

export default Intro;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

// creating a animated div (Box) using react-pose
const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5000 } }
});


class Intro extends Component {
  // visualStatus state will be used for Box. Default status is hidden
  state = { visualStatus: 'hidden' };

  componentDidMount(){
    // after 5s, visualStatus state is changed to visible. Box then appears
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

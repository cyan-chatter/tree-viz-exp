import React from 'react'
import tree from './tree';
import rd3 from 'react-d3-library';

const RD3Component = rd3.Component;

class TreeComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {d3: ''}
  }

  componentDidMount() {
    const node = tree(this.props.height, this.props.width, this.props.margin, this.props.data)
    this.setState({d3: node});
  }
  
  render() {
    console.log(this.state.d3)
    if(this.state.d3 === '') return (<p>Loading Resources</p>)
    return (
      <div>
        <RD3Component data={this.state.d3} /> 
      </div>
    )
  }
};

export default TreeComponent
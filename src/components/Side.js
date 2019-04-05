import React from 'react'

class Side extends React.Component {
  render() {
    console.log('in side');
    return (
      <div>
        { this.props.sides.join(", ") }
      </div>
    )
  }
}

export default Side

import React from 'react'
import ReactDOM from 'react-dom'
import posed, { PoseGroup } from 'react-pose'
import './styles.css'

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
})

class Example extends React.Component {
  state = { isVisible: false }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }, 2000)
  }

  render() {
    const { isVisible } = this.state

    return (
      <PoseGroup>
        {isVisible && [
          // If animating more than one child, each needs a `key`
          <Shade key="shade" className="shade" />,
          <Modal key="modal" className="modal" />
        ]}
      </PoseGroup>
    )
  }
}

import * as React from 'react'

export interface HelloWorldProps {
  users: string[]
}

/**
 * React Search Element
 */
class HelloWorld extends React.Component {
  constructor(props: HelloWorldProps) {
    super(props)
  }
  // tslint:disable-next-line:completed-docs
  render() {
    return <div>Hello world</div>
  }
}

export default HelloWorld

import React from 'react'
import { Container } from 'semantic-ui-react'


export default class Layout extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Container>
                    {this.props.children}
                </Container>
            </React.Fragment>
        )
    }
}
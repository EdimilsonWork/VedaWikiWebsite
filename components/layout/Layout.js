import React from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './Footer'


export default class Layout extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Navbar/>
                <Container>
                    {this.props.children}
                </Container>
                <Footer/>
            </React.Fragment>
        )
    }
}
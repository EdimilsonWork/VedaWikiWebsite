import React from 'react'


export default class Title extends React.PureComponent {
    render () {
        return (
            <h1 style={{fontFamily: 'Permanent Marker'}}>
                {this.props.children}
            </h1>
        )
    }
}
import React from 'react'


export default class Layout extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
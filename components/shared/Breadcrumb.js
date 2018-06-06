import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'


export default class BreadcrumbHeader extends React.PureComponent {
    render () {
        return (
            <Breadcrumb icon='right angle' sections={this.props.sections} />
        )
    }
}
import React from 'react'
import { Card } from 'semantic-ui-react'
import ThemeListItem from './ThemeListItem'


export default class ThemeList extends React.Component {
    render () {
        return (
            <Card.Group itemsPerRow={4} doubling stackable>
                <ThemeListItem key="1"/>
                <ThemeListItem key="2"/>
                <ThemeListItem key="3"/>
                <ThemeListItem key="4"/>
                <ThemeListItem key="5"/>
                <ThemeListItem key="6"/>
                <ThemeListItem key="7"/>
                <ThemeListItem key="8"/>
                <ThemeListItem key="9"/>
            </Card.Group>
        )
    }
}
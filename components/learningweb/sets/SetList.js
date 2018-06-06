import React from 'react'
import { Card } from 'semantic-ui-react'
import SetListItem from './SetListItem'


export default class SetList extends React.Component {
    render () {
        return (
            <Card.Group itemsPerRow={4} doubling stackable>
                <SetListItem key="1"/>
                <SetListItem key="2"/>
                <SetListItem key="3"/>
                <SetListItem key="4"/>
                <SetListItem key="5"/>
                <SetListItem key="6"/>
                <SetListItem key="7"/>
                <SetListItem key="8"/>
                <SetListItem key="9"/>
            </Card.Group>
        )
    }
}
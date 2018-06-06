import React from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import ModelSetImage from './images/Model_266x164.png'


export default class SetListItem extends React.PureComponent {
    render () {
        return (
            <Card>
                <a href=""><Image src={ModelSetImage} /></a>
                <Card.Content>
                    <Card.Header><a href="">Education</a></Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <a href="">
                        <Icon name='cubes' />
                        22 Themes
                    </a>
                </Card.Content>
            </Card>
        )
    }
}
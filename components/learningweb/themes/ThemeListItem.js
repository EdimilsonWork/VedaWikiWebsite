import React from 'react'
import Link from 'next/link'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import ModelSetImage from './images/Model_266x164.png'


export default class ThemeListItem extends React.PureComponent {
    render () {
        return (
            <Card>
                <Link href=""><a><Image src={ModelSetImage} /></a></Link>
                <Card.Content>
                    <Card.Header><Link href=""><a>Educational Carrer</a></Link></Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Link href="">
                        <a>
                            <Icon name='cube' />
                            34 Materials
                        </a>
                    </Link>
                </Card.Content>
            </Card>
        )
    }
}
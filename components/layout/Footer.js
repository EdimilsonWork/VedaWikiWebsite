import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'


export default class Footer extends React.PureComponent {
    render () {
        return (
            <footer id='footer' style={{marginTop:'40px'}}>
                <Grid columns='equal' divided inverted padded>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Segment color='black' inverted >Concepts</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment color='black' inverted>Social media</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment color='black' inverted>Tecnology</Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color='black' textAlign='center' style={{padding:'0px'}}>
                        <Grid.Column>
                            <Segment color='black' inverted style={{padding:'0px',fontSize:'11px',color:'#a9a9a9 !important'}}>Copyright © 2018 Veda Wiki. All rights reserved.</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </footer>
        )
    }
}
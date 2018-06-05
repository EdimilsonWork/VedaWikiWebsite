import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'


export default class Footer extends React.PureComponent {
    render () {
        return (
            <footer id='footer' style={{marginTop:'40px'}}>
                <Grid columns='equal' divided inverted padded stackable>
                    <Grid.Row color='black' textAlign='center'>
                        <Grid.Column>
                            <Segment color='black' inverted >
                                <h5>Concepts</h5>
                                <p><strong>Material</strong>: Etiam vulputate sem id nisi euismod, nec maximus ante vestibulum.</p>
                                <p><strong>Theme</strong>: Nam nisl leo, porta vitae est sed, bibendum tincidunt tortor.</p>
                                <p><strong>Set</strong>: Quisque elementum diam efficitur eros imperdiet tincidunt quis porta nulla. Curabitur blandit dolor aliquet.</p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment color='black' inverted>
                                <h5>Social media</h5>
                                <p>F T G E</p>
                                <h5>Developed by</h5>
                                <strong style={{fontFamily: 'Encode Sans',color: '#FF9800'}}>
                                    Stars<br/>Aligned
                                </strong>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment color='black' inverted>
                                <h5>Open Source Technologies</h5>
                                <p>
                                    <a href=''>React JS</a><br/>
                                    <a href=''>Django</a><br/>
                                    <a href=''>Python</a><br/>
                                    <a href=''>Graphene</a><br/>
                                    <a href=''>Apollo</a><br/>
                                    <a href=''>PostgreSQL</a><br/>
                                    <a href=''>Debian Linux</a><br/>
                                    <a href=''>Docker</a><br/>
                                </p>
                            </Segment>
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
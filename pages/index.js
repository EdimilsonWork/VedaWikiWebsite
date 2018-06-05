import React from 'react'
import { Grid } from 'semantic-ui-react'
import Layout from '../components/layout/Layout'
import IndexPresentation from '../components/index/IndexPresentation'


export default class Index extends React.Component {
    render () {
        return (
            <Layout>
                <Grid reversed='mobile' stackable  columns={2}>
                    <Grid.Column>
                        <IndexPresentation/>
                    </Grid.Column>
                    <Grid.Column>
                        login
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
import React from 'react'
import { Grid } from 'semantic-ui-react'
import Layout from '../components/layout/Layout'
import IndexPresentation from '../components/index/IndexPresentation'
import LoginForm from '../components/authentication/LoginForm'


export default class Index extends React.Component {
    render () {
        return (
            <Layout>
                <Grid reversed='mobile' stackable columns={2}>
                    <Grid.Column width={11}>
                        <IndexPresentation/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <LoginForm/>
                    </Grid.Column>
                </Grid>
            </Layout>
        )
    }
}
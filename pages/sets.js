import React from 'react'
import Layout from '../components/layout/Layout'
import Title from '../components/shared/Title'
import SetList from '../components/learningweb/sets/SetList'


export default class Sets extends React.Component {
    render () {
        return (
            <Layout>
                <Title>Sets</Title>
                <SetList/>
            </Layout>
        )
    }
}
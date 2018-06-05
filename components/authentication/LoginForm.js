import React from 'react'
import { Segment, Button, Checkbox, Form } from 'semantic-ui-react'
import { Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import cookie from 'cookie'
import redirect from '../../lib/redirect'


const LoginQuery = gql`
    mutation Login($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
        }
    }
`

class LoginForm extends React.Component {

    render () {
        let username, password

        return (
            <Segment secondary>
                <h2>Log In</h2>
                <Mutation
                    mutation={LoginQuery}
                    onCompleted={(data) => {
                        // Store the token in cookie
                        document.cookie = cookie.serialize('token', data.tokenAuth.token, {
                            maxAge: 30 * 24 * 60 * 60 // 30 days
                        })
                        // Force a reload of all the current queries now that the user is
                        // logged in
                        this.props.client.cache.reset().then(() => {
                            redirect({}, '/')
                        })
                    }}
                    onError={(error) => {
                        console.log(error)
                    }}
                >
                    {(tokenAuth, { data, error }) => (
                        <Form
                            onSubmit={e => {
                                e.preventDefault()
                                e.stopPropagation()

                                tokenAuth({
                                    variables: {
                                        username: username.value,
                                        password: password.value
                                    }
                                })

                                username.value = password.value = ''
                            }}
                        >
                            {error && <p>No user found with that information.</p>}
                            <Form.Field>
                                <label>Username</label>
                                <input name='username' ref={node => { username = node }} />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name='password' ref={node => { password = node }} type='password' />
                            </Form.Field>
                            <Button type='submit'>Log In</Button>
                        </Form>
                    )}
                </Mutation>
            </Segment>
        )
    }
}

export default withApollo(LoginForm)
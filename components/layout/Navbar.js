import React from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'next/router'


class Navbar extends React.Component {
    render () {
        return (
            <Menu stackable id='navbar' style={{borderRadius: 0}}>
                <Menu.Item header style={{fontFamily: 'Encode Sans', paddingTop: '11px', paddingBottom: '11px', fontSize: '18px'}}>
                    <span style={{color: '#FF9800'}}>VEDA</span>
                </Menu.Item>

                <Link href='/'>
                    <Menu.Item as="a" href='/' active={this.props.router.pathname === '/'}>News</Menu.Item>
                </Link>

                <Link href='/sets'>
                    <Menu.Item as="a" href='/sets' active={this.props.router.pathname.includes('/sets')}>Sets</Menu.Item>
                </Link>

                <Menu.Menu position='right'>
                    <Menu.Item>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(Navbar)
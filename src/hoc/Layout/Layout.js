import React  from 'react';
import './Layout.css';
import Menu from '../../components/Navigation/Menu/Menu';

const Layout = (props) => {
    return (
        <div className={"Layout"}>
            <Menu/>
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default Layout

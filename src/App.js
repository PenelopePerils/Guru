import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { SearchBar } from './components/searchbar';
// eslint-disable-next-line
class App extends Component {
  render() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="New Title" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/directory">Directory</Link>
            </Navigation>
        </Header>
        <Drawer title="New Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                {/* <Link to="/blog">Blog</Link> */}
                <Link to="/directory">Directory</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}
export default App;

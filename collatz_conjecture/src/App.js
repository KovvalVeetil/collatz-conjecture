import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Welcome from './components/Welcome';
import Registration from './components/Registration';
import Collatz from './components/Collatz';

const TopBar = styled.div`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PageContent = styled.div`
  margin-top: 70px;
  padding: 20px;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto;
  grid-gap: 10px;
  background-color: #eee;
  color: black;
  margin: 20px;
`;

const LeftColumn = styled.div`
  grid-column: 1;
  margin: 0.8em;
`;

const RightColumn = styled.div`
  grid-column: 2;
  margin: 0.8em;
`;

const VeryEmphaticPar = styled.p`
  font-size: 150%;
  font-style: oblique;
`;

class App extends Component {
  render() {
    const number = 17;
    const wikilink = 'https://en.wikipedia.org/wiki/Collatz_conjecture';
    return (
      <Router>
        <>
          <TopBar>
            <Header>
              <div>Collatz Conjecture</div>
            </Header>
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/collatz">Collatz</NavLink>
              <NavLink to="/register">Register</NavLink>
            </Nav>
          </TopBar>
          <PageContent>
            <Routes>
              <Route path="/" element={<Registration />} />  {/* Default to registration */}
              <Route path="/about" element={
                <div>
                  <h1>About</h1>
                  <p>Learn more about the Collatz Conjecture and its implications.</p>
                </div>
              } />
              <Route path="/contact" element={
                <div>
                  <h1>Contact Us</h1>
                  <p>Get in touch with us for any questions or feedback.</p>
                </div>
              } />
              <Route path="/collatz" element={
                <GridDiv>
                  <LeftColumn>
                    <p>
                      The <a href={wikilink}>Collatz Conjecture</a> states that for any positive integer, <i>x</i>, repeatedly applying <i>3x + 1</i> if odd and <i>x/2</i> if even will eventually lead to 1.
                    </p>
                    <VeryEmphaticPar>No one knows if this is true.</VeryEmphaticPar>
                  </LeftColumn>
                  <RightColumn>
                    <Collatz number={number} />
                  </RightColumn>
                </GridDiv>
              } />
              <Route path="/register" element={<Registration />} />
              <Route path="*" element={<Registration />} />  {/* Redirect any unknown route to registration */}
            </Routes>
          </PageContent>
        </>
      </Router>
    );
  }
}

export default App;

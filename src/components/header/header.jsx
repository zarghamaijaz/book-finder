
import './header.style.css'
import Search from './search/search'
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react'


function Header({setQuery,setPageNumber,query}){
    const [ openMenu,setOpenMenu ] = useState(false);
    return(
        <div className="main-header">
            <Container>
                <Row>
                    <Col xl={8} sm={6} xs={6}>
                        <div>
                            <h3 className="m-0">Book library</h3>
                        </div>
                    </Col>
                    <Col xl={4} sm={6} xs={6}>
                        <Search query={query} setQuery={setQuery} setPageNumber={setPageNumber}/>
                    </Col>
                    <nav className={`navigation ${openMenu ? 'navigation-open' : ''}`}>
                        <div className="navigation-close-btn pointer" onClick={()=>setOpenMenu(false)}>
                            close
                        </div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>More options</p>
                    </nav>
                    <nav className="navigation-open-btn pointer" onClick={()=>setOpenMenu(true)}>
                        Menu
                    </nav>
                </Row>
            </Container>
        </div>
    )
}
export default Header;
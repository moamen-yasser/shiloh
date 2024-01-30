import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { Link ,NavLink} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
return (
    <footer >
        <Container>
            <Row className="align-items-center">
                <Col md="4" sm="12">
                    <HashLink to="#bannar">
                    <img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" />
                    </HashLink>
                </Col>

                <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                        <HashLink className='llink' to="/#latest">Latest Builds</HashLink>
                        <HashLink className='llink' to="/#process">Process</HashLink>
                        <HashLink className='llink' to="/#service">Services</HashLink>
                        <HashLink className='llink' to="/#contact">Contact Us</HashLink>
                        <NavLink className='llink' to="/Projects">Projects</NavLink>
                    </div>
                </Col>

                <Col md="4" sm="12" className='iconsdiv'>
                    <div>
                        <Link to="/" target='_blank'><FacebookIcon/></Link>
                        <Link to="/" target='_blank'><InstagramIcon /></Link>
                        <Link to="/" target='_blank'><LinkedInIcon /></Link>
                    </div>
                </Col>
            </Row>
                <div className="copyright wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <p>© 2024 Moamen Yasser</p>
                    <p>Email: mwmnyasr00@gmail.com</p>
                </div>
        </Container>
    </footer>
)
}

export default Footer

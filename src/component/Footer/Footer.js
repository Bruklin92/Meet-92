import Container from 'react-bootstrap/esm/Container';
import './Footer.css'

function Footer() {
    return (
        <div>
            <section className='footer'>
                <Container>
                    <div className='footer-sec'>
                        <div className='footer-sec-1'>
                            <h1>Shaping the Tech of the Future</h1>
                        </div>
                        <div>
                            <ul>
                                <li className='footer-li'>Services</li>
                                <li>Solution</li>
                                <li>Development</li>
                                <li>Clouds</li>
                                <li>VR / AR</li>
                                <li>Security</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li className='footer-li'>Company</li>
                                <li>About</li>
                                <li>Partnership</li>
                                <li>Features</li>
                                <li>Testimonials</li>
                                <li>Media Center</li>
                                <li>Career</li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li className='footer-li'>Company</li>
                                <li>Our Clients</li>
                                <li>Contact</li>
                                <li>Help Center</li>
                                <li>News</li>
                                <li>Insights</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'white',
                        margin: '100px 0 0  0  auto'
                    }} />
                    <div className='bottum-footer'>
                        <div className='btm-sec1'>
                            <h2>Powered by SocioLib.</h2>
                        </div>

                        <div className='btm-sec2'>
                            <a href=''>Privacy Policy</a>
                        </div>

                        <div className='btm-sec3'>
                            <a href=''>Our Terms</a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Footer;
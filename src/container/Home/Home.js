import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';

import './Home.css'

function Home({ target = 135, target1 = 52, target2 = 75, target3 = 250, duration = 2000, duration1 = 2000 }) {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);


    useEffect(() => {
        const intervalTime = duration / target;
        if (target <= 0) return;
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= target) {
                    clearInterval(interval);
                    return target;
                }
                return prevCount + 1;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [target, duration]);

    useEffect(() => {
        const intervalTime = duration / target1;

        if (target1 <= 0) return;

        const interval = setInterval(() => {
            setCount1(prevCount => {
                if (prevCount >= target1) {
                    clearInterval(interval);
                    return target1;
                }
                return prevCount + 1;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [target1, duration]);

    useEffect(() => {
        const intervalTime = duration / target2;

        if (target2 <= 0) return;

        const interval = setInterval(() => {
            setCount2(prevCount => {
                if (prevCount >= target2) {
                    clearInterval(interval);
                    return target2;
                }
                return prevCount + 1;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [target2, duration]);

    useEffect(() => {
        const intervalTime = duration1 / target3;

        if (target3 <= 0) return;

        const interval = setInterval(() => {
            setCount3(prevCount => {
                if (prevCount >= target3) {
                    clearInterval(interval);
                    return target3;
                }
                return prevCount + 1;
            });
        }, intervalTime);

        return () => clearInterval(interval);
    }, [target3, duration1]);


    return (
        <div className="fade-slide-in">

            <section className="hero">
                <div className="hero">
                    <div className="overlay"></div>
                    <Container>
                        <div className="content">
                            <div>
                                <h1 className="h_hadding fade-slide-in">Driving the Next Generation of Tech</h1>
                            </div>
                            <div className="hero_detail fade-slide-in">
                                <div>
                                    <Button className="h_button">Get Started</Button>
                                </div>
                                <div className="hero_had">
                                    <h2>Get New Experience With KriraAi.</h2>
                                    <h3>Let's Start</h3>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="Digital">
                <Container>
                    <div className="sec_1">
                        <div className="revolution">
                            <h1 className="main-hadding">Powering the Digital Revolution</h1>
                            <div className="videostatus">
                                <div className="videoImg">
                                    <img src="img/rev1.webp" alt='video' />
                                </div>
                                <div className="p_tags">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <Button variant="success" className="sec1_btn">Learn More</Button>
                                </div>
                            </div>
                        </div>
                        <div className="ai_img">
                            <img src="img/r2.webp" alt="img" />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="Technology">
                <Container>
                    <div className="part-1-tec">
                        <div>
                            <h1 className="main-hadding ">Setting the Pace in Technology</h1>
                        </div>
                        <div>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                            </p>
                        </div>
                    </div>
                    <div className="part-2-tec">
                        <div className="sec-imges">
                            <div style={{ width: '30%' }} className="cardData">
                                <img variant="top" src="img/m1.webp" alt="Sec-2-img" />
                                <Card.Body>
                                    <h2 className="hadding">Machine Learning</h2>
                                    <p className="subhad">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis.
                                    </p>
                                </Card.Body>
                            </div>

                            <div style={{ width: '30%' }} className="cardData">
                                <img variant="top" src="img/d1.webp" alt="Sec-2-img/2" />
                                <Card.Body>
                                    <h2 className="hadding">Data Analytics</h2>
                                    <p className="subhad">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis.
                                    </p>
                                </Card.Body>
                            </div>

                            <div style={{ width: '30%' }} className="cardData">
                                <img variant="top" src="img/s2.webp" alt="Sec-2-img/3" />
                                <Card.Body>
                                    <h2 className="hadding">Artificial Intelligence</h2>
                                    <p className="subhad">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis.
                                    </p>
                                </Card.Body>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="backgrund_set">
                <div className="background">
                    <div className="overlay"></div>
                    <Container>
                        <div className="content">
                            <div className="m_hadding">
                                <h1>Where Technology Connects Us All</h1>
                            </div>
                            <Button className="m_button">Contect US</Button>
                        </div>
                    </Container>
                </div>
            </section>  

            <section className="work">
                <Container>
                    <div className="work-sec1">
                        <h3>Our Works</h3>
                        <h1>Your Station for Tech Innovation</h1>
                    </div>
                    <div className="work-sec2">
                        <div>
                            <h1>{count}+</h1>
                            <h2>Projects</h2>
                        </div>

                        <div>
                            <h1>{count1}</h1>
                            <h2>Experts</h2>
                        </div>

                        <div>
                            <h1>{count2}K+</h1>
                            <h2>Bytes</h2>
                        </div>

                        <div>
                            <h1>{count3}</h1>
                            <h2>Countries</h2>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="horizone">
                <Container>
                    <div>
                        <div className="horizon-sec1">
                            <div>
                                <h1>Unlocking the Horizon of Technology</h1>
                            </div>
                            <div>
                                <img src="img/h1.webp" />
                            </div>
                        </div>

                        <div className="horizon-sec2">
                            <div className="horizon-desc">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className="horizon-img">
                                <img src="img/h2.webp" />
                            </div>
                            <div className="horizon-slide">

                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="universe-set">
                <div className="universe">
                    <div className="overlay"></div>
                    <Container>
                        <div className="content">
                            <div className="u_hadding">
                                <h2>Join Now</h2>
                                <h1>Exploring the Infinite Universe of Tech</h1>
                            </div>
                            <Button className="u_button" variant="outline-light">Get
                                started
                            </Button>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
};


export default Home;
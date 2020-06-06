import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './signIn.scss'
import LoginForm from '../../components/LoginForm';

const SignIn = ({setRefreshCheckLogin}) => {
    return(
        <>
            <Container fluid>
                <Row className="h-100">
                    <LeftContent />
                    <RightContent
                        setRefreshCheckLogin={setRefreshCheckLogin}
                    />
                </Row>
            </Container>
        </>
    )
}

const LeftContent = () => {
    return(
        <Col xs={6} className="contentLeft h-100">
        </Col>
    )
}

const RightContent = ({setRefreshCheckLogin}) => {
    return(
        <Col xs={6} className="contentRight">
            <div className='Clase'>
                <LoginForm
                    setRefreshCheckLogin={setRefreshCheckLogin}
                />
            </div>
        </Col>
    )
}

export default SignIn
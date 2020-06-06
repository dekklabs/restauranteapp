import React, {useState} from 'react'
import { Form, Button, Spinner } from "react-bootstrap";
import "./login.scss";

/* Api */
import { loginApi, setTokenApi } from "../../api/auth";

const LoginForm = ({setRefreshCheckLogin}) => {

    const [formData, setFormData] = useState(initialFormValue)
    const [loading, setLoading] = useState(false)

    const handleOnSubmit = e => {
        e.preventDefault()

        setLoading(true)

        loginApi(formData).then(res => {
            setTokenApi(res.token)
            setLoading(false)
            setRefreshCheckLogin(true)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleOnChange = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return(
        <div className='login'>
            <h2>Ingresa y administra</h2>
            <Form onSubmit={handleOnSubmit} onChange={handleOnChange}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        name="username"
                        placeholder="username"
                        defaultValue={formData.username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="pass"
                        placeholder="pass"
                        defaultValue={formData.pass}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">{ !loading ? "Iniciar Sección" : <Spinner animation="border"/> }</Button>
            </Form>
        </div>
    )
}

const initialFormValue = () => {
    return {
        username: "",
        pass: ""
    }
}

export default LoginForm
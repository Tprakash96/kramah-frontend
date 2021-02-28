import  React, { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from '../../redux/actions/user';
import { TextField } from '../../components/forms/text-field';
import { Button } from '../../components/forms/button';
import "./css/login.css";

export const Login  = (props) => {
    const { history } = props;
    const [formValues,setFormValues] = useState({});
    const dispatch = useDispatch();

    const onSuccess = () => history.replace('/home');

    const handleSubmit = () => {
        const {email, password} = formValues;
        dispatch(login({email,password},onSuccess));
    }

    return(
        <div className="main-container">
            <ToastContainer autoClose={10000} />
            <div className="page-title">Login</div><br />
            <div className="card-container">
                <TextField 
                    label="Email"
                    value={formValues.email||''} 
                    placeholder="Enter Email"
                    onChange={(event)=>setFormValues({...formValues,email:event.target.value})}
                 />
                    
                <TextField 
                    label="Password"
                    type="password" 
                    placeholder="Enter password"
                    value={formValues.password||''}
                    onChange={(event)=>setFormValues({...formValues,password:event.target.value})}
                />
                 <div className="new-account-link" onClick={()=>history.replace('/signup')}>Create an new account</div>
                <Button onClick={handleSubmit} />
            </div>
        </div>
    );
}
import  React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { TextField } from '../../components/forms/text-field';
import { Button } from '../../components/forms/button';
import "./css/login.css";
import { signup } from '../../redux/actions/user';
import { validate } from '../../utils/validator';


export const Signup  = (props) => {
    const { history } = props;
    const dispatch = useDispatch();
    const [formValues,setFormValues] = useState({});
    const [errors,setErrors] = useState([]);

    const resetFormValues = () => {
        toast.success("Signup completed");
        history.replace('/login');
    }

    const handleSubmit = () => {
        const {userName, email, password,confirmPassword, phoneNumber} = formValues;
        if(password === confirmPassword){
            const {isValid,errMsg} = validate([
                {name:'userName', value:userName||'', type:'required'},
                {name:'email', value:email||'', type:'email'},
                {name:'password', value:password||'', type:'password'},
                {name:'phoneNumber', value:phoneNumber||'', type:'phone'}
            ]);
            if(isValid){
                setErrors({})
                const {userName,password,email,phoneNumber,address} = formValues;
                dispatch(signup({userName,password,email,phoneNumber,address},resetFormValues));
            } 
            else setErrors(errMsg);
        }
        else{
            toast.error("Can't submit form:Password Mismatch")
        }
    }

    return(
        <div className="main-container">
            <ToastContainer autoClose={10000} />
            <div className="page-title">Signup</div><br />
            <div className="card-container">
                <TextField 
                    label="User Name"
                    value={formValues.userName||''} 
                    placeholder="Enter Username" 
                    isError={errors.userName}
                    onChange={(event)=>setFormValues({...formValues,userName:event.target.value})}
                 />
                    
                <TextField 
                    label="Password"
                    type="password" 
                    placeholder="Enter password"
                    value={formValues.password||''}
                    isError={errors.password}
                    onChange={(event)=>setFormValues({...formValues,password:event.target.value})}
                />
                <TextField 
                    label="Confirm Password"
                    type="password" 
                    placeholder="Enter password"
                    value={formValues.confirmPassword||''}
                    isError={errors.password}
                    onChange={(event)=>setFormValues({...formValues,confirmPassword:event.target.value})}
                />
                <TextField 
                    label="email"
                    type="email" 
                    placeholder="Enter email"
                    value={formValues.email||''}
                    isError={errors.email}
                    onChange={(event)=>setFormValues({...formValues,email:event.target.value})} 
                />
                <TextField 
                    label="phone number"
                    type="number" 
                    placeholder="Enter phone number"
                    value={formValues.phoneNumber||''}
                    isError={errors.phoneNumber}
                    onChange={(event)=>setFormValues({...formValues,phoneNumber:event.target.value})} />
                <TextField 
                    label="address"
                    type="text" 
                    value={formValues.address||''}
                    onChange={(event)=>setFormValues({...formValues,address:event.target.value})} />
                <Button onClick={handleSubmit} />
            </div>
        </div>
    );
}
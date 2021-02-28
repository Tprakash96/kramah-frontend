import {isEmail,isMobilePhone} from 'validator';

export const validate = (fields) => {
    let errMsg = {};
    fields.forEach(({name,value,type}) => {
        if(type === 'email') {
            if(!isEmail(value)) errMsg = {...errMsg,[name]:'email is not valid'};
        };
        if(type === 'password') {
            if(!(value.length >=4 && value.length <=16)) 
                errMsg = {...errMsg,[name]:'password should be 4 to 16 characters'};
        }
        if(type === 'phone') {
            if(!isMobilePhone(value)) errMsg = {...errMsg,[name]:'phone is not valid'};
        };
        if(type === 'required') {
            if(!value) errMsg = {...errMsg,[name]:'value should be unique'};
        };
    });
    return {isValid:!Object.keys(errMsg).length,errMsg}
}
import * as yup from 'yup';

const validationSchema =  yup.object({
    name : yup.string().min(2).max(25).required('plaese enter your name.'),
    email : yup.string().email().required('please enter your email.'),
    phone : yup.number().min(10).max(10).required('please enter your number.'),
    password: yup.string().min(6).max(15).required('please enter your password.'),
    confirm_password : yup.string().required().oneOf([yup.ref('password',null)], 'password must be match'),
    date: yup.string().date().required('please enter your date.'),
    message : yup.string().max(150),
});

export default validationSchema;
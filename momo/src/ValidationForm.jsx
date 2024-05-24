import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './Valid.css'

function ValidationForm() {

    const initialvalue = {
                 username:'',
                 email:'',
                 password:'',
                 confirmpassword:''

    };
     
    const valid = Yup.object({
        username:Yup.string()
              .min(5,'Username must be atleast 5 characters')
              .max(15,'Username must be  15 characters or less')
              .required('Required'),

              email:Yup.string()
              .email('invalid email format')
              .required('Required'),

              password:Yup.string()
              .min(8,'Password must be atleast 8 characters')
              .max(15,'Password must be  15 characters or less')
              .required('Required'),

              confirmpassword:Yup.string()
              .oneOf([Yup.ref('password'),null],'password must match')
              .required('Required'),
    })

const submit = (values)=>{
       console.log(values)
}


  return (
    <>
       <h1>Signup Form</h1>
       <Formik initialValues={initialvalue} validationSchema={valid} onSubmit={submit}>
          <Form>
            <div>
                <label htmlFor='username'>UserName</label>
                <Field type="text" id="username" name="username" placeholder="enter your name"/>
                <ErrorMessage name='username' component="div" className='error'/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <Field type="email" id="email" name="email" placeholder="enter your email"/>
                <ErrorMessage name='email'/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <Field type="password" id="password" name="password" placeholder="enter your password"/>
                <ErrorMessage name='password' component="div" className='error'/>
            </div>
            <div>
                <label htmlFor='confirmpassword'>confirmpassword</label>
                <Field type="password" id="confirmpassword" name="confirmpassword" placeholder="enter your confirmpassword"/>
                <ErrorMessage name='confirmpassword'/>
            </div>
            <button type='submit'>submit</button>
          </Form>
       </Formik>
    </>
  )
}

export default ValidationForm
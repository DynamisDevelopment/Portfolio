import React from 'react'
import './Contact.sass'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import axios from 'axios'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'


const Contact = () => {
    // * Set copyright date dynamically
    const getYear = (): number => new Date().getFullYear()

    return (
        <div className='contact' id="Contact">
            <SectionTitle title={"Contact"} subtitle={'Got something interesting?'} subSubtitle={'Email: devlead@dynamisdevelopment.com'} />
            <FormikForm />
            <div className="social">
                <a href="https://www.linkedin.com/in/joshua-hall-51b182185/" className="circle" target="_blanck"><img src="../assets/icons/linkedin-logo.svg" alt="Linkedin Logo" /></a>
                <a href="https://www.upwork.com/o/profiles/users/_~013e4465c7ba054054/" className="circle" target="_blanck"><img src="../assets/icons/upwork-logo.svg" alt="Upwork Logo" /></a>
                <a href="https://codepen.io/dynamisdevelopment" className="circle" target="_blanck"><img src="../assets/icons/codepen-logo.svg" alt="Codepen Logo" /></a>
                <a href="https://github.com/DynamisDevelopment" className="circle" target="_blanck"><img src="../assets/icons/github-logo.svg" alt="Github Logo" /></a>
            </div>
            <div className="copyright">Made by yours truly © {getYear()}</div>
        </div>
    )
}


const ContactForm = ({ errors, touched }) => {
    return (
        <div>
            <Form className='contact-form'>
                <Field type="text" name="name" placeholder="Name" required />
                {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                <Field type="email" name="email" placeholder="Email" required />
                {touched.name && errors.email && <p className='error'>{errors.email}</p>}
                <Field component='textarea' name="message" id="message" placeholder="Message" />
                {touched.message && errors.message && <p className='error'>{errors.message}</p>}
                <button type="submit" className='btn'>Submit</button>
            </Form>
        </div>
    )
}

// * HOC for form validation 
//@ts-ignore
const FormikForm = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('A name is required'),
        email: Yup.string().email('Please use a valid email').required('An email is required'),
        message: Yup.string().min(25, 'Message must be more than 25 characters long, be descriptive :)').required('A message is required')
    }),
    handleSubmit(values, { resetForm }) {
        axios({
            method: 'POST',
            url: '/.netlify/functions/server',
            data: {
                name: values.name,
                email: values.email,
                message: values.message,
            }
        })
            .then(res => resetForm())
            .catch(e => console.log('Error: ', e))
    }
    // @ts-ignore
})(ContactForm)


export default Contact
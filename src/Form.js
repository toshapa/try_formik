// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const ExForm = () => {

    const validateName = (values) => {
        let errors = '';
        if (!values) {
            errors = 'Required';
        } else if (values.length < 2) {
            errors = 'Must be longer than 2 characters'
        } else if(values.length > 20) {
            errors = 'Nice try, nobody has a first name that long'
        }
        return errors;
    }
    

    const validateEmail = (values) => {
        let errors = ''

        if (!values) {
            errors = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
            errors = 'Invalid email address';
          }

        return errors;
    }

    const validateAmount = (values) => {
        let errors = ''

        if (!values) {
            errors = 'Required'
        } else if (values < 5) {
            errors = 'At least from 5'
        }
        return errors;
    }

    const validateCurrency = (values) => {
        let errors = '';
    
        if (!values) {
            errors = 'Choose a currency, please'
        }
        return errors
    }

    const validateMessage = (values) => {
        let errors = '';

        if (values.length < 10) {
            errors = 'Minimum 10 symbol'
        }

        return errors
    } 

    const validateTerms = (values) => {
        let errors = ''
            if (!values) {
                errors = 'There is no way without it'
            }
        return errors
    }

    return (
        
        <Formik 
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                message: '',
                terms: false
            }}
        >   
            <Form className='form'>
                <h2>Send a donation</h2>
                <label htmlFor="name">Your`s name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                    validate = {validateName}
                />
                <ErrorMessage name='name' component='div' className='error'/>
                <label htmlFor="email">Your`s Email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    validate = {validateEmail}

                />
                <ErrorMessage name='email' component='div' className='error'/>
                <label htmlFor="amount">Amount of money</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                    validate = {validateAmount}
                />
                <ErrorMessage name='amount' component='div' className='error'/>
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'
                    validate = {validateCurrency}
                    >
                        <option value="">Select currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage name='currency' component='div' className='error'/>
                <label htmlFor="text">Your`s message</label>
                <Field 
                    id="message"
                    name="message"
                    as='textarea'
                    validate = {validateMessage}
                />
                <ErrorMessage name='message' component='div' className='error'/>
                <label className="checkbox">
                    <Field 
                        name="terms" 
                        type="checkbox"
                        validate = {validateTerms}/>
                    Do you agree to the privacy policy?
                </label>
                <ErrorMessage name='terms' component='div' className='error'/>
                <button type="submit">SEND</button>
            </Form>
        </Formik>          
    )
}
export default ExForm;
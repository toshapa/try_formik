import { useFormik } from 'formik';


const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required to fill out'
    } else if (values.name.length < 2) {
        errors.name = 'At least two characters are required'
    }

    if (!values.email) {
        errors.email = 'Required to fill out'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Incorrect email"
    }

    if (values.amount < 5) {
        errors.amount = 'At least from 5'
    }

    if (!values.currency) {
        errors.currency = 'Choose a currency, please'
    }

    if (values.message.length < 10 ) {
        errors.message = 'Minimum 10 symbol'
    }

    if (!values.terms) {
        errors.terms = 'There is no way without it'
    }

    
    return errors;
} 

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            message: '',
            terms: false
        },
        validate, 
        onSubmint : values => 
            console.log(JSON.stringify(values, null))
        
    })

    return (

        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Send a donation</h2>
            <label htmlFor="name">Your`s name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <p className = 'error'>{formik.errors.name}</p> : null}
            <label htmlFor="email">Your`s Email</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <p className = 'error'>{formik.errors.email}</p> : null}
            <label htmlFor="amount">Amount of money</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <p className = 'error'>{formik.errors.amount}</p> : null}
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="">Select currency</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <p className='error'>{formik.errors.currency}</p> : null }
            <label htmlFor="text">Your`s message</label>
            <textarea 
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.message && formik.touched.message ? <p className='error'>{formik.errors.message}</p> : null }
            <label className="checkbox">
                <input 
                    name="terms" 
                    type="checkbox"
                    value={formik.values.terms}
                    onChange={formik.handleChange} className = 'error'
                    onBlur={formik.handleBlur}/>
                Do you agree to the privacy policy?
            </label>
            {formik.errors.terms && formik.touched.terms ? <p className='error'>There is no way without it</p> : null }
            <button type="submit">SEND</button>
        </form>
    )
}

export default Form;
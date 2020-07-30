import React from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from "react-redux";


class StreamForm extends React.Component {

    renderInput({ input, label, meta }) {
        return (
            <div className="field error">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {meta.touched === true ? <div className="ui error message">{meta.error}</div> : null}
            </div>
        );
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
    }

    render() {
        console.log(this.props)
        return (<div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary" type="submit">Create a Stream</button>
            </form>
        </div>
        );
    }

}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You dont enter a title';
    }
    if (!formValues.description) {
        errors.description = "You dont enter a description";
    }

    return errors;
}

export default reduxForm({ form: 'streamForm', validate: validate })(StreamForm);



import React from 'react';
import Form from 'react-bootstrap/Form';

class FormFilter extends React.Component {
    handleFilter = (event) => {
        console.log(event.target.value);
        const numberOfHorns = parseInt(event.target.value);
        this.props.upDateFilteredBeastArray(numberOfHorns);
    }
    render() {
        return (
            <Form className='form'>
                <Form.Label className='formLabel'>
                    Horned Beast Filter.
                </Form.Label>
                <Form.Select className='formSelect' onChange={this.handleFilter} aria-label="Default select example">
                    <option className='allBeasts' value="0">All Beasts</option>
                    <option value="1">One Horns</option>
                    <option value="2">Two Horns</option>
                    <option value="3">Three Horns</option>
                    <option value="100">One Hundred Horns</option>
                </Form.Select>
            </Form>

        )
    }
}

export default FormFilter;
//NumberLister.jsx

import React from 'react';
import NumberForm from './NumberForm';
import NumberList from './NumberList';

class NumberLister extends React.Component {

    state = {
        currentNumber: '',
        numbers: []
    }

    onTextboxChange = e => {
        this.setState({ currentNumber: e.target.value });
    }

    onClearClick = () => {
        this.setState({ currentNumber: '', numbers: [] });
    }

    onAddClick = () => {
        const copy = [...this.state.numbers];
        copy.push(this.state.currentNumber);
        this.setState({ numbers: copy, currentNumber: '' })
    }

    render() {
        return (
            <div className='container mt-5'>
                <NumberForm
                    currentNumber={this.state.currentNumber}
                    onTextChange={this.onTextboxChange}
                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick} />
                <NumberList numbers={this.state.numbers} />
            </div>
        )
    }
}

export default NumberLister;
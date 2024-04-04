//NumberList.jsx

import React from 'react';

class NumberList extends React.Component {
    getClassName = number => {
        if(number > 100) {
            return 'text-danger';
        }

        return '';
    }

    getContent = () => {
        if(this.props.numbers.length === 0) {
            return <h2>Nothing to display....</h2>
        }
        return (
            <>
                <ul className='list-group'>
                    {this.props.numbers.map(number => <li className='list-group-item'>
                        <h1 className={this.getClassName(number)}>{number}</h1>
                    </li>)}
                </ul>
            </>
        );
    }

    render() {
        return this.getContent();
    }
}

export default NumberList;
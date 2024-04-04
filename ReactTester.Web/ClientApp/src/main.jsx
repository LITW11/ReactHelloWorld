//main.jsx

// import { add, subtract } from './my-module';

// import { mutliply } from './SubFolder/other-file';


// import foobar, {fancyLog} from './top-level';

// foobar('hello world');




// class MyFirstComponent extends React.Component {

//     state = {
//         value: 0,
//         text: ''
//     }

//     onButtonClick = () => {
//         this.setState({ value: this.state.value + 1 });
//     }

//     onTextboxValueChange = (e) => {
//         this.setState({ text: e.target.value });
//     }

//     onClearClick = () => {
//         this.setState({ text: '' });
//     }

//     render() {
//         return (
//             <div className='container mt-5'>
//                 {/* <h1>Hello React!!</h1> */}
//                 <h1>The value is: {this.state.value}</h1>
//                 <button className='btn btn-primary' onClick={this.onButtonClick}>Click me</button>
//                 <div className='row'>
//                     <div className='col-md-6'>
//                         <input type='text'
//                             onChange={this.onTextboxValueChange}
//                             className='form-control'
//                             value={this.state.text}
//                             placeholder='Enter stuff...' />
//                     </div>
//                     <div className='col-md-1'>
//                         <button onClick={this.onClearClick} className='btn btn-warning w100'>Clear</button>
//                     </div>
//                     <h1>{this.state.text}</h1>
//                 </div>

//                 {/* <MyOtherComponent name={this.props.name} value={this.state.value} /> */}


//                 {/* <h2>The value of the name prop is: {this.props.name}</h2> */}
//             </div>
//         );

//     }
// }

// class MyOtherComponent extends React.Component {
//     render() {
//         return (<>
//             <h2>Hello from the second component</h2>
//             <h2 className='text-danger'>The value is {this.props.value}</h2>
//             {/* <h1>Name is: {this.props.name}</h1> */}
//         </>)
//     }
// }


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberLister from './NumberLister';

ReactDOM.createRoot(document.getElementById('root')).render(
    <NumberLister />
);

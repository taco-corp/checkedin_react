import React, {Component} from 'react';
import "./Wrapper.css";

class Wrapper extends Component {
    render() {
        return (
                <div>
                    <main className="wrapper" {...this.props} />
                </div>
        );
    }
}

export default Wrapper;

import React from 'react';
import '../style/SearchBar.css';
import 'bootstrap/dist/css/bootstrap.css';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="card">
                <div class="card-body">
                    <div class="md-form"></div>
                <form onSubmit={this.handleSubmit}>
                        <label><b>Search YouTube By Typing Below | Hit Enter</b></label>
                        <br/>
                        <input 
                            id="materialFormCardNameEx" 
                            class="form-control"
                            onChange={this.handleChange} 
                            placeholder="Type here to Search" 
                            name='video-search' 
                            type="text" 
                            value={this.state.term}/>
                </form>
            </div>
            </div>
        )
    }
}
export default Searchbar;
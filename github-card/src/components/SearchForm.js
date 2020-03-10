import React from "react";

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        })
        // this.props.filterSearch(this.state.query)
    }
    
    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }
    
    render() {
        return (
            <form>
                <label htmlFor='search'/>
                <input
                name='search'
                type='text'
                placeholder='Search followers by login'
                value={this.state.query}
                onChange={this.handleChange}/>
            </form>
        )
        
    }
}

export default SearchForm;
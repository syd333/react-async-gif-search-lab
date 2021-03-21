
import React, {Component} from 'react'

class GifSearch extends Component {
    state = {
        searchVal: ''
    }

    handleChange = (event) => {
        this.setState({searchVal: event.target.value})
    }
        

    render (){
        return(
            <div>
                <form onSubmit = {event => this.props.handleSubmit(event, this.state.searchVal)}>
                    <label>SEARCH:</label>
                        <input type="text"
                        name="search"
                        id="search"
                        onChange={event => {this.handleChange(event)}}
                        >
                    </input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default GifSearch;
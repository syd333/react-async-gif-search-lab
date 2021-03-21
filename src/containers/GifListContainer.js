
import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: [],
    }

    handleSubmit = (event, searchVal) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => this.setState({gifs: json.data}))
    }


    render (){
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default GifListContainer;
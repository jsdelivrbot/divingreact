import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './youtube_page/search_bar';
import VideoList from './youtube_page/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './youtube_page/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyCNGp-hXwNcwPe0rusuvBr6Vdy4OhqwWk8';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({
            key: YOUTUBE_API_KEY,
            term: term
        }, videos => this.setState({
            videos: videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({
                    selectedVideo
                })} videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
import React from 'react';

class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            image: null
        }
        this.imageRef = React.createRef();
    }
    fetchImage() {
        if (this.props.image && !image) {
            this.image = new Image()

            this.image.onload = () => {
                this.image = null
                this.setState({ loading: false })
            }
            this.image.onerror = () => {
                this.image = null
            }
            this.image.src = this.props.src
        }
        
    }
    getImageRef = (ref) => {
        this.image = ref
    }
    componentDidMount() {
        this.fetchImage()
    }
    render () {
        <div>
            {!loading && 'Loading...'}
            {image && (<img src={this.getImageRef} ref={ this.imageRef}/>)}
        </div>
    }
}

function Twitter() {
    return (
        <div>
            <Thumbnail src="https://avatars.githubusercontent.com/u/13131669?v=4" />
            <span>Profile</span>
        </div>
    )
}

export default Twitter

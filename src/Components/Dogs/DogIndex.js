import React, {Component} from 'react';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ""
        }
    }

    handleChange(event) {
        window.location.reload();
    };

    componentDidMount() {
        console.log("Component Mounted")
        console.log(this.state.img);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.message
                })
            })
            .catch(console.log)
            console.log(this.state.img);
    }

render(){
    return(
        <div>
            <h1>Random Dog Photo</h1>
            <img src={this.state.img} alt="dog pic"/>
            <button onClick={this.handleChange}>Get A Dog Pic</button>
        </div>
    )
}
}
export default DogIndex;

import React from "react";
import { hot } from "react-hot-loader/root";
import "./app.css";
import imgsrc from "../assets/img/tip.png";
import Button from "./components/button.jsx";
import ButtonGroup from "./components/ButtonGroup.jsx";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }
    render() {
        const { loading } = this.state;
        return (
            <div>
                <h1>app title123</h1>
                <section>{loading ? "loading..." : "complete"}</section>
                <section>content</section>
                <Button>按钮</Button>
                <ButtonGroup>
                    <Button>按钮1</Button>
                    <Button>按钮2</Button>
                    <Button>按钮3</Button>
                </ButtonGroup>
                {/* <img src={imgsrc} alt="" /> */}
            </div>
        );
    }
}

export default hot(App);
// export default App;

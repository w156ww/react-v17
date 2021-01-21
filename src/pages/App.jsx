import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "./app.css";
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
            <HashRouter>
                <Route path="/" component={ButtonGroup} />
                {/* <Route path="/" component={ButtonGroup} />
                <Route path="/" component={ButtonGroup} /> */}
                <h1>app title12323</h1>
                <section>{loading ? "loading..." : "complete"}</section>
                <section>content</section>
                <Button>按钮12</Button>
                <ButtonGroup>
                    <Button>按钮1121</Button>
                    <Button>按钮2</Button>
                    <Button>按钮3</Button>
                </ButtonGroup>
                {/* <Movie /> */}
                {/* <img src={imgsrc} alt="" /> */}
            </HashRouter>
        );
    }
}

export default hot(App);
// export default App;

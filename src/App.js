import { Component } from "react";
import Form from "./Form";
import Table from "./Table";



class App extends Component{
    state = {
        chars: [],
        data: [],
    }
    
    handleSubmit = (char) => {
        this.setState({chars: [...this.state.chars,char]})
    }

    removeCharacter = (index) => {
        const {chars} = this.state
        this.setState({
            chars: chars.filter((chars,i)=>{
                return i !== index
            })
        })
    }

    componentDidMount(){
      const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

      fetch(url)
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            data: result
          })
        })
    }
    

    render() {
      const {chars,data} = this.state
  
      return (
        <div className="container">
          <Table charData={chars} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      )

      // this for returning API Data
      // return <div>{result}</div>
      // const result = data.map((entry, index)=>{
        //   return <li key={index}>{entry}</li>
        // })

    }
}

export default App 
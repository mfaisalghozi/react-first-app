import React, { Component } from 'react'

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Nama</th>
                <th>Pekerjaan</th>
                <th>Config</th>
            </tr>
        </thead>
    )
}

const Tablebody = (props) => {
    const rows = props.char.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    
    return <tbody>{rows}</tbody>
}

class Table extends Component{
    render(){
        const {charData, removeCharacter} = this.props

        return(
            <table>
                <TableHeader />
                <Tablebody char={charData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}




export default Table

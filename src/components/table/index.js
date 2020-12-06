import React from 'react';

const DataTable = (props) => {
    console.log(props.searchData)
    console.log(props.data)
    
    const columns = props.data[0] && Object.keys(props.data[0]);

    const filter = (e) => {
        console.log(e.target.textContent)
        console.log(e)
    }

    return(
        <div>
            <table id = "table">
                <thead>
                    <tr> 
                        {props.data[0] && columns.map((heading, i) => 
                            <th key = {heading} id = {heading} onClick = {(e) => filter(e)} >{heading}
                                <input 
                                type="checkbox" 
                                checked = {props.searchColumns.includes(heading)} 
                                onChange = {(e) => {
                                    const checked = props.searchColumns.includes(heading);
                                    props.setSearchColumns(prev => checked  
                                        ? prev.filter(sc => sc !== heading)
                                        : [...prev, heading]
                                    )
                                }}/>
                            </th>
                        )} 
                    </tr>
                </thead>
                <tbody>

                    {/*if the user is loggin in use these routes */}
                    {props.searchData[0] && (
                    props.searchData.map((row,i) => 
                    <tr id ={i*100} key = {i*100}>
                        {
                            columns.map((column,j) => <td key = {i*100+j} id = {i*100+j}>{row[column]}</td>)
                        }
                    </tr>
                    ))}

                    {/*if the user is loggin in use these routes */}
                    {!props.searchData[0] && (
                    props.data.map((row,i) => 
                    <tr key = {i*100} id = {i*100}>
                        {
                            columns.map((column,j) => <td key = {i*100+j} id = {i*100+j}>{row[column]}</td>)
                        }
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
};

export default DataTable;

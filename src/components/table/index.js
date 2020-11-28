import React from 'react';

const DataTable = (props) => {
    
    const columns = props.data[0] && Object.keys(props.data[0]);
    console.log(props.searchColumns);

    const filter = (e) => {
        console.log(e);
        props.setSearchColumns([e]);
    }

    return(
        <div>
            <table>
                <thead>
                    <tr> 
                        {props.data[0] && columns.map((heading) => 
                            <th>{heading}
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
                    {props.data.map(row => <tr>
                        {
                            columns.map(column => <td>{row[column]}</td>)
                        }
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
};

export default DataTable;

import React from 'react';

const DataTable = (props) => {
    console.log(props.searchData)
    console.log(props.data)
    
    const columns = props.data[0] && Object.keys(props.data[0]);

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

                    {/*if the user is loggin in use these routes */}
                    {props.searchData[0] && (
                    props.searchData.map(row => 
                    <tr>
                        {
                            columns.map(column => <td>{row[column]}</td>)
                        }
                    </tr>
                    ))}

                    {/*if the user is loggin in use these routes */}
                    {!props.searchData[0] && (
                    props.data.map(row => 
                    <tr>
                        {
                            columns.map(column => <td>{row[column]}</td>)
                        }
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
};

export default DataTable;

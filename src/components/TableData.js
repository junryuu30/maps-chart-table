import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Table } from 'react-bootstrap'

function TableData() {
    const[data, setData] = useState()
    const getData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  
        console.log("response data di table", response.data);
  
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    console.log("ini datanya",data)
    useEffect(()=>{
      getData()
    },[])

  return (
    <div className='container my-2'>
      <h2 className='text-start mt-3'>Table Post All User</h2>
      <div className='' style={{overflowY:"auto"}}>
          <Table striped bordered hover className='overflow-auto'>
        <thead >
          <tr style={{textAlign:"center"}}>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        {data?.map((item, index)=>(
          <tbody >
            <tr key={item.id}>
              <td style={{textAlign:"center"}}>{item?.userId} </td>
              <td style={{textAlign:"center"}}>{item?.id} </td>
              <td style={{textAlign:"left"}}>{item?.title} </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
    </div>
  )
}

export default TableData
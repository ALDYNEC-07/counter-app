import React, { useEffect, useState } from 'react';



export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      }); 
  }, [])
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: '#090'}}>Counter App</h1>
      <h4><a style={{color: 'lightgreen'}}>completed: true</a> <a style={{color: 'lightcoral'}}>completed: false</a></h4>
      <ul>
     {
      loading ? <h2>Loading...</h2> : data.map((item) => {
          return (
            <div key={item.id}>
              {item.completed ? <li id='trueLi'>{item.title}</li> : <li id='falseLi'>{item.title}</li>}
            </div>
          )
        })
      }
      </ul>
    </div>
  )
}


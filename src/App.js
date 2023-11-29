import React, { useState } from "react";
function App() {
  const [list, setList] = useState([
    { name: 'Quy' },
    { name: 'Huynh' },
  ])
  const [agency, setAgency] = useState({});

  console.log(agency)
  console.log(list)
  return (
    <div>

      <input type="text" onChange={(event) => {
        setAgency(prev => ({ ...prev, data: event.target.value }))
      }} />

      <button onClick={() => {
        const updatedList = list.map(item => {
          if ((item.agencies || []).find(oldAgency => oldAgency.data === agency.data)) {
            return item
          } else {
            return { ...item, agencies: [...(item.agencies || []), agency] }
          }
        })
        setList(updatedList)
      }}>add</button>
    </div >
  );
}

export default App;

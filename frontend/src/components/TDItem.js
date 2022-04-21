
const TDItem = ({text, newtd, td, setTD}) => {
  const del = () => {
    setTD(td.filter((event_id) => event_id.id !== newtd.id));
  };


  return (
    <div className="TD" style={{display: "flex", justifyContent: "center", margin: "20px"}}>
        <li className="tdItem" style={{padding: "8px"}}>{text} </li>
        <button onClick={del} className="delete">Done</button>
    </div>
  )
}

export default TDItem
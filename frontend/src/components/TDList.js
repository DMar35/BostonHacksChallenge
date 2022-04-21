import TDItem from "./TDItem"
const TDList = ({td, setTD}) => {
  return (
    <div className="containerlist">
        <ul className="TDList">
            {td.map((newtd) => (
                <TDItem td={td} setTD={setTD} newtd={newtd} key={newtd.id} text = {newtd.text}/>
            ))} 
        </ul>
    </div>
  )
}

export default TDList
let i = 0;

const NewTask = ({eventInput, setEventInput, td, setTD}) => {
    const eventInputHandler = (e) => {
        console.log(e.target.value);
        setEventInput(e.target.value);
    };

    const stopTodoHandler = (e) => {
        e.preventDefault();

            setTD([
                ... td, {text: eventInput, id: i}
            ]) 
    i+= 1
    setEventInput("");
    }; 

  return (
    <form>
            <label>New Task: </label>
            <input value={eventInput} onChange={eventInputHandler} type='text' placeholder="New Task"/>
            <br></br>
            <button onClick={stopTodoHandler} className="submit" type="Submit">Add</button>
    </form>
  )
}

export default NewTask
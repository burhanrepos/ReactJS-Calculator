
const Buttons=(props)=>{
    return(
        <div className="item" onClick={props.onClick}>{props.text}</div>
    );
}
export default Buttons;
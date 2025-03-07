export function TabButton(props) {
    return (
    <li>
        {/* <button onClick={handleClick}>{props.children}</button> */}
        <button onClick={props.onSelect}>{props.children}</button>
    </li>
    );
}
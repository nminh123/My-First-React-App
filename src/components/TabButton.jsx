export function TabButton(props) {
    return (
    <li>
        {/* <button onClick={handleClick}>{props.children}</button> */}
        <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>
    );
}
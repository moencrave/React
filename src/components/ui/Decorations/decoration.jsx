import decorationStyle from './decoration.module.css';

export function BluryBubble(props){
    return(
        <span className={`${decorationStyle.bluryBubbleStyle} ${decorationStyle[props.name]}`}></span>
    )
}
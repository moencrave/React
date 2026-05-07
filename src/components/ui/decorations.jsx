import decorations from './css_modules/decorations.module.css'
export function BluryBubble(props){
    return(
        <span className={decorations.BluryBubble} style={{[props.rltb1]: props.value1, [props.rltb2]: props.value2}}></span>
    )
}
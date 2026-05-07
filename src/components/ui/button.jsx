import buttonStyles from './css_modules/button.module.css'

export function LinkButton(props) {
    return (
        <a className={buttonStyles.LinkStyle} href={props.src}>{props.LinkText}</a>
    )
}
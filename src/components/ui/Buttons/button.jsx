import buttonStyle from './button.module.css';

export function PrimaryLinkButton({href, text}) {
    return (
        <a className={buttonStyle.primaryLinkButtonStyle} href={href}>{text}</a>
    )
}

export function SecondaryLinkButton({href, text}) {
    return (
        <a className={buttonStyle.secondaryLinkButtonStyle} href={href}>{text}</a>
    )
}
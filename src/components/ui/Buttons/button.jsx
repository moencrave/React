import buttonStyle from './button.module.css';
import masterStyle from './../../../pages/moeed/master.module.css';

export function PrimaryLinkButton({href, text, headingName = 'headingText'}) {
    return (
        <a className={`${buttonStyle.primaryLinkButtonStyle} ${masterStyle[headingName]}`} href={href}>{text}</a>
    )
}

export function SecondaryLinkButton({href, text}) {
    return (
        <a className={`${buttonStyle.secondaryLinkButtonStyle} ${masterStyle.semiHeadingText}`} href={href}>{text}</a>
    )
}
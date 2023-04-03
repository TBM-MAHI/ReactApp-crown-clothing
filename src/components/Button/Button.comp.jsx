/*
inverted button
simple button
google sign bitton 
 */
import './Button.styles.scss'
const BUTTON_TYPE_CLASSNAMES = {
    google: 'google-sign-in',
    inverted:'inverted'

}
const Button = ({ children, btntype, ...otherProps }) => {
    // console.log(children,btntype,otherProps);
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSNAMES[ btntype ]}`} {...otherProps}>
          {children}
        </button>
  )
}

export default Button;
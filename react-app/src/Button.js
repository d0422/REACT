import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({text, f}){
    return <button className={styles.btn} onClick={f}>{text}</button>
}
Button.propTypes={
    text:PropTypes.string.isRequired,
};
export default Button;
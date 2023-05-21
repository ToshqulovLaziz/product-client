import PropTypes from "prop-types";

const Button = ({ className, btnText, ...rest }) => {
  return (
    <button className={`${className}`} {...rest}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  btnText: PropTypes.string,
  rest: PropTypes.object,
};

export default Button;

import PropTypes, { node } from 'prop-types';

const ButtonTypes = {
  primary: 'bg-teal-med hover:bg-teal-dark',
  secondary: 'bg-violet-med hover:bg-violet-dark',
  delete: 'bg-red-med hover:bg-red-red',
  base: 'bg-base-blue hover:opacity-90',
};

const ButtonSizes = {
  circle: 'rounded-full w-10 h-10',
  sm: 'py-1 px-3 text-sm w-8 h-10',
  med: 'px-6 text-md w-40 h-10',
  lg: 'px-6 text-lg w-64 h-10',
};

const ButtonBase = 'rounded-2xl shadow-md text-white font-bold min-w-min min-h-min';

function Button({ children, type, size }) {
  const styling = [ButtonBase, ButtonSizes[size], ButtonTypes[type]].join(' ');

  return (
    <button className={styling} type="submit">
      { children }
    </button>
  );
}

Button.propTypes = {
  children: node.isRequired,
  size: PropTypes.oneOf(Object.keys(ButtonSizes)).isRequired,
  type: PropTypes.oneOf(Object.keys(ButtonTypes)).isRequired,
};

export default Button;

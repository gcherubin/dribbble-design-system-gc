import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * 
 *<br><br><br>
 * <h2 style="border:0">Step 1: Install the Design System </h2>
 * Visit <a href="https://www.npmjs.com/package/dribbble-design-system-gc?activeTab=versions">npmjs.com</a> to install <code>dribbble-design-system-gc</code> in your React app and follow the instructions.
 *<br><br>
 <h2 style="border:0">Step 2: Import the Button component</h2>
 * Add <code>import { Button } from "dribbble-design-system-gc";</code> into the page you want to use the Button component.
<br><br><h2 style="border:0">Step 3: Render the Button component</h2>
 * Embed your component on the page <code>Button type="" text=""</code>.
 * <br><br><h2 style="border:0">Step 4: Customise the Button component</h2>
 * Choose between the type Primary and Secondary and add the value into the text prop. Test the different states below if you're not sure which one works for you. 
<br><br>
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

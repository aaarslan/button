# A Reusable Button Component for React Applications

## Overview

This reusable button component for React applications offers extensive customization options to cater to various design requirements. Crafted with precision in React and TypeScript, it introduces a versatile approach to incorporating buttons into your projects, ensuring adaptability and ease of use. The component leverages CSS modules for styling, providing a scalable and maintainable solution for UI development.

### Features

- **Customizable Appearance**: Choose between `primary`, `secondary`, and `link` variants to align with your UI's aesthetics.
- **Flexible Color Options**: Supports predefined color schemes such as `info`, `danger`, `warning`, and `success`, with the ability to specify custom colors.
- **Icon Support**: Easily integrate icons into your buttons, with control over their placement on either the left or right side.
- **Loading State**: Incorporates a loading state to indicate processing, enhancing the user experience.
- **Accessibility Features**: Implements `aria-busy` and `aria-label` attributes when loading, ensuring accessibility.

## Installation

Before integrating this button component into your project, ensure you have a React environment set up. If not, you can start a new project using Create React App or your preferred setup.

To use this button component, first, clone this repository into your project directory. Then, import the button component into your React component file as follows:

```jsx
import { Button } from '@aaarslan/button';
```

## Usage

Here is a simple example of how to use the button component in your application:

```jsx
<Button
  variant="primary"
  color="info"
  textColor="#FFFFFF"
  loading={false}
  icon={<YourIconComponent />}
  iconPosition="left"
>
  Click Me
</Button>
```

### Props

- **`variant`**: Defines the button's style variant. Options: `primary`, `secondary`, `link`. Default is `primary`.
- **`color`**: Specifies the button's background color. Predefined options include `info`, `danger`, `warning`, `success`, or any valid CSS color value.
- **`textColor`**: Determines the color of the text inside the button. Accepts any valid CSS color value.
- **`loading`**: Enables the loading state of the button, displaying a spinner and disabling interactions. Boolean value.
- **`icon`**: Accepts a React node to display an icon within the button.
- **`iconPosition`**: Positions the icon on the `left` or `right` side of the button's text.

## Styling

This component uses CSS modules for styling. You can customize the styles by editing the `styles.module.css` file. The button's design can be tailored to fit your application's theme by modifying the provided CSS variables and classes.

## Building and Publishing

The project is configured to be built with Vite/Rollup, optimizing it for both development and production environments. To build the component for publishing, run the build script specified in your `package.json`. Ensure you have configured your build system to handle CSS modules and TypeScript appropriately.

## Contributing

Contributions to enhance the functionality or documentation of this reusable button component are welcome. Whether it's adding new features, fixing bugs, or improving the documentation, your help is appreciated. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

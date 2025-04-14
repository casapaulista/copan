# Copan

> [!WARNING]
> Copan was developed specifically for Casa Paulista's internal web projects. The framework contains opinionated defaults and design decisions that align with our specific requirements and brand aesthetic. While you're welcome to use and adapt it, be aware that customization may be necessary for your particular use case.

Copan is a lightweight CSS framework that embraces semantic HTML principles, requiring minimal classes while delivering elegant styling. By prioritizing *form follows function*, Copan allows developers to create beautiful interfaces with clean, meaningful markup.

## Structure

A modular set of SCSS files organized by function:
- **Colors**: Customizable color palette and theme variables
- **Forms**: Input styling and form components
- **Grid**: Flexible layout system
- **Reset**: Normalizes browser defaults
- **Typography**: Font families, sizes, and text styling

## Tools & Technology

Copan stylesheets are written in **Sassy CSS** (SCSS), providing the power of variables, nesting, and mixins. The framework uses [**grass**](https://docs.rs/grass/latest/grass/) to compile SCSS into production-ready CSS, ensuring optimal performance and compatibility.

## Getting Started

### Installation Options

#### Local Setup

Clone the repository
```bash
git clone https://github.com/thigcampos/copan.git
```

And navigate to the project directory
```bash
cd copan
```

#### Using Git Submodules

For projects that want to include Copan as a submodule

```bash
git submodule add https://github.com/thigcampos/copan.git assets/css/copan
```

Then, initialize and update the submodule

```bash
git submodule update --init --recursive
```

This approach allows you to easily keep your copy of Copan up-to-date:

```bash
# Update the submodule to the latest version
git submodule update --remote assets/css/copan
```

### Usage

When using as a submodule:

```scss
// Adjust the path based on your project structure
@import 'assets/css/copan/src/copan';
```

## Contributors

Originally developed by [@thigcampos](https://thigcampos.com).

## License

Copan is open-source software licensed under the [GNU General Public License v3](./LICENSE) (GPLv3).

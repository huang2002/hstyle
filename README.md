# HStyle

A component styling lib.

## Features

- Support all CSS features
- Readable class names
- Collision-free
- Easy to learn
- Lightweight

## Usage

```jsx
import { style, styleObj } from "hstyle";
// Use string template form:
const className = style`
    /* & will be replaced with the real class name: */
    & {
        color: blue;
    }
    /* Write anything as if you are writing CSS: */
    @media all and (max-width: 600px) {
        ul&>li {
            background: #ccc;
        }
    }
    /* The real class name will be returned. */
`;
// Use the returned class name later:
function MyList(props) {
    return (
        <ul className={className}>
            {props.children}
        </ul>
    );
}
// Use object form:
const anotherClassName = styleObj({
    '&': {
        color: 'blue'
    },
    '@media all and (max-width: 600px)': {
        'ul&>li': {
            background: '#ccc'
        }
    }
});
```

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md).

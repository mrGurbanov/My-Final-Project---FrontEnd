const flexStyles = ({alignItems,justifyContent,direction,...props})=> ({
    display: props.flex ? 'inline-flex' : 'flex',
    alignItems,
    justifyContent,
    flexDirection: direction,
})



export default function Flex ({
    flex,
    alignItems = 'center',
    justifyContent,
    direction,
    display,
    gap,
    style,
    onClick,
   ...props
}) {
    const Element = props.as ?? 'div';
    return (
        <Element
            style={Object.assign( flexStyles({alignItems, justifyContent, direction, display}), style)}
            className={props.className}
            onClick={onClick}
            >
            {props.children}
        </Element>
    )
}
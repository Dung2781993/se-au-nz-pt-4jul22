const Description =  (props) => {
    const children = props?.children ? props.children : null;
    return (
        <div>
            <h3>Description: </h3>
            <p>{children}</p>
        </div>
    )
}

export default Description;

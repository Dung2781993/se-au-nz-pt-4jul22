const Title = (props) => {
    const appTitle = props?.appTitle ? props.appTitle : null;

    return (
        <div>
            <h3>Title: </h3>
            <h1 className="App-title">{appTitle}</h1>
        </div>
    )
};

export default Title;

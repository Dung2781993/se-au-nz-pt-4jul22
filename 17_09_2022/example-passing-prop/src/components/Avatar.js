import "../styles/avatar.css";

const Avatar = (props) => {
  console.log(props);
  const image = props.value;
  const sum = props.function(2, 3);
  console.log(sum);
  const showNameComponent = props.component(image.alt);
  return (
    <div>
      <img
        className="avatar"
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      {showNameComponent}
    </div>
  );
};

export default Avatar;

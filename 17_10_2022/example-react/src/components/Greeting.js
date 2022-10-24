import ListItem from "./ListItem";

export const Greeting2 = (props) => {
  if (!props.listCities) {
    return null;
  }
  return (
    <div>
      <p>City</p>
    </div>
  );
};

const Greeting = (props) => {
  if (!props.listCities) {
    return null;
  }
  const listCities = props.listCities;
  const cities = listCities.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        value={item.city} 
      />
    ) 
  });
  return (
    <div className="city">
      {cities}
    </div>
  );
};

export default Greeting;

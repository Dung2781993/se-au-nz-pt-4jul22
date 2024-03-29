import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../style/creatures.css";

const Creatures = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAllUsers = async () => {
    setIsLoading(true);
    fetch("http://localhost:3000/customers/getCustomerPurchaseByCustomerId?customerId=1")
      .then((respose) => respose.json())
      .then((respose) => {
        setTimeout(() => {
          setUsers(respose.data);
          setIsLoading(false);
        }, 3000);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAllUsers();
    return function cleanup() {
      setUsers([]);
    };
  }, []);

  const renderUser = (
    <div className="userlist-container">
      {users.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`${item.first_name} ${item.last_name}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.email}
              </Typography>
              <Typography variant="body3" color="text.secondary">
                {item.total_payment}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Creatures;

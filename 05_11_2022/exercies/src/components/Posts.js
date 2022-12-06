import React from "react";
import { Container, Grid, TextField } from "@mui/material";
import PostList from "./PostList";

const withSearchPost = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      searchTerm: "",
    };
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      return (
        <div>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <TextField
                  sx={{ width: "100%" }}
                  onChange={this.handleSearch}
                  value={searchTerm}
                  type="text"
                  placeholder="Search"
                />
              </Grid>
            </Grid>
          </Container>
          <WrappedComponent searchTerm={searchTerm} />
        </div>
      );
    }
  };
};

const PostListWithSearch = withSearchPost(PostList);

const Posts = () => {
  return (
    <div className="App">
      <PostListWithSearch />
    </div>
  );
};

export default Posts;

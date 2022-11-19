import PostDetail from "./PostDetail";
import React, { useEffect, useState, useCallback } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import Loading from "./Loading";

const POST_URL = process.env.REACT_APP_POST_URL;

const PostList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { searchTerm } = props;
  const [postContent, setPostContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const filterPosts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();
    return posts.filter((post) => {
      let str = `${post.title}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    });
  };

  const getPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "get",
        url: POST_URL,
      });

      if (response.status === 200) {
        setTimeout(() => {
          setPosts(response.data);
          setIsLoading(false);
        }, 3000);
      } else {
        console.log(response);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setErrorMessage("Unable to fetch post list");
    }
  }, []);

  const handleCreatePost = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "post",
        url: `${POST_URL}`,
        data: {
          title: "Post Title",
          body: postContent,
          userId: 1,
        },
      });

      if (200 <= response.status && response.status < 300) {
        setIsLoading(false);
        alert(`Post created successfully with id: ${response.data.id} `);
      } else {
        setIsLoading(false);
        alert("Error happened");
        console.log(response);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      setErrorMessage("Unable to create a new post");
    }
  };

  const filteredPosts = filterPosts(searchTerm);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderPosts = (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            sx={{ width: "100%" }}
            id="postContent"
            placeholder="What are you thinking?"
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={handleCreatePost}
          >
            {" "}
            Create Post{" "}
          </Button>
        </Grid>
      </Grid>
      {filteredPosts?.map((post) => (
        <PostDetail {...post} />
      ))}
    </Container>
  );

  return (
    <div>
      {isLoading ? <Loading /> : renderPosts}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default PostList;

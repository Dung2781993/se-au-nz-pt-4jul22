import { Card, CardContent,Typography } from '@mui/material'

const PostDetail = (props) => {
  return (
    <Card key={Math.random()} style={{ marginTop: 5 }}>
      <CardContent>
        <Typography style={{ fontSize: 14 }} gutterBottom>
          User {props.userId}
        </Typography>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body2">{props.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostDetail
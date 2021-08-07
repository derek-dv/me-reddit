interface Post {
  title: String;
  createdAt: String;
  author: String;
  upvotes: number;
  downvotes: number;
}
interface Data {
  posts: Post[];
}

const dummies: Data = {
  posts: [
    {
      author: "Derek David",
      title: "First dummy post for reddit",
      createdAt: "August 14",
      downvotes: 0,
      upvotes: 0,
    },
    {
      author: "Derek David",
      title: "First dummy",
      createdAt: "August 1",
      downvotes: 0,
      upvotes: 10,
    },
    {
      author: "John Doe",
      title: "First dummy post for reddit",
      createdAt: "August 4",
      downvotes: 0,
      upvotes: 0,
    },
    {
      author: "Derek David",
      title: "First dummy post for reddit",
      createdAt: "August 14",
      downvotes: 9,
      upvotes: 0,
    },
  ],
};
export default dummies;

export interface Post {
  id: number;
  title: String;
  content: String;
  createdAt?: String;
  author: String;
  upvotes?: number;
  downvotes?: number;
}
interface Data {
  posts: Post[];
}

const dummies: Data = {
  posts: [
    {
      id: 1,
      author: "Derek David",
      title: "Aenean turpis primis",
      content:
        "Aenean turpis primis volutpat malesuada, pretium condimentum orci. Inceptos nullam ut himenaeos quisque luctus, leo egestas. Velit ullamcorper justo augue dolor, himenaeos leo vehicula semper. Dapibus molestie nunc, pharetra sit consequat integer. Sodales vestibulum tempor purus varius sodales, habitasse hendrerit pretium faucibus. Eu commodo ad id praesent, dictum varius sapien.",
      createdAt: "August 14",
      downvotes: 0,
      upvotes: 0,
    },
    {
      author: "Derek David",
      title: "First dummy",
      content:
        "Nec integer rhoncus placerat, luctus turpis felis. Amet dui commodo porttitor, in tempor nullam mi. Dictum sodales nec vehicula gravida magna, inceptos quam vitae eget. Ad fames magna consequat quisque libero proin fermentum vel, tempus",
      createdAt: "August 1",
      downvotes: 0,
      upvotes: 10,
      id: 2,
    },
    {
      id: 3,
      author: "John Doe",
      title: "Hendrerit hendrerit hac, ad sodales ullamcorper",
      content:
        "Hendrerit hendrerit hac, ad sodales ullamcorper turpis. Aliquam et donec non sociosqu, et cursus sodales ullamcorper turpis nullam. Enim conubia fermentum porta curabitur, praesent curae non. Id interdum bibendum, molestie a torquent class laoreet dui faucibus. Consequat viverra nunc primis.",
      createdAt: "August 4",
      downvotes: 0,
      upvotes: 0,
    },
    {
      id: 4,
      author: "Derek David",
      title: "Habitasse pellentesque donec in praesent quisque neque",
      content:
        "Habitasse pellentesque donec in praesent quisque neque, commodo vivamus aliquam sollicitudin. Nulla tincidunt nullam torquent duis. Himenaeos quis sed, praesent pulvinar id etiam. Fusce aenean facilisis nisl risus, ligula id aliquet posuere. Egestas habitant quisque erat faucibus, porttitor libero tortor hendrerit. Fusce sed pellentesque.",
      createdAt: "August 14",
      downvotes: 9,
      upvotes: 0,
    },
  ],
};
export default dummies;

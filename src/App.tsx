import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list";
import UserList from "./pages/users/user-list";
import PostShow from "./pages/posts/show-list";
import UserShow from "./pages/users/user-show-list";
import EditPosts from "./pages/posts/edit-list";
import CreatePost from "./pages/posts/create-list";
import { Article, Person } from "@mui/icons-material";
import HomePage from "./pages/homePage";
import { authProvider } from "./AuthProvider";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    dashboard={HomePage}
    authProvider={authProvider}
  >
    <Resource
      name="posts"
      icon={Article}
      list={PostList}
      show={PostShow}
      edit={EditPosts}
      create={CreatePost}
    />
    <Resource name="users" icon={Person} list={UserList} show={UserShow} />
  </Admin>
);

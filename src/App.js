import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostEdit from "./PostEdit";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} edit={PostEdit} />
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;

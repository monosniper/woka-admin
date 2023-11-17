import {
    Admin,
    ListGuesser,
    EditGuesser,
    Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import CreateTag from "./resources/tags/CreateTag";
import ListTag from "./resources/tags/ListTag";

import CreateProduct from "./resources/products/CreateProduct";
import ListProduct from "./resources/products/ListProduct";
import EditProduct from "./resources/products/EditProduct";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="products"
      create={CreateProduct}
      list={ListProduct}
      edit={EditProduct}
    />
    <Resource
        name="tags"
        recordRepresentation="name"
        create={CreateTag}
        list={ListTag}
        edit={EditGuesser}
    />
  </Admin>
);

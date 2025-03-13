import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const EditPosts = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);
export default EditPosts;

import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const CreatePost = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={4} />
      </SimpleForm>
    </Create>
  );
};

export default CreatePost;

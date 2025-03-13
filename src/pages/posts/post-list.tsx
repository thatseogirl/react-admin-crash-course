import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  // SimpleList,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";
const PostPanel = () => {
  const record = useRecordContext();
  return <div>{record?.body}</div>;
};
const PostList = () => {
  const postFilter = [
    <TextInput source="q" label="Search" />,
    // alwaysOn props if you want the filter to always be there
    <ReferenceInput source="userId" label="User" reference="users" />,
  ];
  return (
    <List filters={postFilter}>
      {/* other method or way to display data */}

      {/* <SimpleList 
        primaryText={(record) => record.title} 
        secondaryText={(record) => record.body}
        /> */}
      <Datagrid
        expand={<PostPanel />}
        sx={{
          "RaDatagrid-headercell": {
            padding: "16px",
          },
        }}
      >
        <TextField source="id" />
        <TextField source="title" />
        {/* <TextField source="body" /> */}
        {/* you can render the body either way */}
        <FunctionField
          label="Excerpt"
          render={(record) => `${record.body.substring(0, 50)}...`}
        />
        <ReferenceField source="userId" reference="users" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
export default PostList;

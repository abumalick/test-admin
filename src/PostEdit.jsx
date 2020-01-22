import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput
} from "react-admin";
import LogProps from "./Components/LogProps";

const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LogProps />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
export default PostEdit;

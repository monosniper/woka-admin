import {Create, SimpleForm, TextInput, required, BooleanInput} from 'react-admin';

const CreateTag = () => {
    return (
	<Create>
	    <SimpleForm enctype={'multipart/form-data'}>
		<TextInput source="name" validate={[required()]} name={'name'} />
		<TextInput source="icon" name={'icon'} />
		<BooleanInput label="Привилегия" source="isPrivilege" name={'isPrivilege'}/>
	    </SimpleForm>
	</Create>
    );
};

export default CreateTag;
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    NumberInput,
    ImageInput,
    ImageField,
    ReferenceInput
} from 'react-admin';

const CreateProduct = () => {
    return (
	<Create>
	    <SimpleForm enctype={'multipart/form-data'}>
		<ImageInput source="pictures" label="Related pictures" name={'image'}>
		    <ImageField source="src" title="title" />
		</ImageInput>
		<TextInput source="title" validate={[required()]} name={'title'} />
		<TextInput multiline  source="description" fullWidth name={'description'} />
		<NumberInput source="price" name={'price'} />
		<ReferenceInput source="TagId" reference="tags" name={'tag'}/>
		<TextInput source="rcon" name={'rcon'} />
		<TextInput source="rcon_1" name={'rcon_1'} />
		<TextInput source="rcon_3" name={'rcon_3'} />
		<TextInput source="rcon_forever" name={'rcon_forever'} />
		<p>&#123;name&#125; - is a name u fckng stupid nigga</p>
	    </SimpleForm>
	</Create>
    );
};

export default CreateProduct;
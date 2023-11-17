import {
    Datagrid,
    List, TextField, DateField, useRecordContext, EditButton, DeleteButton, ReferenceField, SearchInput
} from 'react-admin';

const Description = () => {
    const record = useRecordContext();
    return (
	<div dangerouslySetInnerHTML={{ __html: record.description }} />
    );
};

export const ProductImageField = (props) => {
    const record = useRecordContext(props);
    return record ? <img width={50} src={import.meta.env.VITE_SIMPLE_REST_URL.replace('/api','') + record.image}/> : null;
}

const productFilters = [
    <SearchInput source="q" alwaysOn  name={'q'}/>
];

const ListProduct = () => {
    return (
	<List filters={productFilters}>
	    <Datagrid expand={<Description />}>
		<TextField source="id" label={'ID'} />
		<ProductImageField source="image" label={'Картинка'} />
		<TextField source="title" label={'Название'} />
		<TextField source="price" label={'Цена'} />
		<ReferenceField source="TagId" reference="tags" label={'Тег'}>
		    <TextField source="name" />
		</ReferenceField>
		<DateField source="createdAt" label={'Дата создания'} />
		<EditButton />
		<DeleteButton />
	    </Datagrid>
	</List>
    );
};

export default ListProduct;
import {
    Datagrid,
    List, TextField, DateField, useRecordContext, EditButton, DeleteButton, SearchInput
} from 'react-admin';

export const TagIconField = (props) => {
    const record = useRecordContext(props);
    return record ? <span className="material-icons-round">{record.icon}</span> : null;
}

const tagFilters = [
    <SearchInput source="q" alwaysOn  name={'q'}/>
];

const ListTag = () => {
    return (
	<List filters={tagFilters}>
	    <p><a href="https://fonts.google.com/icons">https://fonts.google.com/icons</a></p>
	    <Datagrid>
		<TextField source="id" label={'ID'} />
		<TextField source="name" label={'Название'} />
		<TagIconField source="icon" label={'Иконка'} />
		<DateField source="createdAt" label={'Дата создания'} />
		<EditButton />
		<DeleteButton />
	    </Datagrid>
	</List>
    );
};

export default ListTag;
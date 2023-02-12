import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Slise';

const ContactList = () => {
  const contacts = useSelector(state => state.value.contacts);
  const filterValue = useSelector(state => state.value.filter);

  const dispach = useDispatch();

  const filterNames = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const deleteContactt = id => {
    dispach(deleteContact(contacts.filter(item => item.id !== id)));
  };

  const visible = filterNames();

  return (
    <ul className="list">
      {visible.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              className="button contact-butoon"
              onClick={() => deleteContactt(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

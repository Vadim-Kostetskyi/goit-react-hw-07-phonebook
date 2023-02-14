import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsApi } from 'redux/contactApi';
import {
  deleteContact,
  saveContacts,
  filterContacts,
  isLoading,
} from 'redux/Slise';
import { deleteContactsApi } from 'redux/contactApi';
import { Audio } from 'react-loader-spinner';

const ContactList = () => {
  const dispach = useDispatch();
  const loading = useSelector(isLoading);
  const contacts = useSelector(saveContacts);
  const filterValue = useSelector(filterContacts);

  useEffect(() => {
    dispach(fetchContactsApi());
  }, []);

  const filterNames = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const deleteContactt = id => {
    dispach(deleteContact(contacts.filter(item => item.id !== id)));
    dispach(deleteContactsApi(id));
  };

  const visible = filterNames();

  return (
    <div>
      {loading && (
        <p>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </p>
      )}
      {!loading && (
        <ul className="list">
          {visible.map(({ name, id, phone }) => {
            return (
              <li key={id}>
                {name}: {phone}
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
      )}
    </div>
  );
};
export default ContactList;

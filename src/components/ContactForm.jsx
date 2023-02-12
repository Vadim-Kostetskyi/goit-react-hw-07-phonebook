import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, saveContacts } from 'redux/Slise';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const ContactForm = () => {
  const dispach = useDispatch();
  const contacts = useSelector(saveContacts);

  const [name, setName] = useState('');
  const [number, setnumber] = useState('');

  const inputChange = ev => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setnumber(inputValue);

      default:
        break;
    }
  };

  const handleSubmit = el => {
    el.preventDefault();
    const unique = contacts.map(elem =>
      name.toLowerCase() !== elem.name.toLowerCase() ? true : false
    );

    unique.includes(false)
      ? alert(`${name} is alredy in contacts`)
      : dispach(addContact({ id: nanoid(), name: name, number: number }));

    reset();
  };

  const reset = () => {
    setName('');
    setnumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputChange}
        />
      </label>
      <h2>Number</h2>
      <label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputChange}
        />
      </label>
      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
};

import './style.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

const Feedback = () => {
  return (
    <div className="box">
      {<Form />}
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};

export const App = () => {
  return <div>{<Feedback />}</div>;
};

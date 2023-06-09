import { ContactListElem } from '../ContactListElem/ContactListElem';
import PropTypes from 'prop-types';
import { ContactesList } from './ContactList.styled';

export const ContactList = ({ contacts, filteredContacts, onDelete }) => {
  const makeList = arrey => {
    return arrey.map(({ id, name, number }) => {
      return (
        <ContactListElem
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
          contactDelete={onDelete}
        />
      );
    });
  };

  return (
    <ContactesList>
      {filteredContacts ? makeList(filteredContacts) : makeList(contacts)}
    </ContactesList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

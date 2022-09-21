import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Button, Number } from './Contacts.styled';

export const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <Box as="ul" py={4}>
      {contacts.map(({ name, number, id }) => (
        <Box
          as="li"
          p={3}
          display="flex"
          width="300px"
          justifyContent="space-between"
          alignItems="center"
          key={id}
        >
          <div>
            <h3>{name}</h3>
            <Number>{number}</Number>
          </div>
          <Button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

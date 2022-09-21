import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Title } from './Sectio.styled';

export const Section = ({ title, children }) => (
  <Box as="section" p={4}>
    <Title>{title}</Title>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

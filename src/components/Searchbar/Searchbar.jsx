import { Formik} from 'formik';
import PropTypes from 'prop-types'; 
import { HeaderForm, SearchForm, FormButton, Text, Input} from './Searchbar.styled';

export const SearchBar = ({ onSubmit, isSubmitting, searchQuery }) => {

  const handleSubmit = (values, actions) => {
    onSubmit(values.query);
    actions.resetForm();
  };

  const initialiValue = { query: searchQuery };

  return (
    <HeaderForm>
      <Formik
        initialValues={initialiValue}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <SearchForm>
          <FormButton type="submit" disabled={isSubmitting}>
            <Text>Search</Text>
          </FormButton>
          <Input
            type="text"
            placeholder="Search images and photos"
            name="query"
          />
        </SearchForm>
      </Formik>
    </HeaderForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
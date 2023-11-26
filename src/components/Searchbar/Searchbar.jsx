import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Btn, Header, Input, SearchForm } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value.trim().toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
    evt.target.reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Btn type="submit">
          <FiSearch size={20} />
        </Btn>

        <Input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};

export const getMapUsers = (users) => users.map(({
  id, email, website, username, phone,
}) => (
  {
    col1: id,
    col2: email,
    col3: website,
    col4: email,
    col5: username,
    col6: phone,
  }
));

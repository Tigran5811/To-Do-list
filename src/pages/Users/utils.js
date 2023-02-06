export const getMapUsers = (users) => users.map(({
  id, email, firstName, username, lastName, age,
}) => (
  {
    col1: id,
    col2: username,
    col3: firstName,
    col4: lastName,
    col5: email,
    col6: age,
  }
));

// thanks emailregex.com!
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default emails => {
  const invalidEmailsArray = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => email.length > 0)
    .filter(email => !re.test(email)); // inverted because we want to keep the bad ones

  if (invalidEmailsArray.length) {
    return `The following emails are invalid: ${invalidEmailsArray}`;
  }
};

export const If = ({ test, children }) => {
  if (test === true) {
    return children;
  } else if (test === false) {
    return null;
  } else {
    // The test does not return a boolean
    // truthy and falsy values are not allowed
    throw new Error(
      "test must be of type 'boolean' for <If test={ true | false }/>. Truthiness and falsiness is not supported."
    );
  }
};

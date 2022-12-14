Map data in array to a react component

```jsx
<Map
  data={[{ name: "foo" }, { name: "bar" }, { name: "baz" }]}
  component={({ name }) => <div>{name}</div>}
  // Use a unique id e.g. uuid as key.
  // Using index might cause unexpected UI bugs.
  keyFrom={(entry, index) => {
    return entry.id;
  }}
/>
```

Pass shared propertes to children

```jsx
const Description = ({ name, description }) => (
  <div>
    {description}
    <br />
    {name}
  </div>
);

<Map
  data={[{ name: "foo" }, { name: "bar" }, { name: "baz" }]}
  description="This is a shared description"
  keyFrom={(entry, index) => {
    return entry.id;
  }}
  component={Description}
/>;
```

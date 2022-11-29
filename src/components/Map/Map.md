Map data in array to a react component

```jsx
<Map
  data={[{ name: "foo" }, { name: "bar" }, { name: "baz" }]}
  Component={({ name }) => <div>{name}</div>}
/>
```

Pass shared propertes to children

```jsx
<Map
  data={[{ name: "foo" }, { name: "bar" }, { name: "baz" }]}
  description="This is a shared description"
  Component={({ name, description }) => (
    <div>
      {description}
      <br />
      {name}
    </div>
  )}
/>
```

Select `key` for the mapped component with `keyFrom` attribute

```jsx
<Map
  data={[
    { id: "be72e79a-849f-4409-9459-0cfaa0127145", name: "foo" },
    { id: "11c56a0d-4be7-4432-be06-b1acdc7f0fc7", name: "bar" },
    { id: "33117acf-90d5-48a3-a06b-201ff26003e0", name: "baz" },
  ]}
  keyFrom="id"
  Component={({ name }) => <div>{name}</div>}
/>
```

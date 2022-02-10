import React from "react";
import { useCallback, useState } from "react";
import {
  Avatar,
  Card,
  Button,
  ResourceItem,
  ResourceList,
  TextStyle
} from "@shopify/polaris";
import books from "../../data/book/Book";
import Add from "../component/Add";


const User = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);

  const resourceName = {
    singular: "book",
    plural: "books"
  };


  return (
    <Card title="Welcome to User Page" sectioned>
      <p> User can Add the action only. </p>
      <ResourceList
        resourceName={resourceName}
        items={books}
        renderItem={renderItem}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        selectable
      />
    </Card>
  );

  function renderItem(item) {
    const { id, img, name, Author, price } = item;
    const media = <Avatar source={img} customer size="medium" name={name} />;


    return (
      <ResourceItem
        id={id}
        media={media}
        accessibilityLabel={`View details for ${name}`}
      >
        <h3>
          <TextStyle variation="strong">Author Name: {Author}</TextStyle> <br />
        </h3>
        <h3>
          <TextStyle variation="strong">Book Name: {name}</TextStyle>
        </h3>
        <h3>
          <TextStyle variation="strong">Price: {price}</TextStyle>
        </h3>
        <Add active={active} handleChange={handleChange} />
        <Button onClick={handleChange}>Add </Button>&nbsp;&nbsp;&nbsp;
      </ResourceItem>
    );
  }
}

export default User;

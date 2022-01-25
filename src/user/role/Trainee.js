import React from "react";
import { useState } from "react";
import {
  Avatar,
  Card,
  ResourceItem,
  ResourceList,
  TextStyle
} from "@shopify/polaris";
import books from "../../data/book/Book";
const Trainee = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: "book",
    plural: "books"
  };
  return (
    <Card title="Welcome to Trainee Page" sectioned>
      <p> Trainee can read the action only. </p>
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
      </ResourceItem>
    );
  }
}
export default Trainee;

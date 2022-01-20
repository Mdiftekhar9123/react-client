import React from "react";
import { useState } from "react";
import {
    Avatar,
    Card,
    Button,
    ResourceItem,
    ResourceList,
    TextStyle
  } from "@shopify/polaris";
const User = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    
    const resourceName = {
        singular: "book",
        plural: "books"
      };
      const items = [
        {
          id: 101,
          AuthorName: "Mae Jemison",
          BookName:"Find Where the Wind Goes",
          location: "Decatur, USA"
        },
        {
          id: 201,
          AuthorName: "Ellen Ochoa",
          BookName:"The Astronaut With a Song for the Stars",
          location: "Los Angeles, USA"
        }
      ];
    return(
        <Card title = "Welcome to User Page" sectioned>
         <p> User can Add the action only. </p>
            <ResourceList
                resourceName={resourceName}
                items={items}
                renderItem={renderItem}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                selectable
            />
        </Card> 
    );
    function renderItem(item) {
        const { id, AuthorName,BookName, location } = item;
        const media = <Avatar customer size="medium" name={AuthorName} />;
    
        return (
          <ResourceItem
            id={id}
            media={media}
            accessibilityLabel={`View details for ${AuthorName}`}
          >
            <h3>
              <TextStyle variation="strong">Author: {AuthorName}</TextStyle> <br/>

              <TextStyle variation="strong">BookName: {BookName}</TextStyle>
            </h3>
            <div>Location:{location}</div>
            <Button>Add </Button>&nbsp;&nbsp;&nbsp;
          </ResourceItem>
        );
      }    
}
export default User;

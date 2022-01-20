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
import books from "../../data/book/Book";
  
const Admin = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    
    const resourceName = {
        singular: "book",
        plural: "books"
      };
    return(
            <Card title = "Welcome to Admin Page" sectioned>
            <p> Admin can Add and Edit and Delete the action only. </p>
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
            const { id, AuthorName,BookName, location } = item;
            const media = <Avatar customer size="medium" name={AuthorName} />;
        
            return (
              <ResourceItem
                id={id}
                media={media}
                accessibilityLabel={`View details for ${AuthorName}}`}
              >
                <h3>
                  <TextStyle variation="strong"> Author: {AuthorName}</TextStyle> <br/>

                  <TextStyle variation="strong">BookName: {BookName}</TextStyle>
                </h3>
                <div>Location:{location}</div>
                <Button>Add </Button>&nbsp;&nbsp;&nbsp;
                <Button>Edit </Button>&nbsp;&nbsp;&nbsp;
                <Button>Delete </Button>
              </ResourceItem>
            );
          }    
}
export default Admin;

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
    return(
        <Card title = "Welcome to Trainee Page" sectioned>
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
        const { id,AuthorName,BookName ,location } = item;
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
          </ResourceItem>
        );
      }  
}
export default Trainee;

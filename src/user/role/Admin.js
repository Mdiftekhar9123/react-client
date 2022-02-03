import { Card, ResourceList, ResourceItem, TextStyle, Button, Avatar } from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import '../../App.css'
import books from "../../data/book/Book";
import Add from "../component/Add";
import Edit from "../component/Edit";
import Delete from "../component/delete";


const Admin = () => {
  const resourceName = {
    singular: "book",
    plural: "books"
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [active, setActive] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);
  const handleChangeEdit = useCallback(() => setActiveEdit(!activeEdit), [activeEdit]);
  const handleChangeDelete = useCallback(() => setActiveDelete(!activeDelete), [activeDelete]);

  
  return (
    <div className="books">
      <Card title="Admin dashboard" sectioned>
        <p>Admin can Add and Edit action only.</p>
        <Button onClick={handleChange}> Add Books</Button>
        <ResourceList
          resourceName={resourceName}
          items={books}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          selectables
          renderItem={(item) => {
            const { id, img, name, Author, price } = item;
            const media = <Avatar source={img} customer size="medium" name={name} />;


            return (
              <div>
                <ResourceItem
                  id={id}
                  media={media}
                  accessibilityLabel={`View details for ${name}`}>
                  <h3>
                    <TextStyle variation="strong">Book Name:{name}</TextStyle>
                  </h3>
                  <h3>
                    <TextStyle variation="strong">Author Name:{Author}</TextStyle>
                  </h3>
                  <h3>
                    <TextStyle variation="strong">Price:{price}</TextStyle>
                  </h3>
                  <Add active={active} handleChange={handleChange} />
                  <Edit active={activeEdit} handleChange={handleChangeEdit} />
                  <Delete active={activeDelete} handleChange={handleChangeDelete} />
                  <Button onClick={handleChangeEdit}>Edit</Button>
                  <Button onClick={handleChangeDelete}>Delete</Button>
                </ResourceItem>
              </div>
            );
          }
          }
        />
      </Card>
    </div>
  )
}

export default Admin;

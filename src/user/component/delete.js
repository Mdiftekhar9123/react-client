import { Modal } from "@shopify/polaris";
import React from "react";


const Delete = (props) => {
  const { active, handleChange } = props;


  return (
    <div>
      <Modal
        open={active}
        onClose={handleChange}
        primaryAction={{
          content: 'Delete',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}>
        <Modal.Section>
          <h1 className="heading">Welcome to Delete Page</h1>
          <h1>Do you want to delete item ? </h1>
          <h1 style = {{ color: 'red', fontFamily: "bold" }} > Warning : After deleting , your one item will be cleared.</h1>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default Delete;

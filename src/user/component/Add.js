import React from "react";
import { Form, FormLayout, TextField, Modal } from "@shopify/polaris";
import { useState } from "react";
const Add = (props) => {
    const {active , handleChange} = props;
    const [book, setBook] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    return (
        <div>
            <Modal
                open={active}
                onClose={handleChange}
                primaryAction={{
                    content: 'Add',
                    onAction: handleChange,
                }}
                secondaryActions={[
                    {
                        content: 'Close',
                        onAction: handleChange,
                    },
                ]}>
                <Modal.Section>
                    <Form>
                        <FormLayout>
                        <h1 className="heading">Welcome to Add Page</h1>
                            <div className="textfield">
                                <TextField label="Book-Name" autoComplete="off" align="left" type="string" 
                                placeholder = "Type here Book Name"
                                value = {book}
                                onChange ={ (value) => setBook(value)}/>
                                <TextField label="Author-Name" autoComplete="off" align="left" type="string" 
                                placeholder = "Type here Author Name"
                                value = {author}
                                onChange ={ (value) => setAuthor(value)}/>
                                <TextField label="Price" autoComplete="off" align="left" type="string" 
                                placeholder = "Type here price"
                                value = {price}
                                onChange ={ (value) => setPrice(value)}/>
                            </div>
                        </FormLayout>
                    </Form>
                </Modal.Section>
            </Modal>

        </div>
    );
}
export default Add;

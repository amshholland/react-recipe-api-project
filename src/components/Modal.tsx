import { BsPrefixProps, Omit } from "react-bootstrap/esm/helpers";
import { Button, Modal, ModalProps } from "react-bootstrap";

import React from "react";

export function VerticallyCenteredModal( props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ( ( instance: HTMLDivElement | null ) => void ) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; } ) {

    const { Recipe, SearchForm } = props;

    return (
        <Modal { ...props } size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
          </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ props.onHide }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export function AppModal() {
    const [ modalShow, setModalShow ] = React.useState( false );

    return (
        <>
            <Button variant="primary" onClick={ () => setModalShow( true ) }>Launch vertically centered modal</Button>

            <VerticallyCenteredModal
                show={ modalShow }
                onHide={ () => setModalShow( false ) }
            />
        </>
    );
}
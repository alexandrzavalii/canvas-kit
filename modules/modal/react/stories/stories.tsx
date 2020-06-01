/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {Radio, RadioGroup} from '@workday/canvas-kit-react-radio';

import {Button} from '../../../button/react';
import Modal, {useModal} from '..';
import README from '../README.md';

const DefaultModalExample = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>() as React.RefObject<HTMLButtonElement>; // cast to keep buttonRef happy
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <>
      <Button variant={Button.Variant.Delete} buttonRef={buttonRef} onClick={openModal}>
        Delete Item
      </Button>
      <Modal data-testid="TestModal" heading="Delete Item" open={open} handleClose={closeModal}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

const UseModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

const ModalWithRadioButtons = () => {
  const {targetProps, modalProps} = useModal();

  return (
    <>
      <Button {...targetProps}>With Radio Buttons</Button>
      <Modal data-testid="TestModal" heading={'Delete Item'} {...modalProps}>
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <fieldset data-automation-id="ratingFieldset">
          <legend>Rate this content out of 5 stars</legend>
          <div>
            <input
              id="ratingRadioInput_starsButtonForModal_1"
              name="ratingRadioInput_starsButtonForModal"
              type="radio"
              className="css-1s1qvxb-SingleStarButton"
              value="1"
            />
            <label htmlFor="ratingRadioInput_starsButtonForModal_1">
              <span className="css-1s1qvxb-SingleStarButton">1 Star</span>
              <span aria-hidden="true" focusable="false" className="css-xwanzm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="wd-icon-star wd-icon"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <g fill-rule="evenodd" className="wd-icon-container">
                    <path
                      d="M12 16.717l4.23 2.717-1.154-5.084 3.95-3.556-5.176-.436L12 5.68l-1.85 4.678-5.175.436 3.949 3.556-1.154 5.084z"
                      className="wd-icon-background"
                    />
                    <path
                      fill-rule="nonzero"
                      d="M12 16.089l3.59 2.306-.978-4.316 3.352-3.019-4.393-.37L12 6.719l-1.57 3.97-4.394.371 3.352 3.02-.979 4.315L12 16.089zm0 1.942l-5.756 3.696c-.234.15-.376.06-.314-.213l1.57-6.92L2.378 9.98c-.209-.188-.154-.36.118-.383l6.723-.566 2.599-6.57c.1-.254.262-.258.364 0l2.6 6.57 6.722.566c.274.024.325.196.118.383L16.5 14.593l1.57 6.921c.061.268-.081.363-.314.213L12 18.031z"
                      className="wd-icon-fill"
                    />
                  </g>
                </svg>
              </span>
            </label>
          </div>
          <div>
            <input
              id="ratingRadioInput_starsButtonForModal_1"
              name="ratingRadioInput_starsButtonForModal"
              type="radio"
              className="css-1s1qvxb-SingleStarButton"
              value="2"
            />
            <label htmlFor="ratingRadioInput_starsButtonForModal_1">
              <span className="css-1s1qvxb-SingleStarButton">1 Star</span>
              <span aria-hidden="true" focusable="false" className="css-xwanzm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="wd-icon-star wd-icon"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 24 24"
                >
                  <g fill-rule="evenodd" className="wd-icon-container">
                    <path
                      d="M12 16.717l4.23 2.717-1.154-5.084 3.95-3.556-5.176-.436L12 5.68l-1.85 4.678-5.175.436 3.949 3.556-1.154 5.084z"
                      className="wd-icon-background"
                    />
                    <path
                      fill-rule="nonzero"
                      d="M12 16.089l3.59 2.306-.978-4.316 3.352-3.019-4.393-.37L12 6.719l-1.57 3.97-4.394.371 3.352 3.02-.979 4.315L12 16.089zm0 1.942l-5.756 3.696c-.234.15-.376.06-.314-.213l1.57-6.92L2.378 9.98c-.209-.188-.154-.36.118-.383l6.723-.566 2.599-6.57c.1-.254.262-.258.364 0l2.6 6.57 6.722.566c.274.024.325.196.118.383L16.5 14.593l1.57 6.921c.061.268-.081.363-.314.213L12 18.031z"
                      className="wd-icon-fill"
                    />
                  </g>
                </svg>
              </span>
            </label>
          </div>
        </fieldset>
      </Modal>
    </>
  );
};

const NoCloseModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
        {...modalProps}
        handleClose={undefined}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

const CustomFocusModalExample = () => {
  const {targetProps, modalProps, closeModal} = useModal();
  const buttonRef = React.useRef() as React.RefObject<HTMLButtonElement>;

  return (
    <>
      <Button variant={Button.Variant.Delete} {...targetProps}>
        Delete Item
      </Button>
      <Modal
        data-testid="TestModal"
        heading={'Delete Item'}
        {...modalProps}
        firstFocusRef={buttonRef}
        handleClose={undefined}
      >
        <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
        <Button style={{marginRight: '16px'}} onClick={closeModal} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary} buttonRef={buttonRef}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

storiesOf('Components|Popups/Modal/React', module)
  .addParameters({component: Modal})
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <DefaultModalExample />
    </div>
  ))
  .add('With Radio buttons', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <ModalWithRadioButtons />
    </div>
  ))
  .add('With useModal hook', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <UseModalExample />
    </div>
  ))
  .add('Without close icon', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <NoCloseModalExample />
    </div>
  ))
  .add('Custom focus', () => (
    <div className="story">
      <h1 className="section-label">Modal</h1>
      <CustomFocusModalExample />
    </div>
  ));

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Modal from './Modal.component';

export default { title: 'Components / Modal', component: Modal };
let open = false;
const Template = (args) => <Modal {...args} />;

export const tryToLogIn = Template.bind({});
tryToLogIn.args = {
  text: 'Kindly check your email to reset your password',
  cornerClose: true,
};
// export const addedTocart = Template.bind({});
// tryToLogIn.args = {
//   text: 'ADDED TO THE CART',
//   cornerClose: 'true',

// };
// export const createdAccount = Template.bind({});
// tryToLogIn.args = {
//   text: 'Your Account has been created. ',

//   cornerClose: 'true',

// };
// export const basicStory = () => (
//   <div>
//     <button
//       type="button"
//       onClick={() => {
//         open = true;
//       }}
//     >
//       Open Modal
//     </button>
//     {open && <Modal show={open} text="Some text" cornerClose={true} />}
//   </div>
// );
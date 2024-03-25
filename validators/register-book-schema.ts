import * as yup from 'yup';

// SCHEMA IS : ISBN, title, author, available_quantity, shelf_location


// available_quantity: non negative integer
export const registerBookSchema = yup.object({
    ISBN: yup.string().required(),
    title: yup.string().required(),
    author: yup.string().required(),
    available_quantity: yup.number().integer().positive().required(),
    shelf_location: yup.string().required()
}).required();
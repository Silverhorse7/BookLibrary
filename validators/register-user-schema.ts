import * as yup from 'yup';

// SCHEMA IS: username, email, password, role (optional)

// available_quantity: non negative integer
export const registerUserSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    role: yup.string().optional()
})
.required();
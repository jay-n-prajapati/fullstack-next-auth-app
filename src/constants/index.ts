import * as yup from "yup";

export const VERIFY = "VERIFY";
export const FORGOTPASS = "FORGOTPASS";

export const passwordRegEx: RegExp =
  /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/g;
export const signupSchema = yup.object({
  username: yup
    .string()
    .required("* required")
    .min(2, "* min. of 2 word")
    .max(25, "* name can not be more than 25 word"),
  email: yup.string().email("* Invalid email type"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      passwordRegEx,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  cpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

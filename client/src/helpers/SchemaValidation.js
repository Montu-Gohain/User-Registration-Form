import * as yup from "yup";

export const InitialInput = {
  name: "",
  dobOrAge: "",
  sex: "",
  mobile_no: null,
  emergency_contact_no: null,
  id_type: null,
  issued_id: null,
};
export const testSchema = yup.object().shape({
  issue_id_type: yup.mixed().oneOf(["Adhar", "PAN"]),
  issue_id: yup.string().when("issue_id_type", {
    is: "Adhar",
    then: yup.string().matches(/^\d{12}$/, "Must be a 12-digit numeric string"),
    otherwise: yup
      .string()
      .matches(/^[A-Za-z0-9]{10}$/, "Must be a 10-digit alphanumeric string"),
  }),
});

export const UserSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name field can not be empty"),
    dobOrAge: yup.string().required("This field is required."),
    sex: yup.string().required("This field is required"),
    mobile_no: yup
      .string()
      .nullable()
      .test("is-mobile-no", "Invalid mobile number.", function (value) {
        if (value !== null) {
          const mobileNoRegExp = /^[6-9]\d{9}$/;
          return mobileNoRegExp.test(value);
        }
        return true;
      }),
    emergency_contact_no: yup
      .string()
      .nullable()
      .test("is-mobile-no", "Invalid mobile number.", function (value) {
        if (value !== null) {
          const mobileNoRegExp = /^[6-9]\d{9}$/;
          return mobileNoRegExp.test(value);
        }
        return true;
      }),
    // id_type: yup.mixed().oneOf(["Adhar", "PAN"]),
    id_type: yup.string().nullable(),
    issued_id: yup
      .string()
      .nullable()
      .test("id-type-test", "Invalid PAN", function (value) {
        if (this.parent.id_type === "PAN") {
          const PAN_REGEX = /^[A-Za-z0-9]{10}$/;
          return PAN_REGEX.test(value);
        }
        return true;
      })
      .test("id-type-test2", "Invalid Adhar Number", function (value) {
        if (this.parent.id_type === "Adhar") {
          const Adhar_regex = /^\d{12}$/;
          return Adhar_regex.test(value);
        }
        return true;
      }),
  })
  .required();

// .test("dateTest", "Select right month", function (value) {
//   return this.parent.referenceMonth !== `${new Date(value).getMonth()}`;
// })

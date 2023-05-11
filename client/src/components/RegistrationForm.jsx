import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { InitialInput, UserSchema } from "../helpers/SchemaValidation";

const POST_URL = "http://localhost:6060/api/users";

const RegistrationForm = () => {
  // Handing input values , errors and handlesubmit using useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserSchema),
    defaultValues: InitialInput,
  });

  function Get_age(dob) {
    if (dob.length > 3) {
      let age = dob.split("/");
      return new Date().getUTCFullYear() - age[2];
    } else return parseInt(dob);
  }
  function formSubmit(data, e) {
    e.preventDefault();
    console.log(errors);
    axios
      .post(POST_URL, {
        ...data,
        dobOrAge: Get_age(data.dobOrAge),
      })
      .then((res) => console.log(res))
      .then(reset())
      .catch((err) => console.log(err.message));
  }
  function clear_form_inputs() {
    reset();
  }

  return (
    <div className="form-container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <section id="first_section">
          <h3>Personal Details</h3>
          <div className="input-container">
            <div id="top-row">
              <label htmlFor="name">
                Name
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="text"
                {...register("name")}
              />
              {errors?.name && <span>{errors.name.message}</span>}
              <label htmlFor="dob">
                Date of Birth or Age <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="dob"
                placeholder="DD/MM/YYYY or Age in Years"
                className="text"
                {...register("dobOrAge")}
              />
              {errors?.dobOrAge && <span>{errors.dobOrAge.message}</span>}
              <label htmlFor="sex">
                sex <span style={{ color: "red" }}>*</span>
              </label>
              <select name="sex" id="sex_selector" {...register("sex")}>
                <option value="">Enter Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              {errors?.sex && <span>{errors.sex.message}</span>}
            </div>
            <div id="bottom-row">
              <label htmlFor="mobile_no">Mobile</label>
              <input
                type="text"
                name="mobile_no"
                placeholder="Enter Mobile"
                {...register("mobile_no")}
              />
              {errors?.mobile_no && <span>{errors.mobile_no.message}</span>}
              <label htmlFor="govt_id_type">Govt Issued ID</label>
              <select
                name="govt_id_type"
                id="govt_id_type"
                {...register("id_type")}
              >
                <option value=""></option>
                <option value="Adhar">Adhar</option>
                <option value="PAN">PAN</option>
              </select>
              <input
                type="text"
                placeholder="Enter GOVT ID"
                {...register("issued_id")}
              />
              {errors?.issued_id && <span>{errors.issued_id.message}</span>}
            </div>
          </div>
        </section>
        <section id="second_section">
          <h3>Contact Details</h3>
          <div id="top-row">
            <label htmlFor="guardian_details">Guardian Details</label>
            <select
              name="guardian_details"
              id="guiardian_details"
              {...register("gurdian_relation")}
            >
              <option value="">Enter Label</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Relative">Relatives</option>
            </select>
            <input
              type="text"
              placeholder="Enter Guardian Name"
              name="guardian_name"
              {...register("gurdian_name")}
            />
            <label htmlFor="email_id">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email_id"
              {...register("email")}
            />
            <label htmlFor="ec_no">Emergency Contact Number</label>
            <input
              type="text"
              placeholder="Enter Emergency No"
              name="ec_no"
              {...register("emergency_contact_no")}
            />
            {errors?.emergency_contact_no && (
              <span>{errors.emergency_contact_no.message}</span>
            )}
          </div>
        </section>
        <section id="third_section">
          <h3>Address Details</h3>
          <div id="top-row">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              {...register("address")}
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="Enter State"
              name="state"
              {...register("state")}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="Enter City/town/village"
              {...register("city")}
            />
          </div>
          <div id="bottom-row">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              {...register("country")}
            />
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              placeholder="Enter Pincode"
              name="pincode"
              {...register("pincode")}
            />
          </div>
        </section>
        <section id="fourth_section">
          <h3>Other Details</h3>
          <div className="input-container">
            <div id="top-row">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                name="occupation"
                placeholder="Enter Occupation"
                {...register("occupation")}
              />
              <label htmlFor="religion">Religion</label>
              <input
                type="text"
                name="religion"
                placeholder="Enter Religion"
                {...register("religion")}
              />
              <label htmlFor="marital_stat">Marital Status</label>
              <select
                name="marital_stat"
                id="m_stat"
                {...register("marital_status")}
              >
                <option value=""></option>
                <option value="Married">Married</option>
                <option value="Single">Single</option>
              </select>
            </div>
            <div id="bottom-row">
              <label htmlFor="blood_group">Blood Group</label>
              <select
                name="blood_group"
                id="b_group"
                {...register("blood_group")}
              >
                <option value=""></option>
                <option value="A+">A +</option>
                <option value="A-">A -</option>
                <option value="O+">O +</option>
                <option value="O-">O -</option>
                <option value="B+">B +</option>
                <option value="B-">B -</option>
                <option value="AB+">AB +</option>
                <option value="AB-">AB -</option>
              </select>
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                name="nationality"
                placeholder="Enter Nationality"
                {...register("nationality")}
              />
            </div>
          </div>
        </section>
        <div className="button-container">
          <button onClick={clear_form_inputs} id="cancel-btn">
            CANCEL
          </button>
          <button type="submit" id="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

const POST_URL = "http://localhost:6060/api/users";

const RegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: null,
      dobOrAge: null,
      sex: null,
      mobile_no: null,
      id_type: null,
      issued_id: null,
      gurdian_relation: null,
      gurdian_name: null,
      email: null,
      emergency_contact_no: null,
      address: null,
      state: null,
      city: null,
      country: null,
      pincode: null,
      occupation: null,
      religion: null,
      marital_status: null,
      nationality: null,
      blood_group: null,
    },
  });
  function ISO_Date(dob) {
    return dob.split("/").reverse().join("-");
  }
  function formSubmit(data, e) {
    e.preventDefault();
    // console.log("Form submission successful.", {
    //   ...data,
    //   dobOrAge: ISO_Date(data.dobOrAge),
    // });
    axios
      .post(POST_URL, {
        ...data,
        dobOrAge: ISO_Date(data.dobOrAge),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    reset();
  }
  function clear_form_inputs() {
    reset();
  }
  return (
    <div className="form-container">
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
              <label htmlFor="sex">
                sex <span style={{ color: "red" }}>*</span>
              </label>
              <select name="sex" id="sex_selector" {...register("sex")}>
                <option value="">Enter Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div id="bottom-row">
              <label htmlFor="mobile_no">Mobile</label>
              <input
                type="text"
                name="mobile_no"
                placeholder="Enter Mobile"
                {...register("mobile_no")}
              />
              <label htmlFor="govt_id_type">Govt Issued ID</label>
              <select
                name="govt_id_type"
                id="govt_id_type"
                {...register("id_type")}
              >
                <option value="">ID Type</option>
                <option value="Adhar">Adhar</option>
                <option value="PAN">PAN</option>
              </select>
              <input
                type="text"
                placeholder="Enter GOVT ID"
                {...register("issued_id")}
              />
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

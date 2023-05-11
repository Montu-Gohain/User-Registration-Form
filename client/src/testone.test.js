import { testSchema } from "./helpers/SchemaValidation";
import { describe, test, expect } from "vitest";

describe("UserSchema validation", () => {
  test("validates input with Adhar ID", () => {
    const input = {
      name: "John Doe",
      dobOrAge: "01/01/1980",
      sex: "Male",
      mobile_no: "9876543210",
      emergency_contact_no: null,
      issue_id_type: "Adhar",
      issue_id: "123456789012",
    };
    expect(testSchema.isValidSync(input)).toBe(true);
  });

  test("validates input with PAN ID", () => {
    const input = {
      name: "Jane Doe",
      dobOrAge: "01/01/1990",
      sex: "Female",
      mobile_no: "9876543210",
      emergency_contact_no: null,
      issue_id_type: "PAN",
      issue_id: "ABCDE1234F",
    };
    expect(testSchema.isValidSync(input)).toBe(true);
  });

  test("validates input with invalid Adhar ID", () => {
    const input = {
      name: "John Doe",
      dobOrAge: "01/01/1980",
      sex: "Male",
      mobile_no: "9876543210",
      emergency_contact_no: null,
      issue_id_type: "Adhar",
      issue_id: "1234567890",
    };
    expect(() => testSchema.validateSync(input)).toThrow(
      "Aadhaar number must be 12 digits"
    );
  });

  test("validates input with invalid PAN ID", () => {
    const input = {
      name: "Jane Doe",
      dobOrAge: "01/01/1990",
      sex: "Female",
      mobile_no: "9876543210",
      emergency_contact_no: null,
      issue_id_type: "PAN",
      issue_id: "ABCD1234FG",
    };
    expect(() => testSchema.validateSync(input)).toThrow(
      "PAN number must be in the format ABCDE1234F"
    );
  });
});

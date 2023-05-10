const createHttpError = require("http-errors");
const User = require("../model/UserModel");

const Register_user = async (req, res, next) => {
  const payload = req.body;
  try {
    const new_user = await User.create(payload);

    if (!new_user) {
      return next(
        createHttpError.BadRequest(
          "Something went wrong.please try again later"
        )
      );
    }
    res.status(201).send({
      msg: "User Registered successfully.",
      data: new_user,
    });
  } catch (error) {
    console.log(error);
    return next(createHttpError.BadRequest(error.message));
  }
};
const Get_All_Users = async (req, res, next) => {
  try {
    const all_users = await User.find();
    if (!all_users) {
      return next(
        createHttpError.NotFound("No user found,please check again later")
      );
    }
    res.status(200).send({
      success: true,
      data: all_users,
    });
  } catch (error) {
    console.log(error);
    return next(
      createHttpError.NotFound("Something went wrong, please try again later.")
    );
  }
};

module.exports = { Register_user, Get_All_Users };

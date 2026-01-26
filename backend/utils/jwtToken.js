export const jwtToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  const option = {
    expires: new Date(Date.now() + process.env.EXPIRE_COOKIES * 60 * 1000),
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  };

  res.cookie("token", token, option);

  return res.status(statusCode).json({
    status: "success",
    user,
    token,
  });
};

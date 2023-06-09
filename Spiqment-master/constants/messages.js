const MESSAGES = {
  SERVER_ERROR: "Server error",
  INVALID_AUTH_TOKEN: "Invalid auth token",
  INVALID_REFRESH_TOKEN: "Invalid refresh token",
  INSUFFICIENT_PRIVILEGE: "Insufficient privilege",
  EMAIL_ALREADY_REGISTERED: "This email is already registered",
  INCORRECT_PASSWORD: "Incorrect password",
  AGE_REQUIRED: "\"Age\" is not allowed to be empty",
  NEGATIVE_AGE: "Age can not be negative",
  INCORRECT_AGE_MIN: "Age must be greater than 12 years",
  INCORRECT_AGE_MAX: "Age must be less than 101 years",
  LOGIN_SUCCESS: "Logged in successfully",
  REGISTRATION_SUCCESS: "User has been registered successfully",
  USER_CREATION_SUCCESS: "User created successfully",
  LOGIN_REQUIRED: "Login to view resource",
  NOT_FOUND: "Not found",
  UPDATED: "Updated",
  USER_NOT_FOUND: "User not found",
  USER_UPDATED: "User updated successfully",
  DELETED: "Deleted",
  USER_DELETED: "User deleted successfully",
  PRODUCT_CREATION_SUCCESS: "Product has been created successfully.",
  PRODUCT_CREATION_FAILURE: "Product creation has been failed",
  PRODUCT_NOT_FOUND: "Product not found",
  PRODUCT_RETRIEVE_ERROR: "Error retrieving product data",
  PRODUCT_UPDATION_SUCCESS: "Product successfully updated",
  PRODUCT_UPDATION_FAILURE: "Product failed to update",
  PRODUCT_DELETION_SUCCESS: "Product deleted successfully",
  PRODUCT_DELETION_FAILURE: "Product failed to delete",
  SUCCESS: "Success",
  LOGOUT_SUCCESS: "Logged out successfully",
  ORDER_CREATION_SUCCESS: "Order placed successfully",
  ORDER_CANCEL_SUCCESS: "Order canceled successfully",
};

module.exports = MESSAGES;

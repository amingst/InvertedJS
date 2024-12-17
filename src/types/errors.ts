export enum ModifyResponseErrorType {
	NoError = 0,
	UnknownError = -1,
}

/**
 * Represents the possible error types returned when attempting to create a new user.
 */
export enum CreateUserResponseErrorType {
	/**
	 * No error occurred; the operation was successful.
	 */
	NoError = 0,

	/**
	 * An unknown error occurred during the operation.
	 */
	UnknownError = -1,

	/**
	 * The specified username is already taken.
	 */
	UserNameTaken = 1,

	/**
	 * The specified email address is already in use.
	 */
	EmailTaken = 2,
}

/**
 * Represents the possible error types returned when attempting to change the current user's profile image.
 */
export enum ChangeOwnProfileImageResponseErrorType {
	/**
	 * No error occurred; the operation was successful.
	 */
	NoError = 0,

	/**
	 * An unknown error occurred during the operation.
	 */
	UnknownError = -1,

	/**
	 * The provided profile image format is invalid or unsupported.
	 */
	BadFormat = 1,
}

/**
 * Represents the possible error types returned when attempting to change the current user's password.
 */
export enum ChangeOwnPasswordResponseErrorType {
	/**
	 * No error occurred; the operation was successful.
	 */
	NoError = 0,

	/**
	 * An unknown error occurred during the operation.
	 */
	UnknownError = -1,

	/**
	 * The provided old password is incorrect.
	 */
	BadOldPassword = 1,

	/**
	 * The new password provided is invalid or does not meet the required criteria.
	 */
	BadNewPassword = 2,
}

/**
 * Represents the possible error types returned when attempting to change another user's profile image.
 */
export enum ChangeOtherProfileImageResponseErrorType {
	/**
	 * No error occurred; the operation was successful.
	 */
	NoError = 0,

	/**
	 * An unknown error occurred during the operation.
	 */
	UnknownError = -1,

	/**
	 * The specified user could not be found.
	 */
	UserNotFound = 1,

	/**
	 * The provided profile image format is invalid or unsupported.
	 */
	BadFormat = 2,
}

/**
 * Represents the possible error types returned when attempting to change another user's password.
 */
export enum ChangeOtherPasswordResponseErrorType {
	/**
	 * No error occurred; the operation was successful.
	 */
	NoError = 0,

	/**
	 * An unknown error occurred during the operation.
	 */
	UnknownError = -1,

	/**
	 * The specified user could not be found.
	 */
	UserNotFound = 1,

	/**
	 * The new password provided is invalid or does not meet the required criteria.
	 */
	BadNewPassword = 2,
}

export interface UserInfoInterface {
	access_token: string;
	// email: string;
	// role: string;
	// profilePicture: string;
	// userName: string;
	// phoneNumber: string;
}

export interface UserContextInterface {
	userInfo: Partial<UserInfoInterface>;
	jwt: string;
	setJwt: (val: string) => void;
	setUserInfo: (val: UserInfoInterface) => void;
	error: string;
	setError: (val: string) => void;
	pageToDisplay: string;
	setPageToDisplay: (val: string) => void;
	logOut: () => void;
	logIn: (details: any) => Promise<void>;
}
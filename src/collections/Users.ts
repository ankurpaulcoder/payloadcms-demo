import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "email",
	},
	access: {
		read: () => true,
	},
	fields: [
		// Email added by default
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "phone",
			type: "number",
			required: true,
		},
	],
};

export default Users;

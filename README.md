# React Role-Based Authentication App

This project is a role-based authentication app built using React. It includes an admin dashboard and an employee dashboard with authentication and role management.

## Features

- **Role-Based Authentication**: 
  - Admin (`admin@me.com`, password: `123`) and employee roles.
  - Different dashboards for admin and employees.
- **Persistent Login**: Uses `localStorage` to retain login status.
- **Custom Authentication Context**: Provides and manages user authentication data across the app.
- **Clean Component Structure**: Separate components for login and dashboards.

## How It Works

### `App.js`
- Manages the authentication state and routes users to the appropriate dashboard.
- Uses the `useEffect` hook to retrieve the logged-in user's data from `localStorage` on page load.

### `AuthContext`
- Provides authentication data globally using React's `Context` API.

### Login Component
- Handles user login with a form.
- Validates credentials for the admin user or matches credentials from the `AuthContext` for employees.

### Dashboards
- **AdminDashboard**: For users with the `admin` role.
- **EmployeeDashboard**: For users with the `employee` role, displays user-specific data.

## Folder Structure

\`\`\`
src/
├── components/
│   ├── Auth/
│   │   └── Login.js
│   ├── Dashboard/
│   │   ├── AdminDashboard.js
│   │   └── EmployeeDashboard.js
├── context/
│   └── AuthProvider.js
├── App.js
└── index.js
\`\`\`

## How It Works

### \`App.js\`
- Manages the authentication state and routes users to the appropriate dashboard.
- Uses the \`useEffect\` hook to retrieve the logged-in user's data from \`localStorage\` on page load.

### \`AuthContext\`
- Provides authentication data globally using React's \`Context\` API.

### Login Component
- Handles user login with a form.
- Validates credentials for the admin user or matches credentials from the \`AuthContext\` for employees.

### Dashboards
- **AdminDashboard**: For users with the \`admin\` role.
- **EmployeeDashboard**: For users with the \`employee\` role, displays user-specific data.

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm start
   \`\`\`

## Usage

1. Start the app.
2. Login as:
   - **Admin**:
     - Email: \`admin@me.com\`
     - Password: \`123\`
   - **Employee**: Use email and password combinations stored in \`AuthContext\` data.

3. Explore the admin or employee dashboard.

## Customization

- Update user data in the \`AuthProvider.js\` file.
- Modify the dashboard components (\`AdminDashboard.js\` or \`EmployeeDashboard.js\`) to include additional functionality or display more information.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

## License

This project is licensed under the MIT License. See the LICENSE file for details." > README.md



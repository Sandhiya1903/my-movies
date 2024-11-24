"My movies -  application is a comprehensive platform designed to manage users, movies, and genres with a fully integrated Role-Based Access Control (RBAC) system.It features secure and efficient user management,
dynamic permissions, and a scalable design tailored for administrators. By blending creativity with a strong technical foundation, I ensured the application is intuitive and secure, fulfilling real-world
requirements for managing access and permissions effectively."
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Set Up Information:
step 1: npm i (frontend folder)
step 2: npm i (overall folder)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
create account become an admin by changing your isadmin method to true -->(isAdmin:"True") , you can view the admin dashboard and perform all CRUD operations. 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[watch video(https://github.com/user-attachments/assets/e3383413-f74a-4e32-8f67-75dae660a969)](https://github.com/user-attachments/assets/e3383413-f74a-4e32-8f67-75dae660a969)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Tech Stack:
Frontend: 
>React, Redux Toolkit (if state management is extensive).
>Styling: Tailwind CSS / Material-UI.

Backend: 
>MongoDb ,Node JS,Express Js
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. User Management
Registration and Login:
>Users can register and log in using secure endpoints, with passwords hashed using bcrypt for security.
>Tokens are generated using JWT to authenticate and authorize users.
   
User Reviews and Ratings:
>Users can leave reviews and ratings for movies.
>Each review is tied to a user and a movie, ensuring accountability.
                         
Middleware Authentication:
>Every request is validated using JWT tokens to ensure secure access.
>Unauthorized or invalid requests are blocked at the middleware level.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                     
2. Role Management

Admin vs User Access:

Admin Capabilities:

>Admins have full access to manage movies (create, update, delete, read) and genres.
>Admins can also view and manage user accounts, including activating/deactivating them.
   
User Capabilities:

>Users can only view movies, access movie details, and leave reviews and ratings.

Middleware Authorization:

>Roles (User/Admin) are checked at the middleware level to ensure appropriate access.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3. Dynamic Permissions
   
Permissions dynamically control access to features based on roles:

Admin:

>CRUD operations on movies and genres.
>Manage user accounts.
   
User:

>View movies and genres.
>Leave reviews and ratings.
>Permissions are enforced both at the backend (via middleware) and the frontend (via conditional rendering).
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4. Custom API Simulation:

Implemented custom API endpoints for CRUD operations:

Movies API:

>Create, Read, Update, Delete movies.
>Endpoints secured with middleware to allow only Admin access.

Genres API:

>Manage genres dynamically.

User API:

>Manage user profiles and statuses.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Security Implementation:

Password Security:

>Passwords are hashed using bcrypt to protect user credentials.

JWT Tokens:

>Tokens are issued upon login and validated for every API request.
>Tokens store user roles to enforce RBAC seamlessly.

Middleware:

>Centralized middleware ensures authentication and authorization for all sensitive endpoints.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Admin Dashboard:
![image](https://github.com/user-attachments/assets/4f2958ad-47f8-4843-b63e-27eb59d1d35c)

>The Admin Dashboard offers real-time insights into users, comments, and movies.
>It enables full CRUD operations (Create, Read, Update, Delete) for movies, genres, and comments.
>Admins can view the top content and manage comments efficiently.
>A sidebar allows easy navigation for creating and updating content.
>Profile and logout options are provided for seamless user management

User Management:
Secure login, registration, and user-specific review/rating functionalities.

Role Management:
Strict differentiation between admin and user capabilities, ensuring robust access control.

Dynamic Permissions:
Role-based permissions enforced both at backend and frontend, allowing flexibility and security.

Custom API Simulation:
Simulated and tested CRUD operations to ensure smooth functionality across all features.

This implementation highlights my expertise in designing secure, scalable, and user-friendly systems, while adhering to modern development standards.







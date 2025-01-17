<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# Restaurant Ordering App Project

## Objective

Develop a scalable mobile app for restaurant customers to place orders for pickup and delivery, customize items, and manage their payments. The app will support multiple restaurants, with flexible customization options for each item.

---

## Key Features

### 1. User Authentication & Profile Management

- Users can sign up and log in using Supabase authentication.
- Profile information includes:
  - Name
  - Email
  - Phone number
  - Address (zip code, state, city)
- Ability to manage and update account details.

### 2. Menu Browsing & Item Customization

- Users can browse categorized items (e.g., Appetizers, Main Courses, Drinks).
- Items are customizable, allowing users to select options like toppings, ingredients, or preparation preferences.
- **Example:** For a burger, users can select toppings like tomato, ketchup, or cheese.
- The item customization feature is generic and supports any restaurant type (e.g., burger joints, pizzerias, coffee shops).

### 3. Order Management

Users can:

- Place orders for pickup or delivery.
- Track the status of their orders in real-time (e.g., pending, confirmed, preparing, out for delivery).
- View their order history and easily reorder past items.

### 4. Payment Management

Users can:

- Add and manage multiple payment methods.
- Save payment methods for future transactions.
- Make payments using a simulation (no need to implement real payments).
- View payment history associated with their orders.

### 5. Order Tracking & Notifications

- Real-time updates on order status (e.g., order confirmed, preparing, out for delivery).
- Users can track delivery status.
- Notifications for significant order milestones (e.g., order confirmed, out for delivery).

### 6. Scalability & Flexibility

- The app is designed to be used by any restaurant, not limited to a single type (e.g., burgers).
- A robust, scalable database design will allow easy addition of new restaurants, categories, and customizable items.
- Multi-restaurant support ensures that multiple locations or businesses can operate using the same platform, each with unique menus and item customization options.

---

## Technologies to Use

- **Supabase PostgresSQL**: For database management.
- **Supabase Authentication**: For user management and authentication.
- **Supabase Storage**: To manage media storage, such as restaurant images, item images, etc.
- **Supabase Functions**: For running backend logic (serverless functions) like handling order processing or payment events.
- **React Native (Expo)**: For cross-platform mobile app development.
- **TypeScript**: For static typing and better code maintainability.

---

## Development Tools & Libraries

- **zustand**: For managing global state in a clean and performant way.
- **@tanstack/react-query**: For managing data fetching, caching, and synchronization with the server.
- **expo-notifications**: For sending order status updates and delivery alerts.
- **react-hook-form**: For handling form inputs and submission.
- **zod**: For schema validation and type-safe validation logic.
- **@hookform/resolvers**: To integrate Zod with React Hook Form for form validation.
- **axios**: For making HTTP requests to the backend API, handling responses, and managing request errors.

---

### Code Standards

Ensure that all code follows our company’s standards, including:

- Clean, modular code structure.
- Proper use of TypeScript for type safety.
- Well-documented code, with clear comments where necessary.
- Consistent use of React Query or Zustand for state management.
- Responsive design and good UX principles in the UI.

---

Happy coding! This project will challenge your skills in full-stack development, and we look forward to seeing how you solve the challenges ahead.
>>>>>>> origin/main

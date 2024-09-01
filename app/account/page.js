import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

async function page() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];
  return <div>Welcome, {firstName}</div>;
}

export default page;

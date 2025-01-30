import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export default withAuth(async function middleware(req) {
  const token = await getToken({ req });
  console.log(token);
});

export const config = {
  matcher: ["/dashboad/:path", "/editor/:path", "/login", "/register"],
};

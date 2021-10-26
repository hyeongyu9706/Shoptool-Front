import Main from "../Main.js";


const pages = [
    {
        path: "/",
        component: Main,
    }
]

function page(role) {
    return pages.filter((r) => {
      return !r.role || r.role === role;
    });
}
  
  export default page;
  
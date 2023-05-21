import HomePage from "../pages/Home";
import CustomersPage from "../pages/Customers";
import PricingPage from "../pages/Pricing";
import ResourcesPage from "../pages/Resources";

export const navbarData = [
  {
    id: 1,
    path: "/home",
    element: HomePage,
    name: "Product",
  },
  {
    id: 2,
    path: "/customers",
    element: CustomersPage,
    name: "Customers",
  },
  {
    id:3,
    path: "/pricing",
    element: PricingPage,
    name: "Pricing",
  },
  {
    id:4,
    path: "/resources",
    element: ResourcesPage,
    name: "Resources",
  }
];
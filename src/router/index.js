import Vue from "vue";
import VueRouter from "vue-router";
// หน้าต่างๆ
import Home from "../views/Home";
import Products from "../views/Products";
import Contactus from "../views/Contactus";
import AddProduct from "../views/AddProduct";
import EditProduct from "../views/EditProduct";
import ManageProduct from "../views/ManageProduct";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: Products
  },
  {
    path: "/contactus",
    name: "Contactus",
    component: Contactus
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct
  },
  {
    path: "/manage-product",
    name: "ManageProduct",
    component: ManageProduct
  },
  {
    path: "/edit-product",
    name: "EditProduct",
    component: EditProduct
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;

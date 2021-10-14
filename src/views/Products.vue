<template>
  <div>
    <Header />
    <ProductCom />
    <Footer />
  </div>
</template>


<script>
// นำคอมโพมแนนลูก เข้าามา (import) 3 คอมโพแนน header, Content, Footer
//import Header FROM "./components/Header"
import Header from "../components/Header";
import ProductCom from "../components/ProductCom";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Header,
    ProductCom,
    Footer,
  },
};
</script>



<style>
</style>
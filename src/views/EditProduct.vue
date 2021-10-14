<template>
  <div>
    <Header />
    <EditProductCom />
    <Footer />
  </div>
</template>


<script>
// นำคอมโพมแนนลูก เข้าามา (import) 3 คอมโพแนน header, Content, Footer
//import Header FROM "./components/Header"
import Header from "../components/Header";
import EditProductCom from "../components/EditProductCom";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Header,
    EditProductCom,
    Footer,
  },
};
</script>



<style>
</style>
<template>
  <div>
    <Header />
    <ManageProductCom />
    <Footer />
  </div>
</template>


<script>
// นำคอมโพมแนนลูก เข้าามา (import) 3 คอมโพแนน header, Content, Footer
//import Header FROM "./components/Header"
import Header from "../components/Header";
import ManageProductCom from "../components/ManageProductCom";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Header,
    ManageProductCom,
    Footer,
  },
};
</script>



<style>
</style>
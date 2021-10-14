<template>
  <div>
    <Header />
    <AddProductCom />
    <Footer />
  </div>
</template>


<script>
// นำคอมโพมแนนลูก เข้าามา (import) 3 คอมโพแนน header, Content, Footer
//import Header FROM "./components/Header"
import Header from "../components/Header";
import AddProductCom from "../components/AddProductCom";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Header,
    AddProductCom,
    Footer,
  },
};
</script>



<style>
</style>
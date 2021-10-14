<template>
  <div>
    <Header />
    <HomeCom />
    <Footer />
  </div>
</template>


<script>
// นำคอมโพมแนนลูก เข้าามา (import) 3 คอมโพแนน header, Content, Footer
//import Header FROM "./components/Header"
import Header from "../components/Header";
import HomeCom from "../components/HomeCom";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Header,
    HomeCom,
    Footer,
  },
};
</script>



<style>
</style>
<template>
  <div>
    <Header />
    <Contact />
    <Footer />
  </div>
</template>


<script>
// นำคอมโพมแนนลูก เข้าามา (import) 3 คอมโพแนน header, Content, Footer
//import Header FROM "./components/Header"
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Contact,
    Footer,
  },
};
</script>



<style  scoped>
</style>
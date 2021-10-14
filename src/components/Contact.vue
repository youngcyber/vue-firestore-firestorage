<template>
  <div>
    <h1>{{ profiles.company_name }}</h1>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      profiles: {
        company_name: "",
      },
    };
  },
  mounted() {
    db.collection("contactus")
      .doc("profile")
      .onSnapshot((doc) => {
        this.profiles.company_name = doc.data().companey_name;
      });
  },
};
</script>
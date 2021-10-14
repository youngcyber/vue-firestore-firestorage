<template>
  <div>
    <div class="card">
      <h3>รายการสินค้า</h3>
    </div>
    <!--- เริ่ม --->
    <div class="card" v-for="product in productData" :key="product.id">
      <h3>{{ product.name }}</h3>
      <div class="row">
        <div class="column1">
          <img class="img" :src="product.photo" />
        </div>
        <div class="column2">
          <p>{{ product.detail }}</p>
          <p>ราคา {{ product.price }}</p>
        </div>
      </div>
    </div>

    <!---จบ -->
  </div>
</template>


<script>
import { db } from "../firebase";

export default {
  props: {
    products: Array,
  },
  data() {
    return {
      productData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      db.collection("products").onSnapshot((snapshotChange) => {
        snapshotChange.forEach((doc) => {
          this.productData.push({
            id: doc.id,
            name: doc.data().name,
            detail: doc.data().detail,
            price: doc.data().price,
            photo: doc.data().photo,
            isRecommend: doc.data().isRecommend,
          });
        });
      });
      console.log(this.productData);
    },
    loadData2() {
      this.productData = [];
      db.collection("productData")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.productData.push({
              id: doc.id,
              name: doc.data().name,
              detail: doc.data().detail,
              price: doc.data().price,
              photo: doc.data().photo,
              isRecommend: doc.data().isRecommend,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>


<style scoped>
</style>
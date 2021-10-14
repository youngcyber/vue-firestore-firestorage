<template>
  <div>
    <!-- เริืิ่ม -->
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h3>3 รายการสินค้าแนะนำ</h3>
        </div>

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
      </div>
      <div class="rightcolumn">
        <!-- sidebar -->
        <SideBar />
        <!-- จบ sidebar -->
      </div>
    </div>
    <!-- จบ-->
  </div>
</template>


<script>
import SideBar from "./SideBar";
import { db } from "../firebase";
export default {
  components: {
    SideBar,
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
      const ref = db
        .collection("products")
        .where("isRecommand", "==", "true")
        .limit(3)
        .orderBy("price", "asc");
      ref.onSnapshot((snapshotChange) => {
        this.productData = [];
        this.product_total = snapshotChange.size;
        snapshotChange.forEach((doc) => {
          this.productData.push({
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            detail: doc.data().detail,
            photo: doc.data().photo,
          });
        });
      });
    },
  },
};
</script>


<style scoped>
</style>
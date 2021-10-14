<template>
  <div>
    <!-- เริืิ่ม -->
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h3>
            รายการสินค้า มีทั้งหมด {{ product_total }} รายการ
            <input type="button" @click="sort_desc()" value="ราคามากไปน้อย" />
            <input type="button" @click="sort_asc()" value="ราคาน้อยไปท่ก" />
          </h3>
          <div>
            ค้นหาสินค้า :
            <input
              type="text"
              v-model="search_text"
              style="margin-right: 10px"
            />
            <input
              type="button"
              value="ค้นหา"
              @click="searchData()"
              style="margin-right: 10px"
            />
            <input type="button" value="ล้างข้อมูล" @click="loadData()" />
          </div>
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
      product_total: 0,
      search_text: "",
      sort_price: "asc",
    };
  },
  mounted() {
    this.loadData();
    //this.numProduct();
  },
  methods: {
    loadData() {
      const ref = db.collection("products").orderBy("price", this.sort_price);
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
    searchData() {
      const ref = db
        .collection("products")
        .where("name", "==", this.search_text)
        .orderBy("price", this.sort_price);
      // .where("name", "isGreaterThanOrEqualTo", this.search_text)
      //.where("name", "isLessThan", this.search_text + "~");

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
    sort_asc() {
      this.sort_price = "asc";
      this.loadData();
    },
    sort_desc() {
      this.sort_price = "desc";
      this.loadData();
    },

    /*  numProduct() {
      const ref = db.collection("products");
      ref.get().then((data) => {
        this.product_total = data.size;
      });
    }, */
  },
};
</script>


<style scoped>
</style>
<template>
  <div>
    <div class="card">
      <h3>
        รายการสินค้า มีทั้งหมด {{ product_total }} รายการ
        <input
          type="button"
          value="เพิ่มสินค้าใหม่"
          @click="gotoAddProduct()"
        />
      </h3>
      <table class="foodmenu">
        <tr>
          <th style="width: 10%">รูปสินค้่า</th>
          <th style="width: 30%">ชื่อสินค้า</th>
          <th style="width: 10%">ราคา</th>
          <th style="width: 30%">รายละเอียด</th>
          <th style="width: 10%">สินค้่าแนะนำ</th>
          <th style="width: 30%">จัดการข้อมูล</th>
        </tr>
        <tr v-for="data in productData" :key="data.id">
          <td><img :src="data.photo" style="width: 120px; height: auto" /></td>
          <td>{{ data.name }}</td>
          <td>{{ data.price }}</td>
          <td>{{ data.detail }}</td>
          <td>
            <span v-if="data.isRecommand == 'true'">แนะนำ</span>
            <span v-else>ไม่แนะนำ</span>
          </td>
          <td>
            <input
              type="button"
              value="ลบ"
              @click="deleteProduct(data.id)"
              style="margin-right: 20px"
            />
            <input type="button" value="แก้ไข" @click="gotoEditProduct(data)" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      productData: [],
      product_total: 0,
    };
  },
  mounted() {
    this.loadData();
    //this.numProduct();
  },
  methods: {
    loadData() {
      const ref = db.collection("products");
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
            isRecommand: doc.data().isRecommand,
          });
        });
      });
    },
    gotoAddProduct() {
      this.$router.push({ name: "AddProduct" });
    },
    deleteProduct(id) {
      const ref = db.collection("products").doc(id);
      ref.delete();
    },
    gotoEditProduct(data) {
      this.$router.push({ name: "EditProduct", params: { product: data } });
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
.foodmenu {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
}

.foodmenu td,
.foodmenu th {
  border: 1px solid #ddd;
  padding: 8px;
}

.foodmenu tr:nth-child(even) {
  background-color: #f2f2f2;
}
.foodmenu tr:hover {
  background-color: #ddd;
}
.foodmenu th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>
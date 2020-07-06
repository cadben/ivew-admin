<style>
.pageContro {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
}
.mark {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
.updateroom {
  position: fixed;
}
</style>
<template>
  <div class="rommTable">
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">修改</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <Page :total="40" size="small" class="pageContro" />

    <div class="mark" v-show="isUpdate"></div>
    <transition name="upShow">
      <updateroom v-show="isUpdate" @CloseAction="closeChildUpdate" />
    </transition>
  </div>
</template>
<script>
import expandRow from "./stu-expand.vue";
import updateroom from "../components/updateroom";
export default {
  components: { expandRow, updateroom },
  data() {
    return {
      isUpdate: false,
      columns: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "序号",
          key: "index"
        },
        {
          title: "楼栋",
          key: "name"
        },
        {
          title: "寝室号",
          key: "id"
        },
        {
          title: "人数",
          key: "num"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data: [],
      isLoadContent: true
    };
  },
  methods: {
    getRoom() {
      this.axios({
        method: "GET",
        url:
          "https://www.fastmock.site/mock/dc40487b929bef3c8a88ba701cc507af/vuedemo/api/dormitorys",
        data: {}
      }).then(res => {
        this.data = res.data;
        console.log(res.data);
      });
    },
    remove(index) {
      this.data.splice(index, 1);
    },
    show(index) {
      this.isUpdate = true;
    },
    closeChildUpdate() {
      this.isUpdate = false;
    }
  },

  created() {
    this.getRoom();
  }
};
</script>
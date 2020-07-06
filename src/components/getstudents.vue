<template>
  <div class="getstudents">
    <Table :columns="columns" :data="data" border height="720px"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "序号",
          key: "index",
          align: "center",
          width: 115
        },
        {
          title: "学号",
          key: "id",
          align: "center",
          width: 200
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          width: 200
        },
        {
          title: "班级",
          key: "p",
          align: "center",
          width: 200,
          filters: [
            {
              label: "软件工程171",
              value: 1
            },
            {
              label: "软件工程172",
              value: 2
            },
            {
              label: "软件工程173",
              value: 3
            },
            {
              label: "软件工程174",
              value: 4
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.p == "软件工程171";
            } else if (value === 2) {
              return row.p == "软件工程172";
            } else if (value === 3) {
              return row.p == "软件工程173";
            } else if (value === 4) {
              return row.p == "软件工程174";
            }
          }
        },
        {
          title: "寝室楼",
          key: "area",
          align: "center",
          width: 200
        },
        {
          title: "寝室号",
          key: "dor",
          align: "center",
          width: 200
        },
        {
          title: "三天体温",
          align: "center",
          children: [
            {
              title: "前天",
              key: "day1",
              align: "center",
              width: 200
            },
            {
              title: "昨天",
              key: "day2",
              align: "center",
              width: 200
            },
            {
              title: "今天",
              key: "day3",
              align: "center",
              width: 200,
              filters: [
                {
                  label: "异常温度(温度大于37.4)",
                  value: 1
                }
              ],
              filterMultiple: false,
              filterMethod(value, row) {
                if (value === 1) {
                  return row.day3 >= 37.2;
                }
              }
            }
          ]
        }
      ],
      data: []
    };
  },
  mounted() {
    // this.data = data;
    this.getStus();
  },
  methods: {
    getStus() {
      this.axios({
        url:
          "https://www.fastmock.site/mock/dc40487b929bef3c8a88ba701cc507af/vuedemo/api/stu",
        method: "GET",
        data: {}
      }).then(res => {
        this.data = res.data;
      });
    }
  }
};
</script>
<style>
.ivu-table-column-center {
  padding: 0px 0px !important;
}
</style>
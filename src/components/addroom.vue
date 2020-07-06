<template>
  <div class="addromm">
    <div class="UpdateTitle">
      <h2 class="Title">添加寝室信息</h2>
    </div>
    <Form :model="addForm" :label-width="100">
      <FormItem label="寝室序号">
        <Input v-model="addForm.index"></Input>
      </FormItem>
      <FormItem label="寝室人数">
        <Input v-model="addForm.num"></Input>
      </FormItem>
      <FormItem label="寝室楼栋">
        <!-- <Input v-model="updateForm.name"></Input> -->
        <Select v-model="addForm.name">
          <Option value="精思苑1号楼">精思苑1号楼</Option>
          <Option value="精思苑2号楼">精思苑2号楼</Option>
          <Option value="精思苑3号楼">精思苑3号楼</Option>
          <Option value="精思苑4号楼">精思苑4号楼</Option>
        </Select>
      </FormItem>

      <FormItem label="寝室号">
        <Input v-model="addForm.id"></Input>
      </FormItem>
      <Button type="primary" class="addbt">立即添加</Button>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addForm: {
        index: "",
        num: "",
        name: "",
        id: ""
      }
    };
  }
};
</script>
<style>
.addbt {
  width: 30%;
  height: 40px;
  margin: 20px 240px;
}
.UpdateTitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
.addromm {
  width: 700px;
  margin: 80px auto;
}
</style>
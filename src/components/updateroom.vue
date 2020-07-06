<template>
  <div class="updateroom">
    <div class="UpdateTitle">
      <h3 class="Title">修改寝室信息</h3>
      <Icon type="md-close" class="closeUpdate" @click="closeUpdate" />
    </div>
    <Form :model="updateForm" :label-width="100">
      <FormItem label="寝室序号">
        <Input v-model="updateForm.index" :disabled="true"></Input>
      </FormItem>
      <FormItem label="寝室人数">
        <Input v-model="updateForm.num" :disabled="true"></Input>
      </FormItem>
      <FormItem label="寝室楼栋">
        <!-- <Input v-model="updateForm.name"></Input> -->
        <Select v-model="updateForm.name">
          <Option value="精思苑1号楼">精思苑1号楼</Option>
          <Option value="精思苑2号楼">精思苑2号楼</Option>
          <Option value="精思苑3号楼">精思苑3号楼</Option>
          <Option value="精思苑4号楼">精思苑4号楼</Option>
        </Select>
      </FormItem>

      <FormItem label="寝室号">
        <Input v-model="updateForm.id"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">确定</Button>
        <Button style="margin-left: 8px" @click="closeUpdate">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      updateForm: {
        index: 1,
        name: "精思苑2号楼",
        id: "1-101",
        num: 4
      }
    };
  },
  methods: {
    closeUpdate() {
      this.$emit("CloseAction");
    }
  }
};
</script>
<style>
.UpdateTitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.updateroom {
  width: 500px;
  height: 400px;
  background: white;
  z-index: 999;
  padding: 20px;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 2px;
  box-shadow: 3px 1px 3px rgba(80, 79, 79, 0.3);
}
.closeUpdate {
  font-size: 23px;
  cursor: pointer;
}
</style>
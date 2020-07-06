<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1" @click.native="gotonext('/home')">
            <Icon type="ios-home" />
            <span>首页</span>
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-settings"></Icon>
              <span>管理</span>
            </template>
            <MenuItem name="2-1" @click.native="gotonext('/home/room')">
              <Icon type="ios-apps" />
              <span>查看寝室</span>
            </MenuItem>
            <MenuItem name="2-2" @click.native="gotonext('/home/addroom')">
              <Icon type="ios-add-circle" />
              <span>添加寝室</span>
            </MenuItem>
          </Submenu>

          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-contacts" />
              <span>人员管理</span>
            </template>
            <MenuItem name="3-1" @click.native="gotonext('/students/allstudents')">
              <Icon type="ios-contact" />
              <span>查看学生</span>
            </MenuItem>
            <MenuItem name="3-2" @click.native="gotonext('/students/addstu')">
              <Icon type="ios-add-circle" />
              <span>添加学生</span>
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
          <Breadcrumb>
            <BreadcrumbItem v-for="(item,index) in BreadBars " :key="index">{{item}}</BreadcrumbItem>
          </Breadcrumb>
          <div class="AvatarHeader">
            <Dropdown>
              <a href="javascript:void(0)">
                <Avatar icon="ios-person" />
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>个人中心</DropdownItem>
                <DropdownItem>退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content :style="{margin: '20px 0px', background: '#fff', minHeight: '260px'}">
          <transition name="slide-fade" mode="out-in">
            <keep-alive>
              <router-view />
            </keep-alive>
          </transition>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false,
      BreadBars: ["home"]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    gotonext(e) {
      if (this.$router.currentRoute.path == e) {
        return;
      } else {
        this.BreadBars = e.split("/").slice(1);
        this.$router.push(e);
      }
    }
  }
};
</script><style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.ivu-menu-item {
  padding-left: 24px !important;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-layout {
  height: 100%;
}
.ivu-layout-sider-children {
  height: 100%;
}
.AvatarHeader {
  margin-left: auto;
  margin-right: 20px;
}
</style>
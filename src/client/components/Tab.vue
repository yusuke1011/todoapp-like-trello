<template>
  <div class="app mx-auto">
    <div class="tabs">
      <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentId"/>
      <span class="tab-add-button">
        <button class="add-button" v-on:click="addTab">+</button>
      </span>
    </div>
    <div class="contents">
      <transition>
        <div class="item" :key="currentId">
          <div class="task-title">
            <h3>{{ current.content }}</h3>
          </div>
          <div class="test">
            <div class="js-list">
              <div class="list-contents">
                <div class="list">
                  <draggable class="task-list" :options="{group:'tasks'}" ref="sideLists">
                    <li class="task" v-for="task in tasks" :key="task.index">
                      <span class="task-name">{{task.taskName}}</span>
                      <span class="task-status">
                        <button
                          class="task-status-btn"
                          v-on:click="changeTaskStatus"
                        >{{task.status}}</button>
                      </span>
                    </li>
                  </draggable>
                </div>
                <div class="add-task" v-on:click="openAddTask">+カードを追加</div>
                <div v-if="addBtn">
                  <li class="add-task-title">
                    <input v-model="taskName" placeholder="タスクを入力">
                  </li>
                  <li class="add-task-btn">
                    <button class="btn btn-info" v-on:click="addTask">追加</button>
                  </li>
                </div>
              </div>
            </div>
            <div class="js-list">
              <div class="list-contents">
                <div class="list">
                  <draggable class="task-list" :options="{group:'tasks'}"></draggable>
                </div>
              </div>
            </div>
            <div class="js-list">
              <div class="list-contents">
                <div class="list">
                  <draggable class="task-list" :options="{group:'tasks'}"></draggable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <Contents/>
    </div>
    <MyModal v-on:close="closeModal" v-if="modal">
      <p>tab</p>
      <div>
        <input v-model="tab">
      </div>
      <p>contents</p>
      <div>
        <input v-model="contents">
      </div>
      <template slot="footer">
        <button v-on:click="doSend">送信</button>
      </template>
    </MyModal>
  </div>
</template>

<script>
import TabItem from "./TabItem.vue";
import Contents from "./Contents.vue";
import MyModal from "./MyModal.vue";
import draggable from "vuedraggable";

export default {
  components: {
    TabItem,
    Contents,
    MyModal,
    draggable
  },
  data() {
    return {
      currentId: 1,
      list: [],
      tasks: [],
      taskName: "",
      modal: false,
      addBtn: false,
      tab: "",
      contents: "",
      index: 1
    };
  },
  methods: {
    addTab: function() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    doSend() {
      if (this.tab.length > 0 && this.contents.length > 0) {
        let tempObj = {};
        tempObj.id = this.currentId;
        tempObj.label = this.tab;
        tempObj.content = this.contents;
        this.list.push(tempObj);
        this.tab = "";
        this.contents = "";
        this.currentId++;
        this.closeModal();
        console.log(this.currentId);
      } else {
        alert("必ず入力してください");
      }
    },
    openAddTask() {
      if (this.addBtn) {
        this.addBtn = false;
      } else {
        this.addBtn = true;
      }
    },
    addTask() {
      const task = {};
      task.index = this.index;
      task.taskName = this.taskName;
      task.status = "作業中";
      this.taskName = "";

      this.tasks.push(task);
    },
    changeTaskStatus() {
      if (this.addBtn) {
        this.addBtn = false;
      } else {
        this.addBtn = true;
      }
    }
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {};
    }
  }
};
</script>

<style scoped>
input {
  width: 240px;
  border-radius: 5px;
}
.app {
  width: 800px;
}
.js-list {
  margin: 0 4px;
  width: 240px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}
.js-list:first-child {
  margin-left: 8px;
}
.contents {
  position: relative;
  width: 800px;
  height: 1050px;
  background: rgb(240, 240, 240);
  box-shadow: 2px 2px 10px;
  border-radius: 10px;
}
.item {
  margin: 20px;
  width: 760px;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  max-height: 100%;
  position: relative;
  white-space: normal;
  transition: all 0.8s ease;
  display: inline-flex;
  flex-direction: column;
}
/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
.tabs {
  padding-left: 10px;
}
.add-button {
  background: rgba(33, 39, 98, 0);
  border: none;
  font-size: 20px;
}
.task {
  background: white;
  border-radius: 5px;
  min-height: 50px;
  width: 240px;
  line-height: 50px;
  margin-bottom: 8px;
  margin-right: 0px;
  padding-left: 5px;
  box-shadow: 2px 2px 10px;
}
.task:hover {
  opacity: 0.5;
  cursor: pointer;
  cursor: hand;
}
.add-task-title {
  margin-bottom: 8px;
}
.add-task {
  margin-top: 15px;
  margin-bottom: 4px;
  width: 240px;
  color: rgb(109, 109, 109);
  cursor: pointer;
  cursor: hand;
}
.add-task :hover {
  background: rgb(73, 73, 73);
}
.task-status {
  margin-left: auto;
  margin-right: 10px;
}
.task-status-btn {
  background: rgb(255, 202, 26);
  border-radius: 10px;
  height: 20px;
  line-height: 15px;
  font-size: 12px;
  border: none;
  color: white;
  margin-left: 140px;
}
.task-title {
  margin-bottom: 12px;
  display: block;
  flex-grow: 1;
  flex-wrap: wrap;
}
</style>
<template class="w-100 h-100">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light max-400-column">
            <router-link to="/index">
                <div class="navbar-brand">FocusOnYou 管理员后台</div>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link to="/index">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">首页</a>
                        </li>
                    </router-link>
                    <router-link to="/appeal">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">上诉管理</a>
                        </li>
                    </router-link>
                    <router-link to="/proposal">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">上诉反馈</a>
                        </li>
                    </router-link>
                    <router-link to="/takeout">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">周边外卖</a>
                        </li>
                    </router-link>
                    <router-link to="/treehold">
                        <li class="nav-item active">
                            <a class="nav-link" href="javascript:void(0)">树洞管理</a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </nav>
        <div class="text-center loading_bg" v-if="loading">
            <img class="loading" src="../../assets/loading.gif" alt="">
        </div>
        <div class="container mt-5">
            <input type="text" class="form-control w-100 text-center" v-model="title" placeholder="输入互动话题">
            <input type="text" disabled class="form-control w-100 text-center mt-4" v-model="link" placeholder="点击下方按钮生成树洞链接">
            <div class="text-center"> 
                <button class="btn btn-primary mt-4" @click="create_treehold()">生成树洞</button>
            </div>
            <h5 class="mt-5" v-if="all_tree">已创建的树洞</h5>
            <div class="has_tree w-100 mt-4">
                <div class="no_sj" v-if="all_tree.length == 0 && !loading">暂无树洞</div>
                <div class="card" v-for="i in all_tree">
                    <div class="card-header d-flex justify-content-between">
                        <div>{{ i.title }}</div>
                        <div>{{ i.create_time }}</div>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                        <a class="link" :href="'http://tree.yuntunwj.com/index.html?' + i.id">http://tree.yuntunwj.com/index.html?{{ i.id }}</a>
                        <footer class="blockquote-footer mt-3">操作者<cite title="Source Title">{{ i.operator }}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5"></div>
    </div>
</template>
<style lang="less">
  @import "./treehold.less";
</style>

<script>
export default {
    data() {
      return {
        loading: false,
        name: "",
        title: "",
        link: "",
        all_tree: "",
      }
    },
    created(){
        this.title = "";
        this.link = "";
        this.get_all_tree();
    },
    methods: {
        create_treehold(){
            this.loading = true;
            this.$post("/treehold", {"title": this.title}).then(mes => {
                this.link = "http://tree.yuntunwj.com/index.html?" + mes.id;
                this.loading = false;
                this.get_all_tree();
            }, mes => {
                alert(mes.data.message);
                this.loading = false;
            })
        },
        get_all_tree(){
            this.loading = true;
            this.$get("/tree_all").then(mes => {
                this.all_tree = mes;
                this.loading = false;
            })
        }
    }
}
</script>

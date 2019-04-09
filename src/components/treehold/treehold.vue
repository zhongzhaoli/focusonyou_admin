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
            <input type="text" class="form-control w-100 text-center" v-model="title" placeholder="输入推文标题">
            <input type="text" disabled class="form-control w-100 text-center mt-4" v-model="link" placeholder="点击下方按钮生成树洞链接">
            <div class="text-center"> 
                <button class="btn btn-primary mt-4" @click="create_treehold()">生成树洞</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        loading: false,
        name: "",
        title: "",
        link: "",
      }
    },
    created(){
        this.title = "";
        this.link = "";
    },
    methods: {
        create_treehold(){
            this.$post("/treehold", {"title": this.title}).then(mes => {
                this.link = "http://tree.yuntunwj.com/index.html?" + mes.id;
            }, mes => {
                alert(mes.data.message);
            })
        }
    }
}
</script>

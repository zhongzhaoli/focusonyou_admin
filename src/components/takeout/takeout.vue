<template class="w-100 h-100">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light max-400-column">
      <a class="navbar-brand" href="#">FocusOnYou 管理员后台</a>
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
          <li class="nav-item active">
            <a class="nav-link" href="javascript:void(0)">周边外卖</a>
          </li>
          </router-link>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">树洞管理</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="text-center loading_bg" v-if="loading">
      <img class="loading" src="../../assets/loading.gif" alt="">
    </div>
    <div class="container h-100 mt-5">
        <div class="upload_img w-100 d-flex align-items-center justify-content-center flex-column" @click="cover_upload()">
            <img src="../../assets/cra.png" alt="">
            <span>点击上传封面图</span>
            <div class="cover_img"></div>
        </div>
        <small class="form-text text-danger">{{ error_cover }}</small>
        <input type="file" class="hide" accept="image/jpg,image/jpeg,image/png" data-cover @change="cover_change($event.currentTarget)">
        <div class="form-group mt-4">
            <label for="exampleInputEmail1">商家名字</label>
            <input type="text" class="form-control" v-model="name" placeholder="商家名字">
            <small class="form-text text-danger">{{ error_name }}</small>
        </div>
        <div class="form-group mt-4">
            <label for="exampleInputEmail1">外卖开始时间</label>
            <input type="time" class="form-control" v-model="start_time" placeholder="外卖开始时间">
            <small class="form-text text-danger">{{ error_start_time }}</small>
        </div>
        <div class="form-group mt-4">
            <label for="exampleInputEmail1">外卖结束时间</label>
            <input type="time" class="form-control" v-model="end_time" placeholder="外卖结束时间">
            <small class="form-text text-danger">{{ error_end_time }}</small>
        </div>
        <div class="form-group mt-4">
            <label for="exampleInputEmail1">商家电话</label>
            <input type="phone" class="form-control" v-model="phone" placeholder="商家电话">
            <small class="form-text text-danger">{{ error_phone }}</small>
        </div>
        <div class="form-group mt-4">
            <label for="exampleInputEmail1">菜单</label>
            <div class="upload_img w-100 d-flex align-items-center justify-content-center flex-column menu_img_div" @click="menu_upload()">
                <img src="../../assets/cra.png" alt="">
                <span>点击上传菜单图</span>
                <div class="menu_img"></div>
            </div>         
        </div>
        <small class="form-text text-danger">{{ error_menu }}</small>
        <input type="file" class="hide" accept="image/jpg,image/jpeg,image/png" data-menu @change="menu_change($event.currentTarget)">
        <div class="w-100 d-flex justify-content-center upload_btn my-4">
            <button class="btn btn-primary" @click="takeout_upload()">上传</button>
        </div>
    </div>
  </div>
</template>
<style lang="less">
  @import "./takeout.less";

</style>
<script>
  export default {
    data() {
      return {
        mes: {},
        loading: false,
        cover: "",
        menu: "",
        name: "",
        start_time: "",
        end_time: "",
        phone: "",
        error_name: "",
        error_cover: "",
        error_menu: "",
        error_start_time: "",
        error_end_time: "",
        error_phone: "",
        loading: false,
      }
    },
    created() {
        this.init();
    },
    methods: {
        init(){
            this.name = "";
            this.start_time = "";
            this.end_time = "";
            this.phone = "";
        },
        error_init(){
            this.error_name = "";
            this.error_cover = "";
            this.error_menu = "",
            this.error_start_time = "";
            this.error_end_time = "";
            this.error_phone = ""
        },
        cover_upload(){
            $("[data-cover]")[0].click();
        },
        menu_upload(){
            $("[data-menu]")[0].click();
        },
        cover_change(a){
            this.loading = true;
            var that = this;
            var file = a.files[0];
            //判断是否是图片类型
            if (!/image\/\w+/.test(file.type)) {
                alert("只能选择图片");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) { 
                that.canvasDataURL(this.result, {width: "200"}, 'cover', $(".cover_img")[0]);
            }
        },
        menu_change(a){
            var that = this;
            var file = a.files[0];
            //判断是否是图片类型
            if (!/image\/\w+/.test(file.type)) {
                alert("只能选择图片");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) { 
                var base64 = that.canvasDataURL(this.result, {width: "400"}, 'menu', $(".menu_img")[0]);
            }
        },
        takeout_upload(){
            var arr = [];
            this.error_init();
            var that = this;
            arr.push(this.cover);
            arr.push(this.menu);
            this.loading = true;
            this.$post('/takeout',{"cover": arr[0], "menu": arr[1], "name": this.name, "start_time": this.start_time, "end_time": this.end_time, "phone": this.phone}).then(mes => {
                alert("提交成功");
                this.loading = false;
                this.init();
                $(".cover_img").remove();
                $("[data-cover]").val("");
                $(".menu_img").remove();
                $("[data-menu]").val("");
            }, mes => {
                this.loading = false;
                for (var i in mes.data) {
                    that["error_" + i] = mes.data[i][0];
                }
            });            
        },
            //图片压缩
        canvasDataURL(path, obj, key, cl_name) {
            var img = new Image();
            img.src = path;
            var _this = this;
            var base64;
            img.onload = function () {
                var that = this;
                // 默认按比例压缩
                var w = img.width,
                    h = img.height,
                    scale = w / h;
                w = obj.width || w;
                h = obj.height || (w / scale);
                var quality = 0.99;  // 默认图片质量为0.7
                //生成canvas
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = w.toString();
                var anh = document.createAttribute("height");
                anh.nodeValue = h.toString();
                ;
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(img, 0, 0, w, h);
                // 图像质量
                if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
                    quality = obj.quality;
                }
                // quality值越小，所绘制出的图像越模糊
                base64 = canvas.toDataURL('image/jpeg', quality);
                _this[key] = base64;
                cl_name.style.backgroundImage = 'url(' + base64 + ')';
                // 回调函数返回base64的值
            }
            this.loading = false;
            return base64;
        }
    }
  }

</script>

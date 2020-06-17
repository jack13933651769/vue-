<template lang="">
	<div class="home">
	<div class="home_left">
	<left-menu></left-menu>
	</div>
	<div class="home_right">
            <head-nav></head-nav>
            <div class="menu_content" ref="menu_content">
                <bread></bread>
                <router-view></router-view><!--页面渲染入口-->
				 <footerNav></footerNav>
            </div>    
	</div>
	</div>
</template>
<script>
import HeadNav from './headNav.vue';
import LeftMenu from './leftMenu.vue';
import Bread from './bread.vue';
import FooterNav from './footerNav.vue';
import Content from'./content.vue';
export default {
	   components:{
            HeadNav,
            LeftMenu,
            Bread,
            FooterNav,
            Content
        },
}
</script>

<style  scoped>
.home{
	display: grid;
	grid-template-columns: 1.5fr 8fr;
  	grid-template-rows:  1.5fr ;
	  background: #fff;
}
.home_left{

}
.home_right{

}
.menu_content{
	overflow-y: auto;
	height: calc(100vh - 61px);
	
}
</style>
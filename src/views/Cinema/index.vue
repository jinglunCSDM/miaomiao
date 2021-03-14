<template>
     <div id="main">
        <Header title="喵喵影院"/>
        <div id="content">
            <div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
            <CiList/>
        </div>
        
        <TaBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/Tabbar'
import CiList from '@/components/CiList'
export default {
    name: 'Ciname',
    components: {
         Header,
        TabBar,
        CiList
    }
}
</script>
<style scoped>
#content {margin-bottom: 0px;}
#content .cinema_menu{width: 100%;height: 45px;display: flex;justify-content: space-around;line-height: 45px;border-bottom: 1px solid #e6e6e6;align-items: center;background-color: #fff;}
</style>

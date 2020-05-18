<template>
	<view class="container">
		<view class="top_bg" :style="'background-image: url('+imgUrl+'/images/me/wode_topimg2.png'+')'">
			<view class="jus-spB text-fff top_box">
				<view class="jus-start">
					<image src="../../static/images/cbd.jpg" mode="aspectFill" class="headImg"></image>
					<view class="">
						<view class="jus-start">
							<view class="u-m-r-30">
								满目星辰.
							</view>
							<image src="../../static/images/vip.png" mode="widthFix" style="width: 60upx;"></image>
						</view>
						<view class="u-font-sm">
							320天过期
						</view>
					</view>
				</view>
				<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAMAAABGFileAAAA6lBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Le70HAAAATXRSTlMAAQIFBgcICQoLERMUFRYZGhsgIiUoKy41ODtASFdYXl9gZGVmZ3BzdHZ+f4OHiIyTlZeYm5+go7e/w8fIysvX29/n6uvs7/Hy9Pf8/dHs4gAAAAF1SURBVFjD7dhrU4JAFAbgk0qJhhc0yjCNzMq0i5l5qTRUrLT+/9/pQ7OHYXaRzZgx7bzflvPO84lZdoFPybRVADBk200gl9yNcD+mYz5vfu7c4cuTmcidnpl8rv3cUYkvF7sid2wCH8vPtXW+rLbJDXIfnlkqwW6ihe1cgDvAdT3Y1Xq4Nsgld4PdSp3FDHbjFrZTtJ+tyH29OuZz7+dOzvnyaZ/OJeSSu9BtS+ZEAYCMbLsMqmQUAICIbDsGlO8YkslEAEDBZT7KU5EsjtPLvmfy+zq55K6zOx/ZfByvm8fBU0FnUZi7c4Pjhus6JZ3PhdeN4qDwiMY+c7d2cZz82fnMjW7j5EC476y5m9BY4qG6rR6LFaq7+D5E7ird7Uv8LVML013+fvx/3BweWVKhur/ZdzbELQrO3VWv657X94bvLIfsmdYRubOu4J7Q97pZHNxVLZZb9qzzEup3fhDmPYtccv+E25RMOQYAaVw2kujWBO2jL7XezutPjv3LAAAAAElFTkSuQmCC"
				 mode="widthFix" style="width: 60upx;"></image>
			</view>
			<view class="jus-spB u-p-l-60 u-p-r-60 u-p-t-20">
				<view class="jus-start">
					<image :src="base64" mode="widthFix" style="width: 30upx;height: 26upx;"></image>
					<view class="text-F9DE8F">
						<text class="u-font-xl">VIP会员</text>
						<text class="inline_block u-m-r-10 u-m-l-10">|</text>
						<text class="u-font-sm">每年为您节省888元</text>
					</view>
				</view>
				<view class="_btn">
					<navigator url="../member/memberCenter" hover-class="none">
						<view class="jus-center">
							<view class="u-font-sm" style="color: #562E00;">
								立即查看
							</view>
							<view class="">
								<u-icon name="arrow-right" color="#562E00" size="20"></u-icon>
							</view>
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="block_box u-p-30">
			<view class="block_item border_radius_10 bgc_fff u-p-30">
				<view class="block_item_title u-font-xl text-bold u-m-b-30">我的资产</view>
				<view class="jus-spB">
					<view class="jus-center bg1 u-m-r-15 border_radius_10">
						<view class="">
							<image :src="imgUrl+'/images/me/jifenzhongxin.png'" mode="widthFix"></image>
						</view>

						<view class="text-fff u-m-l-20">
							<view class="">
								积分中心
							</view>
							<view class="u-font-sm">
								可用积分：500
							</view>
						</view>
					</view>
					<view class="jus-center bg2 u-m-l-15 border_radius_10">
						<view class="">
							<image :src="imgUrl+'/images/me/wodeyouhuiquan.png'" mode="widthFix"></image>
						</view>
						<view class="text-fff u-m-l-20">
							<view class="">
								我的优惠卷
							</view>
							<view class="u-font-sm">
								有效劵：0
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="block_item border_radius_10 bgc_fff u-p-30">
				<view class="block_item_title u-font-xl text-bold u-m-b-30 jus-spB">
					<view class="">
						我的订单
					</view>
					<view class="jus-start">
						<view class="text-tips u-font-lg">
							全部订单
						</view>
						<view class="">
							<u-icon name="arrow-right" color="#999" size="28"></u-icon>
						</view>
					</view>
				</view>
				<view class="jus-spB u-p-l-30 u-p-r-30">
					<view class="order_icon_item u-text-center">
						<u-badge size="small" type="warning" count="33" :is-center="true"></u-badge>
						<image :src="imgUrl+'images/icno/daifukuan.png'" mode="widthFix" class="order_icon"></image>
						<view class="u-font-sm">
							代付款
						</view>
					</view>
					<view class="order_icon_item u-text-center">
						<image :src="imgUrl+'images/icno/daishouhuo.png'" mode="widthFix" class="order_icon"></image>
						<view class="u-font-sm">
							待完成
						</view>
					</view>
					<view class="order_icon_item u-text-center">
						<image :src="imgUrl+'images/icno/pingjia.png'" mode="widthFix" class="order_icon"></image>
						<view class="u-font-sm">
							待评价
						</view>
					</view>
					<view class="order_icon_item u-text-center">
						<image :src="imgUrl+'images/icno/tuikuan.png'" mode="widthFix" class="order_icon"></image>
						<view class="u-font-sm">
							退款
						</view>
					</view>
				</view>
			</view>
			<view class="block_item border_radius_10 bgc_fff u-p-30">
				<view class="block_item_title u-font-xl text-bold u-m-b-30">必备工具</view>
				<view class="jus-start flex_warp ">
					<view class="tool_item" v-for="(item,index) in toolList" :key="index" @click="goSomeWhere(item.url)">
						<image :src="item.img" mode="aspectFit"></image>
						<view class="u-font-sm">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				base64: "data:image/png;base64,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",
				toolList: [{
						name: '我的地址',
						img: http.imgUrl + '/images/me/wodedizhi.png',
						url: '/pages/Index/address/address',
					},
					{
						name: '我的足迹',
						img: http.imgUrl + '/images/me/wodezuji.png',
						url: '/marketpages/gongju/zuji/zuji',
					},
					{
						name: '商品收藏',
						img: http.imgUrl + '/images/me/shanpinshoucang.png',
						url: '/marketpages/gongju/shoucangjia/shoucangjia',
					},
					{
						name: '店铺关注',
						img: http.imgUrl + '/images/me/dianpuguanzhu.png',
						url: '/marketpages/gongju/guanzhu/guanzhu',
					},
					{
						name: '我的圈子',
						img: http.imgUrl + '/images/me/wodequanzi.png',
						url: '/marketpages/personal/personal',
					},
					{
						name: '我的购物车',
						img: http.imgUrl + '/images/me/wodegouwuche.png',
						url: '/pages/shopcar/shopcar',
					},
					{
						name: '我的钱包',
						img: http.imgUrl + '/images/me/wodeqianbao.png',
						url: '/pages/Mine/wallet/wallet',
					},
					{
						name: '我的分享码',
						img: http.imgUrl + '/images/me/wodefenxiangma.png',
						url: '/pages/Mine/spread/spread',
						is_vip: 1
					},
					{
						name: '帮助反馈',
						img: http.imgUrl + '/images/me/bangzhufankui.png',
						url: '/marketpages/fankui/fankui',
					},
					{
						name: '客服中心',
						img: http.imgUrl + '/images/me/kefuzhongxin.png',
						url: '',
					},
					{
						name: '绑定手机',
						img: http.imgUrl + '/images/me/bangdingshouji.png',
						url: '/marketpages/bindmobile/bindmobile',
					},
				],
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {

		},
		onPullDownRefresh: function() {

			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {

			},
			aa: function() {
				uni.showLoading({
					title: '加载中'
				})
				let opts = {
					url: '',
					method: 'post'
				};
				let param = {
					city_id: '370700',
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					uni.hideLoading()
				}, error => {
					console.log(error);
					uni.hideLoading()
				})
			},
			goSomeWhere: function(e) {

			}
		}
	}
</script>

<style>
	.top_bg {
		width: 100%;
		height: 356upx;
		background-size: 100% 100%;
	}

	.headImg {
		width: 100upx;
		height: 100upx;
		border-radius: 999px;
		margin-right: 20upx;
	}

	.top_box {
		padding: 20upx 40upx;
	}

	.text-F9DE8F {
		color: #F9DE8F;
	}

	.block_box {
		position: relative;
		top: -70upx;
	}

	._btn {
		padding: 10upx 20upx;
		border-radius: 999px;
		background-color: #F9DE8F;
	}

	.order_icon_item {
		margin-bottom: 20upx;
		position: relative;
	}

	.block_item {}

	.bg1,
	.bg2 {
		padding: 30upx 15upx;
		flex: 1;
	}

	.bg1 {
		background-image: linear-gradient(0deg, #FE6785, #FFA272);
	}

	.bg2 {
		background-image: linear-gradient(0deg, #8F75FC, #AB8FFE);
	}

	.block_item {
		margin-bottom: 30upx;
	}

	.bg1 image,
	.bg2 image {
		width: 60upx;
	}

	.order_icon {
		width: 72upx;
	}

	.tool_item {
		width: 25%;
		margin-bottom: 20upx;
		text-align: center;
	}

	.tool_item image {
		width: 80upx;
		height: 80upx;
		margin: 0 auto;
		margin-bottom: 15upx;
	}
</style>

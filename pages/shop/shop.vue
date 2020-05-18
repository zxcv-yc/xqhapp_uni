<template>
	<view class="container">
		<view class="header_bg">
			<image src="../../static/images/shop_bg.png" mode="" class="header_bg_img"></image>
		</view>
		<view class="content">
			<view class="top_shop_info_box">
				<view class=" u-border-bottom top_shop_info jus-spB">
					<view class="shop_img">
						<image :src="imgUrl+shop.pic" mode="aspectFill" class="storeList_item_img"></image>
					</view>
					<view class="shop_info jus-spB-col">
						<view class="u-font-md text-bold ellipsis-2">
							{{shop.shop_name}}
						</view>
						<view class="jus-spB">
							<view class="text-content">
								<u-rate :disabled="true" :current='shop.star' size='30' gutter="5"></u-rate>{{shop.star}}分
							</view>
							<view class="focusOn_btn text-fff u-font-sm jus-center" @click="collectShop()" v-if="collect">
								<view class="">
									已关注
								</view>
							</view>
							<view class="focusOn_btn text-fff u-font-sm jus-center" @click="collectShop()" v-else>
								<u-icon name="plus" color="#fff" size="28"></u-icon>
								<view class="">
									关注
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="jus-spB padding_20upx_0 " style="padding: 20upx 0;">
					<view class="jus-start">
						<view class="top_shop_info_address one_ellipsis">
							{{shop.address}}
						</view>
						<view class="">
							<u-icon name="arrow-right" color="#333" size="28"></u-icon>
						</view>
					</view>
					<view class="padding_0_30" @click="callPhone(shop.mobile)">
						<u-icon name="phone-fill" color="#ff6f9c" size="40"></u-icon>
						<!-- <image :src="imgUrl+'/images/icno/mobile-icon.png'" mode="aspectFit" class="icon_img"></image> -->
					</view>
				</view>
			</view>
			<view class="padding_0_30">
				<view class="tab_view_box text-fff">
					<view class="tab_view_item" @click="clickTabView(1)" :class="tabIndex==1?'text-bold':''">
						<view class="tab_view_text">
							商品
						</view>
						<view class="tab_view_img_box" v-if="tabIndex==1">
							<image src="../../static/images/active_white.png" mode="aspectFit" class="tab_view_img"></image>
						</view>
					</view>
					<view class="tab_view_item" @click="clickTabView(2)" :class="tabIndex==2?'text-bold':''">
						<view class="tab_view_text">
							活动
						</view>
						<view class="tab_view_img_box" v-if="tabIndex==2">
							<image src="../../static/images/active_white.png" mode="aspectFit" class="tab_view_img"></image>
						</view>
					</view>
					<view class="tab_view_item" @click="clickTabView(3)" :class="tabIndex==3?'text-bold':''">
						<view class="tab_view_text">
							简介
						</view>
						<view class="tab_view_img_box" v-if="tabIndex==3">
							<image src="../../static/images/active_white.png" mode="aspectFit" class="tab_view_img"></image>
						</view>
					</view>
					<view class="tab_view_item" @click="clickTabView(4)" :class="tabIndex==4?'text-bold':''">
						<view class="tab_view_text">
							评价
						</view>
						<view class="tab_view_img_box" v-if="tabIndex==4">
							<image src="../../static/images/active_white.png" mode="aspectFit" class="tab_view_img"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 商品 -->
			<view class="view_content" v-if="tabIndex==1">
				<view class="goods_list" v-if="goods.length">
					<view class="goods_item u-m-b-30" v-for="(item,index) in goods" :key="index" @click="goGoodInfo(item.id)">
						<image :src="imgUrl+item.pic" mode="aspectFill" class="goods_img"></image>
						<view class="ellipsis-2 goods_title u-font-md">
							{{item.goods_name}}
						</view>
						<view class="text-ff6f9c">
							<text class="u-font-xs">¥</text>
							<text class="u-font-xl text-bold">{{item.price}}</text>
						</view>
					</view>
				</view>
				<view class="noDataView" v-else>
					<image src="../../static/images/noDataView.png" mode="aspectFit" class="onDataViewImg"></image>
					<view class="text-tips u-font-sm u-text-center">暂时没有数据哦</view>
				</view>
			</view>
			<!-- 活动 -->
			<view class="view_content" v-if="tabIndex==2">
				<view class="noDataView">
					<image src="../../static/images/noDataView.png" mode="aspectFit" class="onDataViewImg"></image>
					<view class="text-tips u-font-sm u-text-center">暂时没有数据哦</view>
				</view>
			</view>
			<!-- 简介 -->
			<view class="view_content" v-if="tabIndex==3">
				<view class="info_view_box">
					<view class="view_row jus-spB u-border-bottom u-p-t-20 u-p-b-20">
						<view class="view_row_icon u-m-r-10">
							<u-icon name="clock" color="#999" size="36"></u-icon>
						</view>
						<view class="view_row_title">
							营业时间：
						</view>
						<view class="view_row_text u-flex-1 u-line-2">
							{{shop.business_work_time}}
						</view>
					</view>
					<view class="view_row jus-spB u-border-bottom u-p-t-20 u-p-b-20">
						<view class="view_row_icon u-m-r-10">
							<u-icon name="clock" color="#999" size="36"></u-icon>
						</view>
						<view class="view_row_title">
							商家服务：
						</view>
						<view class="view_row_text u-flex-1 u-line-2">
							<text v-for="(item,index) in shop.peculiar" :key="index">{{item.peculiar_name+' '}}</text>
						</view>
					</view>
				</view>
				<view class="info_view_box">
					<image src="../../static/images/cbd.jpg" mode="aspectFill" class="info_view_img"></image>
				</view>
			</view>
			<!-- 评价 -->
			<view class="view_content" v-if="tabIndex==4">
				<view class="noDataView">
					<image src="../../static/images/noDataView.png" mode="aspectFit" class="onDataViewImg"></image>
					<view class="text-tips u-font-sm u-text-center">暂时没有数据哦</view>
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
				collect: 0,
				imgUrl: http.imgUrl,
				shop: [],
				goods: [],
				tabIndex: 1
			}
		},
		onLoad: function(e) {
			console.log(e)

			this.shop_id = e.shop_id
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

				this.getDetail()
			},
			//获取店铺详情
			getDetail: function() {
				let _this = this
				let opts = {
					url: 'shop/getDetail',
					method: 'post'
				};
				let param = {
					city_id: '370700',
					user_id: '1629',
					shop_id: _this.shop_id
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					_this.shop = res.data.data.shop
					_this.goods = res.data.data.goods
					_this.collect = res.data.data.shop.user_collect
					console.log(_this.goods)
				}, error => {
					console.log(error);
				})
			},
			//点击商品
			goGoodInfo: function(e) {
				uni.navigateTo({
					url: '../good/bendiGoodsInfo?goods_id=' + e
				})
				// console.log(e)
			},
			//收藏店铺
			collectShop: function() {
				// this.collect = this.collect == 1 ? 0 : 1
				let _this = this
				let opts = {
					url: 'Members/localShopCollect',
					method: 'post'
				};
				let param = {
					city_id: '370700',
					user_id: '1629',
					shop_id: _this.shop_id
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					if (res.data.msg == '收藏成功') {
						_this.collect = 1
					} else if (res.data.msg == '取消收藏成功') {
						_this.collect = 0
					}
					uni.showToast({
						title: res.data.msg
					})
				}, error => {
					console.log(error);
				})

			},
			//拨打电话
			callPhone: function(e) {
				console.log(e)
				uni.showModal({
					title: '提示',
					content: '确定要拨打' + e + '吗',
					success: function(res) {
						if (res.confirm) {
							uni.makePhoneCall({
								// 手机号
								phoneNumber: e,
								// 成功回调
								success: (res) => {

								},
								// 失败回调
								fail: (res) => {
									uni.showToast({
										title: '错误，请稍后再试',
										duration: 2000
									});
								}
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//tab切换
			clickTabView: function(e) {
				this.tabIndex = e
			}
		}
	}
</script>

<style>
	/* .top_bg_box {
		background-image: url(../../static/images/shop_bg.png);
		background-size: 100% 100%;
		width: 100%;
		height: 300upx;
	} */
	.header_bg_img {
		height: 430upx;
		display: block;
		width: 100%;
		margin: 0 auto;
	}

	/* .header_bg_img image {
		display: block;
		width: 100%;
		margin: 0 auto;
	} */

	.top_bg_box {
		/* width: 100%;
		height: 300upx; */
		background-color: #fff;
	}

	.content {
		z-index: 2;
		position: relative;
	}

	.icon_img {
		width: 30upx;
		height: 30upx;
	}

	.top_bg_box image {
		display: block;
		width: 100%;
		/* height: 100%; */
		margin: 0;
		height: 240upx;
	}

	.storeList_item_img {
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
	}

	.shop_info {
		height: 170upx;
		width: calc(100% - 204upx);
	}

	.top_shop_info {
		padding-bottom: 20upx;
	}

	.top_shop_info_address {
		max-width: 380rpx;
		/* background-color: #18B566; */
	}

	.top_shop_info_box {
		width: calc(100% - 60upx);
		margin: 0 auto;
		padding: 20upx;
		padding-bottom: 0;
		margin-top: 30upx;
		background-color: #fff;
		border-radius: 10upx;
	}

	.focusOn_btn {
		background-image: linear-gradient(#FF94B6, #FF6F9C);
		padding: 0.1rem 1rem;
		box-shadow: 0 0.1875rem 0.375rem rgba(255, 111, 157, 0.315);
		border-radius: 999px;
	}

	.view_content {
		padding: 30upx;
	}

	.goods_list {
		/* padding: 30upx; */
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.goods_item {
		width: calc(50% - 15upx);
		border-radius: 10upx;
		background-color: #fff;
		padding: 20upx;

	}

	.goods_img {
		width: 291upx;
		height: 291upx;
		margin: 0 auto;
		border-radius: 10upx;
	}

	.goods_title {
		margin-top: 10upx;
		height: 80upx;
	}

	.info_view_box {
		background-color: #fff;
		border-radius: 10upx;
		padding: 20upx;
		margin-bottom: 20upx;
	}

	.info_view_img {
		width: 650upx;
		height: 400upx;
	}
</style>

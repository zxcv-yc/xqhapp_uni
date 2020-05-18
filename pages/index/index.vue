<template>

	<view class="container">

		<view class="header_bg">
			<image src="../../static/images/head_bg.png" mode="widthFix" style="width: 100%;"></image>
		</view>
		<view class="content">
			<view class="jus-spB padding_0_30">
				<view class="text-fff jus-start" @click="goNear">
					<view class="">
						<text class="inline_block margin-right one_ellipsis posName">{{posName}}</text>
					</view>
					<view class="">
						<u-icon name="arrow-down-fill"></u-icon>
					</view>
				</view>
				<navigator url="../good/oneCityGoodInfo?goods_id=984">
				<view class="search_box jus-center" @click="goSearch">
					<view class="text-fff margin-right">
						<u-icon name="search"></u-icon>
					</view>
					<view class="text-fff">
						搜索内容
					</view>
				</view>
				</navigator>
			</view>
			<view class="padding_0_30">
				<view class="banner_swiper_box">
					<!-- <swiper class="screen-swiper" id="bannerSwiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true"
		 :circular="true" :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="imgUrl + item.pic" mode="aspectFill"></image>
			</swiper-item>
		</swiper> -->
					<u-swiper :list="swiperList" class="banner_swiper"></u-swiper>
				</view>
			</view>
			<swiper class="screen-swiper" id="menuSwiper" :indicator-dots="menuList.length>1" indicator-color="#efefef"
			 :circular="true" interval="5000" duration="500" indicator-active-color="#ff6f9c">
				<swiper-item v-for="(item,index) in menuList" :key="index" class="jus-start flex_warp">
					<view v-for="(item1,index1) in item" :key="index1" class=" grid_menu_item_box">
						<view class="grid_menu_item ">
							<image :src="imgUrl+item1.pic" mode="aspectFit"></image>
						</view>
						<view class=" text-222 one_ellipsis grid_menu_item_text">{{item1.name}}</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- <view class="_mask"  v-if="sortShow" @click="maskClick" v-hidden="!sortShow"></view> -->
			<view class="zindex_1071">
				<u-sticky>
					<!-- 只能有一个根元素 -->
					<view class="screen_big_box">
						<view class="jus-spB screen_box">
							<view class=" jus-start">
								<view class="screen_item margin-right-xl" :class="screenIndex==1?'screen_item_active':''" @click="clickScreen"
								 v-bind:id="1">
									综合排序
									<u-icon name="arrow-down"></u-icon>
								</view>
								<view class="screen_item margin-right-xl" :class="screenIndex==2?'screen_item_active':''" @click="clickScreen"
								 v-bind:id="2">
									距离
								</view>
								<view class="screen_item" :class="screenIndex==3?'screen_item_active':''" @click="clickScreen" v-bind:id="3">
									销量
								</view>
							</view>
							<view class="screen_item" :class="screenIndex==4?'screen_item_active':''" @click="clickScreen" v-bind:id="4">
								筛选
								<u-icon name="arrow-down"></u-icon>
							</view>
						</view>

						<view class="sort_type_box" v-if="sortShow">
							<view class="sort_type_item" @click="chooseSortType" data-id="all" :style="'color:'+(sortId=='all'?'#F94E74':'#666')">综合排序</view>
							<view class="sort_type_item" @click="chooseSortType" data-id="star" :style="'color:'+(sortId=='star'?'#F94E74':'#666')">好评优先</view>
							<view class="sort_type_item" @click="chooseSortType" data-id="price2" :style="'color:'+(sortId=='price2'?'#F94E74':'#666')">人均价格由高到低</view>
							<view class="sort_type_item" @click="chooseSortType" data-id="price1" :style="'color:'+(sortId=='price1'?'#F94E74':'#666')">人均价格由低到高</view>
						</view>
					</view>

				</u-sticky>
			</view>
			<view class="storeList padding_top " id="storeList">
				<view class="storeList_item jus-spB al-items-start" v-for="(item,index) in shopList" :key="index" @click="goShop(item.id)">
					<view class="storeList_item_img_box">
						<view v-if="item.icon=='优选商家'" class="storeList_item_img_tag" :style="'background-image: url('+imgUrl+'/images/youxuanimg.png)'">{{item.icon}}</view>
						<view v-if="item.icon=='严选商家'" class="storeList_item_img_tag" :style="'background-image: url('+imgUrl+'/images/yanxuanimg.png)'">{{item.icon}}</view>
						<view v-if="item.icon=='甄选商家'" class="storeList_item_img_tag" :style="'background-image: url('+imgUrl+'/images/zhenxuanimg.png)'">{{item.icon}}</view>
						<view v-if="item.icon=='星选商家'" class="storeList_item_img_tag" :style="'background-image: url('+imgUrl+'/images/xingxuanimg.png)'">{{item.icon}}</view>
						<view v-if="item.icon=='精选商家'" class="storeList_item_img_tag" :style="'background-image: url('+imgUrl+'/images/jingxuanimg.png)'">{{item.icon}}</view>
						<image :src="imgUrl + item.pic" mode="aspectFill" class="storeList_item_img"></image>
					</view>
					<view class="storeList_item_info_box">
						<view class="u-font-xl text-bold one_ellipsis">
							{{item.shop_name}}
						</view>
						<view class="jus-spB">
							<view class="">
								<u-rate :disabled="true" :current='item.star' size='30' gutter="5"></u-rate>
								<text class="inline_block margin-left" style="color: #666;">{{item.star}}分</text>
							</view>
							<view class="">
								{{item.distance}}km
							</view>
						</view>
						<view class="jus-spB">
							<view class="u-font-md text-content">
								人均{{item.per_price}}元/人
							</view>
							<view class="u-font-md">
								月售{{item.sale_count}}
							</view>
						</view>
						<view class="jus-start flex_warp">

							<u-tag v-for="(item1,index1) in item.peculiar" :key="index1" :text="item1.peculiar_name" class="storeList_item_tag"
							 bg-color="#ffecd1" color="#ff9f10" border-color="#ffecd1" />

						</view>
						<view class="jus-start ">
							<view class="qvan_block">
								券
							</view>
							<view class="" style="color: #f94e74;">
								星球荟专属折扣
							</view>
						</view>
					</view>
				</view>
				<u-loadmore :status="status" bg-color='transparent' />
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	import amap from '../../common/amap-wx.js'
	export default {
		data() {
			return {
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '上拉加载更多',
					loading: '努力加载中',
					nomore: '没有更多了'
				},
				swiperList: null,
				sortId: 'all',
				imgUrl: http.imgUrl,
				dotStyle: 1,
				menuList: [],
				address: '',
				amapPlugin: null,
				screenIndex: 1,
				key: '6357e894cdbb23207ebbd23dc821232b',
				posName: uni.getStorageSync('posName'),
				lat: uni.getStorageSync('lat'),
				lng: uni.getStorageSync('lng'),
				pageNum: 1,
				shopList: [],

				star: '',
				priceSort: '',
				cate_id: '',
				sell_num: '',
				nearMe: '',
				list_tag: ''

			}
		},
		onLoad: function() {
			uni.showLoading({
				title: '加载中'
			})
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});

		},
		onShow: function() {
			this.allRequest()
		},
		onReady: function() {
			uni.hideLoading()
		},
		onPullDownRefresh: function() {
			console.log('触发下拉刷新')
			this.posName = uni.getStorageSync('posName'),
				this.lat = uni.getStorageSync('lat'),
				this.lng = uni.getStorageSync('lng'),
				this.shopList = []
			this.allRequest()
			uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {
			++this.pageNum
			this.getShop()
			console.log('触发上拉')
		},
		methods: {

			allRequest: function() {
				console.log(this.lat)
				console.log(this.lng)
				console.log(this.posName)
				if (this.lat == '' || this.lat.length < 1 || this.lng == '' || this.posName == '') {
					console.log('zhixingdingwei')
					this.getRegeo()
				}
				this.lat = uni.getStorageSync('lat'),
					this.lng = uni.getStorageSync('lng'),
					this.posName = uni.getStorageSync('posName'),
					this.getBanner()
				this.getNavigatorMenu()
				this.getShop()
			},
			getRegeo: function() {
				this.amapPlugin.getRegeo({
					success: (data) => {
						console.log(data)
						this.cityName = data[0].regeocodeData.addressComponent.city
						uni.setStorageSync('lat', data[0].latitude);
						uni.setStorageSync('lng', data[0].longitude);
						uni.setStorageSync('posName', data[0].regeocodeData.addressComponent.city);

					}
				});
			},

			maskClick: function() {
				console.log("masins")
				this.sortShow = false
				console.log(this.sortShow)
			},
			goSearch: function() {
				// console.log('goSearch')
			},
			//点击排序
			chooseSortType: function(e) {
				this.sortId = e.currentTarget.dataset.id
				this.star = ''
				this.priceSort = ''
				this.nearMe = ''
				this.sell_num = ''
				this.pageNum = 1
				this.list_tag = ''

				switch (e.currentTarget.dataset.id) {
					case 'star':
						this.star = 1
						break;
					case 'price1':
						this.list_tag = 1
						this.priceSort = 1
						break;
					case 'price2':
						this.list_tag = 1
						this.priceSort = 2
						break;
						// default:

				}

				this.getShop()
				this.sortShow = false
			},
			getBanner: function() {
				// console.log('banner')
				let opts = {
					url: 'index/getBanner',
					method: 'post'
				};
				let param = {
					city_id: '370700',
					cate_id: '1'
				};
				http.httpTokenRequest(opts, param).then(res => {
					// console.log(res.data);
					let list = res.data.data
					for (let i in list) {
						list[i].image = this.imgUrl + list[i].pic
					}
					this.swiperList = list
					console.log(this.swiperList)
				}, error => {
					console.log(error);
				})

			},
			getNavigatorMenu: function() {
				let opts = {
					url: 'index/getNavigator',
					method: 'post'
				};
				let param = {
					city_id: '370700',
				};
				http.httpTokenRequest(opts, param).then(res => {
					// console.log(res.data);
					var menu_arr = res.data.data
					var menu_result = [];
					for (var i = 0; i < menu_arr.length; i += 10) { //将数组重组，每一个为一个单独的数组
						menu_result.push(menu_arr.slice(i, i + 10));
					}
					this.menuList = menu_result
					// console.log(menu_result.length)
				}, error => {
					console.log(error);
				})
			},
			//点击筛选
			clickScreen: function(e) {
				this.screenIndex = e.target.id
				uni.createSelectorQuery().select(".screen_box").boundingClientRect(data => { //目标节点
					uni.createSelectorQuery().select(".container").boundingClientRect((res) => { //最外层盒子节点
						uni.pageScrollTo({
							duration: 0, //过渡时间必须为0，uniapp bug，否则运行到手机会报错
							scrollTop: data.top - res.top, //滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
						})
					}).exec()
				}).exec();

				if (e.target.id == 1) {
					this.sortShow = true
				} else {
					this.sortShow = false
				}
				if (e.target.id == 2 || e.target.id == 3) {
					this.star = ''
					this.priceSort = ''
					this.nearMe = ''
					this.sell_num = ''
					this.pageNum = 1
					this.list_tag = ''
					if (e.target.id == 2) {
						this.nearMe = 1
						this.list_tag = 1
					} else if (e.target.id == 3) {
						this.sell_num = 1
					}
					this.getShop()
				}
				console.log("dianji")
			},
			//获取店铺列表
			getShop: function() {
				this.status = 'loading'
				let opts = {
					url: 'index/shop',
					method: 'post'
				};
				let param = {
					pageNum: this.pageNum,
					city_id: 370700,
					lat: this.lat,
					lng: this.lng,
					star: this.star,
					priceSort: this.priceSort,
					nearMe: this.nearMe,
					sell_num: this.sell_num,
					list_tag: this.list_tag
				};
				console.log(param)
				http.httpTokenRequest(opts, param).then(res => {
					if (this.pageNum == 1) {
						this.shopList = []
					}
					this.shopList = this.shopList.concat(res.data.data)
					this.status = res.data.data.length ? 'loadmore' : 'nomore'
					console.log(this.shopList)
				}, error => {
					console.log(error);
				})
			},
			goNear: function() {
				uni.navigateTo({
					url: 'near'
				});
			},
			goShop: function(e) {
				// console.log(e)
				uni.navigateTo({
					url: "../shop/shop?shop_id=" + e
				})
			},
			moveHandle: function() {

			}

		},


	}
</script>

<style>
	page {
		background-color: transparent !important;
	}

	.container {
		background-color: transparent !important;
	}

	.content {
		/* padding: 20upx; */
		padding: 30upx 0;
		position: relative;
		z-index: 2;
	}

	#bannerSwiper {
		height: 280upx;
		min-height: 200upx !important;
		border-radius: 40upx;
		overflow: hidden;

	}


	.search_box {
		flex: 1;
		margin-left: 80upx;
	}

	.swiper-item {
		border-radius: 40upx;
		overflow: hidden;
	}

	.grid_menu_item_box image {
		display: block;
		margin: 0 auto;
		width: 80%;
		height: 80upx;
	}

	.screen_item_active {
		color: #ff6f9c;
	}

	.qvan_block {
		width: 32upx;
		height: 32upx;
		text-align: center;
		font-size: 20upx;
		line-height: 32upx;
		margin-right: 10upx;
		background-color: #f94e74;
		color: #fff;
		border-radius: 4upx;
	}

	.grid_menu_item_box {
		width: calc(20% - 30upx);
		text-align: center;
		margin: 15upx;
	}

	.banner_swiper_box {
		margin: 40upx 0;
		position: relative;
		z-index: 2;
		/* padding: 0 30upx; */
		box-shadow: 0 0.3em 0.8em rgba(255, 111, 156, 0.3);
	}

	.grid_menu_item_text {
		margin-top: 30upx;
		font-size: 24upx;
	}

	#menuSwiper {
		margin-bottom: 60upx;
		height: 400upx;

	}

	.margin-right-xl {
		margin-right: 40upx;
	}

	.storeList {
		background: linear-gradient(to bottom, #fff 0%, #F5EFEF 150px, #F5EFEF 100%);
		padding: 30upx;
		padding-top: 0;
	}

	.storeList_item_img_box {
		width: 184upx;
		height: 184upx;
		border-radius: 10upx;
		position: relative;
	}

	.storeList_item_img_tag {
		width: 115upx;
		height: 40upx;
		text-align: center;

		background-size: 100% 100%;
		border-radius: 0 10upx 0 25upx;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 2;
		color: #fff;
		font-size: 24upx;
	}

	.storeList_item_img {
		width: 184upx;
		height: 184upx;
		border-radius: 10upx;
	}

	.storeList_item {
		background-color: #fff;
		padding: 30upx 20upx;
		border-radius: 10upx;
		margin: 20upx 0;
	}

	.storeList_item_info_box {
		width: calc(100% - 214upx);
	}

	.storeList_item_tag {
		margin: 10upx 20upx 10upx 0;
	}

	.screen_box {
		width: 100%;
		/* padding: 24upx; */
		background-color: #fff;
		padding: 24upx 30upx;
	}

	.al-items-start {
		align-items: flex-start !important;
	}

	.sort_type_box {
		width: 100%;
		position: absolute;
		top: 80upx;
		background-color: #fff;
		/* z-index: 1071; */
		padding: 0 30upx;

	}

	.sort_type_item {
		padding: 20upx 0;
		border-bottom: solid #f5f5f5 1upx;
	}

	.screen_big_box {
		position: relative;
		z-index: 2000;
	}

	._mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .5);
		z-index: 1000;
	}
</style>

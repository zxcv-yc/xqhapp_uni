<template>
	<view class="container">
		<view class="top_bg_box" style="background-image: url(../../static/images/member_center_bg.png);">
			<view class="u-p-80 ">
				<view class="text-FFCA95 u-m-b-20 u-font-xl  u-p-t-40">
					享海量优惠
				</view>
				<view class="text-fff">
					星球会员
				</view>
			</view>
		</view>
		<view class="jus-spB u-m-t-30">
			<image src="../../static/images/member_center_left.png" mode="widthFix" class="title_img"> </image>
			<view class="u-font-xl">
				开通超级会员·专享6大权益
			</view>
			<image src="../../static/images/member_center_right.png" mode="widthFix" class="title_img"> </image>
		</view>
		<view class="tq_box jus-spB flex_warp">
			<view class="tq_item u-m-b-50" v-for="(item,index) in list" :key="index">
				<image :src="item.image" mode="widthFix" class="tq_item_img"></image>
				<view class="u-text-center u-font-sm u-m-t-20">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="u-font-lg text-bold u-p-l-30">
			开卡礼包
		</view>
		<view class="u-p-30">
			<view class="gift_item jus-spB u-p-20 bgc_fff" v-for="(item,index) in giftList" :key="index">
				<view class="gift_item_img">
					<image :src="imgUrl+item.pic" mode="aspectFill"></image>
				</view>
				<view class="gift_item_info jus-spB-col">
					<view class="">
						<view class="text-bold u-line-1">
							{{item.goods_name}}
						</view>
						<view class="u-font-lg text-bold" style="color: #FFA724;">
							+ 星球荟VIP年卡
						</view>
					</view>
					<view class="jus-spB">
						<view class="">
							<text class="u-font-32 inline_block u-m-r-15 text-bold" style="color: #F94E74;">¥{{item.price}}</text>
							<text class="u-font-sm text-tips"> <s>¥{{item.market_price}}</s> </text>
						</view>
						<view class="gift_item_btn" @click="nowOpenCard(item.id)">
							立即开通
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
				pageNum: 1,
				giftList: [],
				list: [{
					image: '../../static/member_center/hy@3x.png',
					name: '会员专享价'
				}, {
					image: '../../static/member_center/zs@3x.png',
					name: '专属免单'
				}, {
					image: '../../static/member_center/kk@3x.png',
					name: '开卡礼包'
				}, {
					image: '../../static/member_center/tc@3x.png',
					name: '提成奖励'
				}, {
					image: '../../static/member_center/sr@3x.png',
					name: '生日福利'
				}, {
					image: '../../static/member_center/jf@3x.png',
					name: '积分加成'
				}, ]
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {

		},
		onPullDownRefresh: function() {

			uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {
				this.getPackage()
			},
			nowOpenCard: function(e) {
				console.log(e)
				uni.navigateTo({
					url: "./giftInfo?goods_id=" + e
				})
			},
			getPackage: function() {
				let opts = {
					url: 'Package/getPackage',
					method: 'post'
				};
				let param = {
					city_id: '370700',
					pageSize: 10,
					pageNum: this.pageNum
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					this.giftList = res.data.data
				}, error => {
					console.log(error);
				})
			}
		}
	}
</script>

<style>
	.top_bg_box {
		width: 100%;
		height: 310upx;
		background-size: 100% 100%;
	}

	.text-FFCA95 {
		color: #FFCA95;
	}

	.title_img {
		width: 100upx;
	}

	.tq_item {
		width: calc(100% / 3);
	}

	.tq_item_img {
		width: 100upx;
		margin: 0 auto;

	}

	.tq_box {
		padding: 60upx;
	}

	.gift_item {
		border-radius: 10upx;
		margin-bottom: 30upx;
	}

	.gift_item_btn {
		padding: 5upx 15upx;
		border-radius: 999px;
		color: #FFCA95;
		background-color: #2C2C2C;
	}

	.gift_item_img image {
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
	}

	.gift_item_info {
		width: calc(100% - 170upx);
		height: 150upx;
	}
</style>

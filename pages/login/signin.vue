<template>

	<view class="container">
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="top_bg_box" style="background-image: url(../../static/images/bg_signin.png);">
			<view class="input_box">
				<view class="input_row jus-start">
					<view class="u-m-r-20">
						<u-icon name="phone" color="#333" size="30"></u-icon>
					</view>
					<view class="u-flex-1">
						<input type="number" value="" maxlength="11" class="input_style" placeholder="请输入手机号" v-model="phoneNum" />
					</view>
				</view>
				<view class="input_row jus-start">
					<view class="u-m-r-20">
						<u-icon name="lock" color="#333" size="30"></u-icon>
					</view>
					<view class="u-flex-1">
						<input type="password" value="" class="input_style" placeholder="请输入密码" v-model="password" />
					</view>
				</view>
				<view class="input_row jus-start">
					<view class="jus-start">
						<view class="u-m-r-20">
							<u-icon name="email" color="#333" size="30"></u-icon>
						</view>
						<view class="">
							<input type="number" value="" class="input_style" placeholder="请输入验证码" v-model="code" style="width: 300upx;" />
						</view>
					</view>
					<view class="">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-verification-code>
						<u-button type="primary" size="mini" :plain="true" shape="circle" @click="getCode" :disabled="disabledGetCode">{{tips}}</u-button>
					</view>
				</view>
				<view class="login_btn u-text-center " @click="doSignin">
					注册
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
				phoneNum: '',
				password: '',
				code: '',
				tips: '',
				// refCode: null,
				seconds: 60,
				error: '',
				disabledGetCode: false
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					console.log(res.data);
				},
				fail: function(e) {
					console.log(e)
				}
			});
		},
		onPullDownRefresh: function() {

			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {

			},
			codeChange: function(text) {
				this.tips = text;
			},
			end: function() {
				this.disabledGetCode = false
			},
			start: function() {
				this.disabledGetCode = true
			},
			//执行注册
			doSignin: function() {
				uni.showLoading({
					title:'请稍后'
				})
				let _this = this
				if (!_this.validation()) {
					_this.$refs.uTips.show({
						title: _this.error,
						type: 'warning',
						duration: '2300'
					})
					return false
				}
				let opts = {
					url: 'AppWx/register',
					method: 'post'
				};
				let param = {
					username: _this.phoneNum,
					password: _this.password,
					mobile: _this.phoneNum,
					code: _this.code,
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					uni.hideLoading()
					// return
					if (res.data.code == 200) {
						uni.showModal({
							title: '提示',
							content: res.data.msg,
							showCancel:false,
							success: function(res) {
								if (res.confirm) {
									uni.navigateBack({
										delta:1
									})
								} 
							}
						});

					} else {
						_this.$refs.uTips.show({
							title: res.data.msg,
							type: 'error',
							duration: '2300'
						})
					}

				}, error => {
					console.log(error);
					uni.hideLoading()
				})
			},
			//获取验证码
			getCode: function() {
				let _this = this
				let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if (!reg.test(_this.phoneNum)) {
					_this.$refs.uTips.show({
						title: '请输入您的手机号',
						type: 'warning',
						duration: '2300'
					})
					return false;
				}
				let opts = {
					url: 'login/sendsms',
					method: 'post'
				};
				let param = {
					tel: _this.phoneNum,
				};
				http.httpTokenRequest(opts, param).then(res => {
					uni.showLoading({})
					if (res.data.code == 200) {
						setTimeout(() => {
							uni.hideLoading();
							_this.$refs.uTips.show({
								title: res.data.msg,
								type: 'success',
								duration: '2300'
							})
							this.$refs.uCode.start(); // 通知验证码组件内部开始倒计时

						}, 2000);

					} else {
						_this.$refs.uTips.show({
							title: res.data.msg,
							type: 'error',
							duration: '2300'
						})
					}
					console.log(res.data);
				}, error => {
					console.log(error);
				})

			},
			// 表单验证
			validation: function(v) {
				let _this = this
				let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if (!reg.test(_this.phoneNum)) {
					this.error = '请填写正确的手机号';
					return false;
				}
				if (_this.password === '') {
					this.error = '请输入您的密码';
					return false;
				}
				if (_this.code === '') {
					this.error = '请输入您的验证码';
					return false;
				}
				return true;
			}
		}
	}
</script>

<style>
	.top_bg_box {
		background-image: url(../../static/images/bg_signin.png);
		width: 750upx;
		height: 1266upx;
		background-size: 100% 100%;
	}

	.input_box {
		padding: 120upx;
		padding-top: 520upx;
	}

	.input_style {
		border: none;


	}

	.input_row {
		border-bottom: 2upx solid #333;
		padding: 20upx 0;
		margin: 20upx 0;
	}

	.login_btn {
		line-height: 80upx;
		border-radius: 999px;
		background-image: linear-gradient(46deg, #3960FF, #39F1FF);
		color: #fff;
		font-weight: bold;
		margin-top: 100upx;
	}
</style>

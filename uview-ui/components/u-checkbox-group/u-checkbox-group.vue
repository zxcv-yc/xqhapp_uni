<template>
	<view class="u-checkbox-group">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * checkboxGroup 开关选择器父组件Group
	 * @description 复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便
	 * @tutorial https://www.uviewui.com/components/checkbox.html
	 * @property {String Number} max 最多能选中多少个checkbox（默认999）
	 * @property {String Number} size 组件整体的大小，单位rpx（默认40）
	 * @property {Boolean} disabled 是否禁用所有checkbox（默认false）
	 * @property {String} active-color 选中时的颜色，应用到所有子Checkbox组件（默认#2979ff）
	 * @event {Function} change 任一个checkbox状态发生变化时触发，回调为一个对象
	 * @example <u-checkbox-group></u-checkbox-group>
	 */
	export default {
		name: 'u-checkbox-group',
		props: {
			// 最多能选中多少个checkbox
			max: {
				type: [Number, String],
				default: 999
			},
			// 所有选中项的 name
			// value: {
			// 	default: Array,
			// 	default() {
			// 		return []
			// 	}
			// },
			// 是否禁用所有复选框
			disabled: {
				type: Boolean,
				default: false
			},
			// 在表单内提交时的标识符
			name: {
				type: [Boolean, String],
				default: ''
			},
			// 选中状态下的颜色
			activeColor: {
				type: String,
				default: '#2979ff'
			},
			// 组件的整体大小
			size: {
				type: [String, Number],
				default: 40
			}
		},
		provide() {
			return {
				checkboxGroup: this
			}
		},
		data() {
			return {
				// 所有子组件
				// children: []
			}
		},
		created() {
			this.children = [];
		},
		methods: {
			emitEvent() {
				let values = [];
				this.children.map(val => {
					if(val.value) values.push(val.name);
				})
				this.$emit('change', values);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-checkbox-group {
		display: inline-flex;
	}
</style>

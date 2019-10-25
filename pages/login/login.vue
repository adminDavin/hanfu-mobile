<template>
	<view>
		<view style="display: flex;justify-content: center;">
			<image src="../../static/img/noorder.png" style="border-radius: 15upx; width: 190upx;height: 190upx;margin-top:218upx;"></image>
		</view>
		<view style="padding:0 95upx;">
			<view  style="border-bottom:1upx solid #E5E5E5;padding-bottom: 17upx;margin-top: 208upx;margin-bottom: 50upx;">
				<input type="text" placeholder="请输入您的手机号" placeholder-class="csp">
			</view>
			<view  style="border-bottom:1upx solid #E5E5E5;padding-bottom: 17upx;">
				<view style="display: flex;align-items: center;">
					<input type="text" placeholder="请输入验证码" placeholder-class="csp">
					<view style="font-size: 18upx;color:#F73636;">获取验证码</view>
				</view>	
			</view>
				<view style="border-radius: 10upx; margin-top: 98upx;font-size: 30upx; height: 80upx; background:#F73636;display: flex;justify-content: center;align-items: center;color:#fff;">登录</view>
		</view>
	
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.csp{
	font-size: 20upx;
	color: #999999;
}
</style>

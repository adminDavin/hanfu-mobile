<template>
	<view>
		<view style="display: flex;align-items: center;justify-content: space-between;background: #fff;padding:74upx 20upx 0 20upx;">
			<view style="font-size: 30upx;padding-bottom: 19upx;font-weight: bold" class="choose activechoose">
				未使用
			</view>
			<view style="font-size: 30upx;padding-bottom: 19upx;font-weight: bold;"class="choose ">
				已使用
			</view>
			<view style="font-size: 30upx;padding-bottom: 19upx;font-weight: bold"class="choose ">
				已过期
			</view>
		</view>
		
		<view style="padding:14upx 20upx 0 20upx;">
			<view>
				<view style="display: flex;align-items: center;margin-top: 39upx;">
					<image src="../../static/img/dianpu.png" style="width: 30upx;height: 30upx;"></image>
					<view style="font-size: 25upx;margin-left: 22upx;font-weight: bold;">
						沃尔玛（南开店）
					</view>
				</view>
				<view class="item" style="box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.04);">
					
					<view class="youout">
						<view class="you">
							【优惠券标题】
						</view>
						<view class="kao" style="font-size: 22upx;display: flex;align-items: center;justify-content: center;padding-left: 10px;">2天后到期</view>
					</view>
					<view style="display: flex;align-items: center;padding: 0upx 0 0 49upx;">
						<view style="padding-right: 41upx;">
							<view>
								<text style="font-size: 68upx;color:#fff;">50</text><text style="margin-left: 20upx; font-size: 26upx;color:#fff;">元</text>
							</view>
							<view style="font-size: 28upx;color:#fff;">
								满200立减
							</view>
						</view>
						<view style="font-size: 27upx;color:#fff;border-left: 1upx solid #fff;height: 70upx;line-height: 70upx;padding-left: 31upx;">
							优惠券简介
						</view>
					</view>
					<view style="display: flex;align-items: center;justify-content: space-between; margin-top: 55upx;padding-right: 20upx;">
						
						<view style=" color:#666;
						font-size: 20upx;
						margin-left: 16upx;">有效期至2018-12-30</view>
						<view style="color:#F1574D;font-size: 22upx;width: 134upx;height: 46upx;display: flex;align-items: center;justify-content: center;
						border-radius:23upx;border: 1upx solid #F1574D;">
							立即使用
						</view>
					</view>
					<view style="height: 10upx;background: #fff;"></view>
				</view>
			</view>
			
			
			<view>
				<view style="display: flex;align-items: center;margin-top: 39upx;">
					<image src="../../static/img/dianpu.png" style="width: 30upx;height: 30upx;"></image>
					<view style="font-size: 25upx;margin-left: 22upx;font-weight: bold;">
						沃尔玛（南开店）
					</view>
				</view>
				<view class="item1" style="box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.04);">
					
					<view class="youout">
						<view class="you">
							【优惠券标题】
						</view>
						<view class="kao1" style="font-size: 22upx;display: flex;align-items: center;justify-content: center;padding-left: 10px;">2天后到期</view>
					</view>
					<view style="display: flex;align-items: center;padding: 0upx 0 0 49upx;">
						<view style="padding-right: 41upx;width: 30%;">
							<view>
								<text style="font-size: 68upx;color:#fff;">50</text><text style="margin-left: 20upx; font-size: 26upx;color:#fff;">元</text>
							</view>
							<view style="font-size: 28upx;color:#fff;">
								满200立减
							</view>
						</view>
						<view style="font-size: 27upx;width: 60%;
						color:#fff;border-left: 1upx solid #fff;height: 70upx;line-height: 70upx;padding-left: 31upx;display: flex;">
							<view class="">
								优惠券简介
							</view>
							
							<image src="../../static/img/yi.png" style="width: 138upx;height: 138upx;margin-left: 20%;margin-top: 25upx;"></image>
						</view>
						
					</view>
					<view style="display: flex;align-items: center;justify-content: space-between; margin-top: 55upx;padding-right: 20upx;">
						
						<view style=" color:#666;
						font-size: 20upx;
						margin-left: 16upx;">有效期至2018-12-30</view>
						
					</view>
					<view style="height: 10upx;background: #fff;"></view>
				</view>
			</view>
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
	input::-webkit-input-placeholder { /* WebKit browsers */ 
	font-size: 25upx;
	color: #999;  
	
	} 
	
	input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
	font-size: 25upx;
	color: #999; 
	
	} 
	
	input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
	font-size: 25upx;
	color: #999;  
	
	} 
	
	input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
	font-size: 25upx;
	color: #999; 
	
	} 
	
	
	.youout {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 18upx 0 0 49upx;

	}
.choose{
	display: flex;
	justify-content: center;
	color:#666;
	width: 30%;
	
}
	.kao {
		color:#DC3A2D;
		background:  url(../../static/img/kao.png) no-repeat;
		width: 168upx;
		height: 57upx;
		background-size: 100%;
		margin-right: -8upx;
	}
.kao1 {
	color:#999;
		background:  url(../../static/img/wuwu.png) no-repeat;
		width: 168upx;
		height: 57upx;
		background-size: 100%;
		margin-right: -8upx;
	}
	* {
		padding: 0;
		margin: 0;
	}

	.you {
		font-size: 30upx;
		color: #fff;

		font-weight: 400;
	}

	.item {
		    /* height: 146px; */
		overflow: hidden;
		margin-top: 24upx;
		/* height: 322upx; */
		background:#fff url(../../static/img/zu.png) no-repeat;
		background-size: 100%;
	}
.item1 {
		 
		overflow: hidden;
		margin-top: 24upx;
		
		background:#fff url(../../static/img/wu.png) no-repeat;
		background-size: 100%;
	}
	page {
		/* background: #179B16; */
		background: #F5F5F6;
		/* background-size: 100%; */
	}

	.out {
		padding: 136upx 20upx 24upx 20upx;
	}
		.activechoose{
			color:red;
			border-bottom:4upx solid red;
		}
	.add {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		color: #fff;
		width: 30%;
		height: 70upx;
		background: red;
		border-radius: 8upx;

	}

	.inout {
		/* border: 1upx solid #E5E5E5; */
		border-radius: 35upx;
		background: #F5F5F6;
		width: 75%;
		height: 70upx;
		display: flex;
		align-items: center;
	}
</style>

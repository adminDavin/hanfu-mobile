<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="consignee" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="phone" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地区</text>
			<text class="input" @click="showMulLinkageThreePicker">{{pickerText}}</text>
		</view>
		<view class="row b-b"> 
			<text class="tit">详细地址</text>
			<input class="input" type="text" v-model="details" placeholder="详细地址" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="Default" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="submit()">提交</button>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker"
		 :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/pages/mpvue-citypicker/mpvueCityPicker'
	import eonfox from '@/js/eonfox.js';
	import fns from '@/js/fns.js';
	import url from '../../globel.js'
	var ef = new eonfox();
	export default {
		data() {
			return {
				consignee:'',//姓名
				phone:'',
				addressId:'',
				province:'',
				details:'',
				addressList:{default:0},
				direction:'',
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '选择省/市/区',
				Default:false,
		 
			}
		},
		components: {
		    mpvueCityPicker
		},
	
		methods: {
			submit(){
			    var _this=this;		
				if(_this.consignee=='')	{
					uni.showToast({
						icon:'none',
						title:'请填写联系人'
					})
					return false;
				}	
				if(_this.phone=='')	{
					uni.showToast({
						icon:'none',
						title:'请填写手机号'
					})
					return false;
				}	
				
				if(!(/^1[3456789]\d{9}$/.test(_this.phone))	){
					uni.showToast({
						icon:'none',
						title:'手机号格式不正确'
					})
					return false;
				}
				if(_this.pickerText=='选择省/市/区')	{
					uni.showToast({
						icon:'none',
						title:'请选择省/市/区'
					})
					return false;
				}else{
					_this.pickerText=_this.pickerText.split('-');
					_this.pickerText=_this.pickerText[0]+_this.pickerText[1]+_this.pickerText[2]
				}
				if(_this.details=='')	{
					uni.showToast({
						icon:'none',
						title:'请填写详细地址'
					})
					return false;
				}
				console.log(_this.addressList.default)
				uni.request({
			            url:url.urlAdress+"user/address/addAddress",
						method:'get',
					    dataType: "JSON",
						data:{
							PhoneNumber:_this.phone,
							userId:2,
							Contact:_this.consignee,
							HfConty:'中国'+_this.pickerText,
							HfAddressDetail:_this.details,
							HfCity:"天津市",
							HfDesc:"11111",//备注
							HfProvince:'天津市',//省
							IsFaultAddress:_this.addressList.default
						},
					    success: function(res) {
					    console.log("添加收获地址",res);
							if(res.data.status==200){
								uni.showToast({							
									title:'添加成功'
								})
								setTimeout(
									function(){
										uni.navigateBack({
											delta:1
										})
									},1000
								)
								
								
							}else{
								uni.showToast({
									icon:'none',
									title:'添加失败'
								})
							}
					    }
			
				})
			
			},
			switchChange(e){
				this.addressList.default = e.detail;
				if(e.detail.value==true){
					this.addressList.default=1;
					console.log(this.addressList.default)
				}else{
					this.addressList.default=0
				}
				console.log(e.detail)
			},
			// 三级联动选择
			showMulLinkageThreePicker() {
				console.log(this.showMulLinkageThreePicker)
			    this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				console.log(e);
				var label=e.label;
			    this.pickerText = label;
				var labelArr=label.split('-');
				this.addressList.province=labelArr[0];
				this.addressList.city=labelArr[1];
				this.addressList.district=labelArr[2];
			},
			
			// //地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.direction = data.name;
						console.log('位置名称：' + data.name);
						console.log('详细地址：' + data.address);
						console.log('纬度：' + data.latitude);
						console.log('经度：' + data.longitude);
						this.addressList.longitude=data.longitude
						this.addressList.latitude=data.latitude
					}
				})
			},
			
			
			 
			confirm(){
				let data = this.addressData;
				if(!data.name){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.address){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.area){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(data, this.manageType);
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
		},
		
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				
				this.addressId = JSON.parse(option.data)
				console.log(this.addressId)
				var that=this
				if(that.addressId){
					ef.submit({
						request:{
							s:['USERADDRESSSELFGET',[{id:that.addressId}]]
						},
						callback(data){
							var dataList=fns.checkError(data,'s',function(errno,error){
								uni.showToast({
									title:error,
									icon:'none'
								})
							})
							console.log(dataList);
							that.addressList=dataList.s
							var province=dataList.s.province
							var city=dataList.s.city
							var district=dataList.s.district
							that.pickerText=province+'-'+city+'-'+district
							if(that.addressList.default==1){
								that.Default=true
							}else{
								that.Default=false
							}
						},
						error(err){
							fns.err('err',err,1)
						}
					})
			  }
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
	}
</script>

<style lang="scss">
	page{
		// background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			// color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: #6D6D72;
			margin-left: 20upx;
			
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			// color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		// font-size: $font-lg;
		color: #fff;
		// background-color: $base-color;
		background-color:red;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>

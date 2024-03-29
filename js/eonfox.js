var eonfox = function(config){
	if( config ){
		if( config.debug ){
			eonfox.prototype.debug = true;
		}
		if( config.application ){
			eonfox.prototype.application = config.application;
		}
		if( config.api_server_url ){
			eonfox.prototype.api_server_url = config.api_server_url;
		}
	}
	
};
eonfox.prototype = {
		
		constructor : eonfox,
		
		//是否开启调试模式
		debug : false,
		
		
		//文件服务器URL
		file_server_url : 'http://img.eonfox.cc/',
		
		//正式版 接口地址 应用ID
		// api_server_url : 'https://eapie.eonfox.com/',    
		// application : "zrhzfw",
		
		//测试版

		api_server_url : 'https://developer.eapie.eonfox.com/',  
		application : "muyingshop",
		
		//会话名称
		session_name : 'Eonfox_API_Engine_Session',
		
		websocket_token : '',
		websocket_open : false,
		websocket_client_id : '',
		//心跳检测的定时器ID
		websocket_heartbeat_interval_id : null,
		websocket_heartbeat_ms: 15000,//心跳检测毫秒
		websocket_heartbeat_debug: false,//是否调试
		websocket_connect_parameter: null,//连接websocket的参数
		
		//提交的有效等待时间
		submit_sleep_expire_time : 30,
		
		
		//请求任务
		submit_task : null,
		
		/**
		 * 提交队列
		 */
		submit_queue : [],
		
		
		
		/**
		 * 提交登记
		 */
		submit_register : function( config ){
			config.time = ((new Date()).getTime()/1000);//赋值是 时间戳 （秒）,用于有效时间
			eonfox.prototype.submit_queue.push(config);
		},
		
	
		
		/**
		 * 运行提交
		 */
		submit_run : function(){
			if( eonfox.prototype.submit_queue.length < 1 ){
				return false;//没有执行的提交
			}
			if( eonfox.prototype.submit_queue[0].runtime ){
				return false;//正在执行
			}
			
			//检查是否已经失效
			if( (eonfox.prototype.submit_queue[0].time + eonfox.prototype.submit_sleep_expire_time) < ((new Date()).getTime()/1000) ){
				//已经过了有效期
				//删除第一个元素
				eonfox.prototype.submit_queue.shift();
				//再次提交
				return eonfox.prototype.submit_run();
			}
			
			eonfox.prototype.submit_queue[0].runtime = true;
			var config = eonfox.prototype.submit_queue[0];
			
			//从本地缓存中同步获取指定 key 对应的内容。
			var token = eonfox.prototype.token(function(e){
				config.error(e);
			});
			
			if( !(function(){try{ return token['session_right_token'];}catch(e){return false;}}()) ){
				config.right_data.session = "start";
				config.right_data.application = this.application;
			}else{
				config.right_data.token = token['session_right_token'];
				config.left_data.token = token['session_left_token'];
				config.left_data.session = "start";
				config.left_data.application = this.application;
			}
			
			var request = {
				url : config.url,
				method : "POST",
				dataType : "json",
				responseType : "text",
				header: {"Content-Type":"application/x-www-form-urlencoded"},//跨域，防止请求options
				complete : function(){
					//当请求完成之后调用这个函数，无论成功或失败。执行时间比success晚
					//删除第一个元素
					eonfox.prototype.submit_queue.shift();
					//再次提交
					eonfox.prototype.submit_run();
				},
				success : function(){},
				fail : function(err){
					config.error(err);
				}
			}
			
			//右令牌
			var right_token_post = function(){
				request.data = config.right_data;
				request.success = function(success_data_all){
					//这里要注意，这里是包含了 data
					if(typeof success_data_all != 'object'){
						success_data_all = (function(){try{ return JSON.parse(success_data_all);}catch(e){return false;}}());
					}
					var success_data = success_data_all.data? success_data_all.data : null;
					if(typeof success_data != 'object'){
						console.warn("应用接口响应异常");
						return config.callback(false, success_data_all);
					}
					
					//如果存在请求令牌，直接返回数据
					if( (function(){try{ return success_data['token'];}catch(e){return false;}}()) ){
						//储存令牌
						eonfox.prototype.storage_token(success_data);
						//返回到回调函数
						return config.callback(success_data, success_data_all);
					}else{
						//否则说明没有这个会话，再进行左令牌查询
						return left_token_post();
					}
				};
				if( eonfox.prototype.debug ){
					console.log("post()：右令牌提交:", request);
				}
				
				eonfox.prototype.submit_task = uni.request(request);
			};
			
			
			//左令牌
			var left_token_post = function(){
				request.data = config.left_data;
				request.success = function(success_data_all){
					//这里要注意，这里是包含了 data
					if(typeof success_data_all != 'object'){
						success_data_all = (function(){try{ return JSON.parse(success_data_all);}catch(e){return false;}}());
					}
					var success_data = success_data_all.data? success_data_all.data : null;
					if(typeof success_data != 'object'){
						console.warn("应用接口响应异常");
						return config.callback(false, success_data_all);
					}
					
					//如果没有报错
					if( (function(){try{ return success_data['token'];}catch(e){return false;}}()) ){
						//储存令牌
						eonfox.prototype.storage_token(success_data);
					}
					
					//返回到回调函数
					return config.callback(success_data, success_data_all);
				};
				
				if( eonfox.prototype.debug ){
					console.log("post()：左令牌提交:", request);
				}
				
				eonfox.prototype.submit_task = uni.request(request);
			};
			
			
			return right_token_post();
		},
		
		
		
		
		/* 中断请求任务 */
		abort : function(){
			//清理等待的请求
			eonfox.prototype.submit_queue = [];
			//中断请求任务
			if( eonfox.prototype.submit_task.abort ){
				eonfox.prototype.submit_task.abort();
			}
		},
		
		
		
		/* 提交请求 
		 * 暂时只支持 POST
		 * {
		 * 	url : this.api_server_url,默认接口地址
		 * 	data : {},
		 *  callback : 回调函数 第一个是单个 data，第二个是 全部的返回数据
		 *  error : 错误回调函数
		 * }
		 * 
		 */
		submit : function(config){
			if( eonfox.prototype.debug ){
				console.log("submit()传入参数:", config);
			}
			
			//回调函数
			if( !config.callback || config.callback.constructor != Function ){
				config.callback = function(){};
			}
			if( !config.error || config.error.constructor != Function ){
				config.error = function(){};
			}
			
			//路由
			if(typeof config.url == 'undefined' || typeof config.url != 'string'){
				config.url = this.api_server_url;
			}
			
			config.right_data = {};
			config.left_data = {};
			//请求字符串
			if( config.request ){
				//如果是对象，则先转换为字符串
				if(typeof config.request == "object"){
					config.request = JSON.stringify(config.request)
				}
				if(typeof config.request == "string"){
					config.right_data.data = config.request;
					config.left_data.data = config.request;
				}
			}
			
			//用户传入的data数据
			if( config.data && typeof config.data == "object" ){
				for(var i in config.data){
					config.right_data[i] = config.data[i];
					config.left_data[i] = config.data[i];
				}
			}
			
			if( eonfox.prototype.debug ){
				console.log("post()：right_data、left_data:", config.right_data, config.left_data);
			}
			
			/*//是否强制提交
			config.recursion = config.recursion? true : false;
			//大于0，说明存在队列
			if( this.submit_queue.length > 0 ){
				//判断是否强制提交
				if( config.recursion ){
					//去登记注册
					eonfox.prototype.submit_register(config);
				}else{
					//否则返回错误信息
					console.warn("应用接口提交队列个数：", this.submit_queue.length);
					return config.error("应用接口出现重复提交，前方正在提交队列个数：", this.submit_queue.length);
				}
			}else{
				//去登记注册
				eonfox.prototype.submit_register(config);
			} */
			
			//去登记注册
			eonfox.prototype.submit_register(config);
			//并且调用执行
			eonfox.prototype.submit_run();
		},
		
		
		
		/**
		 * 储存token
		 * 
		 * @param {Object} data
		 */
		storage_token : function(data){
			if( !data ){
				return false;
			}
			
			var token_data = null;
			var exist_right_token = false;
			var exist_left_token = false;
			
			exist_right_token  = (function(){try{ return data['token']['session_right_token'];}catch(e){return false;}}());
			exist_left_token  = (function(){try{ return data['token']['session_left_token'];}catch(e){return false;}}());
			if(exist_right_token && exist_left_token){
				token_data = data['token'];
			}else{
				//有可能是顶级关联对象
				exist_right_token  = (function(){try{ return data['session_right_token'];}catch(e){return false;}}());
				exist_left_token  = (function(){try{ return data['session_left_token'];}catch(e){return false;}}());
				if(exist_right_token && exist_left_token){
					token_data = data;
				}
			}
			
			if(!token_data){
				return false;
			}
			
			//从本地缓存中同步获取指定 key 对应的内容。
			var storage_token = eonfox.prototype.token();
			if( (function(){try{ return storage_token['session_right_token'];}catch(e){return false;}}()) && 
			(function(){try{ return storage_token['session_left_token'];}catch(e){return false;}}()) ){
				
				if(storage_token['session_right_token'] == token_data['session_right_token'] || 
				storage_token['session_left_token'] == token_data['session_left_token'] ){
					if( eonfox.prototype.debug ){
						console.log("需要对比旧token中的当前时间戳,为true则不需要更新token", storage_token['session_now_time'], token_data['session_now_time'], parseInt(storage_token['session_now_time']) > parseInt(token_data['session_now_time']));
					}
					if( parseInt(storage_token['session_now_time']) > parseInt(token_data['session_now_time']) ){
						if( eonfox.prototype.debug ){
							console.log("并发异步，不需要更新token" );
						}
						return false;
					}
					
				}
			}
			
			//console.log( uni.setStorageSync );
			
			try {
				uni.setStorageSync(this.session_name +":"+ this.application, JSON.stringify(token_data));
			} catch (e) {
				console.warn(e);
			    return false;
			}
			
			return true;
	},
	
	
	
	/**
	 * 获取token
	 * 
	 * @param	{Function}	error_function
	 */
	token : function(error_function){
		//异步可能存在覆盖的问题，所以对比已存在的token,如果右左有一个相同则比较当前时间，即最大的当前时间是最新的。
		var storage_token = false;
		try {
			storage_token = uni.getStorageSync(this.session_name +":"+ this.application);
			if( storage_token ){
				storage_token = (function(){try{ return JSON.parse(storage_token);}catch(e){return false;}}());
			}
		} catch (e) {
			console.warn(e);
			if(error_function){
				error_function(e);
			}
			return false;
		}
		
		return storage_token;
	},	
		
		
	/**
	 * 获取左token
	 * 如果没用传入回调函数，那么则直接返回当前左令牌，但是有可能会出现左令牌失效
	 * 正常操作是，传入一个回调函数，左令牌始终是保持最新的。
	 * 
	 * @param	{Function}	#fn
	 */
	left_token : function(fn){
		if(typeof fn != "function"){
			var storage_token = eonfox.prototype.token();
			if( (function(){try{ return storage_token['session_left_token'];}catch(e){return false;}}()) ){
				return storage_token['session_left_token'];
				}else{
					return '';
				} 
		}else{
			eonfox.prototype.submit({
				callback: function(){
					//从本地缓存中同步获取指定 key 对应的内容。
					var left_token = "";
					var storage_token = eonfox.prototype.token();
					if( (function(){try{ return storage_token['session_left_token'];}catch(e){return false;}}()) ){
						left_token = storage_token['session_left_token'];
						}
					fn(left_token);
				}
			});
			return true;
		}
	},	
		
		
	/* 
	 * 获取 websocket 令牌
	 * 传入一个回调函数
	 */
	get_websocket_token : function(fn){
		eonfox.prototype.submit({
			request:{token:['SESSIONWEBSOCKETTOKEN']},
			callback: function(r){
				var token = (function(){try{ return r.data.token.data;}catch(e){return false;}}());
				//console.log('11111111111111', token);
				fn(token);
			}
		});
	},	
	
	
	//连接 websocket
	//data.onSocketOpen
	websocket_connect: function(connectParameter){
		eonfox.prototype.websocket_connect_parameter = connectParameter;
		eonfox.prototype.get_websocket_token(function(token){
			if( !token ){
				//这里弹出错误消息
			}
			
			//链接
		    uni.connectSocket({
			    url:'ws://developer.eapie.eonfox.com:9997',
			    success(){
				   eonfox.prototype.websocket_token = token;
			    },
			    fail(){
				 
			    }
		   })
		});
		
		//WebSocket连接打开监听
		uni.onSocketOpen(function () {
			eonfox.prototype.websocket_open = true;
			if(typeof connectParameter.onSocketOpen == 'function'){
				connectParameter.onSocketOpen();
			}
		});
		
		uni.onSocketClose(function (res) {
			eonfox.prototype.websocket_token = '';
			eonfox.prototype.websocket_open = false;
			eonfox.prototype.websocket_client_id = '';
			//关闭心跳检测
			if( eonfox.prototype.websocket_heartbeat_interval_id ){
				clearInterval( eonfox.prototype.websocket_heartbeat_interval_id );
			}
			
			if(typeof connectParameter.onSocketClose == 'function'){
				connectParameter.onSocketClose(res);
			}
			console.log('WebSocket 已关闭！');
		});
		
		//收到服务器内容
		uni.onSocketMessage(function (res) {
			var r = eonfox.prototype.websocket_data(res);
			//console.log('websocket 检查连接ID值(旧-新)：', eonfox.prototype.websocket_client_id, r.data.client_id);
			if( r.data && r.data.client_id && eonfox.prototype.websocket_client_id != r.data.client_id ){
				console.log('websocket 连接ID 不一致', eonfox.prototype.websocket_client_id, r.data.client_id);
				return eonfox.prototype.websocket_init( r.data.client_id, connectParameter, function(){
					if(typeof connectParameter.onSocketMessage == 'function'){
						connectParameter.onSocketMessage(res);
					}
				});//初始化
			}else{
				if(typeof connectParameter.onSocketMessage == 'function'){
					connectParameter.onSocketMessage(res);
				}
			}
		});
		
		uni.onSocketError(function (res) {
			if(typeof connectParameter.onSocketError == 'function'){
				connectParameter.onSocketError(res);
			}
		  console.log('WebSocket连接打开失败，请检查！');
		});
	},
	
	
	/* 初始化 */
	websocket_init : function( websocket_client_id, connectParameter, callback){
		var errorData = {
			websocket_open : eonfox.prototype.websocket_open,
			websocket_token : eonfox.prototype.websocket_token,
			websocket_client_id : websocket_client_id
		};
		
		if( !eonfox.prototype.websocket_open || !websocket_client_id ){
			if(typeof connectParameter.initError != 'function') connectParameter.initError = function(){};
			console.log('初始化失败！')
			return connectParameter.initError(errorData);
		};
		
		eonfox.prototype.submit({
			request: {
				s: ['SESSIONWEBSOCKETSELFCLIENT', [{
					client_id: websocket_client_id, //连接id
					}]]
			},
			callback: function(){
				//必须是在初始化成功之后 才更新连接ID值
				eonfox.prototype.websocket_client_id = websocket_client_id;
				
				//开启心跳检测
				if( eonfox.prototype.websocket_heartbeat_interval_id ){
					clearInterval( eonfox.prototype.websocket_heartbeat_interval_id );
				}
				eonfox.prototype.websocket_heartbeat_interval_id = setInterval(function(){
					console.log('websocket_init 心跳检测~~~');
					if(eonfox.prototype.websocket_heartbeat_debug){
						//开始去请求 语音接口
						uni.showToast({
							title: 'websocket_init 心跳检测~~~',
							icon:'none'
						});
					}
					eonfox.prototype.websocket_heartbeat(function(errorData){
						if(eonfox.prototype.websocket_heartbeat_debug){
							//开始去请求 语音接口
							uni.showToast({
								title: 'websocket_init 心跳检测失败~~~',
								icon:'none'
							});
						}
						
						console.log('websocket_init 心跳检测失败返回值：', errorData);
						clearInterval( eonfox.prototype.websocket_heartbeat_interval_id );
						eonfox.prototype.websocket_connect(connectParameter);
					});
				}, eonfox.prototype.websocket_heartbeat_ms);
				
				if(typeof connectParameter.initSuccess != 'function') connectParameter.initSuccess = function(){};
				connectParameter.initSuccess();
				console.log('websocket_init 初始化成功！')
				
				if(typeof callback != 'function') callback = function(){};
				callback();
			},
			error : function(){
				console.log('websocket_init 初始化错误！')
				return connectParameter.initError(errorData);
			}
		});
	},
	
	/* 发送心跳 */
	websocket_heartbeat: function(errorFunction){
		var errorData = {
			websocket_open : eonfox.prototype.websocket_open,
			websocket_token : eonfox.prototype.websocket_token,
			websocket_client_id : eonfox.prototype.websocket_client_id
		};
		
		if( !eonfox.prototype.websocket_open || !eonfox.prototype.websocket_token ){
			if(typeof errorFunction != 'function') errorFunction = function(){};
			console.log('初始化失败！')
			uni.showToast({
				title:'初始化失败',
				icon:'none'
			})
			return errorFunction(errorData);
		};
		
		var heartbeat  = JSON.stringify({
			module:'heartbeat',
			application: eonfox.prototype.application,
			token: eonfox.prototype.websocket_token
		});
		
		uni.sendSocketMessage({
		  data: heartbeat,
		  success: function(res){
			  console.log('websocket 保持心跳成功！', res)
		  },
		  fail: function(data){
			  console.log('websocket 保持心跳失败！')
			  return errorFunction(errorData);
		  }
		});
		
	},
	
	
	/* 用户向用户推送 */
	websocket_user_push : function(user_id, message, errorFunction){
		var data = {
			websocket_open : eonfox.prototype.websocket_open,
			websocket_token : eonfox.prototype.websocket_token
		}
		if( !eonfox.prototype.websocket_open || !eonfox.prototype.websocket_token ){
			if(typeof errorFunction != 'function') errorFunction = function(){};
			return errorFunction(data);
		}
		var user_push  = JSON.stringify({
			module:'user_push',
			application: eonfox.prototype.application,
			token: eonfox.prototype.websocket_token,
			user_id:user_id,
			message: message,
		});
		
		uni.sendSocketMessage({
		  data: user_push,
		  success: function(res){
			  console.log('websocket 消息推送成功！', res)
		  },
		  fail: function(data){
			  console.log('websocket 消息推送失败！')
			  return errorFunction(errorData);
		  }
		});
	},
	
	//重启 websocket
	 websocket_restart : function(){
		eonfox.prototype.websocket_close();
		//重启
		eonfox.prototype.websocket_connect(eonfox.prototype.websocket_connect_parameter);
	},
	
	//关闭
	websocket_close : function(){
		eonfox.prototype.websocket_token = '';
		eonfox.prototype.websocket_open = false;
		eonfox.prototype.websocket_client_id = '';
		//关闭心跳检测
		if( eonfox.prototype.websocket_heartbeat_interval_id ){
			clearInterval( eonfox.prototype.websocket_heartbeat_interval_id );
		}
		//关闭
		uni.closeSocket();
	},
	
	/* 获取 websocket 数据 */
	websocket_data : function(res){
		console.log(res);
		if( !res.data ){
			
			return false;
		}
		
		return JSON.parse( res.data );
	}
	
};
export default eonfox;
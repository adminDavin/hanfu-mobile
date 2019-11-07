var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'issue'])
Z([3,'issue-head'])
Z([3,'headPic'])
Z([[7],[3,'headPicShow']])
Z([[7],[3,'headTitleShow']])
Z([[7],[3,'starsShow']])
Z([[7],[3,'textareaShow']])
Z([3,'issue-btn-box'])
Z([[7],[3,'submitShow']])
Z([3,'submit'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-045cf084'])
Z([[7],[3,'isBlock']])
Z([[2,'>'],[[6],[[7],[3,'hList']],[3,'length']],[1,0]])
Z([[7],[3,'showWant']])
Z(z[2])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z(z[0])
Z([3,'__e'])
Z([3,'list b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isFaultAddress']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[7],[3,'cityPickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-store-store'])
Z([3,'index'])
Z([3,'category'])
Z([[7],[3,'categoryList']])
Z([3,'id'])
Z([3,'i'])
Z([3,'box'])
Z([[6],[[7],[3,'category']],[3,'list']])
Z(z[5])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^touchOnGoods']],[[4],[[5],[[4],[[5],[1,'touchOnGoods']]]]]]]]])
Z([[7],[3,'box']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'1-'],[[7],[3,'index']]],[1,'-']],[[7],[3,'i']]])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'^handleFn']],[[4],[[5],[[4],[[5],[[5],[1,'showSpec']],[[4],[[5],[1,false]]]]]]]]]]])
Z([[7],[3,'carNum']])
Z([[2,'+'],[1,'￥'],[[7],[3,'carPrice']]])
Z([3,'2'])
Z(z[10])
Z(z[10])
Z([[4],[[5],[[5],[1,'popup spec']],[[7],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[10])
Z([3,'layer'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'item'])
Z([[7],[3,'insideCarGoods']])
Z(z[1])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'bindChange']]]]]]]]])
Z([1,9])
Z([1,0])
Z([[7],[3,'item']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[9])
Z(z[10])
Z(z[16])
Z(z[17])
Z(z[18])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'catrgoryList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'target'])
Z([[7],[3,'orderbyList']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'target']],[[2,'?:'],[[6],[[7],[3,'target']],[3,'selected']],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'select']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[6],[[7],[3,'target']],[3,'orderbyicon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'target'])
Z([[7],[3,'orderbyList']])
Z(z[0])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'target']],[[2,'?:'],[[6],[[7],[3,'target']],[3,'selected']],[1,'on'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'select']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[6],[[7],[3,'target']],[3,'orderbyicon']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showBack']])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[1,'popup spec']],[[7],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'hideSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'layer'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'discard']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!='],[[7],[3,'selectSpec']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Rindex'])
Z([3,'row'])
Z([[7],[3,'ratingsList']])
Z(z[0])
Z([[6],[[7],[3,'row']],[3,'append']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index-wrapper data-v-08a78c40'])
Z([3,'padding-top:40px;'])
Z([3,'__l'])
Z([3,'data-v-08a78c40'])
Z([[7],[3,'rcommendData']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z([[7],[3,'status']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[1,'popup spec']],[[7],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'layer attr-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'specList']])
Z(z[8])
Z([3,'childIndex'])
Z([3,'childItem'])
Z([[7],[3,'specChildList']])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'childItem']],[3,'pid']],[[6],[[7],[3,'item']],[3,'id']]])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([1,580])
Z([3,'share'])
Z([[7],[3,'shareList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'1'])
Z(z[1])
Z([1,3])
Z([3,'2'])
Z(z[1])
Z([1,true])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([1,false])
Z(z[2])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showHeader']])
Z(z[0])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'goodsList']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'selectedList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'star'])
Z([[7],[3,'stars']])
Z(z[0])
Z([3,'__e'])
Z([3,'uni-rate-icon'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'margin-left:'],[[2,'+'],[[7],[3,'margin']],[1,'px']]],[1,';']])
Z([3,'__l'])
Z([[7],[3,'color']])
Z([[7],[3,'size']])
Z([[2,'?:'],[[7],[3,'isFill']],[1,'star-filled'],[1,'star']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[8])
Z([[7],[3,'activeColor']])
Z(z[10])
Z([3,'star-filled'])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[0])
Z(z[1])
Z(z[2])
Z(z[0])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[8])
Z(z[14])
Z(z[10])
Z(z[16])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[2,'=='],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'list']])
Z(z[2])
Z([3,'btns'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'unpaid']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'back']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'unreceived']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'received']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'completed']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'refunds']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'cancelled']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/goodsList/goodslist.wxml','./components/m-footer-car.wxml','./components/m-store-pro.wxml','./components/myIssue.wxml','./components/share.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-number-box/uni-number-box.wxml','./components/zy-search/zy-search.wxml','./pages/address/address.wxml','./pages/address/addressManage.wxml','./pages/cart/index.wxml','./pages/category/category.wxml','./pages/fengMian/fengMian.wxml','./pages/freeQuan/freeQuan.wxml','./pages/goods/goods-list/goods-list.wxml','./pages/goods/goods-list/goods-list1.wxml','./pages/goods/goods.wxml','./pages/goods/ratings/ratings.wxml','./pages/index/home.wxml','./pages/list1/list.wxml','./pages/list1/product.wxml','./pages/login/login.wxml','./pages/mpvue-citypicker/mpvueCityPicker.wxml','./pages/myOrder/myOrder.wxml','./pages/order/confirmation.wxml','./pages/pai/pai.wxml','./pages/pay/payment/payment.wxml','./pages/ping/ping.wxml','./pages/pingjia/index.wxml','./pages/product/product.wxml','./pages/search/search.wxml','./pages/tabBar/cart/cart.wxml','./pages/tabBar/category/category.wxml','./pages/tabBar/user/user.wxml','./pages/tixian/tixian.wxml','./pages/uni-icons/uni-icons.wxml','./pages/uni-rate/uni-rate.wxml','./pages/use/use.wxml','./pages/user/order_list/order_list.wxml','./pages/wait/wait.wxml','./pages/xing/xing.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var fE=_n('view')
_rz(z,fE,'class',0,e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',1,e,s,gg)
var lK=_n('slot')
_rz(z,lK,'name',2,e,s,gg)
_(hG,lK)
var oH=_v()
_(hG,oH)
if(_oz(z,3,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(hG,cI)
if(_oz(z,4,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(hG,oJ)
if(_oz(z,5,e,s,gg)){oJ.wxVkey=1
}
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(fE,hG)
var cF=_v()
_(fE,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
var aL=_n('view')
_rz(z,aL,'class',7,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,8,e,s,gg)){tM.wxVkey=1
}
var eN=_n('slot')
_rz(z,eN,'name',9,e,s,gg)
_(aL,eN)
tM.wxXCkey=1
_(fE,aL)
cF.wxXCkey=1
_(r,fE)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oP=_v()
_(r,oP)
if(_oz(z,0,e,s,gg)){oP.wxVkey=1
}
oP.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,1,e,s,gg)){hU.wxVkey=1
var oV=_v()
_(hU,oV)
if(_oz(z,2,e,s,gg)){oV.wxVkey=1
}
var cW=_v()
_(hU,cW)
if(_oz(z,3,e,s,gg)){cW.wxVkey=1
}
oV.wxXCkey=1
cW.wxXCkey=1
}
else{hU.wxVkey=2
var oX=_v()
_(hU,oX)
if(_oz(z,4,e,s,gg)){oX.wxVkey=1
}
var lY=_v()
_(hU,lY)
if(_oz(z,5,e,s,gg)){lY.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
}
hU.wxXCkey=1
_(r,cT)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var t1=_v()
_(r,t1)
var e2=function(o4,b3,x5,gg){
var f7=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],o4,b3,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,7,o4,b3,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(x5,f7)
return x5
}
t1.wxXCkey=2
_2z(z,2,e2,e,s,gg,t1,'item','index','index')
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o0=_mz(z,'mpvue-city-picker',['bind:__l',0,'bind:onConfirm',1,'class',1,'data-event-opts',2,'data-ref',3,'pickerValueDefault',4,'themeColor',5,'vueId',6],[],e,s,gg)
_(r,o0)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oBB=_n('view')
_rz(z,oBB,'class',0,e,s,gg)
var lCB=_v()
_(oBB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_v()
_(bGB,xIB)
var oJB=function(cLB,fKB,hMB,gg){
var cOB=_mz(z,'m-store-pro',['bind:__l',9,'bind:touchOnGoods',1,'data-event-opts',2,'rowData',3,'vueId',4],[],cLB,fKB,gg)
_(hMB,cOB)
return hMB
}
xIB.wxXCkey=4
_2z(z,7,oJB,eFB,tEB,gg,xIB,'box','i','i')
return bGB
}
lCB.wxXCkey=4
_2z(z,3,aDB,e,s,gg,lCB,'category','index','id')
var oPB=_mz(z,'m-footer-car',['bind:__l',14,'bind:handleFn',1,'data-event-opts',2,'num',3,'price',4,'vueId',5],[],e,s,gg)
_(oBB,oPB)
var lQB=_mz(z,'view',['bindtap',20,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var aRB=_mz(z,'view',['catchtap',24,'class',1,'data-event-opts',2],[],e,s,gg)
var tSB=_v()
_(aRB,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_mz(z,'uni-number-box',['bind:__l',31,'bind:change',1,'data-event-opts',2,'max',3,'min',4,'rowData',5,'vueId',6],[],oVB,bUB,gg)
_(xWB,fYB)
return xWB
}
tSB.wxXCkey=4
_2z(z,29,eTB,e,s,gg,tSB,'item','index','index')
var cZB=_mz(z,'m-footer-car',['bind:__l',38,'bind:handleFn',1,'data-event-opts',2,'num',3,'price',4,'vueId',5],[],e,s,gg)
_(aRB,cZB)
_(lQB,aRB)
_(oBB,lQB)
_(r,oBB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o2B=_v()
_(r,o2B)
if(_oz(z,0,e,s,gg)){o2B.wxVkey=1
}
o2B.wxXCkey=1
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var a6B=_v()
_(r,a6B)
var t7B=function(b9B,e8B,o0B,gg){
var oBC=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],b9B,e8B,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,7,b9B,e8B,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
_(o0B,oBC)
return o0B
}
a6B.wxXCkey=2
_2z(z,2,t7B,e,s,gg,a6B,'target','index','index')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var hEC=_v()
_(r,hEC)
var oFC=function(oHC,cGC,lIC,gg){
var tKC=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],oHC,cGC,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,7,oHC,cGC,gg)){eLC.wxVkey=1
}
eLC.wxXCkey=1
_(lIC,tKC)
return lIC
}
hEC.wxXCkey=2
_2z(z,2,oFC,e,s,gg,hEC,'target','index','index')
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oNC=_n('view')
var xOC=_v()
_(oNC,xOC)
if(_oz(z,0,e,s,gg)){xOC.wxVkey=1
}
var oPC=_mz(z,'view',['bindtap',1,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var fQC=_mz(z,'view',['catchtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,8,e,s,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
_(oPC,fQC)
_(oNC,oPC)
xOC.wxXCkey=1
_(r,oNC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oTC=_v()
_(r,oTC)
var cUC=function(lWC,oVC,aXC,gg){
var eZC=_v()
_(aXC,eZC)
if(_oz(z,4,lWC,oVC,gg)){eZC.wxVkey=1
}
eZC.wxXCkey=1
return aXC
}
oTC.wxXCkey=2
_2z(z,2,cUC,e,s,gg,oTC,'row','Rindex','Rindex')
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o2C=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var x3C=_mz(z,'goods-list',['bind:__l',2,'class',1,'goodsList',2,'vueId',3],[],e,s,gg)
_(o2C,x3C)
var o4C=_mz(z,'uni-load-more',['bind:__l',6,'class',1,'status',2,'vueId',3],[],e,s,gg)
_(o2C,o4C)
_(r,o2C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var c6C=_mz(z,'uni-load-more',['bind:__l',0,'status',1,'vueId',1],[],e,s,gg)
_(r,c6C)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o8C=_n('view')
_rz(z,o8C,'class',0,e,s,gg)
var c9C=_mz(z,'view',['bindtap',1,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var o0C=_mz(z,'view',['catchtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var lAD=_v()
_(o0C,lAD)
var aBD=function(eDD,tCD,bED,gg){
var xGD=_v()
_(bED,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_v()
_(hKD,cMD)
if(_oz(z,16,cJD,fID,gg)){cMD.wxVkey=1
}
cMD.wxXCkey=1
return hKD
}
xGD.wxXCkey=2
_2z(z,14,oHD,eDD,tCD,gg,xGD,'childItem','childIndex','childIndex')
return bED
}
lAD.wxXCkey=2
_2z(z,10,aBD,e,s,gg,lAD,'item','index','index')
_(c9C,o0C)
_(o8C,c9C)
var oND=_mz(z,'share',['bind:__l',17,'class',1,'contentHeight',2,'data-ref',3,'shareList',4,'vueId',5],[],e,s,gg)
_(o8C,oND)
_(r,o8C)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var fWD=_n('view')
_rz(z,fWD,'class',0,e,s,gg)
var cXD=_mz(z,'my-issue',['bind:__l',1,'vueId',1],[],e,s,gg)
_(fWD,cXD)
var hYD=_mz(z,'my-issue',['bind:__l',3,'score',1,'vueId',2],[],e,s,gg)
_(fWD,hYD)
var oZD=_mz(z,'my-issue',['bind:__l',6,'starsDisabled',1,'vueId',2],[],e,s,gg)
_(fWD,oZD)
_(r,fWD)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var o2D=_v()
_(r,o2D)
if(_oz(z,0,e,s,gg)){o2D.wxVkey=1
}
o2D.wxXCkey=1
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var a4D=_mz(z,'zy-search',['bind:__l',0,'isBlock',1,'isFocus',1,'showWant',2,'vueId',3],[],e,s,gg)
_(r,a4D)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var e6D=_n('view')
var b7D=_v()
_(e6D,b7D)
if(_oz(z,0,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(e6D,o8D)
if(_oz(z,1,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(e6D,x9D)
if(_oz(z,2,e,s,gg)){x9D.wxVkey=1
}
var o0D=_v()
_(e6D,o0D)
if(_oz(z,3,e,s,gg)){o0D.wxVkey=1
}
var fAE=_v()
_(e6D,fAE)
if(_oz(z,4,e,s,gg)){fAE.wxVkey=1
}
b7D.wxXCkey=1
o8D.wxXCkey=1
x9D.wxXCkey=1
o0D.wxXCkey=1
fAE.wxXCkey=1
_(r,e6D)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var lGE=_n('view')
var aHE=_v()
_(lGE,aHE)
var tIE=function(bKE,eJE,oLE,gg){
var oNE=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'style',3],[],bKE,eJE,gg)
var fOE=_mz(z,'uni-icons',['bind:__l',8,'color',1,'size',2,'type',3,'vueId',4],[],bKE,eJE,gg)
_(oNE,fOE)
var cPE=_mz(z,'uni-icons',['bind:__l',13,'color',1,'size',2,'type',3,'vueId',4],[],bKE,eJE,gg)
_(oNE,cPE)
_(oLE,oNE)
return oLE
}
aHE.wxXCkey=4
_2z(z,2,tIE,e,s,gg,aHE,'star','index','index')
var hQE=_v()
_(lGE,hQE)
var oRE=function(oTE,cSE,lUE,gg){
var tWE=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2,'style',3],[],oTE,cSE,gg)
var eXE=_mz(z,'uni-icons',['bind:__l',26,'color',1,'size',2,'type',3,'vueId',4],[],oTE,cSE,gg)
_(tWE,eXE)
var bYE=_mz(z,'uni-icons',['bind:__l',31,'color',1,'size',2,'type',3,'vueId',4],[],oTE,cSE,gg)
_(tWE,bYE)
_(lUE,tWE)
return lUE
}
hQE.wxXCkey=4
_2z(z,20,oRE,e,s,gg,hQE,'star','index','index')
_(r,lGE)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var o2E=_n('view')
_rz(z,o2E,'class',0,e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,1,e,s,gg)){f3E.wxVkey=1
}
var c4E=_v()
_(o2E,c4E)
var h5E=function(c7E,o6E,o8E,gg){
var a0E=_n('view')
_rz(z,a0E,'class',6,c7E,o6E,gg)
var tAF=_v()
_(a0E,tAF)
if(_oz(z,7,c7E,o6E,gg)){tAF.wxVkey=1
}
var eBF=_v()
_(a0E,eBF)
if(_oz(z,8,c7E,o6E,gg)){eBF.wxVkey=1
}
var bCF=_v()
_(a0E,bCF)
if(_oz(z,9,c7E,o6E,gg)){bCF.wxVkey=1
}
var oDF=_v()
_(a0E,oDF)
if(_oz(z,10,c7E,o6E,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(a0E,xEF)
if(_oz(z,11,c7E,o6E,gg)){xEF.wxVkey=1
}
var oFF=_v()
_(a0E,oFF)
if(_oz(z,12,c7E,o6E,gg)){oFF.wxVkey=1
}
var fGF=_v()
_(a0E,fGF)
if(_oz(z,13,c7E,o6E,gg)){fGF.wxVkey=1
}
tAF.wxXCkey=1
eBF.wxXCkey=1
bCF.wxXCkey=1
oDF.wxXCkey=1
xEF.wxXCkey=1
oFF.wxXCkey=1
fGF.wxXCkey=1
_(o8E,a0E)
return o8E
}
c4E.wxXCkey=2
_2z(z,4,h5E,e,s,gg,c4E,'row','index','index')
f3E.wxXCkey=1
_(r,o2E)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/home","pages/category/category","pages/freeQuan/freeQuan","pages/freeQuan/freeQuan","pages/ping/ping","pages/use/use","pages/login/login","pages/fengMian/fengMian","pages/search/search","pages/product/product","pages/xing/xing","pages/cart/index","pages/tabBar/cart/cart","pages/tabBar/cart/cart","pages/tabBar/category/category","pages/order/confirmation","pages/myOrder/myOrder","pages/pay/payment/payment","pages/tabBar/user/user","pages/user/order_list/order_list","pages/pingjia/index","pages/uni-icons/uni-icons","pages/uni-rate/uni-rate","pages/wait/wait","pages/tixian/tixian","pages/pai/pai","pages/address/address","pages/address/addressManage","pages/list1/list","pages/goods/ratings/ratings","pages/list1/product","pages/goods/goods-list/goods-list1","pages/goods/goods-list/goods-list","pages/goods/goods"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#333333","selectedColor":"#f06c7a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/home","iconPath":"static/img/tabBar/home.png","selectedIconPath":"static/img/tabBar/home-on.png","text":"首页"},{"pagePath":"pages/tabBar/category/category","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"},{"pagePath":"pages/tabBar/cart/cart","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"购物车"},{"pagePath":"pages/tabBar/user/user","iconPath":"static/img/tabBar/category.png","selectedIconPath":"static/img/tabBar/category-on.png","text":"分类"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni_Test","compilerVersion":"2.3.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/goodsList/goodslist.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/goodsList/goodslist.wxml']=$gwx('./components/goodsList/goodslist.wxml');

__wxAppCode__['components/m-footer-car.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-footer-car.wxml']=$gwx('./components/m-footer-car.wxml');

__wxAppCode__['components/m-store-pro.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-store-pro.wxml']=$gwx('./components/m-store-pro.wxml');

__wxAppCode__['components/myIssue.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/myIssue.wxml']=$gwx('./components/myIssue.wxml');

__wxAppCode__['components/share.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/share.wxml']=$gwx('./components/share.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-number-box/uni-number-box.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-number-box/uni-number-box.wxml']=$gwx('./components/uni-number-box/uni-number-box.wxml');

__wxAppCode__['components/zy-search/zy-search.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/zy-search/zy-search.wxml']=$gwx('./components/zy-search/zy-search.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"收获地址","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/address/addressManage.json']={"navigationBarTitleText":"添加收获地址","usingComponents":{"mpvue-city-picker":"/pages/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/address/addressManage.wxml']=$gwx('./pages/address/addressManage.wxml');

__wxAppCode__['pages/cart/index.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{"m-store-pro":"/components/m-store-pro","uni-number-box":"/components/uni-number-box/uni-number-box","m-footer-car":"/components/m-footer-car"}};
__wxAppCode__['pages/cart/index.wxml']=$gwx('./pages/cart/index.wxml');

__wxAppCode__['pages/category/category.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/fengMian/fengMian.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/fengMian/fengMian.wxml']=$gwx('./pages/fengMian/fengMian.wxml');

__wxAppCode__['pages/freeQuan/freeQuan.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/freeQuan/freeQuan.wxml']=$gwx('./pages/freeQuan/freeQuan.wxml');

__wxAppCode__['pages/goods/goods-list/goods-list.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods-list/goods-list.wxml']=$gwx('./pages/goods/goods-list/goods-list.wxml');

__wxAppCode__['pages/goods/goods-list/goods-list1.json']={"navigationBarTitleText":"","enablePullDownRefresh":true,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods-list/goods-list1.wxml']=$gwx('./pages/goods/goods-list/goods-list1.wxml');

__wxAppCode__['pages/goods/goods.json']={"navigationBarTitleText":"","navigationBarBackgroundColor":"#f1f1f1","onReachBottomDistance":50,"titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/goods/goods.wxml']=$gwx('./pages/goods/goods.wxml');

__wxAppCode__['pages/goods/ratings/ratings.json']={"navigationBarTitleText":"商品评论","enablePullDownRefresh":true,"onReachBottomDistance":50,"backgroundColorTop":"#ffffff","backgroundColorBottom":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/goods/ratings/ratings.wxml']=$gwx('./pages/goods/ratings/ratings.wxml');

__wxAppCode__['pages/index/home.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{"goods-list":"/components/goodsList/goodslist","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/index/home.wxml']=$gwx('./pages/index/home.wxml');

__wxAppCode__['pages/list1/list.json']={"navigationBarTitleText":"添加收获地址","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/list1/list.wxml']=$gwx('./pages/list1/list.wxml');

__wxAppCode__['pages/list1/product.json']={"navigationBarTitleText":"添加收获地址","usingComponents":{"share":"/components/share"}};
__wxAppCode__['pages/list1/product.wxml']=$gwx('./pages/list1/product.wxml');

__wxAppCode__['pages/login/login.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./pages/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['pages/myOrder/myOrder.json']={"usingComponents":{}};
__wxAppCode__['pages/myOrder/myOrder.wxml']=$gwx('./pages/myOrder/myOrder.wxml');

__wxAppCode__['pages/order/confirmation.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/order/confirmation.wxml']=$gwx('./pages/order/confirmation.wxml');

__wxAppCode__['pages/pai/pai.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/pai/pai.wxml']=$gwx('./pages/pai/pai.wxml');

__wxAppCode__['pages/pay/payment/payment.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/pay/payment/payment.wxml']=$gwx('./pages/pay/payment/payment.wxml');

__wxAppCode__['pages/ping/ping.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/ping/ping.wxml']=$gwx('./pages/ping/ping.wxml');

__wxAppCode__['pages/pingjia/index.json']={"usingComponents":{"my-issue":"/components/myIssue"}};
__wxAppCode__['pages/pingjia/index.wxml']=$gwx('./pages/pingjia/index.wxml');

__wxAppCode__['pages/product/product.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{"goods-list":"/components/goodsList/goodslist","uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/search/search.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{"zy-search":"/components/zy-search/zy-search"}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/tabBar/cart/cart.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/cart/cart.wxml']=$gwx('./pages/tabBar/cart/cart.wxml');

__wxAppCode__['pages/tabBar/category/category.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/category/category.wxml']=$gwx('./pages/tabBar/category/category.wxml');

__wxAppCode__['pages/tabBar/user/user.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/tabBar/user/user.wxml']=$gwx('./pages/tabBar/user/user.wxml');

__wxAppCode__['pages/tixian/tixian.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/tixian/tixian.wxml']=$gwx('./pages/tixian/tixian.wxml');

__wxAppCode__['pages/uni-icons/uni-icons.json']={"usingComponents":{}};
__wxAppCode__['pages/uni-icons/uni-icons.wxml']=$gwx('./pages/uni-icons/uni-icons.wxml');

__wxAppCode__['pages/uni-rate/uni-rate.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{"uni-icons":"/pages/uni-icons/uni-icons"}};
__wxAppCode__['pages/uni-rate/uni-rate.wxml']=$gwx('./pages/uni-rate/uni-rate.wxml');

__wxAppCode__['pages/use/use.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/use/use.wxml']=$gwx('./pages/use/use.wxml');

__wxAppCode__['pages/user/order_list/order_list.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/user/order_list/order_list.wxml']=$gwx('./pages/user/order_list/order_list.wxml');

__wxAppCode__['pages/wait/wait.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/wait/wait.wxml']=$gwx('./pages/wait/wait.wxml');

__wxAppCode__['pages/xing/xing.json']={"titleNView":false,"softinputNavBar":"none","usingComponents":{}};
__wxAppCode__['pages/xing/xing.wxml']=$gwx('./pages/xing/xing.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"02b9":function(n,e,t){"use strict";t.r(e);var o=t("228d");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("894a");var r,c,a=t("2877"),f=Object(a["a"])(o["default"],r,c,!1,null,null,null);e["default"]=f.exports},"228d":function(n,e,t){"use strict";t.r(e);var o=t("75b3"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a},"75b3":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},"894a":function(n,e,t){"use strict";var o=t("9c82"),u=t.n(o);u.a},"9c82":function(n,e,t){},f332:function(n,e,t){"use strict";(function(n){t("22dd"),t("921b");var e=u(t("66fd")),o=u(t("02b9"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){c(n,e,t[e])})}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var a=new e.default(r({},o.default));n(a).$mount()}).call(this,t("6e42")["createApp"])}},[["f332","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, i = n[0], c = n[1], a = n[2], m = 0, p = []; m < i.length; m++) {
      r = i[m], s[r] && p.push(s[r][0]), s[r] = 0;
    }

    for (o in c) {
      Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    }

    l && l(n);

    while (p.length) {
      p.shift()();
    }

    return u.push.apply(u, a || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== s[i] && (o = !1);
      }

      o && (u.splice(n--, 1), e = c(c.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      u = [];

  function i(e) {
    return c.p + "" + e + ".js";
  }

  function c(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, c), t.l = !0, t.exports;
  }

  c.e = function (e) {
    var n = [],
        t = {
      "components/goodsList/goodslist": 1,
      "components/uni-load-more/uni-load-more": 1,
      "components/zy-search/zy-search": 1,
      "components/m-footer-car": 1,
      "components/m-store-pro": 1,
      "components/uni-number-box/uni-number-box": 1,
      "components/myIssue": 1,
      "pages/mpvue-citypicker/mpvueCityPicker": 1,
      "components/share": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/goodsList/goodslist": "components/goodsList/goodslist",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/zy-search/zy-search": "components/zy-search/zy-search",
        "components/m-footer-car": "components/m-footer-car",
        "components/m-store-pro": "components/m-store-pro",
        "components/uni-number-box/uni-number-box": "components/uni-number-box/uni-number-box",
        "components/myIssue": "components/myIssue",
        "pages/mpvue-citypicker/mpvueCityPicker": "pages/mpvue-citypicker/mpvueCityPicker",
        "components/share": "components/share"
      }[e] || e) + ".wxss", s = c.p + o, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var a = u[i],
            m = a.getAttribute("data-href") || a.getAttribute("href");
        if ("stylesheet" === a.rel && (m === o || m === s)) return n();
      }

      var p = document.getElementsByTagName("style");

      for (i = 0; i < p.length; i++) {
        a = p[i], m = a.getAttribute("data-href");
        if (m === o || m === s) return n();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = n, l.onerror = function (n) {
        var o = n && n.target && n.target.src || s,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        u.request = o, delete r[e], l.parentNode.removeChild(l), t(u);
      }, l.href = s;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(l);
    }).then(function () {
      r[e] = 0;
    }));
    var o = s[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var u = new Promise(function (n, t) {
        o = s[e] = [n, t];
      });
      n.push(o[2] = u);
      var a,
          m = document.createElement("script");
      m.charset = "utf-8", m.timeout = 120, c.nc && m.setAttribute("nonce", c.nc), m.src = i(e), a = function a(n) {
        m.onerror = m.onload = null, clearTimeout(p);
        var t = s[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            u.type = o, u.request = r, t[1](u);
          }

          s[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        a({
          type: "timeout",
          target: m
        });
      }, 12e4);
      m.onerror = m.onload = a, document.head.appendChild(m);
    }
    return Promise.all(n);
  }, c.m = e, c.c = o, c.d = function (e, n, t) {
    c.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, n) {
    if (1 & n && (e = c(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (c.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      c.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, c.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(n, "a", n), n;
  }, c.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var a = global["webpackJsonp"] = global["webpackJsonp"] || [],
      m = a.push.bind(a);
  a.push = n, a = a.slice();

  for (var p = 0; p < a.length; p++) {
    n(a[p]);
  }

  var l = m;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"02b5":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],u=t;l.default=u},"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function u(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var u=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(u){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),n="";if(u.length>1){var r=u.pop();n=u.join("---COMMA---"),0===r.indexOf(" at ")?n+=r:n+="---COMMA---"+r}else n=u[0];return n}Object.defineProperty(l,"__esModule",{value:!0}),l.default=u},"102a":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t="http://192.168.1.101:9097/",u="http://192.168.1.101:9098/",n="http://192.168.1.101:8082/",r="http://localhost:9100/",v="http://localhost:9100/goods",o="http://localhost:9095/goods",i="http://localhost:9100/product",b={url:t,urlPay:u,urlAdress:n,urlProduct:r,product:v,getFile:o,getType:i};l.default=b},"22dd":function(e,l,a){},2877:function(e,l,a){"use strict";function t(e,l,a,t,u,n,r,v){var o,i="function"===typeof e?e.options:e;if(l&&(i.render=l,i.staticRenderFns=a,i._compiled=!0),t&&(i.functional=!0),n&&(i._scopeId="data-v-"+n),r?(o=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},i._ssrRegister=o):u&&(o=v?function(){u.call(this,this.$root.$options.shadowRoot)}:u),o)if(i.functional){i._injectStyles=o;var b=i.render;i.render=function(e,l){return o.call(l),b(e,l)}}else{var s=i.beforeCreate;i.beforeCreate=s?[].concat(s,o):[o]}return{exports:e,options:i}}a.d(l,"a",function(){return t})},"2da9":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],u=t;l.default=u},"5c03":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],u=t;l.default=u},"5f36":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAD9klEQVRYR8WXX2gcVRTGv3M3u9tsNDREiq2suzOz40REUkNEQVDBivVPtVYJ1JeiqIiIiIr4oNAXsaDgm08iiCFCWsU/RBAx0dqC0MUQiCHtZnc2CV2koLRpdLPu7P3kSiJJupvMpls6r/ec8/3mzNzvnivY4jM5OXlNe3v7ewDuJ3ma5Muu6+a3Uk62kjQ8PBzp6+t7VUTeARBdrjEUi8WeTSaT5WZrbgmiWCz2aa2/IblrleCSiDxn2/bgFYcwnyGRSAyR3FdH7ExbW9uDqVSq0AxI053I5/OvADgCIL5eSEQ0yU+UUi9alrUUFqQpCN/3d2utvwaQ3ECgrLU+5Lru0ZZDlEqlRLlc/hTAgRDFfxORh23bng0Ri1CdyOVy8Ugk8jzJ9wHENitsPovW+mOSr7muu7BpfKOAbDab6O7uvklrfTOAPQCeBNC5WcGVdZJVEfme5FdKqWmt9XQmkzlXL3+lE1IqldorlUonyVtJPgSgH4AFwGzDUB3bAPACAGNk0ySPB0HwI4CS53l/ma7J7OxsV7VaHQCwXynVS/JaEUmQVGHfusm4f0TkotY6p5QaqVQqg5LP598F8AaAKyW6ISPJbw3ECADT/qv1nDYQTwD4CMD2q0BRJfmWZLPZaFdX1+sADofZfq0CXXbXocXFxRf+++t939+mtf4QwNOtEglR5+dYLHYwmUye/X/rzc3N7QqC4DOSd4cocLkhxSAIBjzPO2UKrdn/xWLxtiAIjomIfbkqjfJJLojIM47jfL4Sc4kJFQqFR0maMyK0OzYBbFz0sGVZR8w/0RDCTE39/f1vkny73nHdhOCa0OXzZDAIgpd6enourl6sa8dTU1M74/H4TwDcrYquzyN5FsDeTCYzuX6tLsTybvkFQG+rIACcUUrdY1nW76EgxsfHt3d2dp4AcEurIESkoJTak06n/VAQMzMzO0TkOACvVRAk50nudV13KhREqVS6sVwujwJwWgUhIiWl1L50Ov1rKIhCoeCR/A5AqlUQAM6RPJDJZE6GhejVWo+IyA0thPgTwIDjOD+EgvB9/w6t9ZcArt8Ewty2LpC8TkTaNok1s+ZTjuOY0WGth9RLzOVy94qIse/ueusk/1BKjdZqNTP+T4nIfSLyAIC7AGxrAPO3iByybftYKIhCoWAOsS9IroZYIJkXkcFarTYajUanV19wfN8388hukgdJGqCd60aDhveRumY1MTHR0dHR8YGIPAbgvNb6ZDQaPbq0tHTC87xFEWGj1o+NjbU5jrMjCILHtdaPiMidywPTKaXUgGVZxVCdMEHz8/Pt1WrVTN7nbdvObSTcCMhcmCqVyu0kU5FIJJtKpS7xCJP7L8jJrBUMCpKaAAAAAElFTkSuQmCC"},"60d6":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/index/home":{titleNView:!1,softinputNavBar:"none"},"pages/category/category":{titleNView:!1,softinputNavBar:"none"},"pages/freeQuan/freeQuan":{titleNView:!1,softinputNavBar:"none",usingComponents:{}},"pages/ping/ping":{titleNView:!1,softinputNavBar:"none"},"pages/use/use":{titleNView:!1,softinputNavBar:"none"},"pages/login/login":{titleNView:!1,softinputNavBar:"none"},"pages/fengMian/fengMian":{titleNView:!1,softinputNavBar:"none"},"pages/search/search":{titleNView:!1,softinputNavBar:"none"},"pages/product/product":{titleNView:!1,softinputNavBar:"none"},"pages/xing/xing":{titleNView:!1,softinputNavBar:"none"},"pages/cart/index":{titleNView:!1,softinputNavBar:"none"},"pages/tabBar/cart/cart":{titleNView:!1,softinputNavBar:"none",usingComponents:{}},"pages/tabBar/category/category":{titleNView:!1,softinputNavBar:"none"},"pages/order/confirmation":{titleNView:!1,softinputNavBar:"none"},"pages/myOrder/myOrder":{},"pages/pay/payment/payment":{titleNView:!1,softinputNavBar:"none"},"pages/tabBar/user/user":{titleNView:!1,softinputNavBar:"none"},"pages/user/order_list/order_list":{titleNView:!1,softinputNavBar:"none"},"pages/pingjia/index":{},"pages/uni-icons/uni-icons":{},"pages/uni-rate/uni-rate":{titleNView:!1,softinputNavBar:"none"},"pages/wait/wait":{titleNView:!1,softinputNavBar:"none"},"pages/tixian/tixian":{titleNView:!1,softinputNavBar:"none"},"pages/pai/pai":{titleNView:!1,softinputNavBar:"none"},"pages/address/address":{navigationBarTitleText:"收获地址"},"pages/address/addressManage":{navigationBarTitleText:"添加收获地址"},"pages/list1/list":{navigationBarTitleText:"添加收获地址"},"pages/goods/ratings/ratings":{navigationBarTitleText:"商品评论",enablePullDownRefresh:!0,onReachBottomDistance:50,backgroundColorTop:"#ffffff",backgroundColorBottom:"#ffffff"},"pages/list1/product":{navigationBarTitleText:"添加收获地址"},"pages/goods/goods-list/goods-list1":{navigationBarTitleText:"",enablePullDownRefresh:!0,bounce:"none"},"pages/goods/goods-list/goods-list":{navigationBarTitleText:"",enablePullDownRefresh:!0,bounce:"none"},"pages/goods/goods":{navigationBarTitleText:"",navigationBarBackgroundColor:"#f1f1f1",onReachBottomDistance:50,titleNView:!1,bounce:"none"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};l.default=t},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function u(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function v(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function o(e){return null!==e&&"object"===typeof e}var i=Object.prototype.toString;function b(e){return"[object Object]"===i.call(e)}function s(e){return"[object RegExp]"===i.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function p(e){return u(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===i?JSON.stringify(e,null,2):String(e)}function d(e){var l=parseFloat(e);return isNaN(l)?e:l}function h(e,l){for(var a=Object.create(null),t=e.split(","),u=0;u<t.length;u++)a[t[u]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}h("slot,component",!0);var y=h("key,ref,slot,slot-scope,is");function g(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function m(e,l){return _.call(e,l)}function k(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,A=k(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),j=k(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),O=/\B([A-Z])/g,S=k(function(e){return e.replace(O,"-$1").toLowerCase()});function x(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function E(e,l){return e.bind(l)}var $=Function.prototype.bind?E:x;function C(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function T(e,l){for(var a in l)e[a]=l[a];return e}function N(e){for(var l={},a=0;a<e.length;a++)e[a]&&T(l,e[a]);return l}function D(e,l,a){}var I=function(e,l,a){return!1},P=function(e){return e};function R(e,l){if(e===l)return!0;var a=o(e),t=o(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var u=Array.isArray(e),n=Array.isArray(l);if(u&&n)return e.length===l.length&&e.every(function(e,a){return R(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(u||n)return!1;var r=Object.keys(e),v=Object.keys(l);return r.length===v.length&&r.every(function(a){return R(e[a],l[a])})}catch(i){return!1}}function B(e,l){for(var a=0;a<e.length;a++)if(R(e[a],l))return a;return-1}function M(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var V=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:D,parsePlatformTagName:P,mustUseProp:I,async:!0,_lifecycleHooks:U},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function J(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var H=new RegExp("[^"+L.source+".$_\\d]");function z(e){if(!H.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var W,K="__proto__"in{},G="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Q=G&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),ee=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),le=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),ae=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(G)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(eu){}var ue=function(){return void 0===W&&(W=!G&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),W},ne=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var ve,oe="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);ve="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ie=D,be=0,se=function(){this.id=be++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function pe(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){g(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var fe=function(e,l,a,t,u,n,r,v){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=u,this.ns=void 0,this.context=n,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=v,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},de={child:{configurable:!0}};de.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,de);var he=function(e){void 0===e&&(e="");var l=new fe;return l.text=e,l.isComment=!0,l};function ye(e){return new fe(void 0,void 0,void 0,String(e))}function ge(e){var l=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var _e=Array.prototype,me=Object.create(_e),ke=["push","pop","shift","unshift","splice","sort","reverse"];ke.forEach(function(e){var l=_e[e];J(me,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var u,n=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":u=a;break;case"splice":u=a.slice(2);break}return u&&r.observeArray(u),r.dep.notify(),n})});var we=Object.getOwnPropertyNames(me),Ae=!0;function je(e){Ae=e}var Oe=function(e){this.value=e,this.dep=new se,this.vmCount=0,J(e,"__ob__",this),Array.isArray(e)?(K?e.push!==e.__proto__.push?xe(e,me,we):Se(e,me):xe(e,me,we),this.observeArray(e)):this.walk(e)};function Se(e,l){e.__proto__=l}function xe(e,l,a){for(var t=0,u=a.length;t<u;t++){var n=a[t];J(e,n,l[n])}}function Ee(e,l){var a;if(o(e)&&!(e instanceof fe))return m(e,"__ob__")&&e.__ob__ instanceof Oe?a=e.__ob__:Ae&&!ue()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new Oe(e)),l&&a&&a.vmCount++,a}function $e(e,l,a,t,u){var n=new se,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var v=r&&r.get,o=r&&r.set;v&&!o||2!==arguments.length||(a=e[l]);var i=!u&&Ee(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=v?v.call(e):a;return se.SharedObject.target&&(n.depend(),i&&(i.dep.depend(),Array.isArray(l)&&Ne(l))),l},set:function(l){var t=v?v.call(e):a;l===t||l!==l&&t!==t||v&&!o||(o?o.call(e,l):a=l,i=!u&&Ee(l),n.notify())}})}}function Ce(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?($e(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Te(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Ne(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Ne(l)}Oe.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)$e(e,l[a])},Oe.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Ee(e[l])};var De=q.optionMergeStrategies;function Ie(e,l){if(!l)return e;for(var a,t,u,n=oe?Reflect.ownKeys(l):Object.keys(l),r=0;r<n.length;r++)a=n[r],"__ob__"!==a&&(t=e[a],u=l[a],m(e,a)?t!==u&&b(t)&&b(u)&&Ie(t,u):Ce(e,a,u));return e}function Pe(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,u="function"===typeof e?e.call(a,a):e;return t?Ie(t,u):u}:l?e?function(){return Ie("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Re(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Be(a):a}function Be(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Me(e,l,a,t){var u=Object.create(e||null);return l?T(u,l):u}De.data=function(e,l,a){return a?Pe(e,l,a):l&&"function"!==typeof l?e:Pe(e,l)},U.forEach(function(e){De[e]=Re}),V.forEach(function(e){De[e+"s"]=Me}),De.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var u={};for(var n in T(u,e),l){var r=u[n],v=l[n];r&&!Array.isArray(r)&&(r=[r]),u[n]=r?r.concat(v):Array.isArray(v)?v:[v]}return u},De.props=De.methods=De.inject=De.computed=function(e,l,a,t){if(!e)return l;var u=Object.create(null);return T(u,e),l&&T(u,l),u},De.provide=Pe;var Ve=function(e,l){return void 0===l?e:l};function Ue(e,l){var a=e.props;if(a){var t,u,n,r={};if(Array.isArray(a)){t=a.length;while(t--)u=a[t],"string"===typeof u&&(n=A(u),r[n]={type:null})}else if(b(a))for(var v in a)u=a[v],n=A(v),r[n]=b(u)?u:{type:u};else 0;e.props=r}}function qe(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var u=0;u<a.length;u++)t[a[u]]={from:a[u]};else if(b(a))for(var n in a){var r=a[n];t[n]=b(r)?T({from:n},r):{from:r}}else 0}}function Le(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function Fe(e,l,a){if("function"===typeof l&&(l=l.options),Ue(l,a),qe(l,a),Le(l),!l._base&&(l.extends&&(e=Fe(e,l.extends,a)),l.mixins))for(var t=0,u=l.mixins.length;t<u;t++)e=Fe(e,l.mixins[t],a);var n,r={};for(n in e)v(n);for(n in l)m(e,n)||v(n);function v(t){var u=De[t]||Ve;r[t]=u(e[t],l[t],a,t)}return r}function Je(e,l,a,t){if("string"===typeof a){var u=e[l];if(m(u,a))return u[a];var n=A(a);if(m(u,n))return u[n];var r=j(n);if(m(u,r))return u[r];var v=u[a]||u[n]||u[r];return v}}function He(e,l,a,t){var u=l[e],n=!m(a,e),r=a[e],v=Ge(Boolean,u.type);if(v>-1)if(n&&!m(u,"default"))r=!1;else if(""===r||r===S(e)){var o=Ge(String,u.type);(o<0||v<o)&&(r=!0)}if(void 0===r){r=ze(t,u,e);var i=Ae;je(!0),Ee(r),je(i)}return r}function ze(e,l,a){if(m(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==We(l.type)?t.call(e):t}}function We(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ke(e,l){return We(e)===We(l)}function Ge(e,l){if(!Array.isArray(l))return Ke(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Ke(l[a],e))return a;return-1}function Ye(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var u=t.$options.errorCaptured;if(u)for(var n=0;n<u.length;n++)try{var r=!1===u[n].call(t,e,l,a);if(r)return}catch(eu){Qe(eu,t,"errorCaptured hook")}}}Qe(e,l,a)}finally{pe()}}function Xe(e,l,a,t,u){var n;try{n=a?e.apply(l,a):e.call(l),n&&!n._isVue&&p(n)&&!n._handled&&(n.catch(function(e){return Ye(e,t,u+" (Promise/async)")}),n._handled=!0)}catch(eu){Ye(eu,t,u)}return n}function Qe(e,l,a){if(q.errorHandler)try{return q.errorHandler.call(null,e,l,a)}catch(eu){eu!==e&&Ze(eu,null,"config.errorHandler")}Ze(e,l,a)}function Ze(e,l,a){if(!G&&!Y||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var ul=Promise.resolve();el=function(){ul.then(tl),le&&setTimeout(D)}}else if(Z||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var nl=1,rl=new MutationObserver(tl),vl=document.createTextNode(String(nl));rl.observe(vl,{characterData:!0}),el=function(){nl=(nl+1)%2,vl.data=String(nl)}}function ol(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(eu){Ye(eu,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var il=new ve;function bl(e){sl(e,il),il.clear()}function sl(e,l){var a,t,u=Array.isArray(e);if(!(!u&&!o(e)||Object.isFrozen(e)||e instanceof fe)){if(e.__ob__){var n=e.__ob__.dep.id;if(l.has(n))return;l.add(n)}if(u){a=e.length;while(a--)sl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)sl(e[t[a]],l)}}}var cl=k(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function pl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Xe(t,null,arguments,l,"v-on handler");for(var u=t.slice(),n=0;n<u.length;n++)Xe(u[n],null,e,l,"v-on handler")}return a.fns=e,a}function fl(e,l,a,u,r,v){var o,i,b,s;for(o in e)i=e[o],b=l[o],s=cl(o),t(i)||(t(b)?(t(i.fns)&&(i=e[o]=pl(i,v)),n(s.once)&&(i=e[o]=r(s.name,i,s.capture)),a(s.name,i,s.capture,s.passive,s.params)):i!==b&&(b.fns=i,e[o]=b));for(o in l)t(e[o])&&(s=cl(o),u(s.name,l[o],s.capture))}function dl(e,l,a){var n=l.options.props;if(!t(n)){var r={},v=e.attrs,o=e.props;if(u(v)||u(o))for(var i in n){var b=S(i);hl(r,o,i,b,!0)||hl(r,v,i,b,!1)}return r}}function hl(e,l,a,t,n){if(u(l)){if(m(l,a))return e[a]=l[a],n||delete l[a],!0;if(m(l,t))return e[a]=l[t],n||delete l[t],!0}return!1}function yl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function gl(e){return v(e)?[ye(e)]:Array.isArray(e)?ml(e):void 0}function _l(e){return u(e)&&u(e.text)&&r(e.isComment)}function ml(e,l){var a,r,o,i,b=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(o=b.length-1,i=b[o],Array.isArray(r)?r.length>0&&(r=ml(r,(l||"")+"_"+a),_l(r[0])&&_l(i)&&(b[o]=ye(i.text+r[0].text),r.shift()),b.push.apply(b,r)):v(r)?_l(i)?b[o]=ye(i.text+r):""!==r&&b.push(ye(r)):_l(r)&&_l(i)?b[o]=ye(i.text+r.text):(n(e._isVList)&&u(r.tag)&&t(r.key)&&u(l)&&(r.key="__vlist"+l+"_"+a+"__"),b.push(r)));return b}function kl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function wl(e){var l=Al(e.$options.inject,e);l&&(je(!1),Object.keys(l).forEach(function(a){$e(e,a,l[a])}),je(!0))}function Al(e,l){if(e){for(var a=Object.create(null),t=oe?Reflect.ownKeys(e):Object.keys(e),u=0;u<t.length;u++){var n=t[u];if("__ob__"!==n){var r=e[n].from,v=l;while(v){if(v._provided&&m(v._provided,r)){a[n]=v._provided[r];break}v=v.$parent}if(!v)if("default"in e[n]){var o=e[n].default;a[n]="function"===typeof o?o.call(l):o}else 0}}return a}}function jl(e,l){if(!e||!e.length)return{};for(var a={},t=0,u=e.length;t<u;t++){var n=e[t],r=n.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,n.context!==l&&n.fnContext!==l||!r||null==r.slot)n.asyncMeta&&n.asyncMeta.data&&"page"===n.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(n):(a.default||(a.default=[])).push(n);else{var v=r.slot,o=a[v]||(a[v]=[]);"template"===n.tag?o.push.apply(o,n.children||[]):o.push(n)}}for(var i in a)a[i].every(Ol)&&delete a[i];return a}function Ol(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Sl(e,l,t){var u,n=Object.keys(l).length>0,r=e?!!e.$stable:!n,v=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&v===t.$key&&!n&&!t.$hasNormal)return t;for(var o in u={},e)e[o]&&"$"!==o[0]&&(u[o]=xl(l,o,e[o]))}else u={};for(var i in l)i in u||(u[i]=El(l,i));return e&&Object.isExtensible(e)&&(e._normalized=u),J(u,"$stable",r),J(u,"$key",v),J(u,"$hasNormal",n),u}function xl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:gl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function El(e,l){return function(){return e[l]}}function $l(e,l){var a,t,n,r,v;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(o(e))if(oe&&e[Symbol.iterator]){a=[];var i=e[Symbol.iterator](),b=i.next();while(!b.done)a.push(l(b.value,a.length)),b=i.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,n=r.length;t<n;t++)v=r[t],a[t]=l(e[v],v,t);return u(a)||(a=[]),a._isVList=!0,a}function Cl(e,l,a,t){var u,n=this.$scopedSlots[e];n?(a=a||{},t&&(a=T(T({},t),a)),u=n(a)||l):u=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},u):u}function Tl(e){return Je(this.$options,"filters",e,!0)||P}function Nl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Dl(e,l,a,t,u){var n=q.keyCodes[l]||a;return u&&t&&!q.keyCodes[l]?Nl(u,t):n?Nl(n,e):t?S(t)!==l:void 0}function Il(e,l,a,t,u){if(a)if(o(a)){var n;Array.isArray(a)&&(a=N(a));var r=function(r){if("class"===r||"style"===r||y(r))n=e;else{var v=e.attrs&&e.attrs.type;n=t||q.mustUseProp(l,v,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var o=A(r),i=S(r);if(!(o in n)&&!(i in n)&&(n[r]=a[r],u)){var b=e.on||(e.on={});b["update:"+r]=function(e){a[r]=e}}};for(var v in a)r(v)}else;return e}function Pl(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Bl(t,"__static__"+e,!1),t)}function Rl(e,l,a){return Bl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Bl(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Ml(e[t],l+"_"+t,a);else Ml(e,l,a)}function Ml(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Vl(e,l){if(l)if(b(l)){var a=e.on=e.on?T({},e.on):{};for(var t in l){var u=a[t],n=l[t];a[t]=u?[].concat(u,n):n}}else;return e}function Ul(e,l,a,t){l=l||{$stable:!a};for(var u=0;u<e.length;u++){var n=e[u];Array.isArray(n)?Ul(n,l,a):n&&(n.proxy&&(n.fn.proxy=!0),l[n.key]=n.fn)}return t&&(l.$key=t),l}function ql(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Ll(e,l){return"string"===typeof e?l+e:e}function Fl(e){e._o=Rl,e._n=d,e._s=f,e._l=$l,e._t=Cl,e._q=R,e._i=B,e._m=Pl,e._f=Tl,e._k=Dl,e._b=Il,e._v=ye,e._e=he,e._u=Ul,e._g=Vl,e._d=ql,e._p=Ll}function Jl(e,l,t,u,r){var v,o=this,i=r.options;m(u,"_uid")?(v=Object.create(u),v._original=u):(v=u,u=u._original);var b=n(i._compiled),s=!b;this.data=e,this.props=l,this.children=t,this.parent=u,this.listeners=e.on||a,this.injections=Al(i.inject,u),this.slots=function(){return o.$slots||Sl(e.scopedSlots,o.$slots=jl(t,u)),o.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sl(e.scopedSlots,this.slots())}}),b&&(this.$options=i,this.$slots=this.slots(),this.$scopedSlots=Sl(e.scopedSlots,this.$slots)),i._scopeId?this._c=function(e,l,a,t){var n=ta(v,e,l,a,t,s);return n&&!Array.isArray(n)&&(n.fnScopeId=i._scopeId,n.fnContext=u),n}:this._c=function(e,l,a,t){return ta(v,e,l,a,t,s)}}function Hl(e,l,t,n,r){var v=e.options,o={},i=v.props;if(u(i))for(var b in i)o[b]=He(b,i,l||a);else u(t.attrs)&&Wl(o,t.attrs),u(t.props)&&Wl(o,t.props);var s=new Jl(t,o,r,n,e),c=v.render.call(null,s._c,s);if(c instanceof fe)return zl(c,t,s.parent,v,s);if(Array.isArray(c)){for(var p=gl(c)||[],f=new Array(p.length),d=0;d<p.length;d++)f[d]=zl(p[d],t,s.parent,v,s);return f}}function zl(e,l,a,t,u){var n=ge(e);return n.fnContext=a,n.fnOptions=t,l.slot&&((n.data||(n.data={})).slot=l.slot),n}function Wl(e,l){for(var a in l)e[A(a)]=l[a]}Fl(Jl.prototype);var Kl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Kl.prepatch(a,a)}else{var t=e.componentInstance=Xl(e,wa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Sa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ca(a,"mounted")),e.data.keepAlive&&(l._isMounted?La(a):Ea(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?$a(l,!0):l.$destroy())}},Gl=Object.keys(Kl);function Yl(e,l,a,r,v){if(!t(e)){var i=a.$options._base;if(o(e)&&(e=i.extend(e)),"function"===typeof e){var b;if(t(e.cid)&&(b=e,e=pa(b,i),void 0===e))return ca(b,l,a,r,v);l=l||{},st(e),u(l.model)&&ea(e.options,l);var s=dl(l,e,v);if(n(e.options.functional))return Hl(e,s,l,a,r);var c=l.on;if(l.on=l.nativeOn,n(e.options.abstract)){var p=l.slot;l={},p&&(l.slot=p)}Ql(l);var f=e.options.name||v,d=new fe("vue-component-"+e.cid+(f?"-"+f:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:v,children:r},b);return d}}}function Xl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return u(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Ql(e){for(var l=e.hook||(e.hook={}),a=0;a<Gl.length;a++){var t=Gl[a],u=l[t],n=Kl[t];u===n||u&&u._merged||(l[t]=u?Zl(n,u):n)}}function Zl(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var n=l.on||(l.on={}),r=n[t],v=l.model.callback;u(r)?(Array.isArray(r)?-1===r.indexOf(v):r!==v)&&(n[t]=[v].concat(r)):n[t]=v}var la=1,aa=2;function ta(e,l,a,t,u,r){return(Array.isArray(a)||v(a))&&(u=t,t=a,a=void 0),n(r)&&(u=aa),ua(e,l,a,t,u)}function ua(e,l,a,t,n){if(u(a)&&u(a.__ob__))return he();if(u(a)&&u(a.is)&&(l=a.is),!l)return he();var r,v,o;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),n===aa?t=gl(t):n===la&&(t=yl(t)),"string"===typeof l)?(v=e.$vnode&&e.$vnode.ns||q.getTagNamespace(l),r=q.isReservedTag(l)?new fe(q.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!u(o=Je(e.$options,"components",l))?new fe(l,a,t,void 0,void 0,e):Yl(o,a,e,t,l)):r=Yl(l,a,e,t);return Array.isArray(r)?r:u(r)?(u(v)&&na(r,v),u(a)&&ra(a),r):he()}function na(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),u(e.children))for(var r=0,v=e.children.length;r<v;r++){var o=e.children[r];u(o.tag)&&(t(o.ns)||n(a)&&"svg"!==o.tag)&&na(o,l,a)}}function ra(e){o(e.style)&&bl(e.style),o(e.class)&&bl(e.class)}function va(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,u=t&&t.context;e.$slots=jl(l._renderChildren,u),e.$scopedSlots=a,e._c=function(l,a,t,u){return ta(e,l,a,t,u,!1)},e.$createElement=function(l,a,t,u){return ta(e,l,a,t,u,!0)};var n=t&&t.data;$e(e,"$attrs",n&&n.attrs||a,null,!0),$e(e,"$listeners",l._parentListeners||a,null,!0)}var oa,ia=null;function ba(e){Fl(e.prototype),e.prototype.$nextTick=function(e){return ol(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,u=a._parentVnode;u&&(l.$scopedSlots=Sl(u.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=u;try{ia=l,e=t.call(l._renderProxy,l.$createElement)}catch(eu){Ye(eu,l,"render"),e=l._vnode}finally{ia=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=he()),e.parent=u,e}}function sa(e,l){return(e.__esModule||oe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?l.extend(e):e}function ca(e,l,a,t,u){var n=he();return n.asyncFactory=e,n.asyncMeta={data:l,context:a,children:t,tag:u},n}function pa(e,l){if(n(e.error)&&u(e.errorComp))return e.errorComp;if(u(e.resolved))return e.resolved;var a=ia;if(a&&u(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),n(e.loading)&&u(e.loadingComp))return e.loadingComp;if(a&&!u(e.owners)){var r=e.owners=[a],v=!0,i=null,b=null;a.$on("hook:destroyed",function(){return g(r,a)});var s=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==i&&(clearTimeout(i),i=null),null!==b&&(clearTimeout(b),b=null))},c=M(function(a){e.resolved=sa(a,l),v?r.length=0:s(!0)}),f=M(function(l){u(e.errorComp)&&(e.error=!0,s(!0))}),d=e(c,f);return o(d)&&(p(d)?t(e.resolved)&&d.then(c,f):p(d.component)&&(d.component.then(c,f),u(d.error)&&(e.errorComp=sa(d.error,l)),u(d.loading)&&(e.loadingComp=sa(d.loading,l),0===d.delay?e.loading=!0:i=setTimeout(function(){i=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},d.delay||200)),u(d.timeout)&&(b=setTimeout(function(){b=null,t(e.resolved)&&f(null)},d.timeout)))),v=!1,e.loading?e.loadingComp:e.resolved}}function fa(e){return e.isComment&&e.asyncFactory}function da(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(u(a)&&(u(a.componentOptions)||fa(a)))return a}}function ha(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ya(e,l){oa.$on(e,l)}function ga(e,l){oa.$off(e,l)}function _a(e,l){var a=oa;return function t(){var u=l.apply(null,arguments);null!==u&&a.$off(e,t)}}function ma(e,l,a){oa=e,fl(l,a||{},ya,ga,_a,e),oa=void 0}function ka(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var u=0,n=e.length;u<n;u++)t.$on(e[u],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,u=e.length;t<u;t++)a.$off(e[t],l);return a}var n,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var v=r.length;while(v--)if(n=r[v],n===l||n.fn===l){r.splice(v,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?C(a):a;for(var t=C(arguments,1),u='event handler for "'+e+'"',n=0,r=a.length;n<r;n++)Xe(a[n],l,t,l,u)}return l}}var wa=null;function Aa(e){var l=wa;return wa=e,function(){wa=l}}function ja(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Oa(e){e.prototype._update=function(e,l){var a=this,t=a.$el,u=a._vnode,n=Aa(a);a._vnode=e,a.$el=u?a.__patch__(u,e):a.__patch__(a.$el,e,l,!1),n(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ca(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||g(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ca(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Sa(e,l,t,u,n){var r=u.data.scopedSlots,v=e.$scopedSlots,o=!!(r&&!r.$stable||v!==a&&!v.$stable||r&&e.$scopedSlots.$key!==r.$key),i=!!(n||e.$options._renderChildren||o);if(e.$options._parentVnode=u,e.$vnode=u,e._vnode&&(e._vnode.parent=u),e.$options._renderChildren=n,e.$attrs=u.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){je(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var p=s[c],f=e.$options.props;b[p]=He(p,f,l,e)}je(!0),e.$options.propsData=l}t=t||a;var d=e.$options._parentListeners;e.$options._parentListeners=t,ma(e,t,d),i&&(e.$slots=jl(n,u.context),e.$forceUpdate())}function xa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ea(e,l){if(l){if(e._directInactive=!1,xa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);Ca(e,"activated")}}function $a(e,l){if((!l||(e._directInactive=!0,!xa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)$a(e.$children[a]);Ca(e,"deactivated")}}function Ca(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var u=0,n=a.length;u<n;u++)Xe(a[u],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),pe()}var Ta=[],Na=[],Da={},Ia=!1,Pa=!1,Ra=0;function Ba(){Ra=Ta.length=Na.length=0,Da={},Ia=Pa=!1}var Ma=Date.now;if(G&&!Z){var Va=window.performance;Va&&"function"===typeof Va.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return Va.now()})}function Ua(){var e,l;for(Ma(),Pa=!0,Ta.sort(function(e,l){return e.id-l.id}),Ra=0;Ra<Ta.length;Ra++)e=Ta[Ra],e.before&&e.before(),l=e.id,Da[l]=null,e.run();var a=Na.slice(),t=Ta.slice();Ba(),Fa(a),qa(t),ne&&q.devtools&&ne.emit("flush")}function qa(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ca(t,"updated")}}function La(e){e._inactive=!1,Na.push(e)}function Fa(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Ea(e[l],!0)}function Ja(e){var l=e.id;if(null==Da[l]){if(Da[l]=!0,Pa){var a=Ta.length-1;while(a>Ra&&Ta[a].id>e.id)a--;Ta.splice(a+1,0,e)}else Ta.push(e);Ia||(Ia=!0,ol(Ua))}}var Ha=0,za=function(e,l,a,t,u){this.vm=e,u&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ha,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ve,this.newDepIds=new ve,this.expression="","function"===typeof l?this.getter=l:(this.getter=z(l),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};za.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(eu){if(!this.user)throw eu;Ye(eu,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&bl(e),pe(),this.cleanupDeps()}return e},za.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},za.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},za.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ja(this)},za.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(eu){Ye(eu,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},za.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},za.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},za.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Wa={enumerable:!0,configurable:!0,get:D,set:D};function Ka(e,l,a){Wa.get=function(){return this[l][a]},Wa.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Wa)}function Ga(e){e._watchers=[];var l=e.$options;l.props&&Ya(e,l.props),l.methods&&ut(e,l.methods),l.data?Xa(e):Ee(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&nt(e,l.watch)}function Ya(e,l){var a=e.$options.propsData||{},t=e._props={},u=e.$options._propKeys=[],n=!e.$parent;n||je(!1);var r=function(n){u.push(n);var r=He(n,l,a,e);$e(t,n,r),n in e||Ka(e,"_props",n)};for(var v in l)r(v);je(!0)}function Xa(e){var l=e.$options.data;l=e._data="function"===typeof l?Qa(l,e):l||{},b(l)||(l={});var a=Object.keys(l),t=e.$options.props,u=(e.$options.methods,a.length);while(u--){var n=a[u];0,t&&m(t,n)||F(n)||Ka(e,"_data",n)}Ee(l,!0)}function Qa(e,l){ce();try{return e.call(l,l)}catch(eu){return Ye(eu,l,"data()"),{}}finally{pe()}}var Za={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ue();for(var u in l){var n=l[u],r="function"===typeof n?n:n.get;0,t||(a[u]=new za(e,r||D,D,Za)),u in e||lt(e,u,n)}}function lt(e,l,a){var t=!ue();"function"===typeof a?(Wa.get=t?at(l):tt(a),Wa.set=D):(Wa.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):D,Wa.set=a.set||D),Object.defineProperty(e,l,Wa)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function ut(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?D:$(l[a],e)}function nt(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var u=0;u<t.length;u++)rt(e,a,t[u]);else rt(e,a,t)}}function rt(e,l,a,t){return b(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function vt(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Ce,e.prototype.$delete=Te,e.prototype.$watch=function(e,l,a){var t=this;if(b(l))return rt(t,e,l,a);a=a||{},a.user=!0;var u=new za(t,e,l,a);if(a.immediate)try{l.call(t,u.value)}catch(n){Ye(n,t,'callback for immediate watcher "'+u.expression+'"')}return function(){u.teardown()}}}var ot=0;function it(e){e.prototype._init=function(e){var l=this;l._uid=ot++,l._isVue=!0,e&&e._isComponent?bt(l,e):l.$options=Fe(st(l.constructor),e||{},l),l._renderProxy=l,l._self=l,ja(l),ha(l),va(l),Ca(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&wl(l),Ga(l),"mp-toutiao"!==l.mpHost&&kl(l),"mp-toutiao"!==l.mpHost&&Ca(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function bt(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var u=t.componentOptions;a.propsData=u.propsData,a._parentListeners=u.listeners,a._renderChildren=u.children,a._componentTag=u.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function st(e){var l=e.options;if(e.super){var a=st(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var u=ct(e);u&&T(e.extendOptions,u),l=e.options=Fe(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var u in a)a[u]!==t[u]&&(l||(l={}),l[u]=a[u]);return l}function pt(e){this._init(e)}function ft(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=C(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function dt(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function ht(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,u=e._Ctor||(e._Ctor={});if(u[t])return u[t];var n=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=Fe(a.options,e),r["super"]=a,r.options.props&&yt(r),r.options.computed&&gt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,V.forEach(function(e){r[e]=a[e]}),n&&(r.options.components[n]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=T({},r.options),u[t]=r,r}}function yt(e){var l=e.options.props;for(var a in l)Ka(e.prototype,"_props",a)}function gt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function _t(e){V.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function kt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function wt(e,l){var a=e.cache,t=e.keys,u=e._vnode;for(var n in a){var r=a[n];if(r){var v=mt(r.componentOptions);v&&!l(v)&&At(a,n,t,u)}}}function At(e,l,a,t){var u=e[l];!u||t&&u.tag===t.tag||u.componentInstance.$destroy(),e[l]=null,g(a,l)}it(pt),vt(pt),ka(pt),Oa(pt),ba(pt);var jt=[String,RegExp,Array],Ot={name:"keep-alive",abstract:!0,props:{include:jt,exclude:jt,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)At(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){wt(e,function(e){return kt(l,e)})}),this.$watch("exclude",function(l){wt(e,function(e){return!kt(l,e)})})},render:function(){var e=this.$slots.default,l=da(e),a=l&&l.componentOptions;if(a){var t=mt(a),u=this,n=u.include,r=u.exclude;if(n&&(!t||!kt(n,t))||r&&t&&kt(r,t))return l;var v=this,o=v.cache,i=v.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;o[b]?(l.componentInstance=o[b].componentInstance,g(i,b),i.push(b)):(o[b]=l,i.push(b),this.max&&i.length>parseInt(this.max)&&At(o,i[0],i,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},St={KeepAlive:Ot};function xt(e){var l={get:function(){return q}};Object.defineProperty(e,"config",l),e.util={warn:ie,extend:T,mergeOptions:Fe,defineReactive:$e},e.set=Ce,e.delete=Te,e.nextTick=ol,e.observable=function(e){return Ee(e),e},e.options=Object.create(null),V.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,T(e.options.components,St),ft(e),dt(e),ht(e),_t(e)}xt(pt),Object.defineProperty(pt.prototype,"$isServer",{get:ue}),Object.defineProperty(pt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pt,"FunctionalRenderContext",{value:Jl}),pt.version="2.6.10";var Et="[object Array]",$t="[object Object]";function Ct(e,l){var a={};return Tt(e,l),Nt(e,l,"",a),a}function Tt(e,l){if(e!==l){var a=It(e),t=It(l);if(a==$t&&t==$t){if(Object.keys(e).length>=Object.keys(l).length)for(var u in l){var n=e[u];void 0===n?e[u]=null:Tt(n,l[u])}}else a==Et&&t==Et&&e.length>=l.length&&l.forEach(function(l,a){Tt(e[a],l)})}}function Nt(e,l,a,t){if(e!==l){var u=It(e),n=It(l);if(u==$t)if(n!=$t||Object.keys(e).length<Object.keys(l).length)Dt(t,a,e);else{var r=function(u){var n=e[u],r=l[u],v=It(n),o=It(r);if(v!=Et&&v!=$t)n!=l[u]&&Dt(t,(""==a?"":a+".")+u,n);else if(v==Et)o!=Et?Dt(t,(""==a?"":a+".")+u,n):n.length<r.length?Dt(t,(""==a?"":a+".")+u,n):n.forEach(function(e,l){Nt(e,r[l],(""==a?"":a+".")+u+"["+l+"]",t)});else if(v==$t)if(o!=$t||Object.keys(n).length<Object.keys(r).length)Dt(t,(""==a?"":a+".")+u,n);else for(var i in n)Nt(n[i],r[i],(""==a?"":a+".")+u+"."+i,t)};for(var v in e)r(v)}else u==Et?n!=Et?Dt(t,a,e):e.length<l.length?Dt(t,a,e):e.forEach(function(e,u){Nt(e,l[u],a+"["+u+"]",t)}):Dt(t,a,e)}}function Dt(e,l,a){e[l]=a}function It(e){return Object.prototype.toString.call(e)}function Pt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Rt(e){return Ta.find(function(l){return e._watcher===l})}function Bt(e,l){if(!e.__next_tick_pending&&!Rt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ol(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var u;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(eu){Ye(eu,e,"nextTick")}else u&&u(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){u=e})}function Mt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Vt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,u=Object.create(null);try{u=Mt(this)}catch(v){console.error(v)}u.__webviewId__=t.data.__webviewId__;var n=Object.create(null);Object.keys(u).forEach(function(e){n[e]=t.data[e]});var r=Ct(u,n);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,Pt(a)})):Pt(this)}};function Ut(){}function qt(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&Ca(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new za(e,t,D,{before:function(){e._isMounted&&!e._isDestroyed&&Ca(e,"beforeUpdate")}},!0),a=!1,e}function Lt(e,l){return u(e)||u(l)?Ft(e,Jt(l)):""}function Ft(e,l){return e?l?e+" "+l:e:l||""}function Jt(e){return Array.isArray(e)?Ht(e):o(e)?zt(e):"string"===typeof e?e:""}function Ht(e){for(var l,a="",t=0,n=e.length;t<n;t++)u(l=Jt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function zt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Wt=k(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Kt(e){return Array.isArray(e)?N(e):"string"===typeof e?Wt(e):e}var Gt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Yt(e[t],a.slice(1).join("."))}function Xt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:C(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Bt(this,e)},Gt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=kl,e.prototype.__init_injections=wl,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,u=a.$options[e],n=e+" hook";if(u)for(var r=0,v=u.length;r<v;r++)t=Xe(u[r],a,l?[l]:null,a,n);return a._hasHookEvent&&a.$emit("hook:"+e),pe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Yt(l||this,e)},e.prototype.__get_class=function(e,l){return Lt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Kt(e),t=l?T(l,a):a;return Object.keys(t).map(function(e){return S(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,u,n,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);return a}if(o(e)){for(n=Object.keys(e),a=Object.create(null),t=0,u=n.length;t<u;t++)r=n[t],a[r]=l(e[r],r,t);return a}return[]}}var Qt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Zt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Qt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Qt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Qt}pt.prototype.__patch__=Vt,pt.prototype.$mount=function(e,l){return qt(this,e,l)},Zt(pt),Xt(pt),l["default"]=pt}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=fl,l.createComponent=jl,l.createPage=Al,l.default=void 0;var t=u(a("66fd"));function u(e){return e&&e.__esModule?e:{default:e}}function n(e,l){return o(e)||v(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(e,l){var a=[],t=!0,u=!1,n=void 0;try{for(var r,v=e[Symbol.iterator]();!(t=(r=v.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(o){u=!0,n=o}finally{try{t||null==v["return"]||v["return"]()}finally{if(u)throw n}}return a}function o(e){if(Array.isArray(e))return e}function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function b(e){return p(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function p(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var f=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function h(e){return"function"===typeof e}function y(e){return"string"===typeof e}function g(e){return"[object Object]"===f.call(e)}function _(e,l){return d.call(e,l)}function m(){}function k(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,A=k(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),j=["invoke","success","fail","complete","returnValue"],O={},S={};function x(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?E(a):a}function E(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function $(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function C(e,l){Object.keys(l).forEach(function(a){-1!==j.indexOf(a)&&h(l[a])&&(e[a]=x(e[a],l[a]))})}function T(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==j.indexOf(a)&&h(l[a])&&$(e[a],l[a])})}function N(e,l){"string"===typeof e&&g(l)?C(S[e]||(S[e]={}),l):g(e)&&C(O,e)}function D(e,l){"string"===typeof e?g(l)?T(S[e],l):delete S[e]:g(e)&&T(O,e)}function I(e){return function(l){return e(l)||l}}function P(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function R(e,l){for(var a=!1,t=0;t<e.length;t++){var u=e[t];if(a)a=Promise.then(I(u));else{var n=u(l);if(P(n)&&(a=Promise.resolve(n)),!1===n)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function B(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){R(e[a],l).then(function(e){return h(t)&&t(e)||e})}}}),l}function M(e,l){var a=[];Array.isArray(O.returnValue)&&a.push.apply(a,b(O.returnValue));var t=S[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,b(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function V(e){var l=Object.create(null);Object.keys(O).forEach(function(e){"returnValue"!==e&&(l[e]=O[e].slice())});var a=S[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function U(e,l,a){for(var t=arguments.length,u=new Array(t>3?t-3:0),n=3;n<t;n++)u[n-3]=arguments[n];var r=V(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var v=R(r.invoke,a);return v.then(function(e){return l.apply(void 0,[B(r,e)].concat(u))})}return l.apply(void 0,[B(r,a)].concat(u))}return l.apply(void 0,[a].concat(u))}var q={returnValue:function(e){return P(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},L=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,J=/^on/;function H(e){return F.test(e)}function z(e){return L.test(e)}function W(e){return J.test(e)}function K(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function G(e){return!(H(e)||z(e)||W(e))}function Y(e,l){return G(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return h(a.success)||h(a.fail)||h(a.complete)?M(e,U.apply(void 0,[e,l,a].concat(u))):M(e,K(new Promise(function(t,n){U.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:n})].concat(u)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var X=1e-4,Q=750,Z=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Z="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Q*(l||ee);return a<0&&(a=-a),a=Math.floor(a+X),0===a?1!==le&&Z?.5:1:e<0?-a:a}var ue={promiseInterceptor:q},ne=Object.freeze({upx2px:te,interceptors:ue,addInterceptor:N,removeInterceptor:D}),re={},ve=[],oe=[],ie=["success","fail","cancel","complete"];function be(e,l,a){return function(t){return l(ce(e,t,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(l)){var n=!0===u?l:{};for(var r in h(a)&&(a=a(l,n)||{}),l)if(_(a,r)){var v=a[r];h(v)&&(v=v(l[r],l,n)),v?y(v)?n[v]=l[r]:g(v)&&(n[v.name?v.name:r]=v.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==ie.indexOf(r)?n[r]=be(e,l[r],t):u||(n[r]=l[r]);return n}return h(l)&&(l=be(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return h(re.returnValue)&&(l=re.returnValue(e,l)),se(e,l,a,{},t)}function pe(e,l){if(_(re,e)){var a=re[e];return a?function(l,t){var u=a;h(a)&&(u=a(l)),l=se(e,l,u.args,u.returnValue);var n=[l];"undefined"!==typeof t&&n.push(t);var r=wx[u.name||e].apply(wx,n);return z(e)?ce(e,r,u.returnValue,H(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var fe=Object.create(null),de=["subscribePush","unsubscribePush","onPush","offPush","share"];function he(e){return function(l){var a=l.fail,t=l.complete,u={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};h(a)&&a(u),h(t)&&t(u)}}de.forEach(function(e){fe[e]=he(e)});var ye=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ge(e,l,a){return e[l].apply(e,a)}function _e(){return ge(ye(),"$on",Array.prototype.slice.call(arguments))}function me(){return ge(ye(),"$off",Array.prototype.slice.call(arguments))}function ke(){return ge(ye(),"$once",Array.prototype.slice.call(arguments))}function we(){return ge(ye(),"$emit",Array.prototype.slice.call(arguments))}var Ae=Object.freeze({$on:_e,$off:me,$once:ke,$emit:we});function je(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t=plus.webview.getWebviewById(e.__uniapp_mask_id);t=t.parent()||t;var u=e.show,n=e.hide,r=e.close,v=function(){t.setStyle({mask:a})},o=function(){t.setStyle({mask:"none"})};e.show=function(){v();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.hide=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.close=function(){o(),l=[];for(var a=arguments.length,t=new Array(a),u=0;u<a;u++)t[u]=arguments[u];return r.apply(e,t)}}}function Oe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&je(l),l}function Se(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var xe=Object.freeze({requireNativePlugin:Se,getSubNVueById:Oe}),Ee=Page,$e=Component,Ce=/:/g,Te=k(function(e){return A(e.replace(Ce,"-"))});function Ne(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,u=new Array(t>1?t-1:0),n=1;n<t;n++)u[n-1]=arguments[n];return l.apply(e,[Te(a)].concat(u))}}}function De(e,l){var a=l[e];l[e]=a?function(){Ne(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Ne(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return De("onLoad",e),Ee(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return De("created",e),$e(e)};var Ie=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Pe(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){_(a,l)&&(e[l]=a[l])})}function Re(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,h(l))return!!h(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(h(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Re(e,l)}):void 0}function Be(e,l,a){l.forEach(function(l){Re(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Me(e,l){var a;return l=l.default||l,h(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Ve(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ue(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function qe(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(u){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(u){}return g(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||_(a,e)||(a[e]=t[e])}),a}var Le=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Je(e,l){var a=e["behaviors"],t=e["extends"],u=e["mixins"],n=e["props"];n||(e["props"]=n=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(n)?(n.push("name"),n.push("value")):(n["name"]={type:String,default:""},n["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(t)&&t.props&&r.push(l({properties:ze(t.props,!0)})),Array.isArray(u)&&u.forEach(function(e){g(e)&&e.props&&r.push(l({properties:ze(e.props,!0)}))}),r}function He(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function ze(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Fe(e)}}):g(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(g(t)){var u=t["default"];h(u)&&(u=u()),t.type=He(l,t.type),a[l]={type:-1!==Le.indexOf(t.type)?t.type:null,value:u,observer:Fe(l)}}else{var n=He(l,t);a[l]={type:-1!==Le.indexOf(n)?n:null,observer:Fe(l)}}}),a}function We(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},_(e,"detail")||(e.detail={}),g(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ke(e,l){var a=e;return l.forEach(function(l){var t=l[0],u=l[2];if(t||"undefined"!==typeof u){var n=l[1],r=l[3],v=t?e.__get_value(t,a):a;Number.isInteger(v)?a=u:n?Array.isArray(v)?a=v.find(function(l){return e.__get_value(n,l)===u}):g(v)?a=Object.keys(v).find(function(l){return e.__get_value(n,v[l])===u}):console.error("v-for 暂不支持循环数据：",v):a=v[u],r&&(a=e.__get_value(r,a))}}),a}function Ge(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,u){"string"===typeof l?l?"$event"===l?t["$"+u]=a:0===l.indexOf("$event.")?t["$"+u]=e.__get_value(l.replace("$event.",""),a):t["$"+u]=e.__get_value(l):t["$"+u]=e:t["$"+u]=Ke(e,l)}),t}function Ye(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Xe(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,r=!1;if(u&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var v=Ge(e,t,l),o=[];return a.forEach(function(e){"$event"===e?"__set_model"!==n||u?u&&!r?o.push(l.detail.__args__[0]):o.push(l):o.push(l.target.value):Array.isArray(e)&&"o"===e[0]?o.push(Ye(e)):"string"===typeof e&&_(v,e)?o.push(v[e]):o.push(e)}),o}var Qe="~",Ze="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=We(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var u=e.type,n=[];return t.forEach(function(a){var t=a[0],r=a[1],v=t.charAt(0)===Ze;t=v?t.slice(1):t;var o=t.charAt(0)===Qe;t=o?t.slice(1):t,r&&el(u,t)&&r.forEach(function(a){var t=a[0];if(t){var u=l.$vm;u.$options.generic&&u.$parent&&u.$parent.$parent&&(u=u.$parent.$parent);var r=u[t];if(!h(r))throw new Error(" _vm.".concat(t," is not a function"));if(o){if(r.once)return;r.once=!0}n.push(r.apply(u,Xe(l.$vm,e,a[1],a[2],v,t)))}})}),"input"===u&&1===n.length&&"undefined"!==typeof n[0]?n[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,u=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(u(this),Pe(this,a)))}});var n={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return n.globalData=e.$options.globalData||{},Be(n,al),n}var ul=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function nl(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var u=a.length-1;u>=0;u--)if(t=nl(a[u],l),t)return t}function rl(e){return Behavior(e)}function vl(){return!!this.route}function ol(e){this.triggerEvent("__l",e)}function il(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function bl(e){var l,a=e.detail||e.value,t=a.vuePid,u=a.vueOptions;t&&(l=nl(this.$vm,t)),l||(l=this.$vm),u.parent=l}function sl(e){return tl(e,{mocks:ul,initRefs:il})}var cl=["onUniNViewMessage"];function pl(e){var l=sl(e);return Be(l,cl),l}function fl(e){return App(pl(e)),e}function dl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,u=l.initRelation,r=Me(t.default,e),v=n(r,2),o=v[0],i=v[1],b={options:{multipleSlots:!0,addGlobalClass:!0},data:qe(i,t.default.prototype),behaviors:Je(i,rl),properties:ze(i.props,!1,i.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),u.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new o(l),Ve(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:bl,__e:ll}};return Array.isArray(i.wxsCallMethods)&&i.wxsCallMethods.forEach(function(e){b.methods[e]=function(l){return this.$vm[e](l)}}),a?b:[b,o]}function hl(e){return dl(e,{isPage:vl,initRelation:ol})}function yl(e){var l=hl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var gl=["onShow","onHide","onUnload"];function _l(e,l){l.isPage,l.initRelation;var a=yl(e);return Be(a.methods,gl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return _l(e,{isPage:vl,initRelation:ol})}gl.push.apply(gl,Ie);var kl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function wl(e){var l=ml(e);return Be(l.methods,kl),l}function Al(e){return Component(wl(e))}function jl(e){return Component(yl(e))}ve.forEach(function(e){re[e]=!1}),oe.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var Ol={};Object.keys(ne).forEach(function(e){Ol[e]=ne[e]}),Object.keys(Ae).forEach(function(e){Ol[e]=Ae[e]}),Object.keys(xe).forEach(function(e){Ol[e]=Y(e,xe[e])}),Object.keys(wx).forEach(function(e){(_(wx,e)||_(re,e))&&(Ol[e]=Y(e,pe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Ol,e.UniEmitter=Ae),wx.createApp=fl,wx.createPage=Al,wx.createComponent=jl;var Sl=Ol,xl=Sl;l.default=xl}).call(this,a("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23220190921001",_inBundle:!1,_integrity:"sha512-xlHjc5YqMrdr4rIKE/aMXlfzLDVxbCY31e/jH+n2NtFA14KDtNIHzsgNM0h0Mq8IUfDFtMMPmmlay59RTmHonQ==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23220190921001.tgz",_shasum:"63200bbfbdcc4c696ed0be335fa14613757c4026",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"d26b206188ff9e5de659870e5f4e8b2d24d8f02f",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23220190921001"}},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?u(e):l}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&v(e,l)}function v(e,l){return v=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},v(e,l)}function o(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function i(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function b(e,l,a){return l&&i(e.prototype,l),a&&i(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",p="https://tongji.dcloud.io/uni/stat.gif",f=1800,d=300,h=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var l="";if("n"===A()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(y)}catch(a){l=g}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(y,l)}catch(a){e.setStorageSync(y,g)}}return l}var m=function(e){var l=Object.keys(e),a=l.sort(),t={},u="";for(var n in a)t[a[n]]=e[a[n]],u+=a[n]+"="+e[a[n]]+"&";return{sign:"",options:u.substr(0,u.length-1)}},k=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},A=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},j=function(){var l="";return"wx"!==A()&&"qq"!==A()||(l=e.getAccountInfoSync().miniProgram.appId||""),l},O=function(){return"n"===A()?plus.runtime.version:""},S=function(){var e=A(),l="";return"n"===e&&(l=plus.runtime.channel),l},x=function(l){var a=A(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},E="First__Visit__Time",$="Last__Visit__Time",C=function(){var l=e.getStorageSync(E),a=0;return l?a=l:(a=w(),e.setStorageSync(E,a),e.removeStorageSync($)),a},T=function(){var l=e.getStorageSync($),a=0;return a=l||"",e.setStorageSync($,w()),a},N="__page__residence__time",D=0,I=0,P=function(){return D=w(),"n"===A()&&e.setStorageSync(N,w()),D},R=function(){return I=w(),"n"===A()&&(D=e.getStorageSync(N)),I-D},B="Total__Visit__Count",M=function(){var l=e.getStorageSync(B),a=1;return l&&(a=l,a++),e.setStorageSync(B,a),a},V=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},U=0,q=0,L=function(){var e=(new Date).getTime();return U=e,q=0,e},F=function(){var e=(new Date).getTime();return q=e,e},J=function(e){var l=0;if(0!==U&&(l=q-U),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>d;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>f;return{residenceTime:l,overtime:t}}return{residenceTime:l}},H=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===A()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},z=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,u=e._query,n=u&&"{}"!==JSON.stringify(u)?"?"+JSON.stringify(u):"";return e._query="","bd"===A()?t.$mp&&t.$mp.page.is+n:t.$scope&&t.$scope.route+n||t.$mp&&t.$mp.page.route+n},W=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},K=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=a("60d6").default,Y=a("ef81").default||a("ef81"),X=e.getSystemInfoSync(),Q=function(){function l(){o(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:A(),mpn:j(),ak:Y.appid,usv:s,v:O(),ch:S(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===X.platform?"a":"i",brand:X.brand||"",md:X.model,sv:X.system.replace(/(Android|iOS)\s/,""),mpsdk:X.SDKVersion||"",mpv:X.version||"",lang:X.language,pr:X.pixelRatio,ww:X.windowWidth,wh:X.windowHeight,sw:X.screenWidth,sh:X.screenHeight}}return b(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=J("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,F();var a=J();L();var t=z(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=z(this),l=H();if(this._navigationBarTitle.config=G&&G.pages[l]&&G.pages[l].titleNView&&G.pages[l].titleNView.titleText||G&&G.pages[l]&&G.pages[l].navigationBarTitleText||"",this.__licationShow)return L(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var a=J("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}L()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=J("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=w(),this.statData.sc=x(e.scene),this.statData.fvts=C(),this.statData.lvts=T(),this.statData.tvc=M(),"n"===A()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(u)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(u,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,u=void 0===t?"":t,n=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:n,ch:this.statData.ch,e_n:a,e_v:"object"===typeof u?JSON.stringify(u):u.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;Y.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,u=w(),n=this._navigationBarTitle;l.ttn=n.page,l.ttpj=n.config,l.ttc=n.report;var r=this._reportingRequestData;if("n"===A()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===A()&&e.setStorageSync("__UNI__STAT__DATA",r),!(R()<h)||a){var v=this._reportingRequestData;"n"===A()&&(v=e.getStorageSync("__UNI__STAT__DATA")),P();var o=[],i=[],b=[],c=function(e){var l=v[e];l.forEach(function(l){var a=k(l);0===e?o.push(a):3===e?b.push(a):i.push(a)})};for(var p in v)c(p);o.push.apply(o,i.concat(b));var f={usv:s,t:u,requests:JSON.stringify(o)};this._reportingRequestData={},"n"===A()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==A()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){t._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=m(V(e)).options;l.src=p+"?"+a}},{key:"sendEvent",value:function(e,l){K(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Z=function(l){function a(){var l;return o(this,a),l=t(this,n(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),b(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),b(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,P(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,W(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,W(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(Q),ee=Z.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,u=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",v=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag",i="object"===typeof e,b=l.regeneratorRuntime;if(b)i&&(e.exports=b);else{b=l.regeneratorRuntime=i?e.exports:{},b.wrap=m;var s="suspendedStart",c="suspendedYield",p="executing",f="completed",d={},h={};h[r]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==t&&u.call(g,r)&&(h=g);var _=j.prototype=w.prototype=Object.create(h);A.prototype=_.constructor=j,j.constructor=A,j[o]=A.displayName="GeneratorFunction",b.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===A||"GeneratorFunction"===(l.displayName||l.name))},b.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(_),e},b.awrap=function(e){return{__await:e}},O(S.prototype),S.prototype[v]=function(){return this},b.AsyncIterator=S,b.async=function(e,l,a,t){var u=new S(m(e,l,a,t));return b.isGeneratorFunction(l)?u:u.next().then(function(e){return e.done?e.value:u.next()})},O(_),_[o]="Generator",_[r]=function(){return this},_.toString=function(){return"[object Generator]"},b.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},b.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(C),!e)for(var l in this)"t"===l.charAt(0)&&u.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,u){return v.type="throw",v.arg=e,l.next=t,u&&(l.method="next",l.arg=a),!!u}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],v=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var o=u.call(r,"catchLoc"),i=u.call(r,"finallyLoc");if(o&&i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&u.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var n=t;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=l&&l<=n.finallyLoc&&(n=null);var r=n?n.completion:{};return r.type=e,r.arg=l,n?(this.method="next",this.next=n.finallyLoc,d):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),d},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),C(a),d}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var u=t.arg;C(a)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:N(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),d}}}function m(e,l,a,t){var u=l&&l.prototype instanceof w?l:w,n=Object.create(u.prototype),r=new T(t||[]);return n._invoke=x(e,a,r),n}function k(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function w(){}function A(){}function j(){}function O(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function S(e){function l(a,t,n,r){var v=k(e[a],e,t);if("throw"!==v.type){var o=v.arg,i=o.value;return i&&"object"===typeof i&&u.call(i,"__await")?Promise.resolve(i.__await).then(function(e){l("next",e,n,r)},function(e){l("throw",e,n,r)}):Promise.resolve(i).then(function(e){o.value=e,n(o)},function(e){return l("throw",e,n,r)})}r(v.arg)}var a;function t(e,t){function u(){return new Promise(function(a,u){l(e,t,a,u)})}return a=a?a.then(u,u):u()}this._invoke=t}function x(e,l,a){var t=s;return function(u,n){if(t===p)throw new Error("Generator is already running");if(t===f){if("throw"===u)throw n;return D()}a.method=u,a.arg=n;while(1){var r=a.delegate;if(r){var v=E(r,a);if(v){if(v===d)continue;return v}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===s)throw t=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=p;var o=k(e,l,a);if("normal"===o.type){if(t=a.done?f:c,o.arg===d)continue;return{value:o.arg,done:a.done}}"throw"===o.type&&(t=f,a.method="throw",a.arg=o.arg)}}}function E(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,E(e,l),"throw"===l.method))return d;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var u=k(t,e.iterator,l.arg);if("throw"===u.type)return l.method="throw",l.arg=u.arg,l.delegate=null,d;var n=u.arg;return n?n.done?(l[e.resultName]=n.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,d):n:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,d)}function $(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function C(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function N(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,n=function l(){while(++t<e.length)if(u.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return n.next=n}}return{next:D}}function D(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"97ed":function(e,l,a){"use strict";(function(e,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=function e(l){l&&(l.debug&&(e.prototype.debug=!0),l.application&&(e.prototype.application=l.application),l.api_server_url&&(e.prototype.api_server_url=l.api_server_url))};t.prototype={constructor:t,debug:!1,file_server_url:"http://img.eonfox.cc/",api_server_url:"https://developer.eapie.eonfox.com/",application:"muyingshop",session_name:"Eonfox_API_Engine_Session",websocket_token:"",websocket_open:!1,websocket_client_id:"",websocket_heartbeat_interval_id:null,websocket_heartbeat_ms:15e3,websocket_heartbeat_debug:!1,websocket_connect_parameter:null,submit_sleep_expire_time:30,submit_task:null,submit_queue:[],submit_register:function(e){e.time=(new Date).getTime()/1e3,t.prototype.submit_queue.push(e)},submit_run:function(){if(t.prototype.submit_queue.length<1)return!1;if(t.prototype.submit_queue[0].runtime)return!1;if(t.prototype.submit_queue[0].time+t.prototype.submit_sleep_expire_time<(new Date).getTime()/1e3)return t.prototype.submit_queue.shift(),t.prototype.submit_run();t.prototype.submit_queue[0].runtime=!0;var l=t.prototype.submit_queue[0],u=t.prototype.token(function(e){l.error(e)});!function(){try{return u["session_right_token"]}catch(e){return!1}}()?(l.right_data.session="start",l.right_data.application=this.application):(l.right_data.token=u["session_right_token"],l.left_data.token=u["session_left_token"],l.left_data.session="start",l.left_data.application=this.application);var n={url:l.url,method:"POST",dataType:"json",responseType:"text",header:{"Content-Type":"application/x-www-form-urlencoded"},complete:function(){t.prototype.submit_queue.shift(),t.prototype.submit_run()},success:function(){},fail:function(e){l.error(e)}},r=function(){n.data=l.right_data,n.success=function(a){"object"!=typeof a&&(a=function(){try{return JSON.parse(a)}catch(e){return!1}}());var u=a.data?a.data:null;return"object"!=typeof u?(console.warn(e("应用接口响应异常"," at js\\eonfox.js:138")),l.callback(!1,a)):function(){try{return u["token"]}catch(e){return!1}}()?(t.prototype.storage_token(u),l.callback(u,a)):v()},t.prototype.debug&&console.log(e("post()：右令牌提交:",n," at js\\eonfox.js:154")),t.prototype.submit_task=a.request(n)},v=function(){n.data=l.left_data,n.success=function(a){"object"!=typeof a&&(a=function(){try{return JSON.parse(a)}catch(e){return!1}}());var u=a.data?a.data:null;return"object"!=typeof u?(console.warn(e("应用接口响应异常"," at js\\eonfox.js:171")),l.callback(!1,a)):(function(){try{return u["token"]}catch(e){return!1}}()&&t.prototype.storage_token(u),l.callback(u,a))},t.prototype.debug&&console.log(e("post()：左令牌提交:",n," at js\\eonfox.js:186")),t.prototype.submit_task=a.request(n)};return r()},abort:function(){t.prototype.submit_queue=[],t.prototype.submit_task.abort&&t.prototype.submit_task.abort()},submit:function(l){if(t.prototype.debug&&console.log(e("submit()传入参数:",l," at js\\eonfox.js:223")),l.callback&&l.callback.constructor==Function||(l.callback=function(){}),l.error&&l.error.constructor==Function||(l.error=function(){}),"undefined"!=typeof l.url&&"string"==typeof l.url||(l.url=this.api_server_url),l.right_data={},l.left_data={},l.request&&("object"==typeof l.request&&(l.request=JSON.stringify(l.request)),"string"==typeof l.request&&(l.right_data.data=l.request,l.left_data.data=l.request)),l.data&&"object"==typeof l.data)for(var a in l.data)l.right_data[a]=l.data[a],l.left_data[a]=l.data[a];t.prototype.debug&&console.log(e("post()：right_data、left_data:",l.right_data,l.left_data," at js\\eonfox.js:262")),t.prototype.submit_register(l),t.prototype.submit_run()},storage_token:function(l){if(!l)return!1;var u=null,n=!1,r=!1;if(n=function(){try{return l["token"]["session_right_token"]}catch(e){return!1}}(),r=function(){try{return l["token"]["session_left_token"]}catch(e){return!1}}(),n&&r?u=l["token"]:(n=function(){try{return l["session_right_token"]}catch(e){return!1}}(),r=function(){try{return l["session_left_token"]}catch(e){return!1}}(),n&&r&&(u=l)),!u)return!1;var v=t.prototype.token();if(function(){try{return v["session_right_token"]}catch(e){return!1}}()&&function(){try{return v["session_left_token"]}catch(e){return!1}}()&&(v["session_right_token"]==u["session_right_token"]||v["session_left_token"]==u["session_left_token"])&&(t.prototype.debug&&console.log(e("需要对比旧token中的当前时间戳,为true则不需要更新token",v["session_now_time"],u["session_now_time"],parseInt(v["session_now_time"])>parseInt(u["session_now_time"])," at js\\eonfox.js:330")),parseInt(v["session_now_time"])>parseInt(u["session_now_time"])))return t.prototype.debug&&console.log(e("并发异步，不需要更新token"," at js\\eonfox.js:334")),!1;try{a.setStorageSync(this.session_name+":"+this.application,JSON.stringify(u))}catch(o){return console.warn(e(o," at js\\eonfox.js:347")),!1}return!0},token:function(l){var t=!1;try{t=a.getStorageSync(this.session_name+":"+this.application),t&&(t=function(){try{return JSON.parse(t)}catch(e){return!1}}())}catch(u){return console.warn(e(u," at js\\eonfox.js:370")),l&&l(u),!1}return t},left_token:function(e){if("function"!=typeof e){var l=t.prototype.token();return function(){try{return l["session_left_token"]}catch(e){return!1}}()?l["session_left_token"]:""}return t.prototype.submit({callback:function(){var l="",a=t.prototype.token();(function(){try{return a["session_left_token"]}catch(e){return!1}})()&&(l=a["session_left_token"]),e(l)}}),!0},get_websocket_token:function(e){t.prototype.submit({request:{token:["SESSIONWEBSOCKETTOKEN"]},callback:function(l){var a=function(){try{return l.data.token.data}catch(e){return!1}}();e(a)}})},websocket_connect:function(l){t.prototype.websocket_connect_parameter=l,t.prototype.get_websocket_token(function(e){a.connectSocket({url:"ws://developer.eapie.eonfox.com:9997",success:function(){t.prototype.websocket_token=e},fail:function(){}})}),a.onSocketOpen(function(){t.prototype.websocket_open=!0,"function"==typeof l.onSocketOpen&&l.onSocketOpen()}),a.onSocketClose(function(a){t.prototype.websocket_token="",t.prototype.websocket_open=!1,t.prototype.websocket_client_id="",t.prototype.websocket_heartbeat_interval_id&&clearInterval(t.prototype.websocket_heartbeat_interval_id),"function"==typeof l.onSocketClose&&l.onSocketClose(a),console.log(e("WebSocket 已关闭！"," at js\\eonfox.js:470"))}),a.onSocketMessage(function(a){var u=t.prototype.websocket_data(a);if(u.data&&u.data.client_id&&t.prototype.websocket_client_id!=u.data.client_id)return console.log(e("websocket 连接ID 不一致",t.prototype.websocket_client_id,u.data.client_id," at js\\eonfox.js:478")),t.prototype.websocket_init(u.data.client_id,l,function(){"function"==typeof l.onSocketMessage&&l.onSocketMessage(a)});"function"==typeof l.onSocketMessage&&l.onSocketMessage(a)}),a.onSocketError(function(a){"function"==typeof l.onSocketError&&l.onSocketError(a),console.log(e("WebSocket连接打开失败，请检查！"," at js\\eonfox.js:495"))})},websocket_init:function(l,u,n){var r={websocket_open:t.prototype.websocket_open,websocket_token:t.prototype.websocket_token,websocket_client_id:l};if(!t.prototype.websocket_open||!l)return"function"!=typeof u.initError&&(u.initError=function(){}),console.log(e("初始化失败！"," at js\\eonfox.js:510")),u.initError(r);t.prototype.submit({request:{s:["SESSIONWEBSOCKETSELFCLIENT",[{client_id:l}]]},callback:function(){t.prototype.websocket_client_id=l,t.prototype.websocket_heartbeat_interval_id&&clearInterval(t.prototype.websocket_heartbeat_interval_id),t.prototype.websocket_heartbeat_interval_id=setInterval(function(){console.log(e("websocket_init 心跳检测~~~"," at js\\eonfox.js:529")),t.prototype.websocket_heartbeat_debug&&a.showToast({title:"websocket_init 心跳检测~~~",icon:"none"}),t.prototype.websocket_heartbeat(function(l){t.prototype.websocket_heartbeat_debug&&a.showToast({title:"websocket_init 心跳检测失败~~~",icon:"none"}),console.log(e("websocket_init 心跳检测失败返回值：",l," at js\\eonfox.js:546")),clearInterval(t.prototype.websocket_heartbeat_interval_id),t.prototype.websocket_connect(u)})},t.prototype.websocket_heartbeat_ms),"function"!=typeof u.initSuccess&&(u.initSuccess=function(){}),u.initSuccess(),console.log(e("websocket_init 初始化成功！"," at js\\eonfox.js:554")),"function"!=typeof n&&(n=function(){}),n()},error:function(){return console.log(e("websocket_init 初始化错误！"," at js\\eonfox.js:560")),u.initError(r)}})},websocket_heartbeat:function(l){var u={websocket_open:t.prototype.websocket_open,websocket_token:t.prototype.websocket_token,websocket_client_id:t.prototype.websocket_client_id};if(!t.prototype.websocket_open||!t.prototype.websocket_token)return"function"!=typeof l&&(l=function(){}),console.log(e("初始化失败！"," at js\\eonfox.js:576")),a.showToast({title:"初始化失败",icon:"none"}),l(u);var n=JSON.stringify({module:"heartbeat",application:t.prototype.application,token:t.prototype.websocket_token});a.sendSocketMessage({data:n,success:function(l){console.log(e("websocket 保持心跳成功！",l," at js\\eonfox.js:593"))},fail:function(a){return console.log(e("websocket 保持心跳失败！"," at js\\eonfox.js:596")),l(u)}})},websocket_user_push:function(l,u,n){var r={websocket_open:t.prototype.websocket_open,websocket_token:t.prototype.websocket_token};if(!t.prototype.websocket_open||!t.prototype.websocket_token)return"function"!=typeof n&&(n=function(){}),n(r);var v=JSON.stringify({module:"user_push",application:t.prototype.application,token:t.prototype.websocket_token,user_id:l,message:u});a.sendSocketMessage({data:v,success:function(l){console.log(e("websocket 消息推送成功！",l," at js\\eonfox.js:625"))},fail:function(l){return console.log(e("websocket 消息推送失败！"," at js\\eonfox.js:628")),n(errorData)}})},websocket_restart:function(){t.prototype.websocket_close(),t.prototype.websocket_connect(t.prototype.websocket_connect_parameter)},websocket_close:function(){t.prototype.websocket_token="",t.prototype.websocket_open=!1,t.prototype.websocket_client_id="",t.prototype.websocket_heartbeat_interval_id&&clearInterval(t.prototype.websocket_heartbeat_interval_id),a.closeSocket()},websocket_data:function(l){return console.log(e(l," at js\\eonfox.js:656")),!!l.data&&JSON.parse(l.data)}};var u=t;l.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},"9cbb":function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAK0klEQVR4XrVciVIbOxCUOXOQVAry/1/2PgFTSTgSY7BftXCb9ngOrQFXucBerUZq9fSMjvVsvV7/11r72Vp7bq2t2we9VqtVs+/ZbNbW63V/2xeu4Y3X8fFxOzo66m/9/gOaCoPHrbXr2Xq9vm2tXby3EXaYYDw/P4cgjNgmIPgLoPD+QJDuAMy8tXY50riRMgAEIOBNUPAdR9+rQxmTlcO9LEtgTk5OOkh4VfeOtH9T5gbAXLfWribc5BZFgwHE09NTB4Ud4N8RYFAW7qIvC6oHIhn0jiyavxkYArJcLjsofCkQVkN4zQMtKmtHw9MlgHp2drZ1szcM9uHAsGEEBGzRjmbAeA22YGkZj20KjLUL5gCgN2jQYcBQRwAKAMlelhWeK3juYsHQMlEdWgbsgf6cnp4eoj3TgYFxAIL3yCvSCGVIBoIKLgU2AsYL+WSP1a6i7dOAQYMeHx93tIQNH9GUqREpE+4pugVQzs/Pp7jWGDCZwI4KaOZSkeZ4zGBZe03r91hKcJgkvgtjEH7BFCuwI9oSiWjUadupyEYEtOeWrANuBc1hWE/aXzMGYKj7RPlIxYgssmSdGbVXAajgIGIVzMmBUU3J8osRMZySlWYuZF0py4lU/3Tg1K0CQGNgUBESNrCF9M7or4mdBZHRpIpinhtxolnd6wUBDxjWg1BOQXbq9oFBA6Eri8ViJ2nT0YoarN/b//V+zqX4l6DgHuYgVguqKDXidloH9CbIc3xgoCsABY1WJlhkI2bYDihAyH9YN5PDiCkUSwpmJswZaLDDLNiW+/Tp03YSKv3bBwY3agKXGYxCp0d7uOW/f/963SMRRUEHQKC9Ut+G52wAtT12MAOX2gdGXWhKSPUAxCihPgDCcK96482PvO/IFACEESb9rfZFrkut8QYM9yBKASBxxV1gYAidQGdGRC+LNLgGltzf3+8sQ1hKE6iImdp5lvny5UsHyDJhRPd0YFgfNA31ybRhFxjSHTegUETXirYKCuq0AFYhNstJCBTA4Qy60j7PnnUpuCmYuHm9AoOCEEV0hMDYKBR9tg2D2N3d3W3nVAqMl8yNNFyZRXC+fv3awfGi5WjeRICM1rwCw5yFkcLzdQVADVs3gPsA5ExPMjAyN+Y1Dt7FxcU2xR+JWpbtuIf3CWtegFmv11dM+z1fV4PRdRiE+6EesMVrpNfh6Lsokmh5DCIYA3DU9SsJ8HQG3wlrXoGhG1X6QYWPqApQuFZjO12xUBs8AoyyBp3KolQl8rS3yWtegHl6eroi9aPoEAmcAgRAAIzt4AjFI6Cz9vAaXODz58/bJmb6oqLryQEYeHZ29gLM4+NjdyWvQqvetjJlwcPDQ9cWhuRMrD2wbKMr28puuBNYUwUIr079DnV0YJ6fn68Xi8WVrt1mjY5CLXIfsIU5kDba06jIZSPbatfTJTBGc5uK+RYgtmez0zCfLZfLzpiooHUhHRF1GTAO0ciC4O0TRVqi+hV1zOoI7sGgwp0QvkdzpKi/uL8zZrFYXC+Xy+2GGydcdsS9MKcd/Pv3b8+aR8VbxTAL/V6EseXRZkwXvn371v964FXiq3aOj4/3gVFG6Oh7iZmyCWyhTk0Rvyo9IIvUlgWG0YkJHz5XWuINNOudzWbz2f39fc9jsqhj/d4TybcCo+zzIkfl6ugUpwkRmJXu8L6jo6MYmEhbrFEKIYDR/KXSJs9VvTxnJPfhwOkUQd0piqSqaSaazWd3d3c7m/qZKFnhta4UAeNFJY0smeuNCDJ1ESEbE0FrzxPkCLhNn/aBGWmIQbd/pCupS3juWWlVleh59QMYRD8Co6lHFOajrDwFxnOXzLVwDREJkcmKmseyiiH2Ho9dOuIAAokZotKUYySJO78yxguLUSctSGi4Th6rtZwpwDDiWOFUl8f/cCEwJmJkpFWBm+0DU4HhKTsqR8Z7e3vbky0vMx0FY0S0o8wXSR5dzeYylYua67saMxrOosYzyYMRbyT0vhFbnkZZjaG+MLmrdE13DDyX3WpMlMdYnak0RlmTZZ6eftk8KbPl1Q2mIIepgIzyI4dN89nDw8P1arUKE7yokR41YRgzbOiN94ryFC+BzKiPazxggCmAhumIlR4oOkhqr2e+ETCVr0cNxxIpZtkMmdEk0hPwqKFeW9BR2MCMGmyxYVndpAjNXvUvcyXMrivRjRrnAQStYejmdS3nRUB7PRNrgqITx8rVLVBZ+T6J5LKDXQSPgFDVt0KoxrloxTJVVNC6Is3B9wQVTMQUQLY8uvkR0CNbtHt6evq6UGUXmLSTGe29DlMDuP5r/DcUSQXdy0cqUBSYUVf1pg/n5+fz2Wq16q6UzXPUCP21yksYpeBSepTEE2Bbvyeg+I7rLtAURKJoXpcBlEkG6tvsk7+s+WKhyu4DZT7IBhHtDCR0BqDr1m+V41jbzD3gNhBbXdu1IEbRspIA9mlnMRzhGg33zuxmhhT9KGXn/TwswM19W29kh6OINV09y+JpidUOC0bFFrQBTDw5OfH3lTS8VcBEodDSnGEbs3BMHfCZB4O8PIaRB4BCZL9//773fMKoC3p649nkaYqex/AhCx7oiUQr8vsqDOsoAQww8/fv39s5lQ3n6qa8FwkcwGFUyiKcHSjLkijRQzk5YbW7qQ+aV6twlgkjYqrRBDbAGE8gvTCN+iG2eI8ep806b0M6P/Nw0obZ/jEQ9VXeWAHg6Y2tB3VweSITd14jUNAXvJUxUUTKXDuTBYiuaNguMBgRinAUObIGaYcsUKjPA8bTMwJCWx4wHuOyaGeDA+/H9zw4xAfCWmv7J6p4NMxDPqNo5GLWx5Ux0ehagAmMB0YG0Ah4aDePfwij/MOJqjVZSB4RZJbhU2+omzlTJvQKNCiOxvM098jE1HN9L1AYbWGT4uOs1qUiEKyOKEUx0+ajgPo4oHWfKAdi3aotDPP2uQDrfnpvFJn4RJyTMMYHoBGdppyAYGcBBI/DahRR98j2szMtsB2Ezc3phP6X27NZ8qfXJh+A5qjzoHIV/tBAe47XdtBGBDvCo3rDcja08/kAewzetp2fDzoyz5EZOSGOhoIhPLaqoxolYlZbPOArMbeuzfJ66sGLoIxCKCdRyDZp7LEcnUdpZwkKV+zstShXidxFdaFikAcu60VOgkxZt3HoBdSV4pmlGhhUqA9y0QAabg8LjTJE64jY4+U3EdCqXxYcrWcQFFQ3BgyMKTg0BqZAoAcfp3P75UUTLehpk1eRhmeCwxPkdJ8Jz2SPAaOaw2OvcC8sX46A4rmOjrIXWr00ILvHAoiB1B2EQlOma4xHdYBzc3PTEzX+UkeUi1iXsBtekd5McUsrxPiMKIm2XV5e9nmWTREKt5zGGB0xsAXLB4hIZI2XWVbAjOhGNJ+yrGIiyCVQrOHwcHRlx1w/DBiKJ0bl169f260Sb1Sy/MVjhc1PvHyH9tUFCQr+wm1+/PiRPdpX4XQ4MKo7yGH+/Pmz90TcRPr2Ki0wUQ/oggoI7GEPO9rHrtCQ628Hhp2B2GFHAC7G33wgMFVnp+iJnirVLBZ5C6LQwDPVI/h0YN71h3W4bMENN3u6iXoxkgzazJXsoAthrgNAIK7RzsEICk6Z/sM6H/JTTACE8yf7LKQnmlF4JhgAkpNGaAgfARxJFw4Ap/8U04f/eBc6p5NM/XmVaB2XQOAvmIHkbLO1MTX0TsFl++Nd/wNHS0ymp12lCQAAAABJRU5ErkJggg=="},a34a:function(e,l,a){e.exports=a("bbdd")},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),u=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,n=u&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),u)t.regeneratorRuntime=n;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},bd71:function(e,l,a){"use strict";function t(e){this.key=e.key,this.requestConfig={key:e.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"}}t.prototype.getWxLocation=function(e,l){wx.getLocation({type:"gcj02",success:function(e){var a=e.longitude+","+e.latitude;wx.setStorage({key:"userLocation",data:a}),l(a)},fail:function(a){wx.getStorage({key:"userLocation",success:function(e){e.data&&l(e.data)}}),e.fail({errCode:"0",errMsg:a.errMsg||""})}})},t.prototype.getRegeo=function(e){function l(l){var t=a.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:l,extensions:"all",s:t.s,platform:t.platform,appname:a.key,sdkversion:t.sdkversion,logversion:t.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var t,u,n,r,v,o,i,b,s;a.data.status&&"1"==a.data.status?(t=a.data.regeocode,u=t.addressComponent,n=[],r="",t&&t.roads[0]&&t.roads[0].name&&(r=t.roads[0].name+"附近"),v=l.split(",")[0],o=l.split(",")[1],t.pois&&t.pois[0]&&(r=t.pois[0].name+"附近",i=t.pois[0].location,i&&(v=parseFloat(i.split(",")[0]),o=parseFloat(i.split(",")[1]))),u.provice&&n.push(u.provice),u.city&&n.push(u.city),u.district&&n.push(u.district),u.streetNumber&&u.streetNumber.street&&u.streetNumber.number?(n.push(u.streetNumber.street),n.push(u.streetNumber.number)):(b="",t&&t.roads[0]&&t.roads[0].name&&(b=t.roads[0].name),n.push(b)),n=n.join(""),s=[{iconPath:e.iconPath,width:e.iconWidth,height:e.iconHeight,name:n,desc:r,longitude:v,latitude:o,id:0,regeocodeData:t}],e.success(s)):e.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var a=this;e.location?l(e.location):a.getWxLocation(e,function(e){l(e)})},t.prototype.getWeather=function(e){function l(l){var a="base";e.type&&"forecast"==e.type&&(a="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:t.key,city:l,extensions:a,s:u.s,platform:u.platform,appname:t.key,sdkversion:u.sdkversion,logversion:u.logversion},method:"GET",header:{"content-type":"application/json"},success:function(l){function a(e){var l={city:{text:"城市",data:e.city},weather:{text:"天气",data:e.weather},temperature:{text:"温度",data:e.temperature},winddirection:{text:"风向",data:e.winddirection+"风"},windpower:{text:"风力",data:e.windpower+"级"},humidity:{text:"湿度",data:e.humidity+"%"}};return l}var t,u;l.data.status&&"1"==l.data.status?l.data.lives?(t=l.data.lives,t&&t.length>0&&(t=t[0],u=a(t),u["liveData"]=t,e.success(u))):l.data.forecasts&&l.data.forecasts[0]&&e.success({forecast:l.data.forecasts[0]}):e.fail({errCode:l.data.infocode,errMsg:l.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}function a(a){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:t.key,location:a,extensions:"all",s:u.s,platform:u.platform,appname:t.key,sdkversion:u.sdkversion,logversion:u.logversion},method:"GET",header:{"content-type":"application/json"},success:function(a){var t,u;a.data.status&&"1"==a.data.status?(u=a.data.regeocode,u.addressComponent?t=u.addressComponent.adcode:u.aois&&u.aois.length>0&&(t=u.aois[0].adcode),l(t)):e.fail({errCode:a.data.infocode,errMsg:a.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var t=this,u=t.requestConfig;e.city?l(e.city):t.getWxLocation(e,function(e){a(e)})},t.prototype.getPoiAround=function(e){function l(l){var u={key:a.key,location:l,s:t.s,platform:t.platform,appname:a.key,sdkversion:t.sdkversion,logversion:t.logversion};e.querytypes&&(u["types"]=e.querytypes),e.querykeywords&&(u["keywords"]=e.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:u,method:"GET",header:{"content-type":"application/json"},success:function(l){var a,t,u,n;if(l.data.status&&"1"==l.data.status){if(l=l.data,l&&l.pois){for(a=[],t=0;t<l.pois.length;t++)u=0==t?e.iconPathSelected:e.iconPath,a.push({latitude:parseFloat(l.pois[t].location.split(",")[1]),longitude:parseFloat(l.pois[t].location.split(",")[0]),iconPath:u,width:22,height:32,id:t,name:l.pois[t].name,address:l.pois[t].address});n={markers:a,poisData:l.pois},e.success(n)}}else e.fail({errCode:l.data.infocode,errMsg:l.data.info})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})}var a=this,t=a.requestConfig;e.location?l(e.location):a.getWxLocation(e,function(e){l(e)})},t.prototype.getStaticmap=function(e){function l(l){u.push("location="+l),e.zoom&&u.push("zoom="+e.zoom),e.size&&u.push("size="+e.size),e.scale&&u.push("scale="+e.scale),e.markers&&u.push("markers="+e.markers),e.labels&&u.push("labels="+e.labels),e.paths&&u.push("paths="+e.paths),e.traffic&&u.push("traffic="+e.traffic);var a=n+u.join("&");e.success({url:a})}var a,t=this,u=[],n="https://restapi.amap.com/v3/staticmap?";u.push("key="+t.key),a=t.requestConfig,u.push("s="+a.s),u.push("platform="+a.platform),u.push("appname="+a.appname),u.push("sdkversion="+a.sdkversion),u.push("logversion="+a.logversion),e.location?l(e.location):t.getWxLocation(e,function(e){l(e)})},t.prototype.getInputtips=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.location&&(t["location"]=e.location),e.keywords&&(t["keywords"]=e.keywords),e.type&&(t["type"]=e.type),e.city&&(t["city"]=e.city),e.citylimit&&(t["citylimit"]=e.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.tips&&e.success({tips:l.data.tips})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getDrivingRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),e.strategy&&(t["strategy"]=e.strategy),e.waypoints&&(t["waypoints"]=e.waypoints),e.avoidpolygons&&(t["avoidpolygons"]=e.avoidpolygons),e.avoidroad&&(t["avoidroad"]=e.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.route&&e.success({paths:l.data.route.paths,taxi_cost:l.data.route.taxi_cost||""})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getWalkingRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.route&&e.success({paths:l.data.route.paths})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getTransitRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),e.strategy&&(t["strategy"]=e.strategy),e.city&&(t["city"]=e.city),e.cityd&&(t["cityd"]=e.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){if(l&&l.data&&l.data.route){var a=l.data.route;e.success({distance:a.distance||"",taxi_cost:a.taxi_cost||"",transits:a.transits})}},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},t.prototype.getRidingRoute=function(e){var l=this,a=l.requestConfig,t={key:l.key,s:a.s,platform:a.platform,appname:l.key,sdkversion:a.sdkversion,logversion:a.logversion};e.origin&&(t["origin"]=e.origin),e.destination&&(t["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:t,method:"GET",header:{"content-type":"application/json"},success:function(l){l&&l.data&&l.data.data&&e.success({paths:l.data.data.paths})},fail:function(l){e.fail({errCode:"0",errMsg:l.errMsg||""})}})},e.exports.AMapWX=t},c60d:function(e,l){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAADVUlEQVRYR7XXX4iUVRjH8c8z7qq7mRnVkkZJRS0RYUWRpI1ua2im/bFYsBspKiIioiK6KPAmEgq6C4IIomWDtCjFSKIdd1cjULoqWRWtiJUQCv9Vos6ceGctVp113llnz+15zu/5vs97nj8nTHClkhl4G/cJu5W9EN32TUQuJnIofWqKDi/hTbSe1ugz1VNxt38a1ZwYxKDbJZskc8Y4PC55Orr0TjpE9TeEPqys4WyPKe6Pe+xvBKThSKSSF7FOmHaOo1CRfCR5LroczwvSEEQquVXYiKvP4yC7E2tisfVNh0g7tTvmY6yqK578pOKB6PZrXVvkikTaa5oRz+AdTK0rnP2Wig+1eTnmO1LPflyItEm7GW4UbsISPIaZ9QTH7J/EN/hSGHbccCx1sNb5KkTKIrJTm6NmCrcIy1XcIVxLNQ1zRWxcwOSwgn2SYcmgZKupDljgrwiVSEMudUoPHhbm4WKhXVJo4KsbMT2Bo5K9Cjar6I004C3Jq0ya03qAX0XaajOW17OcxP3dkfo9quADzJpER+NJZ5f39Ujva9XpFWGtlCP9mkU6msZ9Tnh2NDtKpgvv4Ylm+cihM6RsdXQb+T/10jZzlH0iKeYQuFCTX9ATi+3IhM7I/zTgNskGXHehXs5z/oiCJ6Pos/9szilCacCDUrVHNFId8zJnF3GtRdZlRWp8iGxqusJrwhvUaNd53Z1tN9rme7V4PhY6Ona7ZjlOX5ttugHcMFGfNc6NSJZFlx/P5athXc0Wvj9dxpvFsUeyKLr8nhdilrANNzeLAPuFJbHIz/kgtutw0iA6mwjxm4JlUbQrH8SQa5T14/omQhxQsDKKfsgH0a9T2CLMbSLEQRWr4l7b80EMmadc7a5XNRHiTwU9UfRtXoi7lH2BK+tAZJP1YVyOljq2WaV8PIrVjztj1a4TJYuxQbispnDyh9Av2ahilym6JUuFBVTTu9b6W7ImuqptIQfEgKLkc86AyKbm7MHbK1Uv7fDYB04qVeeR7F2yGksx+6zJfNz3SO1IbHGRad4VHpIcUrFdwXottlngWEQ2G9deqaRFqw5lj0hWYP7pgWmHpCe6ZB20fiQyi/SdNqeqk/chC+09n+NxgbJnwyXulMzN5vlaNSI7+y+jHvkCgjlOdgAAAABJRU5ErkJggg=="},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},ec04:function(e,l,a){"use strict";(function(e,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={checkError:function(e,l,a){if("function"!=typeof a&&(a=function(){}),e.errno)return a(e.errno,e.error),!1;if(!e.data)return a(1,"未知错误"),!1;if(l)if("object"==typeof l)for(var t in l){if("undefined"==typeof l[t])return a(1,"“"+l[t]+"”目标，未知错误"),!1;var u=l[t];if(e.data[u]&&e.data[u].errno)return a(e.data[u].errno,e.data[u].error),!1}else{if("string"!=typeof l&&"number"!=typeof l)return a(1,"“"+l+"”目标，未知错误"),!1;if("undefined"==typeof e.data[l])return a(1,"“"+l+"”目标，未知错误"),!1;if(e.data[l].errno)return a(e.data[l].errno,e.data[l].error),!1}var n={};if(e.data)for(var t in e.data)"undefined"!=typeof e.data[t].data&&(n[t]=e.data[t].data);return n},number_pre:function(e,l){switch(l){case"ceil":return Math.ceil(e)}},number_floor_2:function(e){e*=100;return e=Math.floor(e),e/=100,e.toFixed(2)},err:function(l,t,u,n){t?(u&&(t=JSON.stringify(t)),console.log(e(l+" :",t," at js\\fns.js:81")),a.showToast({title:l+" : "+t,icon:"none",duration:1500,success:function(){n&&n()}})):(console.log(e(l," at js\\fns.js:93")),a.showToast({title:l,icon:"none",duration:1500,success:function(){n&&n()}}))},success:function(e,l){l&&l(),a.hideLoading()},waiting:function(){a.showToast({title:"敬请期待",icon:"none"})},oauth_:function(){a.setStorage({key:"oauth",data:!0})},noauth:function(){a.setStorage({key:"oauth",data:!1})},unionid:function(){a.setStorage({key:"unionid",data:!0})},nunionid:function(){a.setStorage({key:"unionid",data:!1})},bind:function(){console.log(e("oauth"," at js\\fns.js:158")),a.getStorage({key:"oauth",success:function(l){console.log(e("oauth",l," at js\\fns.js:162"))}})},getUrlQuery:function(e){for(var l=[],a=0;a<e.split("&").length;a++)l.push(e.split("&")[a].split("=")[0]?e.split("&")[a].split("=")[0]:""),l.push(e.split("&")[a].split("=")[1]?e.split("&")[a].split("=")[1]:"onlyKey");if(""!=e){var t={};for(a=0;a<l.length;a+=2)""!=l[a]&&(t[l[a]]=decodeURIComponent(l[a+1]));return t}},getUrlkey:function(l){var a={},t=l.split("?");console.log(e("1_分割url:",t," at js\\fns.js:190"));var u=t[1].split("&");console.log(e("2_分割urls[1]:",u," at js\\fns.js:191"));for(var n=0,r=u.length;n<r;n++){var v=u[n].split("=");console.log(e("3_遍历 arr 并分割后赋值给a:",v[0],v[1]," at js\\fns.js:193")),a[v[0]]=v[1],console.log(e("4_a给params对象赋值:",a," at js\\fns.js:194"))}return console.log(e("5_结果:",a," at js\\fns.js:195")),a},toast:function(e,l,t){t||(t=1500),a.showToast({title:e,success:function(){setTimeout(function(){a.reLaunch({url:l})},t)}})},setSystemInfoSync:function(){a.getStorage({key:"SystemInfoSync",fail:function(l){console.log(e("设置缓存"," at js\\fns.js:218"));try{console.log(e("star"," at js\\fns.js:220"));var t=a.getSystemInfoSync();console.log(e("config"+JSON.stringify(t)," at js\\fns.js:222")),a.setStorage({key:"SystemInfoSync",data:t}),console.log(e("ok"," at js\\fns.js:227"))}catch(u){console.log(e("catch+"+JSON.stringify(u)," at js\\fns.js:229"))}}})},getCompare:function(l,t,u){l!=t?(console.log(e("接收到参数"," at js\\fns.js:241")),a.getStorage({key:"SystemInfoSync",success:function(l){if(console.log(e("缓存:"+JSON.stringify(l)," at js\\fns.js:245")),!l.data)return this.setSystemInfo();var a=l.data;console.log(e("json:"+JSON.stringify(a)," at js\\fns.js:248")),console.log(e("设备:"+a.platform," at js\\fns.js:249")),"android"==a.platform&&(console.log(e("设备:安卓"," at js\\fns.js:251")),u())},fail:function(l){console.log(e("缓存获取失败"+JSON.stringify(l)," at js\\fns.js:259"));var t=a.getSystemInfoSync();console.log(e("config"+JSON.stringify(t)," at js\\fns.js:261")),a.setStorage({key:"SystemInfoSync",data:t,success:function(){"android"==t.platform&&(console.log(e("设备:安卓"," at js\\fns.js:267")),u())}})},complete:function(){console.log(e("获取缓存"," at js\\fns.js:275"))}})):console.log(e("没有更新"," at js\\fns.js:238"))}},u=t;l.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},ef81:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__596012B"};l.default=t}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/goodsList/goodslist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/goodsList/goodslist.js';

define('components/goodsList/goodslist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/goodsList/goodslist"], {
  "38fb": function fb(t, n, o) {
    "use strict";

    o.r(n);
    var e = o("9d54"),
        u = o.n(e);

    for (var d in e) {
      "default" !== d && function (t) {
        o.d(n, t, function () {
          return e[t];
        });
      }(d);
    }

    n["default"] = u.a;
  },
  "69dc": function dc(t, n, o) {},
  "9d54": function d54(t, n, o) {
    "use strict";

    (function (t, o) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          goodsList: {
            type: Array,
            required: !0
          }
        },
        data: function data() {
          return {};
        },
        methods: {
          godetail: function godetail(n) {
            console.log(t(n, " at components\\goodsList\\goodslist.vue:33")), o.navigateTo({
              url: "../goods/goods?id=" + this.goodsList[n].id
            });
          }
        }
      };
      n.default = e;
    }).call(this, o("0de9")["default"], o("6e42")["default"]);
  },
  abd6: function abd6(t, n, o) {
    "use strict";

    var e = o("69dc"),
        u = o.n(e);
    u.a;
  },
  b69d: function b69d(t, n, o) {
    "use strict";

    o.r(n);
    var e = o("d7f4"),
        u = o("38fb");

    for (var d in u) {
      "default" !== d && function (t) {
        o.d(n, t, function () {
          return u[t];
        });
      }(d);
    }

    o("abd6");
    var a = o("2877"),
        i = Object(a["a"])(u["default"], e["a"], e["b"], !1, null, "5e310050", null);
    n["default"] = i.exports;
  },
  d7f4: function d7f4(t, n, o) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    o.d(n, "a", function () {
      return e;
    }), o.d(n, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/goodsList/goodslist-create-component', {
  'components/goodsList/goodslist-create-component': function componentsGoodsListGoodslistCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b69d"));
  }
}, [['components/goodsList/goodslist-create-component']]]);
});
require('components/goodsList/goodslist.js');
__wxRoute = 'components/m-footer-car';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-footer-car.js';

define('components/m-footer-car.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-footer-car"], {
  "115b": function b(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "m-footer-car",
      props: {
        price: {
          type: String,
          value: ""
        },
        num: {
          type: [String, Number],
          value: ""
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        handleFn: function handleFn() {
          this.$emit("handleFn");
        }
      }
    };
    t.default = u;
  },
  "20c7": function c7(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  "25f8": function f8(n, t, e) {},
  c1e8: function c1e8(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("115b"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  e48c: function e48c(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("20c7"),
        r = e("c1e8");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("f702");
    var c = e("2877"),
        o = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  f702: function f702(n, t, e) {
    "use strict";

    var u = e("25f8"),
        r = e.n(u);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-footer-car-create-component', {
  'components/m-footer-car-create-component': function componentsMFooterCarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e48c"));
  }
}, [['components/m-footer-car-create-component']]]);
});
require('components/m-footer-car.js');
__wxRoute = 'components/m-store-pro';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-store-pro.js';

define('components/m-store-pro.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-store-pro"], {
  "0706": function _(t, n, e) {
    "use strict";

    var o = e("90e6"),
        u = e.n(o);
    u.a;
  },
  "262d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("7f57"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "4a77": function a77(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  7604: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("4a77"),
        u = e("262d");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("0706");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "7f57": function f57(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "m-store-pro",
      props: {
        rowData: {
          type: Object,
          rowData: {}
        }
      },
      methods: {
        touchOnGoods: function touchOnGoods(t, n) {
          this.$emit("touchOnGoods", {
            element: t,
            data: n
          });
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  },
  "90e6": function e6(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-store-pro-create-component', {
  'components/m-store-pro-create-component': function componentsMStoreProCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7604"));
  }
}, [['components/m-store-pro-create-component']]]);
});
require('components/m-store-pro.js');
__wxRoute = 'components/myIssue';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/myIssue.js';

define('components/myIssue.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/myIssue"], {
  "0a7b": function a7b(e, t, a) {},
  3250: function _(e, t, a) {
    "use strict";

    var n = a("0a7b"),
        i = a.n(n);
    i.a;
  },
  8079: function _(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("a807"),
        i = a("a30a");

    for (var r in i) {
      "default" !== r && function (e) {
        a.d(t, e, function () {
          return i[e];
        });
      }(r);
    }

    a("3250");
    var u = a("2877"),
        o = Object(u["a"])(i["default"], n["a"], n["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  a30a: function a30a(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("c028"),
        i = a.n(n);

    for (var r in n) {
      "default" !== r && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(r);
    }

    t["default"] = i.a;
  },
  a807: function a807(e, t, a) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement,
          a = (e._self._c, e.headTitleValue.slice(0, 5));
      e.$mp.data = Object.assign({}, {
        $root: {
          g0: a
        }
      });
    },
        i = [];

    a.d(t, "a", function () {
      return n;
    }), a.d(t, "b", function () {
      return i;
    });
  },
  c028: function c028(e, t, a) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = {
      props: {
        headPicShow: {
          type: [String, Boolean],
          default: !0
        },
        headPicValue: {
          type: String,
          default: a("9cbb")
        },
        headTitleShow: {
          type: [String, Boolean],
          default: !0
        },
        headTitleValue: {
          type: String,
          default: "描述相符"
        },
        starsShow: {
          type: [String, Boolean],
          default: !0
        },
        starsMax: {
          type: [String, Number],
          default: 5
        },
        starDefault: {
          type: String,
          default: a("5f36")
        },
        starActive: {
          type: String,
          default: a("c60d")
        },
        score: {
          type: [Number, String],
          default: 0
        },
        starsDisabled: {
          type: [Boolean],
          default: !1
        },
        textareaShow: {
          type: [String, Boolean],
          default: !0
        },
        textareaPlaceholder: {
          type: [String],
          default: "宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧"
        },
        submitShow: {
          type: [String, Boolean],
          default: !0
        },
        submitText: {
          type: String,
          default: "发布"
        },
        infoReceive: {
          type: Object,
          default: function _default() {
            return {
              score: 0,
              textareaValue: ""
            };
          }
        }
      },
      computed: {
        formatScore: function formatScore() {
          return this.infoReceive.score;
        }
      },
      methods: {
        setScore: function setScore(e) {
          !1 === this.starsDisabled && (this.infoReceive.score = e, this.$emit("scoreChange", e));
        },
        blur: function blur(e) {
          this.infoReceive.textareaValue = e.detail.value;
        },
        doSubmit: function doSubmit() {
          this.$emit("submit", this.infoReceive);
        }
      },
      created: function created() {
        this.infoReceive.score = this.score;
      }
    };
    t.default = n;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/myIssue-create-component', {
  'components/myIssue-create-component': function componentsMyIssueCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8079"));
  }
}, [['components/myIssue-create-component']]]);
});
require('components/myIssue.js');
__wxRoute = 'components/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/share.js';

define('components/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/share"], {
  3893: function _(t, n, o) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    o.d(n, "a", function () {
      return r;
    }), o.d(n, "b", function () {
      return a;
    });
  },
  "6dab": function dab(t, n, o) {
    "use strict";

    var r = o("f78c"),
        a = o.n(r);
    a.a;
  },
  9044: function _(t, n, o) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        data: function data() {
          return {
            transform: "translateY(50vh)",
            timer: 0,
            backgroundColor: "rgba(0,0,0,0)",
            show: !1,
            config: {}
          };
        },
        props: {
          contentHeight: {
            type: Number,
            default: 0
          },
          hasTabbar: {
            type: Boolean,
            default: !1
          },
          shareList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        created: function created() {
          var n = t.upx2px(this.contentHeight) + "px";
          this.config = {
            height: n,
            transform: "translateY(".concat(n, ")"),
            backgroundColor: "rgba(0,0,0,.4)"
          }, this.transform = this.config.transform;
        },
        methods: {
          toggleMask: function toggleMask() {
            var n = this;

            if (1 != this.timer) {
              if (this.timer = 1, setTimeout(function () {
                n.timer = 0;
              }, 500), this.show) return this.transform = this.config.transform, this.backgroundColor = "rgba(0,0,0,0)", void setTimeout(function () {
                n.show = !1, n.hasTabbar && t.showTabBar();
              }, 200);
              this.show = !0, this.hasTabbar ? t.hideTabBar({
                success: function success() {
                  setTimeout(function () {
                    n.backgroundColor = n.config.backgroundColor, n.transform = "translateY(0px)";
                  }, 10);
                }
              }) : setTimeout(function () {
                n.backgroundColor = n.config.backgroundColor, n.transform = "translateY(0px)";
              }, 10);
            }
          },
          stopPrevent: function stopPrevent() {},
          shareToFriend: function shareToFriend(t) {
            this.$api.msg("分享给".concat(t)), this.toggleMask();
          }
        }
      };
      n.default = o;
    }).call(this, o("6e42")["default"]);
  },
  "92f2": function f2(t, n, o) {
    "use strict";

    o.r(n);
    var r = o("9044"),
        a = o.n(r);

    for (var e in r) {
      "default" !== e && function (t) {
        o.d(n, t, function () {
          return r[t];
        });
      }(e);
    }

    n["default"] = a.a;
  },
  cf1a: function cf1a(t, n, o) {
    "use strict";

    o.r(n);
    var r = o("3893"),
        a = o("92f2");

    for (var e in a) {
      "default" !== e && function (t) {
        o.d(n, t, function () {
          return a[t];
        });
      }(e);
    }

    o("6dab");
    var i = o("2877"),
        s = Object(i["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = s.exports;
  },
  f78c: function f78c(t, n, o) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/share-create-component', {
  'components/share-create-component': function componentsShareCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cf1a"));
  }
}, [['components/share-create-component']]]);
});
require('components/share.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "0935": function _(t, n, e) {},
  "51f1": function f1(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("db03"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "82a1": function a1(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  ad5c: function ad5c(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("82a1"),
        u = e("51f1");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("e179");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  db03: function db03(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "uni-load-more",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  },
  e179: function e179(t, n, e) {
    "use strict";

    var o = e("0935"),
        u = e.n(o);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ad5c"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-number-box/uni-number-box';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-number-box/uni-number-box.js';

define('components/uni-number-box/uni-number-box.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-number-box/uni-number-box"], {
  "1a33": function a33(t, e, n) {
    "use strict";

    var u = n("f1ce"),
        a = n.n(u);
    a.a;
  },
  "74d4": function d4(t, e, n) {
    "use strict";

    var u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return u;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  "7e5c": function e5c(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("74d4"),
        a = n("ac30");

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    n("1a33");
    var l = n("2877"),
        r = Object(l["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    e["default"] = r.exports;
  },
  a3e2: function a3e2(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var u = {
      name: "uni-number-box",
      props: {
        rowData: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        value: {
          type: Number,
          default: 1
        },
        min: {
          type: Number,
          default: 0
        },
        max: {
          type: Number,
          default: 100
        },
        step: {
          type: Number,
          default: 1
        },
        disabled: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          inputValue: this.value
        };
      },
      computed: {
        disableSubtract: function disableSubtract() {
          return this.inputValue <= this.min;
        },
        disableAdd: function disableAdd() {
          return this.inputValue >= this.max;
        }
      },
      watch: {
        value: function value(t) {
          this.inputValue = t;
        },
        inputValue: function inputValue(t, e) {
          this.$emit("change", {
            oldval: e,
            newval: t,
            rowData: this.rowData
          });
        }
      },
      methods: {
        _calcValue: function _calcValue(t) {
          if (!this.disabled) {
            var e = this._getDecimalScale(),
                n = this.inputValue * e,
                u = this.step * e;

            "subtract" === t ? n -= u : "add" === t && (n += u), n < this.min || n > this.max || (this.inputValue = n / e);
          }
        },
        _getDecimalScale: function _getDecimalScale() {
          var t = 1;
          return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), t;
        },
        _onBlur: function _onBlur(t) {
          var e = t.detail.value;
          e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
        }
      }
    };
    e.default = u;
  },
  ac30: function ac30(t, e, n) {
    "use strict";

    n.r(e);
    var u = n("a3e2"),
        a = n.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    e["default"] = a.a;
  },
  f1ce: function f1ce(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-number-box/uni-number-box-create-component', {
  'components/uni-number-box/uni-number-box-create-component': function componentsUniNumberBoxUniNumberBoxCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7e5c"));
  }
}, [['components/uni-number-box/uni-number-box-create-component']]]);
});
require('components/uni-number-box/uni-number-box.js');
__wxRoute = 'components/zy-search/zy-search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/zy-search/zy-search.js';

define('components/zy-search/zy-search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/zy-search/zy-search"], {
  "07e4": function e4(e, t, a) {},
  "0b90": function b90(e, t, a) {
    "use strict";

    (function (e, a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        name: "zy-search",
        props: {
          isFocus: {
            type: Boolean,
            value: !1
          },
          isBlock: {
            type: Boolean,
            value: !0
          },
          showWant: {
            type: Boolean,
            value: !1
          }
        },
        data: function data() {
          return {
            searchText: "",
            hList: e.getStorageSync("search_cache"),
            wantList: ["栏目1", "栏目2", "栏目3", "栏目4"]
          };
        },
        methods: {
          searchStart: function searchStart() {
            var t = this;
            if (e.navigateTo({
              url: "../../pages/goods/goods-list/goods-list?name=" + t.searchText
            }), "" == t.searchText) return e.showToast({
              title: "请输入关键字",
              icon: "none",
              duration: 1e3
            }), !1;
            e.getStorage({
              key: "search_cache",
              success: function success(n) {
                var r = n.data;

                if (console.log(a(r, " at components\\zy-search\\zy-search.vue:95")), r.length > 5) {
                  var o = !0,
                      c = !1,
                      s = void 0;

                  try {
                    for (var i, u = r[Symbol.iterator](); !(o = (i = u.next()).done); o = !0) {
                      var l = i.value;
                      if (l == t.searchText) return !1;
                    }
                  } catch (g) {
                    c = !0, s = g;
                  } finally {
                    try {
                      o || null == u.return || u.return();
                    } finally {
                      if (c) throw s;
                    }
                  }

                  r.pop(), r.unshift(t.searchText);
                } else {
                  var h = !0,
                      f = !1,
                      d = void 0;

                  try {
                    for (var v, y = r[Symbol.iterator](); !(h = (v = y.next()).done); h = !0) {
                      var p = v.value;
                      if (p == t.searchText) return !1;
                    }
                  } catch (g) {
                    f = !0, d = g;
                  } finally {
                    try {
                      h || null == y.return || y.return();
                    } finally {
                      if (f) throw d;
                    }
                  }

                  r.unshift(t.searchText);
                }

                t.hList = r, e.setStorage({
                  key: "search_cache",
                  data: t.hList
                });
              },
              fail: function fail() {
                t.hList = [], t.hList.push(t.searchText), e.setStorage({
                  key: "search_cache",
                  data: t.hList
                });
              }
            });
          },
          keywordsClick: function keywordsClick(e) {
            this.searchText = e;
          },
          delhistory: function delhistory() {
            this.hList = [], e.setStorage({
              key: "search_cache",
              data: []
            });
          },
          startRecognize: function startRecognize() {
            var e = this,
                t = {
              engine: "iFly",
              punctuation: !1,
              timeout: 1e4
            };
            plus.speech.startRecognize(t, function (t) {
              e.searchText = e.searchText + t;
            });
          }
        }
      };
      t.default = n;
    }).call(this, a("6e42")["default"], a("0de9")["default"]);
  },
  "33a5": function a5(e, t, a) {
    "use strict";

    var n = a("07e4"),
        r = a.n(n);
    r.a;
  },
  5551: function _(e, t, a) {
    "use strict";

    var n = function n() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        r = [];

    a.d(t, "a", function () {
      return n;
    }), a.d(t, "b", function () {
      return r;
    });
  },
  a988: function a988(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("0b90"),
        r = a.n(n);

    for (var o in n) {
      "default" !== o && function (e) {
        a.d(t, e, function () {
          return n[e];
        });
      }(o);
    }

    t["default"] = r.a;
  },
  eb90: function eb90(e, t, a) {
    "use strict";

    a.r(t);
    var n = a("5551"),
        r = a("a988");

    for (var o in r) {
      "default" !== o && function (e) {
        a.d(t, e, function () {
          return r[e];
        });
      }(o);
    }

    a("33a5");
    var c = a("2877"),
        s = Object(c["a"])(r["default"], n["a"], n["b"], !1, null, "045cf084", null);
    t["default"] = s.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/zy-search/zy-search-create-component', {
  'components/zy-search/zy-search-create-component': function componentsZySearchZySearchCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("eb90"));
  }
}, [['components/zy-search/zy-search-create-component']]]);
});
require('components/zy-search/zy-search.js');
__wxRoute = 'pages/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mpvue-citypicker/mpvueCityPicker.js';

define('pages/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/mpvue-citypicker/mpvueCityPicker"], {
  "589d": function d(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("597d"),
        u = i.n(a);

    for (var l in a) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(l);
    }

    e["default"] = u.a;
  },
  "597d": function d(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = n(i("2da9")),
        u = n(i("02b5")),
        l = n(i("5c03"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: [],
          cityDataList: [],
          areaDataList: [],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault(), this.provinceDataList = a.default, this.cityDataList = u.default[this.pickerValueDefault[0]], this.areaDataList = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]], this.pickerValue = this.pickerValueDefault;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          this.pickerValueDefault !== [0, 0, 0] && (this.pickerValueDefault[0] > a.default.length - 1 && (this.pickerValueDefault[0] = a.default.length - 1), this.pickerValueDefault[1] > u.default[this.pickerValueDefault[0]].length - 1 && (this.pickerValueDefault[1] = u.default[this.pickerValueDefault[0]].length - 1), this.pickerValueDefault[2] > l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1 && (this.pickerValueDefault[2] = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = l.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = l.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = c;
  },
  "6e4c": function e4c(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  },
  "8d23": function d23(t, e, i) {
    "use strict";

    var a = i("e348"),
        u = i.n(a);
    u.a;
  },
  cbb8: function cbb8(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("6e4c"),
        u = i("589d");

    for (var l in u) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    i("8d23");
    var n = i("2877"),
        c = Object(n["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  e348: function e348(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/mpvue-citypicker/mpvueCityPicker-create-component', {
  'pages/mpvue-citypicker/mpvueCityPicker-create-component': function pagesMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cbb8"));
  }
}, [['pages/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('pages/mpvue-citypicker/mpvueCityPicker.js');

__wxRoute = 'pages/index/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/home.js';

define('pages/index/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/home"],{"444d":function(e,t,o){"use strict";o.r(t);var n=o("a033"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},"578d":function(e,t,o){"use strict";var n=o("f889"),a=o.n(n);a.a},"618c":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},a033:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("102a"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){return o.e("components/goodsList/goodslist").then(o.bind(null,"b69d"))},c=function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ad5c"))},u={components:{goodsList:s,uniLoadMore:c},data:function(){return{year:"",seachVal:"",typeData:[],rcommendData:[],pic:[],statusHeight:20,current:0,mode:"round",swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"}],currentSwiper:0,categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"}],Promotion:[],goodsList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称",price:168,slogan:1558}],goods:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称",price:168,slogan:1558}],status:"loading"}},onLoad:function(){this.loadPromotion()},onPullDownRefresh:function(){console.log(e("下拉了"," at pages\\index\\home.vue:130"))},onReachBottom:function(){this.goodsList=this.goodsList.concat(this.goodsList)},mounted:function(){var t=this;this.type(),this.productPic(),this.long(),this.recommend(),console.log(e(a.default.url," at pages\\index\\home.vue:141")),n.getLocation({geocode:!0,success:function(e){t.city=e.address.city},fail:function(e){}}),n.getSystemInfo({success:function(o){t.statusHeight=o.statusBarHeight,console.log(e(o," at pages\\index\\home.vue:154"))}})},methods:{goCategory:function(e,t){n.navigateTo({url:"../goods/goods-list/goods-list1?name="+t+"&id="+e})},long:function(){var t=this;console.log(e(a.default.getType+"/getYear"," at pages\\index\\home.vue:167")),n.request({url:a.default.getType+"/getYear",method:"get",success:function(o){console.log(e("龙年限定",o," at pages\\index\\home.vue:174")),t.year=o.data.data}})},type:function(){var t=this;console.log(e(a.default.getType+"/listCategory"," at pages\\index\\home.vue:187")),n.request({url:a.default.getType+"/listCategory",method:"get",success:function(o){console.log(e("分类",o," at pages\\index\\home.vue:194")),t.typeData=o.data.data,console.log(e(t.pic," at pages\\index\\home.vue:199"))}})},productPic:function(){var t=this;console.log(e(a.default.product+"/findAllPicture"," at pages\\index\\home.vue:206")),n.request({url:a.default.product+"/findAllPicture",method:"get",success:function(o){console.log(e("轮播图",o," at pages\\index\\home.vue:212")),t.pic=o.data.data;for(var n=0;n<t.pic.length;n++)t.pic[n].img=a.default.getFile+"/getFile?fileId="+t.pic[n].fileId;console.log(e(t.pic," at pages\\index\\home.vue:218"))}})},recommend:function(){console.log(e(1111111," at pages\\index\\home.vue:224"));var t=this;n.request({url:a.default.product+"/findAllGoods",method:"get",success:function(o){console.log(e("热门推荐",o," at pages\\index\\home.vue:233")),t.rcommendData=o.data.data;for(var n=0;n<t.rcommendData.length;n++)t.rcommendData[n].img=a.default.getFile+"/getFile?fileId="+t.rcommendData[n].hfGoodsPictureId;console.log(e(t.rcommendData," at pages\\index\\home.vue:238"))}})},productList:function(){n.request({url:a.default.urlProduct+"/urlProduct",method:"get",dataType:"JSON",data:{},success:function(t){console.log(e("提交订单1",t," at pages\\index\\home.vue:252"))}})},tosearch:function(e){n.navigateTo({url:"../search/search"})},changeSwiper:function(e){this.currentSwiper=e.detail.current},loadPromotion:function(){for(var e=new Date,t=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),a=t+"/"+o+"/"+n+" 23:59:59",i=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:a}],s=0;s<i.length;s++){var c=i[s];if(c.countdown){var u="00",d="00",r="00",l=new Date,g=new Date(a);if(!(l>=g)){var f=parseInt((g.getTime()-l.getTime())/1e3);u=parseInt(f/3600),d=parseInt(f%3600/60),r=f%60,u=u<10?"0"+u:u,d=d<10?"0"+d:d,r=r<10?"0"+r:r}i[s].countdown={h:u,m:d,s:r}}}this.Promotion=i}}};t.default=u}).call(this,o("0de9")["default"],o("6e42")["default"])},a66f:function(e,t,o){"use strict";o.r(t);var n=o("618c"),a=o("444d");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("578d");var s=o("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"08a78c40",null);t["default"]=c.exports},b3c6:function(e,t,o){"use strict";(function(e){o("22dd"),o("921b");n(o("66fd"));var t=n(o("a66f"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},f889:function(e,t,o){}},[["b3c6","common/runtime","common/vendor"]]]);
});
require('pages/index/home.js');
__wxRoute = 'pages/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category.js';

define('pages/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"5ad0":function(t,e,i){"use strict";(function(t){i("22dd"),i("921b");n(i("66fd"));var e=n(i("70fe"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"70fe":function(t,e,i){"use strict";i.r(e);var n=i("9e6c"),o=i("9ab9");for(var c in o)"default"!==c&&function(t){i.d(e,t,function(){return o[t]})}(c);i("b79e");var s=i("2877"),a=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},"9ab9":function(t,e,i){"use strict";i.r(e);var n=i("eafb"),o=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=o.a},"9e6c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},b79e:function(t,e,i){"use strict";var n=i("c515"),o=i.n(n);o.a},c515:function(t,e,i){},eafb:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{windows_height:0,swiperList:[],catrgoryList:[{name:"分类1",content:[{thumb:"/static/img/3.jpg"}]},{name:"分类2",content:[{thumb:"/static/img/3.jpg"}]}],select_index:0,right_height:[],right_scroll:0,left_height:0,left_scroll:0,last:0}},onLoad:function(){this.init(),this.windows_height=t.getSystemInfoSync().windowHeight},methods:{init:function(){var e=this;t.request({url:"https://www.easy-mock.com/mock/5d351e87b5e1f213739d6498/shop/categoryList",method:"GET",success:function(t){0===t.data.error&&(e.catrgoryList=t.data.data.list,e.swiperList=t.data.data.banner,e.$nextTick(function(){e.getHeightList()}))}})},getHeightList:function(){var e=this,n=t.createSelectorQuery();n.select(".left-content").boundingClientRect(function(t){e.left_height=t.height}),n.selectAll(".category-item").boundingClientRect(function(t){e.right_height=t.map(function(t){return t.top}),console.log(i(e.right_height," at pages\\category\\category.vue:104"))}).exec()},choose:function(t){var e=this;this.select_index!==t&&(this.select_index=t,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.right_scroll=e.right_height[t]-110},300))},myscroll:function(t){var e=t.detail.scrollHeight-this.windows_height;if(e!=t.detail.scrollTop){var i=t.detail.scrollTop+110,n=+new Date;if(n-this.last>100){this.last=n;var o=this.right_height.findIndex(function(t,e,n){return t<=i&&i<n[e+1]});if(this.select_index=o,this.left_height-this.windows_height){var c=this.left_height-this.windows_height;this.left_scroll=Math.round(o*c/(this.catrgoryList.length-1))}}}}}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])}},[["5ad0","common/runtime","common/vendor"]]]);
});
require('pages/category/category.js');
__wxRoute = 'pages/freeQuan/freeQuan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/freeQuan/freeQuan.js';

define('pages/freeQuan/freeQuan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/freeQuan/freeQuan"],{"0ec3":function(n,t,e){"use strict";e.r(t);var u=e("15d5"),c=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);t["default"]=c.a},"15d5":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},c958:function(n,t,e){},cc55:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})},cd3f:function(n,t,e){"use strict";(function(n){e("22dd"),e("921b");u(e("66fd"));var t=u(e("fff1"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e874:function(n,t,e){"use strict";var u=e("c958"),c=e.n(u);c.a},fff1:function(n,t,e){"use strict";e.r(t);var u=e("cc55"),c=e("0ec3");for(var f in c)"default"!==f&&function(n){e.d(t,n,function(){return c[n]})}(f);e("e874");var r=e("2877"),a=Object(r["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports}},[["cd3f","common/runtime","common/vendor"]]]);
});
require('pages/freeQuan/freeQuan.js');
__wxRoute = 'pages/freeQuan/freeQuan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/freeQuan/freeQuan.js';

define('pages/freeQuan/freeQuan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/freeQuan/freeQuan"],{"0ec3":function(n,t,e){"use strict";e.r(t);var u=e("15d5"),c=e.n(u);for(var f in u)"default"!==f&&function(n){e.d(t,n,function(){return u[n]})}(f);t["default"]=c.a},"15d5":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},c958:function(n,t,e){},cc55:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})},cd3f:function(n,t,e){"use strict";(function(n){e("22dd"),e("921b");u(e("66fd"));var t=u(e("fff1"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e874:function(n,t,e){"use strict";var u=e("c958"),c=e.n(u);c.a},fff1:function(n,t,e){"use strict";e.r(t);var u=e("cc55"),c=e("0ec3");for(var f in c)"default"!==f&&function(n){e.d(t,n,function(){return c[n]})}(f);e("e874");var r=e("2877"),a=Object(r["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports}},[["cd3f","common/runtime","common/vendor"]]]);
});
require('pages/freeQuan/freeQuan.js');
__wxRoute = 'pages/ping/ping';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ping/ping.js';

define('pages/ping/ping.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ping/ping"],{"1bf6":function(n,t,e){},"20dd":function(n,t,e){"use strict";e.r(t);var u=e("2f4c"),r=e("e748");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("f1bd");var f=e("2877"),a=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,"45e4549e",null);t["default"]=a.exports},"2f4c":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"3e90":function(n,t,e){"use strict";(function(n){e("22dd"),e("921b");u(e("66fd"));var t=u(e("20dd"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d5c6:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},e748:function(n,t,e){"use strict";e.r(t);var u=e("d5c6"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},f1bd:function(n,t,e){"use strict";var u=e("1bf6"),r=e.n(u);r.a}},[["3e90","common/runtime","common/vendor"]]]);
});
require('pages/ping/ping.js');
__wxRoute = 'pages/use/use';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/use/use.js';

define('pages/use/use.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/use/use"],{"0a44":function(t,n,e){},1473:function(t,n,e){"use strict";e.r(n);var u=e("7b3d"),c=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=c.a},"596c":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c})},"7b3d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"935c":function(t,n,e){"use strict";e.r(n);var u=e("596c"),c=e("1473");for(var r in c)"default"!==r&&function(t){e.d(n,t,function(){return c[t]})}(r);e("f632");var a=e("2877"),o=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},dce4:function(t,n,e){"use strict";(function(t){e("22dd"),e("921b");u(e("66fd"));var n=u(e("935c"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f632:function(t,n,e){"use strict";var u=e("0a44"),c=e.n(u);c.a}},[["dce4","common/runtime","common/vendor"]]]);
});
require('pages/use/use.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0922":function(n,t,e){},"3b19":function(n,t,e){"use strict";var u=e("0922"),c=e.n(u);c.a},"4c46":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})},"6c4e":function(n,t,e){"use strict";(function(n){e("22dd"),e("921b");u(e("66fd"));var t=u(e("ddeb"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ddeb:function(n,t,e){"use strict";e.r(t);var u=e("4c46"),c=e("e824");for(var r in c)"default"!==r&&function(n){e.d(t,n,function(){return c[n]})}(r);e("3b19");var a=e("2877"),o=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},e824:function(n,t,e){"use strict";e.r(t);var u=e("fcc0"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=c.a},fcc0:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u}},[["6c4e","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/fengMian/fengMian';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/fengMian/fengMian.js';

define('pages/fengMian/fengMian.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fengMian/fengMian"],{"5f5a":function(n,e,t){"use strict";(function(n){t("22dd"),t("921b");u(t("66fd"));var e=u(t("b84d"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"76eb":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return a})},b04e:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{}},methods:{}};e.default=u},b84d:function(n,e,t){"use strict";t.r(e);var u=t("76eb"),a=t("bbc9");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);var f=t("2877"),c=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},bbc9:function(n,e,t){"use strict";t.r(e);var u=t("b04e"),a=t.n(u);for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);e["default"]=a.a}},[["5f5a","common/runtime","common/vendor"]]]);
});
require('pages/fengMian/fengMian.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"3b95":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return Promise.all([t.e("common/vendor"),t.e("components/zy-search/zy-search")]).then(t.bind(null,"eb90"))},u={components:{zySearch:r}};n.default=u},8387:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return u})},"8ebb":function(e,n,t){"use strict";t.r(n);var r=t("8387"),u=t("9a6e");for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);var c=t("2877"),o=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports},"9a6e":function(e,n,t){"use strict";t.r(n);var r=t("3b95"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);n["default"]=u.a},bcd3:function(e,n,t){"use strict";(function(e){t("22dd"),t("921b");r(t("66fd"));var n=r(t("8ebb"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])}},[["bcd3","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/product/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/product/product.js';

define('pages/product/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"18e5":function(t,e,o){"use strict";(function(t){o("22dd"),o("921b");a(o("66fd"));var e=a(o("a859"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"25b8":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"7cb4":function(t,e,o){"use strict";o.r(e);var a=o("aa7f"),n=o.n(a);for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"8dff":function(t,e,o){},a859:function(t,e,o){"use strict";o.r(e);var a=o("25b8"),n=o("7cb4");for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);o("ed92");var d=o("2877"),i=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"625df515",null);e["default"]=i.exports},aa7f:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(o("102a"));function s(t){return t&&t.__esModule?t:{default:t}}var d=function(){return o.e("components/goodsList/goodslist").then(o.bind(null,"b69d"))},i=function(){return o.e("components/uni-load-more/uni-load-more").then(o.bind(null,"ad5c"))},u={components:{goodsList:d,uniLoadMore:i},data:function(){return{pics:{},detailData:{},id:0,datapay:"",orderId:"",statusHeight:20,current:0,mode:"round",swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"}],currentSwiper:0,categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"}],Promotion:[],goodsList:[{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商商品名称商品名称商品名称商品名",price:144,slogan:13526}],goods:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称",price:168,slogan:1558},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名",price:167,slogan:1038}],status:"loading"}},onLoad:function(e){console.log(t(e," at pages\\product\\product.vue:272")),this.id=e.id,this.detail()},onPullDownRefresh:function(){console.log(t("下拉了"," at pages\\product\\product.vue:278"))},onReachBottom:function(){this.goodsList=this.goodsList.concat(this.goodsList)},mounted:function(){var e=this;a.getLocation({geocode:!0,success:function(t){e.city=t.address.city},fail:function(t){}}),a.getSystemInfo({success:function(o){e.statusHeight=o.statusBarHeight,console.log(t(o," at pages\\product\\product.vue:296"))}})},methods:{detail:function(){var e=this;console.log(t(n.default.getFile+"/byGoodsId?goodsId="+this.id," at pages\\product\\product.vue:304")),a.request({url:n.default.getFile+"/byGoodsId",method:"get",data:{goodsId:this.id},success:function(o){console.log(t(o," at pages\\product\\product.vue:313")),e.detailData=o.data.data,console.log(t(n.default.getFile+"/pictures"," at pages\\product\\product.vue:315")),a.request({url:n.default.getFile+"/pictures",method:"get",data:{goodsId:e.detailData.id},success:function(o){console.log(t(o," at pages\\product\\product.vue:325")),e.pics=o.data.data;for(var a=0;a<e.pics.length;a++)e.pics[a].img=n.default.getFile+"/getFile?fileId="+e.pics[a].fileId;console.log(t(e.pics," at pages\\product\\product.vue:330"))}})}})},buy:function(){var e=this;console.log(t(111,n.default.url+"order/creat"," at pages\\product\\product.vue:339")),a.request({url:n.default.url+"order/creat",method:"get",dataType:"JSON",data:{userId:1,userAddressId:1,googsId:3,logisticsOrderName:1,respId:3,logisticsOrdersId:1,logisticsCompany:1,hfDesc:1,hfTax:1,purchasePrice:1,purchaseQuantity:1,distribution:1,payStatus:1,orderType:1,amount:1,hfMemo:1,hfRemark:1,payMethodName:1,ordersid:57,payMethodType:1},success:function(o){console.log(t("提交订单1",o," at pages\\product\\product.vue:369")),e.orderId=o.data.data[0].ordersId,console.log(t(e.orderId," at pages\\product\\product.vue:371"))}})},tosearch:function(){a.navigateTo({url:"../search/search"})},changeSwiper:function(t){this.currentSwiper=t.detail.current},loadPromotion:function(){for(var t=new Date,e=t.getFullYear(),o=t.getMonth()+1,a=t.getDate(),n=e+"/"+o+"/"+a+" 23:59:59",s=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:n}],d=0;d<s.length;d++){var i=s[d];if(i.countdown){var u="00",r="00",c="00",l=new Date,g=new Date(n);if(!(l>=g)){var p=parseInt((g.getTime()-l.getTime())/1e3);u=parseInt(p/3600),r=parseInt(p%3600/60),c=p%60,u=u<10?"0"+u:u,r=r<10?"0"+r:r,c=c<10?"0"+c:c}s[d].countdown={h:u,m:r,s:c}}}this.Promotion=s}}};e.default=u}).call(this,o("0de9")["default"],o("6e42")["default"])},ed92:function(t,e,o){"use strict";var a=o("8dff"),n=o.n(a);n.a}},[["18e5","common/runtime","common/vendor"]]]);
});
require('pages/product/product.js');
__wxRoute = 'pages/xing/xing';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/xing/xing.js';

define('pages/xing/xing.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xing/xing"],{"00e0":function(n,t,e){"use strict";e.r(t);var u=e("3393"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},"12e8":function(n,t,e){"use strict";var u=e("15a3"),r=e.n(u);r.a},"15a3":function(n,t,e){},"1b67":function(n,t,e){"use strict";e.r(t);var u=e("7d3b"),r=e("00e0");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("12e8");var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},3393:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"4fcb":function(n,t,e){"use strict";(function(n){e("22dd"),e("921b");u(e("66fd"));var t=u(e("1b67"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7d3b":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["4fcb","common/runtime","common/vendor"]]]);
});
require('pages/xing/xing.js');
__wxRoute = 'pages/cart/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/index.js';

define('pages/cart/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/index"],{"2d54":function(e,t,i){"use strict";i.r(t);var n=i("4caf"),r=i("6677");for(var s in r)"default"!==s&&function(e){i.d(t,e,function(){return r[e]})}(s);i("3247");var o=i("2877"),a=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=a.exports},3247:function(e,t,i){"use strict";var n=i("8dcb"),r=i.n(n);r.a},"41f1":function(e,t,i){"use strict";(function(e){i("22dd"),i("921b");n(i("66fd"));var t=n(i("2d54"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"4caf":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r})},6677:function(e,t,i){"use strict";i.r(t);var n=i("ac64"),r=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=r.a},"8dcb":function(e,t,i){},ac64:function(e,t,i){"use strict";(function(e){function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){r(e,t,i[t])})}return e}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){return i.e("components/m-footer-car").then(i.bind(null,"e48c"))},o=function(){return i.e("components/m-store-pro").then(i.bind(null,"7604"))},a=function(){return i.e("components/uni-number-box/uni-number-box").then(i.bind(null,"7e5c"))};function c(e,t){for(var i,n,r,s=[],o=0;o<=t;o++){r=e.slice(0),n=[];while(i=r.shift())if(r.length)n.push(a([i,r[0]],o/t));else{if(!(n.length>1))break;r=n,n=[]}s.push(n[0])}function a(e,t){var i,n,r,s,o,a,c,u,l=[];return i=e[0],n=e[1],s=n.x-i.x,o=n.y-i.y,r=Math.pow(Math.pow(s,2)+Math.pow(o,2),.5),a=o/s,c=Math.atan(a),u=r*t,l={x:i.x+u*Math.cos(c),y:i.y+u*Math.sin(c)},l}return{bezier_points:s}}var u={components:{mStorePro:o,uniNumberBox:a,mFooterCar:s},data:function(){return{hide_good_box:!1,bus_x:0,bus_y:0,finger:{},busPos:{},linePos:[],timer:null,carPrice:"0",carNum:0,insideCarGoods:[],specClass:"",showCategoryIndex:0,categoryList:[{id:1,title:"生鲜果蔬",banner:"../../static/img/category/banner.jpg",list:[{id:1,name:"精品秋葵600g",descripe:"脆糯营养，口感好，健康绿色",img:"../../static/img/1.jpg",price:"￥9",oldprice:"￥100"},{id:2,name:"精品秋葵600g",descripe:"脆糯营养，口感好，健康绿色",img:"../../static/img/2.jpg",price:"￥8",oldprice:"￥100"}]},{id:2,title:"鲜花绿植",banner:"../../static/img/category/banner.jpg",list:[{id:3,name:"玫瑰花",descripe:"脆糯营养，口感好，健康绿色",img:"../../static/img/1.jpg",price:"￥4",oldprice:"￥2"},{id:4,name:"康乃馨紫色",descripe:"脆糯营养，口感好，健康绿色",img:"../../static/img/2.jpg",price:"￥3",oldprice:"￥100"}]}]}},methods:{showCategory:function(e){this.showCategoryIndex=e},hideSpec:function(){var e=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){e.specClass="none"},200)},showSpec:function(e){this.specClass="show",this.specCallback=e},specCallback:function(){},discard:function(){},touchOnGoods:function(e){var t=e.element,i=e.data;this.timer&&clearInterval(this.timer),this.finger={};var n={};this.finger["x"]=t.target.x,this.finger["y"]=t.target.y,this.finger["y"]<this.busPos["y"]?n["y"]=this.finger["y"]-150:n["y"]=this.busPos["y"]-150,n["x"]=Math.abs(this.finger["x"]-this.busPos["x"])/2,this.finger["x"]>this.busPos["x"]?n["x"]=(this.finger["x"]-this.busPos["x"])/2+this.busPos["x"]:n["x"]=(this.busPos["x"]-this.finger["x"])/2+this.finger["x"],this.linePos=c([this.busPos,n,this.finger],30),this.startAnimation(t,i)},startAnimation:function(e,t){var i=0,n=this,r=n.linePos["bezier_points"];n.hide_good_box=!1,n.bus_x=n.finger["x"],n.bus_y=n.finger["y"];var s=r.length;i=s,n.timer=setInterval(function(){i--,n.bus_x=r[i]["x"],n.bus_y=r[i]["y"],i<1&&(clearInterval(n.timer),n.hide_good_box=!0,n.addGoodSum(e,t))},25)},addGoodSum:function(e,t){var i=n({},t);t.price.replace("￥","");t.num=1;var r=this.insideCarGoods.findIndex(function(e){return e.id==i.id});-1==r?this.insideCarGoods.push(t):this.insideCarGoods[r].num+=1,this.numPrice()},bindChange:function(e){var t=e.newval,i=(e.oldval,e.rowData),n=this.insideCarGoods.filter(function(e){return e.id==i.id})[0],r=1*n["price"].replace("￥","");n["price"]="￥"+r*t,n["num"]=t,this.numPrice()},numPrice:function(){var e=0,t=0;this.insideCarGoods.forEach(function(i){e+=1*i.price.replace("￥",""),t+=1*i.num}),this.carPrice=e,this.carNum=t},clearCar:function(){this.insideCarGoods=[]}},watch:{insideCarGoods:function(t){console.log(e(t," at pages\\cart\\index.vue:313"))}},onLoad:function(){var e=this;e.busPos["x"]=45}};t.default=u}).call(this,i("0de9")["default"])}},[["41f1","common/runtime","common/vendor"]]]);
});
require('pages/cart/index.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{"0114":function(t,s,e){"use strict";e.r(s);var i=e("79cd"),o=e("f07a");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("8d4a");var d=e("2877"),l=Object(d["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=l.exports},"6b81":function(t,s,e){"use strict";(function(t){e("22dd"),e("921b");i(e("66fd"));var s=i(e("0114"));function i(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},"79cd":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},"8d4a":function(t,s,e){"use strict";var i=e("d187"),o=e.n(i);o.a},d187:function(t,s,e){},e567:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p2.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p3.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:4,img:"/static/img/goods/p4.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:5,img:"/static/img/goods/p5.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品"+s.id,icon:"none"}),t.navigateTo({url:"../../goods/goods"})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(t){for(var s=this.goodsList.length,e=0;e<s;e++)if(t==this.goodsList[e].id){this.goodsList.splice(e,1);break}this.selectedList.splice(this.selectedList.indexOf(t),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=e}).call(this,e("6e42")["default"])},f07a:function(t,s,e){"use strict";e.r(s);var i=e("e567"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a}},[["6b81","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/cart/cart.js';

define('pages/tabBar/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{"0114":function(t,s,e){"use strict";e.r(s);var i=e("79cd"),o=e("f07a");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("8d4a");var d=e("2877"),l=Object(d["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=l.exports},"6b81":function(t,s,e){"use strict";(function(t){e("22dd"),e("921b");i(e("66fd"));var s=i(e("0114"));function i(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},"79cd":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},"8d4a":function(t,s,e){"use strict";var i=e("d187"),o=e.n(i);o.a},d187:function(t,s,e){},e567:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p2.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p3.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:4,img:"/static/img/goods/p4.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:5,img:"/static/img/goods/p5.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品"+s.id,icon:"none"}),t.navigateTo({url:"../../goods/goods"})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(t){for(var s=this.goodsList.length,e=0;e<s;e++)if(t==this.goodsList[e].id){this.goodsList.splice(e,1);break}this.selectedList.splice(this.selectedList.indexOf(t),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=e}).call(this,e("6e42")["default"])},f07a:function(t,s,e){"use strict";e.r(s);var i=e("e567"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a}},[["6b81","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/cart/cart.js');
__wxRoute = 'pages/tabBar/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/category/category.js';

define('pages/tabBar/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/category/category"],{"186e":function(e,n,t){},"36fe":function(e,n,t){"use strict";t.r(n);var a=t("b8db"),i=t("5f81");for(var g in i)"default"!==g&&function(e){t.d(n,e,function(){return i[e]})}(g);t("f441");var o=t("2877"),m=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=m.exports},"5f81":function(e,n,t){"use strict";t.r(n);var a=t("cd4c"),i=t.n(a);for(var g in a)"default"!==g&&function(e){t.d(n,e,function(){return a[e]})}(g);n["default"]=i.a},b8db:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})},b955:function(e,n,t){"use strict";(function(e){t("22dd"),t("921b");a(t("66fd"));var n=a(t("36fe"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},cd4c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("bd71"));function i(e){return e&&e.__esModule?e:{default:e}}var g={data:function(){return{showCategoryIndex:0,headerPosition:"fixed",city:"北京",categoryList:[{id:1,title:"家用电器",banner:"/static/img/category/banner.jpg",list:[{name:"冰箱",img:"1.jpg"},{name:"电视",img:"2.jpg"},{name:"空调",img:"3.jpg"},{name:"洗衣机",img:"4.jpg"},{name:"风扇",img:"5.jpg"},{name:"燃气灶",img:"6.jpg"},{name:"热水器",img:"7.jpg"},{name:"电吹风",img:"8.jpg"},{name:"电饭煲",img:"9.jpg"}]},{id:2,title:"办公用品",banner:"/static/img/category/banner.jpg",list:[{name:"打印机",img:"1.jpg"},{name:"路由器",img:"2.jpg"},{name:"扫描仪",img:"3.jpg"},{name:"投影仪",img:"4.jpg"},{name:"墨盒",img:"5.jpg"},{name:"纸类",img:"6.jpg"}]},{id:3,title:"日常用品",banner:"/static/img/category/banner.jpg",list:[{name:"茶具",img:"1.jpg"},{name:"花瓶",img:"2.jpg"},{name:"纸巾",img:"3.jpg"},{name:"毛巾",img:"4.jpg"},{name:"牙膏",img:"5.jpg"},{name:"保鲜膜",img:"6.jpg"},{name:"保鲜袋",img:"7.jpg"}]},{id:4,title:"蔬菜水果",banner:"/static/img/category/banner.jpg",list:[{name:"苹果",img:"1.jpg"},{name:"芒果",img:"2.jpg"},{name:"椰子",img:"3.jpg"},{name:"橙子",img:"4.jpg"},{name:"奇异果",img:"5.jpg"},{name:"玉米",img:"6.jpg"},{name:"百香果",img:"7.jpg"}]}]}},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onLoad:function(){var e=this;this.amapPlugin=new a.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(n){e.city=n[0].regeocodeData.addressComponent.city.replace(/市/g,"")}})},methods:{toMsg:function(){e.navigateTo({url:"../../msg/msg"})},showCategory:function(e){this.showCategoryIndex=e},toCategory:function(n){e.setStorageSync("catName",n.name),e.navigateTo({url:"../../goods/goods-list/goods-list?cid="+n.id+"&name="+n.name})},toSearch:function(){e.showToast({title:"建议跳转到新页面做搜索功能"})}}};n.default=g}).call(this,t("6e42")["default"])},f441:function(e,n,t){"use strict";var a=t("186e"),i=t.n(a);i.a}},[["b955","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/category/category.js');
__wxRoute = 'pages/order/confirmation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/order/confirmation.js';

define('pages/order/confirmation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"1e65":function(e,t,n){"use strict";(function(e){n("22dd"),n("921b");i(n("66fd"));var t=i(n("48fa"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"348d":function(e,t,n){},"48fa":function(e,t,n){"use strict";n.r(t);var i=n("8489"),o=n("ad63");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("e2c3");var s=n("2877"),u=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},8489:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("toFixed")(e.deduction)),i=e._f("toFixed")(e.goodsPrice),o=e._f("toFixed")(e.freight),r=e._f("toFixed")(e.deduction),s=e._f("toFixed")(e.sumPrice);e.$mp.data=Object.assign({},{$root:{f0:n,f1:i,f2:o,f3:r,f4:s}})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},ad63:function(e,t,n){"use strict";n.r(t);var i=n("f21f"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},e2c3:function(e,t,n){"use strict";var i=n("348d"),o=n.n(i);o.a},f21f:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;e.getStorage({key:"buylist",success:function(e){t.buylist=e.data,t.goodsPrice=0;for(var n=t.buylist.length,i=0;i<n;i++)t.goodsPrice=t.goodsPrice+t.buylist[i].number*t.buylist[i].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),e.getStorage({key:"selectAddress",success:function(n){t.recinfo=n.data,e.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return parseFloat(e).toFixed(2)}},methods:{clearOrder:function(){var t=this;e.removeStorage({key:"buylist",success:function(e){t.buylist=[],console.log(n("remove buylist success"," at pages\\order\\confirmation.vue:161"))}})},toPay:function(){for(var t=this,n=[],i=[],o=this.buylist.length,r=0;r<o;r++)n.push(this.buylist[r]),i.push(this.buylist[r].id);0!=n.length?(e.showLoading({title:"正在提交订单..."}),setTimeout(function(){e.setStorage({key:"paymentOrder",data:n,success:function(){e.hideLoading(),e.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):e.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){e.navigateTo({url:"../user/address/address?type=select"})}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["1e65","common/runtime","common/vendor"]]]);
});
require('pages/order/confirmation.js');
__wxRoute = 'pages/myOrder/myOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myOrder/myOrder.js';

define('pages/myOrder/myOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myOrder/myOrder"],{"0d0c":function(e,t,n){"use strict";n.r(t);var u=n("7ffe"),r=n("ae80");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var f=n("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},2469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},methods:{}};t.default=u},"254d":function(e,t,n){"use strict";(function(e){n("22dd"),n("921b");u(n("66fd"));var t=u(n("0d0c"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7ffe":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},ae80:function(e,t,n){"use strict";n.r(t);var u=n("2469"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a}},[["254d","common/runtime","common/vendor"]]]);
});
require('pages/myOrder/myOrder.js');
__wxRoute = 'pages/pay/payment/payment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pay/payment/payment.js';

define('pages/pay/payment/payment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{"71fa":function(t,e,n){},"77ff":function(t,e,n){"use strict";n.r(e);var a=n("93e3"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"92e3":function(t,e,n){"use strict";var a=n("71fa"),o=n.n(a);o.a},"93e3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(e){var n=this;this.amount=parseFloat(e.amount).toFixed(2),t.getStorage({key:"paymentOrder",success:function(e){e.data.length>1?n.orderName="多商品合并支付":n.orderName=e.data[0].name,t.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var e=this;t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+e.amount})},300)},700)}}};e.default=n}).call(this,n("6e42")["default"])},ab97:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.paytype="alipay"},t.e1=function(e){t.paytype="wxpay"})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},cecc:function(t,e,n){"use strict";(function(t){n("22dd"),n("921b");a(n("66fd"));var e=a(n("ff72"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ff72:function(t,e,n){"use strict";n.r(e);var a=n("ab97"),o=n("77ff");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("92e3");var r=n("2877"),c=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["cecc","common/runtime","common/vendor"]]]);
});
require('pages/pay/payment/payment.js');
__wxRoute = 'pages/tabBar/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tabBar/user/user.js';

define('pages/tabBar/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{1660:function(t,e,n){"use strict";var i=n("69f5"),o=n.n(i);o.a},"5fb7":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"69f5":function(t,e,n){},"9a20":function(t,e,n){"use strict";n.r(e);var i=n("5fb7"),o=n("b290");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("1660");var u=n("2877"),r=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},b290:function(t,e,n){"use strict";n.r(e);var i=n("ca46"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},b56e:function(t,e,n){"use strict";(function(t){n("22dd"),n("921b");i(n("66fd"));var e=i(n("9a20"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ca46:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isfirst:!0,headerTop:null,statusTop:null,showHeader:!0,user:{username:"游客1002",face:"/static/img/face.jpg",signature:"点击昵称跳转登录/注册页",integral:0,balance:0,envelope:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"},{text:"退换货",icon:"tuihuo"}],mytoolbarList:[{url:"../../user/order_list/order_list",text:"我的订单",img:"/static/img/user/ding.png"},{url:"../../user/coupon/coupon",text:"我的积分",img:"/static/img/user/ji.png"},{url:"",text:"我的信息",img:"/static/img/user/renw.png"},{url:"../../address/address",text:"我的地址",img:"/static/img/user/zhi.png"},{url:"../../user/address/address",text:"我的店铺",img:"/static/img/user/fang.png"},{url:"",text:"我的动态",img:"/static/img/user/dian.png"},{url:"",text:"我的评论",img:"/static/img/user/ping.png"},{url:"",text:"我的收藏",img:"/static/img/user/ban.png"},{url:"",text:"我的优惠券",img:"/static/img/user/youhui.png"}],mytoolbarList1:[{url:"../../user/keep/keep",text:"常见问题",img:"/static/img/user/tan.png"},{url:"../../user/coupon/coupon",text:"关于我们",img:"/static/img/user/fangda.png"},{url:"",text:"联系我们",img:"/static/img/user/lian.png"},{url:"",text:"意见反馈",img:"/static/img/user/xin.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var e=this;t.getStorage({key:"UserInfo",success:function(t){t.data?e.user=t.data:e.isfirst},fail:function(t){}})},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=n}).call(this,n("6e42")["default"])}},[["b56e","common/runtime","common/vendor"]]]);
});
require('pages/tabBar/user/user.js');
__wxRoute = 'pages/user/order_list/order_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/order_list/order_list.js';

define('pages/user/order_list/order_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/order_list/order_list"],{"057c":function(e,t,n){},"13a1":function(e,t,n){"use strict";var i=n("057c"),r=n.n(i);r.a},6932:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},a5c4:function(e,t,n){"use strict";(function(e){n("22dd"),n("921b");i(n("66fd"));var t=i(n("af01"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},aba9:function(e,t,n){"use strict";n.r(t);var i=n("f490"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=r.a},af01:function(e,t,n){"use strict";n.r(t);var i=n("6932"),r=n("aba9");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("13a1");var s=n("2877"),a=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},f490:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{headerPosition:"fixed",headerTop:"0px",typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",received:"等待用户评价",completed:"交易已完成",refunds:"商品退货处理中",cancelled:"订单已取消"},orderType:["全部","待付款","待发货","待收货","待评价","退换货"],orderList:[[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"back",ordersn:2,goods_id:1,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unreceived",ordersn:3,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"received",ordersn:4,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"completed",ordersn:5,goods_id:1,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"refunds",ordersn:6,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"cancelled",ordersn:7,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"unpaid",ordersn:0,goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1},{type:"unpaid",ordersn:1,goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[],[{type:"unreceived",ordersn:3,goods_id:1,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"received",ordersn:4,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}],[{type:"refunds",ordersn:6,goods_id:1,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",payment:168,freight:12,spec:"规格:S码",numner:1}]],list:[],tabbarIndex:0}},onLoad:function(e){var t=0;this.list=this.orderList[t],this.tabbarIndex=t},onPageScroll:function(e){},methods:{showType:function(e){this.tabbarIndex=0,this.list=this.orderList[e]},showLogistics:function(e){},remindDeliver:function(t){e.showToast({title:"已提醒商家发货"})},cancelOrder:function(t){var i=this;e.showModal({title:"取消订单",content:"确定取消此订单？",success:function(e){e.confirm?(console.log(n("用户点击确定"," at pages\\user\\order_list\\order_list.vue:146")),i.doCancelOrder(t.ordersn)):e.cancel&&console.log(n("用户点击取消"," at pages\\user\\order_list\\order_list.vue:149"))}})},doCancelOrder:function(e){for(var t=this.orderList.length,n=0;n<t;n++){var i=this.orderList[n],r=i.length;if(r>0&&"unpaid"==i[0].type)for(var o=0;o<r;o++)if(this.orderList[n][o].ordersn==e){this.orderList[n][o].type="cancelled";break}}},toPayment:function(t){e.showLoading({title:"正在获取订单..."});var n=[];n.push(t),setTimeout(function(){e.setStorage({key:"paymentOrder",data:n,success:function(){e.hideLoading(),e.navigateTo({url:"../../pay/payment/payment?amount="+t.payment})}})},500)}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["a5c4","common/runtime","common/vendor"]]]);
});
require('pages/user/order_list/order_list.js');
__wxRoute = 'pages/pingjia/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pingjia/index.js';

define('pages/pingjia/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pingjia/index"],{"181b":function(n,e,t){"use strict";(function(n){t("22dd"),t("921b");u(t("66fd"));var e=u(t("d101"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"34e4":function(n,e,t){},"4f4f":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/myIssue")]).then(t.bind(null,"8079"))},o={components:{myIssue:u},data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};e.default=o},"971a":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return o})},cdbe:function(n,e,t){"use strict";t.r(e);var u=t("4f4f"),o=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);e["default"]=o.a},d101:function(n,e,t){"use strict";t.r(e);var u=t("971a"),o=t("cdbe");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("db6a");var r=t("2877"),c=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},db6a:function(n,e,t){"use strict";var u=t("34e4"),o=t.n(u);o.a}},[["181b","common/runtime","common/vendor"]]]);
});
require('pages/pingjia/index.js');
__wxRoute = 'pages/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/uni-icons/uni-icons.js';

define('pages/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uni-icons/uni-icons"],{"105a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16}},methods:{_onClick:function(){this.$emit("click")}}};n.default=u},"377d":function(t,n,e){"use strict";var u=e("d0a2"),i=e.n(u);i.a},"78e0":function(t,n,e){"use strict";(function(t){e("22dd"),e("921b");u(e("66fd"));var n=u(e("80fb"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"80fb":function(t,n,e){"use strict";e.r(n);var u=e("b900"),i=e("d618");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("377d");var a=e("2877"),o=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},b900:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},d0a2:function(t,n,e){},d618:function(t,n,e){"use strict";e.r(n);var u=e("105a"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=i.a}},[["78e0","common/runtime","common/vendor"]]]);
});
require('pages/uni-icons/uni-icons.js');
__wxRoute = 'pages/uni-rate/uni-rate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/uni-rate/uni-rate.js';

define('pages/uni-rate/uni-rate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uni-rate/uni-rate"],{"033a":function(t,e,n){"use strict";n.r(e);var u=n("6bf7"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"105a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16}},methods:{_onClick:function(){this.$emit("click")}}};e.default=u},"377d":function(t,e,n){"use strict";var u=n("d0a2"),a=n.n(u);a.a},"64ce":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"6bf7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("80fb"));function a(t){return t&&t.__esModule?t:{default:t}}var r={name:"UniRate",components:{uniIcons:u.default},props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#F73636"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:0},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1}},data:function(){return{valueSync:""}},computed:{stars:function(){for(var t=Number(this.valueSync)?Number(this.valueSync):0,e=[],n=Math.floor(t),u=Math.ceil(t),a=0;a<this.max;a++)n>a?e.push({activeWitch:"100%"}):u-1===a?e.push({activeWitch:100*(t-n)+"%"}):e.push({activeWitch:"0"});return e}},created:function(){this.valueSync=this.value},methods:{_onClick:function(t){this.disabled||(this.valueSync=t+1,this.$emit("change",{value:this.valueSync}))}}};e.default=r},"72fa":function(t,e,n){},"80fb":function(t,e,n){"use strict";n.r(e);var u=n("b900"),a=n("d618");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("377d");var i=n("2877"),c=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},8780:function(t,e,n){"use strict";n.r(e);var u=n("64ce"),a=n("033a");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("8ca1");var i=n("2877"),c=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},8864:function(t,e,n){"use strict";(function(t){n("22dd"),n("921b");u(n("66fd"));var e=u(n("8780"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8ca1":function(t,e,n){"use strict";var u=n("72fa"),a=n.n(u);a.a},b900:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},d0a2:function(t,e,n){},d618:function(t,e,n){"use strict";n.r(e);var u=n("105a"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a}},[["8864","common/runtime","common/vendor"]]]);
});
require('pages/uni-rate/uni-rate.js');
__wxRoute = 'pages/wait/wait';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/wait/wait.js';

define('pages/wait/wait.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wait/wait"],{"4e1e":function(t,n,e){"use strict";e.r(n);var u=e("c26c"),a=e("959a");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("5c99");var r=e("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"5c99":function(t,n,e){"use strict";var u=e("951e"),a=e.n(u);a.a},"951e":function(t,n,e){},"959a":function(t,n,e){"use strict";e.r(n);var u=e("dd92"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},9850:function(t,n,e){"use strict";(function(t){e("22dd"),e("921b");u(e("66fd"));var n=u(e("4e1e"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c26c:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},dd92:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u}},[["9850","common/runtime","common/vendor"]]]);
});
require('pages/wait/wait.js');
__wxRoute = 'pages/tixian/tixian';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/tixian/tixian.js';

define('pages/tixian/tixian.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tixian/tixian"],{"37ce":function(t,n,e){"use strict";(function(t){e("22dd"),e("921b");u(e("66fd"));var n=u(e("6f63"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"44d0":function(t,n,e){"use strict";var u=e("9f3b"),r=e.n(u);r.a},"6f63":function(t,n,e){"use strict";e.r(n);var u=e("ceb9"),r=e("99b0");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("44d0");var c=e("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports},"99b0":function(t,n,e){"use strict";e.r(n);var u=e("f140"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"9f3b":function(t,n,e){},ceb9:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},f140:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u}},[["37ce","common/runtime","common/vendor"]]]);
});
require('pages/tixian/tixian.js');
__wxRoute = 'pages/pai/pai';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pai/pai.js';

define('pages/pai/pai.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pai/pai"],{"034d":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"2877f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"2bb0":function(t,n,e){"use strict";var u=e("bb0f"),r=e.n(u);r.a},"2f0c":function(t,n,e){"use strict";e.r(n);var u=e("034d"),r=e("82d6");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("2bb0");var f=e("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},"82d6":function(t,n,e){"use strict";e.r(n);var u=e("2877f"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"888d":function(t,n,e){"use strict";(function(t){e("22dd"),e("921b");u(e("66fd"));var n=u(e("2f0c"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},bb0f:function(t,n,e){}},[["888d","common/runtime","common/vendor"]]]);
});
require('pages/pai/pai.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"5a15":function(e,s,a){"use strict";var t=a("b627"),d=a.n(t);d.a},"745c":function(e,s,a){"use strict";(function(e,t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var d=o(a("97ed")),n=o(a("ec04")),r=o(a("102a"));function o(e){return e&&e.__esModule?e:{default:e}}var u=new d.default,c={data:function(){return{source:0,AddressList:[],addressList:[{name:"刘晓晓",mobile:"18666666666",addressName:"贵族皇仕牛排(东城店)",address:"北京市东城区",area:"B区",default:!0},{name:"刘大大",mobile:"18667766666",addressName:"龙回1区12号楼",address:"山东省济南市历城区",area:"西单元302",default:!1}]}},onLoad:function(e){this.submit();e.source;var s=this;e.source&&(s.source=e.source)},onShow:function(){this.load(),this.submit()},methods:{submit:function(){var s=this;e.request({url:r.default.urlAdress+"user/address/queryAddress",method:"get",dataType:"JSON",data:{userId:2,token:1},success:function(e){console.log(t("添加收获地址",e," at pages\\address\\address.vue:85")),s.addressList=e.data.data}})},load:function(){var s=this;u.submit({request:{addressList:["USERADDRESSSELFLIST"]},callback:function(a){var d=n.default.checkError(a,["addressList"],function(s,a){e.showToast({title:a,icon:"none"})});console.log(t(d," at pages\\address\\address.vue:106")),d.addressList&&(s.AddressList=d.addressList)},error:function(s){e.showToast({title:"出错啦",icon:"none"})}})},checkAddress:function(s){var a=this;1==a.source?(console.log(t(s," at pages\\address\\address.vue:134")),e.redirectTo({url:"../order/createOrder?addressId="+s})):2==a.source?(console.log(t("13123",s," at pages\\address\\address.vue:140")),e.setStorage({key:"nearByBusinessAddressID",data:s,success:function(){console.log(t("跳转"," at pages\\address\\address.vue:145")),e.switchTab({url:"../nearbyBusiness/nearbyBusiness"})}})):3==a.source&&e.setStorage({key:"nearByBusinessAddressID",data:s,success:function(){console.log(t("跳转"," at pages\\address\\address.vue:157")),e.navigateBack()}})},del:function(s){var a=this;e.showModal({title:"提示",content:"是否删除地址信息",success:function(d){d.confirm?u.submit({request:{address:["USERADDRESSSELFREMOVE",[{id:s}]]},callback:function(s){var d=n.default.checkError(s,["address"],function(s,a){e.showToast({title:a,icon:"none"})});console.log(t(d," at pages\\address\\address.vue:183")),d.address&&e.showToast({title:"删除成功",success:function(){setTimeout(function(){a.load()},1e3)}})},error:function(s){e.showToast({title:"出错啦",icon:"none"})}}):d.cancel&&console.log(t("用户点击取消"," at pages\\address\\address.vue:204"))}})},addAddress:function(s,a){e.navigateTo({url:"./addressManage"})},refreshList:function(e,s){this.addressList.unshift(e),console.log(t(e,s," at pages\\address\\address.vue:220"))}}};s.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},adfc:function(e,s,a){"use strict";(function(e){a("22dd"),a("921b");t(a("66fd"));var s=t(a("e1e3"));function t(e){return e&&e.__esModule?e:{default:e}}e(s.default)}).call(this,a("6e42")["createPage"])},b627:function(e,s,a){},c304:function(e,s,a){"use strict";var t=function(){var e=this,s=e.$createElement;e._self._c},d=[];a.d(s,"a",function(){return t}),a.d(s,"b",function(){return d})},e1e3:function(e,s,a){"use strict";a.r(s);var t=a("c304"),d=a("f623");for(var n in d)"default"!==n&&function(e){a.d(s,e,function(){return d[e]})}(n);a("5a15");var r=a("2877"),o=Object(r["a"])(d["default"],t["a"],t["b"],!1,null,null,null);s["default"]=o.exports},f623:function(e,s,a){"use strict";a.r(s);var t=a("745c"),d=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(s,e,function(){return t[e]})}(n);s["default"]=d.a}},[["adfc","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/address/addressManage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressManage.js';

define('pages/address/addressManage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"15d1":function(e,s,t){"use strict";t.r(s);var a=t("d18f"),i=t.n(a);for(var d in a)"default"!==d&&function(e){t.d(s,e,function(){return a[e]})}(d);s["default"]=i.a},"1c0c":function(e,s,t){},"462b":function(e,s,t){"use strict";t.r(s);var a=t("576a"),i=t("15d1");for(var d in i)"default"!==d&&function(e){t.d(s,e,function(){return i[e]})}(d);t("f0c5");var n=t("2877"),o=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=o.exports},"576a":function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement;e._self._c},i=[];t.d(s,"a",function(){return a}),t.d(s,"b",function(){return i})},"729b":function(e,s,t){"use strict";(function(e){t("22dd"),t("921b");a(t("66fd"));var s=a(t("462b"));function a(e){return e&&e.__esModule?e:{default:e}}e(s.default)}).call(this,t("6e42")["createPage"])},d18f:function(e,s,t){"use strict";(function(e,a){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=o(t("97ed")),d=o(t("ec04")),n=o(t("102a"));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){return Promise.all([t.e("common/vendor"),t.e("pages/mpvue-citypicker/mpvueCityPicker")]).then(t.bind(null,"cbb8"))},c=new i.default,u={data:function(){return{consignee:"",phone:"",addressId:"",province:"",details:"",addressList:{default:0},direction:"",cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",pickerText:"选择省/市/区",Default:!1}},components:{mpvueCityPicker:r},methods:{submit:function(){var s=this;return""==s.consignee?(e.showToast({icon:"none",title:"请填写联系人"}),!1):""==s.phone?(e.showToast({icon:"none",title:"请填写手机号"}),!1):/^1[3456789]\d{9}$/.test(s.phone)?"选择省/市/区"==s.pickerText?(e.showToast({icon:"none",title:"请选择省/市/区"}),!1):(s.pickerText=s.pickerText.split("-"),s.pickerText=s.pickerText[0]+s.pickerText[1]+s.pickerText[2],""==s.details?(e.showToast({icon:"none",title:"请填写详细地址"}),!1):(console.log(a(s.addressList.default," at pages\\address\\addressManage.vue:99")),void e.request({url:n.default.urlAdress+"user/address/addAddress",method:"get",dataType:"JSON",data:{PhoneNumber:s.phone,userId:2,Contact:s.consignee,HfConty:"中国"+s.pickerText,HfAddressDetail:s.details,HfCity:"天津市",HfDesc:"11111",HfProvince:"天津市",IsFaultAddress:s.addressList.default},success:function(s){console.log(a("添加收获地址",s," at pages\\address\\addressManage.vue:116")),200==s.data.status?(e.showToast({title:"添加成功"}),setTimeout(function(){e.navigateBack({delta:1})},1e3)):e.showToast({icon:"none",title:"添加失败"})}}))):(e.showToast({icon:"none",title:"手机号格式不正确"}),!1)},switchChange:function(e){this.addressList.default=e.detail,1==e.detail.value?(this.addressList.default=1,console.log(a(this.addressList.default," at pages\\address\\addressManage.vue:145"))):this.addressList.default=0,console.log(a(e.detail," at pages\\address\\addressManage.vue:149"))},showMulLinkageThreePicker:function(){console.log(a(this.showMulLinkageThreePicker," at pages\\address\\addressManage.vue:153")),this.$refs.mpvueCityPicker.show()},onConfirm:function(e){console.log(a(e," at pages\\address\\addressManage.vue:157"));var s=e.label;this.pickerText=s;var t=s.split("-");this.addressList.province=t[0],this.addressList.city=t[1],this.addressList.district=t[2]},chooseLocation:function(){var s=this;e.chooseLocation({success:function(e){s.direction=e.name,console.log(a("位置名称："+e.name," at pages\\address\\addressManage.vue:171")),console.log(a("详细地址："+e.address," at pages\\address\\addressManage.vue:172")),console.log(a("纬度："+e.latitude," at pages\\address\\addressManage.vue:173")),console.log(a("经度："+e.longitude," at pages\\address\\addressManage.vue:174")),s.addressList.longitude=e.longitude,s.addressList.latitude=e.latitude}})},confirm:function(){var s=this.addressData;s.name?/(^1[3|4|5|7|8][0-9]{9}$)/.test(s.mobile)?s.address?s.area?(this.$api.prePage().refreshList(s,this.manageType),this.$api.msg("地址".concat("edit"==this.manageType?"修改":"添加","成功")),setTimeout(function(){e.navigateBack()},800)):this.$api.msg("请填写门牌号信息"):this.$api.msg("请在地图选择所在位置"):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")}},onLoad:function(s){var t="新增收货地址";if("edit"===s.type){t="编辑收货地址",this.addressId=JSON.parse(s.data),console.log(a(this.addressId," at pages\\address\\addressManage.vue:217"));var i=this;i.addressId&&c.submit({request:{s:["USERADDRESSSELFGET",[{id:i.addressId}]]},callback:function(s){var t=d.default.checkError(s,"s",function(s,t){e.showToast({title:t,icon:"none"})});console.log(a(t," at pages\\address\\addressManage.vue:231")),i.addressList=t.s;var n=t.s.province,o=t.s.city,r=t.s.district;i.pickerText=n+"-"+o+"-"+r,1==i.addressList.default?i.Default=!0:i.Default=!1},error:function(e){d.default.err("err",e,1)}})}this.manageType=s.type,e.setNavigationBarTitle({title:t})}};s.default=u}).call(this,t("6e42")["default"],t("0de9")["default"])},f0c5:function(e,s,t){"use strict";var a=t("1c0c"),i=t.n(a);i.a}},[["729b","common/runtime","common/vendor"]]]);
});
require('pages/address/addressManage.js');
__wxRoute = 'pages/list1/list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/list1/list.js';

define('pages/list1/list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list1/list"],{"07bb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,o,r,a){try{var s=t[r](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,u,"next",t)}function u(t){r(a,i,o,s,u,"throw",t)}s(void 0)})}}var s=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"ad5c"))},u={components:{uniLoadMore:s},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[]}},onLoad:function(t){this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(){var t=a(i.default.mark(function t(e,n){var o,r;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:o=t.sent,r=o.filter(function(t){return t.pid==e}),r.forEach(function(t){var e=o.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=r;case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),loadData:function(){var e=a(i.default.mark(function e(){var n,o,r,a=this,s=arguments;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.length>0&&void 0!==s[0]?s[0]:"add",o=s.length>1?s[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return e.next=11,this.$api.json("goodsList");case 11:r=e.sent,"refresh"===n&&(this.goodsList=[]),1===this.filterIndex&&r.sort(function(t,e){return e.sales-t.sales}),2===this.filterIndex&&r.sort(function(t,e){return 1==a.priceOrder?t.price-e.price:e.price-t.price}),this.goodsList=this.goodsList.concat(r),this.loadingType=this.goodsList.length>20?"nomore":"more","refresh"===n&&(1==o?t.hideLoading():t.stopPullDownRefresh());case 18:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,n="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=i},n)},changeCate:function(e){this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var n=e.title;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=u}).call(this,n("6e42")["default"])},5753:function(t,e,n){"use strict";n.r(e);var i=n("07bb"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},"75ee":function(t,e,n){"use strict";var i=n("dc38"),o=n.n(i);o.a},dc38:function(t,e,n){},ea53:function(t,e,n){"use strict";(function(t){n("22dd"),n("921b");i(n("66fd"));var e=i(n("f078"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f078:function(t,e,n){"use strict";n.r(e);var i=n("f77f"),o=n("5753");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("75ee");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},f77f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}},[["ea53","common/runtime","common/vendor"]]]);
});
require('pages/list1/list.js');
__wxRoute = 'pages/goods/ratings/ratings';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/ratings/ratings.js';

define('pages/goods/ratings/ratings.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{"0e12":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{labelList:[{name:"全部",number:25,type:"all"},{name:"好评",number:23,type:"good"},{name:"中评",number:1,type:"secondary"},{name:"差评",number:1,type:"poor"},{name:"有图",number:12,type:"img"},{name:"视频",number:2,type:"video"},{name:"追加",number:2,type:"append"}],labelIndex:0,ratingsList:[{id:1,username:"大黑哥",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"good",first:{content:"好看，可以，不愧是专业的，才拿到手上就研究了半天才装上",img:["https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg","https://ae01.alicdn.com/kf/HTB1sL7hTjDpK1RjSZFrq6y78VXaw.jpg","https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2018-12-28/1083f3db90334f86e3fc3586b4472914.mp4"}]},append:{date:65,content:"用了一段时间，质量很好，体验很流畅，推荐购买",img:["https://ae01.alicdn.com/kf/HTB1dKZtTgHqK1RjSZFEq6AGMXXaS.jpg","https://ae01.alicdn.com/kf/HTB18h3oTmzqK1RjSZFjq6zlCFXap.jpg"],video:[{img:"https://ae01.alicdn.com/kf/HTB1AMEBTcfpK1RjSZFOq6y6nFXaK.jpg",path:"https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4"}]}},{id:2,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"poor",first:{content:"好评，看图",img:["https://ae01.alicdn.com/kf/HTB111soTbvpK1RjSZPiq6zmwXXaB.jpg","https://ae01.alicdn.com/kf/HTB1O2TRTmzqK1RjSZPcq6zTepXa4.jpg"],video:[]}},{id:3,username:"小黑狗",face:"/static/img/face.jpg",date:"2019-04-21",spec:"规格: XL",grade:"secondary",first:{content:"系统默认好评",img:[],video:[]}}],videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:""}},onReady:function(t){this.videoContext=e.createVideoContext("myVideo")},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onReachBottom:function(){e.showToast({title:"触发上拉加载"})},methods:{loadRatings:function(t){this.labelIndex=t,e.showToast({title:"切换评论列表"})},playVideo:function(e){this.videoSrc=e,this.$nextTick(function(){this.videoContext.requestFullScreen({direction:0})})},stopPlayVideo:function(){this.videoContext.pause()},videoPause:function(){this.videoSrc=""},viderFullscreen:function(e){e.detail.fullScreen?this.videoContext.play():this.stopPlayVideo()},showBigImg:function(t,n){e.previewImage({current:t,urls:n})}}};t.default=n}).call(this,n("6e42")["default"])},"3f5a":function(e,t,n){"use strict";var a=n("c9bc"),i=n.n(a);i.a},"8c3b":function(e,t,n){"use strict";n.r(t);var a=n("dba9"),i=n("fcd1");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("3f5a");var c=n("2877"),s=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},c9bc:function(e,t,n){},cd8e:function(e,t,n){"use strict";(function(e){n("22dd"),n("921b");a(n("66fd"));var t=a(n("8c3b"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},dba9:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},fcd1:function(e,t,n){"use strict";n.r(t);var a=n("0e12"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a}},[["cd8e","common/runtime","common/vendor"]]]);
});
require('pages/goods/ratings/ratings.js');
__wxRoute = 'pages/list1/product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/list1/product.js';

define('pages/list1/product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list1/product"],{"075f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"1f0e":function(t,e,i){"use strict";i.r(e);var n=i("075f"),s=i("b94d");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("988c");var c=i("2877"),r=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"6fa6":function(t,e,i){"use strict";(function(t){i("22dd"),i("921b");n(i("66fd"));var e=n(i("1f0e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},8176:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i,n,s,a,c){try{var r=t[a](c),o=r.value}catch(d){return void i(d)}r.done?e(o):Promise.resolve(o).then(n,s)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var c=t.apply(e,i);function r(t){a(c,n,s,r,o,"next",t)}function o(t){a(c,n,s,r,o,"throw",t)}r(void 0)})}}var r=function(){return i.e("components/share").then(i.bind(null,"cf1a"))},o={components:{share:r},data:function(){return{specClass:"none",specSelected:[],favorite:!0,shareList:[],imgList:[{src:"https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"},{src:"https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"},{src:"https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg"}],desc:'\n\t\t\t\t<div style="width:100%">\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t\t<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />\n\t\t\t\t</div>\n\t\t\t',specList:[{id:1,name:"尺寸"},{id:2,name:"颜色"}],specChildList:[{id:1,pid:1,name:"XS"},{id:2,pid:1,name:"S"},{id:3,pid:1,name:"M"},{id:4,pid:1,name:"L"},{id:5,pid:1,name:"XL"},{id:6,pid:1,name:"XXL"},{id:7,pid:2,name:"白色"},{id:8,pid:2,name:"珊瑚粉"},{id:9,pid:2,name:"草木绿"}]}},onLoad:function(){var t=c(n.default.mark(function t(e){var i,s=this;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.id,i&&this.$api.msg("点击了".concat(i)),this.specList.forEach(function(t){var e=!0,i=!1,n=void 0;try{for(var a,c=s.specChildList[Symbol.iterator]();!(e=(a=c.next()).done);e=!0){var r=a.value;if(r.pid===t.id){s.$set(r,"selected",!0),s.specSelected.push(r);break}}}catch(o){i=!0,n=o}finally{try{e||null==c.return||c.return()}finally{if(i)throw n}}}),t.next=5,this.$api.json("shareList");case 5:this.shareList=t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),methods:{toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(t,e){var i=this,n=this.specChildList;n.forEach(function(t){t.pid===e&&i.$set(t,"selected",!1)}),this.$set(n[t],"selected",!0),this.specSelected=[],n.forEach(function(t){!0===t.selected&&i.specSelected.push(t)})},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){this.favorite=!this.favorite},buy:function(){t.navigateTo({url:"/pages/order/createOrder"})},stopPrevent:function(){}}};e.default=o}).call(this,i("6e42")["default"])},"988c":function(t,e,i){"use strict";var n=i("a8c2"),s=i.n(n);s.a},a8c2:function(t,e,i){},b94d:function(t,e,i){"use strict";i.r(e);var n=i("8176"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}},[["6fa6","common/runtime","common/vendor"]]]);
});
require('pages/list1/product.js');
__wxRoute = 'pages/goods/goods-list/goods-list1';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods-list/goods-list1.js';

define('pages/goods/goods-list/goods-list1.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods-list/goods-list1"],{"61cb":function(o,t,e){"use strict";e.r(t);var i=e("b0a9"),s=e("ff16");for(var d in s)"default"!==d&&function(o){e.d(t,o,function(){return s[o]})}(d);e("67de");var a=e("2877"),n=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=n.exports},"67de":function(o,t,e){"use strict";var i=e("cb47"),s=e.n(i);s.a},6902:function(o,t,e){"use strict";(function(o){e("22dd"),e("921b");i(e("66fd"));var t=i(e("61cb"));function i(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("6e42")["createPage"])},"9f2c":function(o,t,e){"use strict";(function(o,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=d(e("102a"));function d(o){return o&&o.__esModule?o:{default:o}}var a={data:function(){return{id:"",rcommendData:{},name:"",goodsList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(t){this.id=t.id,this.name=t.name,this.recommend(),o.setNavigationBarTitle({title:t.name}),this.name=t.name},onPageScroll:function(o){o.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var t=this;setTimeout(function(){t.reload(),o.stopPullDownRefresh()},1e3)},onReachBottom:function(){o.showToast({title:"触发上拉加载"});var t=this.goodsList.length;if(t>=40)return this.loadingText="到底了",!1;this.loadingText="正在加载...";for(var e=this.goodsList[t-1].goods_id,i=1;i<=10;i++){var s=e+i,d={goods_id:s,img:"/static/img/goods/p"+(s%10==0?10:s%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(d)}},methods:{recommend:function(){console.log(i(1111111," at pages\\goods\\goods-list\\goods-list1.vue:116"));var t=this;console.log(i(s.default.getFile+"/categoryId"," at pages\\goods\\goods-list\\goods-list1.vue:118")),o.request({url:s.default.getFile+"/categoryId",method:"get",data:{categoryId:t.id},success:function(o){console.log(i("热门推荐",o," at pages\\goods\\goods-list\\goods-list1.vue:129")),t.rcommendData=o.data.data;for(var e=0;e<t.rcommendData.length;e++)t.rcommendData[e].img=s.default.getFile+"/getFile?fileId="+t.rcommendData[e].hfGoodsPictureId;console.log(i(t.rcommendData," at pages\\goods\\goods-list\\goods-list1.vue:134"))}})},reload:function(){console.log(i("reload"," at pages\\goods\\goods-list\\goods-list1.vue:139"));this.goodsList=[];for(var o=0,t=1;t<=10;t++){var e=o+t,s={goods_id:e,img:"/static/img/goods/p"+(e%10==0?10:e%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(s)}},toGoods:function(t){o.showToast({title:"商品"+t.goods_id,icon:"none"}),o.navigateTo({url:"../goods"})},select:function(t){var e=this.orderbyList[t].text+"排序 ";if(this.orderbyList[t].orderbyicon){var i=0==this.orderbyList[t].orderby?"升序":"降序";this.orderbyList[t].selected&&(i=0==this.orderbyList[t].orderby?"降序":"升序",this.orderbyList[t].orderby=0==this.orderbyList[t].orderby?1:0),e+=i}this.orderbyList[t].selected=!0;for(var s=this.orderbyList.length,d=0;d<s;d++)d!=t&&(this.orderbyList[d].selected=!1);o.showToast({title:e,icon:"none"})}}};t.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},b0a9:function(o,t,e){"use strict";var i=function(){var o=this,t=o.$createElement;o._self._c},s=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s})},cb47:function(o,t,e){},ff16:function(o,t,e){"use strict";e.r(t);var i=e("9f2c"),s=e.n(i);for(var d in i)"default"!==d&&function(o){e.d(t,o,function(){return i[o]})}(d);t["default"]=s.a}},[["6902","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods-list/goods-list1.js');
__wxRoute = 'pages/goods/goods-list/goods-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods-list/goods-list.js';

define('pages/goods/goods-list/goods-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods-list/goods-list"],{"20d9":function(o,t,e){"use strict";e.r(t);var i=e("a9ba"),s=e.n(i);for(var d in i)"default"!==d&&function(o){e.d(t,o,function(){return i[o]})}(d);t["default"]=s.a},2448:function(o,t,e){"use strict";e.r(t);var i=e("ae68"),s=e("20d9");for(var d in s)"default"!==d&&function(o){e.d(t,o,function(){return s[o]})}(d);e("4e53");var a=e("2877"),n=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=n.exports},"35d6":function(o,t,e){"use strict";(function(o){e("22dd"),e("921b");i(e("66fd"));var t=i(e("2448"));function i(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("6e42")["createPage"])},"4e53":function(o,t,e){"use strict";var i=e("b04c"),s=e.n(i);s.a},a9ba:function(o,t,e){"use strict";(function(o,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=d(e("102a"));function d(o){return o&&o.__esModule?o:{default:o}}var a={data:function(){return{rcommendData:{},name:"",goodsList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(t){this.recommend(),o.setNavigationBarTitle({title:t.name}),this.name=t.name},onPageScroll:function(o){o.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var t=this;setTimeout(function(){t.reload(),o.stopPullDownRefresh()},1e3)},onReachBottom:function(){o.showToast({title:"触发上拉加载"});var t=this.goodsList.length;if(t>=40)return this.loadingText="到底了",!1;this.loadingText="正在加载...";for(var e=this.goodsList[t-1].goods_id,i=1;i<=10;i++){var s=e+i,d={goods_id:s,img:"/static/img/goods/p"+(s%10==0?10:s%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(d)}},methods:{recommend:function(){console.log(i(1111111," at pages\\goods\\goods-list\\goods-list.vue:113"));var t=this;o.request({url:s.default.getFile+"/categoryId",method:"get",data:{goodName:t.name},success:function(o){console.log(i("热门推荐",o," at pages\\goods\\goods-list\\goods-list.vue:125")),t.rcommendData=o.data.data;for(var e=0;e<t.rcommendData.length;e++)t.rcommendData[e].img=s.default.getFile+"/getFile?fileId="+t.rcommendData[e].hfGoodsPictureId;console.log(i(t.rcommendData," at pages\\goods\\goods-list\\goods-list.vue:130"))}})},reload:function(){console.log(i("reload"," at pages\\goods\\goods-list\\goods-list.vue:135"));this.goodsList=[];for(var o=0,t=1;t<=10;t++){var e=o+t,s={goods_id:e,img:"/static/img/goods/p"+(e%10==0?10:e%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(s)}},toGoods:function(t){o.showToast({title:"商品"+t.goods_id,icon:"none"}),o.navigateTo({url:"../goods"})},select:function(t){var e=this.orderbyList[t].text+"排序 ";if(this.orderbyList[t].orderbyicon){var i=0==this.orderbyList[t].orderby?"升序":"降序";this.orderbyList[t].selected&&(i=0==this.orderbyList[t].orderby?"降序":"升序",this.orderbyList[t].orderby=0==this.orderbyList[t].orderby?1:0),e+=i}this.orderbyList[t].selected=!0;for(var s=this.orderbyList.length,d=0;d<s;d++)d!=t&&(this.orderbyList[d].selected=!1);o.showToast({title:e,icon:"none"})}}};t.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},ae68:function(o,t,e){"use strict";var i=function(){var o=this,t=o.$createElement;o._self._c},s=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s})},b04c:function(o,t,e){}},[["35d6","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods-list/goods-list.js');
__wxRoute = 'pages/goods/goods';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods/goods.js';

define('pages/goods/goods.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods","components/goodsList/goodslist","components/uni-load-more/uni-load-more"],{"0935":function(t,e,o){},"15a4":function(t,e,o){"use strict";o.r(e);var s=o("d70d"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"38fb":function(t,e,o){"use strict";o.r(e);var s=o("9d54"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"51f1":function(t,e,o){"use strict";o.r(e);var s=o("db03"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"69dc":function(t,e,o){},"82a1":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a})},8555:function(t,e,o){},8808:function(t,e,o){"use strict";o.r(e);var s=o("cf79"),a=o("15a4");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("fdec");var i=o("2877"),c=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},"9d54":function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={props:{goodsList:{type:Array,required:!0}},data:function(){return{}},methods:{godetail:function(e){console.log(t(e," at components\\goodsList\\goodslist.vue:33")),o.navigateTo({url:"../goods/goods?id="+this.goodsList[e].id})}}};e.default=s}).call(this,o("0de9")["default"],o("6e42")["default"])},abd6:function(t,e,o){"use strict";var s=o("69dc"),a=o.n(s);a.a},ad5c:function(t,e,o){"use strict";o.r(e);var s=o("82a1"),a=o("51f1");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("e179");var i=o("2877"),c=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},b69d:function(t,e,o){"use strict";o.r(e);var s=o("d7f4"),a=o("38fb");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("abd6");var i=o("2877"),c=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,"5e310050",null);e["default"]=c.exports},ba58:function(t,e,o){"use strict";(function(t){o("22dd"),o("921b");s(o("66fd"));var e=s(o("8808"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},cf79:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a})},d70d:function(t,e,o){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(o("b69d")),i(o("ad5c"));var a,n=i(o("102a"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var r={data:function(){var t;return t={pics:{},detailData:{},id:0,datapay:"",orderId:"",statusHeight:20,current:0,mode:"round",swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"}],currentSwiper:0,categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"}],Promotion:[],goodsList:[{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商商品名称商品名称商品名称商品名",price:144,slogan:13526}],goods:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称",price:168,slogan:1558},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名",price:167,slogan:1038}],status:"loading",beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,showBack:!0},c(t,"swiperList",[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}]),c(t,"currentSwiper",0),c(t,"anchorlist",[]),c(t,"selectAnchor",0),c(t,"serviceClass",""),c(t,"specClass",""),c(t,"shareClass",""),c(t,"goodsData",{id:1,name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",price:"127.00",number:1,service:[{name:"正品保证",description:"此商品官方保证为正品"},{name:"极速退款",description:"此商品享受退货极速退款服务"},{name:"7天退换",description:"此商品享受7天无理由退换服务"}],spec:["XS","S","M","L","XL","XXL"],comment:{number:102,userface:"../../static/img/face.jpg",username:"大黑哥",content:"很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！"}}),c(t,"selectSpec",null),c(t,"isKeep",!1),c(t,"descriptionStr",'<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'),t},onLoad:function(e){console.log(t(e," at pages\\goods\\goods.vue:297")),this.id=e.id,this.detail(),console.log(t(e.cid," at pages\\goods\\goods.vue:306"))},onReady:function(){this.calcAnchor()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){s.showToast({title:"触发上拉加载"})},mounted:function(){},methods:(a={detail:function(){var e=this;console.log(t(n.default.getFile+"/byGoodsId?goodsId="+this.id," at pages\\goods\\goods.vue:334")),s.request({url:n.default.getFile+"/byGoodsId",method:"get",data:{goodsId:this.id},success:function(o){console.log(t(o," at pages\\goods\\goods.vue:343")),e.detailData=o.data.data,console.log(t(n.default.getFile+"/pictures"," at pages\\goods\\goods.vue:345")),s.request({url:n.default.getFile+"/pictures",method:"get",data:{goodsId:e.detailData.id},success:function(o){console.log(t(o," at pages\\goods\\goods.vue:355")),e.pics=o.data.data;for(var s=0;s<e.pics.length;s++)e.pics[s].img=n.default.getFile+"/getFile?fileId="+e.pics[s].fileId;console.log(t(e.pics," at pages\\goods\\goods.vue:360"))}})}})},buy:function(){var e=this;console.log(t(111,n.default.url+"order/creat"," at pages\\goods\\goods.vue:369")),s.request({url:n.default.url+"order/creat",method:"get",dataType:"JSON",data:{userId:1,userAddressId:1,googsId:3,logisticsOrderName:1,respId:3,logisticsOrdersId:1,logisticsCompany:1,hfDesc:1,hfTax:1,purchasePrice:1,purchaseQuantity:1,distribution:1,payStatus:1,orderType:1,amount:1,hfMemo:1,hfRemark:1,payMethodName:1,ordersid:57,payMethodType:1},success:function(o){console.log(t("提交订单1",o," at pages\\goods\\goods.vue:399")),e.orderId=o.data.data[0].ordersId,console.log(t(e.orderId," at pages\\goods\\goods.vue:401"))}})},swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){s.navigateTo({url:"../msg/msg"})},toChat:function(){s.navigateTo({url:"../msg/chat/chat?name=客服008"})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep},joinCart:function(){if(null==this.selectSpec)return this.showSpec(function(){s.showToast({title:"已加入购物车"})});s.showToast({title:"已加入购物车"})}},c(a,"buy",function(){var t=this;if(null==this.selectSpec)return this.showSpec(function(){t.toConfirmation()});this.toConfirmation()}),c(a,"toRatings",function(){s.navigateTo({url:"ratings/ratings"})}),c(a,"toConfirmation",function(){var t=[],e={id:this.goodsData.id,img:"../../static/img/goods/p1.jpg",name:this.goodsData.name,spec:"规格:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};t.push(e),s.setStorage({key:"buylist",data:t,success:function(){s.navigateTo({url:"../order/confirmation"})}})}),c(a,"showComments",function(t){}),c(a,"setSelectSpec",function(t){this.selectSpec=t}),c(a,"sub",function(){this.goodsData.number<=1||this.goodsData.number--}),c(a,"add",function(){this.goodsData.number++}),c(a,"toAnchor",function(t){this.selectAnchor=t,s.pageScrollTo({scrollTop:this.anchorlist[t].top,duration:200})}),c(a,"calcAnchor",function(){var t=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var e=s.createSelectorQuery().select("#comments");e.boundingClientRect(function(e){var o=0;o=plus.navigator.getStatusbarHeight();var a=s.upx2px(100);t.anchorlist[1].top=e.top-a-o,t.anchorlist[2].top=e.bottom-a-o}).exec()}),c(a,"back",function(){s.navigateBack()}),c(a,"showService",function(){console.log(t("show"," at pages\\goods\\goods.vue:559")),this.serviceClass="show"}),c(a,"hideService",function(){var t=this;this.serviceClass="hide",setTimeout(function(){t.serviceClass="none"},200)}),c(a,"showSpec",function(e){console.log(t("show"," at pages\\goods\\goods.vue:571")),this.specClass="show",this.specCallback=e}),c(a,"specCallback",function(){}),c(a,"hideSpec",function(){var t=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){t.specClass="none"},200)}),c(a,"discard",function(){}),a)};e.default=r}).call(this,o("0de9")["default"],o("6e42")["default"])},d7f4:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a})},db03:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=s},e179:function(t,e,o){"use strict";var s=o("0935"),a=o.n(s);a.a},fdec:function(t,e,o){"use strict";var s=o("8555"),a=o.n(s);a.a}},[["ba58","common/runtime","common/vendor"]]]);
});
require('pages/goods/goods.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);


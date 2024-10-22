import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductstoMyCart } from '../redux/mycartslice';
import { useNavigation } from '@react-navigation/native';
import { increaseQty } from '../redux/myproductslice';




const MyProducts = () => {
    const dispatch=useDispatch();
    const myProduct=useSelector(state=>state.product)
    const myCartItem=useSelector(state=>state.cart)
    console.log('added product',myProduct.length)
    console.log('added product',myCartItem.length)
    const navigation=useNavigation();
    const getTotal=()=>
    {
        let total=0;
        myCartItem.map(item=>{
            total=total+item.qty*item.price;

        })
        return total;
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 60, flexDirection: 'row', alignItems: 'center', paddingLeft: 20, backgroundColor: '#fff', elevation: 1,marginTop:40 }}>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '700' }}>
                    Welcome to Store
                </Text>
            </View>
            <FlatList data={myProduct} renderItem={({ item, index }) => {
                return (
                    <View style={{ width: '94%', height: 120, backgroundColor: '#fff', alignSelf: 'center', marginTop: 10, borderRadius: 10, elevation: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10, }}>
                        <Image source={{ uri: item.image }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16, color: '#000' }}>
                                {item.name.substring(0, 20) + '...'}
                            </Text>
                            <Text style={{ fontWeight: '600' }}>
                                {item.brand}
                            </Text>
                            <Text style={{ color: 'green', fontWeight: '600', fontSize: 16 }}>
                                {'₹' + item.price}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                {
                                    item.qty == 0 ? (<TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 7, height: 27, justifyContent: "center", alignItems: 'center', paddingRight: 10, paddingLeft: 10, }} onPress={()=>{dispatch(addProductstoMyCart(item))
                                        dispatch(increaseQty(item.id));
                                    }}>
                                        <Text style={{ color: 'white' }}>Add To Cart</Text>
                                    </TouchableOpacity>) : null
                                }
                                {
                                    item.qty == 0 ? null : (<TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 7, height: 27, justifyContent: "center", alignItems: 'center', paddingRight: 10, paddingLeft: 10, marginLeft: 10 }} onPress={()=>
                                    {
                                        if(item.qty>1)
                                            {
                                                dispatch(removeMyCartItem(item))
                                                dispatch(decreaseQty(item.id));
                                            }
                                            else{
                                                dispatch(deleteMyCartItem(item.id));
                                                dispatch(decreaseQty(item.id));
                                            }
                                    }
                                    }>
                                        <Text style={{ color: 'white' }}>-</Text>
                                    </TouchableOpacity>)
                                }
                                {
                                 item.qty == 0 ? null : (<Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '600' }}>{item.qty}</Text>)   
                                }
                                
                                {
                                 item.qty == 0 ? null : (<TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 7, height: 27, justifyContent: "center", alignItems: 'center', paddingRight: 10, paddingLeft: 10, marginLeft: 10 }} onPress={()=>
                                 {
                                    dispatch(addProductstoMyCart(item));
                                    dispatch(increaseQty(item.id));
                                 }
                                 }>
                                    <Text style={{ color: 'white' }}>+</Text>
                                </TouchableOpacity>)   
                                }
                                
                            </View>
                        </View>

                    </View>
                )
            }} />
            {
                myCartItem.length>0?(<View style={{width:'100%',height:90,backgroundColor:'#fff',position:'absolute',bottom:0,flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>{'Added Items'+'('+myCartItem.length+')'}</Text>
                        <Text>{'Total:'+getTotal()}</Text>
                    </View>
                    <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={{width:'70%',height:35,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:7}} onPress={()=>{navigation.navigate("MyCart")}} >
                            <Text style={{color:'#fff'}}>View Cart</Text>
                        </TouchableOpacity>
    
                    </View>
                </View>):null
            }
            
        </View>
    )
}

export default MyProducts;

const styles = StyleSheet.create({})
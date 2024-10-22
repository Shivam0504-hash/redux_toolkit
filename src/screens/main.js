import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppNavigator from '../navigation/appnavigator';
import { addMyProducts } from '../redux/myproductslice';
let items = [
    {
        id: 0,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
        name: 'Nike Mercurial Vapor 13 Elite FG',
        brand: 'NIKE',
        price: 2500,
        qty: 0,
    },
    {
        id: 1,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg',
        name: 'Nike React Infinity Run Flyknit',
        brand: 'NIKE',
        price: 2500,
        qty: 0,
    },
    {
        id: 2,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg',
        name: 'Nike Air Zoom Pegasus 37',
        brand: 'NIKE',
        price: 5000,
        qty: 0,
    },
    {
        id: 3,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg',
        name: 'Nike Joyride Run Flyknit',
        brand: 'NIKE',
        price: 2500,
        qty: 0,
    },
    // {
    //     id: 4,
    //     image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
    //     name: 'Nike React Infinity Run Flyknit',
    //     brand: 'NIKE',
    //     price: 2500,
    //     qty: 0,
    // },
]

const Main = () => {
    const dispatch=useDispatch();
    const products=useSelector(state=>state.product)
    useEffect(()=>{
        
            items.map(item=>{
                dispatch(addMyProducts(item));
            });
        
    },[])
  return (
    <AppNavigator/>
  )
}

export default Main;

const styles = StyleSheet.create({})
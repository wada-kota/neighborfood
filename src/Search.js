import React, { useEffect, useState } from 'react';
import Supplement from './supplement';

const Search = () => {

// 定数の宣言
    //recruit API key
    const key = 'fd53cffdf4c03248';
    //位置情報用state
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    
    function successCallback(position){
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    };

    function errorCallback(error){
        alert("位置情報が取得できませんでした");
    };

    //飲食店情報の取得（CORSエラー発生中）
    useEffect(() => {
        console.log(latitude);
        console.log(longitude);
        fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${key}&lat=${latitude}&lng=${longitude}&range=3&order=4&format=json`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
         .catch(error => {
             console.error(error)
         })
         }, [latitude, longitude]);

    return(
        <div className='searchWrap'>
             <button className='searchButton' onClick={getPosition}>近くのグルメを探す</button>
             <Supplement />
        </div>
    )
}

export default Search;
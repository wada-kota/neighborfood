import React, { useState } from 'react';
import Supplement from './supplement';

const Search = () => {

// 定数の宣言
    //recruit API key
    const key = 'fd53cffdf4c03248';
    //位置情報用state
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    //店舗情報用state
    const [shop, setShop] = useState('');

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          function(error) {
            alert("位置情報が取得できませんでした");
          }
        );
    }

    //CORSエラーはプロキシサーバーを経由することで解消
    const getShop = async () => {
        await fetch(`https://mighty-woodland-18130.herokuapp.com/https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${key}&lat=${latitude}&lng=${longitude}&range=3&order=4&format=json`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setShop(data)
        })
         .catch(error => {
            console.log(error)
         })
         };

        //  useEffect(() => {
        //     fetch(`https://mighty-woodland-18130.herokuapp.com/https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${key}&lat=${latitude}&lng=${longitude}&range=3&order=4&format=json`)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         setShop(data)
        //     })
        //      .catch(error => {
        //          console.error(error)
        //      })
        //      }, [latitude, longitude]);

    const onClick = async () => {
        getPosition();
        await getShop();
        console.log(shop);
    };

    return(
        <div className='searchWrap'>
             <button className='searchButton' onClick={onClick}>近くのグルメを探す</button>
             <Supplement />
        </div>
    )
}

export default Search;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { YoutubeItem} from './YoutubeItem';

type Props = {
    solutionType:number,
}

const UserInterface = ({solutionType}:Props) => {
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState<YoutubeItem[]>([])

    useEffect(() => {
        async function getItems(){
            const response = axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=Missing Number Leetcode&key=AIzaSyCngzeN1kuMdyNlH72i_9mlaeLglCjIbT8&type=video&maxResults=5')
            const items = (await response).data.items

            let listItems = []                
            for (let i = 0; i < 5; i++) {
                listItems[i] = new YoutubeItem(items[i].id.videoId.toString(), items[i].snippet.title.toString(),
                items[i].snippet.thumbnails.medium.url.toString(), items[i].snippet.channelTitle.toString(), items[i].snippet.description.toString())
            }
            return listItems
        }
        getItems().then(res => setData(res))
        setLoading(false)
    }, [])
    if (loading){
        return <div>Loading...</div>
    }
    
    const handleClick = (item:YoutubeItem)=> {
        var newURL = "https://www.youtube.com/watch?v=" + item.videoId;
        chrome.tabs.create({ url: newURL });
    }

    const CardListItem = (props: YoutubeItem) => {
        const item = props;
        return (
          <li>
                <div className='flex justify-center m-auto' onClick={()=> handleClick(props)}>
                    <div className='flex'>
                        <img src ={props.pictureURL} className='w-[60px] h-[40px]'></img>
                    </div>
                    <div className="w-[350px] h-[40px] bg-slate-700 flex-nowrap truncate break-words hover:bg-yellow-600">
                        <div className='pl-1'>
                            <p>
                            <strong>{item.channelTitle}</strong>
                            </p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
          </li>
        );
      };
      
      const CardList = () => {
        return (
          <ul className='flex flex-col flex-wrap gap-y-3	'>
            {data?.map(item => {
              return <CardListItem videoId={item.videoId} title={item.title} pictureURL={item.pictureURL} 
                channelTitle={item.channelTitle} description={item.description} key={item.videoId} />;
            })}
          </ul>
        );
      };

    if(solutionType == 0){
    //Display video solutions
        return (
            <div className='w-[550px] h-[420px] border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
                <div>
                    <CardList/>
                </div>
            </div>

        );

    }else{
    //display written Solution grabbed from chatGPT
        return (
            <div className='w-[550px] h-[420px] border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
                <p>written</p>
            </div>

        );

    }
};

export default UserInterface;

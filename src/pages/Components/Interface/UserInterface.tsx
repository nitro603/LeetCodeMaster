import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { YoutubeItem} from './YoutubeItem';
import TopSection from '../Header/TopSection';
import Scrollbars from 'react-custom-scrollbars-2';


type Props = {
    solutionType:number,
    problem:string
}

const UserInterface = ({solutionType,problem}:Props) => {
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState<YoutubeItem[]>([])
    const[text,setText]=useState()

    useEffect(() => {
        async function getItems(){
            const response = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${problem} Leetcode&key=${process.env.YOUTUBE}&type=video&maxResults=5`)
            const items = (await response).data.items
            console.log(items)
            let listItems = []                
            for (let i = 0; i < 5; i++) {
                listItems.push(new YoutubeItem(
            items[i].id.videoId.toString(),
            items[i].snippet.title.toString(),
            items[i].snippet.thumbnails.medium.url.toString(),
            items[i].snippet.channelTitle.toString(),
            items[i].snippet.description.toString()
          ));
            }
            return listItems
        }
        getItems().then(res => setData(res))
        
        async function getCompletion() {
        
            const response = await axios.post('https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo', 
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a helpful assistant.'
                        },
                        {
                            role: 'user',
                            content: `Create a code solution to the ${problem} problem on Leetcode. Make sure to add an explanation to the code.`
                        }
                    ],
                    max_tokens: 700, 
                    temperature: 0.7
                },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.CHATGPT}`,
                        'Content-Type': 'application/json'
                        }
                }
            );
            
    
            const data = response.data.choices[0].message.content;
            return data;
        } 
        
        
        getCompletion().then(res => setText(res));
        setLoading(false);
    }, [])

    if (loading){
        return <div>Loading...</div>
    }
    
    const handleClick = (item:YoutubeItem)=> {
        var newURL = "https://www.youtube.com/watch?v=" + item.videoId
        chrome.tabs.create({ url: newURL })
    }

    const CardListItem = (props: YoutubeItem) => {
        const item = props
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
        )
    }
      
    const CardList = () => {
        return (
            <ul className='flex flex-col flex-wrap gap-y-3'>
                {data?.map(item => {
                    return <CardListItem videoId={item.videoId} title={item.title} pictureURL={item.pictureURL} 
                    channelTitle={item.channelTitle} description={item.description} key={item.videoId}/>
                })}
            </ul>
        )
    }

    if(solutionType == 0){
        return (
            <div className='w-[550px] h-[420px] border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
                <TopSection problem={problem}></TopSection>
                <div className='pt-8'>
                    <CardList/>
                </div>
            </div>
        )
    }else{
        return (
            <div className='flex-col w-[550px] h-[420px] border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
                <TopSection problem={problem}></TopSection>
                <div className='flex w-[500px] h-[325px] mt-6 mx-auto bg-slate-300 whitespace-pre-wrap flex-wrap overflow-auto'>
                    <Scrollbars style={{ width: 500, height: 325}}>
                        <p className='font-code'>{text}</p>
                    </Scrollbars>
                </div>
            </div>
        )
    }
}

export default UserInterface

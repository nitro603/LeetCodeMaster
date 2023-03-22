export class YoutubeItem{
  videoId: string;
  title: string;
  pictureURL: string;
  channelTitle: string;
  description:string;
  
  
  constructor(videoId: string, title: string, pictureURL: any, channelTitle: any, description:any){
    this.videoId = videoId
    this.title = title
    this.pictureURL = pictureURL
    this.channelTitle = channelTitle
    this.description = description
  }

}
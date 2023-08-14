import { Video } from "./Video";

const VideoList = ({ list }) => {
  
  return list.map(item => 
    <Video key={item.url} url={item.url} date={item.date} />
  );
}

export default VideoList
import TopicGetTemplate from "./TopicGetTemplate.js";
import useFetch from "./useFetch.js";


const TopicGet = () => {
    const { data, isPending, err } = useFetch('/pizzas')
    
    

  return (
    <div className="home">
      { err && <div>There is some error ....</div>}
      { isPending && <div>is loeading ....</div>}
      { data && <TopicGetTemplate messages={data} /> } 
    </div>
  );
}

export default TopicGet;
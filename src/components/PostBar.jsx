import axios from "axios";
import { useState } from "react"
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

const PostBar = () => {

 


  const [newsData , setNewsData] = useState([]);
  const [topic , setTopic] = useState("Corruption");
  const [country , setCountry] = useState("PK");

  const getNewsAxios = async (q, country) => {
    const apiKey = "pub_63098609a3378b785028af87b129ad054fc13";
    const url = `https://newsdata.io/api/1/news`;



    try {
      const response = await axios.get(`${url}?apikey=${apiKey}&q=${q}&country=${country}&language=en`);
      setNewsData(response.data.results);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
    
  };
  
  
  useEffect(() => {
    getNewsAxios(topic, country);
  }, [topic, country]);

  return(
    <div className="">

      <label htmlFor="topic">
        Topic:
        <select id="topic" value={topic} onChange={(e) => {setTopic(e.target.value)}}>
          <option value="Corruption">Corruption</option>
          <option value="Sport">Sport</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Politics">Politics</option>
          <option value="Terrorism">Terrorism</option>
        </select>
      </label>

      <br />

      <label htmlFor="country">
        Country:
        <select id="country" value={country} onChange={(e) => {setCountry(e.target.value)}}>
          <option value="PK">Pakistan</option>
          <option value="IN">India</option>
          <option value="US">USA</option>
        </select>
      </label>

      <div className="d-flex flex-column align-items-center gap-3">
        {newsData.map((e, i) => {
          return(
            <Card key={i} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e?.image_url} />
              <Card.Body>
                <Card.Title>{e?.title}</Card.Title>
                <Card.Text>
                  {e?.description}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={e?.source_url}>{e?.source_name}</Card.Link>
              </Card.Body>
            </Card>
          )
        })}
      </div>

    </div>
  )
















}

export default PostBar
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Bookticket.css'
import SeatLayout from '../SeatLayout/SeatLayout';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

export function Bookticket() {
    const { id } = useParams()
    console.log(id)
    const [theater, setCinemas] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/movies/theater/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(true)
                setCinemas(data)
                console.log(data)
            })
    }, [])

    console.log(theater)
    const formatTime = (dateTimeString) => {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'UTC' };
        return new Date(dateTimeString).toLocaleString('en-US', options);
    }; 
    const formatDate = (dateTimeString) => {
        const options = { day: 'numeric',year: 'numeric', month: 'long' };
        return new Date(dateTimeString).toLocaleString('en-US', options);
    };
    return (
        <div className="plan"
            style={{
                backgroundImage: 'url("https://st4.depositphotos.com/1020618/28685/i/450/depositphotos_286856426-stock-photo-cinema-concept-of-vintage-film.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',  // Adjust the background position as needed
                height: '100vh'
            }}
        >
            <Navbar />
            {loading ?
                (<div className="container">
                    <div className="panel">

                        <div className="timings">
                            <div className="left">
                                <div className="name">
                                    Screening :
                                    {theater.name}
                                </div>

                            </div>
                            <div className="right">
                                <div className="timeBox">
                                <p className="time">Realise Date: {formatDate(theater.movie_timing)}</p>
                                <p className="time">Show Time: {formatTime(theater.movie_timing)}</p>


                                </div>
                            </div>
                        </div>


                        <div className="seatPlan">
                            <p className="screenHeader">
                                <hr className="topLine" />
                                <h2>SCREEN</h2>
                                <hr />
                            </p>
                            <img
                                width="50%"
                                src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
                            ></img>
                            <p className="silverPlus">
                                <hr className="topLine" />
                                <h2>Plan You Seats</h2>
                                <hr />
                            </p>
                            <SeatLayout theaterdetails={theater} />
                            <div style={{height:"30px"}}>
                           
                        </div>
                            
                        </div>
                        



                    </div>
                    

                </div>)
                : (<Loader/>)
            }
            <div style={{height:'300px'}}></div>
        <Footer/>
        </div>
    )
}
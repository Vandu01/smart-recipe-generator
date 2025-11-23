import "./home.css";

export default function Home() {

  const items = [
    { img: "https://ik.imagekit.io/2xkwa8s1i/img/decor/Serving_Bowls/Polychrome/1.jpg?tr=w-1200" },
    { img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ];

  return (
    <div className="home-container">

      <div className="home-box">
        <h1>Welcome to Smart Recipe App</h1>
        <p>Use the menu above to Add, Search, Rate & Get Recommendations.</p>
      </div>

      <div className="home-cards">
        {items.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} />
          </div>
        ))}
      </div>

    </div>
  );
}

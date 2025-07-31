import React from "react"
import "./CommentsSection.css"

const dummyComments = [
  {
    id: 1,
    name: "Arjun Reddy",
    comment:
      "I was honestly surprised by the quality of this product. The material feels premium, and the stitching is neat. I’ve washed it twice already and it hasn’t faded or shrunk, which is amazing. Definitely a good purchase for the price. Also, the packaging was neat and eco-friendly. Highly recommended!",
    date: "July 15, 2025",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    comment:
      "First time ordering from this site and I’m thoroughly impressed. The delivery was super quick—arrived a day earlier than expected! The product looks exactly like the image shown, and the colors are vibrant. Fit is perfect and very comfortable. Will definitely shop again from here.",
    date: "July 16, 2025",
  },
  {
    id: 3,
    name: "Ravi Teja",
    comment:
      "Product is great overall, but I faced a slight delay in delivery due to weather conditions. Apart from that, the quality is good and it fits well. Customer support was very responsive and helped me track the order. Thanks for that. Would love to see more color options in the future.",
    date: "July 17, 2025",
  },
  {
    id: 4,
    name: "Anjali Sharma",
    comment:
      "Absolutely loved the look and feel of this product! The fabric is soft on the skin, and it’s perfect for everyday use. The design is minimal yet stylish, which I appreciate. Kudos to the team for maintaining quality and fast delivery. You guys are doing great!",
    date: "July 18, 2025",
  },
  {
    id: 5,
    name: "Karan Mehta",
    comment:
      "This is my second purchase and once again, it didn’t disappoint. The price point is perfect for the quality you’re offering. I would suggest adding more filter options for better navigation on the site, but other than that, everything went smoothly. Keep up the good work!",
    date: "July 19, 2025",
  },
  { id: 6, name: "Arun", comment: "Great quality product!" },
  { id: 7, name: "Meena", comment: "Delivery was super fast 🔥" },
  { id: 8, name: "Ravi", comment: "Looks exactly like the image." },
]

const CommentsSection = () => {
  return (
    <div className="comments-section">
      <h3>🗣️ Customer Reviews (9k) </h3>
      <hr className="line" />
      <ul>
        {dummyComments.map((each) => (
          <li key={each.id}>
            <h4 style={{ marginRight: "10px", marginBottom: "10px" }}>
              <span className="comment-capital-name">{each.name[0]}</span>
              {each.name}
            </h4>{" "}
            <p style={{ marginLeft: "30px" }}>{each.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommentsSection

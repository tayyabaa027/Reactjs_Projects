import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
const App = () => {
  const cards = [
  {
    id: 1,
    intro:
      "Prime customers that have access to bank credit and are satisfied with the current product.",
    status: "Satisfied",
    image: "https://i.pinimg.com/736x/6d/01/92/6d0192fa78473d823ddaa14a990f359f.jpg",
  },
  {
    id: 2,
    intro:
      "Prime customers who have access to bank credit but are looking for improved banking services.",
    status: "Unsatisfied",
    image: "https://i.pinimg.com/736x/0a/97/a1/0a97a1a47c7048184e64ca95777d82b5.jpg",
  },
  {
    id: 3,
    intro:
      "Customers with limited access to financial services who need flexible and affordable banking solutions.",
    status: "Underbanked",
    image: "https://i.pinimg.com/736x/0f/43/94/0f4394772878680c2096683aecfb524e.jpg",
  },
  {
    id: 4,
    intro:
      "Young professionals beginning their financial journey and seeking modern digital banking experiences.",
    status: "Emerging",
    image: "https://i.pinimg.com/736x/5a/88/d4/5a88d4a14ed75b158337481353d5a4ca.jpg",
  },
  {
    id: 5,
    intro:
      "Small business owners requiring quick financing, secure payments, and reliable banking support.",
    status: "Business",
    image: "https://i.pinimg.com/736x/73/b1/ec/73b1ec7ec04e15c6ed5ef5383d744c3e.jpg",
  },
  {
    id: 6,
    intro:
      "High-value customers interested in premium financial products, investment opportunities, and wealth management.",
    status: "Premium",
    image: "https://i.pinimg.com/736x/6d/01/92/6d0192fa78473d823ddaa14a990f359f.jpg",
  },
  {
    id: 7,
    intro:
      "New customers exploring banking services for the first time and comparing available financial products.",
    status: "New",
    image: "https://i.pinimg.com/736x/0a/97/a1/0a97a1a47c7048184e64ca95777d82b5.jpg",
  },
]; 
  return (
    <div>
      <Section1 user={cards}/>
      <Section2/>
    </div>
  )
}

export default App
